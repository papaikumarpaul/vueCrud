<template>
    <div>
        <section className="vh-100 bg-image"
 >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login Page</h2>

              <form >
                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control form-control-lg" v-model="model.employe.email"/>
                  <label className="form-label" htmlFor="email">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control form-control-lg" v-model="model.employe.password"/>
                  <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="loginButton">Login</button>
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