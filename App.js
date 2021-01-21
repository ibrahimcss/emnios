/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <WebView
          source={{
            uri: 'https://boransoftware.com/tr/',
          }}
          style={{marginTop: 20}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
