var i  =-1;
function change(button){
    const current = document.getElementById(button);
    if(i == -1){
        current.innerHTML = "circle";
        win(i);
        i *= -1;
    }
    else{
        current.innerHTML = "star";
        win(i);
        i *= -1;
    }
}

function win(turn){
    const pos0 = document.getElementById("0").innerHTML;
    const pos1 = document.getElementById("1").innerHTML;
    const pos2 = document.getElementById("2").innerHTML;
    const pos3 = document.getElementById("3").innerHTML;
    const pos4 = document.getElementById("4").innerHTML;
    const pos5 = document.getElementById("5").innerHTML;
    const pos6 = document.getElementById("6").innerHTML;
    const pos7 = document.getElementById("7").innerHTML;
    const pos8 = document.getElementById("8").innerHTML;
    if((pos0 != "edit") && (pos0 === pos1) && (pos1 === pos2)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            // console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            // console.log("circle1");
        }
    }

    else if((pos3 != "edit") && (pos3 === pos4) && (pos4 === pos5)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }

    else if((pos6 != "edit") && (pos6 === pos7) && (pos7 === pos8)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }

    else if((pos0 != "edit") && (pos0 === pos3) && (pos3 === pos6)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }

    else if((pos1 != "edit") && (pos1 === pos4) && (pos4 === pos7)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }

    else if((pos2 != "edit") && (pos2 === pos5) && (pos5 === pos8)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }

    else if((pos0 != "edit") && (pos0 === pos4) && (pos4 === pos8)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }

    else if((pos2 != "edit") && (pos2 === pos4) && (pos4 === pos6)){
        if(turn == -1){
            document.getElementById("winningMessage").innerHTML = "CIRCLE WIN";
            console.log("circle");
        }
        else{
            document.getElementById("winningMessage").innerHTML = "STAR WIN"
            console.log("circle1");
        }
    }


}
