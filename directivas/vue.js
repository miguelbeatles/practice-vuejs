var app = new Vue({
    el:'#vm',
    data:{
        image:'https://vuejs.org/images/logo.png',
        text:'Here is the text',
        texthtml:'<em>Here is the text</em>',
        show:false,
        caso:6,
        show1:true,
        countries:['Mexico','Brazil','Spain','Germany','Japan'],
        employee:{
            name:'Miguel Mejia',
            age: '27 years old',
            nacionality:'Mexican',
            profession:'Programmer',
            company:'Grupo Estrella',
            phone:'5542251627'


        }
    },
    methods:{
        showMessage: function(){
            return this.message
        }
    }
})