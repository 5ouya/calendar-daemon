import { GoogleAuth } from "google-auth-library";

export const auth = ({ keyFile, scopes }: IConfig["secrets"]) =>
  new GoogleAuth({
    keyFile,
    scopes,
  });
