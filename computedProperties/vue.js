var app = new Vue({
    el:'#vm',
    data:{
        first:0,
        second:0,
        third:0,
        fourth:0,
        suma:0
    },
    computed:{
        plus:function(){
            return this.first+this.second+this.third+this.fourth
        }
    }
 
})