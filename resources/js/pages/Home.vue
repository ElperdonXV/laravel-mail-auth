<template>
  <div class="container">
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col">
          <div class="card p-2">
            <h1>{{ project.name }}</h1>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Home',
    data() {
      return{
        projects : [],
      }
    },
    created() {
      this.getProjects();
    },
    methods: {
    getProjects(){
            axios.get('https://api.github.com/users/ElperdonXV/repos'
            ).then((result)=>{
                this.projects = result.data;
                console.log(result.data);
                console.log(this.projects);
            }).catch((error)=>{
                console.log(error);
            });
    }  
  }
}  
</script>

<style>

</style>