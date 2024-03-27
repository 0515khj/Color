
const $container = document.getElementById('colorContainer');
const $pop = document.querySelector('.pop');
const $pinfo = document.querySelector('.info')
const $pinfo2 = document.querySelector('.info2')
const $bg = document.querySelector('.bg');

const colors = ['#FFEBEE','#FFCDD2','#EF9A9A','#E57373','#EF5350' ,'#F44336','#E53935','#D32F2F' ,'#C62828',
'#B71C1C','#FF8A80','#FF5252','#FF1744','#D50000','#FCE4EC','#F8BBD0','#F48FB1','#F06292','#EC407A','#E91E63',
'#D81B60','#C2185B','#AD1457','#880E4F','#FF80AB','#FF4081','#F50057','#C51162','#F3E5F5','#E1BEE7','#CE93D8',
'#BA68C8','#AB47BC','#9C27B0','#8E24AA','#7B1FA2','#6A1B9A','#4A148C','#EA80FC','#E040FB','#D500F9','#AA00FF',
'#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92','#B388FF',
'#7C4DFF','#651FFF','#6200EA','#E8EAF6','#C5CAE9','#9FA8DA','#7986CB','#5C6BC0','#3F51B5','#3949AB','#303F9F',
'#283593','#1A237E','#8C9EFF','#536DFE','#3D5AFE','#304FFE','#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5',
'#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1','#82B1FF','#448AFF','#2979FF','#2962FF','#E0F2F1','#B2DFDB',
'#80CBC4','#4DB6AC','#26A69A','#009688','#00897B','#00796B','#00695C','#004D40','#A7FFEB','#64FFDA','#1DE9B6',
'#00BFA5','#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17',
'#FFFF8D','#FFFF00','#FFEA00','#FFD600','#EFEBE9','#D7CCC8','#BCAAA4','#A1887F','#8D6E63','#795548','#6D4C41',
'#5D4037','#4E342E','#3E2723','#FAFAFA','#F5F5F5','#EEEEEE','#E0E0E0','#BDBDBD','#9E9E9E','#757575','#616161',
'#424242','#212121','#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F',
'#263238','#000000','#FFFFFF'
]


let show = () =>{
  $pop.classList.add('on')
  $bg.style.display='block'
}
let hide = () => {
  $pop.classList.remove('on')
  $bg.style.display='none'
}




document.addEventListener('click',e=>{
  if(e.target === $bg){
    hide();
  }
})


for(let i=0; i<colors.length; i++){
  const p = document.createElement('p');
  p.classList.add('color-box');
  p.style.backgroundColor=colors[i];

  
  
  p.addEventListener('click',e =>{
    show();
    $pop.style.backgroundColor=colors[i]
    $pinfo.textContent=`Color : ${colors[i]}`
    
    if(iscolr(colors[i])){
      $pinfo.style.color='#000';
    }else{
      $pinfo.style.color='#fff';
    }
  }) 


  $container.appendChild(p);
}

let iscolr = (hex)=>{
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ; 

}

function Clock() {
  let date = new Date();
  let hours = Time(date.getHours());
  let minutes = Time(date.getMinutes());
  
  write(hours , minutes);
  function Time(num) {
    return(num < 10 ? '0' + num : '' + num);
  }
  function write(hours , minutes) {
    let Clock = document.getElementById('Clock');
    Clock.innerHTML = hours + ':' + minutes;
  }
}
setInterval(Clock,1000)