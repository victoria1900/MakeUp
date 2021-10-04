const buttons=document.querySelector(".other-buy",".other-detail");buttons.forEach(t=>{t.addEventListener("click",function(t){var e=t.clientX-t.target.offsetLeft,t=t.clientY-t.target.offsetTop;let n=document.createElement("span");n.style.left=e+"px",n.style.top=t+"px",this.appendChild(n)})});
//# sourceMappingURL=buttons.js.map
