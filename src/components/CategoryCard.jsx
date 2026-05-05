import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({ product }) {
  return (
    <Link className="category-card reveal" to={`/urunler/${product.slug}`}>
      <img src={product.image} alt="" loading="lazy" />
      <span>{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.summary}</p>
      <strong>
        İncele <ArrowUpRight size={16} />
      </strong>
    </Link>
  );
}
