const bouton1=document.getElementById('btn1');

const div1=document.getElementById("p1");




bouton1.addEventListener('click',onClick1);


function onClick1()
{
    let text=document.getElementById('txt1').value;
    let val=parseInt(text);
    console.log(val*50);
    let res1=document.createElement('p');
      res1.textContent=val*50;
      div1.appendChild(res1);    
   
}
/************************************************************************* */
const bouton2=document.getElementById('btn2');

const div2=document.getElementById("p2");




bouton2.addEventListener('click',onClick2);


function onClick2()
{
    let text=document.getElementById('txt2').value;
    let val=parseInt(text);
    console.log(val*50);
    let res2=document.createElement('p');
      res2.textContent=val*50;
      div2.appendChild(res2);    
   
}
/************************************************************************* */
const bouton3=document.getElementById('btn3');

const div3=document.getElementById("p3");




bouton3.addEventListener('click',onClick3);


function onClick3()
{
    let text=document.getElementById('txt3').value;
    let val=parseInt(text);
    console.log(val*50);
    let res3=document.createElement('p');
      res3.textContent=val*50;
      div3.appendChild(res3);    
   
}