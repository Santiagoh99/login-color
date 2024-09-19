import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import axios from 'axios';
import { stylesColor } from './styles';

export default function Colors() {
  const [colors, setColors] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColors = async () => {
    try {
      const response = await axios.get('https://www.colourlovers.com/api/colors?format=json');//eliminar cors despues  https://cors-anywhere.herokuapp.com/
      setColors(response.data);
    } catch (error) {
      console.error('Error al obtener colores:', error);
    }
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
