import { GaxiosError } from "googleapis-common";

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRandomUsers({ list, size = 3 }: IConfig["users"]) {
  return shuffle(list).slice(0, size);
}

export function buildUserListString(users: string[]) {
  return `<ol>${users.map((user) => `<li>${user}</li>`)}</ol>`;
}

export function replaceUserList(
  description: string | null | undefined,
  userListString: string
) {
  const regExp = /Bildschirm Freigabe.+$/;

  const screenSharingText =
    `Bildschirm Freigabe  📺<br>${userListString}`.replace(/,/g, "");

  if (!description) {
    return screenSharingText;
  }

  if (!regExp.test(description)) {
    return `${description}<br>${screenSharingText}`;
  }

  return description.replace(regExp, screenSharingText);
}

export function handleError(error: unknown) {
  if (error instanceof GaxiosError) {
    console.error(`googleapis error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`${error.message}`);
  } else {
    console.error("an unknown error occurred");
  }
}
