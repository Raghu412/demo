(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},,,,,function(e,t,a){var n={"./Agriculture Produce.png":22,"./Granite.png":23,"./Marble.png":24,"./Natural Stones.png":25};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=21},function(e,t,a){e.exports=a.p+"static/media/Agriculture Produce.20b5b8d9.png"},function(e,t,a){e.exports=a.p+"static/media/Granite.9f79b3c7.png"},function(e,t,a){e.exports=a.p+"static/media/Marble.e48c6f6c.png"},function(e,t,a){e.exports=a.p+"static/media/Natural Stones.3ce41b87.png"},function(e,t,a){e.exports=a.p+"static/media/drop.b60ad48d.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l),c=a(8),s=a(3),o=a.n(s),d=(a(16),a(40)),m=a(41),u=a(42),g=a(43),E=a(44),f=a(45),p=a(46),v=a(47),y=a(48),C=a(49),N=a(50),h=a(51),b=a(52),B=a(53),w=a(54),k=a(55),x=!1,A=0,D=0,S=null,L="Some description goes here...",M="tag1, tag2, tag3, tag4, tag5",I=function(e,t){for(var a=document.getElementsByClassName("selected"),n=0;n<a.length;n++)a[n].getElementsByClassName("border")[0].style.opacity=0,a[n].getElementsByClassName("overlay")[0].style.opacity=0,a[n].parentNode.getElementsByClassName("contents")[0].style.color="#8391A7";var r=null!=e?e.parentNode:a[t-1];r.parentNode.getElementsByClassName("contents")[0].style.color="white",r.getElementsByClassName("border")[0].style.opacity=1,r.getElementsByClassName("overlay")[0].style.opacity=.05},F=function(){return r.a.createElement("div",{id:"navbar"},[["Companies","A"],["Categories","B"],["Products","C"],["Attributes","C"],["Country Mst","C"],["Packaging Mst","C"],["Finance","C"],["Requesting for Quote","D"],["Orders","E"],["Currency","C"],["Metrics","C"],["Settings","B"],["Marketing","F"],["Listing Services","G"]].map((function(e,t){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"contents"},function(e){switch(e){case"A":return r.a.createElement(d.a,{className:"icons"});case"B":return r.a.createElement(m.a,{className:"icons"});case"C":return r.a.createElement(u.a,{className:"icons"});case"D":return r.a.createElement(g.a,{className:"icons"});case"E":return r.a.createElement(E.a,{className:"icons"});case"F":return r.a.createElement(f.a,{className:"icons"});case"G":return r.a.createElement(p.a,{className:"icons"})}}(e[1]),r.a.createElement("span",null,e[0])),r.a.createElement("div",{className:"selected",onClick:function(e){return I(e.target)}},r.a.createElement("div",{className:"border"})," ",r.a.createElement("div",{className:"overlay"})))})))},O=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("span",{id:"title"},"Categories"),r.a.createElement("div",{id:"others"},r.a.createElement("div",{id:"searchBar"},r.a.createElement(v.a,{id:"icon"})," ",r.a.createElement("input",{type:"text",placeholder:"Search..."})),r.a.createElement(y.a,{className:"items"}),r.a.createElement(C.a,{className:"items"}),r.a.createElement(N.a,{className:"items"})))},G=function(e){for(var t=window.innerWidth,a=document.getElementsByClassName("expand"),n=document.getElementsByClassName("left"),r=document.getElementsByClassName("right"),l=0;l<n.length;l++)n[l].style.color="black";for(var i=0;i<r.length;i++)r[i].style.color="black";if((A+="right"===e?-100:100)<=-300)for(var c=0;c<r.length;c++)r[c].style.color="gray";if(A>=0)for(var s=0;s<n.length;s++)n[s].style.color="gray";if(!(t>900))if(A>0)A=0;else if(A<-300)A=-300;else for(var o=0;o<a.length;o++)a[o].style.marginLeft="".concat(A,"%")},P=function(){var e=function(){return r.a.createElement("div",{className:"expand"},["Category Name","Description","Tags","#Child"].map((function(e,t){return r.a.createElement("div",{className:"item"},r.a.createElement(h.a,{className:"left",onClick:function(){return G("left")}}),r.a.createElement("span",null,e),r.a.createElement(b.a,{className:"right",onClick:function(){return G("right")}}))})))};return r.a.createElement("div",{id:"title"},r.a.createElement("div",{id:"empty"}),r.a.createElement("div",{style:{overflowX:"hidden"}},r.a.createElement(e,null)),r.a.createElement("span",{id:"active",className:"item"},"Active"))},q=function(e,t){return Object(c.a)(e.querySelectorAll(".cardContainer:not(.dragging)")).reduce((function(e,a){var n=a.getBoundingClientRect(),r=t-n.top-n.height/2;return r<0&&r>e.offset?{offset:r,element:a}:e}),{offset:Number.NEGATIVE_INFINITY}).element},T=function(e){return r.a.createElement("div",{className:"expand "},r.a.createElement("div",{className:"superContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{id:"image",src:a(21)("./".concat(e.name,".png")),draggable:!1})),r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"item"},e.name))),r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"item"},e.description)),r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"item"},e.tags)),r.a.createElement("div",{className:"container",id:"child"},r.a.createElement("span",{className:"item"},e.child)))},X=function(e,t){var a=e.firstChild.firstChild.firstChild.firstChild,n=e.firstChild.firstChild.firstChild.nextSibling.firstChild;switch(t){case"A":a.style.marginLeft="0px",n.style.opacity=1;break;case"B":a.style.marginLeft="0px",n.style.opacity=0;break;case"C":a.style.marginLeft="30px",n.style.opacity=0}},j=function(e,t){var a=e.parentNode.parentNode.parentNode.parentNode.lastChild;null!=t?(e.style.transform=t?"rotate(90deg)":"rotate(0deg)",a.style.display=t?"block":"none"):(t="rotate(90deg)"==e.style.transform,e.style.transform=t?"rotate(0deg)":"rotate(90deg)",a.style.display=t?"none":"block")},_=function(e){return r.a.createElement("div",{id:e.id,className:"cardContainer",onDragStart:function(e){return function(e){e.target.classList.add("dragging"),D=e.clientX}(e)},onDragEnd:function(e){return function(e){for(var t=document.getElementsByClassName("contains"),a=0;a<t.length;a++){0==t[a].lastChild.childNodes.length&&(X(t[a],"B"),t[a].classList.remove("contains"))}var n=e.target.parentNode;"tableContent"!==n.id?(X(n.parentNode,"A"),n.parentNode.style.borderBottom="0.3px solid #ADB7BB",n.parentNode.classList.add("contains"),X(e.target,"C")):X(e.target,"B"),e.target.setAttribute("draggable",!1),e.target.classList.remove("dragging"),D=0}(e)}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"superContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(B.a,{id:"drag",onMouseDown:function(e){return function(e){for(var t=e.target;!t.classList.contains("cardContainer");)t=t.parentNode;t.setAttribute("draggable",!0)}(e)}})),r.a.createElement("div",{className:"container"},r.a.createElement("img",{id:"drop",onClick:function(e){return j(e.target)},src:a(26),draggable:!1}))),r.a.createElement("div",{style:{overflowX:"hidden"}},r.a.createElement(T,{name:e.name,description:e.description,tags:e.tags,child:e.child})),r.a.createElement("div",{className:"superContainer",id:"lastCol"},r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"switch",id:e.id+"switch",type:"range",min:"0",max:"1",onClick:function(){return J()}})),r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{id:"option"})))),r.a.createElement("div",{id:"body"}))},J=function(){S.textContent="";for(var e=document.getElementsByClassName("switch"),t=0;t<e.length;t++){var a=1==e[t].value?"#BFDCF9":"#D3D3D3",n=1==e[t].value?"#2789E9":"#E2EDF2";e[t].style.backgroundColor=a,S.textContent+="#".concat(e[t].id,"::-webkit-slider-thumb{background-color: ").concat(n,"}")}},R=function(){var e=document.getElementById("navContainer"),t=document.getElementById("canvas"),a=document.getElementById("topbar"),n=window.innerWidth;e.style.left=n<1600?"-100%":"0",n>=1600&&(x=!1),n>=900&&(A=0,G("left"));var r=n<1600?"50%":"80%";t.style.left=r,t.style.transform="translate(-".concat(r,", 0%)"),a.style.opacity=n<1600?"1":"0"},U=function(){return Object(n.useEffect)((function(){S=document.createElement("style"),document.head.appendChild(S),J(),R(),G("left"),I(null,2);for(var e=document.getElementsByClassName("cardContainer"),t=0;t<e.length;t++){X(e[t],"B");var a=e[t].firstChild.firstChild.lastChild.firstChild;j(a,!1)}}),[]),window.addEventListener("resize",(function(){return R()})),r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"topbar"},r.a.createElement(k.a,{id:"icon",onClick:function(){document.getElementById("navContainer").style.left=x?"-100%":"0",x=!x}})),r.a.createElement("div",{id:"navContainer"},r.a.createElement(F,null)),r.a.createElement("div",{id:"canvas"},r.a.createElement("div",{id:"top"},r.a.createElement("span",null,"Categories")," ",r.a.createElement("button",null,"+ Add new category")),r.a.createElement("div",{id:"table"},r.a.createElement(O,null),r.a.createElement(P,null),r.a.createElement("div",{id:"tableContent",onDragOver:function(e){return function(e){for(var t=e.target;"tableContent"!==t.id;)t=t.parentNode;for(var a=document.getElementsByClassName("cardContainer"),n=0;n<a.length;n++)a[n].style.borderBottom="0.3px solid #ADB7BB";var r=q(t,e.clientY),l=document.querySelector(".dragging");if(e.clientX-D<50)try{null==r?t.appendChild(l):t.insertBefore(l,r)}catch(s){console.log(s)}else if(!l.classList.contains("contains"))try{var i=l==t.lastChild?t.lastChild.previousSibling:t.lastChild,c=null!=r?r.previousSibling:i;c==l&&(c=l.previousSibling),c.style.borderBottom="0.3px solid #2789E9",c.querySelector("#body").appendChild(l)}catch(s){console.log(s)}}(e)}},r.a.createElement(_,{id:o()(),name:"Granite",description:L,tags:M,child:"3"}),r.a.createElement(_,{id:o()(),name:"Natural Stones",description:L,tags:M,child:"2"}),r.a.createElement(_,{id:o()(),name:"Marble",description:L,tags:M,child:"5"}),r.a.createElement(_,{id:o()(),name:"Agriculture Produce",description:L,tags:M,child:"3"})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.74d5ac06.chunk.js.map