//navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navv").style.top = "0";
  } else {
    document.getElementById("navv").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



//SLIDER DEL HERO
let i = 0;
let img = [];
let time = 4000;

img[0] = 'img/slider1.jpg';
img[1] = 'img/slider2.jpg';
img[2] = 'img/slider3.jpg';


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
'{ "html":"90%"},' + '{"css":"70%" },' +
'{ "javascript":"80%"},' + '{"python":"90%" },' +
'{ "react":"70%"},' + '{ "ruby":"75%"}]}';

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

//ALERT CONTACT
function checkForm() {
    let text = document.getElementById("form").submit();
    console.log(text);
    alert('Su solicitud ha sido enviada!')
}


