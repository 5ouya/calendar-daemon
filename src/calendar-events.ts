import { calendar_v3 } from "@googleapis/calendar";

type ICalendarEvent = calendar_v3.Schema$Event;
type ICalendarEvents = calendar_v3.Resource$Events;

export default class CalendarEvents {
  events: ICalendarEvents;
  calendarId: string;
  constructor(events: ICalendarEvents, calendarId: string) {
    this.events = events;
    this.calendarId = calendarId;
  }

  async getEvent({ eventTitle }: IConfig["event"]): Promise<ICalendarEvent> {
    const { data } = await this.events.list({
      calendarId: this.calendarId,
      q: eventTitle,
    });

    if (data.items) {
      const result = data.items[0];
      return result;
    }

    throw new Error(`Event ${eventTitle} not found`);
  }

  async updateEvent(id: string, requestBody: ICalendarEvent) {
    await this.events.update({
      calendarId: this.calendarId,
      eventId: id,
      requestBody,
    });
  }
}
