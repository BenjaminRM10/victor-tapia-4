import {
  buildBrevoEmail,
  sendBrevoEmail,
  validateContactPayload,
} from "./brevo.js";

export async function POST(request) {
  try {
    const contact = validateContactPayload(await request.json());
    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.BREVO_TO_EMAIL;
    const senderEmail = process.env.BREVO_FROM_EMAIL;
    const senderName = process.env.BREVO_FROM_NAME || "MJ Origen";

    if (!apiKey || !toEmail || !senderEmail) {
      return Response.json(
        { error: "La integracion de contacto no esta configurada." },
        { status: 500 },
      );
    }

    const email = buildBrevoEmail({ contact, toEmail, senderEmail, senderName });
    await sendBrevoEmail({ apiKey, email });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: error.message || "No pudimos enviar tu mensaje." },
      { status: 400 },
    );
  }
}
