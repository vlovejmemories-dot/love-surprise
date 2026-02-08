document.body.addEventListener("click",()=>{
document.documentElement.requestFullscreen?.();
},{once:true});

const music=document.getElementById("music");
const loader=document.getElementById("loader");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const typing=document.getElementById("typing");
const gallery=document.getElementById("gallery");
const letter=document.getElementById("letter");

setTimeout(()=>{
loader.style.display="none";
document.querySelector(".container").classList.remove("hidden");
},2000);

const imgs=["images/img1.jpeg","images/img2.jpeg","images/img3.jpeg","images/img4.png","images/img5.jpeg","images/img6.jpeg","images/img7.jpeg","images/img19.jpeg","images/img15.jpeg","images/img10.jpeg","images/img11.jpeg"];

let s=0;
setInterval(()=>{
document.getElementById("mainSlide").src=imgs[s];
s=(s+1)%imgs.length;
},2000);

noBtn.onmouseover=()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
};

const text="I Love You Forever ❤️";
let t=0;

function typeLove(){
if(t<text.length){
typing.innerHTML+=text[t++];
setTimeout(typeLove,120);
}
}

yesBtn.onclick=()=>{
typing.innerHTML="";
t=0;
typeLove();
gallery.classList.remove("hidden");
letter.classList.remove("hidden");
music.play();
emojiRain();
roseRain();
fireworks();
};

function emojiRain(){
setInterval(()=>{
drop("💖");
drop("👩‍❤️‍👨");
},200);
}

function drop(sym){
let d=document.createElement("div");
d.className="emoji";
d.innerHTML=sym;
d.style.left=Math.random()*100+"vw";
d.style.fontSize=(Math.random()*20+20)+"px";
d.style.animationDuration=(Math.random()*3+3)+"s";
document.body.appendChild(d);
setTimeout(()=>d.remove(),6000);
}

function roseRain(){
setInterval(()=>{
let r=document.createElement("div");
r.className="rose";
r.innerHTML="🌹";
r.style.left=Math.random()*100+"vw";
r.style.fontSize="28px";
r.style.animationDuration="5s";
document.body.appendChild(r);
setTimeout(()=>r.remove(),6000);
},300);
}

function fireworks(){
setInterval(()=>{
for(let i=0;i<20;i++){
let f=document.createElement("div");
f.className="fire";
f.style.left="50%";
f.style.top="50%";
f.style.setProperty("--x",(Math.random()*300-150)+"px");
f.style.setProperty("--y",(Math.random()*300-150)+"px");
document.body.appendChild(f);
setTimeout(()=>f.remove(),1000);
}
},1000);
}
