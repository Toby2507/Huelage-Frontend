import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppTheme } from '@hooks';
import { OrderOverview } from '@components/vendor/Home';
import { OrderSummary } from '@containers/Vendor';

const HomeScreen = () => {
  const { color } = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: color.mainBg }]}>
      <OrderOverview />
      <OrderSummary />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    padding: 20
  }
});