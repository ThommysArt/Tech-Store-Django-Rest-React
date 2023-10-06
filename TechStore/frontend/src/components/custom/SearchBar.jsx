import React, { useState, useEffect } from 'react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { TextField, Flex, Button } from '@radix-ui/themes';


const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch products from Django REST API
    fetch('http://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    // Filter products based on search term
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <DropdownMenu>
        <TextField
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Search products..."
          css={{ width: 200, marginRight: 8 }}
        />
        <Button onClick={handleSearch}>Search</Button>
      </DropdownMenu>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchBar;