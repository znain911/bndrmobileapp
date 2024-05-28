import React, {Component} from 'react';
import { StyleSheet, Text,View, Dimensions,ScrollView, TextInput,Image, Button, Keyboard ,TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

class PassChange extends React.Component {

  constructor(props) {
 
    super(props)
 
    this.state = {

      phoneNumber: null,
      FirstPass: '',
      SecondPass: '',
      indicator: 'false',
      ButtonColor: false
 
    }
 
  }

  InsertPassword = () => {
     var FirstPass = this.state.FirstPass;
     var SecondPass = this.state.SecondPass;
     var phoneNumber;
     this.setState({ButtonColor : true})
     if (this.state.phoneNumber === null || this.state.phoneNumber === '' ){
        phoneNumber = this.props.route.params.patientPhone;
     }else {
       phoneNumber = this.state.phoneNumber
     }

     if(FirstPass === SecondPass){
       
      if(FirstPass.length < 6 || FirstPass.length > 15 || phoneNumber.length < 10) {

        alert("Password Should be 6-15 Character and Phone number should be 11 digit");
        this.setState({ButtonColor : false})
      }else {
        var SearchAPI = "";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };

                var Data = {
                    PhoneNumber: phoneNumber, 
                    GuideBook: this.props.route.params.patientGuideBookNo,
                    Password: FirstPass
                }

                fetch(
                    SearchAPI,{
                        method: 'POST',
                        headers: header,
                        body: JSON.stringify(Data)
                    }
                )

                .then((response) => response.json())
                .then((response) => {

                    if (response[0].message === 'New password insert failed'){

                        alert("Network error");
                        this.setState({ButtonColor : false})
                    }else {
                        this.props.navigation.navigate('Login',{
                          Bangla : this.props.route.params.Bangla
                        });
                        this.setState({FirstPass : ''})
                        this.setState({ButtonColor : false})
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({ButtonColor : false})
                });

        // this.props.navigation.navigate('Login');


      }
     } else { 
       alert("Password did not matched");
       this.setState({ButtonColor : false})
     } 
  }

  render () {
    const { navigation } = this.props;
   var phoneNum = this.props.route.params.patientPhone

   let fullNameController = <Text style ={styles.title}>Full Name</Text>
   let phoneController = <Text style ={styles.title}>Phone Number</Text>
   let bndrIdController = <Text style ={styles.title}>BNDR ID</Text>
   let guideBookController = <Text style ={styles.title}>Guide Book No.</Text>
   let centerIdController = <Text style ={styles.title}>Center ID</Text>
   let registrationCenterController = <Text style ={styles.title}>Registration Center</Text>
   let passwordController = <Text style={styles.passText}>Password</Text>
   let rePasswordController = <Text style={styles.passText}>Confirm Password</Text>

   if(this.props.route.params.Bangla=== 'false') {
     fullNameController = <Text style ={styles.title}>ফুল নাম</Text>
     phoneController = <Text style ={styles.title}>ফোন নাম্বার</Text>
     bndrIdController = <Text style ={styles.title}>বিএনডিআর আইডি</Text>
     guideBookController = <Text style ={styles.title}>গাইড বুক নাম্বার</Text>
     centerIdController = <Text style ={styles.title}>কেন্দ্রের আইডি</Text>
     registrationCenterController = <Text style ={styles.title}>রেজিস্ট্রেশান কেন্দ্র</Text>
     passwordController = <Text style={styles.passText}>পাসওয়ার্ড দিন</Text>
     rePasswordController = <Text style={styles.passText}>পুনরায় পাসওয়ার্ড দিন</Text>
   }

   
    return (
        <ScrollView keyboardShouldPersistTaps='always'>
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
        <View style ={styles.main}>
          <View style ={styles.infoContainer} >
          
            <View style ={ styles.row}>
              {fullNameController}
              <View style ={styles.nameContainer}>
                <Text>{this.props.route.params.patientName}</Text>
              </View>
            </View>
            
            <View style ={ styles.row}>
              {phoneController}
              <View style ={styles.phoneConatiner}>
                <Image source={require('../../assets/number.png')} style ={styles.image} />
                <View style = {styles.phoneNumber}>
                  <TextInput placeholder={phoneNum} 
                  keyboardType ="numeric"  
                  maxLength={11}
                  onChangeText={phoneNumber => this.setState({phoneNumber})}
                  />
                </View>
              </View>
            </View>
          
            <View style ={ styles.row}>
              {bndrIdController}
              <View style ={styles.nameContainer}>
                <Text>{this.props.route.params.bndrId}</Text>
              </View>
            </View>

            <View style ={ styles.row}>
              {guideBookController}
              <View style ={styles.nameContainer}>
                <Text>{this.props.route.params.patientGuideBookNo}</Text>
              </View>
            </View>

            <View style ={ styles.row}>
              {centerIdController}
              <View style ={styles.nameContainer}>
                <Text>{this.props.route.params.patientIdbyCenter}</Text>
              </View>
            </View>

            <View style ={ styles.row}>
              {registrationCenterController}
              <View style ={styles.nameContainer}>
                <Text>{this.props.route.params.centerName}</Text>
              </View>
            </View>
            
          </View>
          <View style = {styles.passContainer}>
            {passwordController}
            <View style={styles.pass}>
              <TextInput
               placeholder='6-15 Character'  
               onChangeText={FirstPass => this.setState({FirstPass})}
               maxLength={15}
               
               />
            </View>

            {rePasswordController}
            <View style={styles.pass}>
              <TextInput 
              placeholder='6-15 Character'  
              onChangeText={SecondPass => this.setState({SecondPass})}
              maxLength={15}
              
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={ () => {this.props.navigation.navigate('GuideBook');}}>
            <View >
                <Text style= {styles.cancel} >Cancel</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={this.InsertPassword}>
            <View >
                <Text style= {this.state.ButtonColor ? styles.passTextChange :styles.login} >Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60
    },
    infoContainer: {
      width: '90%',
      paddingLeft: 15,
      paddingRight: 10,
      paddingTop: 10,
      backgroundColor: '#E7E7E9',
      borderColor: '#E7E7E9',
      borderRadius: 15,
      marginBottom: '8%'
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '5%'
    },
    title: {
      fontSize: 15,
      paddingTop: 5
    },
    nameContainer: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 5,
      padding: 5,
      width: '60%'
    },
    phoneConatiner: {
      
      width: '65%',
      flexDirection: 'row'
    },
    image: {
      marginTop: 10,
      width: '8%',
      height: 15
    },
    phoneNumber:{
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 5,
      padding: 5,
      width: '92%',
      height: 33,
      marginLeft: '1%'
      
    },
    passContainer: {
      width: '90%',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 15,
      backgroundColor: '#E7E7E9',
      borderColor: '#E7E7E9',
      borderRadius: 15
    },
    
    passText: {
      fontSize: 15,
      marginBottom: '4%',
      marginTop: '4%'
    },
    pass: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 10,
      padding: 5,
      width: '90%'
    },
    buttonContainer: {
      width: '75%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '15%',
      marginTop: '10%'
    },
    cancel: {
      borderWidth: 2,
      borderColor: '#777777',
      borderRadius: 12,
      color: '#777777',
      padding: '2%',
      paddingLeft: '11%',
      paddingRight: '11%',
      fontSize: 18,
      alignItems: 'center'
    },
    login: {
      borderWidth: 2,
      borderColor: '#134074',
      borderRadius: 12,
      color: '#FFFFFF',
      padding: '2%',
      paddingLeft: '12%',
      paddingRight: '12%',
      fontSize: Dimensions.get('window').width > 370 ? 18 : 16,
      justifyContent: 'center',
      backgroundColor: '#134074',
      alignItems: 'center'
    },
    passTextChange: {
        borderWidth: 2,
        borderColor: '#00914C',
        borderRadius: 12,
        color: '#FFFFFF',
        padding: '2%',
        paddingLeft: '12%',
        paddingRight: '12%',
        fontSize: Dimensions.get('window').width > 370 ? 18 : 16,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#00914C',
        alignItems: 'center'
    },
});

//export default PassChange;

export default function(props) {
  const navigation = useNavigation();

  return <PassChange {...props} navigation={navigation} />;
}