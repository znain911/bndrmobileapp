import React, {Component} from 'react';
import { StyleSheet, Text,View, Image ,TouchableOpacity,Dimensions,Modal,TouchableWithoutFeedback} from 'react-native';
  import { ScrollView } from 'react-native-virtualized-view';
import { Entypo,Ionicons,Feather,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Carousel from 'react-native-snap-carousel'
import ImageViewer from 'react-native-image-zoom-viewer';
//import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
//import data from './data';

class PRESIMAGE extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Data: null,
            v1Date: '',
            response: [[]],
            ModalVisible: true
        },
        this.isCarousel = React.createRef();
        
    };
    
    render (){
      const { navigation } = this.props;
      //console.log(this.props.route.params.image);
     
      const gotoNextImage = () => {
        //this.isCarousel.current.snapToNext()
        //console.log(this.isCarousel.current);
        this.setState({ModalVisible : true})
      }

      

      const gotoPreviousImage = () => {
        //this.isCarousel.current.snapToPrev()
      }
      const images = [{
        url: 'http://10.0.2.2/bndr/caseHistory/127434/64.jpeg'
    }, {
        url: 'https://picsum.photos/id/10/200/300'
    },{
      url: 'http://10.0.2.2/bndr/caseHistory/127434/64.jpeg'
  }, {
      url: 'https://picsum.photos/id/10/200/300'
  }]

    const closeModal = () => {
      this.setState({ModalVisible : false})
      }
        let pic = <Image source={require('../../assets/male.png')} style ={styles.proPic} />
        if (this.props.route.params.gender === '1'){
        pic = <Image source={require('../../assets/female.png')} style ={styles.proPic} />
      }
        var hours = new Date().getHours();
        if (hours >= 4 && hours <= 11) {
            var greetings = <Text style = {styles.welcome}>Good morning</Text>
        }else if (hours >= 12 && hours <= 15) {

            greetings = <Text style = {styles.welcome}>Good afternoon</Text>
        } else if (hours >= 16 && hours <= 19){
            greetings = <Text style = {styles.welcome}>Good evening</Text>
        } else {
            greetings = <Text style = {styles.welcome}>Good night</Text>
        }
      return (
    <View style ={styles.main}>

      <View style ={styles.header} >
        <TouchableOpacity onPress={() => {navigation.navigate('Menu',{
            name : this.props.route.params.name,
            patientId : this.props.route.params.patientId,
            bndrId : this.props.route.params.bndrId,
            guideBookNo : this.props.route.params.guideBookNo,
            patientIdByCenter : this.props.route.params.patientIdByCenter,
            email : this.props.route.params.email,
            maritalStatus : this.props.route.params.maritalStatus,
            organization : this.props.route.params.organization,
            phoneNum : this.props.route.params.phoneNum,
            Adphone : this.props.route.params.Adphone,
            regDate : this.props.route.params.regDate,
            gender : this.props.route.params.gender,
            dob : this.props.route.params.dob,
            age : this.props.route.params.age,
            nid : this.props.route.params.nid,
            center : this.props.route.params.center,
            districtid : this.props.route.params.districtid,
            divisionid : this.props.route.params.divisionid,
            upazilaid : this.props.route.params.upazilaid,
            division : this.props.route.params.division,
            district : this.props.route.params.district,
            upazila : this.props.route.params.upazila,
            address : this.props.route.params.address,
            postalCode : this.props.route.params.postalCode,
            expenditure : this.props.route.params.expenditure,
            profession : this.props.route.params.profession,
            education : this.props.route.params.education,
            pid: this.props.route.params.pid,
            Bangla:this.props.route.params.Bangla,
        });}}>
            <Ionicons name="md-menu" size={50} color="white" />
        </TouchableOpacity>

        <View style = {styles.logout}>
            <TouchableOpacity onPress={() => {navigation.navigate('Login',{
            Bangla:this.props.route.params.Bangla
            });}}>
              <View style = {styles.logoutF}>
                <AntDesign name="logout" size={14} color="white" />
                <Text style = {styles.logoutText}>Logout</Text>
              </View>
            </TouchableOpacity>
        </View>

      </View>
      
        <Modal visible={this.state.ModalVisible} transparent={true} onRequestClose={closeModal}>
          <TouchableWithoutFeedback onPressOut={closeModal}>
            <View style={styles.modalcontainer}>
              <View style={styles.modal}>
                <ImageViewer imageUrls={this.props.route.params.image}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      

    {/* <View style = {styles.carousel}>
       <TouchableOpacity style = {styles.carouselButton} onPress={gotoPreviousImage}>
        <Text style = {styles.carouselText} >Previous</Text>
      </TouchableOpacity> 

      <TouchableOpacity style = {styles.carouselButton} onPress={gotoNextImage}>
        <Text style = {styles.carouselText} >Next</Text>
      </TouchableOpacity>
    </View> */}

    </View>
      );
    }

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  modalcontainer:{
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop:'20%'
  },
  modal:{
    width: '100%',
    height: '80%',
    
  },
  header: {
      width: '100%',
      paddingTop: Dimensions.get('window').width > 370 ? '10%' : '8%',
      paddingLeft: '5%',
      paddingRight: '5%',
      backgroundColor: '#2171B5',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  carousel:{
    flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:10,
  },
  carouselButton:{
    backgroundColor: '#2171B5',
    borderColor: '#FFFFFF',
    borderRadius: 8,
    padding: Dimensions.get('window').width > 370 ? '3%' : '4%',
    margin: 10,
    
  },
  carouselText:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
    logout: {
      width:  '25%',
      padding: Dimensions.get('window').width > 370 ? '0.8%' : '1%',
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 8,
      marginBottom: Dimensions.get('window').width > 370 ? '2%' : '4%',
      marginTop: Dimensions.get('window').width > 370 ? '5%' : '4%',
      backgroundColor: '#EA5044'
    },
    logoutF: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '4%'

    },
    logoutText: {
      color: '#FFFFFF',
      marginLeft: '6%',
      fontSize: Dimensions.get('window').width > 370 ? 15 : 12 
    },
    namePic: {
      flexDirection: 'row',
      padding: '2%',
      width:'100%',
      height: 100,
      marginBottom: Dimensions.get('window').width > 370 ? '1%' : '0%',
      marginTop:Dimensions.get('window').width > 370 ? '5%' : '3%'
    },
    nameContainer: {
      width: Dimensions.get('window').width > 370 ? '72%' : '70%',
      marginLeft: '5%',
      paddingTop: '2%'
    },
    welcome: {
      color: '#535353',
      fontSize: 16
    },
    nameText:{
      fontSize: 22,
      fontWeight: 'bold'
    },
    proPicContainer: {
      width: Dimensions.get('window').width > 370 ? '20%' : '22%',
      height: '87%',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 50,
    },
    proPic: {
      width: '100%',
      height: '100%',
    },
    visitContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingLeft: '5%',
     paddingRight: '5%',
     marginBottom: Dimensions.get('window').width > 370 ? '4%' : '2.5%',
     marginTop: '3%'
    },
    visitController: {
      flexDirection: 'row'
    },
    visitText: {
      fontSize: Dimensions.get('window').width > 370 ? 15 : 13,
      marginLeft: '8%',
      marginRight: '8%',
      marginTop: '1%',
      color: '#2171B5'
    },
    lVisit: {
      borderWidth: 2,
      borderColor: '#2171B5',
      borderRadius: 10,
    },
    lvText: {
      padding: '1%',
      paddingLeft: Dimensions.get('window').width > 370 ? '4%' : '3%',
      paddingRight: Dimensions.get('window').width > 370 ? '4%' : '3%',
      color: '#2171B5',
      fontSize: Dimensions.get('window').width > 370 ? 15 : 12
    },
    vDate: {
      flexDirection: 'row',
      paddingLeft: '7%',
      marginBottom: Dimensions.get('window').width > 370 ? '1%' : '0%'
    },
    vidText: {
      fontSize: Dimensions.get('window').width > 370 ? 18 : 16,
      fontWeight: 'bold',
      marginRight: '2%'
    },
    vidDate: {
      fontSize: Dimensions.get('window').width > 370 ? 18 : 16
    },
    PImageAlign:{
      width: '100%',
      marginTop: '2%'
    },
    PImageCaontainer: {
      width: '100%',
      borderWidth: 2,
      borderColor: '#E7E7E9',
      borderRadius: 10,
      flexDirection: 'row',
      
    },
    PImage: {
      width: '100%',
      height: 500
    },
    PText: {
      color: 'white',
      marginLeft: '5%'
    },
    infoContainer: {
      backgroundColor: '#E7E7E9',
      padding: '3%',
      margin: '2%',
      marginLeft: '6%',
      marginRight: '5%',
      borderWidth: 2,
      borderColor: '#E7E7E9',
      borderRadius: 15,
      elevation: 8
    },
    infoContainerMed: {
      backgroundColor: '#cbd1cc',
      padding: '3%',
      margin: '2%',
      marginLeft: '6%',
      marginRight: '5%',
      height: 140,
      borderWidth: 2,
      borderColor: '#E7E7E9',
      borderRadius: 15,
      elevation: 8
    },
    DPContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: '1%',
      marginTop: '3%'
    },
    dContainer: {
      flexDirection: 'row',

    },
    dInfo: {
      textAlign: 'center',
      marginLeft: 30
    },
    advice:{
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: '2%',
      padding: '3%'
    },
    textM:{
      marginTop: '3%'
    },
    Dtext : {
      fontSize:Dimensions.get('window').width > 360 ? 18 : 16,
      fontWeight: 'bold'
    },
    clock: {
      flexDirection: 'row'
    },
    clockSpace: {
      marginTop: '1%',
      marginRight: '2%'
    },
    NextVisit: {
      alignItems: 'center',
      marginTop: '3%'
    },
    NextVisitText: {
      fontSize: Dimensions.get('window').width > 360 ? 16: 14
    },
    NextVisitDate: {
      fontSize: Dimensions.get('window').width > 360 ? 20 : 18
    }

});

//export default TMNT;
export default function(props) {
  const navigation = useNavigation();

  return <PRESIMAGE {...props} navigation={navigation} />;
}