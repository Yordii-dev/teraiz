const apiUrl = import.meta.env.VITE_API_URL;

async function MailSend({ email, description }: any) {
  await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "",
      email,
      message: description,
    }),
  });
}

export { MailSend };
