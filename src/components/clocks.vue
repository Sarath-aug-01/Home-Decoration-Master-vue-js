<template>
<div class="clock">
  <br>
  <center>
  <p><u><b>CLOCKS</b></u></p>
  <div class="clkimg">
  <img src="@/assets/clocks.jpg" height="600" width="700"></div>
  </center>
  <ul style="list-style-type: circle;">
<li>world classic clocks.</li>
<li>A wall clock can be a beautiful decor piece — even if we have the time displayed on just about every device.</li>
<li>nowadays! Look for one that works in with your interior style, whether that’s coastal, industrial, contemporary or something else.</li>
</ul>
<center>
<button @click="$router.push({name: 'Painting'})"> BACK </button>
<button @click="$router.push({name: 'plants'})"> NEXT </button><br>
<button @click="$router.push({name: 'Products'})"> GO TO PRODUCTS </button><br><br>
</center>
</div>
</template>
<style>
.clock
{
  text-align: left;
  background-image: linear-gradient( rgb(66, 230, 189),#dd751f); 
  color: rgb(7, 7, 7);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
  list-style-type: circle;
}

</style>