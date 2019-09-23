<template>
<div class="contact">
     <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h1 class="page-title">Contact us</h1>
                    <p class="page-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nihil quas ab dolores totam aliquid libero iusto deserunt. Nobis excepturi amet ad, tenetur eaque veritatis adipisci eveniet repellendus sint ducimus!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="page-breadcrumb">
        <!-- page breadcrumb -->
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /.page breadcrumb -->
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                    <div class="contact-form-head">
                        <h2 class="mb0">Leave a Message Here</h2>
                        <p>We will contact you back ASAP.</p>
                    </div>
                    <div class="contact-form mt30">
                        <form method="post" action="contactus.php">
                            <div class="form-group">
                                <label for="name">Name <span class="required">*</span></label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required>
                            </div>
                            <div class="form-group">
                                <label for="mobileno">Mobile No <span class="required">*</span></label>
                                <input type="text" class="form-control" id="mobileno" name="mobileno" placeholder="Mobile No" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address <span class="required">*</span></label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Enter Email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea class="form-control" id="message" name="message" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="offset-xl-1 col-xl-6 offset-lg-1 col-lg-5 col-md-5 col-sm-12 col-12">
                    <h2>Quick Contact</h2>
                    <p>We are pleased to answer any questions or concerns you may have.</p>
                    <h4 class="mb0">Phone</h4>
                    <p>000-123 4567, 001-123 7654, +0 9912347890</p>
                    <div class="row mb30">
                        <div class="col">
                            <h4 class="mb0">Email</h4>
                            <p>info@visaghana.com</p>
                        </div>
                    </div>
                    <div class="row mb20">
                        <div class="col mb10">
                            <h4 class="mb0">Inquire with us</h4>
                            <p>info@visaghana.com</p>
                        </div>
                        <div class="col mb10">
                            <h4 class="mb0">Send your feedback</h4>
                            <p>support@visaghana.com</p>
                        </div>
                    </div>
                    <!-- <div class="row mb20">
                        <div class="col mb10">
                            <h4 class="mb0">Work with us</h4>
                            <p>career@visaghana.com</p>
                        </div>
                        <div class="col mb10">
                            <h4 class="mb0">For Alliance with us</h4>
                            <p>alliance@visaghana.com</p>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col">
                            <h4 class="mb0">Head Office</h4>
                            <p>3356 Biddie Lane Richmond, VA 23224</p>
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
    name:"Contact"
}
</script>

<style scoped>

</style>