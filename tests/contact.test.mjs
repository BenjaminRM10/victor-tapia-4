import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  buildBrevoEmail,
  validateContactPayload,
} from "../app/api/contact/brevo.js";
import { getWhatsappUrl, siteConfig } from "../app/siteConfig.js";

describe("contact form validation", () => {
  it("accepts a complete contact request", () => {
    const payload = validateContactPayload({
      name: "Ana Lopez",
      email: "ana@example.com",
      phone: "55 1234 5678",
      interest: "Mayoreo",
      message: "Quiero informacion para comprar cafe por volumen.",
    });

    assert.equal(payload.name, "Ana Lopez");
    assert.equal(payload.email, "ana@example.com");
    assert.equal(payload.phone, "55 1234 5678");
    assert.equal(payload.interest, "Mayoreo");
    assert.equal(payload.message, "Quiero informacion para comprar cafe por volumen.");
  });

  it("rejects an invalid email address", () => {
    assert.throws(
      () =>
        validateContactPayload({
          name: "Ana Lopez",
          email: "ana",
          message: "Quiero informacion.",
        }),
      /email valido/,
    );
  });
});

describe("site contact configuration", () => {
  it("uses the sales email and WhatsApp number", () => {
    assert.equal(siteConfig.email, "ventas@mjorigen.com");
    assert.match(getWhatsappUrl(), /^https:\/\/wa\.me\/528445622822\?/);
  });
});

describe("brevo email payload", () => {
  it("builds a transactional email request for Brevo", () => {
    const email = buildBrevoEmail({
      contact: {
        name: "Ana Lopez",
        email: "ana@example.com",
        phone: "55 1234 5678",
        interest: "Mayoreo",
        message: "Quiero informacion para comprar cafe por volumen.",
      },
      toEmail: "ventas@mjorigen.com",
      senderEmail: "contacto@mjorigen.com",
      senderName: "MJ Origen",
    });

    assert.equal(email.sender.email, "contacto@mjorigen.com");
    assert.equal(email.to[0].email, "ventas@mjorigen.com");
    assert.equal(email.replyTo.email, "ana@example.com");
    assert.match(email.subject, /Nuevo contacto/);
    assert.match(email.htmlContent, /Ana Lopez/);
    assert.match(email.htmlContent, /Mayoreo/);
  });
});
