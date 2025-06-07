"use client"
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  product_code: string;
  brand: string;
  code: string;
  name: string;
  category: string;
  on_sale: boolean;
  price_history: JSON;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/products`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
