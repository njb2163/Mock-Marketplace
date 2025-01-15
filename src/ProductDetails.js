import './App.css';
import { useParams } from 'react-router';
import { useState } from 'react'
import { Link } from 'react-router-dom';



function ProductDetails({ productsData, shoppingCart, handleAddToCart }) {
    const { productId } = useParams();
    const product = productsData.filter(function (item) {return item.id == productId;})[0];
    const { id, name, description, category, price, discount, image, thumbnail_image} = product;
    const [quantity, setQuantity] = useState(1);
    return (
        <section className="section product-detail">
            <div className="details container">
                <div className="left image-container">
                    <div className="main">
                        <img src={require(`./${image}`)} id="zoom" alt="" />
                    </div>
                </div>
                <div className="right">
                    <span>
                        <Link to="/">
                        <span className="category">{category}</span>
                        </Link>
                        
                    </span>
                    <h1>{name}</h1>
                    <div className="price">${price}</div>
                    <form className="form">
                        <input type="number" min={0} value={quantity} onInput={e => setQuantity(e.target.value)} 
                        />
                        <Link to="/cart" className="addCart"
                        onClick={() => handleAddToCart(product, Number(quantity))}>Add To Cart</Link>
                    </form>
                    <h3>Product Details</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;