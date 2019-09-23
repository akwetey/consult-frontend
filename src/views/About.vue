<template>
   <div>
     <Header />
    <AboutUs/>
     <Footer/>
   </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AboutUs from "../components/AboutUs.vue";
export default {
    name:"About",
     components: {
    Header,
    Footer,
    AboutUs

  },
}
</script>

<style scoped>

</style>