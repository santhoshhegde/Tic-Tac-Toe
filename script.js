let boxes = document.querySelectorAll(".box");
let isTrunO = true;

let patterns = [[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
            ]

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
        box.disabled = true;

       checkwinners();
    })
});

checkwinners = ()=>{
    for(let pattern of patterns){
            let pos0 = boxes[pattern[0]].innerText;
            let pos1 = boxes[pattern[1]].innerText;
            let pos2 = boxes[pattern[2]].innerText;

            if(pos0 != "" && pos1!="" && pos2!=''){
                if(pos0 == pos1 && pos1==pos2){
                    for(let box of boxes){
                        box.disabled = true;
                    }
                    console.log('Winner',pos1,pos2,pos0);
                }
            }
        }
    
}