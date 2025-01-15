import './App.css';
import CartItem from './CartItem';

function Cart({ shoppingCart, handleAddToCart, handleRemoveFromCart }) {

    return (
        <div className="shopping-cart">
            <div className="title">
                <h1>YOUR CART</h1>
            </div>

            <div className="cart-items-container">
                {shoppingCart.length === 0 ? (
                    <span className="empty-cart-message">No items in cart</span>
                ) : (
                    <>
                        {shoppingCart.map((cartItem, index) => (
                            <CartItem key={cartItem.id} item={cartItem} handleAddToCart={handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}></CartItem>
                        ))}

                        <div className="total-container">
                            <span id="cart-total-label">Total:</span>
                            <span id="cart-total-dollar">$</span>
                            <span id="cart-total-amount">
                                {shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0)}
                            </span>
                        </div>
                        <div className="purchase-btn-container">
                            <a href="" className="proceed-to-checkout">Proceed to Checkout</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
