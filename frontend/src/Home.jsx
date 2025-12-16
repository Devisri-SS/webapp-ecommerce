import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Our Store</h1>

      {/* IMAGE ONLY */}
      <Link to="/products">
        <img
          src="https://via.placeholder.com/600x250"
          alt="store banner"
          style={{ width: "100%", cursor: "pointer" }}
        />
      </Link>

      <p>Click the image to explore products</p>
    </div>
  );
}
