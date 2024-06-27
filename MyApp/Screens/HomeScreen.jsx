import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../ThemeContext';
import SectionBlock from '../Components/SectionBlock';
import TransferBlock from '../Components/TransferBlock';

const sectionData = [
  { key: '1', iconName: "arrow-up-outline" },
  { key: '2', iconName: "arrow-down-outline" },
  { key: '3', iconName: "cloud-upload-outline" },
  { key: '4', iconName: "cash-outline" }
];

const verticalData = [
  { key: '1', iconName: 'logo-apple', pay: "$99", label: "Apple Store", miniLabel: "Entertainment", amountColour: 'Blue' },
  { key: '2', iconName: 'musical-notes-outline', pay: "$-6,99", label: "Spotify", miniLabel: "Music" },
  { key: '3', iconName: 'swap-horizontal-outline', pay: "$5,99", label: "Money Transfer", miniLabel: "Transaction", amountColour: 'Blue' },
  { key: '4', iconName: 'cart-outline', pay: "$51,99", label: "Grocery", miniLabel: "Shopping", amountColour: 'Blue' },
  { key: '5', iconName: 'logo-apple', pay: "$-12,99", label: "Apple Store", miniLabel: "Entertainment" },
  { key: '6', iconName: 'swap-horizontal-outline', pay: "$16,99", label: "Money Transfer", miniLabel: "Transaction", amountColour: 'Blue' },
  { key: '7', iconName: 'musical-notes-outline', pay: "$-5,99", label: "Spotify", miniLabel: "Music" },
  { key: '8', iconName: 'cart-outline', pay: "$23,99", label: "Grocery", miniLabel: "Shopping", amountColour: 'Blue' },
];

const visaCard = require("../assets/Card.png");
const Profile = require('../assets/profile.png');
const Search = require('../assets/search.png');

const HomeScreen = ({ navigation }) => {
  const { isDarkTheme, colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
        <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
        <ScrollView>
          <View style={{ marginBottom: 15, marginTop: 30 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text
                onPress={() => { navigation.navigate('Settings') }}
                style={{ color: colors.textColor }}>
                Home Screen
              </Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Image source={Profile} style={{ marginLeft: 30, margin: 8, marginRight: 10 }} />

              <View style={{ marginRight: 70 }}>
                <Text style={{ fontSize: 12, fontWeight: 'ultralight', margin: 1, marginLeft: 5, marginTop: 10, color: colors.textColor }}>Welcome back,</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: colors.textColor }}>Eric Atsu</Text>
              </View>

              <View style={styles.imageContainer}>
                <Image source={Search} style={styles.image} />
              </View>
            </View>

            <View style={{ padding: 6, marginLeft: 30, marginRight: 30, margin: 14 }}>
              <Image source={visaCard} style={{}} />
            </View>

            <View style={{ flexDirection: 'row', margin: 6, padding: 6 }}>
              <FlatList
                data={sectionData}
                horizontal
                renderItem={({ item }) => (
                  <SectionBlock
                    iconName={item.iconName}
                  />
                )}
                contentContainerStyle={{ paddingLeft: 10, }}
              />
            </View>

            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 23, marginRight: 90, marginLeft: 20, color: colors.textColor }}>Transaction</Text>
                <Text style={{ color: 'blue', fontWeight: 'bold', marginLeft: 80 }}>See all</Text>
              </View>
              <View>
                <FlatList
                  data={verticalData}
                  renderItem={({ item }) => (
                    <TransferBlock
                      amountColour={item.amountColour}
                      pay={item.pay}
                      iconName={item.iconName}
                      label={item.label}
                      miniLabel={item.miniLabel}
                    />
                  )}
                  keyExtractor={(item) => item.key}
                  contentContainerStyle={{ paddingLeft: 20 }}
                />
              </View>
            </View>

          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#f1f1f1',
    borderRadius: 50,
    margin: 8,
    marginLeft: 70,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 25,
    width: 25,
  },
});

export default HomeScreen;
