import React, { useState, useEffect } from 'react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { TextField, Flex, Button } from '@radix-ui/themes';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch product data from the API (replace 'api-url' with your actual API URL)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle search input change
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter the products based on the search term
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Flex>
          <TextField
            radius="medium"
            size="3"
            style={{ width: '300px' }}
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <Button
            radius="medium"
            style={{
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
            }}
          >
            Search
          </Button>
        </Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {filteredProducts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

export default ProductSearch;