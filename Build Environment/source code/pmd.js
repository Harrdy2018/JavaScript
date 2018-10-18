//使用箭头函数
let vm=new Vue({
  el: ".app",
  data: {
    msg: "you are a good girl ~~~~",
    intervalId: null
  },
  methods: {
    run(){
      //如果已经开了一个定时器，那么再点击run的时候就不能再开定时器了
      if(this.intervalId != null) return;
      this.intervalId=setInterval(()=>{
        //console.log(this);//this指的是vue实例,这与一般的匿名函数不一样
        let str=this.msg;
        let start=str.substring(0,1);
        let end=str.substring(1);
        this.msg=end+start;
      },400);   
      console.log(this.intervalId);  
    },
    stop(){
      clearInterval(this.intervalId);
      //点击stop按钮，清除定时器以后，为了使再一次点击run的时候能够运行，必须置为null
      this.intervalId=null;
    }
  }
})

//使用一般匿名函数
let vm=new Vue({
  el: ".app",
  data: {
    msg: "you are a good girl ~~~~",
    intervalId: null
  },
  methods: {
    run(){
      if(this.intervalId != null) return;
      let _this=this;
      this.intervalId=setInterval(function(){
        let str=_this.msg;
        let start=str.substring(0,1);
        let end=str.substring(1);
        _this.msg=end+start;
      },400);   
      console.log(_this.intervalId);  
    },
    stop(){
      clearInterval(this.intervalId);
      this.intervalId=null;
    }
  }
});
