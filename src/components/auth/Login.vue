<template>
    <div class="container-scroller" >
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5" style="margin-left:0px;margin-right:0px">
                <div class="brand-logo">
                  <img src="../../assets/images/logo-dark.svg">
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="mt-3">
                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="/" style="padding:1rem 3rem;">SIGN IN</a>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check" style="padding-left:0px;margin-bottom:10px;">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" > Keep me signed in </label>
                    </div>
                    <a href="/" class="auth-link text-black">Forgot password?</a>
                  </div>
                  <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn" style="    background: #3b579d;color: #ffffff;font-size: 12px;">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Don't have an account? <a href="register" class="text-primary">Create</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
</style>
