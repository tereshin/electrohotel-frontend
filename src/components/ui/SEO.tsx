import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  json_ld?: object;
  no_index?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical_url,
  og_image = "/images/cover.jpg",
  og_type = "website",
  json_ld,
  no_index = false,
}: SeoProps) => {
  const full_title = title.includes("Электросталь") 
    ? title 
    : `${title} | Гостинничный комплекс «Электросталь»`;

  const base_url = "https://electrohotel.ru";
  const full_canonical_url = canonical_url ? `${base_url}${canonical_url}` : base_url;
  const full_og_image = og_image.startsWith("http") ? og_image : `${base_url}${og_image}`;

  return (
    <Helmet>
      <title>{full_title}</title>
      <meta name="description" content={description} />
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      {no_index ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large" />
      )}
      
      <link rel="canonical" href={full_canonical_url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={full_title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={og_type} />
      <meta property="og:image" content={full_og_image} />
      <meta property="og:url" content={full_canonical_url} />
      <meta property="og:site_name" content="Гостинничный комплекс «Электросталь»" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full_title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={full_og_image} />
      
      {/* VK */}
      <meta property="vk:image" content="/images/vk.jpg" />
      
      {/* JSON-LD Structured Data */}
      {json_ld && (
        <script type="application/ld+json">
          {JSON.stringify(json_ld)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 