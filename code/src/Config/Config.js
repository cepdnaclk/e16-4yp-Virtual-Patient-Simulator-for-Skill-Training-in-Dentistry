// import firebase from 'firebase/compat/app'
// import 'firebase/firestore'
// import 'firebase/auth';

// var Config = {
//     apiKey: "AIzaSyDMGgEtQXmO1y4HWRfhaJmUVWLnOdl9H7A",
//     authDomain: "vitual-patient.firebaseapp.com",
//     projectId: "vitual-patient",
//     storageBucket: "vitual-patient.appspot.com",
//     messagingSenderId: "305839887405",
//     appId: "1:305839887405:web:8f24039875fbba469f94a4",
//     measurementId: "G-CSFMP3D73X"
//   };
//   firebase.initializeApp(Config);
//   firebase.firestore().settings({timestampsInSnapshots: true});

 // export default firebase;

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';
  import 'firebase/compat/auth';
  import "firebase/compat/storage";
  
  // Replace this with your own config details
  var config = {
    apiKey: "AIzaSyDMGgEtQXmO1y4HWRfhaJmUVWLnOdl9H7A",
        authDomain: "vitual-patient.firebaseapp.com",
        projectId: "vitual-patient",
        storageBucket: "vitual-patient.appspot.com",
        messagingSenderId: "305839887405",
        appId: "1:305839887405:web:8f24039875fbba469f94a4",
        measurementId: "G-CSFMP3D73X"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.storage()
  export default firebase;