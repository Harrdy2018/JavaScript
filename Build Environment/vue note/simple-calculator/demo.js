import Vue from "vue";
import "./styles.css";

var vm=new Vue({
  el: ".app",
  data: {
    n1: 0,
    n2: 0,
    result: 0,
    opt: '-'
  },
  methods: {
    calc(){
      let N1=parseInt(this.n1);
      let N2=parseInt(this.n2);
      switch(this.opt){
        case '+': this.result=N1+N2;break;
        case '-': this.result=N1-N2;break;
        case '*': this.result=N1*N2;break;
        case '/': this.result=N1/N2;break;
      }
    }
  }
});
