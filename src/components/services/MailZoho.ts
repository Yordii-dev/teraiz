import type { Message } from "@/types/message";

const apiUrl = import.meta.env.PUBLIC_API_URL;

async function MailSend({ origin, name, email, phone }: Message) {
  await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      origin,
      name,
      email,
      phone,
    }),
  });
}

export { MailSend };
