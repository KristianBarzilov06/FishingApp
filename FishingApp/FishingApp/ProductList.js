import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://localhost:7090/api/Products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderProduct = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;