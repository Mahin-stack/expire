// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Alert } from 'react-native';
// import firebase from 'firebase';
// import db from '../config';
// import moment from 'moment';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// export default function S({navigation}) {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
//  // const [expDate, setExpDate] = useState('');
//   const notificationListener = useRef();
//   const responseListener = useRef();


//   useEffect(async() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });
//     getExpDate();
//     await schedulePushNotification();
//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//     // function getExpDate(){
//     //     db.collection('item_details')
//     //     .where("emailId", "==", emailId)
//     //     .get().then(snpashot => {
//     //         snpashot.forEach(doc => {
//     //             var expDate = doc.data().date;
//     //             setExpDate(expDate);
//     //         })
//     //     })
//     // }

    
//     async function schedulePushNotification() {
//         await Notifications.scheduleNotificationAsync({
//           content: {
//             title: "Expiry Alert !",
//             body:  "Check out your Groceries !",
//             sound: true,
//           },
//           trigger: {
//               seconds: 10,
//               repeats: true,
//             },
//         });
//       }

   
//   return (
//     <View style={{flex: 1,alignItems: 'center',justifyContent: 'space-around',}}>
//       <Text style={{color: "red"}}>{expoPushToken}</Text>
//     <Button 
//       title= "Log Out"
//       onPress={() => {
//         Alert.alert(
//             "Sign out !",
//             "Are you sure you want to Sign out ?",
//             [{
//                 text: "No",
//                 onPress: () => console.log("Cancel Pressed"),
//                 style: "cancel"
//               },
//               { 
//                 text: "Yes",
//                 onPress: () =>  {
//                 navigation.navigate('LoginScreen');
//                 firebase.auth().signOut();
//             }}]
//             )}}
//     />
//     </View>
//   );
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }
//   return token;
// }



import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Settings() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text> expot : {expoPushToken}</Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2},
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
