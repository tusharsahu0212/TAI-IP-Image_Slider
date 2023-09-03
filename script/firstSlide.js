
const left1 = document.querySelector('#slide1 #left'); 
const right1 = document.querySelector('#slide1 #right'); 
const imageContainer1 = document.getElementById('imgContainer1');
let count1 = 5; 
left1.addEventListener('click',(e)=>{

    let position = (++count1%5) * 145; 
    imageContainer1.style.top = `-${position}px`;

});

right1.addEventListener('click',(e)=>{

    if(count1-1==-1){
        count1 = 5;
    }
    let position = (--count1%5) * 145; 
    imageContainer1.style.top = `-${position}px`;

});