
<template>
    <div>
<section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="model.employe.fullName" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" v-model="model.employe.email"/>
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="model.employe.password" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click="registerButton">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <RouterLink to="/login"
                    class="fw-bold text-body"><u>Login here</u></RouterLink></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
</template>
<script>
import axios from 'axios';
export default{
  name:'Register',
  data(){
    return{
      model:{
        employe:{
          fullName:"",
          email:"",
          password:""
        }
      }
    }
  },
  methods:{
    registerButton(){
   
        axios.post('http://localhost:8000/api/register',this.model.employe)
  .then((res)=>{
  // console.log(res.data)
  alert(res.data.message);
  this.$router.push('/login')
  // this.model.employe={
  //   fullName:"",
  //         email:"",
  //         password:""
  // }
  
  })
  .catch((err)=>{
    console.log(err);
  })
      
    }
  }
}
</script>


