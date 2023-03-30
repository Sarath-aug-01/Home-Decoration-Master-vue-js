<template>
<div class="About">
  <div class="abimg">
  <br>
  <img src="@/assets/logo1.png">
  </div>
<h1><u>HDM</u></h1>
<div class="para">
<p1>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.</p1>
</div>
<div class="but">
<button @click="$router.push({name: 'Home'})"> goto Home </button>
<br><br><br>
</div>
    </div>
</template>

<script>
    export default {
      name: 'about'  
    }
</script>
<style scoped>
.abimg img
{
border-radius:1000px 0px 1000px 0px;
}
.About
{
  text-align: center;
   background-image: linear-gradient( rgb(59, 222, 228),#abcc32); 
  color: rgb(253, 8, 8);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 40px;
  list-style-type: square;
}
.para
{
  text-decoration: none;
  padding-center: 40px;
  color: rgb(1, 0, 7);
  font-weight: 700;
   font-size: 30px;
}

</style>
