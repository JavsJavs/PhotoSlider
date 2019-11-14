var currentPhoto = 1;

function movePhoto(dir) {
    if (dir === 0 && currentPhoto != 1)
            currentPhoto -= 1;
    else if (dir === 1 && currentPhoto != 5)
            currentPhoto += 1;
    document.getElementById('slider').src = 'Photos/photo' + currentPhoto + '.jpg';
    check();
}

function check() {
    if(currentPhoto === 1) {
        changeButton(0, 0);
    }else if(currentPhoto === 5){
        changeButton(1, 0);
    }else{
        changeButton(0, 1);
        changeButton(1, 1);
    }
}

function changeButton(whichButton, blockUnblock) {
    if(blockUnblock === 0) {
        if (whichButton === 0) {
            document.getElementById('prevButton').style.color = "lightgray";
            document.getElementById('prevButton').disabled = true;
        } else if (whichButton === 1) {
            document.getElementById('nextButton').style.color = "lightgray";
            document.getElementById('nextButton').disabled = true;
        }
    }else if(blockUnblock === 1){
        if (whichButton === 0) {
            document.getElementById('prevButton').style.color = "black";
            document.getElementById('prevButton').disabled = false;
        } else if (whichButton === 1) {
            document.getElementById('nextButton').style.color = "black";
            document.getElementById('nextButton').disabled = false;
        }
    }
}