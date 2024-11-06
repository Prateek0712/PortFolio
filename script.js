/*let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let val=progressValue.getAttribute("value")
let numVal= parseInt(val)

let progressStartValue = 0,    
progressEndValue = numVal,    
speed = 100;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);*/

setInterval(()=>{
    let skills=document.querySelectorAll(".container-row");
    console.log(skills);
    for(let i= 0;i<skills.length;i++){
        let ele=skills[i];
        let circularProgress = ele.querySelector(".circular-progress"),
        progressValue = ele.querySelector(".progress-value");
        let val=progressValue.getAttribute("value")
        let numVal= parseInt(val)
    
        let progressStartValue = 0,    
        progressEndValue = numVal,    
        speed = 10;
    
        let progress = setInterval(() => {
        progressStartValue++;
    
        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#ff004f ${progressStartValue * 3.6}deg, white 0deg)`
    
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }    
        }, speed);
    }
},4000)
/*let skills=document.querySelectorAll(".container-row");
console.log(skills);
for(let i= 0;i<skills.length;i++){
    let ele=skills[i];
    let circularProgress = ele.querySelector(".circular-progress"),
    progressValue = ele.querySelector(".progress-value");
    let val=progressValue.getAttribute("value")
    let numVal= parseInt(val)

    let progressStartValue = 0,    
    progressEndValue = numVal,    
    speed = 10;

    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#ff004f ${progressStartValue * 3.6}deg, white 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
    }, speed);
}*/
