import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
  const { isDarkTheme, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
      <ScrollView>
        <View style={{ marginBottom: 10, marginTop: 30 }}>
          <Text
            onPress={() => { navigation.navigate('HomeScreen') }}
            style={[styles.title, { color: colors.textColor }]}>
            Settings Screen
          </Text>

          <View style={{margin: 10, flexDirection: 'column',}}>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
            <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, color: colors.textColor}]}>
              Language
            </Text>
            <Ionicons name="chevron-forward" style={{marginRight: 10,}} size={24} color={colors.textColor} />
          </View>        
          <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, color: colors.textColor}]}>
            My Profile
          </Text>
          <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={colors.textColor} />          
          </View>
          <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, color: colors.textColor}]}>
            Contact Us
          </Text>
          <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={colors.textColor} />      
        </View>
        <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, color: colors.textColor}]}>
            Change Password
          </Text>
          <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={colors.textColor} />
        </View>
        <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
            <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, color: colors.textColor}]}>
                Privacy Policy
            </Text>
            <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={colors.textColor} />
        </View>
        <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
        
        </View>

          <View style={styles.optionContainer}>
            <Text style={[styles.optionText, { color: colors.textColor }]}>Theme</Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  optionContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
  },
});

export default SettingsScreen;
