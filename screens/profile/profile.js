import React,{Component}  from 'react';
import { StyleSheet, Text,View, ScrollView,Image ,TouchableOpacity,Dimensions,TextInput,
TouchableWithoutFeedback,Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


class Profile extends React.Component {

  constructor(props) {
 
    super(props)
 
    this.state = {
        isPickerShow: false,
        date: new Date(),
        maritalStatus: null,
        gender: null,
        division: null,
        district: null,
        upazila: null,
        address: null,
        postalCode: null,
        expense: null,
        employment: null,
        education: null,
        phoneNumber: '',
        email: null,
        age: null,
        nid: null,
        ButtonColor: false,
        saved: 'false'
 
    }
 
  }

  showPicker = () => {
    this.setState({isPickerShow : true})
  };

  onChange = (event, value) => {
    
    if (Platform.OS === 'android') {
      this.setState({isPickerShow : false})
    }
    if(event.type == "set") {          

      this.setState({date : value})
    } else {                                    
      return null
    }
  };

  UpdateMarritalStatus = (maritalStatue) => {
        this.setState({maritalStatus: maritalStatue});
        
  }

  UpdateGender = (gender) => {
        this.setState({gender: gender});
  }

  UpdateDivision = (division) => {
        this.setState({division: division});
        this.setState({district: null});
  }
  UpdateDistrict = (district) => {
        this.setState({district: district});
  }
  UpdateUpazila = (upazila) => {
        this.setState({upazila: upazila});
  }

  UpdateExpense = (expense) => {
        this.setState({expense: expense});
  }

  UpdateEmployment = (employment) => {
        this.setState({employment: employment});
  }

  UpdateEducation = (education) => {
        this.setState({education: education});
  }

  district = () => {
    this.setState({division: this.props.route.params.divisionid})
  }
  upazila = () => {
    this.setState({district: this.props.route.params.districtid})
  }
  
  Update = () => {
    if ((this.state.phoneNumber === '') && (this.state.email === null || this.state.email === '') 
    && (this.state.maritalStatus === null) && (this.state.date.getMonth() === new Date().getMonth() && this.state.date.getFullYear() === new Date().getFullYear() &&
    this.state.date.getDate() === new Date().getDate()) && (this.state.age === null || this.state.age === '')
    && (this.state.nid === null || this.state.nid === '') && (this.state.gender === null) && (this.state.division === null) &&
    (this.state.district === null || this.state.district === '') && (this.state.upazila === null || this.state.upazila === '')
    && (this.state.address === null || this.state.address === '') && (this.state.postalCode === null || this.state.postalCode === '')
    && (this.state.expense === null) && (this.state.employment === null) && (this.state.education === null)){
      alert('You did not change anything.');
    }else {
      if ((this.state.phoneNumber.length < 10 && this.state.phoneNumber !== '')){
        alert("Phone number should be 11 digit");
      }else {
      this.setState({ButtonColor : true})
        var phoneNumber,email,maritalStatus,date,age,nid, gender,division,district,upazila,address,postalCode,expense,employment,education
        if(this.state.phoneNumber === null || this.state.phoneNumber === ''){
          phoneNumber = this.props.route.params.phoneNum
        }else{
          phoneNumber = this.state.phoneNumber
        }
        if(this.state.email === null || this.state.email === ''){
          email = this.props.route.params.email
        }else{
          email = this.state.email
        }
        if(this.state.maritalStatus === null ){
          maritalStatus = this.props.route.params.maritalStatus
        }else{
          maritalStatus = this.state.maritalStatus
          //console.log(this.state.maritalStatus)
        }
        if(this.state.date.getMonth() === new Date().getMonth() && this.state.date.getFullYear() === new Date().getFullYear() &&
      this.state.date.getDate() === new Date().getDate() ){
          date = this.props.route.params.dob
      }else{
        var month = this.state.date.getMonth() + 1;
        var fullDate = this.state.date.getFullYear()+"-"+month+"-"+this.state.date.getDate();
        date = fullDate
      }

      if(this.state.age === null || this.state.age === ''){
        age = this.props.route.params.age
      }else{
        age = this.state.age
      }

      // if(this.state.nid === null || this.state.nid === ''){
      //   nid = this.props.route.params.nid
      // }else{
      //   nid = this.state.nid
      // }
      if(this.state.gender === null ){
        gender = this.props.route.params.gender
        //console.log(gender)
      }else{
        gender = this.state.gender
      }
      if(this.state.division === null ){
        division = this.props.route.params.divisionid
      }else{
        division = this.state.division
      }

      if(this.state.district === null || this.state.district === ''){
        district = this.props.route.params.districtid
      }else{
        district = this.state.district
      }
      if(this.state.upazila === null || this.state.upazila === ''){
        upazila = this.props.route.params.upazilaid
      }else{
        upazila = this.state.upazila
      }
      if(this.state.address === null || this.state.address === ''){
        address = this.props.route.params.address
      }else{
        address = this.state.address
      }
      if(this.state.postalCode === null || this.state.postalCode === ''){
        postalCode = this.props.route.params.postalCode
      }else{
        postalCode = this.state.postalCode
      }
      if(this.state.expense === null ){
        expense = this.props.route.params.expenditure
      }else{
        expense = this.state.expense
      }
      if(this.state.employment === null ){
        employment = this.props.route.params.profession
      }else{
        employment = this.state.employment
      }
      if(this.state.education === null ){
        education = this.props.route.params.education
      }else{
        education = this.state.education
      }
      //console.log(maritalStatus)
      var SearchAPI = "https://app.bndr-org.com.bd/m_app/profile.php";
                var header = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };

                var Data = {
                    GuideBook: this.props.route.params.guideBookNo,
                    patientId: this.props.route.params.patientId,
                    phoneNumber: phoneNumber,
                    email: email,
                    maritalStatus: maritalStatus,
                    date: date,
                    age: age,
                    gender: gender,
                    division: division,
                    district: district,
                    upazila: upazila,
                    address: address,
                    postalCode: postalCode,
                    expense: expense,
                    employment: employment,
                    education: education,
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

                        alert("Information Not Updated");
                        this.setState({ButtonColor : false});
                        
                    }else {
                        alert("Information Updated. Please login again to view the change");

                        this.setState({phoneNumber : phoneNumber});
                        this.setState({email : email});
                        this.setState({maritalStatus : maritalStatus});
                        this.setState({age : age});
                        this.setState({nid : nid});
                        this.setState({gender : gender});
                        this.setState({division : division});
                        this.setState({district : district});
                        this.setState({upazila : upazila});
                        this.setState({address : address});
                        this.setState({postalCode : postalCode});
                        this.setState({expense : expense});
                        this.setState({employment : employment});
                        this.setState({education : education});
                        
                        this.setState({ButtonColor : false});
                        this.setState({saved : 'true'});
                        //console.log(response[0].message);
                        
                        
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({ButtonColor : false})
                });
      
    }
  }
}

  menu = () => {
    var month1
    var fullDate1

    if(this.state.date.getMonth() === new Date().getMonth() && this.state.date.getFullYear() === new Date().getFullYear() &&
    this.state.date.getDate() === new Date().getDate()) {
      fullDate1 = this.props.route.params.dob;
    } else{
      month1 = this.state.date.getMonth() + 1;
      fullDate1 = this.state.date.getFullYear()+"-"+month1+"-"+this.state.date.getDate();
    }
    if(this.state.saved === 'true'){
      this.props.navigation.navigate('Menu',{
        email : this.state.email,
        guideBookNo: this.props.route.params.guideBookNo,
        maritalStatus : this.state.maritalStatus,
        dob : fullDate1,
        age : this.state.age,
        nid : this.state.nid,
        gender : this.state.gender,
        saved : this.state.saved,
        regDate : this.props.route.params.regDate,
        address : this.state.address,
        postalCode : this.state.postalCode,
        expenditure : this.state.expense,
        education : this.state.education,
        profession : this.state.employment,
        phoneNum : this.props.route.params.phoneNum,
        name : this.props.route.params.name,
        Adphone : this.state.phoneNumber,
        center : this.props.route.params.center,
        organization : this.props.route.params.organization,
        patientIdByCenter : this.props.route.params.patientIdByCenter,
      });
    }else {
      this.props.navigation.navigate('Menu',{
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
        saved : this.state.saved,
      });
    }
  }

  pass = () => {
    var month1
    var fullDate1

    if(this.state.date.getMonth() === new Date().getMonth() && this.state.date.getFullYear() === new Date().getFullYear() &&
    this.state.date.getDate() === new Date().getDate()) {
      fullDate1 = this.props.route.params.dob;
    } else{
      month1 = this.state.date.getMonth() + 1;
      fullDate1 = this.state.date.getFullYear()+"-"+month1+"-"+this.state.date.getDate();
    }
    if(this.state.saved === 'true'){
      this.props.navigation.navigate('EditPass',{
        
        email : this.state.email,
        saved : this.state.saved,
        guideBookNo: this.props.route.params.guideBookNo,
        maritalStatus : this.state.maritalStatus,
        dob : fullDate1,
        age : this.state.age,
        nid : this.state.nid,
        gender : this.state.gender,
        division : this.state.division,
        district : this.state.district,
        upazila : this.state.upazila,
        address : this.state.address,
        postalCode : this.state.postalCode,
        expenditure : this.state.expense,
        Adphone : this.state.phoneNumber,
        education : this.state.education,
        profession : this.state.employment,
        pid: this.props.route.params.pid,
        Bangla:this.props.route.params.Bangla,
      });
    }else {
      this.props.navigation.navigate('EditPass',{
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
      });
    }
  }
  
  render () {
    
    const { navigation } = this.props;
    // marital status check
    var ms1, ms2, ms3, ms4, other
    if (this.props.route.params.maritalStatus === 'Married'){
      ms1 = 'Married'; ms2 = 'Unmarried'; ms3 = 'Other'
      
    } else if (this.props.route.params.maritalStatus === 'Unmarried'){
      ms1 = 'Unmarried'; ms2 = 'Married'; ms3 = 'Other'
    }else if (this.props.route.params.maritalStatus === 'Other') {
      ms1 = 'Other'; ms2 = 'Married'; ms3 = 'Unmarried'
    }else {
      ms2 = 'Married'; ms3 = 'Unmarried'; ms4 = 'Other'
    }
    if (ms4 !== undefined) {
      ms4 = ' ';
      other = <Picker.Item label = {ms4} value = {ms4}/> 
    }

    // gender

    var g1,g2,g3,gv1,gv2,gv3

    if (this.props.route.params.gender === '0') {
      g1 = 'Male';  g2 = 'Female';  g3 = 'Other'; gv1 = '0';gv2 = '1';gv3 = '2';

    }else if (this.props.route.params.gender === '1') {
      g1 = 'Female';  g2 = 'Male';  g3 = 'Other';gv1 = '1';gv2 = '2';gv3 = '2';
    }else if (this.props.route.params.gender === '2') {
      g1 = 'Other';  g2 = 'Female';  g3 = 'Male';gv1 = '2';gv2 = '1';gv3 = '0';
    }else {
      g1 = 'Male';  g2 = 'Female';  g3 = 'Other'; gv1 = '0';gv2 = '1';gv3 = '2';
    }
 
    //division 
    var d1 , d2, d3, d4, d5, d6, d7, d8,d9, dNull,dv1,dv2,dv3,dv4,dv5,dv6,dv7,dv8,dv9
    if (this.props.route.params.division === 'Dhaka'){
      d1 = 'Dhaka';  d2 = 'Barisal' ; d3 = 'Chittagong'; d4 = 'Khulna'
      d5 = 'Rajshahi'; d6 = 'Rangpur'; d7 = 'Sylhet'; d8 = 'Mymensingh';
      dv1 = '3';dv2 = '1';dv3 = '2';dv4 = '4';dv5 = '5';dv6 = '6';dv7 = '7';dv8 = '11';
    }else if (this.props.route.params.division === 'Barisal'){
      d1 = 'Barisal';  d2 = 'Dhaka' ; d3 = 'Chittagong'; d4 = 'Khulna'
      d5 = 'Rajshahi'; d6 = 'Rangpur'; d7 = 'Sylhet'; d8 = 'Mymensingh';
      dv1 = '1';dv2 = '3';dv3 = '2';dv4 = '4';dv5 = '5';dv6 = '6';dv7 = '7';dv8 = '11'
    }else if (this.props.route.params.division === 'Chittagong'){
      d1 = 'Chittagong';  d2 = 'Dhaka' ; d3 = 'Barisal'; d4 = 'Khulna'
      d5 = 'Rajshahi'; d6 = 'Rangpur'; d7 = 'Sylhet'; d8 = 'Mymensingh';
      dv1 = '2';dv2 = '3';dv3 = '1';dv4 = '4';dv5 = '5';dv6 = '6';dv7 = '7';dv8 = '11'
    }else if (this.props.route.params.division === 'Khulna'){
      d1 = 'Khulna';  d2 = 'Dhaka' ; d3 = 'Barisal'; d4 = 'Chittagong'
      d5 = 'Rajshahi'; d6 = 'Rangpur'; d7 = 'Sylhet'; d8 = 'Mymensingh';
      dv1 = '4';dv2 = '3';dv3 = '1';dv4 = '2';dv5 = '5';dv6 = '6';dv7 = '7';dv8 = '11'
    }else if (this.props.route.params.division === 'Rajshahi'){
      d1 = 'Rajshahi';  d2 = 'Dhaka' ; d3 = 'Barisal'; d4 = 'Chittagong'
      d5 = 'Khulna'; d6 = 'Rangpur'; d7 = 'Sylhet'; d8 = 'Mymensingh';
      dv1 = '5';dv2 = '3';dv3 = '1';dv4 = '2';dv5 = '4';dv6 = '6';dv7 = '7';dv8 = '11'
    }else if (this.props.route.params.division === 'Rangpur'){
      d1 = 'Rangpur';  d2 = 'Dhaka' ; d3 = 'Barisal'; d4 = 'Chittagong'
      d5 = 'Khulna'; d6 = 'Rajshahi'; d7 = 'Sylhet'; d8 = 'Mymensingh';
      dv1 = '6';dv2 = '3';dv3 = '1';dv4 = '2';dv5 = '4';dv6 = '5';dv7 = '7';dv8 = '11'
    }else if (this.props.route.params.division === 'Sylhet'){
      d1 = 'Sylhet';  d2 = 'Dhaka' ; d3 = 'Barisal'; d4 = 'Chittagong'
      d5 = 'Khulna'; d6 = 'Rajshahi'; d7 = 'Rangpur'; d8 = 'Mymensingh';
      dv1 = '7';dv2 = '3';dv3 = '1';dv4 = '2';dv5 = '4';dv6 = '5';dv7 = '6';dv8 = '11'
    }else if (this.props.route.params.division === 'Mymensingh'){
      d1 = 'Mymensingh';  d2 = 'Dhaka' ; d3 = 'Barisal'; d4 = 'Chittagong'
      d5 = 'Khulna'; d6 = 'Rajshahi'; d7 = 'Rangpur'; d8 = 'Sylhet';
      dv1 = '11';dv2 = '3';dv3 = '1';dv4 = '2';dv5 = '4';dv6 = '5';dv7 = '6';dv8 = '7'
    }else{
      d2 = 'Dhaka';  d3 = 'Barisal' ; d4 = 'Chittagong'; d5 = 'Khulna'
      d6 = 'Rajshahi'; d7 = 'Rangpur'; d8 = 'Sylhet'; d9 = 'Mymensingh'
      dv2 = '3';dv3 = '1';dv4 = '2';dv5 = '4';dv6 = '5';dv7 = '6';dv8 = '7';dv9 = '11'
    }

    if (d9 !== undefined){
      dNull = <Picker.Item label = {d9} value = {d9}  />
    }

    //district
    var district
    if (this.state.division === '3'){
      
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Dhaka' value = '1'  />
                    <Picker.Item label = 'Faridpur' value = '2'  />
                    <Picker.Item label = 'Gazipur' value = '3'  />
                    <Picker.Item label = 'Gopalganj' value = '4'  />
                    <Picker.Item label = 'Kishoreganj' value = '6'  />
                    <Picker.Item label = 'Madaripur' value = '7'  />
                    <Picker.Item label = 'Manikganj' value = '8'  />
                    <Picker.Item label = 'Munshiganj' value = '9'  />
                    <Picker.Item label = 'Narayanganj' value = '11'  />
                    <Picker.Item label = 'Narsingdi' value = '12'  />
                    <Picker.Item label = 'Rajbari' value = '14'  />
                    <Picker.Item label = 'Shariatpur' value = '15'  />
                    <Picker.Item label = 'Tangail' value = '17'  />
                    
                  </Picker>
    }else if (this.state.division === '2'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Bandarban' value = '40'  />
                    <Picker.Item label = 'Brahmanbaria' value = '41'  />
                    <Picker.Item label = 'Chandpur' value = '42'  />
                    <Picker.Item label = 'Chittagong' value = '43'  />
                    <Picker.Item label = 'Cumilla' value = '44'  />
                    <Picker.Item label = 'Coxs Bazar' value = '45'  />
                    <Picker.Item label = 'Feni' value = '46'  />
                    <Picker.Item label = 'Khagrachhari' value = '47'  />
                    <Picker.Item label = 'Lakshmipur' value = '48'  />
                    <Picker.Item label = 'Noakhali' value = '49'  />
                    <Picker.Item label = 'Rangamati' value = '50'  />
                    
                  </Picker>
    }else if (this.state.division === '7'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Habiganj' value = '51'  />
                    <Picker.Item label = 'Moulvibazar' value = '52'  />
                    <Picker.Item label = 'Sunamganj' value = '53'  />
                    <Picker.Item label = 'Sylhet' value = '54'  />
                    
                  </Picker>
    }else if (this.state.division === '1'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Barguna' value = '34'  />
                    <Picker.Item label = 'Barishal' value = '35'  />
                    <Picker.Item label = 'Bhola' value = '36'  />
                    <Picker.Item label = 'Jhalokati' value = '37'  />
                    <Picker.Item label = 'Patuakhali' value = '38'  />
                    <Picker.Item label = 'Pirojpur' value = '39'  />
                    
                  </Picker>
    }else if (this.state.division === '4'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Bagerhat' value = '55'  />
                    <Picker.Item label = 'Chuadanga' value = '56'  />
                    <Picker.Item label = 'Jashore' value = '57'  />
                    <Picker.Item label = 'Jhenaidah' value = '58'  />
                    <Picker.Item label = 'Khulna' value = '59'  />
                    <Picker.Item label = 'Kushtia' value = '60'  />
                    <Picker.Item label = 'Magura' value = '61'  />
                    <Picker.Item label = 'Meherpur' value = '62'  />
                    <Picker.Item label = 'Narail' value = '63'  />
                    <Picker.Item label = 'Satkhira' value = '64'  />
                    
                  </Picker>
    }else if (this.state.division === '5'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Bogura' value = '18'  />
                    <Picker.Item label = 'Joypurhat' value = '19'  />
                    <Picker.Item label = 'Naogaon' value = '20'  />
                    <Picker.Item label = 'Natore' value = '21'  />
                    <Picker.Item label = 'Chapainawabganj' value = '22'  />
                    <Picker.Item label = 'Pabna' value = '23'  />
                    <Picker.Item label = 'Rajshahi' value = '24'  />
                    <Picker.Item label = 'Sirajganj' value = '25'  />
                    
                  </Picker>
    }else if (this.state.division === '6'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Dinajpur' value = '26'  />
                    <Picker.Item label = 'Gaibandha' value = '27'  />
                    <Picker.Item label = 'Kurigram' value = '28'  />
                    <Picker.Item label = 'Lalmonirhat' value = '29'  />
                    <Picker.Item label = 'Nilphamari' value = '30'  />
                    <Picker.Item label = 'Panchagarh' value = '31'  />
                    <Picker.Item label = 'Rangpur' value = '32'  />
                    <Picker.Item label = 'Thakurgaon' value = '33'  />
                    
                  </Picker>
    }else if (this.state.division === '11'){
      district = <Picker selectedValue={this.state.district} 
                  onValueChange= {this.UpdateDistrict} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Jamalpur' value = '5'  />
                    <Picker.Item label = 'Mymensingh' value = '10'  />
                    <Picker.Item label = 'Netrokona' value = '13'  />
                    <Picker.Item label = 'Sherpur' value = '16'  />
                    
                  </Picker>
    }else {
      district = <TouchableOpacity onPress={this.district}>
                  <Text>{this.props.route.params.district}</Text>
                 </TouchableOpacity>
    }

    //upazila
    var upazila
if (this.state.district === '1'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Savar' value = '149'  />
                    <Picker.Item label = 'Dhamrai' value = '145'  />
                    <Picker.Item label = 'Keraniganj' value = '147'  />
                    <Picker.Item label = 'Dohar' value = '146'  />
                    <Picker.Item label = 'Nawabganj' value = '148'  />
                    
                  </Picker>
    }else if (this.state.district === '2'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '150'  />
                    <Picker.Item label = 'Alfadanga' value = '152'  />
                    <Picker.Item label = 'Boalmari' value = '151'  />
                    <Picker.Item label = 'Sadarpur' value = '157'  />
                    <Picker.Item label = 'Nagarkanda' value = '155'  />
                    <Picker.Item label = 'Bhanga' value = '154'  />
                    <Picker.Item label = 'Charbhadrasan' value = '156'  />
                    <Picker.Item label = 'Madhukhali' value = '153'  />
                    <Picker.Item label = 'Saltha' value = '158'  />
                    
                  </Picker>
    }else if (this.state.district === '3'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Kaliganj' value = '163'  />
                    <Picker.Item label = 'Kaliakair' value = '160'  />
                    <Picker.Item label = 'Kapasia' value = '161'  />
                    <Picker.Item label = 'Sadar' value = '159'  />
                    <Picker.Item label = 'Sreepur' value = '162'  />
                    
                  </Picker>
    }else if (this.state.district === '4'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '165'  />
                    <Picker.Item label = 'Kashiani' value = '166'  />
                    <Picker.Item label = 'Tungipara' value = '169'  />
                    <Picker.Item label = 'Kotalipara' value = '167'  />
                    <Picker.Item label = 'Muksudpur' value = '168'  />
                    
                  </Picker>
    }else if (this.state.district === '6'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Itna' value = '182'  />
                    <Picker.Item label = 'Katiadi' value = '184'  />
                    <Picker.Item label = 'Bhairab' value = '180'  />
                    <Picker.Item label = 'Tarail' value = '190'  />
                    <Picker.Item label = 'Hossainpur' value = '181'  />
                    <Picker.Item label = 'Pakundia' value = '189'  />
                    <Picker.Item label = 'Kuliarchar' value = '186'  />
                    <Picker.Item label = 'Kishoreganj sadar' value = '185'  />
                    <Picker.Item label = 'Karimgonj' value = '183'  />
                    <Picker.Item label = 'Bajitpur' value = '179'  />
                    <Picker.Item label = 'Austagram' value = '178'  />
                    <Picker.Item label = 'Mithamoin' value = '187'  />
                    <Picker.Item label = 'Nikli' value = '188'  />
                    
                  </Picker>
    }else if (this.state.district === '7'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '191'  />
                    <Picker.Item label = 'Shibchar' value = '194'  />
                    <Picker.Item label = 'Kalkini' value = '192'  />
                    <Picker.Item label = 'Rajoir' value = '193'  />
                    
                  </Picker>
    }else if (this.state.district === '8'){s
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Harirampur' value = '199'  />
                    <Picker.Item label = 'Saturia' value = '198'  />
                    <Picker.Item label = 'Sadar' value = '195'  />
                    <Picker.Item label = 'Gior' value = '200'  />
                    <Picker.Item label = 'Shibaloy' value = '197'  />
                    <Picker.Item label = 'Doulatpur' value = '201'  />
                    <Picker.Item label = 'Singiar' value = '196'  />
                    
                  </Picker>
    }else if (this.state.district === '9'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '204'  />
                    <Picker.Item label = 'Sreenagar' value = '203'  />
                    <Picker.Item label = 'Sirajdikhan' value = '205'  />
                    <Picker.Item label = 'Louhajanj' value = '202'  />
                    <Picker.Item label = 'Gajaria' value = '207'  />
                    <Picker.Item label = 'Tongibari' value = '206'  />
                    
                  </Picker>
    }else if (this.state.district === '11'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Araihazar' value = '220'  />
                    <Picker.Item label = 'Bandar' value = '222'  />
                    <Picker.Item label = 'Narayanganj sadar' value = '223'  />
                    <Picker.Item label = 'Rupganj' value = '224'  />
                    <Picker.Item label = 'Sonargaon' value = '221'  />
                    
                  </Picker>
    }else if (this.state.district === '12'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Belabo' value = '226'  />
                    <Picker.Item label = 'Monohardi' value = '227'  />
                    <Picker.Item label = 'Narsingdi sadar' value = '228'  />
                    <Picker.Item label = 'Palash' value = '229'  />
                    <Picker.Item label = 'Raipura' value = '230'  />
                    <Picker.Item label = 'Shibpur' value = '231'  />
                    
                  </Picker>
    }else if (this.state.district === '14'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '246'  />
                    <Picker.Item label = 'Goalanda' value = '243'  />
                    <Picker.Item label = 'Pangsa' value = '244'  />
                    <Picker.Item label = 'Baliakandi' value = '242'  />
                    <Picker.Item label = 'Kalukhali' value = '245'  />
                    
                  </Picker>
    }else if (this.state.district === '15'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '247'  />
                    <Picker.Item label = 'Naria' value = '249'  />
                    <Picker.Item label = 'Zajira' value = '250'  />
                    <Picker.Item label = 'Gosairhat' value = '252'  />
                    <Picker.Item label = 'Bhedarganj' value = '251'  />
                    <Picker.Item label = 'Damudya' value = '248'  />
                    
                  </Picker>
    }else if (this.state.district === '17'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Basail' value = '260'  />
                    <Picker.Item label = 'Bhuapur' value = '268'  />
                    <Picker.Item label = 'Delduar' value = '267'  />
                    <Picker.Item label = 'Ghatail' value = '262'  />
                    <Picker.Item label = 'Gopalpur' value = '266'  />
                    <Picker.Item label = 'Madhupur' value = '261'  />
                    <Picker.Item label = 'Mirzapur' value = '265'  />
                    <Picker.Item label = 'Nagarpur' value = '264'  />
                    <Picker.Item label = 'Sakhipur' value = '259'  />
                    <Picker.Item label = 'Tangail sadar' value = '258'  />
                    <Picker.Item label = 'Kalihati' value = '263'  />
                    <Picker.Item label = 'Dhanbari' value = '269'  />
                    
                  </Picker>
    }else if (this.state.district === '40'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '43'  />
                    <Picker.Item label = 'Alikadam' value = '47'  />
                    <Picker.Item label = 'Naikhongchhari' value = '46'  />
                    <Picker.Item label = 'Rowangchhari' value = '48'  />
                    <Picker.Item label = 'Lama' value = '45'  />
                    <Picker.Item label = 'Ruma' value = '49'  />
                    <Picker.Item label = 'Thanchi' value = '44'  />
                    
                  </Picker>
    }else if (this.state.district === '41'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '50'  />
                    <Picker.Item label = 'Kasba' value = '56'  />
                    <Picker.Item label = 'Nasirnagar' value = '52'  />
                    <Picker.Item label = 'Sarail' value = '54'  />
                    <Picker.Item label = 'Ashuganj' value = '51'  />
                    <Picker.Item label = 'Akhaura' value = '57'  />
                    <Picker.Item label = 'Nabinagar' value = '53'  />
                    <Picker.Item label = 'Bancharampur' value = '58'  />
                    <Picker.Item label = 'Bijoynagar' value = '59'  />
                    
                  </Picker>
    }else if (this.state.district === '42'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Haimchar' value = '62'  />
                    <Picker.Item label = 'Kachua' value = '64'  />
                    <Picker.Item label = 'Shahrasti' value = '67'  />
                    <Picker.Item label = 'Sadar' value = '60'  />
                    <Picker.Item label = 'Matlabsouth' value = '65'  />
                    <Picker.Item label = 'Hajiganj' value = '63'  />
                    <Picker.Item label = 'Matlabnorth' value = '66'  />
                    <Picker.Item label = 'Faridgonj' value = '61'  />
                    
                  </Picker>
    }else if (this.state.district === '43'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Rangunia' value = '77'  />
                    <Picker.Item label = 'Sitakunda' value = '81'  />
                    <Picker.Item label = 'Mirsharai' value = '75'  />
                    <Picker.Item label = 'Patiya' value = '76'  />
                    <Picker.Item label = 'Sandwip' value = '79'  />
                    <Picker.Item label = 'Banshkhali' value = '69'  />
                    <Picker.Item label = 'Boalkhali' value = '70'  />
                    <Picker.Item label = 'Anwara' value = '68'  />
                    <Picker.Item label = 'Chandanaish' value = '71'  />
                    <Picker.Item label = 'Satkania' value = '80'  />
                    <Picker.Item label = 'Lohagara' value = '74'  />
                    <Picker.Item label = 'Hathazari' value = '73'  />
                    <Picker.Item label = 'Fatikchhari' value = '72'  />
                    <Picker.Item label = 'Raozan' value = '78'  />
                    <Picker.Item label = 'Karnaphuli' value = '504'  />
                    
                  </Picker>
    }else if (this.state.district === '45'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '100'  />
                    <Picker.Item label = 'Chakaria' value = '98'  />
                    <Picker.Item label = 'Kutubdia' value = '101'  />
                    <Picker.Item label = 'Ukhiya' value = '105'  />
                    <Picker.Item label = 'Moheshkhali' value = '102'  />
                    <Picker.Item label = 'Pekua' value = '106'  />
                    <Picker.Item label = 'Ramu' value = '103'  />
                    <Picker.Item label = 'Teknaf' value = '104'  />
                    
                  </Picker>
    }else if (this.state.district === '44'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Debidwar' value = '88'  />
                    <Picker.Item label = 'Barura' value = '82'  />
                    <Picker.Item label = 'Brahmanpara' value = '83'  />
                    <Picker.Item label = 'Chandina' value = '85'  />
                    <Picker.Item label = 'Chauddagram' value = '86'  />
                    <Picker.Item label = 'Daudkandi' value = '87'  />
                    <Picker.Item label = 'Homna' value = '89'  />
                    <Picker.Item label = 'Laksam' value = '91'  />
                    <Picker.Item label = 'Muradnagar' value = '94'  />
                    <Picker.Item label = 'Nangalkot' value = '95'  />
                    <Picker.Item label = 'Cumillasadar' value = '90'  />
                    <Picker.Item label = 'Meghna' value = '93'  />
                    <Picker.Item label = 'Monohargonj' value = '92'  />
                    <Picker.Item label = 'Sadarsouth' value = '96'  />
                    <Picker.Item label = 'Titas' value = '97'  />
                    <Picker.Item label = 'Burichang' value = '84'  />
                    <Picker.Item label = 'Lalmai' value = '505'  />
                    
                  </Picker>
    }else if (this.state.district === '46'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Chhagalnaiya' value = '108'  />
                    <Picker.Item label = 'Sadar' value = '107'  />
                    <Picker.Item label = 'Sonagazi' value = '112'  />
                    <Picker.Item label = 'Fulgazi' value = '111'  />
                    <Picker.Item label = 'Parshuram' value = '110'  />
                    <Picker.Item label = 'Daganbhuiyan' value = '109'  />
                    
                  </Picker>
    }else if (this.state.district === '47'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '114'  />
                    <Picker.Item label = 'Dighinala' value = '113'  />
                    <Picker.Item label = 'Panchari' value = '119'  />
                    <Picker.Item label = 'Laxmichhari' value = '115'  />
                    <Picker.Item label = 'Mohalchari' value = '116'  />
                    <Picker.Item label = 'Manikchari' value = '117'  />
                    <Picker.Item label = 'Ramgarh' value = '120'  />
                    <Picker.Item label = 'Matiranga' value = '118'  />
                    <Picker.Item label = 'Guimara' value = '506'  />
                    
                  </Picker>
    }else if (this.state.district === '48'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '121'  />
                    <Picker.Item label = 'Kamalnagar' value = '125'  />
                    <Picker.Item label = 'Raipur' value = '122'  />
                    <Picker.Item label = 'Ramgati' value = '124'  />
                    <Picker.Item label = 'Ramganj' value = '123'  />
                    
                  </Picker>
    }else if (this.state.district === '49'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '126'  />
                    <Picker.Item label = 'Companiganj' value = '129'  />
                    <Picker.Item label = 'Begumganj' value = '127'  />
                    <Picker.Item label = 'Hatia' value = '131'  />
                    <Picker.Item label = 'Subarnachar' value = '134'  />
                    <Picker.Item label = 'Kabirhat' value = '132'  />
                    <Picker.Item label = 'Senbug' value = '130'  />
                    <Picker.Item label = 'Chatkhil' value = '128'  />
                    <Picker.Item label = 'Sonaimuri' value = '133'  />
                    
                  </Picker>
    }else if (this.state.district === '50'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '135'  />
                    <Picker.Item label = 'Kaptai' value = '141'  />
                    <Picker.Item label = 'Kawkhali' value = '144'  />
                    <Picker.Item label = 'Baghaichari' value = '137'  />
                    <Picker.Item label = 'Barkal' value = '138'  />
                    <Picker.Item label = 'Langadu' value = '142'  />
                    <Picker.Item label = 'Rajasthali' value = '140'  />
                    <Picker.Item label = 'Belaichari' value = '136'  />
                    <Picker.Item label = 'Juraichari' value = '139'  />
                    <Picker.Item label = 'Naniarchar' value = '143'  />
                    
                  </Picker>
    }else if (this.state.district === '51'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Nabiganj' value = '460'  />
                    <Picker.Item label = 'Bahubal' value = '455'  />
                    <Picker.Item label = 'Ajmiriganj' value = '453'  />
                    <Picker.Item label = 'Baniachong' value = '454'  />
                    <Picker.Item label = 'Lakhai' value = '458'  />
                    <Picker.Item label = 'Chunarughat' value = '456'  />
                    <Picker.Item label = 'Habiganj sadar' value = '457'  />
                    <Picker.Item label = 'Madhabpur' value = '459'  />
                    <Picker.Item label = 'Shayestaganj' value = '461'  />
                    
                  </Picker>
    }else if (this.state.district === '52'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Barlekha' value = '463'  />
                    <Picker.Item label = 'Kamolganj' value = '465'  />
                    <Picker.Item label = 'Kulaura' value = '466'  />
                    <Picker.Item label = 'Moulvibazar sadar' value = '462'  />
                    <Picker.Item label = 'Rajnagar' value = '467'  />
                    <Picker.Item label = 'Sreemangal' value = '468'  />
                    <Picker.Item label = 'Juri' value = '464'  />
                    
                  </Picker>
    }else if (this.state.district === '53'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '477'  />
                    <Picker.Item label = 'Southsunamganj' value = '507'  />
                    <Picker.Item label = 'Bishwambarpur' value = '469'  />
                    <Picker.Item label = 'Sunamganja Sadar' value = '477'  />
                    <Picker.Item label = 'Chhatak' value = '470'  />
                    <Picker.Item label = 'Jagannathpur' value = '474'  />
                    <Picker.Item label = 'Dowarabazar' value = '473'  />
                    <Picker.Item label = 'Tahirpur' value = '479'  />
                    <Picker.Item label = 'Dharmapasha' value = '472'  />
                    <Picker.Item label = 'Jamalganj' value = '475'  />
                    <Picker.Item label = 'Shalla' value = '476'  />
                    <Picker.Item label = 'Derai' value = '471'  />
                    
                  </Picker>
    }else if (this.state.district === '54'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Balaganj' value = '484'  />
                    <Picker.Item label = 'Beanibazar' value = '481'  />
                    <Picker.Item label = 'Bishwanath' value = '482'  />
                    <Picker.Item label = 'Companiganj' value = '485'  />
                    <Picker.Item label = 'Fenchuganj' value = '486'  />
                    <Picker.Item label = 'Golapganj' value = '487'  />
                    <Picker.Item label = 'Gowainghat' value = '488'  />
                    <Picker.Item label = 'Jaintiapur' value = '489'  />
                    <Picker.Item label = 'Kanaighat' value = '490'  />
                    <Picker.Item label = 'Sylhet sadar' value = '480'  />
                    <Picker.Item label = 'Zakiganj' value = '491'  />
                    <Picker.Item label = 'Dakshinsurma' value = '483'  />
                    <Picker.Item label = 'Osmaninagar' value = '508'  />
                    
                  </Picker>
    }else if (this.state.district === '34'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Amtali' value = '1'  />
                    <Picker.Item label = 'Sadar' value = '3'  />
                    <Picker.Item label = 'Betagi' value = '4'  />
                    <Picker.Item label = 'Bamna' value = '2'  />
                    <Picker.Item label = 'Pathorghata' value = '5'  />
                    <Picker.Item label = 'Taltali' value = '6'  />
                    
                  </Picker>
    }else if (this.state.district === '35'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Barishal sadar' value = '10'  />
                    <Picker.Item label = 'Bakerganj' value = '11'  />
                    <Picker.Item label = 'Babuganj' value = '8'  />
                    <Picker.Item label = 'Wazirpur' value = '16'  />
                    <Picker.Item label = 'Banaripara' value = '12'  />
                    <Picker.Item label = 'Gournadi' value = '13'  />
                    <Picker.Item label = 'Agailjhara' value = '9'  />
                    <Picker.Item label = 'Mehendiganj' value = '15'  />
                    <Picker.Item label = 'Muladi' value = '7'  />
                    <Picker.Item label = 'Hizla' value = '14'  />
                    
                  </Picker>
    }else if (this.state.district === '36'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'sadar' value = '17'  />
                    <Picker.Item label = 'Borhanuddin' value = '18'  />
                    <Picker.Item label = 'Charfesson' value = '19'  />
                    <Picker.Item label = 'Doulatkhan' value = '20'  />
                    <Picker.Item label = 'Monpura' value = '22'  />
                    <Picker.Item label = 'Tazumuddin' value = '23'  />
                    <Picker.Item label = 'Lalmohan' value = '21'  />
                    
                  </Picker>
    }else if (this.state.district === '37'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'sadar' value = '24'  />
                    <Picker.Item label = 'Kathalia' value = '25'  />
                    <Picker.Item label = 'Nalchity' value = '26'  />
                    <Picker.Item label = 'Rajapur' value = '27'  />
                    
                  </Picker>
    }else if (this.state.district === '38'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Bauphal' value = '28'  />
                    <Picker.Item label = 'Sadar' value = '33'  />
                    <Picker.Item label = 'Dumki' value = '34'  />
                    <Picker.Item label = 'Dashmina' value = '29'  />
                    <Picker.Item label = 'Kalapara' value = '31'  />
                    <Picker.Item label = 'Mirzaganj' value = '32'  />
                    <Picker.Item label = 'Galachipa' value = '30'  />
                    <Picker.Item label = 'Rangabali' value = '35'  />
                    
                  </Picker>
    }else if (this.state.district === '39'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '41'  />
                    <Picker.Item label = 'Nazirpur' value = '39'  />
                    <Picker.Item label = 'Kawkhali' value = '37'  />
                    <Picker.Item label = 'Bhandaria' value = '36'  />
                    <Picker.Item label = 'Mathbaria' value = '38'  />
                    <Picker.Item label = 'Nesarabad' value = '40'  />
                    <Picker.Item label = 'Indurkani' value = '509'  />
                    
                  </Picker>
    }else if (this.state.district === '55'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Fakirhat' value = '272'  />
                    <Picker.Item label = 'Sadar' value = '270'  />
                    <Picker.Item label = 'Mollahat' value = '274'  />
                    <Picker.Item label = 'Sarankhola' value = '278'  />
                    <Picker.Item label = 'Rampal' value = '277'  />
                    <Picker.Item label = 'Morrelganj' value = '276'  />
                    <Picker.Item label = 'Kachua' value = '273'  />
                    <Picker.Item label = 'Mongla' value = '275'  />
                    <Picker.Item label = 'Chitalmari' value = '271'  />
                    
                  </Picker>
    }else if (this.state.district === '56'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Chuadangasadar' value = '280'  />
                    <Picker.Item label = 'Alamdanga' value = '282'  />
                    <Picker.Item label = 'Damurhuda' value = '279'  />
                    <Picker.Item label = 'Jibannagar' value = '281'  />
                    
                  </Picker>
    }else if (this.state.district === '57'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Manirampur' value = '288'  />
                    <Picker.Item label = 'Abhaynagar' value = '283'  />
                    <Picker.Item label = 'Bagherpara' value = '285'  />
                    <Picker.Item label = 'Chougachha' value = '287'  />
                    <Picker.Item label = 'Jhikargacha' value = '289'  />
                    <Picker.Item label = 'Keshabpur' value = '284'  />
                    <Picker.Item label = 'Sadar' value = '286'  />
                    <Picker.Item label = 'Sharsha' value = '290'  />
                    
                  </Picker>
    }else if (this.state.district === '58'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '291'  />
                    <Picker.Item label = 'Shailkupa' value = '295'  />
                    <Picker.Item label = 'Harinakundu' value = '296'  />
                    <Picker.Item label = 'Kaliganj' value = '293'  />
                    <Picker.Item label = 'Kotchandpur' value = '294'  />
                    <Picker.Item label = 'Moheshpur' value = '292'  />
                    
                  </Picker>
    }else if (this.state.district === '59'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Paikgasa' value = '303'  />
                    <Picker.Item label = 'Fultola' value = '304'  />
                    <Picker.Item label = 'Digholia' value = '301'  />
                    <Picker.Item label = 'Rupsha' value = '305'  />
                    <Picker.Item label = 'Terokhada' value = '297'  />
                    <Picker.Item label = 'Dumuria' value = '300'  />
                    <Picker.Item label = 'Botiaghata' value = '298'  />
                    <Picker.Item label = 'Dakop' value = '299'  />
                    <Picker.Item label = 'Koyra' value = '302'  />
                    
                  </Picker>
    }else if (this.state.district === '60'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Kushtia sadar' value = '306'  />
                    <Picker.Item label = 'Kumarkhali' value = '307'  />
                    <Picker.Item label = 'Khoksa' value = '311'  />
                    <Picker.Item label = 'Mirpurkushtia' value = '309'  />
                    <Picker.Item label = 'Daulatpur' value = '308'  />
                    <Picker.Item label = 'Bheramara' value = '310'  />
                    
                  </Picker>
    }else if (this.state.district === '61'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Shalikha' value = '314'  />
                    <Picker.Item label = 'Sreepur' value = '315'  />
                    <Picker.Item label = 'Magura sadar' value = '312'  />
                    <Picker.Item label = 'Mohammadpur' value = '313'  />
                    
                  </Picker>
    }else if (this.state.district === '62'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Mujibnagar' value = '317'  />
                    <Picker.Item label = 'Meherpur sadar' value = '318'  />
                    <Picker.Item label = 'Gangni' value = '316'  />
                    
                  </Picker>
    }else if (this.state.district === '63'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Narail sadar' value = '319'  />
                    <Picker.Item label = 'Lohagara' value = '320'  />
                    <Picker.Item label = 'Kalia' value = '321'  />
                    
                  </Picker>
    }else if (this.state.district === '64'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Assasuni' value = '323'  />
                    <Picker.Item label = 'Debhata' value = '324'  />
                    <Picker.Item label = 'Kalaroa' value = '326'  />
                    <Picker.Item label = 'Satkhirasadar' value = '322'  />
                    <Picker.Item label = 'Shyamnagar' value = '328'  />
                    <Picker.Item label = 'Tala' value = '325'  />
                    <Picker.Item label = 'Kaliganj' value = '327'  />
                    
                  </Picker>
    }else if (this.state.district === '18'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Kahaloo' value = '335'  />
                    <Picker.Item label = 'Sadar' value = '330'  />
                    <Picker.Item label = 'Shariakandi' value = '338'  />
                    <Picker.Item label = 'Shajahanpur' value = '337'  />
                    <Picker.Item label = 'Dupchanchia' value = '333'  />
                    <Picker.Item label = 'Adamdighi' value = '329'  />
                    <Picker.Item label = 'Nondigram' value = '336'  />
                    <Picker.Item label = 'Sonatala' value = '340'  />
                    <Picker.Item label = 'Dhunot' value = '332'  />
                    <Picker.Item label = 'Gabtali' value = '334'  />
                    <Picker.Item label = 'Sherpur' value = '331'  />
                    <Picker.Item label = 'Shibganj' value = '339'  />
                    
                  </Picker>
    }else if (this.state.district === '19'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Akkelpur' value = '342'  />
                    <Picker.Item label = 'Kalai' value = '343'  />
                    <Picker.Item label = 'Khetlal' value = '344'  />
                    <Picker.Item label = 'Panchbibi' value = '345'  />
                    <Picker.Item label = 'Joypurhat sadar' value = '341'  />
                    
                  </Picker>
    }else if (this.state.district === '20'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Mohadevpur' value = '347'  />
                    <Picker.Item label = 'Badalgachi' value = '356'  />
                    <Picker.Item label = 'Patnitala' value = '352'  />
                    <Picker.Item label = 'Dhamoirhat' value = '353'  />
                    <Picker.Item label = 'Niamatpur' value = '349'  />
                    <Picker.Item label = 'Manda' value = '348'  />
                    <Picker.Item label = 'Atrai' value = '350'  />
                    <Picker.Item label = 'Raninagar' value = '351'  />
                    <Picker.Item label = 'Naogaon sadar' value = '346'  />
                    <Picker.Item label = 'Porsha' value = '355'  />
                    <Picker.Item label = 'Sapahar' value = '354'  />
                    
                  </Picker>
    }else if (this.state.district === '21'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Natoresadar' value = '357'  />
                    <Picker.Item label = 'Singra' value = '362'  />
                    <Picker.Item label = 'Baraigram' value = '352'  />
                    <Picker.Item label = 'Bagatipara' value = '359'  />
                    <Picker.Item label = 'Lalpur' value = '360'  />
                    <Picker.Item label = 'Gurudaspur' value = '361'  />
                    <Picker.Item label = 'Naldanga' value = '510'  />
                    
                  </Picker>
    }else if (this.state.district === '22'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Chapainawabganj sadar' value = '366'  />
                    <Picker.Item label = 'Gomostapur' value = '364'  />
                    <Picker.Item label = 'Nachol' value = '365'  />
                    <Picker.Item label = 'Bholahat' value = '363'  />
                    <Picker.Item label = 'Shibganj' value = '367'  />
                    
                  </Picker>
    }else if (this.state.district === '23'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sujanagar' value = '376'  />
                    <Picker.Item label = 'Ishurdi' value = '373'  />
                    <Picker.Item label = 'Bhangura' value = '370'  />
                    <Picker.Item label = 'Pabna sadar' value = '374'  />
                    <Picker.Item label = 'Bera' value = '369'  />
                    <Picker.Item label = 'Atghoria' value = '368'  />
                    <Picker.Item label = 'Chatmohar' value = '371'  />
                    <Picker.Item label = 'Santhia' value = '375'  />
                    <Picker.Item label = 'Faridpur' value = '372'  />
                    
                  </Picker>
    }else if (this.state.district === '24'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Paba' value = '383'  />
                    <Picker.Item label = 'Durgapur' value = '380'  />
                    <Picker.Item label = 'Mohonpur' value = '382'  />
                    <Picker.Item label = 'Charghat' value = '379'  />
                    <Picker.Item label = 'Puthia' value = '384'  />
                    <Picker.Item label = 'Bagha' value = '377'  />
                    <Picker.Item label = 'Godagari' value = '381'  />
                    <Picker.Item label = 'Tanore' value = '385'  />
                    <Picker.Item label = 'Bagmara' value = '378'  />
                    
                  </Picker>
    }else if (this.state.district === '25'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Belkuchi' value = '387'  />
                    <Picker.Item label = 'Chauhali' value = '388'  />
                    <Picker.Item label = 'Kamarkhand' value = '389'  />
                    <Picker.Item label = 'Kazipur' value = '390'  />
                    <Picker.Item label = 'Raigonj' value = '391'  />
                    <Picker.Item label = 'Shahjadpur' value = '392'  />
                    <Picker.Item label = 'Sirajganj sadar' value = '386'  />
                    <Picker.Item label = 'Tarash' value = '393'  />
                    <Picker.Item label = 'Ullapara' value = '394'  />
                    
                  </Picker>
    }else if (this.state.district === '26'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Nawabganj' value = '406'  />
                    <Picker.Item label = 'Birganj' value = '396'  />
                    <Picker.Item label = 'Ghoraghat' value = '401'  />
                    <Picker.Item label = 'Birampur' value = '395'  />
                    <Picker.Item label = 'Parbatipur' value = '407'  />
                    <Picker.Item label = 'Bochaganj' value = '398'  />
                    <Picker.Item label = 'Kaharol' value = '403'  />
                    <Picker.Item label = 'Fulbari' value = '400'  />
                    <Picker.Item label = 'Dinajpur sadar' value = '405'  />
                    <Picker.Item label = 'Hakimpur' value = '402'  />
                    <Picker.Item label = 'Khansama' value = '404'  />
                    <Picker.Item label = 'Birol' value = '397'  />
                    <Picker.Item label = 'Chirirbandar' value = '399'  />
                    
                  </Picker>
    }else if (this.state.district === '27'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadullapur' value = '412'  />
                    <Picker.Item label = 'Gaibandha sadar' value = '409'  />
                    <Picker.Item label = 'Palashbari' value = '411'  />
                    <Picker.Item label = 'Saghata' value = '413'  />
                    <Picker.Item label = 'Gobindaganj' value = '410'  />
                    <Picker.Item label = 'Sundarganj' value = '414'  />
                    <Picker.Item label = 'Phulchari' value = '408'  />
                    
                  </Picker>
    }else if (this.state.district === '28'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Kurigram sadar' value = '415'  />
                    <Picker.Item label = 'Nageshwari' value = '416'  />
                    <Picker.Item label = 'Bhurungamari' value = '417'  />
                    <Picker.Item label = 'Phulbari' value = '418'  />
                    <Picker.Item label = 'Rajarhat' value = '419'  />
                    <Picker.Item label = 'Ulipur' value = '420'  />
                    <Picker.Item label = 'Chilmari' value = '421'  />
                    <Picker.Item label = 'Rowmari' value = '422'  />
                    <Picker.Item label = 'Charrajibpur' value = '423'  />
                    
                  </Picker>
    }else if (this.state.district === '29'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sadar' value = '424'  />
                    <Picker.Item label = 'Kaliganj' value = '426'  />
                    <Picker.Item label = 'Hatibandha' value = '427'  />
                    <Picker.Item label = 'Patgram' value = '428'  />
                    <Picker.Item label = 'Aditmari' value = '425'  />
                    
                  </Picker>
    }else if (this.state.district === '30'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Syedpur' value = '430'  />
                    <Picker.Item label = 'Domar' value = '433'  />
                    <Picker.Item label = 'Dimla' value = '434'  />
                    <Picker.Item label = 'Jaldhaka' value = '431'  />
                    <Picker.Item label = 'Kishorganj' value = '432'  />
                    <Picker.Item label = 'Nilphamari sadar' value = '429'  />
                    
                  </Picker>
    }else if (this.state.district === '31'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Panchagarh sadar' value = '435'  />
                    <Picker.Item label = 'Debiganj' value = '436'  />
                    <Picker.Item label = 'Boda' value = '437'  />
                    <Picker.Item label = 'Atwari' value = '438'  />
                    <Picker.Item label = 'Tetulia' value = '439'  />
                    
                  </Picker>
    }else if (this.state.district === '32'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Rangpur sadar' value = '444'  />
                    <Picker.Item label = 'Gangachara' value = '442'  />
                    <Picker.Item label = 'Taragonj' value = '447'  />
                    <Picker.Item label = 'Badargonj' value = '440'  />
                    <Picker.Item label = 'Mithapukur' value = '441'  />
                    <Picker.Item label = 'Pirgonj' value = '446'  />
                    <Picker.Item label = 'Kaunia' value = '443'  />
                    <Picker.Item label = 'Pirgacha' value = '445'  />
                    
                  </Picker>
    }else if (this.state.district === '33'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Thakurgaon sadar' value = '448'  />
                    <Picker.Item label = 'Pirganj' value = '449'  />
                    <Picker.Item label = 'Ranisankail' value = '452'  />
                    <Picker.Item label = 'Haripur' value = '451'  />
                    <Picker.Item label = 'Baliadangi' value = '450'  />
                    
                  </Picker>
    }else if (this.state.district === '5'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Jamalpur sadar' value = '173'  />
                    <Picker.Item label = 'Melandah' value = '175'  />
                    <Picker.Item label = 'Islampur' value = '172'  />
                    <Picker.Item label = 'Dewangonj' value = '170'  />
                    <Picker.Item label = 'Sarishabari' value = '176'  />
                    <Picker.Item label = 'Madarganj' value = '174'  />
                    <Picker.Item label = 'Bokshiganj' value = '171'  />
                    
                  </Picker>
    }else if (this.state.district === '10'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Fulbaria' value = '213'  />
                    <Picker.Item label = 'Trishal' value = '209'  />
                    <Picker.Item label = 'Bhaluka' value = '208'  />
                    <Picker.Item label = 'Muktagacha' value = '211'  />
                    <Picker.Item label = 'Mymensinghsadar' value = '217'  />
                    <Picker.Item label = 'Dhobaura' value = '212'  />
                    <Picker.Item label = 'Phulpur' value = '219'  />
                    <Picker.Item label = 'Haluaghat' value = '210'  />
                    <Picker.Item label = 'Gouripur' value = '215'  />
                    <Picker.Item label = 'Gafargaon' value = '214'  />
                    <Picker.Item label = 'Iswarganj' value = '216'  />
                    <Picker.Item label = 'Nandail' value = '218'  />
                    <Picker.Item label = 'Tarakanda' value = '511'  />
                    
                  </Picker>
    }else if (this.state.district === '13'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >	
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Barhatta' value = '234'  />
                    <Picker.Item label = 'Durgapur' value = '235'  />
                    <Picker.Item label = 'Kendua' value = '232'  />
                    <Picker.Item label = 'Atpara' value = '233'  />
                    <Picker.Item label = 'Madan' value = '237'  />
                    <Picker.Item label = 'Khaliajuri' value = '241'  />
                    <Picker.Item label = 'Kalmakanda' value = '236'  />
                    <Picker.Item label = 'Mohongonj' value = '238'  />
                    <Picker.Item label = 'Purbadhala' value = '240'  />
                    <Picker.Item label = 'Netrokona sadar' value = '239'  />
                    
                  </Picker>
    }else if (this.state.district === '16'){
      upazila = <Picker selectedValue={this.state.upazila} 
                  onValueChange= {this.UpdateUpazila} 
                  >		
                    <Picker.Item label = '' value = ''  />
                    <Picker.Item label = 'Sherpur sadar' value = '256'  />
                    <Picker.Item label = 'Nalitabari' value = '255'  />
                    <Picker.Item label = 'Sreebordi' value = '257'  />
                    <Picker.Item label = 'Nokla' value = '254'  />
                    <Picker.Item label = 'Jhenaigati' value = '253'  />
                    
                  </Picker>
    }else {
      upazila = <TouchableOpacity onPress={this.upazila}>
                  <Text>{this.props.route.params.upazila}</Text>
                 </TouchableOpacity>
    }
    //monthlyexpenditure
    var me1, me2, me3, me4, me5, me6, meNull

    if (this.props.route.params.expenditure === 'below 10,000') {
      me1 = 'below 10,000'; me2 = '10,000-<20,000'; me3 = '20,000-<30,000'
      me4 = '30,000-<40,000'; me5 = '40,000 & Above'
    }else if (this.props.route.params.expenditure === '10,000-<20,000') {
      me1 = '10,000-<20,000'; me2 = 'below 10,000'; me3 = '20,000-<30, 000'
      me4 = '30, 000-<40,000'; me5 = '40,000 & Above'
    }else if (this.props.route.params.expenditure === '20,000-<30,000') {
      me1 = '20,000-<30,000'; me2 = 'below 10,000'; me3 = '10,000-<20,000'
      me4 = '30, 000-<40,000'; me5 = '40,000 & Above'
    }else if (this.props.route.params.expenditure === '30,000-<40,000') {
      me1 = '30,000<-<40,000'; me2 = 'below 10,000'; me3 = '10,000-<20, 000'
      me4 = '20, 000-<30,000'; me5 = '40,000 & Above'
    }else if (this.props.route.params.expenditure === '40,000 & Above') {
      me1 = '40,000 & Above'; me2 = 'below 10,000'; me3 = '10,000-<20,000'
      me4 = '20, 000-<30,000'; me5 = '30,000-<40,000'
    }else  {
      me2 = 'below 10,000'; me3 = '10,000-<20,000'; me4 = '20,000-<30,000'
      me5 = '30, 000-<40,000'; me6 = '40,000 & Above'
    }

    if (me6 !== undefined){
      meNull = <Picker.Item label = {me6} value = {me6}  />
    }
    
    //profession
    var pr1, pr2, pr3, pr4, pr5, pr6, pr7, prNull

    if (this.props.route.params.profession === 'Employed'){
      pr1 = 'Employed'; pr2 = 'Unemployed'; pr3 = 'Home Maker'; pr4 = 'Student'
      pr5 = 'Retired'; pr6 = 'Others'
    }else if (this.props.route.params.profession === 'Unemployed'){
      pr1 = 'Unemployed'; pr2 = 'Employed'; pr3 = 'Home Maker'; pr4 = 'Student'
      pr5 = 'Retired'; pr6 = 'Others'
    }else if (this.props.route.params.profession === 'Home Maker'){
      pr1 = 'Home Maker'; pr2 = 'Employed'; pr3 = 'Unemployed'; pr4 = 'Student'
      pr5 = 'Retired'; pr6 = 'Others'
    }else if (this.props.route.params.profession === 'Student'){
      pr1 = 'Student'; pr2 = 'Employed'; pr3 = 'Unemployed'; pr4 = 'Home Maker'
      pr5 = 'Retired'; pr6 = 'Others'
    }else if (this.props.route.params.profession === 'Retired'){
      pr1 = 'Retired'; pr2 = 'Employed'; pr3 = 'Unemployed'; pr4 = 'Home Maker'
      pr5 = 'Student'; pr6 = 'Others'
    }else if (this.props.route.params.profession === 'Others'){
      pr1 = 'Others'; pr2 = 'Employed'; pr3 = 'Unemployed'; pr4 = 'Home Maker'
      pr5 = 'Student'; pr6 = 'Retired'
    }else{
      pr2 = 'Employed'; pr3 = 'Unemployed'; pr4 = 'Home Maker'; pr5 = 'Student'
      pr6 = 'Retired'; pr7 = 'Others'
    }

    if (pr7 !== undefined){
      prNull = <Picker.Item label = {pr7} value = {pr7}  />
    }

    //education
    var ed1, ed2, ed3, ed4, ed5, ed6, ed7, edNull
    if (this.props.route.params.education === 'No formal education'){
      ed1 = 'No formal education'; ed2 = 'Up to 5 years'; ed3 = '6-10 years'
      ed4 = '10-12 years'; ed5 = '13-16 years'; ed6 = '&gt;16 years'
    }else if (this.props.route.params.education === 'Up to 5 years'){
      ed1 = 'Up to 5 years'; ed2 = 'No formal education'; ed3 = '6-10 years'
      ed4 = '10-12 years'; ed5 = '13-16 years'; ed6 = '&gt;16 years'
    }else if (this.props.route.params.education === '6-10 years'){
      ed1 = '6-10 years'; ed2 = 'No formal education'; ed3 = 'Up to 5 years'
      ed4 = '10-12 years'; ed5 = '13-16 years'; ed6 = '&gt;16 years'
    }else if (this.props.route.params.education === '10-12 years'){
      ed1 = '10-12 years'; ed2 = 'No formal education'; ed3 = 'Up to 5 years'
      ed4 = '6-10 years'; ed5 = '13-16 years'; ed6 = '&gt;16 years'
    }else if (this.props.route.params.education === '13-16 years'){
      ed1 = '13-16 years'; ed2 = 'No formal education'; ed3 = 'Up to 5 years'
      ed4 = '6-10 years'; ed5 = '10-12 years'; ed6 = '&gt;16 years'
    }else if (this.props.route.params.education === '&gt;16 years'){
      ed1 = '&gt;16 years'; ed2 = 'No formal education'; ed3 = 'Up to 5 years'
      ed4 = '6-10 years'; ed5 = '10-12 years'; ed6 = '13-16 years'
    }else {
      ed2 = 'No formal education'; ed3 = 'Up to 5 years'; ed4 = '6-10 years'
      ed5 = '10-12 years'; ed6 = '13-16 years'; ed7 = '&gt;16 years'
    }
    if (ed7 !== undefined){
      prNull = <Picker.Item label = {ed7} value = {ed7}  />
    }



    var month
    var fullDate

    if(this.state.date.getMonth() === new Date().getMonth() && this.state.date.getFullYear() === new Date().getFullYear() &&
    this.state.date.getDate() === new Date().getDate()) {
      fullDate = this.props.route.params.dob;
    } else{
      month = this.state.date.getMonth() + 1;
      fullDate = this.state.date.getFullYear()+"-"+month+"-"+this.state.date.getDate();
    }

    var Adphone
    if (this.props.route.params.Adphone === null){
      Adphone = 'Enter Mobile Number'
    }else {
      Adphone = this.props.route.params.Adphone
    }
    //console.log(this.props.route.params.guideBookNo);
    return (
        <View style ={styles.main}>
      
        <View style ={styles.header} >
            <TouchableOpacity onPress={this.menu}>
                <Ionicons name="md-menu" size={50} color="white" />
            </TouchableOpacity>
            {/* <View style = {styles.profile}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login');}}>
                <View >
                    <FontAwesome5 name="user-alt" size={30} color="white" />
                </View>
                </TouchableOpacity>
            </View> */}

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
              <TouchableOpacity  onPress={this.pass}>
                    <View style= {styles.passChangeContainer}>
                      <Entypo name="key" size={16} color="white" />
                      <Text style= {styles.passtext} >Update Password</Text>
                    </View>
              </TouchableOpacity>
            </View>
        </View>

        <View style = {styles.bndrid}>
          <Text style = {styles.bndr}>MP02130918BNDR0018745</Text>
        </View>

        <ScrollView keyboardShouldPersistTaps = 'always'>
          <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
            <View>
          
              <View style = {styles.basicinfo}>
                <Text style = {styles.basictext}>BASIC INFORMATION</Text>
              </View>

          
              <View style ={styles.info}>
                <View style ={styles.infoContainer}>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Full Name</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.name}</Text>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Phone Number</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.phoneNum}</Text>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Additional Num</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <TextInput placeholder= {Adphone}
                        keyboardType ="numeric"  
                        maxLength={11}
                        onChangeText = {phoneNumber => this.setState({phoneNumber})}
                        />
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Email</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <TextInput placeholder= {this.props.route.params.email} 
                        maxLength={11}
                        onChangeText = {email => this.setState({email})}
                        />
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Center ID</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.patientIdByCenter}</Text>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Marital Status</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <Picker selectedValue={this.state.maritalStatus} 
                        onValueChange= {this.UpdateMarritalStatus} 
                        >
                          <Picker.Item label = {ms1} value = {ms1}  />
                          <Picker.Item label = {ms2} value = {ms2}  />
                          <Picker.Item label = {ms3} value = {ms3}  />
                          {other}
                        </Picker>
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Organization</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.organization}</Text>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Center</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.center}</Text>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Registration Date</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.regDate}</Text>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Date of Birth</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <TouchableOpacity onPress={this.showPicker}>
                        <Text style={styles.pickedDate}>{fullDate}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  {this.state.isPickerShow && (
                    <DateTimePicker
                      value={this.state.date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={true}
                      onChange={this.onChange}
                      style={styles.datePicker}
                    />
                  )}

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Age</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <TextInput placeholder={this.props.route.params.age} 
                        keyboardType ="numeric"  
                        onChangeText = {age => this.setState({age})}
                        maxLength={3}
                        />
                      </View>
                    </View>
                  </View>

                 
                  <View style ={ styles.row}>
                    <Text style ={styles.title}>National ID</Text>
                    {/* <View style ={styles.phoneConatiner}> */}
                      {/* <Image source={require('../../assets/number.png')} style ={styles.image} /> */}
                      <View style = {styles.nameContainer}>
                        <Text>{this.props.route.params.nid}</Text>
                        {/* <TextInput placeholder= {this.props.route.params.nid}
                        keyboardType ="numeric"  
                        onChangeText = {nid => this.setState({nid})}
                        maxLength={10}
                        /> */}
                      {/* </View> */}
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Gender</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <Picker selectedValue={this.state.gender} onValueChange= {this.UpdateGender}>
                          <Picker.Item label = {g1} value = {gv1} />
                          <Picker.Item label = {g2} value = {gv2}  />
                          <Picker.Item label = {g3} value = {gv3}  />
                        </Picker>
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Guide Book No</Text>
                    <View style ={styles.nameContainer}>
                      <Text>{this.props.route.params.guideBookNo}</Text>
                    </View>
                  </View>
                  
                </View>
              </View>

              <View style = {styles.basicinfo}>
                <Text style = {styles.basictext}>ADDRESS</Text>
              </View>

              <View style ={styles.info}>
                <View style ={styles.infoContainer}>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Division</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <Picker selectedValue={this.state.division} onValueChange= {this.UpdateDivision} >
                          <Picker.Item label = {d1} value = {dv1}  />
                          <Picker.Item label = {d2} value = {dv2}  />
                          <Picker.Item label = {d3} value = {dv3}  />
                          <Picker.Item label = {d4} value = {dv4}  />
                          <Picker.Item label = {d5} value = {dv5}  />
                          <Picker.Item label = {d6} value = {dv6}  />
                          <Picker.Item label = {d7} value = {dv7}  />
                          <Picker.Item label = {d8} value = {dv8}  />
                          {dNull}
                        </Picker>
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>District</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        {district}
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Upazila</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        {upazila}
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Address</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.address}>
                        <TextInput  placeholder= {this.props.route.params.address}
                        onChangeText = {address => this.setState({address})}
                        multiline
                        />
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Postal Code</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <TextInput placeholder={this.props.route.params.postalCode}
                        onChangeText = {postalCode => this.setState({postalCode})}
                        keyboardType ="numeric"  
                        maxLength={10}
                        />
                      </View>
                    </View>
                  </View>

                </View>
              </View>

              <View style = {styles.basicinfo}>
                <Text style = {styles.basictext}>PROFESSIONAL INFORMATION</Text>
              </View>

              <View style ={styles.info}>
                <View style ={styles.infoContainer}>

                  <View style ={ styles.row}>
                    <View style ={styles.column}>
                      <Text style ={styles.title2}>Monthly</Text>
                      <Text style ={styles.title2}>Expenditure</Text>
                    </View>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <Picker selectedValue={this.state.expense} onValueChange= {this.UpdateExpense} >
                          <Picker.Item label = {me1} value = {me1}  />
                          <Picker.Item label = {me2} value = {me2}  />
                          <Picker.Item label = {me3} value = {me3}  />
                          <Picker.Item label = {me4} value = {me4}  />
                          <Picker.Item label = {me5} value = {me5}  />
                          {meNull}
                        </Picker>
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Profession</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <Picker selectedValue={this.state.employment} onValueChange= {this.UpdateEmployment}>
                          <Picker.Item label = {pr1} value = {pr1}  />
                          <Picker.Item label = {pr2} value = {pr2}  />
                          <Picker.Item label = {pr3} value = {pr3}  />
                          <Picker.Item label = {pr4} value = {pr4}  />
                          <Picker.Item label = {pr5} value = {pr5}  />
                          <Picker.Item label = {pr6} value = {pr6}  />
                          {prNull}
                        </Picker>
                      </View>
                    </View>
                  </View>

                  <View style ={ styles.row}>
                    <Text style ={styles.title}>Education</Text>
                    <View style ={styles.phoneConatiner}>
                      <Image source={require('../../assets/number.png')} style ={styles.image} />
                      <View style = {styles.phoneNumber}>
                        <Picker selectedValue={this.state.education} onValueChange= {this.UpdateEducation}>
                          <Picker.Item label = {ed1} value = {ed1}  />
                          <Picker.Item label = {ed2} value = {ed2}  />
                          <Picker.Item label = {ed3} value = {ed3}  />
                          <Picker.Item label = {ed4} value = {ed4}  />
                          <Picker.Item label = {ed5} value = {ed5}  />
                          <Picker.Item label = {ed6} value = {ed6}  />
                          {edNull}
                        </Picker>
                      </View>
                    </View>
                  </View>

                </View>
              </View>

              <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={this.menu} >
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

          </TouchableWithoutFeedback>
        </ScrollView>

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
    profile: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '4%'
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
    bndrid: {
      marginTop : '2%',
      alignItems: 'center'
    },
    bndr: {
      fontSize : Dimensions.get('window').width > 370 ? 18 : 16 ,
      fontWeight: '700',
      color: '#505050'
    },
    basicinfo: {
      marginTop : '3%',
      alignItems: 'center'
    },
    basictext: {
      fontSize : Dimensions.get('window').width > 370 ? 18 : 16 ,
      color: '#636363'
    },
    info: {
        alignItems: 'center'
    },
    infoContainer: {
      width: '90%',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      backgroundColor: '#E7E7E9',
      borderColor: '#E7E7E9',
      borderRadius: 15,
      marginBottom: '6%',
      elevation: 5
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
    title2: {
      fontSize: 15
    },
    nameContainer: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 5,
      padding: 5,
      width: '60%'
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
      marginLeft: '1%',
      justifyContent: 'center'
      
    },
    phoneConatiner: {
      
      width: '65%',
      flexDirection: 'row'
    },
    address: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 5,
      padding: 5,
      width: '92%',
      height: 90,
      marginLeft: '1%',
    },
    column: {
      flexDirection: 'column',
      marginTop: 0
    },
    buttonContainer: {
      width: '75%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '15%',
      marginTop: '5%'
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

//export default Profile;
export default function(props) {
  const navigation = useNavigation();

  return <Profile {...props} navigation={navigation} />;
}