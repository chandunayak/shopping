
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import ThankYouPage from './components/ThankYouPage/ThankYouPage';
import PageNation from  './components/PageNation/PageNation';

const products = [
  { id: 1, name: 'Nike', price: 1200, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/blazer.png' },
  { id: 2, name: 'Adidas', price: 1500, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/blazer2.png' },
  { id: 3, name: 'Puma', price: 1800, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/crater.png' },
  { id: 4, name: 'Snikers', price: 800, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/crater2.png' },
  { id: 5, name: 'Nike', price: 2200, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/jordan.png' },
  { id: 6, name: 'Puma', price: 1400, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/jordan2.png' },
  { id: 7, name: 'Nike', price: 1900, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/air2.png' },
  { id: 8, name: 'Nike', price: 2000, image: 'https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/air.png' },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductList products={paginatedProducts} />
                <PageNation
                  currentPage={currentPage}
                  totalPages={Math.ceil(products.length / productsPerPage)}
                  onPageChange={handlePageChange}
                />
              </>
            }
          />
          <Route path="/thank-you" element={<ThankYouPage />} productDetails={products} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

