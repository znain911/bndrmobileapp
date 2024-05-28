import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.96)

const CarouselCardItem = ({ item, index }) => {
  const zoom = () => {
        //console.log(item.imgUrl);
  }
  return (
    <TouchableOpacity onPress={zoom}>
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:5,
    backgroundColor: 'white',
    borderRadius: 15,
    width: ITEM_WIDTH,
    paddingBottom: 0,
    shadowColor: "#054b87",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 5,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 500,
  },
 
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem