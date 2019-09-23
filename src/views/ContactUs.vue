<template>
<div class="contact">
      <Header />
      <Contact/>
     <Footer/>
</div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
export default {
    name:"ContactUs",
     components: {
    Header,
    Contact,
    Footer

  },
    
}
</script>

<style scoped>

</style>