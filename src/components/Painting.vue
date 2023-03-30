<template>
<div class="Painting">
  <br>
  <center>
  <p><u><b>WALL PAINTING</b></u></p>
  <img src="@/assets/Painting.jpg" height="600" width="800">
  </center>
  <ul style="list-style-type: square;">
<li>world classic Painting.</li>
<li>You get the opportunity to transform each and every room into a personality filled with awesome Painting.</li>
</ul>
<center>
<button @click="$router.push({name: 'Wallshelf'})"> BACK </button>
<button @click="$router.push({name: 'clocks'})"> NEXT </button><br>
<button @click="$router.push({name: 'Products'})"> GO TO PRODUCTS </button><br><br>
</center>
</div>
</template>
<style>
.Painting
{
  text-align: left;
  background-image: linear-gradient( rgb(66, 230, 189),#dd751f); 
  color: rgb(7, 7, 7);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
  list-style-type: square;

}
</style>