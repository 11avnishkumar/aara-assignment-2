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
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProductDetails(data);
      // fetch reviews of the products
      const commentsRes = await fetch(`https://dummyjson.com/comments/${id}`);
      const commentsData = await commentsRes.json();
      setComments(commentsData);
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
        <title>{titleUrl}</title>
        <meta name="title" content={titleUrl} />
        <meta name="description" content={descriptionUrl} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://aara-assignment-2.vercel.app/product_details/${id}`}
        />
        <meta property="og:title" content={titleUrl} />
        <meta property="og:description" content={descriptionUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://aara-assignment-2.vercel.app/product_details/${id}`}
        />
        <meta property="twitter:title" content={titleUrl} />
        <meta property="twitter:description" content={descriptionUrl} />
        <meta property="twitter:image" content={imageUrl} />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-2xl mb-12">
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
      {/* Product reviews */}
      <div className="rounded-md">
        <h4 className="text-xl text-gray-500 pl-4 mb-4">Product Reviews</h4>
        <div className="flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <div className="">
            <p className="text-xl">{comments.user.username}</p>
            <p>{comments.body}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SingleProduct;
