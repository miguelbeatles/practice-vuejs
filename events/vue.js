var app = new Vue({
    el:'#events',
    data:{
       count:0,
       count1:0,
       count2:0,
       count3:0,
       x:0,
       y:0
    },
    methods:{
        addOne: function(){
            this.count+=1
        },
        substractOne: function(){
            this.count-=1
        },
        alert:function(message){
            alert(message);
        },
        showCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        add: function(num){
            this.count1+=num;
        },
        addKeyboard: function(num){
            this.count2+=num
        },
        addKeyboardShort: function(num){
            this.count3+=num
        }
    }

})