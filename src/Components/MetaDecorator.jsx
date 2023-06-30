import React from "react";
import { Helmet } from "react-helmet-async";
const MetaDecorator = ({
  id,
  titleUrl,
  descriptionUrl,
  imageUrl,
  domainUrl,
}) => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="title" content={titleUrl} />
      <meta
        name="description"
        content={descriptionUrl}
        data-react-helmet="true"
      />
      <meta property="og:title" content={titleUrl} />
      <meta property="og:description" content={descriptionUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${domainUrl} product_details/${id}`} />
      <title>{titleUrl}</title>
    </Helmet>
  );
};

export default MetaDecorator;
