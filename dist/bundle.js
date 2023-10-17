/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={491:(t,e,s)=>{const{Timer:a}=s(241);e.B=a},241:(t,e)=>{class s{constructor(t={}){const{label:e,startTimestamp:s,endTimestamp:a,currentStartTimestamp:i,pauseCount:n,accumulatedMs:r}=t,m=s>=0&&s<Date.now()?s:void 0,c=m>=0&&a>0&&a>m?a:void 0,o=i>=m&&(!c||i<c)?i:m,l=s>=0&&!(void 0!==i)&&n>0;this._label=e||"",this._startTimestamp=m,this._currentStartTimestamp=l?void 0:o,this._endTimestamp=c,this._pauseCount=n||0,this._accumulatedMs=r||0}getLabel(){return this._label}isStarted(){return this._startTimestamp>=0}isPaused(){return this.isStarted()&&void 0===this._currentStartTimestamp}isStopped(){return this._endTimestamp>0}isRunning(){return this.isStarted()&&!this.isPaused()&&!this.isStopped()}start(){return this.isStarted()&&!this.isStopped()||(this.clear(),this._startTimestamp=Date.now(),this._currentStartTimestamp=this._startTimestamp),this}pause(){return this.isPaused()||!this.isStarted()||this.isStopped()||(this._pauseCount+=1,this._accumulatedMs+=Date.now()-this._currentStartTimestamp,this._currentStartTimestamp=void 0),this}resume(){return!this.isPaused()||this.isStopped()||(this._currentStartTimestamp=Date.now()),this}stop(){return this.isStarted()?(this._endTimestamp=Date.now(),this):this}ms(){return this.isStarted()?this.isPaused()?this._accumulatedMs:(this._endTimestamp||Date.now())-this._currentStartTimestamp+this._accumulatedMs:0}pauseMs(){return this.isStarted()?(this._endTimestamp||Date.now())-this._startTimestamp-this.ms():0}_getTime(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),a=Math.floor(s/60);return{ms:t%1e3,s:e%60,m:s%60,h:a%24,d:Math.floor(a/24)}}time(){return this._getTime(this.ms())}pauseTime(){return this._getTime(this.pauseMs())}pauseCount(){return this._pauseCount}startedAt(){return this._startTimestamp}stoppedAt(){return this._endTimestamp}format(t="%label%d d, %h h, %m m, %s s, %ms ms"){const e=this.time();return t.replace("%label",this._label?`${this._label}: `:"").replace("%ms",e.ms).replace("%s",e.s).replace("%m",e.m).replace("%h",e.h).replace("%d",e.d)}clear(){return this._startTimestamp=void 0,this._currentStartTimestamp=void 0,this._endTimestamp=void 0,this._accumulatedMs=0,this._pauseCount=0,this}serialize(){return JSON.stringify({startTimestamp:this._startTimestamp,currentStartTimestamp:this._currentStartTimestamp,endTimestamp:this._endTimestamp,accumulatedMs:this._accumulatedMs,pauseCount:this._pauseCount,label:this._label})}static deserialize(t){return new s(JSON.parse(t))}static benchmark(t){if("function"!=typeof t)throw new Error("Timer.benchmark expects a function");const e=new s({label:t.name}).start();return t(),e.stop()}}e.Timer=s}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};(()=>{"use strict";function t(t){for(let e=t.length-1;e>0;e--){let s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}}s.d(a,{n:()=>r});const e=(t,e,s)=>{const a=`\n                <div class="end-game-box">\n                <div class=${t?"win-smile-img":"loose-smile-img"}></div>\n                <h1 class="end-game-text">${t?"Вы выиграли!":"Вы проиграли!"}</h1>\n                <h2 class="end-time-text">Затраченное время:</h2>\n                <div class="game-time">${s.format(Number(s.format("%m"))<10?"0%m":"%m")}${s.format(Number(s.format("%s"))<10?".0%s":".%s")}</div>\n                <button class="reset-game-button reset-game-button__bottom">Играть снова</button>\n                </div>`;e.innerHTML=e.innerHTML+a,document.getElementById("game").style.display="none",document.body.classList.add("game-over-background"),document.querySelector(".reset-game-button__bottom").addEventListener("click",(()=>{r()}))};var i=s(491);let n="";const r=()=>{document.getElementById("app").innerHTML='\n    <div class="menu-content"> \n            <div class="menu-text"> \n                Выбери сложность \n            </div>\n                <div class="number-toolbar"> \n                    <input class="difficult-item" \n                    type="radio" \n                    data-index="1" \n                    id="number1" \n                    name="numbers" \n                    value="1">\n                    <label for="number1">1</label> \n                    \n                    <input class="difficult-item" \n                    type="radio" \n                    data-index="2" \n                    id="number2" \n                    name="numbers" \n                    value="2">\n                    <label for="number2">2</label> \n                    \n                    <input class="difficult-item" \n                    type="radio" \n                    data-index="3" \n                    id="number3" \n                    name="numbers" \n                    value="3">\n                    <label for="number3">3</label> \n            </div>\n            <button class="play-game">Старт</button>\n        </div>',document.body.classList.remove("game-over-background");const s=document.querySelectorAll(".difficult-item");for(const t of s)t.addEventListener("click",(()=>{for(const t of s)t.classList.remove("difficult-Item-Select");t.classList.add("difficult-Item-Select"),n=t.dataset.index}));document.querySelector(".play-game").addEventListener("click",(()=>{n&&function(s){const a=document.getElementById("app");let n=null,m=null,c=!0,o=(e=>{let s=[];for(let t=1;t<37;t++)s.push(`card-item${t}`);switch(t(s),e){case"1":s=s.slice(0,3);break;case"2":s=s.slice(0,6);break;case"3":s=s.slice(0,9)}return s=s.concat(s),t(s),s})(s);const l=new i.B,u=` \n<div id="game">\n<header class="header">\n<div class="timer">\n<div class='timer-prm'>\n                <p class='timer-prm-text'>min</p>\n                <h2 class='current-time current-time-minute'>00</h2>\n            </div>\n        <div class='timer-prm'>\n        <p class='timer-prm-text'>sek</p>\n        <h2 class='current-time current-time-sec'>.00</h2>\n    </div>\n</div>\n<button class="start-game-button" id="startNewGameButton">Начать заново</button>\n</header>\n<section class="game-field">${o.map(((t,e)=>`<div class="card-item ${t}" data-index=${e}></div>`)).join("")}</section>\n</div>`;a.innerHTML=u;let d=document.querySelector(".current-time-minute"),p=document.querySelector(".current-time-sec");l.start();let h=setInterval((()=>{d.innerHTML=l.format(Number(l.format("%m"))<10?"0%m":"%m"),p.innerHTML=l.format(Number(l.format("%s"))<10?".0%s":".%s")}),1e3);const b=o.map(((t,e)=>`<div class="card-item" data-index=${e}></div>`)).join(""),v=setTimeout((()=>{document.querySelector(".game-field").innerHTML=b;const t=document.querySelectorAll(".card-item");for(const s of t)s.addEventListener("click",(()=>{if(c&&!s.classList.contains("checkedCard")){const i=Number(s.dataset.index);s.classList.add("flip"),setTimeout((()=>{s.classList.add(`${o[i]}`),s.classList.remove("flip")}),200),null==n?n=i:i!=n&&(m=i,c=!1),null!==n&&null!==m&&(console.log(n,m),o[n]==o[m]?setTimeout((()=>{for(const t of document.querySelectorAll(`.${o[n]}`))t.classList.add("checkedCard");n=null,m=null,c=!0,Array.from(t).every((t=>t.className.includes("checkedCard")))&&(clearInterval(h),l.stop(),e(!0,a,l))}),500):setTimeout((()=>{clearInterval(h),l.stop(),e(!1,a,l)}),500))}}))}),5e3);document.getElementById("startNewGameButton").addEventListener("click",(()=>{clearTimeout(v),r()}))}(n)}))};r()})()})();