<template>
  <div class="">
   <header>
      <nav class="navbar navbar-expand-md fixed-top bg-primary navbar-primary">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        </a>
      </nav>
   </header>
   <div class="container">
     <div class="bg">
      <img src="../assets/ghana.jpg" class="img-fluid" alt="">
     </div>
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 card-top">
           <div class="card shadow">
            <div class="card-body">
                <h1 class="card-title text-center">VisaGhana</h1>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates itaque numquam perspiciatis blanditiis autem, cupiditate non.</p>
                <form @submit="navigateToPage">
                  <div class="form-group">
                      <select id="country" class="form-control" name="country" v-model.trim="iso" required>
                        <option disabled value>select country</option>
                        <option
                          v-for="(country, i) in countries"
                          :key="i"
                          :value="country.id"
                        >{{ country.nicename }}</option>
                      </select>
                  </div>
                  <div class="form-group">
                    <div class="text-center">
                      <button type="submit" class="btn btn-outline-primary btn-lg" id="submitBtn">Submit</button>
                    </div>
                  </div>
                </form>
           </div>
         </div>
       </div>
      </div>
   </div>
  </div>
</template>

<script>
import axios from "axios";
import API_URL from "../config/dev";

export default {
  name: "Countries",
  
  data() {
    return {
      countries: [],
      iso: ""
    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(API_URL + `/countries`);
        const res = await response.data;
        this.countries = res;
      } catch {
        err => console.error(err);     
      }
    },
   
    navigateToPage(e) {
      e.preventDefault();
      if (!this.iso) {
        // TODO: add validation message
        this.$router.push("*")
        return;
      }
      const formData = {
        id:country.value
      }
      
      axios.post(API_URL + `/country-iso` ,formData)
      .then(response => {
        const res = response.data;
        const iso = res.iso.toLowerCase();
         this.$router.push(`/index/${iso}`);
    
      })
      .catch(err => console.error(err))
      
    }
  },

  created() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
 
 
}
.bg img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;

}
.card-top{
  margin-top:20%;
}

</style>
