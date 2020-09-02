var app = new Vue({
    el:'.vue',
    data:{
        message:'Esto esta en corto',
        src:'https://vuejs.org/images/logo.png'
    },
    methods:{
        showMessage: function(){
            return this.message
        }
    }
})