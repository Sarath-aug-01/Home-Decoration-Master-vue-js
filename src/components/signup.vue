<template>
    <div class="signup">
      <br><br>
       <div class="sigimg">
<img src="@/assets/sign.jpg" height="300" width="320">
</div>
        <div class="register">
          <br>
            <input type="email" v-model=email  name="email" placeholder="Email ID" /><br><br>
            <input type="password" v-model=password name="password" placeholder="Password" pattern="^[A-Za-z]{10}$"/><br><br>
            <button class="btn" @click="SignUp">SignUp</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    name:'signup',
   setup() {
        const email = ref("");
        const password = ref("");
        const SignUp = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(()=>alert("SignUp Successfull"))
                .catch(err => alert(err.code));
            }
            return{
                SignUp,
                email,
                password
            }
    }
          
}
</script>

<style scoped>
.signup{
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
 background-image: linear-gradient( rgb(59, 222, 228),#abcc32); 
color: #000305;
}

.size
{
  font-size: 40px;
}

input[type=email]
{
font-size: 20px;
border: 1px solid #0703fc;
cursor: pointer;
width: 20%;
border-radius: 5px;
padding: 5px;
outline:none;
}


input[type=Password]
{
font-size: 20px;
border: 1px solid #0703fc;
cursor: pointer;
width: 20%;
border-radius: 5px;
padding: 5px;
outline:none;
}

.logo{
   border-radius: 100%;   
   width:150px; 
}
.btn{
  margin-right:6px ;
  margin-bottom:10% ;
font-size: 16px;
background:red;
border: 1px solid#0703fc;
color: white;
font-weight: bold;
cursor: pointer;
width: 10%;
border-radius: 5px;
padding: 5px 0;
outline:none;
}
</style>