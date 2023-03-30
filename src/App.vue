<template>
<div class="main">
  <div class="img">
   <center>
   <img src="@/assets/logo1.png">
   </center>
  </div>
    <p>[HDM]</p>
    <p1>HOME DECORATION MASTER</p1>
</div>
  <div class="mainp">
    <ul>
     <li> <router-link style="text-decoration:none; color:white;" to="/">Home  </router-link> </li>
     <li> <router-link style="text-decoration:none; color:white;" to="/Products">Products</router-link></li>
     <li> <router-link style="text-decoration:none; color:white;" to="/Login">Login</router-link></li>
     <li> <router-link style="text-decoration:none; color:white;" to="/signup">Signup</router-link></li>
     <li> <router-link style="text-decoration:none; color:white;" to="/contact">Contact</router-link></li>
      <li> <router-link style="text-decoration:none; color:white;" to="/About">About</router-link></li>
    </ul>
  </div>
  <router-view />
  <router-view name="footer"/> 
</template>
<script>
export default {
  name: 'App',
     components:{
      }
}
</script>
<style>
.img img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.main
{
  padding: 35px;
  background-image: linear-gradient( rgb(255, 251, 5),#fc7405); 
  color: rgb(0, 0, 0);
  font-size: 45px;
  font-weight: 900;
  top: 20px;
}
.mainp
{
  padding: 15px;
  background-image: linear-gradient( rgb(164, 112, 207),#23e20a); 
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 900;
  top: 0px;
}
.mainp ul
{
  text-decoration: none;
  list-style-type: none;
  display: inline-flex;
}
.mainp ul li
{
  text-decoration: none;
  padding-right: 50px;
  color: white;
  font-weight: 700;
}
</style>