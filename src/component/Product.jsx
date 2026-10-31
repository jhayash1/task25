import { useState } from "react";
import Cart from "./Cart";

const collection = [
  {
    title: "White casual sneaker",
    price: 1570,
    url:"https://productimages.withfloats.com/tile/69dc7078590573d5ddc6a81a.jpeg"
  },
  {
    title: "Black casual sneaker",
    price: 2770,
    url:"https://img1.junaroad.com/uiproducts/20425244/pri_175_p-1697817318.jpg"
  },
  {
    title: "Red sneaker",
    price: 4570,
    url:"https://cpimg.tistatic.com/07307322/b/4/Mens-Sneekers-Shoes.jpg"
  },
  {
    title: "Adidas casual sneaker",
    price: 1770,
    url:"https://i.pinimg.com/originals/92/bd/c7/92bdc7868d422617887b7e23455c0a67.jpg"
  },
];
function Product() {
  const [cart, setCart] = useState([]);
  const add = (title, price,url) => {
    setCart((prev) => [...prev, { title, price,url }]);
  };
  return (
    <>
      <div className="main">
        <div className="col">
          {collection.map((data, i) => (
            <div className="card" key={i}>
                <div className="img">
                    <img src={data.url}/>
                </div>
              <h4>{data.title}</h4>
              <p>{data.price}</p>
              <button onClick={() => add(data.title, data.price, data.url)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="col">
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
}
export default Product;
