import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import List from './src/screens/List';

const client = new ApolloClient({
  uri: `https://api.github.com/graphql`,
  headers: {
    Authorization: `Bearer 48d813acfdc757cbc71a23611a5ef8a46363e40a`
  }
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}> 
        <List/>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
