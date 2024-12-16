import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'Tash Finance - Investimentos em Criptomoedas Simplificados',
  description = 'Maximize seus retornos com portfólios cripto personalizados e gestão automatizada. Comece a investir em criptomoedas de forma simples e segura.',
  keywords = 'criptomoedas, investimentos, bitcoin, ethereum, carteira digital, gestão automatizada, portfólio cripto',
  image = '/assets/post.png',
  url = 'https://tash.finance',
  type = 'website',
}: SEOProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Tash Finance',
    description,
    url,
    applicationCategory: '',
    operatingSystem: 'Any',
    keywords: keywords.split(','),
    sameAs: [
      'https://x.com/tashfinance',
      'https://www.linkedin.com/company/tashfinance/',
      'https://www.tiktok.com/@tash.finance',
      'https://www.instagram.com/tash.finance/',
    ],
  };

  const baseUrl = 'https://tash.finance/';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={baseUrl + image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={baseUrl + image} />

      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tash Finance" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
