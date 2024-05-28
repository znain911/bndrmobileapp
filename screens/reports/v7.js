import React, {Component} from 'react';
import { StyleSheet, Text,View, ScrollView,Image,TouchableOpacity,Dimensions} from 'react-native';
import { Entypo,Ionicons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

class V7 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Data: null,
            v1Date: '',
            response: this.props.route.params.response
        }
        
    };
  
   menu = () => {
      this.props.navigation.navigate('Menu',{
        name : this.state.response[0].patient_name,
        bndrId : this.state.response[0].bndr_id,
        patientId : this.state.response[0].patient_id,
        guideBookNo : this.state.response[0].patient_guide_book,
        gender : this.state.response[0].patient_gender,
        center : this.state.response[0].orgcenter_name,
        patientIdByCenter : this.state.response[0].patient_idby_center,
        email : this.state.response[0].patient_email,
        maritalStatus : this.state.response[0].patient_marital_status,
        organization : this.state.response[0].org_name,
        phoneNum : this.state.response[0].patient_phone,
        Adphone : this.state.response[0].additional_number,
        regDate : this.state.response[0].patient_create_date,
        dob : this.state.response[0].patient_dateof_birth,
        age : this.state.response[0].patient_age,
        nid : this.state.response[0].patient_nid,
        division : this.state.response[0].division_name,
        district : this.state.response[0].district_name,
        upazila : this.state.response[0].upazila_name,
        districtid : this.state.response[0].district_id,
        divisionid : this.state.response[0].division_id,
        upazilaid : this.state.response[0].upazila_id,
        address : this.state.response[0].patient_address,
        postalCode : this.state.response[0].patient_postal_code,
        expenditure : this.state.response[0].profinfo_mothly_income,
        profession : this.state.response[0].profinfo_profession,
        education : this.state.response[0].profinfo_education,
        pid : this.state.response[0].patient_id,
        Bangla:this.props.route.params.Bangla
      });
   }

    render() {
      const { navigation } = this.props;
      let pic = <Image source={require('../../assets/male.png')} style ={styles.proPic} />
      if (this.state.response[0].patient_gender === '1'){
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
        let date
        let Fbg 
        let twohag 
        let pmbg 
        let rbg 
        let Hba1c 
        let Sctin 
        let Ua 
        let Uc 
        let Usg 
        let Hb 
        let Tc 
        let Dcn 
        let Dcm 
        let Dce 
        let Dcz 
         let Tchol 
        let tg 
        let Ldlc 
        let Hdlc 
        let Sgpt 
        let Ecg 
        let Center 
        let vnum 
        let Weight
        let Height 
        let esr 
        let StandingBp 
        let SittingBp 
        let sitting_sbp
        let sitting_dbp
        let standing_sbp
        let standing_dbp
        let selectedValue = '7';
        const newArr = this.state.response.filter(o => o.visit_number === selectedValue);
          Fbg = newArr[0].fbg
          twohag = newArr[0].twohag
          pmbg = newArr[0].post_meal_bg
          rbg = newArr[0].rbg
          Hba1c = newArr[0].hba1c
          Sctin = newArr[0].s_creatinine
          Ua = newArr[0].urine_albumin
          Uc = newArr[0].urine_acetone
          Usg = newArr[0].usg_abnormals
          Hb = newArr[0].hb
          Tc = newArr[0].tc
          esr = newArr[0].esr
          Tchol = newArr[0].t_chol
          tg = newArr[0].tg
          Ldlc = newArr[0].ldl_c
          Hdlc = newArr[0].hdl_c
          Sgpt = newArr[0].sgpt
          if(newArr[0].ecg_abnormals !=='null'){
          Ecg = newArr[0].ecg_abnormals
          }
          Dce = newArr[0].dc_e
          Dcn = newArr[0].dc_n
          Dcz = newArr[0].dc_z
          Dcm = newArr[0].dc_m
          Center = newArr[0].visit_center
          date = newArr[0].visit_date
          vnum = newArr[0].rowcount
          Height = newArr[0].height
          Weight = newArr[0].weight
          if(newArr[0].sitting_sbp){
            sitting_sbp = newArr[0].sitting_sbp.split(" ");
          }else {
            sitting_sbp = null
          }
          if(newArr[0].sitting_dbp){
            sitting_dbp = newArr[0].sitting_dbp.split(" ");
          }else {
            sitting_dbp = null
          }

          if(newArr[0].standing_sbp){
            standing_sbp = newArr[0].standing_sbp.split(" ");
          }else {
            standing_sbp = null
          }
          if(newArr[0].standing_dbp){
            standing_dbp = newArr[0].standing_dbp.split(" ");
          }else {
            standing_dbp = null
          }

          if(sitting_sbp && sitting_dbp){
            SittingBp = sitting_sbp[0] + '/' + sitting_dbp[0]
          }else{
            SittingBp = null
          }
          
          if(standing_sbp && standing_dbp){
            StandingBp = standing_sbp[0] + '/' + standing_dbp[0]
          }else{
            StandingBp = null
          }
 
        const next = () => {

          if (this.state.response[0].rowcount === 8) {
            this.props.navigation.navigate('Visit',{
              response: this.state.response,
           Bangla:this.props.route.params.Bangla
            });
          }else {
            this.props.navigation.navigate('V8',{
              response: this.state.response,
           Bangla:this.props.route.params.Bangla
            })
          }
        }
 
        const previous = () => {

          this.props.navigation.navigate('V6', { 
            response: this.state.response,
            Bangla:this.props.route.params.Bangla
          })

        }
        return (
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
        
                <View style = {styles.namePic}>
                    <View style = {styles.nameContainer}>
                        {greetings}
                        <Text style = {styles.nameText}>{this.state.response[0].patient_name}</Text>
                        <Text>{this.state.response[0].bndr_id}</Text>
                        <Text style = {{fontSize: 18}}>Guide Book No : {this.state.response[0].patient_guide_book}</Text>
                    </View>
                    <View style = {styles.proPicContainer}>
                        {pic}
                    </View>
                </View>

                <View style = {styles.visitContainer}>
                  <View style = {styles.visitController}>
                      <TouchableOpacity onPress={previous}>
                      <Entypo name="chevron-left" size={34} color="#2171B5" />
                      </TouchableOpacity>
                      <Text style = {styles.visitText}>View Visits</Text>
                      <TouchableOpacity onPress={next} >
                      <Entypo name="chevron-right" size={34} color="#2171B5" />
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => {navigation.navigate('Visit',{
                    response: this.state.response,
                    Bangla:this.props.route.params.Bangla
                  });}}>
                      <View style = {styles.lVisit} >
                      <Text style = {styles.lvText}>Latest Visit</Text>
                      </View>
                  </TouchableOpacity>
                </View>

                <View style = {styles.vDate}>
                  <Text style = {styles.vidText}>Visit Date:</Text>
                  <Text style = {styles.vidDate}>{date}</Text>
                </View>
                <ScrollView  >
                    <View style = {styles.infoContainer} >
                      <Text style = {styles.visitNumber}>Visit Number: 7</Text>
                        <Text style = {styles.infoHeader} >Progress Report</Text>
                        <Text style = {styles.infoCenter}>{Center}</Text>
                        <View style = {styles.medData}>
                          <View>
                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>Height</Text>
                                  <Text style = {styles.medDataInfo}>{Height}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>Sitting BP</Text>
                                  <Text style = {styles.medDataInfo}>{SittingBp}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>FBG</Text>
                                  <Text style = {styles.medDataInfo}>{Fbg}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>2hAG</Text>
                                  <Text style = {styles.medDataInfo}>{twohag}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>Post-Meal</Text>
                                  <Text style = {styles.medDataInfo}>{pmbg}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>RBG</Text>
                                  <Text style = {styles.medDataInfo}>{rbg}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>HbA1c</Text>
                                  <Text style = {styles.medDataInfo}>{Hba1c}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>S. Creatinine</Text>
                                  <Text style = {styles.medDataInfo}>{Sctin}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>Urine Albumin</Text>
                                  <Text style = {styles.medDataInfo}>{Ua}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>Urine Acetone</Text>
                                  <Text style = {styles.medDataInfo}>{Uc}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>USG</Text>
                                  <Text style = {styles.medDataInfo}>{Usg}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>Hb</Text>
                                  <Text style = {styles.medDataInfo}>{Hb}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                                  <Text style = {styles.medDataText}>TC</Text>
                                  <Text style = {styles.medDataInfo}>{Tc}</Text>
                            </View>
                          </View>
                          <View style = {styles.mdL} >
                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>Weight</Text>
                              <Text style = {styles.medDataInfo}>{Weight}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>Standing BP</Text>
                              <Text style = {styles.medDataInfo}>{StandingBp}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>T. Chol</Text>
                              <Text style = {styles.medDataInfo}>{Tchol}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>TG</Text>
                              <Text style = {styles.medDataInfo}>{tg}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>LDL-C</Text>
                              <Text style = {styles.medDataInfo}>{Ldlc}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>HDL-C</Text>
                              <Text style = {styles.medDataInfo}>{Hdlc}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>SGPT</Text>
                              <Text style = {styles.medDataInfo}>{Sgpt}</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>ECG</Text>
                              <Text style = {styles.medDataInfo}>{Ecg}</Text>
                            </View>
                            <Text style = {styles.medDataDC}>DC</Text>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.DataDC}>N-{Dcn}%</Text>
                              <Text style = {styles.DataDC}>Z-{Dcz}%</Text>
                            </View>

                            <View style = {styles.medDataOne}>
                              <Text style = {styles.DataDC}>M-{Dcm}%</Text>
                              <Text style = {styles.DataDC}>E-{Dce}%</Text>
                            </View>
                              
                              
                          </View>
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
        paddingBottom: 20
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
     marginTop: '8%'
    },
    visitController: {
      flexDirection: 'row'
    },
    visitText: {
      fontSize: Dimensions.get('window').width > 370 ? 15 : 13,
      marginLeft: '8%',
      marginRight: '8%',
      marginTop: '1%',
      color: '#2171B5',
      paddingTop: '1%'
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
    infoContainer: {
      backgroundColor: '#E7E7E9',
      padding: '3%',
      margin: '2%',
      marginLeft: '6%',
      marginRight: '5%',
      borderWidth: 2,
      borderColor: '#E7E7E9',
      borderRadius: 15,
      elevation: 15
    },
    infoHeader: {
      fontSize: Dimensions.get('window').width > 370 ? 20 : 18,
      fontWeight: 'bold'
    },
    medData: {
      width: '100%',
      flexDirection: 'row',
      marginTop: '3%',
      marginBottom: '5%'
    },
    medDataOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: '1%'
    },
    mdL:{
      marginLeft: Dimensions.get('window').width > 370 ? '5%' :'7%'
    },
    medDataText: {
      marginTop: '2%',
      fontSize: Dimensions.get('window').width > 370 ? 13 : 11
    },
    medDataInfo: {
      marginLeft: '3%',
      fontSize: Dimensions.get('window').width > 370 ? 13 : 11,
      textAlign: 'right',
      marginTop: '2%',
    },
    medDataDC: {
      marginTop: '3%',
      borderBottomWidth: 1,
      fontWeight: 'bold',
      marginBottom: '1%',
      fontSize: Dimensions.get('window').width > 370 ? 14 : 11
    },
    DataS:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    DataMa: {
    },
    DataMaChange: {
    },
    DataDC: {
      fontWeight: 'bold',
      fontSize: Dimensions.get('window').width > 370 ? 13 : 11
    }
    
    
    
});

//export default V7;
export default function(props) {
  const navigation = useNavigation();

  return <V7 {...props} navigation={navigation} />;
}