import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "../store/productSlice";
import ChangeProduct from "./ChangeProduct";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  console.log("products: ", products);
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    const btnEl = target.closest('.product__item');
    const changeFormEl = btnEl.querySelector(".form__change");
    const changeFormEls = document.querySelectorAll(".form__change");
    
    changeFormEls.forEach(el => {
      if (!el.contains(target)) {
        el.style.display = "none"
      } 
    });
    changeFormEl.style.display = "flex";
    
  }

  return (
    <div className="block__list">
      <h2 className="block__title">Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li className="product__item" key={product.id}>
              <div className="block__product">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Available: {product.available ? "Yes" : "No"}</p>

                <button onClick={() => dispatch(deleteProduct(product.id))}> Delete </button>
                <button onClick={() => dispatch(toggleAvailability(product.id))}> Toggle Availability </button>

                <button onClick={handleClick}> Change </button>
              </div>

              <ChangeProduct productId={product.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
