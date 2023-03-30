<template>
<div class="Wallshelf">
  <br>
  <center>
  <p><u><b>Wallshelf</b></u></p>
  <img src="@/assets/Wallshelf.jpg" height="500" width="700">
  </center>
  <ul style="list-style-type: square;">
<li>world classic Wallshelf.</li>
<li>You get the opportunity to transform each and every room into a personality filled with awesome Wallshef.</li>
</ul>
<center>
<button @click="$router.push({name: 'Furniture'})"> BACK </button>
<button @click="$router.push({name: 'Painting'})"> NEXT </button><br>
<button @click="$router.push({name: 'Products'})"> GO TO PRODUCTS </button><br><br>
</center>
</div>
</template>
<style>
.Wallshelf
{
  text-align: left;
  background-image: linear-gradient( rgb(66, 230, 189),#dd751f); 
  color: rgb(7, 7, 7);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
  list-style-type: square;

}
</style>