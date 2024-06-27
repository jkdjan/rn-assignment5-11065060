import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TransferBlock = ({ iconName, amountColour, label, miniLabel, pay }) => {
  const { colors, isDarkTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container]}>
      <View style={[styles.iconContainer]}>
        <Ionicons name={iconName} size={20} color={colors.textColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.label, { color: colors.textColor }]}>{label}</Text>
        <Text style={[styles.miniLabel, { color: colors.textColor }]}>{miniLabel}</Text>
      </View>      
      <Text style={[styles.pay, { color: isDarkTheme ?colors.textColor : amountColour }]}>{pay}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    margin: 12,
    width: 340,
    height: 74,
    padding: 8,
    marginRight: 17,
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 9,
  },
  miniLabel: {
    fontSize: 13,
    opacity: 0.6,
    marginTop: 4,
    marginLeft: 9,
  },
  pay: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default TransferBlock;
