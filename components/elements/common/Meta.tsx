// https://gist.github.com/reginpv/3f2918f4d605b9ec967b3ab80a040355

import Head from "next/head";
import siteData from "../../../constants/site-data";

const Meta = (props: MetaProps) => {
  const { title, description, url } = props;

  return (
    <Head>
      <title>{title ? `${title} | ${siteData.title}` : siteData.title}</title>
      <meta name="description" content={siteData.description} />
      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={title ?? siteData.author.name} />
      <meta
        itemProp="description"
        content={description ?? siteData.description}
      />
      <meta
        itemProp="image"
        content={`${siteData.url}/images/social-card.png`}
      />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:title" content={title ?? siteData.author.name} />
      <meta
        property="og:description"
        content={description ?? siteData.description}
      />
      <meta
        property="og:image"
        content={`${siteData.url}/images/social-card.png`}
      />
      <meta
        property="og:url"
        content={url ? `${siteData.url}${url}` : siteData.url}
      />
      <meta property="og:type" content="website" />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:title" content={title ?? siteData.author.name} />
      <meta
        name="twitter:description"
        content={description ?? siteData.description}
      />
      <meta
        name="twitter:image"
        content={`${siteData.url}/images/social-card.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

interface MetaProps {
  title?: string;
  description?: string;
  url?: string;
}

export default Meta;
