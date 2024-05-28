import React,{Component}  from 'react';
import { StyleSheet, Text,View, ScrollView,Image ,TouchableOpacity,Dimensions,TextInput,
TouchableWithoutFeedback,Keyboard} from 'react-native';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

class EditPass extends React.Component {

  constructor(props) {
 
    super(props)
 
    this.state = {
        FirstPass: '',
      SecondPass: '',
      ButtonColor: false,
    }
 
  }

  Update = () => {
      var FirstPass = this.state.FirstPass;
     var SecondPass = this.state.SecondPass;

     if (FirstPass !== '' ){
        if(FirstPass === SecondPass){
        this.setState({ButtonColor : true})
        if(FirstPass.length < 6 || FirstPass.length > 15) {

            alert("Password Should be 6-15 Character ");
            this.setState({ButtonColor : false})
        }else {
            var SearchAPI = "https://app.bndr-org.com.bd/m_app/editpass.php";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };

                    var Data = {
                        GuideBook: this.props.route.params.guideBookNo,
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
                            alert('New password inserted');
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
    }else {
        alert("Please Insert password and Confirm password");
    }
  }

  menu = () => {
     
      this.props.navigation.navigate('Menu',{
        saved : this.state.saved,
                  guideBookNo: this.props.route.params.guideBookNo,
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
                  name : this.props.route.params.name,
                  patientId : this.props.route.params.patientId,
                  bndrId : this.props.route.params.bndrId,
                  saved : this.props.route.params.saved,
      });
    
  }
  
  render() {
    const { navigation } = this.props;
      return(
          <View style ={styles.main}>
              <View style ={styles.header} >
                    <TouchableOpacity onPress={this.menu}>
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

            <View style={styles.buttonContainerU}>
                <View >
                <TouchableOpacity  onPress={() => {navigation.navigate('Profile',{
                  saved : this.state.saved,
                  guideBookNo: this.props.route.params.guideBookNo,
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
                  name : this.props.route.params.name,
                  patientId : this.props.route.params.patientId,
                  bndrId : this.props.route.params.bndrId,
                  saved : this.props.route.params.saved,
                });}}>
                    <View style= {styles.passChangeContainer}>
                        
                        <Text style= {styles.passtext} >Profile</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.align}>
                <View style = {styles.passContainer}>
                    <Text style={styles.passText}>Enter Password:</Text>
                    <View style={styles.pass}>
                        <TextInput
                        placeholder='6-15 Character'  
                        onChangeText={FirstPass => this.setState({FirstPass})}
                        maxLength={15}
                        
                        />
                    </View>

                    <Text style={styles.passText}>Confirm Password:</Text>
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
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile');}} >
                      <View >
                          <Text style= {styles.cancel} >Cancel</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.Update} >
                      <View >
                          <Text style= {this.state.ButtonColor ? styles.passTextChange :styles.login} >Save</Text>
                      </View>
                  </TouchableOpacity>
              </View>

              
          </View>
      );
  }
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      paddingBottom: 40
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
      fontSize: Dimensions.get('window').width > 370 ? 15 : 13 
    },
    buttonContainerU: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '5%'
    },
    passChangeContainer:{
      width: '65%',
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: '#2171B5',
      borderRadius: 12,
      padding: '2%',
      justifyContent: 'center',
      backgroundColor: '#2171B5',
      alignItems: 'center',
      marginLeft: '8%',
    },
    passtext: {
      color: '#FFFFFF',
      fontSize: Dimensions.get('window').width > 370 ? 14 : 12,
      marginLeft: '2%'
      
    },
    align:{
        alignItems : 'center',
        marginTop: '5%'
    },
    passContainer: {
      width: '85%',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 15,
      backgroundColor: '#E7E7E9',
      borderColor: '#E7E7E9',
      borderRadius: 15,
      elevation: 10
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
      marginTop: '8%'
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
      backgroundColor: '#00914C',
      alignItems: 'center'
    },
});

export default EditPass;