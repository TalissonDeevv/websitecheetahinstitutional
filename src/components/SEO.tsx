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

const DEFAULT_OG_IMAGE = "https://i.ibb.co/ddJNt97/Cheetah-Network.png";
const BASE_URL = "https://www.cheetahsolutions.com.br";
const BASE_URL = "https://cheetahsolutions.com.br";

const SEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  ogUrl,
  canonical,
}: SEOProps) => {
  const path = ogUrl || "";
  const fullUrl = path ? `${BASE_URL}${path}` : BASE_URL;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : fullUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Cheetah Solutions Network" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:site" content="@cheetahsolutionsbr" />
    </Helmet>
  );
};

export default SEO;
