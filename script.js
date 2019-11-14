function prevPhoto() {
    var currentPhoto = document.getElementById("slider").src;
    console.log(currentPhoto);
    switch (currentPhoto) {
        case 'Photos/2ShrekWzowski.jpg':
            document.getElementById('slider').src = 'Photos/1ThanosHomer.jpg';
            break;
        case 'Photos/3KeanuSmall.jpg':
            document.getElementById('slider').src = 'Photos/2ShrekWzowski.jpg';
            break;
        case 'Photos/4Mesi.png':
            document.getElementById('slider').src = 'Photos/3KeanuSmall.jpg';
            break;
        case 'Photos/5SullyMike.jpg':
            document.getElementById('slider').src = 'Photos/4Mesi.png';
            break;
        default:
            break;
    }
}

function nextPhoto() {
    var currentPhoto = document.getElementById("slider").src;
    console.log(currentPhoto);
    switch (currentPhoto) {
        case 'Photos/1ThanosHomer.jpg':
            document.getElementById('slider').src = 'Photos/2ShrekWzowski.jpg';
            break;
        case 'Photos/2ShrekWzowski.jpg':
            document.getElementById('slider').src = 'Photos/3KeanuSmall.jpg';
            break;
        case 'Photos/3KeanuSmall.jpg':
            document.getElementById('slider').src = 'Photos/4Mesi.png';
            break;
        case 'Photos/4Mesi.png':
            document.getElementById('slider').src = 'Photos/5SullyMike.jpg';
            break;
        default:
            break;

    }
}