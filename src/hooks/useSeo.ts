import { useEffect } from "react";
import { company } from "../data/company";

export function useSeo() {
  useEffect(() => {
    // Title
    document.title = `${company.name} — Barbearia & Lounge Premium em ${company.city}, ${company.state}`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      `${company.name} em ${company.city}/${company.state}. Cortes modernos com visagismo masculino, barboterapia tradicional com toalha quente, lounge com chopp artesanal cortesia. Agende pelo WhatsApp!`
    );

    // JSON-LD LocalBusiness Schema
    const schemaId = "dombarba-jsonld";
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = schemaId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "BarberShop",
      name: company.name,
      description: company.tagline,
      telephone: company.whatsappNumber,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.city,
        addressRegion: company.state,
        postalCode: company.address.zip,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.0055,
        longitude: -46.8411,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: company.stats.rating,
        reviewCount: "1850",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:30",
          closes: "18:30",
        },
      ],
    };

    scriptTag.text = JSON.stringify(jsonLdData);
  }, []);
}
