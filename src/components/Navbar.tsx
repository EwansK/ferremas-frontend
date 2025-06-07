'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
