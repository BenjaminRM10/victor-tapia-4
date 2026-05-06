export const siteConfig = {
  logoUrl: "/images/mj-origen-logo.png",
  email: "ventas@mjorigen.com",
  whatsappNumber: "528445622822",
  address:
    "Blvd. Eulalio Gutiérrez Treviño #956 Local 16, Col. Las Praderas, Saltillo, Coahuila C.P. 25295",
  mapsQuery:
    "Blvd. Eulalio Gutiérrez Treviño 956 Local 16, Las Praderas, Saltillo, Coahuila 25295",
};

export function getWhatsappUrl() {
  const message = encodeURIComponent(
    "Hola MJ Origen, me interesa recibir información sobre su café.",
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}

export function getGoogleMapsEmbedUrl() {
  const query = encodeURIComponent(siteConfig.mapsQuery);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`;
  }

  return `https://www.google.com/maps?q=${query}&output=embed`;
}
