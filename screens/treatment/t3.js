import React, {Component} from 'react';
import { StyleSheet, Text,View, Image ,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { Entypo,Ionicons,Feather,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

class T3 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Data: null,
            v1Date: '',
            response: this.props.route.params.response
        }
        
    };

    render() {
      const { navigation } = this.props;
        let selectedValue 
      selectedValue = '3';
      const newArr = this.state.response[0].filter(o => o.visit_number === selectedValue);
      const newArr2 = newArr.filter(o => o.med_name !== null);

      let v1DocName = newArr[0].finaltreat_doctor_name
      //console.log(this.state.response);
       var Medicine
       let visitDate = newArr[0].visit_date
       Medicine = <FlatList 
      data={newArr2}
      keyExtractor={(item) => item.rowN}
      renderItem = {({item}) => (
        <View style = {styles.infoContainerMed}>
          <Text style = {styles.Dtext}>{item.med_name}</Text>
          <View style = {styles.clock}>
            <Feather style = {styles.clockSpace} name="clock" size={14} color="black" />
            <Text >{item.med_dose}</Text>
          </View>

          <Text style = {styles.textM}>Doctors Comment</Text>
          <View style = {styles.advice}>
            <Text>{item.med_kha}  {item.med_ct} {item.med_ctt} {item.med_ca} {item.med_cho} {item.med_d}  {item.med_dt}</Text>
          </View>

        </View>
      )}
      />

      let v1DietNo = newArr[0].finaltreat_diet_no
      let v1PageNo = newArr[0].finaltreat_page_no
      let v1DAdvice = newArr[0].finaltreat_dietary_advice
      let v1PAcitvity = newArr[0].finaltreat_physical_acitvity
      let v1Ni = newArr[0].finaltreat_next_investigation
      let v1NVD = newArr[0].finaltreat_next_visit_date
      let v1Center = newArr[0].orgcenter_name
         const Left = () => {
             this.props.navigation.navigate('T2',{
              response: this.props.route.params.response,
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

         const Right = () => {
                if (this.state.response[0][0].rowcount === 4) {
            this.props.navigation.navigate('TMNT',{
              response: this.props.route.params.response,
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
          }else {
            this.props.navigation.navigate('T4',{
              response: this.props.route.params.response,
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
            })
          }
         }

         const image = () => {
          //alert(this.props.route.params.pid);
  
          var SearchAPI = "https://app.bndr-org.com.bd/m_app/image.php";
                  var header = {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  };
  
                  var Data = {
                      pid: this.props.route.params.pid,
                      vdate: visitDate
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
  
                      //console.log(response);
                      if (response[0].bndr_id === 'No Data'){
  
                          alert("No Image Found for this visit");
  
                      }else {
  
                        
                          this.props.navigation.navigate('PRESIMAGE',{
                            image: response,
                            response: this.props.route.params.response,
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
                  })
                  .catch((error) => {
                      console.error(error);
  
                  });
  
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
      <TouchableOpacity 
      onPress={() => {this.props.navigation.navigate('Menu',{
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
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login',{
          Bangla:this.props.route.params.Bangla,
        });}}>
          <View style = {styles.logoutF}>
              <AntDesign name="logout" size={14} color="white" />
              <Text style = {styles.logoutText}>Logout</Text>
            </View>
        </TouchableOpacity>
      </View>

      </View>

      <View style = {styles.namePic}>
          <View style = {styles.nameContainer}>
              {greetings}
              <Text style = {styles.nameText}>{this.props.route.params.name}</Text>
              <Text>{this.props.route.params.bndrId}</Text>
          </View>
          <View style = {styles.proPicContainer}>
              {pic}
          </View>
      </View>

      <View style = {styles.visitContainer}>
        <View style = {styles.visitController}>
            <TouchableOpacity onPress={Left}>
            <Entypo name="chevron-left" size={28} color="#2171B5" />
            </TouchableOpacity>
            <Text style = {styles.visitText}>View Visits</Text>
            <TouchableOpacity  onPress={Right} >
            <Entypo name="chevron-right" size={28} color="#2171B5" />
            </TouchableOpacity>
        </View>
        <TouchableOpacity 
        onPress={() => {this.props.navigation.navigate('TMNT',{
          response: this.props.route.params.response,
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
        });}} >
            <View style = {styles.lVisit} >
            <Text style = {styles.lvText}>Latest Visit</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style = {styles.vDate}>
        <Text style = {styles.vidText}>Visit Date:</Text>
        <Text style = {styles.vidDate}>{visitDate}</Text>
      </View>

      <View style = {styles.PImageAlign}>
        <TouchableOpacity onPress={image}>
            <View style = {styles.PImageCaontainer}>
              <View style = {styles.PImage}>
              <Image source={require('../../assets/prescription.png')}  style ={styles.proPic}/>
              </View>
              <Text style = {styles.PText}>View Prescription Image</Text>
            </View>
        </TouchableOpacity>
      </View>
    <ScrollView>
      <View style = {styles.infoContainer}>
        <Text>Visit number : 3</Text>
        <Text style = {styles.Dtext}>{v1DocName}</Text>
        <Text >{v1Center}</Text>

      </View >

      {Medicine}

      <View style = {styles.infoContainer}>

        <View style = {styles.DPContainer}>
          <View style = {styles.dContainer}>
            <Text>Diet No</Text>
            <Text style = {styles.dInfo}>{v1DietNo}</Text>
          </View>
          <View style = {styles.dContainer}>
            <Text>Page No</Text>
            <Text style = {styles.dInfo}>{v1PageNo}</Text>
          </View>
        </View>
        
        <Text style = {styles.textM}>Dietary Advice (kcal/day)</Text>
        <View style = {styles.advice}>
         <Text>{v1DAdvice}</Text>
        </View>

        <Text style = {styles.textM}>Physical Activity (minutes/day)</Text>
        <View style = {styles.advice}>
          <Text>{v1PAcitvity}</Text>
        </View>

        <Text style = {styles.textM}>Next Investigation</Text>
        <View style = {styles.advice}>
          <Text>{v1Ni}</Text>
        </View>

        <View style = {styles.NextVisit}>
          <Text style = {styles.NextVisitText}>Next Visit Date</Text>
          <Text style = {styles.NextVisitDate}>{v1NVD}</Text>
        </View>

      </View>
    </ScrollView>

      


    </View>
      );
        
    }


}

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
      alignItems: 'center',
      marginTop: '2%'
    },
    PImageCaontainer: {
      width: '90%',
      backgroundColor: '#2171B5',
      borderWidth: 2,
      borderColor: '#E7E7E9',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems:'center',
      padding: 10
    },
    PImage: {
      width: '15%',
      height: 40
    },
    PText: {
      color: 'white',
      marginLeft: '5%',
      fontSize: 20
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
      fontSize: Dimensions.get('window').width > 360 ? 18 : 16,
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

//export default T3;
export default function(props) {
  const navigation = useNavigation();

  return <T3 {...props} navigation={navigation} />;
}