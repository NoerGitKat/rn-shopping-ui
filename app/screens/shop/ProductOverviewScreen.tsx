import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces";

const ProductOverviewScreen = () => {
  const { availableProducts } = useSelector(
    (state: IRootState) => state.products
  );

  return (
    <FlatList
      data={availableProducts}
      renderItem={(itemData) => <Text>itemData.item.title</Text>}
    />
  );
};

export default ProductOverviewScreen;
