import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../../redux/cart/action";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import Navbar from "../../components/Navbar/Navbar";
import "./CartProducts.css";
import { Link } from "react-router-dom";

const CartProducts = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  const dispatch = useDispatch();

  const HandleRemoveClick = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const HandleIncreaseClick = (id) => {
    dispatch(increaseProductQuantity(id));
  };

  const HandleDecreaseClick = (id) => {
    dispatch(decreaseProductQuantity(id));
  };

  const handleRealValue = (height) => {
    const realValue = (height / 100).toFixed(2);

    return realValue;
  };
  console.log(products);
  return (
    <div>
      <Navbar />
      {products.length === 0 && (
        <img
          id="imgCartEmpty"
          src="src\static\img\pngkit_carrinho-de-compras-4110678.png"
          alt=""
        />
      )}
      {products.length >= 1 && (
        <div className="cartHeader">
          <h2>PRODUCT DETAILS</h2>
          <h2>QUANTITY</h2>
          <h2>PRICE</h2>
          <h2>ACTION</h2>
        </div>
      )}
      {products &&
        products.map((product) => (
          <div className="cartProducts" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="cartHeaderImg">
                <img src={product.src.medium} alt={product.photographer} />
                <h3>{product.alt}</h3>
              </div>
            </Link>
            <div className="cartQuantity">
              <button onClick={() => HandleDecreaseClick(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => HandleIncreaseClick(product.id)}>+</button>
            </div>
            <button onClick={() => handleRealValue(product.height)}>
              <p>R${handleRealValue(product.height)}</p>
            </button>
            <button onClick={() => HandleRemoveClick(product.id)}>
              Remover
            </button>
          </div>
        ))}

      {products.length >= 1 && (
        <h1 className="h1Total">
          Total: R$ {handleRealValue(productsTotalPrice)}
        </h1>
      )}
    </div>
  );
};

export default CartProducts;
