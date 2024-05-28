import React, {Component} from 'react';
import { StyleSheet, Text,View, ScrollView, Image ,TouchableOpacity,Dimensions} from 'react-native';
import { Ionicons,FontAwesome5,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Menu extends React.Component {
    constructor(props) {
 
    super(props);
 
    this.state = {
        // Array: [{'name': 'nain', 'bndr': '00123' }],
        // hello: '123'
        Password: '',
        PatientGuidebookNo: '',
        ButtonColor: false,
        response: null
      
 
    };
 
  }
   
  store = async  () => {
    try {
        await AsyncStorage.setItem(
          'med',
          JSON.stringify(this.state.response),
        );
        //console.log(this.state.response);
      } catch (error) {
        // Error saving data
      }
    
}

  Treatment = () => {
    this.setState({ButtonColor : true})
    
    var SearchAPI = "";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                };

                var Data = {
                    pid: this.props.route.params.pid
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

                        alert("No Medicine to display");
                        this.setState({ButtonColor : false})
                    }else {
                      this.setState({response : response})
                      this.store();
                        this.props.navigation.navigate('TMNT',{
                          response: response,
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
                        });
                        // this.setState({FirstPass : ''})
                        this.setState({ButtonColor : false})
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({ButtonColor : false})
                });
  }

  Profile = () => {
    this.props.navigation.navigate('Profile',{
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
    });
  }
  
  Graph =() =>{

    //this.setState({ButtonColor : true})
    
    var SearchAPI = "";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                };

                var Data = {
                    pid: this.props.route.params.pid
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

                    if (response[0].message === 'No Data'){

                        alert("No Data to display");
                        this.setState({ButtonColor : false})
                    }else {
                        this.props.navigation.navigate('Graph',{
                          fbgDate1 : response[0].fbgDate1,
                          fbgDate2 : response[0].fbgDate2,
                          fbgDate3 : response[0].fbgDate3,
                          fbgDate4 : response[0].fbgDate4,
                          fbgDate5 : response[0].fbgDate5,
                          fbg1 : response[0].fbg1,
                          fbg2 : response[0].fbg2,
                          fbg3 : response[0].fbg3,
                          fbg4 : response[0].fbg4,
                          fbg5 : response[0].fbg5,
                          hba1c1 : response[0].hba1c1,
                          hba1c2 : response[0].hba1c2,
                          hba1c3 : response[0].hba1c3,
                          hba1c4 : response[0].hba1c4,
                          hba1c5 : response[0].hba1c5,
                          hba1cDate1 : response[0].hba1cDate1,
                          hba1cDate2 : response[0].hba1cDate2,
                          hba1cDate3 : response[0].hba1cDate3,
                          hba1cDate4 : response[0].hba1cDate4,
                          hba1cDate5 : response[0].hba1cDate5,
                          bp : response[0].bp,
                          bp_count : response[0].bp_count,
                         
                          bmiDate1 : response[0].bmiDate1,
                          bmiDate2 : response[0].bmiDate2,
                          bmiDate3 : response[0].bmiDate3,
                          bmiDate4 : response[0].bmiDate4,
                          bmiDate5 : response[0].bmiDate5,
                          bmi1 : response[0].bmi1,
                          bmi2 : response[0].bmi2,
                          bmi3 : response[0].bmi3,
                          bmi4 : response[0].bmi4,
                          bmi5 : response[0].bmi5,
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
                        });
                        // this.setState({FirstPass : ''})
                        //this.setState({ButtonColor : false})
                    }
                })
                .catch((error) => {
                    console.error(error);
                    //this.setState({ButtonColor : false})
                });
    //this.props.navigation.navigate('Graph');
  }

  visit = () => {
    this.props.navigation.navigate('Visit',{
      email : this.props.route.params.email,
      maritalStatus : this.props.route.params.maritalStatus,
      phoneNum : this.props.route.params.phoneNum,
      gender : this.props.route.params.gender,
      dob : this.props.route.params.dob,
      age : this.props.route.params.age,
      nid : this.props.route.params.nid,
      division : this.props.route.params.division,
      district : this.props.route.params.district,
      upazila : this.props.route.params.upazila,
      address : this.props.route.params.address,
      postalCode : this.props.route.params.postalCode,
      expenditure : this.props.route.params.expenditure,
      profession : this.props.route.params.profession,
      education : this.props.route.params.education,
      Bangla:this.props.route.params.Bangla
    });
  }

  render (){
    //console.log(this.props.route.params.bndrId);
    const { navigation } = this.props;
      return (
          <View style ={styles.main}>

      <View style ={styles.header} >
      <TouchableOpacity>
          <Ionicons name="md-menu" size={50} color="white" />
      </TouchableOpacity>
      
      </View>

      <ScrollView>
          
        <TouchableOpacity  style ={styles.allContent} onPress={this.visit}>
            <View style ={styles.reportContainer} >
              <View style ={styles.reportPicContainer}>  
                <Image source={require('../../assets/report.png')} style ={styles.reportPic} />
              </View>
              <Text style ={styles.reportText}>Reports</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.allContent} onPress={this.Treatment}>
            <View style= {this.state.ButtonColor ? styles.treatmentContainerChange : styles.treatmentContainer} >
              <View style ={styles.treatmentPicContainer}>  
                <Image source={require('../../assets/treatment.png')} style ={styles.reportPic} />
              </View>
              <Text style ={styles.reportText}>Treatment</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.allContent} onPress={this.Profile}>
            <View style ={styles.reportContainer} >
              <View style ={styles.profilePicContainer}>  
                 <FontAwesome5 name="user-alt" size={28} color="white" />
              </View>
              <Text style ={styles.reportText}>Profile</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity  style ={styles.allContent} onPress={this.Graph}>
            <View style ={styles.reportContainer} >
              <View style ={styles.reportGraphContainer}>  
                <Image source={require('../../assets/graph.png')} style ={styles.reportPic} />
              </View>
              <Text style ={styles.reportText}>Report Graph</Text>
            </View>
        </TouchableOpacity>

        {/* <TouchableOpacity  style ={styles.allContent} >
            <View style ={styles.reportContainer} >
              <View style ={styles.reportGraphContainer}>  
                <Image source={require('../../assets/doctor.png')} style ={styles.reportPic} />
              </View>
              <Text style ={styles.reportText}>Doctors</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity  style ={styles.allContent} >
            <View style ={styles.reportContainer} >
              <View style ={styles.reportGraphContainer}>  
                <Image source={require('../../assets/pharma.png')} style ={styles.reportPic} />
              </View>
              <Text style ={styles.reportText}>Pharmacy</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity  style ={styles.allContent} >
            <View style ={styles.reportContainer} >
              <View style ={styles.reportGraphContainer}>  
                <Image source={require('../../assets/badas.png')} style ={styles.reportPic} />
              </View>
              <Text style ={styles.reportText}>Badas Center</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity  style ={styles.allContent}>
            <View style ={styles.reportContainer} >
              <View style ={styles.profilePicContainer}>  
                 <Ionicons name="people" size={36} color="white" />
              </View>
              <Text style ={styles.reportText}>About Us</Text>
            </View>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => {navigation.navigate('Login',{
                      Bangla:this.props.route.params.Bangla
                    });}} style ={styles.allContent}>
            <View style ={styles.reportContainer} >
              <View style ={styles.profilePicContainer}>  
                 <AntDesign name="logout" size={28} color="white" style ={styles.LogoutPic}/>
              </View>
              <Text style ={styles.reportText}>Logout</Text>
            </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
      );
  }
}

const styles = StyleSheet.create({
 main: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#F5F5F9'
  },
  header: {
    width: '100%',
    paddingTop: Dimensions.get('window').width > 370 ? '12%' : '10%',
    paddingLeft: '5%',
    paddingRight: '10%',
    backgroundColor: '#2171B5',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  allContent:{
    alignItems: 'center',
    width: '100%'
  },
  profilePicContainer: {
    marginLeft: '5%'
  },
  reportContainer:{
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#2171B5',
    paddingTop: '3%',
    paddingBottom: '3%',
    borderWidth: 2,
    borderColor: '#2171B5',
    borderRadius: 15,
    marginTop: '5%'

  },
  treatmentContainer:{
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#2171B5',
    paddingTop: '3%',
    paddingBottom: '3%',
    borderWidth: 2,
    borderColor: '#2171B5',
    borderRadius: 15,
    marginTop: '5%'

  },
  treatmentContainerChange:{
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#00914C',
    paddingTop: '3%',
    paddingBottom: '3%',
    borderWidth: 2,
    borderColor: '#00914C',
    borderRadius: 15,
    marginTop: '5%'

  },
  reportPicContainer:{
    width: '9%',
    marginLeft: '5%',
    height: 35
  },
  treatmentPicContainer:{
    width: Dimensions.get('window').width > 370 ? '7.5%' : '8.1%',
    marginLeft: '5%',
    height: 35
  },
  reportGraphContainer:{
    width: Dimensions.get('window').width > 370 ? '10%' : '11%',
    marginLeft: '5%',
    height: 35
  },
  reportPic : {
    width: '100%',
    height: '100%'
  },
  reportText:{
    fontSize: 26,
    color: '#FFFFFF',
    marginLeft: '5%',
    fontWeight: 'bold'
  },
  LogoutPic: {
    marginTop: '10%'
  }
    
    
});

//export default Menu ;
export default function(props) {
  const navigation = useNavigation();

  return <Menu {...props} navigation={navigation} />;
}