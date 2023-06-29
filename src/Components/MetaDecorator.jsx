import React from "react";
import { Helmet } from "react-helmet";
const MetaDecorator = ({
  id,
  titleUrl,
  descriptionUrl,
  imageUrl,
  domainUrl,
}) => {
  return (
    <Helmet>
      <title>{titleUrl}</title>
      <meta name="title" content={titleUrl} />
      <meta name="description" content={descriptionUrl} />
      <meta property="og:title" content={titleUrl} />
      <meta property="og:description" content={descriptionUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://aara-assignment-2.vercel.app/product_details/${id}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://aara-assignment-2.vercel.app/product_details/${id}`}
      />
      <meta property="twitter:title" content={titleUrl} />
      <meta property="twitter:description" content={descriptionUrl} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default MetaDecorator;
