import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product details based on the id
  const product = {
    id: '1',
    name: 'Classic Glasses',
    price: 99.99,
    description: 'A pair of classic glasses.',
    imageUrl: '/images/glasses1.jpg',
  };

  return (
    <div>
      <Header />
      <main>
        <div className="product-detail">
          <img src={product.imageUrl} alt={product.name} />
          <h1>{product.name}</h1>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;