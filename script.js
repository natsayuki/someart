Vue.use(VueMaterial.default);
Vue.config.productionTip = false;

let data = {
  range: 80,
}

let methods = {

}

let computed = {

}


const vm = new Vue({
  el: '#app',
  data: data,
  methods: methods,
  computed: computed
});

function start(){
  let t = 0;
  let inc = 1;
  setInterval(function(){
    for(let x = 1; x < data.range+1; x++){
      for(let y = 1; y < data.range+1; y++){
        document.querySelector(`#x${x}y${y}`).style.backgroundColor = `RGBA(${x*t%255}, ${y*t%255}, ${x*y*t%255}, 1)`;
      }
    }
    t += inc;
    if(t>25) inc = -1;
    else if(t<1) inc = 1;
  },100);
}
