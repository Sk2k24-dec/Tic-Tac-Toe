const printf =(arg)=>{
    console.log(arg);
}

let boxes = window.document.querySelectorAll(".box");
let reset_btn = window.document.querySelector("#reset_btn");
let new_game= window.document.querySelector("#new_game");
let msg = document.createElement("div");
let body = document.querySelector("body");

body.addEventListener("contextmenu",()=>{
    alert("created by : Sk2k24");
})

let turn_0 = false;

let win_pattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];

const checker = ()=>{
    for(let pattern of win_pattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                let winner = `${pos1Val}`;
                console.log("WINNER",pos1Val,"!");
                msg.innerText = "Winner : ";
                msg.append(winner);
                let disable_all = document.querySelectorAll(".box");
                for(let btn of disable_all){
                    btn.disabled = true;
                }
                reset_btn.after(new_game);
                new_game.before(msg);
                msg.style.fontSize = "2rem";
                msg.style.background = "White"
                reset_btn.style.display = "none";
                new_game.style.display ="inline";
                
            }
            
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn_0){
            box.innerText = "O";
            turn_0 = false;
        }
        else{
            box.innerText = "X";
            turn_0 = true;
        }
        box.disabled = true;
        checker();
    });
})

reset_btn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        turn_0 = false;
        box.innerText = "";
        box.disabled = false; 
    })
})

new_game.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        turn_0 = false;
        box.innerText = "";
        box.disabled = false; 
    })
    new_game.style.display = "none";
    msg.remove();
    reset_btn.style.display ="inline";
})

