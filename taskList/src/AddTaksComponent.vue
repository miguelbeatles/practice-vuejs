<template>
   <div class="input-group mb-3">
        <input type="text" v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Enter your new text"  aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="addTask">{{nameButton}}</button>
        </div>
    </div> 
</template>

<script>
export default {
    props:[
        'tasks'
    ],
    data(){
        return{
            newTask:'',
            nameButton:'New Task'
        }
    },
    methods: {
        addTask: function(){
            var text = this.newTask.trim();
            if(text){
                this.tasks.push({
                    description: text,
                    status: true
                });
                this.newTask='';
            }
        }
    }
}
</script>