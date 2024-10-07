import { Link } from "react-router-dom";
import "./../styles/Allpost.css";
import tulsiImg from "../assets/basil0.jpg";

function Allpost(props) {
  const { res } = props;

  return (
    <div className="allpost-card">
      <Link to={`/explore/${res._id}`} className="post-link">
        <img src={tulsiImg} alt={res.product.name} className="post-image" />
        <div className="post-details">
          <div className="post-text">{res.product.name}</div>
          <div className="post-price">{res.product.price}21000</div>
        </div>
      </Link>
    </div>
  );
}

export default Allpost;
