import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import { BorderlessButton as Button } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import * as actions from "./actions";

export default function ProductsPage() {

  const navigation = useNavigation();
  
  const [products, setProducts] = useState(Object);

  function goSignup() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  useEffect(() => {
    actions.fetchProducts().then(list => {
      setProducts(list)
    });

    navigation.setOptions({
      headerLeft: ()=> null,
      headerRight: () => (
          <Button
          onPress={goSignup}
          style={styles.logoutBtn}
          >
            <Text>Logout</Text>
          </Button>
      ),
    });
  }, []);

  if (!products) {
    return <View><ActivityIndicator size="large" /></View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.product}>
            <View style={styles.block}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.manufacturerName}>Fabricante: {item.factory.name}</Text>
              <Text style={styles.qtdTag}>Qtd. em Estoque: <Text style={styles.qtdNumber}>{item.amount}</Text></Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.priceTag}>Preço</Text>
              <Text  style={styles.price}>
                R$ {item.price.toFixed(2).replace(".", ",")}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
