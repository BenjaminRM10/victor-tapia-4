const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

export function validateContactPayload(payload) {
  const name = sanitize(payload?.name);
  const email = sanitize(payload?.email).toLowerCase();
  const phone = sanitize(payload?.phone || "");
  const interest = sanitize(payload?.interest || "Contacto general");
  const message = sanitize(payload?.message);

  if (sanitize(payload?.website)) {
    throw new Error("Solicitud invalida.");
  }

  if (name.length < 2) {
    throw new Error("Escribe tu nombre.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Escribe un email valido.");
  }

  if (message.length < 10) {
    throw new Error("Escribe un mensaje de al menos 10 caracteres.");
  }

  return { name, email, phone, interest, message };
}

export function buildBrevoEmail({ contact, toEmail, senderEmail, senderName }) {
  const safe = {
    name: escapeHtml(contact.name),
    email: escapeHtml(contact.email),
    phone: escapeHtml(contact.phone || "No proporcionado"),
    interest: escapeHtml(contact.interest),
    message: escapeHtml(contact.message).replaceAll("\n", "<br />"),
  };

  return {
    sender: {
      name: senderName || "MJ Origen",
      email: senderEmail,
    },
    to: [{ email: toEmail, name: "MJ Origen" }],
    replyTo: { email: contact.email, name: contact.name },
    subject: `Nuevo contacto MJ Origen: ${contact.interest}`,
    htmlContent: `
      <html>
        <body style="font-family: Arial, sans-serif; color: #2C1810;">
          <h1>Nuevo mensaje desde mjorigen.com</h1>
          <p><strong>Nombre:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Telefono:</strong> ${safe.phone}</p>
          <p><strong>Interés:</strong> ${safe.interest}</p>
          <p><strong>Mensaje:</strong><br />${safe.message}</p>
        </body>
      </html>
    `,
  };
}

export async function sendBrevoEmail({ apiKey, email }) {
  const response = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(email),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Brevo rechazo el envio: ${detail}`);
  }

  return response.json();
}

function sanitize(value) {
  return String(value ?? "").trim().slice(0, 2000);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
