// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDri3bnpV0jmgLvg84hJbic-9ReJCywX9s',
  authDomain: 'reactnativefb-bd5b9.firebaseapp.com',
  projectId: 'reactnativefb-bd5b9',
  storageBucket: 'reactnativefb-bd5b9.appspot.com',
  messagingSenderId: '851383325041',
  appId: '1:851383325041:web:f6a94c19aafbf60ef166d0',
  measurementId: 'G-2TP735D4K6',
  databaseURL: "https://reactnativefb-bd5b9-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
