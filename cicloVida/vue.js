var app = new Vue({
    el:'.vm',
    data:{
        message:'This is the mesagge'
    },
    beforeCreate : function(){
        console.log('llamando beforeCreate')
    },
    created:function(){
        console.log('llamando created')
    },
    beforeMount : function(){
        console.log('llamando beforemount')
    },
    mounted:function(){
        console.log('llamando mounted')
    },
    beforeUpdate : function(){
        console.log('llamando beforeUpdate')
    },
    updated:function(){
        console.log('llamando updated')
    },
    beforeDestroy : function(){
        console.log('llamando beforeDestroy')
    },
    destroyed:function(){
        console.log('llamando destroyed')
    },
    methods:{
        destroy:function(){
            this.$destroy();
        }
    }
})