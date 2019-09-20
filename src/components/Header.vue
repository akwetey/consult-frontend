<template>
     <div class="header-boxed fixed-top header-classic" id="nav">
            <!-- header classic -->
            <div class="container">
                <div class="header-boxed-style">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <a href="index-3.html" class="logo pt-1"><img src="../assets/images/logo-2.png"
                                    alt=""></a>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="d-xl-flex justify-content-end navigation-head">
                                <div id="navigation" class="navigation">
                                    <!-- navigation -->
                                    <ul>
                                        <li>
                                             <router-link :to="'/index/' + iso">Home</router-link>
                                        </li>

                                        <li>
                                            <router-link :to="'/index/' + iso +'/about'">About us</router-link>
                                        </li>

                                        <li>
                                             <router-link to="">Contact us</router-link>
                                        </li>
                                        <li>
                                            <router-link to="">Services</router-link>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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