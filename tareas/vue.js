 var  data = {
        nameButton: 'Add task',
        tasks:[
            {
                description: 'Learn Vuejs',
                status: false
            },
            {
                description: 'Learn Golang',
                status: false
            },
            {
                description: 'Learn English',
                status: false
            }
        ],
        newTask: ''
    }

Vue.component('principaltitle',{
    template:'<h1> {{title}} </h1>',
    data: function(){
        return {title: 'Things to do'}
    }
})

Vue.component('tasks-control',{
    template: `
        <div class="input-group mb-3">
            <input type="text" v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Enter your new text"  aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" @click="addTask">{{nameButton}}</button>
            </div>
        </div>
        `,
    data: function(){
        return data;
    },
    methods:{
         addTask: function(){
            var text = this.newTask.trim();
            if(text){
                this.tasks.push({
                    description:text,
                    status:false
                });
                this.newTask='';
            }
        },
    }
})

Vue.component('tasks-list',{
    template: `
    <ul class="list-group">
            <li class="list-group-item list-group-item-action" v-for="(task,index) in tasks" v-bind:class="{ready: task.status}">
                {{task.description}}
                <span class="float-right">
                    <button type="button" class="btn btn-success" @click="task.status = !task.status">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg></button>
                    <button type="button" class="btn btn-danger" @click="deleteTask(index)">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm-.354 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"/>
                      </svg></button>
                </span>
            </li>          
        </ul>
    `,
    data: function(){
        return data;
    },
    methods:{
        deleteTask:function(index){
            this.tasks.splice(index,1)
        }
    }
})

new Vue(
{
    el: '#app'
})