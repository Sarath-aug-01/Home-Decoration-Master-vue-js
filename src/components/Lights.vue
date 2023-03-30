<template>
<div class="Lights">
  <center>
    <br>
  <p><u><b>LIGHTS</b></u></p>
   <img src="@/assets/Lights.jpg" height="600" width="800">
  </center>
  <ul style="list-style-type: square;">
<li>world classic Lights.</li>
<li>You get the opportunity to transform each and every room into a personality filled with awesome light.</li>
</ul>
<center>
<button @click="$router.push({name: 'Products'})"> BACK </button>
<button @click="$router.push({name: 'Furniture'})"> NEXT </button><br><br>
</center>
</div>
</template>
<style>
.Lights
{
  text-align: left;
   background-image: linear-gradient( rgb(66, 230, 189),#dd751f); 
  color: rgb(7, 7, 7);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
  list-style-type: square;

}
.lightimg{
  border-radius: 50px 50px 50px 50px;

}
</style>