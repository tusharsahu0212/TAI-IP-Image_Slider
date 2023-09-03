const left3 = document.querySelector('#slide3 #left'); 
const right3 = document.querySelector('#slide3 #right'); 
const imageContainer3 = document.getElementById('imgContainer3');
let count3 = 5; 
right3.addEventListener('click',(e)=>{

    let position = (++count1%5) * 320; 
    imageContainer3.style.left = `-${position}px`;

});

left3.addEventListener('click',(e)=>{

    if(count1-1==-1){
        count1 = 5;
    }
    let position = (--count1%5) * 320; 
    imageContainer3.style.left = `-${position}px`;

});