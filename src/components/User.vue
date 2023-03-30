<template>       
        <h1> USER COMPONENT </h1>
        <h2>Current User product is :{{this.userid}} </h2>
</template>

<script>
    export default {
      name: 'user' ,
       props:
      {
          id: {type:Number},
      },
      data()
      {
          return {userid:this.$route.params.id}
      } 
    }
</script>
