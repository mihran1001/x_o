let playerTurn = true;
let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');
let fifth = document.getElementById('5');
let sixth = document.getElementById('6');
let seventh = document.getElementById('7');
let eighth = document.getElementById('8');
let ninth = document.getElementById('9');



let arr = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];


function handleClick(){
    if(playerTurn === true){
        let x = document.getElementById(event.target.id);
        if(!x.innerHTML){
            x.innerHTML = 'X';
            playerTurn = false;
        }
    } else {
        let x = document.getElementById(event.target.id);
        if(!x.innerHTML){
            x.innerHTML = 'O';
            playerTurn = true;
        } 
    }
    checker();
}


function checker(){
    if((first.innerHTML ===  "X")  && (fifth.innerHTML  === 'X') && (ninth.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((first.innerHTML ===  "X")  && (fourth.innerHTML  === 'X') && (seventh.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((first.innerHTML ===  "X")  && (second.innerHTML  === 'X') && (third.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((second.innerHTML ===  "X")  && (fifth.innerHTML  === 'X') && (eighth.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((third.innerHTML ===  "X")  && (sixth.innerHTML  === 'X') && (ninth.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((fourth.innerHTML ===  "X")  && (fifth.innerHTML  === 'X') && (sixth.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((third.innerHTML ===  "X")  && (fifth.innerHTML  === 'X') && (seventh.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if ((seventh.innerHTML ===  "X")  && (ninth.innerHTML  === 'X') && (eighth.innerHTML === 'X')){
        alert('1st Player Wins!');
        resetButton();
    } else if((first.innerHTML ===  "O")  && (fifth.innerHTML  === 'O') && (ninth.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((first.innerHTML ===  "O")  && (fourth.innerHTML  === 'O') && (seventh.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((first.innerHTML ===  "O")  && (second.innerHTML  === 'O') && (third.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((second.innerHTML ===  "O")  && (fifth.innerHTML  === 'O') && (eighth.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((third.innerHTML ===  "O")  && (sixth.innerHTML  === 'O') && (ninth.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((fourth.innerHTML ===  "O")  && (fifth.innerHTML  === 'O') && (sixth.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((third.innerHTML ===  "O")  && (fifth.innerHTML  === 'O') && (seventh.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    } else if ((seventh.innerHTML ===  "O")  && (ninth.innerHTML  === 'O') && (eighth.innerHTML === 'O')){
        alert('2nd Player Wins!');
        resetButton();
    }
    if(!!first.innerHTML && !!second.innerHTML && !!third.innerHTML && !!fourth.innerHTML && !!fifth.innerHTML && !!sixth.innerHTML && !!seventh.innerHTML && !!eighth.innerHTML && !!ninth.innerHTML){
        alert('Draw!');
        resetButton();
    }
}

function resetButton(){
    for(let i = 0; i < arr.length; i++){
        arr[i].innerHTML = '';
    }
    playerTurn = true;
}

