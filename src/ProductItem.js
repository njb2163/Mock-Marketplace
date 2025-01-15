import './App.css';
import { Link } from 'react-router-dom';

function ProductItem({ id, name, category, imageUrl, price }) {
    return (
        <div className="product-item">
            <Link to={`/product/${id}`} className="product-thumb">
                <div className="overlay">
                    <img src={require(`./${imageUrl}`)} alt={name} />
                </div>
            </Link>
            <div className="product-info">
                <span className="category">{category}</span>
                <Link to={`/product/${id}`}>{name}</Link>
                <h4>${price}</h4>
            </div>
        </div>
    );
}

export default ProductItem;