import React, { useState } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Clothing' },
    { id: 3, name: 'Watch', category: 'Accessories' },
    { id: 4, name: 'Refrigerator', category: 'Home Appliances' },
  ] ;

  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  return (
    <div className="App">
      <h1>Fictional Online Store</h1>
      <Filter categories={categories} onSelectCategory={setCategoryFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
