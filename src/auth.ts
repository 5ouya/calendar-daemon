import { google } from "googleapis";

export const auth = ({ keyFile, scopes }: IConfig["secrets"]) =>
  new google.auth.GoogleAuth({
    keyFile,
    scopes,
  });
