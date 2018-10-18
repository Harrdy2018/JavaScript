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
      let codeStr=this.n1+this.opt+this.n2;
      this.result=eval(codeStr);
    }
  }
});
