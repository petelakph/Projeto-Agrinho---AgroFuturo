// CONTADORES ANIMADOS


function animateCounter(id, target, speed){

const counter = document.getElementById(id);

let current = 0;

const increment = Math.ceil(target / 100);

const timer = setInterval(() => {

current += increment;

if(current >= target){
current = target;
clearInterval(timer);
}

counter.textContent = current;

}, speed);

}

animateCounter("c1", 150, 20);
animateCounter("c2", 80, 25);
animateCounter("c3", 300, 10);

// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach(element => {

const top =
element.getBoundingClientRect().top;

const visible =
window.innerHeight - 120;

if(top < visible){

element.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// QUIZ

function resposta(correta){

const resultado =
document.getElementById("resultado");

if(correta){

resultado.innerHTML =
"✅ Correto! A irrigação inteligente reduz desperdícios de água.";

resultado.style.color =
"#ffffff";

}else{

resultado.innerHTML =
"❌ Não é a resposta correta. Tente novamente.";

resultado.style.color =
"#ff0000";

}

}


// PARTÍCULAS FLUTUANTES

const bg =
document.querySelector(".bg-animation");

for(let i = 0; i < 40; i++){

const particle =
document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random() * 100 + "%";

particle.style.animationDuration =
(Math.random() * 10 + 8) + "s";

particle.style.animationDelay =
Math.random() * 5 + "s";

particle.style.width =
(Math.random() * 8 + 4) + "px";

particle.style.height =
particle.style.width;

bg.appendChild(particle);

}

// BARRA DE PROGRESSO


const progressBar =
document.createElement("div");

progressBar.id =
"progress-bar";

document.body.appendChild(
progressBar
);

window.addEventListener(
"scroll",
() => {

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.scrollY / totalHeight) * 100;

progressBar.style.width =
progress + "%";

}
);

// MENU ATIVO


const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener(
"scroll",
() => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 200;

if(
window.scrollY >= sectionTop
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove(
"active-link"
);

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add(
"active-link"
);

}

});

}
);

// EFEITO DIGITAÇÃO


const title =
document.querySelector(".hero h1");

const originalText =
title.innerHTML;

title.innerHTML = "";

let index = 0;

function typeWriter(){

if(index < originalText.length){

title.innerHTML +=
originalText.charAt(index);

index++;

setTimeout(
typeWriter,
40
);

}

}

window.addEventListener(
"load",
typeWriter
);


// BOTÃO VOLTAR AO TOPO


const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(
topBtn
);

window.addEventListener(
"scroll",
() => {

if(window.scrollY > 500){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}
);

topBtn.addEventListener(
"click",
() => {

window.scrollTo({
top:0,
behavior:"smooth"
});

}
);

// EFEITO NOS CARDS

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener(
"mousemove",
e => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / 15);

const rotateY =
((centerX - x) / 15);

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

}
);

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
"translateY(0)";

}
);

});