<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
  <div class="container">
     <router-link class="navbar-brand" :to="'/index/' + iso"> <img src="http://placehold.it/150x50?text=Logo" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
     </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
       <ul class="navbar-nav ml-auto">
        <li class="nav-item">
             <router-link  active-class="active"  class="nav-link" :to="'/index/' + iso" exact>Home</router-link>
        </li>
        <li class="nav-item">
              <router-link  active-class="active" class="nav-link" :to="'/index/' + iso +'/about-us'" exact>About us</router-link>
        </li>
        <li class="nav-item">
           <router-link active-class="active"  class="nav-link" :to="'/index/' + iso +'/services'" exact>Services</router-link>
        </li>
        <li class="nav-item">
           <router-link  active-class="active"  class="nav-link" :to="'/index/' + iso +'/contact-us'" exact>Contact us</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
          iso:this.$route.params.iso
        }
    },
}
</script>

<style scoped>


</style>