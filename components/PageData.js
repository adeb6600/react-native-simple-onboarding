import React from 'react';
//import { View, Text ,TouchableOpacity} from 'react-native';
import {LoginButton , AccessToken} from 'react-native-fbsdk'
import {
Image,
Text,
View,
TouchableOpacity,
Button
} from '@shoutem/ui'
import ResponsiveImage from 'react-native-responsive-image';
import ApplyScale from 'react-native-responsive-image/applyScale'
import ScalableText from 'react-native-text';
import {Platform} from 'react-native'
import S from 'string'
import Icon from 'react-native-vector-icons/FontAwesome';
const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View  style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, hasAction, action, exitAction, loggedIn, ...rest }) => {
  return (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <ScalableText allowFontScaling={false} style={{ ...styles.title, ...(isLight ? styles.titleLight : {}), ...(hasAction? styles.titleAction:{}) }}>
        {title}
      </ScalableText>
  {!S(subtitle).isEmpty() && (<ScalableText allowFontScaling={false} style={{ ...styles.subtitle, ...(isLight ? styles.subtitleLight : {}) }}>
        {subtitle}
      </ScalableText>)}
      {hasAction && <ActionComp actionPress={action} exitAction={exitAction} loggedIn ={loggedIn}/>}
    </PageContent>
  </Page>
  )
};

const styles = {
  content: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0
  },
  image: {
    flex: 0,
    paddingBottom: ApplyScale(20),
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight:"500",
    lineHeight:ApplyScale(40),
    color: 'rgb(31,50,64)',
    paddingBottom: ApplyScale(15),
    paddingLeft:0,
    paddingRight:0,
    fontFamily:'SFUIDisplay-Medium'
  },
  titleLight: {
    color: 'rgb(31,50,64)',
  },
  titleAction:{
    textAlign:'center',
    paddingLeft:0,
    paddingRight:0,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight:ApplyScale(30),
    fontWeight:"300",
     paddingLeft:ApplyScale(45),
    paddingRight:ApplyScale(45),
    color: 'rgb(74,74,74)',
    fontFamily:'SFUIDisplay-Light',
    paddingBottom: ApplyScale(50)
},
  subtitleLight: {
    color: 'rgb(31, 50, 64)',
  },
};

      const ActionComp= (props) =>{
                          return (
              <View styleName=" vertical" style={{
                 paddingBottom: (Platform.OS =='ios')? 0: ApplyScale(50),
                 justifyContent:'center',
                 alignItems:'center',
                 paddingLeft:0
              }}>
              {!props.loggedIn.nloggedIn && (<Button style={{
                backgroundColor:'rgb(74,144,226)',
                borderRadius:5,
                height:ApplyScale(50),
                width:ApplyScale(250),
                marginBottom:ApplyScale(10),
                justifyContent:'center'
              }} onPress={props.actionPress.appScope}>
              <Icon name="facebook" size={ApplyScale(21.7)} color='rgb(255,255,255)' />

                  <ScalableText allowFontScaling={false}  style={{
                    fontFamily:'SFUIDisplay-Regular',
                    fontSize:15,
                    textAlign:'center',
                    color:'rgb(255,255,255)',
                    marginLeft:ApplyScale(30),
                    paddingRight:ApplyScale(15)
                  }}>Sign in with Facebook</ScalableText>
                </Button>)}
                {props.loggedIn.nloggedIn && (<Button style={{
                  backgroundColor:'rgb(74,144,226)',
                  borderRadius:5,
                  height:ApplyScale(50),
                  marginTop:ApplyScale(15),
                  marginBottom:ApplyScale(10)
                }} onPress={props.actionPress.appScope}>
                <Icon name="facebook" size={ApplyScale(21.7)} color='rgb(255,255,255)' />

                    <ScalableText allowFontScaling={false}  style={{
                      fontFamily:'SFUIDisplay-Regular',
                      fontSize:15,
                      textAlign:'center',
                      color:'rgb(255,255,255)',
                      marginLeft:ApplyScale(20),
                          paddingRight:ApplyScale(15)
                    }}>Continue with Facebook</ScalableText>
                  </Button>)}
                         {!props.loggedIn.nloggedIn && (<TouchableOpacity onPress={()=>{
                          props.exitAction.exitfunc()
                         }

                         }>
                         <ScalableText allowFontScaling={false} style={{
                           fontFamily:'SFUIDisplay-Light',
                           fontSize:18,
                           fontWeight:"300",
                           textAlign:'center',
                           color:'rgb(155,155,155)'
                         }}>continue as guest </ScalableText>
                         </TouchableOpacity>)}
                 </View>
                )
            }

export default PageData;
