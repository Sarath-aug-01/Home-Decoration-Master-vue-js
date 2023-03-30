<template>
<div class="plant">
  <br>
  <center>
  <p><u><b>INDOOR PLANTS</b></u></p>
  <img src="@/assets/plants.jpg" height="600" width="800">
  </center>
  <ul style="list-style-type: circle;">
<li>You can never have too many indoor plants. Fact. And there’s never been a better range of stylish vessels to display your indoor plants!</li>
</ul>
<center>
<button @click="$router.push({name: 'clocks'})"> BACK </button>
<button @click="$router.push({name: 'Products'})"> GO TO PRODUCTS </button><br><br>
</center>
</div>
</template>
<style>
.plant
{
  text-align: left;
  background-image: linear-gradient( rgb(66, 230, 189),#dd751f); 
  color: rgb(7, 7, 7);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
  list-style-type: square;

}
</style>