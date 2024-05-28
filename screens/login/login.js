import React, {Component} from 'react';
import { StyleSheet, Text,View, ScrollView, TextInput,Image, Keyboard ,TouchableOpacity,
Dimensions, BackHandler} from 'react-native';
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends React.Component {
    constructor(props) {
 
    super(props);
 
    this.state = {
        Password: '',
        PatientGuidebookNo: '',
        ButtonColor: false,
        response: null
      
 
    };
 
  }

  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        return true;
    }
    store = async  () => {
        try {
            await AsyncStorage.setItem(
              'visit',
              JSON.stringify(this.state.response),
            );
            //console.log(this.state.response);
          } catch (error) {
            // Error saving data
          }
        
    }
  login = () => {
      var PassChange = this.state.Password;
      var PatientGuidebookNo = this.state.PatientGuidebookNo;
      this.setState({ButtonColor : true})

      if (PassChange.length == 0 || PatientGuidebookNo.length == 0){
          alert("Required field is empty! Please insert a valid Guidebook number and Password");
          this.setState({ButtonColor : false})
      } else {
          var SearchAPI = "";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };

                var Data = {
                    GuideBook: PatientGuidebookNo,
                    Password: PassChange
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

                        alert("Please insert a valid Guide Book Number and Password");
                        this.setState({ButtonColor : false})
                    }else {
                        this.setState({response : response})
                        this.store();
                        this.props.navigation.navigate('Visit',{
                            response: response[0],
                            Bangla: this.props.route.params.Bangla
                        });
                        this.setState({ButtonColor : false})

                        
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({ButtonColor : false})
                });
        
      }

      

  }

    render() {
        const { navigation } = this.props;
        let language = this.props.route.params.Bangla;

        

        
                        
    let loginLanguageController = <Text style ={styles.loginText}>Login</Text>

    let loginButtonController = <Text style ={styles.passText}>Login</Text>
    let PasswordHave = <Text style = {styles.signT}>Forget Password?</Text>
    let SignIn = <Text style = {styles.signText}>Set New Password</Text>

    if (language === 'false') {
        
                        
        loginLanguageController = <Text style ={styles.loginText}>প্রবেশ করুন</Text>
        loginButtonController = <Text style ={styles.passText}>প্রবেশ করুন</Text>
        PasswordHave = <Text style = {styles.signT}>পাসওয়ার্ড ভুলে গেছেন?</Text>
        SignIn = <Text style = {styles.signText}>নতুন পাসওয়ার্ড দিন</Text>
    }
        return(
            <ScrollView keyboardShouldPersistTaps='always'>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
                <View style ={styles.main}>
                    
                     <Image source={require('../../assets/logo.png')} style ={styles.image} />
                    
                    <View>
                        {loginLanguageController}
                    </View>
                    <View style ={styles.inputContainer}>
                        <TextInput style ={styles.input} 
                        placeholder='Guide Book Number/id by center/phone num/nid' 
                        onChangeText={PatientGuidebookNo => this.setState({PatientGuidebookNo})}
                        />
                        <TextInput style ={styles.input} 
                        placeholder='Enter Your Password' 
                        onChangeText={Password => this.setState({Password})}
                        />
                    </View>
                    <TouchableOpacity onPress={this.login}>
                        <View style ={this.state.ButtonColor ? styles.passContainerChange : styles.passContainer}>
                            {loginButtonController}
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>

            <View style = {styles.signIn}>
                {PasswordHave}
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('GuideBook')}}>
                {SignIn}
                </TouchableOpacity>
            </View>

        </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        paddingTop: Dimensions.get('window').width > 370 ? 150 : 120,
        justifyContent: 'center'
    },
    image: {
        width: Dimensions.get('window').width > 370 ? '57%' : '63%',
        height: Dimensions.get('window').width > 370 ? '13%' : "14%",
        marginBottom: '12%'
    },
    loginText: {
        fontSize: Dimensions.get('window').width > 370 ? 35 : 30,
        marginBottom: '15%',
        color: '#134074',
        fontWeight: '500',
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '95%',
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
        backgroundColor: '#2171B5',
        borderWidth: 2,
        borderColor: '#2171B5',
        borderRadius: 10,
        marginBottom: '6%' 
    },
    passContainerChange: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#00914C',
        borderWidth: 2,
        borderColor: '#00914C',
        borderRadius: 10,
        marginBottom: '6%' 
    },
    passText: {
        
        color: '#FFFFFF',
        paddingBottom: '3%',
        paddingLeft: '30%',
        paddingRight: '30%',
        paddingTop: '3%',
        fontSize: Dimensions.get('window').width > 370 ? 22 : 18,
        textAlign: 'center',
        overflow: 'hidden'
    },
    signIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%'
    },
    signT: {
        marginRight: '3%',
        fontSize: Dimensions.get('window').width > 370 ? 14 : 12
    },
    signText: {
        fontSize: 16,
        color: '#2171B5',
        textDecorationLine: 'underline',
        fontSize: Dimensions.get('window').width > 370 ? 14 : 12
    }
});

//export default Login;
export default function(props) {
    const navigation = useNavigation();
  
    return <Login {...props} navigation={navigation} />;
  }