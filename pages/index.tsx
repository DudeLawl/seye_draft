import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const products = [
    { id: '1', name: 'Classic Glasses', price: 99.99, imageUrl: '/images/glasses1.jpg' },
    { id: '2', name: 'Modern Glasses', price: 129.99, imageUrl: '/images/glasses2.jpg' },
    // Add more products as needed
  ];

  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Our Glasses Store</h1>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
