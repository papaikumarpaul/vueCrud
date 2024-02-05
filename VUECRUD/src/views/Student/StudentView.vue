<template>
  <div class="container">
  <div class="card">
    <div class="card-header">
        <h3>Student
            <RouterLink to="/students/creact" class="btn btn-outline-primary float-end" >Add Student</RouterLink>
        </h3>
    </div>
     <div class="card-body">
        <table class="table table-bordered">
         <thead>
            <tr>
                <!-- <th>Id</th> -->
                <th>FullName</th>
                <th>Departments</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(student,index) in this.students">
              <!-- <td>
                {{ student._id }}
              </td> -->
              
              <td>
                {{ student.fullname }}
              </td>
              <td>
                {{ student.departments }}
              </td>
              <td>
                {{ student.email }}
              </td>
              <td>
                {{ student.phone }}
              </td>
                <td class=" btn-toolbar ms-auto mb-2 gap-4 me-3">
                  <RouterLink :to="{path:'/students/'+student._id+'/edit'}" class="btn btn-outline-primary " >Edit</RouterLink>
                  <button type="button" @click="deletedButton(student._id)" class="btn btn-danger">Deleted</button>
                </td>
            </tr>
         </tbody>
        </table>
     </div>
  </div>
  
  </div>
</template>
<script>
import axios from 'axios';
export  default{
    name:'students',
    data(){
        return{
            students:[]
        }
    },
    mounted(){
    this.getStudent();
    }
    ,
     methods:{
  getStudent(){
    //  const Url=
  axios.get('http://localhost:8000/api/data').then(
    res=>{
      this.students = res.data;
      //  console.log(this.students);
      //  console.log(res)
    }
  ).catch((error)=>{
   console.log(error)
  })
  },
  deletedButton(studentId){
    if(confirm("are you sure you want to delete!.")){
      axios.delete(`http://localhost:8000/api/delete/${studentId}`)
    .then((res)=>{
    // console.log(res)
    alert(res.data.message);
    this.getStudent();
    })
    .catch((err)=>{
      console.log(err)
    })
    }

  }

     }
}

</script>