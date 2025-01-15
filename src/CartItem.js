import './App.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



function CartItem({ item, handleAddToCart, handleRemoveFromCart }) {
  const { id, name, quantity, price, thumbnail_image } = item;
  return (

    <div className="cart-item">
      <div className="delete-btn-container">
        <span className="delete-btn" onClick={() => handleRemoveFromCart(item, true)}></span>
      </div>

      <div className="image">
        <img src={require(`./${thumbnail_image}`)} />
      </div>

      <div className="description">
        <span>{name}</span>
      </div>

      <div className="quantity">
        <button className="minus-btn" type="button" name="button"
        onClick={() => handleRemoveFromCart(item, false, 1)}>
          <img src={require("./images/minus.svg").default} />
        </button>
        <input type="text" name="name" value={quantity} />
        <button className="plus-btn" type="button" name="button"
        onClick={() => handleAddToCart(item, 1)}>
          <img src={require("./images/plus.svg").default} />
        </button>
      </div>

      <div className="cart-item-price">$<span className="price-amount">{price * quantity}</span></div>
    </div>
  );
}

export default CartItem;