import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonical?: string;
}

// Imagem institucional oficial: fundo preto com guepardo (1200x630)
const DEFAULT_OG_IMAGE = "https://i.ibb.co/gFfPkTZ7/Cheetah-Solutions-Network.png";
const BASE_URL = "https://www.cheetahsolutions.com.br";

const SEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  ogUrl,
  canonical,
}: SEOProps) => {
  const path = ogUrl || "";
  const fullUrl = path ? `${BASE_URL}${path}` : BASE_URL;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : fullUrl;
  
  // SEMPRE usar a imagem institucional preta - ignora qualquer imagem passada
  const finalImage = DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph - Padronizado */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:secure_url" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Cheetah Solutions Network" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card - Padronizado */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content="@cheetahsolutionsbr" />
    </Helmet>
  );
};

export default SEO;
