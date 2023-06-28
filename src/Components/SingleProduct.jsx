import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Card from "./Card";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
const SingleProduct = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProductDetails(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  const domainUrl = window.location.href;
  const titleUrl = productDetails.title;
  const descriptionUrl = productDetails.description;
  const imageUrl = productDetails.thumbnail;

  return (
    <Card>
      <Helmet>
        <title>{productDetails.title}</title>
        <meta property="og:title" content={productDetails.title} />
        <meta property="og:description" content={productDetails.description} />
        <meta property="og:image" content={productDetails.thumbnail} />
      </Helmet>
      <Link to="/" className="p-4 text-2xl font-semibold text-indigo-500">
        Go Back
      </Link>
      <div className="shadow-md rounded-md mb-3 flex flex-col md:flex-row p-4">
        <div className="overflow-hidden">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="object-cover"
          />
        </div>
        <div className="space-y-3 p-4">
          <p className="text-2xl font-semibold">{productDetails.title}</p>
          <p className="text-md font-semibold border-2 border-indigo-600 inline-block p-2 rounded-3xl">
            {productDetails.category}
          </p>
          <p className="text-2xl font-semibold">{productDetails.price}</p>
          <p className="text-md font-semibold">{productDetails.description}</p>
          <p className="text-sm font-bold text-gray-500">
            Share on Social Media
          </p>
          <div className="flex justify-start items-center gap-2">
            <FacebookShareButton
              url={domainUrl}
              quote={titleUrl}
              hashtag={titleUrl}
              description={descriptionUrl}
              media={imageUrl}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={domainUrl}
              title={titleUrl}
              via="your-twitter-handle"
              hashtags={[titleUrl]}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} title={titleUrl}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-2xl">
        {productDetails.images.map((imageGallary) => (
          <div className="overflow-hidden shadow-md rounded-md">
            <img
              src={imageGallary}
              alt={imageGallary}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SingleProduct;
