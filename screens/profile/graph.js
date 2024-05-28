import React,{Component}  from 'react';
import { StyleSheet, Text,View, ScrollView,Image ,TouchableOpacity,Dimensions,TextInput,
TouchableWithoutFeedback,Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {  Row,Table ,Rows } from 'react-native-reanimated-table';

class Graph extends React.Component {

  constructor(props) {
 
    super(props)
 
    this.state = {
       
    }
 
  }

  

  menu = () => {
      
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
        });

  }

  
  
  render() {
    const { navigation } = this.props;

    let heading
    let tableHead = []
    let tableData = []
    //const bp =Object.keys(this.props.route.params.bp).map(v => new Array(v, this.props.route.params.bp[v]));;
    if(this.props.route.params.bp_count >= '5'){
      heading = <Text style = {styles.PText}>BP(mmHG)</Text>
      tableHead = ['Date', 'SBP', 'DBP']
      tableData = [
        [this.props.route.params.bp[0].date, this.props.route.params.bp[0].sbp, this.props.route.params.bp[0].dbp],
        [this.props.route.params.bp[1].date, this.props.route.params.bp[1].sbp, this.props.route.params.bp[1].dbp],
        [this.props.route.params.bp[2].date, this.props.route.params.bp[2].sbp, this.props.route.params.bp[2].dbp],
        [this.props.route.params.bp[3].date, this.props.route.params.bp[3].sbp, this.props.route.params.bp[3].dbp],
        [this.props.route.params.bp[4].date, this.props.route.params.bp[4].sbp, this.props.route.params.bp[4].dbp]
      ]
     }else if(this.props.route.params.bp_count == '4'){
      heading = <Text style = {styles.PText}>BP(mmHG)</Text>
      tableHead = ['Date', 'SBP', 'DBP']
      tableData = [
        [this.props.route.params.bp[0].date, this.props.route.params.bp[0].sbp, this.props.route.params.bp[0].dbp],
        [this.props.route.params.bp[1].date, this.props.route.params.bp[1].sbp, this.props.route.params.bp[1].dbp],
        [this.props.route.params.bp[2].date, this.props.route.params.bp[2].sbp, this.props.route.params.bp[2].dbp],
        [this.props.route.params.bp[3].date, this.props.route.params.bp[3].sbp, this.props.route.params.bp[3].dbp]
      ]
     }else if(this.props.route.params.bp_count == '3'){
    heading = <Text style = {styles.PText}>BP(mmHG)</Text>
    tableHead = ['Date', 'SBP', 'DBP']
    tableData = [
      [this.props.route.params.bp[0].date, this.props.route.params.bp[0].sbp, this.props.route.params.bp[0].dbp],
      [this.props.route.params.bp[1].date, this.props.route.params.bp[1].sbp, this.props.route.params.bp[1].dbp],
      [this.props.route.params.bp[2].date, this.props.route.params.bp[2].sbp, this.props.route.params.bp[2].dbp]
    ]
   }else if(this.props.route.params.bp_count == '2'){
    heading = <Text style = {styles.PText}>BP(mmHG)</Text>
    tableHead = ['Date', 'SBP', 'DBP']
    tableData = [
      [this.props.route.params.bp[0].date, this.props.route.params.bp[0].sbp, this.props.route.params.bp[0].dbp],
      [this.props.route.params.bp[1].date, this.props.route.params.bp[1].sbp, this.props.route.params.bp[1].dbp]
    ]
   }
   else if(this.props.route.params.bp_count == '1'){
    heading = <Text style = {styles.PText}>BP(mmHG)</Text>
    tableHead = ['Date', 'SBP', 'DBP']
    tableData = [
      [this.props.route.params.bp[0].date, this.props.route.params.bp[0].sbp, this.props.route.params.bp[0].dbp]
    ]
   }
     
    //console.log(this.props.route.params.bp_count);
      const hba1c = {
          labels: [this.props.route.params.hba1cDate1, this.props.route.params.hba1cDate2
            , this.props.route.params.hba1cDate3, this.props.route.params.hba1cDate4,
             this.props.route.params.hba1cDate5],
          datasets: [
            {
              data: [this.props.route.params.hba1c1, this.props.route.params.hba1c2, 
                this.props.route.params.hba1c3, this.props.route.params.hba1c4, 
                this.props.route.params.hba1c5],
              colors: [
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
              ]
            }
          ]
        };
        let fbg1 = '20'
      const fbg = {
          labels: [this.props.route.params.fbgDate1, this.props.route.params.fbgDate2
            , this.props.route.params.fbgDate3, this.props.route.params.fbgDate4,
             this.props.route.params.fbgDate5],
          datasets: [
            {
              data: [this.props.route.params.fbg1, this.props.route.params.fbg2,
                 this.props.route.params.fbg3, this.props.route.params.fbg4, 
                 this.props.route.params.fbg5],
              colors: [
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
              ]
            }
          ]
        };

        // const bp = {
        //   labels: [this.props.route.params.bpDate1, this.props.route.params.bpDate2
        //     , this.props.route.params.bpDate3, this.props.route.params.bpDate4,
        //      this.props.route.params.bpDate5],
        //   datasets: [
        //     {
        //       data: [this.props.route.params.bp1 +'.'+'80', this.props.route.params.bp2, 
        //         this.props.route.params.bp3, this.props.route.params.bp4, 
        //         this.props.route.params.bp5],
        //       colors: [
        //         (opacity =1) => '#2171B5',
        //         (opacity =1) => '#2171B5',
        //         (opacity =1) => '#2171B5',
        //         (opacity =1) => '#2171B5',
        //         (opacity =1) => '#2171B5',
        //       ]
        //     }
        //   ]
        // };

        const bmi = {
          labels: [this.props.route.params.bmiDate1, this.props.route.params.bmiDate2
            , this.props.route.params.bmiDate3, this.props.route.params.bmiDate4,
             this.props.route.params.bmiDate5],
          datasets: [
            {
              data: [this.props.route.params.bmi1, this.props.route.params.bmi2, 
                this.props.route.params.bmi3, this.props.route.params.bmi4, 
                this.props.route.params.bmi5],
              colors: [
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
                (opacity =1) => '#2171B5',
              ]
            }
          ]
        };

    const ConfigHba1c = {
      backgroundGradientFrom: "#cbd1cc",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#8E928D",
      backgroundGradientToOpacity: 1,
      color: (opacity ) => `black`,
      strokeWidth: 1, // optional, default 3
      barPercentage: 1,
      useShadowColorFromDataset: false // optional
    };

    const ConfigFbg = {
      backgroundGradientFrom: "#cbd1cc",
      backgroundGradientFromOpacity: 0.5,
      backgroundGradientTo: "#8E928D",
      backgroundGradientToOpacity: 1,
      color: (opacity ) => `black`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 1,
      useShadowColorFromDataset: false // optional
    };

    // const ConfigBp = {
    //   backgroundGradientFrom: "#cbd1cc",
    //   backgroundGradientFromOpacity: 1,
    //   backgroundGradientTo: "#8E928D",
    //   backgroundGradientToOpacity: 1,
    //   color: (opacity ) => `black`,
    //   strokeWidth: 1, // optional, default 3
    //   barPercentage: 1,
    //   useShadowColorFromDataset: false // optional
    // };

    const ConfigBmi = {
      backgroundGradientFrom: "#cbd1cc",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#8E928D",
      backgroundGradientToOpacity: 1,
      color: (opacity ) => `black`,
      strokeWidth: 1, // optional, default 3
      barPercentage: 1,
      useShadowColorFromDataset: false // optional
    };

const screenWidth = Dimensions.get("window").width-10;
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
            <View>
              <ScrollView style = {{marginBottom : '20%'}}>

                <Text style = {styles.PText}>HbA1c(%)</Text>
                <BarChart
    
                  data={hba1c}
                  width={screenWidth}
                  height={250}
                  chartConfig={ConfigHba1c}
                  style ={{borderRadius: 10,alignSelf:'center'}}
                  withCustomBarColorFromData={true}
                  flatColor={true}
                  showValuesOnTopOfBars
                />

                <Text style = {styles.PText}>FBG(mmol)</Text>
                <BarChart
    
                  data={fbg}
                  width={screenWidth}
                  height={250}
                  chartConfig={ConfigFbg}
                  style ={{borderRadius: 10,alignSelf:'center'}}
                  withCustomBarColorFromData={true}
                  flatColor={true}
                  showValuesOnTopOfBars
                  
                />

                

                <Text style = {styles.PText}>BMI(kg/m2)</Text>
                <BarChart
    
                  data={bmi}
                  width={screenWidth}
                  height={250}
                  chartConfig={ConfigBmi}
                  style ={{borderRadius: 10,alignSelf:'center'}}
                  withCustomBarColorFromData={true}
                  flatColor={true}
                  showValuesOnTopOfBars
                  
                />

                {heading}
                <Table style={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Row data={tableHead} style={styles.head} />
                  <Rows data={tableData} style={styles.text}/>
                </Table>

              </ScrollView>
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
    head: { 
      height: 40, 
      backgroundColor: '#f1f8ff' ,
      margin: 6 
    },
    text: { 
      margin: 6 
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
    PText: {
      color: 'black',
      marginLeft: '5%',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: '2%'
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

//export default Graph;
export default function(props) {
  const navigation = useNavigation();

  return <Graph {...props} navigation={navigation} />;
}