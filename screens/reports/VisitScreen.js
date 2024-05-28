import * as React from 'react';
import { StyleSheet, Text,View, ScrollView,Image ,TouchableOpacity,Dimensions,BackHandler} from 'react-native';
import { Entypo,Ionicons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class VisitScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Data: null,
            v1Date: '',
            response: [[]],
            report: [[]],
        }
        
    };
 componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        this._retrieveData();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('visit');
        const state = value ? JSON.parse(value) : undefined;
        if (value !== null) {
          // We have data!!
          //console.log(state);
          
          this.setState({response : state[0]})
          //console.log(this.state.response[0].fbg)
        }

        let selectedValue
      //console.log(this.state.response[4].med_name);
      if (this.state.response[0].rowcount >= 12){
       selectedValue = '12'; 
      }else if (this.state.response[0].rowcount === 11){
        selectedValue = '11';
      }else if (this.state.response[0].rowcount === 10){
        selectedValue = '10';
      }else if (this.state.response[0].rowcount === 9){
        selectedValue = '9';
      }else if (this.state.response[0].rowcount === 8){
        selectedValue = '8';
      }else if (this.state.response[0].rowcount === 7){
        selectedValue = '7';
      }else if (this.state.response[0].rowcount === 6){
        selectedValue = '6';
      }else if (this.state.response[0].rowcount === 5){
        selectedValue = '5';
      }else if (this.state.response[0].rowcount === 4){
        selectedValue = '4';
      }else if (this.state.response[0].rowcount === 3){
        selectedValue = '3';
      }else if (this.state.response[0].rowcount === 2){
        selectedValue = '2';
      }else {
        selectedValue = '1';
      }
       
      if(selectedValue === '1'){
        const newArr2 = this.state.response
        this.setState({report : newArr2});
      }else{
      const newArr = this.state.response.filter(o => o.visit_number === selectedValue);
      
      this.setState({report : newArr});
      }
      //console.log(newArr);
      } catch (error) {
        // Error retrieving data
      }
    };
    handleBackButtonClick = () => {
      this.props.navigation.goBack(null);
        return true;
    }
    
   menu = () => {
      this.props.navigation.navigate('Menu',{
        name : this.state.response[0].patient_name,
        patientId : this.state.response[0].patient_id,
        bndrId : this.state.response[0].bndr_id,
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
      
      let date 
        let SittingBp 
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
        let Weight
        let Height 
        let StandingBp 
        let Tchol 
        let tg 
        let Ldlc 
        let Hdlc 
        let Sgpt 
        let Ecg 
        let Center 
        let vnum 
        let sitting_sbp
        let sitting_dbp
        let standing_sbp
        let standing_dbp
        let esr
       
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
            
        
         
          
          Fbg = this.state.report[0].fbg
          twohag = this.state.report[0].twohag
          pmbg = this.state.report[0].post_meal_bg
          rbg = this.state.report[0].rbg
          Hba1c = this.state.report[0].hba1c
          Sctin = this.state.report[0].s_creatinine
          Ua = this.state.report[0].urine_albumin
          Uc = this.state.report[0].urine_acetone
          Usg = this.state.report[0].usg_abnormals
          Hb = this.state.report[0].hb
          Tc = this.state.report[0].tc
          Tchol = this.state.report[0].t_chol
          tg = this.state.report[0].tg
          Ldlc = this.state.report[0].ldl_c
          Hdlc = this.state.report[0].hdl_c
          Sgpt = this.state.report[0].sgpt
          esr = this.state.report[0].esr
          Height = this.state.report[0].height
          Weight = this.state.report[0].weight
          if(this.state.report[0].sitting_sbp){
            sitting_sbp = this.state.report[0].sitting_sbp.split(" ");
          }else {
            sitting_sbp = null
          }
          if(this.state.report[0].sitting_dbp){
            sitting_dbp = this.state.report[0].sitting_dbp.split(" ");
          }else {
            sitting_dbp = null
          }

          if(this.state.report[0].standing_sbp){
            standing_sbp = this.state.report[0].standing_sbp.split(" ");
          }else {
            standing_sbp = null
          }
          if(this.state.report[0].standing_dbp){
            standing_dbp = this.state.report[0].standing_dbp.split(" ");
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
          
          if(this.state.report[0].ecg_abnormals !=='null'){
          Ecg = this.state.report[0].ecg_abnormals
          }
          
          Dce = this.state.report[0].dc_e
          Dcn = this.state.report[0].dc_n
          Dcz = this.state.report[0].dc_z
          Dcm = this.state.report[0].dc_m
          Center = this.state.report[0].visit_center
          date = this.state.report[0].visit_date
          vnum = this.state.report[0].visit_number

          
            let EyeDate 
        let Eyecenter 
        let EyeExam 
        let EyeDoctor 
        let RightEyeText 
        let EyeRight 
        let LeftEyeText 
        let EyeLeft 
        let OtherText 
        let EyeOther 
        let TreatmentText 
        let EyeTm 
        let FootDate 
        let FOOtExam 
        let FootDoctor 
        let PeriText 
        let SenText 
        let AdpPre
        if(this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_left && this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_right){
            AdpPre = this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_left + '|'+ this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_right
        }else if (this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_left){
          AdpPre = this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_left
        }else if (this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_right){
          AdpPre = this.state.report[0].footexmprfl_arteria_dorsalis_predis_present_right
        }else {
          AdpPre = null
        }

        let AdpAbs 
        if(this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_left && this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_right){
            AdpAbs = this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_left + '|'+ this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_right
        }else if (this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_left){
          AdpAbs = this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_left
        }else if (this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_right){
          AdpAbs = this.state.report[0].footexmprfl_arteria_dorsalis_predis_absent_right
        }else {
          AdpAbs = null
        }

        let PtPre 
        if(this.state.report[0].footexmprfl_posterior_tribila_present_left && this.state.report[0].footexmprfl_posterior_tribila_present_right){
            PtPre = this.state.report[0].footexmprfl_posterior_tribila_present_left + '|'+ this.state.report[0].footexmprfl_posterior_tribila_present_right
        }else if (this.state.report[0].footexmprfl_posterior_tribila_present_left){
          PtPre = this.state.report[0].footexmprfl_posterior_tribila_present_left
        }else if (this.state.report[0].footexmprfl_posterior_tribila_present_right){
          PtPre = this.state.report[0].footexmprfl_posterior_tribila_present_right
        }else {
          PtPre = null
        }
        
        let PtAbs 
        if(this.state.report[0].footexmprfl_posterior_tribila_absent_left && this.state.report[0].footexmprfl_posterior_tribila_absent_right){
            PtAbs = this.state.report[0].footexmprfl_posterior_tribila_absent_left + '|'+ this.state.report[0].footexmprfl_posterior_tribila_absent_right
        }else if (this.state.report[0].footexmprfl_posterior_tribila_absent_left){
          PtAbs = this.state.report[0].footexmprfl_posterior_tribila_absent_left
        }else if (this.state.report[0].footexmprfl_posterior_tribila_absent_right){
          PtAbs = this.state.report[0].footexmprfl_posterior_tribila_absent_right
        }else {
          PtAbs = null
        }

        let MfPre 
        if(this.state.report[0].footexmsns_monofilament_present_left && this.state.report[0].footexmsns_monofilament_present_right){
            MfPre = this.state.report[0].footexmsns_monofilament_present_left + '|'+ this.state.report[0].footexmsns_monofilament_present_right
        }else if (this.state.report[0].footexmsns_monofilament_present_left){
          MfPre = this.state.report[0].footexmsns_monofilament_present_left
        }else if (this.state.report[0].footexmsns_monofilament_present_right){
          MfPre = this.state.report[0].footexmsns_monofilament_present_right
        }else {
          MfPre = null
        }
        let MfAbs 
        if(this.state.report[0].footexmsns_monofilament_absent_left && this.state.report[0].footexmsns_monofilament_absent_right){
            MfAbs = this.state.report[0].footexmsns_monofilament_absent_left + '|'+ this.state.report[0].footexmsns_monofilament_absent_right
        }else if (this.state.report[0].footexmsns_monofilament_absent_left){
          MfAbs = this.state.report[0].footexmsns_monofilament_absent_left
        }else if (this.state.report[0].footexmsns_monofilament_absent_right){
          MfAbs = this.state.report[0].footexmsns_monofilament_absent_right
        }else {
          MfAbs = null
        }

        let TfPre 
        if(this.state.report[0].footexmsns_tuning_fork_present_left && this.state.report[0].footexmsns_tuning_fork_present_right){
            TfPre = this.state.report[0].footexmsns_tuning_fork_present_left + '|'+ this.state.report[0].footexmsns_tuning_fork_present_right
        }else if (this.state.report[0].footexmsns_tuning_fork_present_left){
          TfPre = this.state.report[0].footexmsns_tuning_fork_present_left
        }else if (this.state.report[0].footexmsns_tuning_fork_present_right){
          TfPre = this.state.report[0].footexmsns_tuning_fork_present_right
        }else {
          TfPre = null
        }

        let TfAbs 
        if(this.state.report[0].footexmsns_tuning_fork_absent_left && this.state.report[0].footexmsns_tuning_fork_absent_right){
            TfAbs = this.state.report[0].footexmsns_tuning_fork_absent_left + '|'+ this.state.report[0].footexmsns_tuning_fork_absent_right
        }else if (this.state.report[0].footexmsns_tuning_fork_absent_left){
          TfAbs = this.state.report[0].footexmsns_tuning_fork_absent_left
        }else if (this.state.report[0].footexmsns_tuning_fork_absent_right){
          TfAbs = this.state.report[0].footexmsns_tuning_fork_absent_right
        }else {
          TfAbs = null
        }
        
        let periInfo 
        let SenInfo
        let ESR
      if(this.state.report[0].rowcount === 1){
          EyeDate = <Text style = {styles.infoDate}>{this.state.report[0].eyeexam_date}</Text>
          Eyecenter = <Text>{Center}</Text>
          EyeExam = <Text style = {styles.eyeExam}>EYE EXAMINATION</Text>
          EyeDoctor = <Text style = {styles.eyeExam}>{this.state.report[0].eyeexam_doctor_name}</Text>
          RightEyeText = <Text style = {styles.eye}>Right Eye</Text>
          EyeRight = <View style = {styles.eyeInfoRight}>
                  <Text >{this.state.report[0].eyeexam_right_eye}</Text>
                  </View>
          LeftEyeText = <Text style = {styles.eye}>Left Eye</Text>
          EyeLeft = <View style = {styles.eyeInfoRight}>
                  <Text >{this.state.report[0].eyeexam_left_eye}</Text>
                  </View>
          OtherText = <Text style = {styles.eye}>Other</Text>
          EyeOther = <View style = {styles.eyeInfoRight}>
                  <Text >{this.state.report[0].eyeexam_other}</Text>
                  </View>
          TreatmentText = <Text style = {styles.eye}>Treatment</Text>
          EyeTm = <View style = {styles.eyeInfoRight}>
                  <Text >{this.state.report[0].eyeexam_treatment}</Text>
                  </View>
          FootDate = <Text style = {styles.infoDate}>{this.state.report[0].footexm_date}</Text>
          FOOtExam = <Text style = {styles.eyeExam}>FOOT EXAMINATION</Text>
          FootDoctor = <Text style = {styles.eyeExam}>{this.state.report[0].footexm_doctor_name}</Text>
          PeriText = <View style = {styles.peri}>
                  <Text style = {styles.eyeExam}>PERIPHERAL PLUS</Text>
                  </View>
          SenText = <View style = {styles.peri}>
                          <Text style = {styles.eyeExam}>SENSATION</Text>
                          </View>
          periInfo = <View style = {styles.periStyle}>
                        <View>
                            <Text style = {styles.periText}>Arteria Dorsalis Pedis</Text>
                            <Text style = {styles.periInfo}>Absent-{AdpAbs}      Present-{AdpPre}</Text>
                            <Text style = {styles.periText}>Posterior Tribila</Text>
                        
                            
                            <Text style = {styles.periInfo}>Absent-{PtAbs}       Present-{PtPre}</Text>
                        </View>
                      </View>
          SenInfo = <View style = {styles.periStyle}>
                      <View>
                          <Text style = {styles.periText}>Monofilament</Text>
                          <Text style = {styles.periInfo}>Absent-{MfAbs}        Present-{MfPre}</Text>
                          <Text style = {styles.periText}>Tuning Fork</Text>
                      
                          
                          <Text style = {styles.periInfo}>Absent-{TfAbs}        Present-{TfPre}</Text>
                      </View>
                    </View>
          
          ESR = <View style = {styles.medDataOne}>
                              <Text style = {styles.medDataText}>ESR</Text>
                              <Text style = {styles.medDataInfo}>{esr}</Text>
                            </View>
          }
    

    const previous = () => {
      if(this.state.response[0].rowcount === 2 ){
         this.props.navigation.navigate('V1',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 3 ){
         this.props.navigation.navigate('V2',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 4 ){
         this.props.navigation.navigate('V3',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 5 ){
         this.props.navigation.navigate('V4',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 6 ){
         this.props.navigation.navigate('V5',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 7 ){
         this.props.navigation.navigate('V6',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 8 ){
         this.props.navigation.navigate('V7',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 9 ){
         this.props.navigation.navigate('V8',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 10 ){
         this.props.navigation.navigate('V9',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 11 ){
         this.props.navigation.navigate('V10',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount >= 12 ){
         this.props.navigation.navigate('V11',{
          response: this.state.response,
          Bangla:this.props.route.params.Bangla
         });
      }
      if(this.state.response[0].rowcount === 1 ){
        alert("You are in Visit 1");
      }
    }
      
      //console.log(AdpPre);
     

      
         
        
        return (
            <View style ={styles.main}>

                <View style ={styles.header} >
                <TouchableOpacity onPress = {this.menu}>
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
                        <Text style = {styles.nameText}>{this.state.report[0].patient_name}</Text>
                        <Text>{this.state.report[0].bndr_id}</Text>
                        <Text style = {{fontSize: 18}}>Guide Book No : {this.state.report[0].patient_guide_book}</Text>
                    </View>
                    <View style = {styles.proPicContainer}>
                        {pic}
                    </View>
                </View>

                <View style = {styles.visitContainer}>
                  <View style = {styles.visitController}>
                      <TouchableOpacity onPress={previous}>
                      <Entypo name="chevron-left" size={40} color="#2171B5" />
                      </TouchableOpacity>
                      <Text style = {styles.visitText}>View Visits</Text>
                      
                  </View>
                  
                </View>

                <View style = {styles.vDate}>
                  <Text style = {styles.vidText}>Visit Date:</Text>
                  <Text style = {styles.vidDate}>{date}</Text>
                </View>
                <ScrollView  >
                    <View style = {styles.infoContainer} >
                      <Text style = {styles.visitNumber}>Visit Number: {vnum}</Text>
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

                            {ESR}

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
                   <View>
                        <View style = {styles.EyeMa}>
                          {EyeDate}
                          {EyeExam}
                          {Eyecenter}
                          {EyeDoctor}
                          {RightEyeText}
                          {EyeRight}
                          {LeftEyeText}
                          {EyeLeft}
                          {OtherText}
                          {EyeOther}
                          {TreatmentText}
                          {EyeTm}
                        </View>
                        {FootDate}
                        {FOOtExam}
                        {Eyecenter}
                        {FootDoctor}
                        {PeriText}
                        {periInfo}
                        {SenText}
                        {SenInfo}
                        
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
      fontSize: Dimensions.get('window').width > 370 ? 15 : 13 
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
    },
    EyeMa: {
      marginBottom: '3%'
    },
    eyeExam: {
      fontSize: Dimensions.get('window').width > 370 ? 18 : 15,
      fontWeight: 'bold'
    },
    eye: {
      fontSize: 16,
      marginTop: '2%'
    },
    eyeInfoRight: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: '2%',
      padding: '3%'
    },
    visitNumber: {
      fontSize: 14
    },
    treatment: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: '2%',
      padding: '3%',
      marginBottom: '10%'
    },
    peri: {
     alignItems:'center',
     marginTop: '5%'
    },
    periStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '3%',
      marginBottom: '3%'
    },
    periText: {
      fontSize: Dimensions.get('window').width > 370 ? 14 : 12,
      fontWeight: 'bold'
    },
    periInfo: {
      fontSize: Dimensions.get('window').width > 370 ? 14 : 12
    }
    
    
    
});

//export default VisitScreen;
export default function(props) {
  const navigation = useNavigation();

  return <VisitScreen {...props} navigation={navigation} />;
}