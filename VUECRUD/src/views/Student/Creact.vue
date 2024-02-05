<template>
   <div class="container mt-5">
    <div class="card">
        <div class="card-header">
            <h3>Add Student</h3>
        </div>
        <div class="card-body">
            <div class="mb-3">
   <label for="">FullName</label>
   <input type="text" class="form-control" v-model="model.student.fullname" />
            </div>
            <div class="mb-3">
   <label for="">Email</label>
   <input type="text" class="form-control" v-model="model.student.email" />
            </div>
            <div class="mb-3">
   <label for="">Password</label>
   <input type="text" class="form-control" v-model="model.student.password" />
            </div>
            <div class="mb-3">
  <button type="button" @click="saveButton" class="btn btn-primary" >Save</button>
            </div>
        </div>
    </div>
   </div>
  </template>
  <script>
  import axios from 'axios'
export default{
    name:'studentCreact',
    data(){
     return{
        model:{
            student:{
            fullname:"",
            email:"",
            password:""
            }
        }
     }
    },
    methods:{
        saveButton(){
axios.post('http://localhost:8000/api/creacted',this.model.student).then(res=>{
    console.log(res.data)
    alert(res.data.message);
    this.model.student={
        fullname:"",
            email:"",
            password:" "
    }
}).catch((err)=>console.log(err))
        }
    }
}
</script>
  

