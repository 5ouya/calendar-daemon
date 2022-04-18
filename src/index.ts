import { calendar as googleCalendar } from "@googleapis/calendar";
import cron from "node-cron";

import config from "./config";
import { auth } from "./auth";
import CalendarEvents from "./calendar-events";
import {
  buildUserListString,
  getRandomUsers,
  replaceUserList,
  handleError,
} from "./helpers";

const {
  calendar: { calendarId },
  event: { eventTitle },
  secrets,
  users,
  cron: { expression },
} = config;

export const calendar = googleCalendar({
  version: "v3",
  auth: auth(secrets),
});

const calendarEvents = new CalendarEvents(calendar.events, calendarId);

async function main() {
  try {
    const {
      id,
      description: currentDescription,
      ...body
    } = await calendarEvents.getEvent({ eventTitle });

    if (!id) {
      console.error(`Event ${eventTitle} not found`);
      return;
    }

    const randomUsers = getRandomUsers(users);
    const userListString = buildUserListString(randomUsers);
    const newDescription = replaceUserList(currentDescription, userListString);

    await calendarEvents.updateEvent(id, {
      ...body,
      description: newDescription,
    });
    console.log(`Event ${eventTitle} succesfully updated`);
  } catch (error: unknown) {
    handleError(error);
  }
}

main();
cron.schedule(expression, main);
