<template>
    <div class="container mt-5">
     <div class="card">
         <div class="card-header">
             <h3>Edit Student</h3>
         </div>
         <div class="card-body">
             <div class="mb-3">
    <label for="">FullName</label>
    <input type="text" class="form-control" v-model="model.student.fullname" />
             </div>
             <div class="mb-3">
   <label for="">Departments</label>
   <input type="text" class="form-control" v-model="model.student.departments" />
            </div>
             <div class="mb-3">
    <label for="">Email</label>
    <input type="text" class="form-control" v-model="model.student.email" />
             </div>
             <div class="mb-3">
   <label for="">Phone</label>
   <input type="text" class="form-control" v-model="model.student.phone" />
            </div>
             <div class="mb-3">
   <button type="button" @click="updateStudentData" class="btn btn-primary" >Update</button>
             </div>
         </div>
     </div>
    </div>
   </template>
   <script>
   import axios from 'axios';
 export default{
     name:'studentEdit',
     data(){
      return{
        studentId:"",
         model:{
             student:{
                 
            fullname:"",
            departments:" ",
            email:"",
            phone:""
             }
         }
      }
     },
     mounted(){
        // console.log(this.$route.params._id)
        this.studentId=this.$route.params._id;
  this.getStudentData(this.$route.params._id)
     },
     methods:{

        getStudentData(studentId){
  axios.get(`http://localhost:8000/api/getone/${this.studentId}`).then((value) => {
    // console.log(value.data);
    this.model.student.fullname=value.data.fullname;
    this.model.student.departments = value.data.departments;
    this.model.student.email=value.data.email;
    this.model.student.phone=value.data.phone;
  }).catch((err)=>{
console.log(err)
  })
},

updateStudentData(studentId){
 axios.put(`http://localhost:8000/update/update/${this.studentId}`,this.model.student).then(res=>{
    //  console.log(res.data)
     alert(res.data.message);
     this.model.student={
            fullname:"",
            departments:" ",
            email:"",
            phone:""
     }
 }).catch((err)=>console.log(err))
         }
     }
 }
 </script>