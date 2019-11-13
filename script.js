function prevPhoto() {
    var currentPhoto = document.getElementById("slider").src;
    switch (currentPhoto) {
        case 'http://localhost:63342/SliderPhotos/Photos/1ThanosHomer.jpg':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/2ShrekWzowski.jpg';
            break;
        case 'http://localhost:63342/SliderPhotos/Photos/3KeanuSmall.jpg':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/2ShrekWzowski.jpg';
            break;
        case 'http://localhost:63342/SliderPhotos/Photos/4Mesi.png':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/3KeanuSmall.jpg';
            break;
        case 'http://localhost:63342/SliderPhotos/Photos/5SullyMike.jpg':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/4Mesi.png';
            break;
        default:
            break;
    }
}

function nextPhoto() {
    var currentPhoto = document.getElementById("slider").src;
    console.log(currentPhoto);
    switch (currentPhoto) {
        case 'http://localhost:63342/SliderPhotos/Photos/1ThanosHomer.jpg':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/2ShrekWzowski.jpg';
            break;
        case 'http://localhost:63342/SliderPhotos/Photos/2ShrekWzowski.jpg':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/3KeanuSmall.jpg';
            break;
        case 'http://localhost:63342/SliderPhotos/Photos/3KeanuSmall.jpg':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/4Mesi.png';
            break;
        case 'http://localhost:63342/SliderPhotos/Photos/4Mesi.png':
            document.getElementById('slider').src = 'http://localhost:63342/SliderPhotos/Photos/5SullyMike.jpg';
            break;
        default:
            break;

    }
}