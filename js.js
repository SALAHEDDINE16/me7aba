var i=document.getElementById('5');
var t=document.getElementById('par');
var s=document.getElementById('1');
var t2=document.getElementById('par2');
var t3=document.getElementById('par3');
var t4=document.getElementById('par4');
var t5=document.getElementById('par5');
s.onchange= function ch(){
if(  i.value >= 50  ){
t.textContent=i.value * s.value ;
t2.textContent='DA'
if  ( t.textContent  % 10000 ==0){
    
        t4.textContent=(t.textContent / 10000); 
        t3.textContent= '-million';}
        


    
   else {
    t4.textContent=(t.textContent / 10000)|0; 
    t3.textContent= 'million';
    t5.textContent=`${((t.textContent % 10000) / 1000) | 0}-somil`; }


  
    
    
}
 else {
    t.textContent=i.value * s.value ;
    t2.textContent='DA';
    if (t.textContent % 1000 !== 0){ 
    t3.textContent=`${(t.textContent  / 1000) | 0}-somil`;
    t5.textContent=`${(t.textContent % 1000)|0}-da`;
    } else { 
        t3.textContent=`${(t.textContent  / 1000) | 0}- somil  DA`;

    }

}
}
