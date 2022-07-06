function movingLeft(){
    let square = document.querySelector('.box');
    let position = 0;
    function newPosition(){
        square.style.right = position+"%";
        position = position + 0.1;
        if (position >= 100){
            position = 0;
        }
    }
    return newPosition;
}

let moving = movingLeft()

setInterval(moving, 2)
