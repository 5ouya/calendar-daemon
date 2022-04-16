interface IConfig {
  calendar: { calendarId: string };
  event: { eventTitle: string };
  secrets: { keyFile: string; scopes: [string] };
  users: { list: string[]; size?: number };
  cron: { expression: string };
}
