import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import axios from 'axios';
import { stylesColor } from './styles';

export default function Colors() {
  const [colors, setColors] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColors = async () => {
  fetch('https://api.allorigins.win/get?url=https://www.colourlovers.com/api/colors?format=json')
  .then(response => response.json())
  .then(data => setColors(JSON.parse(data.contents)))
  .catch(error => console.error('Error:', error));
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchColors().then(() => setIsRefreshing(false));
  };

  useEffect(() => {
    fetchColors();
  }, []);

  const renderColorItem = ({ item }: { item: any }) => (
    <View style={[stylesColor.colorItem, { backgroundColor: `#${item.hex}` }]}>
      <Text style={stylesColor.colorName}>{item.title}</Text>
    </View>
  );

  return (
    <View style={stylesColor.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderColorItem}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};
