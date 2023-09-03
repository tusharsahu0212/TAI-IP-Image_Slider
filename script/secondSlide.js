const left2 = document.querySelector('#slide2 #left'); 
const right2 = document.querySelector('#slide2 #right'); 
const imageContainer2 = document.getElementById('imgContainer2');
let count2 = 5; 
left2.addEventListener('click',(e)=>{

    let position = (++count2%5) * 145; 
    imageContainer2.style.top = `-${position}px`;

});

right2.addEventListener('click',(e)=>{

    if(count2-1==-1){
        count2 = 5;
    }
    let position = (--count2%5) * 145; 
    imageContainer2.style.top = `-${position}px`;

});
