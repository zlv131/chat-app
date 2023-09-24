import axios from "axios";

export const URL: string = "https://edu.strada.one/api/user";

export const URL_GET: string = "https://edu.strada.one/api/messages/";

export async function postEmail(URL: string, email: string) {
  const { data } = await axios.post(
    URL,
    {
      email: email,
    },
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    },
  );
  return data;
}

export async function changeNickname(
  URL: string,
  token: string,
  nickname: string,
) {
  const { data } = await axios.patch(
    URL,
    {
      name: nickname,
    },
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
}

export async function getHistoryChat(URL: string, token: string) {
  const { data } = await axios.get(URL, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  return data.messages;
}
