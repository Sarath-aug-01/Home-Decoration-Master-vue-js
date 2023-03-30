import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyASMU2UVvF7VhNdYN1PWfZrpVjt4wzsDZU",
    authDomain: "vue-js-7ce84.firebaseapp.com",
    projectId: "vue-js-7ce84",
    storageBucket: "vue-js-7ce84.appspot.com",
    messagingSenderId: "316975525518",
    appId: "1:316975525518:web:0b46ea74a14127254e63df"
  };
  firebase.initializeApp(firebaseConfig);
const app = createApp(App)
app.directive("size",{
    beforeMount: (e1) => {
        e1.style.fontSize = "100px" 
    }
   })
   app.use(router).mount('#app')
