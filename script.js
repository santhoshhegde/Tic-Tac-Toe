let boxes = document.querySelectorAll(".box");
let isTrunO = true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(isTrunO){
            box.innerText = "O";
            isTrunO = false;
        }
        else{
            box.innerText = "X";
            isTrunO = true;
        }
    })
});