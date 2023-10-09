import React, { useState, useEffect } from 'react';
import { TextField, Flex, Button, DropdownMenu, Separator, Dialog } from '@radix-ui/themes';


const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    <DropdownMenu.Root>
        <Flex>
          <TextField.Root radius="medium" size="3"  style={{ width: '300px'}}>
            <TextField.Input 
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..." 
                size="2" />
          </TextField.Root>
          <DropdownMenu.Trigger>
            <Button 
              radius='medium' 
              style={{ 
                borderTopLeftRadius : '0',
                borderBottomLeftRadius : '0',
              }}>
            Search
            </Button>
          </DropdownMenu.Trigger>
        </Flex>
      <DropdownMenu.Content>
        {filteredProducts.map((product) => (
          <div>
            <DropdownMenu.Item key={product.id}>{product.name}</DropdownMenu.Item>
            {/* Function to make sure the clicked item in the dropdown redirects to the right tab and product box*/}
            <DropdownMenu.Separator />
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default ProductSearch;