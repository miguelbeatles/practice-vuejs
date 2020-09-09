<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <principal-title :principaltitle="principaltitle"></principal-title>
      <hr>
      <add-tasks :tasks="tasks" ></add-tasks>
      <control-tasks :tasks="tasks"></control-tasks>
    </div>
  </div>
</template>

<script>
import PrincipalTitle from './TitleComponent.vue'
import AddTasks from './AddTaksComponent'
import ControlTasks from './ListTasksComponent'
export default {
  components:{
    PrincipalTitle,
    AddTasks,
    ControlTasks
  },
  data(){
    return{
      principaltitle: '-Things to do-',
      tasks:[
        {
          description: 'Learn Vuejs',
          status: false
        },
        {
          description: 'Learn Ruby',
          status: false
        },
        {
          description: 'Learn Golang',
          status: false
        }
      ]
    }
  }
}
</script>

