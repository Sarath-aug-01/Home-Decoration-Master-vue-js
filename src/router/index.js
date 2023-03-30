import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Products from "@/components/Products.vue";
import Login from "@/components/Login.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import User from "@/components/User.vue";
import Lights from "@/components/Lights.vue";
import Furniture from "@/components/Furniture.vue";
import Wallshelf from "@/components/Wallshelf.vue";
import Painting from "@/components/Painting.vue";
import clock from "@/components/clocks.vue";
import plant from "@/components/plants.vue";
import Contactfooter from "@/components/Contactfooter.vue";
import signup from "@/components/signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Contact",
    name: "Contact",
    components: {
      default:Contact,
      footer:Contactfooter,}
    },
  
  {
    path: "/User/:id",
    name: "User",
    component: User,
    props:true,
  },
  {
    path: "/Products",
    name: "Products",
    components: {
      default:Products,
    },
   

  children:[
    {
      name:"Lights",
      path:"/Lights",
      component:Lights
    },
    {
      name:"Furniture",
      path:"/Furniture",
      component:Furniture
    },
    {
      name:"Wallshelf",
      path:"/Wallshelf",
      component:Wallshelf
    },
    {
      name:"Painting",
      path:"/Painting",
      component:Painting
    },
    {
      name:"clocks",
      path:"/clocks",
      component:clock
    },
    {
      name:"plants",
      path:"/plants",
      component:plant
    },
  ]
  }];


const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
