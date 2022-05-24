const elInput = document.querySelector("#krit");
const elInputSelect = document.querySelector("#kurs");
const elInputsom = document.querySelector("#chiqar");
const elBtn = document.querySelector(".btn");

elBtn.addEventListener ('click' ,function(evt){
    evt.preventDefault()

    const inputValue = elInput.value;
    const inputSelect = elInputSelect.value;


    let s;
    if(inputSelect==0){
        s = parseInt(inputValue)*10050;
    }else if(inputSelect==1){
        s  = parseInt(inputValue)*20900;
    }else if(inputSelect==2){
        s  = parseInt(inputValue)*2992;
    }else if(inputSelect==3){
        s  = parseInt(inputValue)*3333;
    }else{
        s = 1000;
    }
    console.log(s);  
    document.querySelector("#chiqar").value = s;
})



