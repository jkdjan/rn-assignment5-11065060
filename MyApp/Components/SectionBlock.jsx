import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

const SectionBlock = ({ iconName }) => {
  const { colors, isDarkTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.imageContainer, { backgroundColor: isDarkTheme ? 'blue' : colors.backgroundColor }]}>
      <Ionicons name={iconName} size={30} color={colors.textColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
    margin: 5,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default SectionBlock;
