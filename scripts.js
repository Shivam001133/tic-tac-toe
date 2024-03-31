let user_val = [[null, null, null],[ null, null, null],[ null, null, null]];
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const table = document.querySelector('.myTable');
let click_count = 1;
let win = false;


function win_function(arr){
    let result = [];
    for (let i=0; i<(arr.length - 1); i++){
        for (let j=0; j<(arr[i].length -1); j++){
            console.log(` value of i ${i} and value of j ${j}`);
            if ((i === j) && ((arr[i][j] !== null) || (arr[i+1][j+1] !== null))){
                arr[i][j] === arr[i+1][j+1];
                result.push(true);
                console.log("******* result", result);
            }
            if (result[0] === result[1]){
                alert('You win');
            }
            console.log(arr[i][j]);
        }
    }
}


let btn = document.querySelectorAll('.btn');
btn.forEach(function(event){
    event.addEventListener('click', function(){
    if (click_count % 2 === 0) {
        var cellIndex = this.cellIndex;
        var rowIndex = this.parentNode.rowIndex;
        if ((user_val[cellIndex][rowIndex] === null)){
            this.textContent = 'X';
            user_val[cellIndex][rowIndex] = false;
            click_count++;
        }
    }
    else {
        var cellIndex = this.cellIndex;
        var rowIndex = this.parentNode.rowIndex;
        if (user_val[cellIndex][rowIndex] === null){
            this.textContent = 'O';
            user_val[cellIndex][rowIndex] = true;
            click_count++;
        }
    }
    win_function(user_val);
});
});

// win(user_val);
