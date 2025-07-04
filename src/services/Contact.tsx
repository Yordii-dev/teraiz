async function Contact() {
  await fetch("localhost:300/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Juan Pérez",
      email: "juan@email.com",
      message: "Hola, quiero información 2025.",
    }),
  });
}

export { Contact };
