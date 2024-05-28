import React,{Component} from 'react';
import {StyleSheet, Text,View, ScrollView, TextInput,Image, Button, 
    TouchableWithoutFeedback, Keyboard,TouchableOpacity, Dimensions} from 'react-native';
import dateFormat from "dateformat";
import { useNavigation } from '@react-navigation/native';

    

class GuideBookLogIN extends React.Component {

    constructor(props) {
 
    super(props);
 
    this.state = {
 
      patientGuideBookNo: '',
      bangla: 'true',
      ButtonColor: false
 
    };
 
  }

    
    
    SearchRecord = () => { 

        this.setState({ButtonColor : true})
        var patientGuideBookNo = this.state.patientGuideBookNo;

        if (patientGuideBookNo.length==0){
            alert("Please enter a Guide Book Number");
            this.setState({ButtonColor : false})
        }else {

                var SearchAPI = "";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };

                var Data = {
                    GuideBook: patientGuideBookNo
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

                    if (response[0].bndr_id === 'No Data'){

                        alert("Please enter a valid Guide Book Number");
                        this.setState({ButtonColor : false})

                    }else {
                        this.props.navigation.navigate('PassChange',{
                            bndrId: response[0].bndr_id,
                            patientName: response[0].patient_name,
                            patientPhone: response[0].patient_phone,
                            patientGuideBookNo: response[0].patient_guide_book_no,
                            patientIdbyCenter: response[0].patient_idby_center,
                            centerName: response[0].center_name,
                            Bangla: this.state.bangla
                        });
                        
                            
                        this.textInput.clear()
                        this.setState({ButtonColor : false})
                        this.setState({patientGuideBookNo : ''})
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({ButtonColor : false})
                });
                // this.props.navigation.navigate('PassChange',{guidebook: patientGuideBookNo});
        }
    }
     
    render () {
    
        const { navigation } = this.props;
        
    let languageController = 
                        <View style ={styles.languageContainer}>
                            <TouchableOpacity onPress={() => this.setState({bangla: 'false'})}  >
                            <Text style ={styles.languageText}>BANGLA</Text>
                            </TouchableOpacity>
                        </View>
                    
    let welcomeLanguageController = <Text style ={styles.welcomeText}>Welcome</Text>

    let passwordLanguageController = <Text style ={this.state.ButtonColor ? styles.passTextChange : styles.passText}>SET NEW PASSWORD</Text>
    let PasswordHave = <Text style = {styles.signT}>Have Password?</Text>
    let SignIn = <Text style = {styles.signText}>Sign In</Text>

    if (this.state.bangla === 'false') {

        languageController = 
                        <View style ={styles.languageContainer}>
                            <TouchableOpacity onPress={() => this.setState({bangla: 'true'})}  >
                            <Text style ={styles.languageText}>ENGLISH</Text>
                            </TouchableOpacity>
                        </View>
        welcomeLanguageController = <Text style ={styles.welcomeText}>স্বাগতম</Text>
        passwordLanguageController = <Text style ={this.state.ButtonColor ? styles.passTextChange : styles.passText}>নতুন পাসওয়ার্ড ঠিক করুন</Text>
        PasswordHave = <Text style = {styles.signT}>পাসওয়ার্ড আছে?</Text>
        SignIn = <Text style = {styles.signText}>প্রবেশ করুন</Text>
        
    }
//     console.log({
// 	width: Dimensions.get('window').width,
// 	height: Dimensions.get('window').height
// })
//     let find = 'hello'
//    var count = (find.match(/l/g) || []).length;
//    console.log(count);

// let date1 = '2021-02-20'
// let date2 = '2021-01-22'
// let dateC
// if (date1 > date2){
//    dateC = dateFormat(date1, "dS mmmm, yyyy");
//     console.log(dateC);
// }else {
//     console.log('smaller');
// }
   return (
    <ScrollView keyboardShouldPersistTaps='always'>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
                <View style ={styles.main}>
                    {languageController}
                     <Image source={require('../../assets/logo.png')} style ={styles.image} />
                    
                    <View>
                        {welcomeLanguageController}
                    </View>
                    <View style ={styles.inputContainer}>
                        <TextInput blurOnSubmit style ={styles.input} placeholder='Guide Book Number/id by center/phone num/nid' 
                        onChangeText={patientGuideBookNo => this.setState({patientGuideBookNo})}
                        ref={input => { this.textInput = input }}
                        />
                    </View>
                    <TouchableOpacity onPress={this.SearchRecord}>
                        <View style ={styles.passContainer}>
                            {passwordLanguageController}
                        </View>
                    </TouchableOpacity>

                </View>

                
            </TouchableWithoutFeedback>
            <View style = {styles.signIn}>
                {PasswordHave}
                <TouchableOpacity onPress={() => {navigation.navigate('Login', {Bangla: this.state.bangla})}}>
                {SignIn}
                </TouchableOpacity>
            </View>

        </ScrollView>
  );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        justifyContent: 'center'
    },
    languageContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: '10%',
        marginRight: '10%'
        
        
    },
    languageText:{
        borderWidth: 2,
        borderColor: '#2171B5',
        borderRadius: 10,
        color: '#2171B5',
        padding: '2%',
        paddingLeft: '3%',
        paddingTop: '3%',
        marginBottom: Dimensions.get('window').width > 370 ? '22%' : '18%',
        fontSize: Dimensions.get('window').width > 370 ? 16 : 10,
        letterSpacing: 1
    },
    image: {
        width: Dimensions.get('window').width > 370 ? '65%' : '65%',
        height: Dimensions.get('window').width > 370 ? '14%' : '15%',
        marginBottom: '12%'
    },
    welcomeText: {
        fontSize: Dimensions.get('window').width > 370 ? 35 : 30,
        marginBottom: '15%',
        color: '#134074',
        fontWeight: '500'
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 40,
        textAlign: 'center',
        borderBottomColor: '#C4CDD8',
        borderBottomWidth: 2,
        marginBottom: '12%',
        fontSize: Dimensions.get('window').width > 370 ? 16 : 14
    },
    passContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: '10%'
    },
    passText: {
        borderWidth: 2,
        borderColor: '#2171B5',
        borderRadius: 10,
        color: '#2171B5',
        padding: '2%',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingTop: '3%',
        fontSize: Dimensions.get('window').width > 370 ? 22 : 18,
        textAlign: 'center'
    },
    passTextChange: {
        borderWidth: 2,
        borderColor: '#00914C',
        borderRadius: 10,
        color: '#FFFFFF',
        padding: '2%',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingTop: '3%',
        fontSize: Dimensions.get('window').width > 370 ? 22 : 18,
        textAlign: 'center',
        backgroundColor: '#00914C'
    },
    signIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%'
    },
    signT: {
        marginRight: '4%',
        fontSize: Dimensions.get('window').width > 370 ? 14 : 12,
    },
    signText: {
        fontSize: 16,
        color: '#2171B5',
        textDecorationLine: 'underline',
        fontSize: Dimensions.get('window').width > 370 ? 14 : 12,
    }
});

//export default GuideBookLogIN;
export default function(props) {
    const navigation = useNavigation();
  
    return <GuideBookLogIN {...props}  navigation={navigation} />;
  }