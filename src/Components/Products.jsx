import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const Products = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      const { products } = data;
      setProducts(products);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link to={`/product_details/${product.id}`}>
            <div className="shadow-md rounded-md min-h-[450px]">
              <div className="overflow-hidden h-60">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-4">
                <p className="text-2xl font-semibold">{product.title}</p>
                <p className="text-md font-semibold border-2 border-indigo-600 inline-block p-2 rounded-3xl">
                  {product.category}
                </p>
                <p className="text-2xl font-semibold">{product.price}</p>
                <p className="text-md font-semibold">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default Products;
