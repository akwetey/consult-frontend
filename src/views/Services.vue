<template>
 <div class="services">
      <Header />
     <Service/>
     <Footer/>
</div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Service from "../components/Service.vue";
export default {
    name:"Services",
    components:{
      Header,
      Footer,
      Service
    }
}
</script>

<style scoped>

</style>