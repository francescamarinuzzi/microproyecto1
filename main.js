//SLIDER DEL HERO
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

//JSON SKILLS

let skills = '{ "skills" : [' +
'{ "html":"90%"},' + '{"css":"60%" },' +
'{ "javascript":"70%"},' + '{"python":"80%" },' +
'{ "react":"70%"},' + '{ "ruby":"60%"}]}';

let obj = JSON.parse(skills);

document.getElementById("stats0").innerHTML =
'HTML:' + ' ' + obj.skills[0].html;

document.getElementById("stats1").innerHTML =
'CSS:' + ' ' + obj.skills[1].css;

document.getElementById("stats2").innerHTML =
'JavaScript:' + ' ' + obj.skills[2].javascript;

document.getElementById("stats3").innerHTML =
'Python:' + ' ' + obj.skills[3].python;

document.getElementById("stats4").innerHTML =
'React:' + ' ' + obj.skills[4].react;

document.getElementById("stats5").innerHTML =
'Ruby:' + ' ' + obj.skills[5].ruby;