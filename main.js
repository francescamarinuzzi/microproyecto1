let i = 0;
let img = [];
let time = 4000;

img[0] = 'img/IMG_1290.JPG';
img[1] = 'img/IMG_1567.JPG';
img[2] = 'img/IMG_2379.JPG';


function changeImg() {
    document.slider.src = img[i];

    if(i < img.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;



