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
    // Get the current window location and build API URL dynamically
    const currentHost = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
    const apiUrl = `http://${currentHost}:4000`;
    console.log('Dynamic API URL:', apiUrl, 'Current host:', currentHost); // Debug log
    fetch(`${apiUrl}/api/products`)
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
