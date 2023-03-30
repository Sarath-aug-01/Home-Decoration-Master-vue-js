<template>
  <div class="Products">
    <div class="Productsimg">
<br><center>
<img src="@/assets/products.jpeg" height="500" width="500">
</center>
  <p><u>Products:</u></p>
  <p1>we having the international quality and good services to delivery our products to the customers.</p1>
  <div class="but">
  <center>
<button @click="$router.push({name: 'Home'})"> go to Home </button><br>
<br><br>
</center>
</div>
</div>
  </div>
  <div class="Productsl">
      <ul>
      <li> <router-link style="text-decoration:none; color:blue;" :to="{name:'Lights'}">Lights</router-link></li>
      <li> <router-link style="text-decoration:none; color:blue;" :to="{name:'Furniture'}">Furnitures</router-link></li>
      <li> <router-link style="text-decoration:none; color:blue;" :to="{name:'Wallshelf'}">Wallshelfs</router-link></li>
      <li> <router-link style="text-decoration:none; color:blue;" :to="{name:'Painting'}">Wall Paintings</router-link></li> 
      <li> <router-link style="text-decoration:none; color:blue;" :to="{name:'clocks'}">Clocks</router-link></li> 
      <li> <router-link style="text-decoration:none; color:blue;" :to="{name:'plants'}">Plants</router-link></li> 
  </ul>
  </div>
   <router-view />
</template>

<style>
.Productsimg img
{
  border-radius: 50px 50px 50px 50px;

}
.Products
{
  text-align: left;
   background-image: linear-gradient( rgb(59, 222, 228),#abcc32); 
  color: #000305;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 40px;
  list-style-type: square;
}
.Productsl
{
  padding: 15px;
  background-image: linear-gradient( rgb(255, 251, 5),#0ff707); 
  font-size: 20px;
  font-weight: 900;
  top: 0px;
}
.Productsl ul
{
  text-size-adjust:10px;
  text-decoration: none;
  list-style-type: none;
  display: inline-flex;
}
.Productsl ul li
{
  text-decoration: none;
  padding-right: 50px;
  color: white;
  font-weight: 700;
}

</style>