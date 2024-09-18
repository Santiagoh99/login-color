import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { stylesColor } from "./styles";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchColors = async () => {
    try {
      const response = await fetch('https://www.colourlovers.com/api/colors?format=json');
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchColors();
    setRefreshing(false);
  };

  return (
    <View style={stylesColor.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hex}
        renderItem={({ item }) => (
          <View style={[stylesColor.colorBox, { backgroundColor: `#${item.hex}` }]}>
            <Text style={stylesColor.colorText}>{item.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default ColorsScreen;
