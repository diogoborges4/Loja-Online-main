import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const url = "https://dummyapi.io/data/v1/post?limit=10";

const headers = new Headers();
headers.append("app-id", "64a987b2096b1827c66ecf16");

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    s;
    async function fetchData() {
      const res = await fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Ocorreu um erro:", error);
        });
    }
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <Navbar />
      {!products.data && (
        <img
          src="/src/static/img/157868037-0f50e466-62c6-4c2c-8fee-fc5b96627b63.gif"
          alt=""
        />
      )}
      {products.data &&
        products.data.map((product) => (
          <ul key={product.id}>
            <li>
              <img src={product.image} alt="img" />
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Products;
