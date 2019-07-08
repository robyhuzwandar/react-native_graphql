import React from 'react';
import { Query } from "react-apollo";
import {Text, View, FlatList, StyleSheet, Image, ScrollView} from 'react-native'
import {getPullRequest} from '../queries/queries'

class List extends React.Component{
  constructor(){
    super()
    this.cardList = this.cardList.bind(this);
  }
  render(){
    return(
      <Query
        query={getPullRequest}
        variables={{
          login : 'facebook',
          repo : 'react-native',
          pullRequestsCount : 50
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
            
          return (
            <ScrollView>
              <FlatList
                style={{marginTop:20}}
                data={data.organization.repository.pullRequests.edges}
                renderItem={ (pullRequest) => 
                  this.cardList(pullRequest)
                }
              />
            </ScrollView>
          )
        }}
      </Query>
    )
  }

  cardList = (pullRequest) => {
    return(
      <View key={pullRequest.item.node.id} style={styles.box}>
        <Image 
          style = {styles.image}
          source = {{uri:pullRequest.item.node.author.avatarUrl}} 
        />
        <View>
          <Text style={styles.itemTitle}>{pullRequest.item.node.title}</Text>
          <Text style={styles.itemDate}>{pullRequest.item.node.createdAt}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   image: {
    width: 50, 
    height: 50, 
    margin: 5, 
    borderRadius: 400/ 2
   },
   itemTitle: {
     paddingBottom: 5,
     fontSize: 12,
     marginRight:5,
     fontWeight: 'bold'

   },
   itemDate: {
     color: 'grey',
     fontSize: 12,
   },
   box: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    padding: 15,
    marginVertical:7,
    marginHorizontal:10,
    backgroundColor:'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation:3,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
});

export default List