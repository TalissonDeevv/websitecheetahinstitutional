import { Helmet } from "react-helmet-async";

interface OrganizationJsonLdProps {
  type?: "Organization" | "LocalBusiness";
}

export const OrganizationJsonLd = ({ type = "Organization" }: OrganizationJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Cheetah Solutions Network",
    alternateName: "Cheetah Solutions",
    url: "https://www.cheetahsolutions.com.br",
    logo: "https://i.ibb.co/ddJNt97/Cheetah-Network.png",
    description: "Software house especializada em desenvolvimento de software sob medida, sistemas web, aplicativos mobile, bots e automação.",
    foundingDate: "2020",
    sameAs: [
      "https://www.instagram.com/cheetahsolutionsbr",
      "https://www.linkedin.com/company/cheetahsolutionsbr",
      "https://github.com/cheetahsolutions"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Portuguese"]
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface WebPageJsonLdProps {
  title: string;
  description: string;
  url: string;
}

export const WebPageJsonLd = ({ title, description, url }: WebPageJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `https://www.cheetahsolutions.com.br${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Cheetah Solutions Network",
      url: "https://www.cheetahsolutions.com.br"
    },
    publisher: {
      "@type": "Organization",
      name: "Cheetah Solutions Network",
      logo: {
        "@type": "ImageObject",
        url: "https://i.ibb.co/ddJNt97/Cheetah-Network.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export const ServiceJsonLd = ({ name, description, url }: ServiceJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: `https://www.cheetahsolutions.com.br${url}`,
    provider: {
      "@type": "Organization",
      name: "Cheetah Solutions Network",
      url: "https://www.cheetahsolutions.com.br"
    },
    areaServed: {
      "@type": "Country",
      name: "Brazil"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface FAQJsonLdProps {
  questions: Array<{ question: string; answer: string }>;
}

export const FAQJsonLd = ({ questions }: FAQJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbJsonLd = ({ items }: BreadcrumbJsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.cheetahsolutions.com.br${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
