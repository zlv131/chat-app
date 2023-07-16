import axios from "axios";

export const URL: string = 'https://edu.strada.one/api/user';

export async function postEmail(URL: string, email: string) {
    const { data } = await axios.post(
        URL, {
            email: email,
        }, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }
    )

    console.log(data);
    return data;
}