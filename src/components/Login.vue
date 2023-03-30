<template>
<div class='login'>
  <div class="logimg">
<img src="@/assets/login.png">
</div>
<div class="register">
                <input type="email" v-model=email name="email" placeholder="Email ID"/><br><br>
                <input type="password" v-model=password name="password" placeholder="Password"/><br><br>
                <button class="btn" @click="Login">Login</button> 
                <button class="btn" @click="Logout">Logout</button>          
        </div>
        </div>
</template>
<script>
import firebase from "firebase";
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async Login() {
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password);
                alert("Logged In Successfully");
            } catch (error) {
                alert(error.code);
            }
        },
     async Logout() {
            try {
                await firebase
                    .auth()
                    .signOut();
                alert("Logout In Successfully");
            } catch (error) {
                alert(error.code);
            }
        }
    },
};
</script>
<style>
.login{
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


input[type=submit]
{
font-size: 16px;
background:rgb(241, 238, 3);
border: 1px solid #0703fc;
color: rgb(5, 0, 0);
font-weight: bold;
cursor: pointer;
width: 10%;
border-radius: 5px;
padding: 5px 0;
outline:none;
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

