<template>
    <div class="tiny-footer-dark">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <p>Copyright © <span id="date">2019 </span>  <a href="#">     VisaGhana</a>. Built with <i class="fas fa-heart" style="color:red;"></i> by visaGhana All Rights Reserved.</p>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="footer-social-list">
                            <ul class="listnone">
                                <li><a href="#"><i class="fab fa-facebook social-icon"></i> </a></li>
                                <li><a href="#"><i class="fab fa-twitter social-icon"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram social-icon"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube social-icon"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin social-icon"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:"Footer",
    mounted(){
        document.querySelector('#date').innerHTML = new Date().getFullYear();
    }
}
</script>

<style scoped>

</style>