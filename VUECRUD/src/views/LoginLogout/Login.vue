<template>
    <div>
        <section class="vh-100 bg-image"
 >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Login Page</h2>

              <form >
                <div class="form-outline mb-4">
                  <input type="email" id="email" class="form-control form-control-lg" v-model="model.employe.email"/>
                  <label class="form-label" htmlFor="email">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control form-control-lg" v-model="model.employe.password"/>
                  <label class="form-label" htmlFor="password">Password</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="loginButton">Login</button>
                </div>
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
   
    name:"LoginView",
    data(){
     return{
        model:{
            employe:{
          email:"",
          password:""
        }
        }
     }
    },
    methods:{
        loginButton(){
            if (this.model.employe.email && this.model.employe.password) {
                axios.post('http://localhost:8000/api/login', this.model.employe)
                    .then((res) => {
                        console.log(res.data);
                        alert(res.data.message); 
                        
                        this.$router.push('/students');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                alert("Please enter both fields");
            }
        }
    }
}
</script>