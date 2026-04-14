"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContact(formData) {
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const service = "Generelt";
  const message = clean(formData.get("message"));

  if (!name || !email || !message) {
    redirect("/?contact=missing#kontakt");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    redirect("/?contact=config#kontakt");
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      subject: `Ny henvendelse fra nettsiden (${service || "Generelt"})`,
      replyTo: email,
      text: [
        `Navn: ${name}`,
        `E-post: ${email}`,
        `Telefon: ${phone || "Ikke oppgitt"}`,
        `Tjeneste: ${service || "Generelt"}`,
        "",
        "Melding:",
        message,
      ].join("\n"),
    });

    redirect("/?contact=sent#kontakt");
  } catch {
    redirect("/?contact=error#kontakt");
  }
}
