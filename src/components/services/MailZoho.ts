const apiUrl = import.meta.env.PUBLIC_API_URL;

async function MailSend({ name, email, phone }: any) {
  await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
    }),
  });
}

export { MailSend };
