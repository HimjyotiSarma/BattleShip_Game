(()=>{"use strict";var e={37:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(354),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap);"]),i.push([e.id,'body {\n  font-family: "Orbitron", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  height: 100%;\n  max-height: 100dvh;\n  overflow-x: hidden;\n}\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 75px;\n  max-height: 15dvh;\n}\n.game_area {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  height: 80dvh;\n  width: 100%;\n}\n.box_area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 25px;\n  padding: 20px;\n}\n.placeShip_Computer_area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 25px;\n  padding: 20px;\n}\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0;\n  width: calc(85% - 20px);\n  height: calc(85% - 20px);\n}\n.box_area .board .cell_common {\n  /* height: 20px;\n  max-height: 35px;\n  width: 20px;\n  max-width: 35px; */\n  /* border: 1px solid black; */\n}\n.cell_common {\n  /* width: 30px;\n  height: 30px; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #ccc;\n  position: relative;\n}\n\n.cell_miss {\n  background-color: #f0f0f0;\n}\n\n.cell_miss::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border-radius: 50%;\n  position: absolute;\n}\n\n.cell_hit {\n  background-color: #f0f0f0;\n  pointer-events: none;\n  /* Add Cross when hover over here */\n}\n\n.cell_hit::before,\n.cell_hit::after {\n  content: "";\n  width: 20px;\n  height: 2px;\n  background-color: red;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.cell_hit::after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.ship_area {\n  background-color: rgb(62, 62, 62);\n}\n.gameStatus {\n  display: flex;\n  justify-content: center;\n  height: 5dvh;\n  align-items: flex-start;\n}\n.carrier {\n  background-color: rgb(239, 239, 72);\n}\n.battleship {\n  background-color: aquamarine;\n}\n.destroyer {\n  background-color: brown;\n}\n.submarine {\n  background-color: coral;\n}\n.patrol {\n  background-color: darkcyan;\n}\n.placeShip_Computer_area {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.axis_select {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.axis_select button {\n  background-color: #007bff; /* Primary blue color */\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  margin: 0 10px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.axis_select button:hover {\n  background-color: #0056b3; /* Darker blue for hover state */\n}\n\n.axis_select button:active {\n  background-color: #003f7f; /* Even darker blue for active state */\n}\n\n.axis_select .x_axis {\n  background-color: #28a745; /* Green for X axis button */\n}\n\n.axis_select .x_axis:hover {\n  background-color: #218838; /* Darker green for hover state */\n}\n\n.axis_select .x_axis:active {\n  background-color: #1e7e34; /* Even darker green for active state */\n}\n\n.axis_select .y_axis {\n  background-color: #dc3545; /* Red for Y axis button */\n}\n\n.axis_select .y_axis:hover {\n  background-color: #c82333; /* Darker red for hover state */\n}\n\n.axis_select .y_axis:active {\n  background-color: #bd2130; /* Even darker red for active state */\n}\n\n/* .place_ship_text {\n  text-align: center;\n  margin-top: 20px;\n} */\n.ship_Pos_Err {\n  background-color: #d95b68;\n}\n\n.place_ship_text h1 {\n  font-size: 24px;\n  color: #333; /* Dark grey for the heading */\n}\n\n.place_ship_text h1 b {\n  color: #007bff; /* Primary blue for the highlighted ship name */\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 600px) {\n  .game_area {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .board {\n    width: 100%;\n    height: 100%;\n  }\n}\n',"",{version:3,sources:["webpack://./src/style/index.css"],names:[],mappings:"AAEA;EACE,mCAAmC;EACnC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,aAAa;EACb,WAAW;AACb;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,MAAM;EACN,uBAAuB;EACvB,wBAAwB;AAC1B;AACA;EACE;;;oBAGkB;EAClB,6BAA6B;AAC/B;AACA;EACE;iBACe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA;;EAEE,WAAW;EACX,WAAW;EACX,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,8CAA8C;AAChD;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB,EAAE,uBAAuB;EAClD,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB,EAAE,gCAAgC;AAC7D;;AAEA;EACE,yBAAyB,EAAE,sCAAsC;AACnE;;AAEA;EACE,yBAAyB,EAAE,4BAA4B;AACzD;;AAEA;EACE,yBAAyB,EAAE,iCAAiC;AAC9D;;AAEA;EACE,yBAAyB,EAAE,uCAAuC;AACpE;;AAEA;EACE,yBAAyB,EAAE,0BAA0B;AACvD;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;AAC5D;;AAEA;EACE,yBAAyB,EAAE,qCAAqC;AAClE;;AAEA;;;GAGG;AACH;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW,EAAE,8BAA8B;AAC7C;;AAEA;EACE,cAAc,EAAE,+CAA+C;EAC/D,0BAA0B;AAC5B;;AAEA;EACE;IACE,qCAAqC;EACvC;EACA;IACE,WAAW;IACX,YAAY;EACd;AACF",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap");\n\nbody {\n  font-family: "Orbitron", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  height: 100%;\n  max-height: 100dvh;\n  overflow-x: hidden;\n}\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 75px;\n  max-height: 15dvh;\n}\n.game_area {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  height: 80dvh;\n  width: 100%;\n}\n.box_area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 25px;\n  padding: 20px;\n}\n.placeShip_Computer_area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 25px;\n  padding: 20px;\n}\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0;\n  width: calc(85% - 20px);\n  height: calc(85% - 20px);\n}\n.box_area .board .cell_common {\n  /* height: 20px;\n  max-height: 35px;\n  width: 20px;\n  max-width: 35px; */\n  /* border: 1px solid black; */\n}\n.cell_common {\n  /* width: 30px;\n  height: 30px; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #ccc;\n  position: relative;\n}\n\n.cell_miss {\n  background-color: #f0f0f0;\n}\n\n.cell_miss::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border-radius: 50%;\n  position: absolute;\n}\n\n.cell_hit {\n  background-color: #f0f0f0;\n  pointer-events: none;\n  /* Add Cross when hover over here */\n}\n\n.cell_hit::before,\n.cell_hit::after {\n  content: "";\n  width: 20px;\n  height: 2px;\n  background-color: red;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.cell_hit::after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.ship_area {\n  background-color: rgb(62, 62, 62);\n}\n.gameStatus {\n  display: flex;\n  justify-content: center;\n  height: 5dvh;\n  align-items: flex-start;\n}\n.carrier {\n  background-color: rgb(239, 239, 72);\n}\n.battleship {\n  background-color: aquamarine;\n}\n.destroyer {\n  background-color: brown;\n}\n.submarine {\n  background-color: coral;\n}\n.patrol {\n  background-color: darkcyan;\n}\n.placeShip_Computer_area {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.axis_select {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.axis_select button {\n  background-color: #007bff; /* Primary blue color */\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  margin: 0 10px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.axis_select button:hover {\n  background-color: #0056b3; /* Darker blue for hover state */\n}\n\n.axis_select button:active {\n  background-color: #003f7f; /* Even darker blue for active state */\n}\n\n.axis_select .x_axis {\n  background-color: #28a745; /* Green for X axis button */\n}\n\n.axis_select .x_axis:hover {\n  background-color: #218838; /* Darker green for hover state */\n}\n\n.axis_select .x_axis:active {\n  background-color: #1e7e34; /* Even darker green for active state */\n}\n\n.axis_select .y_axis {\n  background-color: #dc3545; /* Red for Y axis button */\n}\n\n.axis_select .y_axis:hover {\n  background-color: #c82333; /* Darker red for hover state */\n}\n\n.axis_select .y_axis:active {\n  background-color: #bd2130; /* Even darker red for active state */\n}\n\n/* .place_ship_text {\n  text-align: center;\n  margin-top: 20px;\n} */\n.ship_Pos_Err {\n  background-color: #d95b68;\n}\n\n.place_ship_text h1 {\n  font-size: 24px;\n  color: #333; /* Dark grey for the heading */\n}\n\n.place_ship_text h1 b {\n  color: #007bff; /* Primary blue for the highlighted ship name */\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 600px) {\n  .game_area {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .board {\n    width: 100%;\n    height: 100%;\n  }\n}\n'],sourceRoot:""}]);const l=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var A=[].concat(e[c]);r&&i[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),n&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=n):A[2]=n),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),t.push(A))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(72),a=n.n(r),o=n(825),i=n.n(o),l=n(659),s=n.n(l),c=n(56),A=n.n(c),d=n(540),u=n.n(d),p=n(113),h=n.n(p),f=n(37),m={};m.styleTagTransform=h(),m.setAttributes=A(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),a()(f.A,m);const g=f.A&&f.A.locals?f.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],A=o[c]||0,d="".concat(c," ").concat(A);o[c]=A+1;var u=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=a(p,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=r(e,a),c=0;c<o.length;c++){var A=n(o[c]);0===t[A].references&&(t[A].updater(),t.splice(A,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},984:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(701)),o=r(n(15)),i=r(n(806));t.default=class{constructor(e=new o.default){this.PlayerBoard=e}attack(e,t){t.receiveAttack(e)}isAllShipPlaced(){return this.PlayerBoard.isAllShipPlaced()}autoShipPlacement(e=[...i.default]){if(0===e.length||this.PlayerBoard.isAllShipPlaced())return;const t=(n=0)=>{if(n>=1e3)throw new Error("Max attempts reached for placing ship");const r=(0,a.default)(0,9),o=(0,a.default)(0,9),i=["X","Y"],l=i[Math.floor(Math.random()*i.length)],s=e.length>=1?e.shift():null;if(s)try{this.PlayerBoard.placeShip(s,{x:r,y:o},l)}catch(r){e.unshift(s),t(n+1)}};t(),this.autoShipPlacement(e)}placeShip(e,t,n){if(this.PlayerBoard.isAllShipPlaced())throw console.log("All ships have been placed."),document.dispatchEvent(new CustomEvent("shipsPlaced")),new Error("All Ships are Placed. Please move to the game scenario");return this.PlayerBoard.placeShip(e,t,n)}autoRecieveAttack(e,t){if(t){let n=this.getNearbyHitCoord(t);if(n){let t=e.receiveAttack(n);return"hit"==t?{attack_status:t,lastHitCoord:n,attacked_coord:n}:{attack_status:t,lastHitCoord:null,attacked_coord:n}}}let n={x:(0,a.default)(0,9),y:(0,a.default)(0,9)},r=e.receiveAttack(n);return"hit"==r?{attack_status:r,lastHitCoord:n,attacked_coord:n}:"miss"==r?{attack_status:r,lastHitCoord:null,attacked_coord:n}:void 0}getNearbyHitCoord(e){const{x:t,y:n}=e,r=[{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];for(const{dx:e,dy:a}of r){const r=t+e,o=n+a;if(r>=0&&r<10&&o>=0&&o<10&&1==this.PlayerBoard.game[r][o])return{x:r,y:o}}return null}get gameBox(){return this.PlayerBoard.gameBox}isGameStarted(){return this.PlayerBoard.isAllShipPlaced()}isGameBoxEmpty(){return this.PlayerBoard.Ships.size<1}isShipPlaced(e){return this.PlayerBoard.isShipPlaced(e)}}},15:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(236)),o=r(n(911)),i=r(n(566));t.default=class{constructor(e=Array.from({length:10},(()=>Array(10).fill(0)))){this.game=e,this.shankedShips=[],this.Ships=new Map}placeShip(e,t,n){const{startCoord:r,endCoord:l}=this.calculateCoords(t,(0,a.default)(e.toLowerCase()),n);this.validatePlacement(r,l);const s=(0,a.default)(e.toLowerCase()),c=this.generateShipPosition(r,l),A=(0,i.default)(e.toLowerCase());return c.forEach((({x:e,y:t})=>{this.game[e][t]=A})),this.Ships.set(A,new o.default(s)),c}getCurrentShipPos(e,t,n){const{startCoord:r,endCoord:o}=this.calculateCoords(t,(0,a.default)(e.toLowerCase()),n);return this.validatePlacement(r,o),this.generateShipPosition(r,o)}receiveAttack(e){const t=this.game[e.x][e.y];if("string"==typeof t&&this.Ships.has(t)){const n=this.Ships.get(t);if(n)return n.hit(),this.game[e.x][e.y]=1,n.isSunk&&this.shankedShips.push(n),"hit"}else if(1!==t&&-1!==t)return this.game[e.x][e.y]=-1,"miss"}calculateCoords(e,t,n){let r,a;return"X"===n||"x"===n?(r={x:e.x,y:e.y-Math.floor(t/2)},a={x:e.x,y:e.y+Math.ceil(t/2)-1}):(r={x:e.x-Math.floor(t/2),y:e.y},a={x:e.x+Math.ceil(t/2)-1,y:e.y}),{startCoord:r,endCoord:a}}validatePlacement(e,t){if(e.x<0||e.y<0||t.x>9||t.y>9)throw new Error("The Coordinate Placement is not possible");for(let n=e.x;n<=t.x;n++)for(let r=e.y;r<=t.y;r++)if("string"==typeof this.game[n][r])throw new Error("The Coordinate Placement overlaps with an existing ship")}generateShipPosition(e,t){const n=[];for(let r=e.x;r<=t.x;r++)for(let a=e.y;a<=t.y;a++)n.push({x:r,y:a});return n}get SunkedShips(){return this.shankedShips}get gameBox(){return this.game}isLost(){return console.log(this.shankedShips),this.shankedShips.length>=5}isAllShipPlaced(){return 5===this.Ships.size}isShipPlaced(e){const t=(0,i.default)(e.toLowerCase());return this.Ships.has(t)}}},911:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.shipLength=e,this.shipHitTimes=0,this.isSunk=!1}get length(){return this.shipLength}get hitAmt(){return this.shipHitTimes}hit(){if(this.isSunk)throw new Error("The Ship is already sunk. Hitting is not possible");this.shipHitTimes++,this.isSunk=this.isShipSunk()}isShipSunk(){return this.shipHitTimes>=this.shipLength}}},566:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>{switch(e){case"carrier":return"cr";case"battleship":return"bs";case"destroyer":return"dt";case"submarine":return"sb";case"patrol":return"pt";default:throw new Error("Unknown ship name")}}},438:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={currentAxis:"X"}},236:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t;switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"destroyer":case"submarine":t=3;break;case"patrol":t=2;break;default:throw new Error("Unknown Ship Name")}return t}},156:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(78)),o=r(n(984)),i=r(n(708)),l=r(n(438));n(242);const s=r(n(283));let c=document.querySelector(".box_area"),A=document.querySelector(".placeShip_Computer_area"),d=document.querySelectorAll(".axis_btn");console.log(d),d.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target;l.default.currentAxis=t.value||"X"}))}));let u=new o.default,p=new o.default;p.autoShipPlacement();let h=(0,a.default)(u,"Player"),f=(0,a.default)(p,"Computer");function m(){A&&(A.innerHTML="",A.append(f.renderBoard(p.gameBox)),(0,s.default)(u,p)),c&&(c.innerHTML="",c.append(h.renderBoard(u.gameBox))),console.log("Game started!")}c&&c.append(h.createBoard()),u.PlayerBoard.isAllShipPlaced()?m():((0,i.default)(u),document.addEventListener("shipsPlaced",(()=>{m()})))},9:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(806)),o=n(164);a.default,t.default=function(e,t,n,r,a){const i=document.createElement("div");return i.classList.add("cell_common",(0,o.getClassName)(n,a)),i.setAttribute("data-cell-value",n.toString()),i.setAttribute("data-x-value",e.toString()),i.setAttribute("data-y-value",t.toString()),i.addEventListener("mouseover",(e=>{e.target.style.cursor="pointer"})),i}},78:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(984)),o=r(n(9));t.default=function(e=new a.default,t="Player"){const n=e,r=()=>{let e=document.createElement("div");e.className="board",e.setAttribute("data-player-type",t);for(let r=0;r<n.gameBox.length;r++)for(let a=0;a<n.gameBox[r].length;a++)e.append((0,o.default)(r,a,n.gameBox[r][a],n,t));return e};return{createBoard:r,PlayerConstructor:n,renderBoard:e=>{let a=document.querySelector(`[data-player-type="${t}"]`);if(!a)return r();a.innerHTML="";for(let r=0;r<e.length;r++)for(let i=0;i<e[r].length;i++)a.append((0,o.default)(r,i,n.gameBox[r][i],n,t));return a}}}},283:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(164),o=r(n(78));let i=null,l="Player";t.default=function(e,t){const n=document.querySelector(".gameStatus h3"),r=document.querySelector('[data-player-type="Player"]'),s=document.querySelector('[data-player-type="Computer"]');if(!r||!s)return void console.error("Player or computer board not found");console.log(r);const c=()=>{const n=r.querySelectorAll(".cell_common"),i=s.querySelectorAll(".cell_common");n.forEach((t=>{const n=parseInt(t.getAttribute("data-x-value")),r=parseInt(t.getAttribute("data-y-value")),o=e.PlayerBoard.game[n][r];t.setAttribute("data-cell-value",o.toString()),(0,a.updateCellAppearance)(t,o,"Player")})),(0,o.default)(e,"Player").renderBoard(e.PlayerBoard.game),i.forEach((e=>{const n=parseInt(e.getAttribute("data-x-value")),r=parseInt(e.getAttribute("data-y-value")),o=t.PlayerBoard.game[n][r];e.setAttribute("data-cell-value",o.toString()),(0,a.updateCellAppearance)(e,o,"Computer")})),(0,o.default)(t,"Computer").renderBoard(t.PlayerBoard.game)},A=()=>{console.log("Last Recieved Coords : ",i);const r=t.autoRecieveAttack(e.PlayerBoard,i);console.log(null==r?void 0:r.attacked_coord),c(),e.PlayerBoard.isLost()?n.textContent="You Lost!!.. Computer Won":(i="hit"===(null==r?void 0:r.attack_status)?r.lastHitCoord:null,l="Player",d())},d=()=>{r.style.pointerEvents="none",s.style.pointerEvents="auto",s.querySelectorAll(".cell_common").forEach((r=>{const a=parseInt(r.getAttribute("data-x-value")),o=parseInt(r.getAttribute("data-y-value")),i=()=>{var s,d;"Player"===l&&(s=a,d=o,e.attack({x:s,y:d},t.PlayerBoard),c(),t.PlayerBoard.isLost()?n.textContent="You Won!!.. Computer Lost":(l="Computer",setTimeout(A,500)),r.removeEventListener("click",i))};r.addEventListener("click",i)}))};d()}},708:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(984)),o=r(n(806)),i=n(164);t.default=function(e=new a.default){let t,n,r=[...o.default],l=document.querySelector(".place_ship_text h1 b"),s=document.querySelector('[data-player-type="Player"]');s&&(t=s.querySelectorAll(".cell_common"));const c=()=>{if(0===r.length)return console.log("All ships have been placed."),null==t||t.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),document.querySelector(".gameStatus h3").textContent="Game has Started!!!",void document.dispatchEvent(new CustomEvent("shipsPlaced"));r.length>0&&(n=r.shift(),console.log("Current Ship Now: ",n)),console.log("Placing ship:",n),l&&(l.textContent=n),t?t.forEach((t=>{var a;const o=t.cloneNode(!0);null===(a=t.parentNode)||void 0===a||a.replaceChild(o,t),o.addEventListener("click",(()=>{try{console.log("CURRENT SHIP : ",n),e.isShipPlaced(n)||(0,i.handlePlacementOrAttack)(e,o,"Player",n),console.log("Is current ship placed:",e.isShipPlaced(n)),e.isShipPlaced(n)&&(console.log("Remaining ships:",r),c())}catch(t){r.includes(n)||e.isShipPlaced(n)||r.unshift(n),console.error("Error placing ship:",t)}}))})):console.error("Player board cells not found.")};c()}},806:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=["carrier","battleship","destroyer","submarine","patrol"]},701:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},164:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.handlePlacementOrAttack=void 0,t.getClassName=i,t.updateCellAppearance=l,t.highlightShipPosition=s,t.updateShipNameArea=c;const a=r(n(438)),o=document.querySelector(".place_ship_text h1 b");function i(e,t){if(1===e||"1"===e)return"cell_hit";if(-1===e||"-1"===e)return"cell_miss";if(console.log("Player Type: ",t),"string"==typeof e&&"Player"==t)switch(e){case"cr":return"carrier";case"bs":return"battleship";case"dt":return"destroyer";case"sb":return"submarine";case"pt":return"patrol";default:return"ship_area"}else if("string"==typeof e&&"Computer"==t)return"ship_display_none";return"empty_cell"}function l(e,t,n){e.className="cell_common",e.classList.add(i(t,n)),e.setAttribute("data-cell-value",t.toString())}function s(e){e.forEach((e=>{const t=document.querySelector(`[data-x-value="${e.x}"][data-y-value="${e.y}"]`);null==t||t.classList.add("ship_area")}))}function c(e,t){t&&(t.textContent=e)}t.handlePlacementOrAttack=(e,t,n,r)=>{let i=parseInt(t.getAttribute("data-x-value")),A=parseInt(t.getAttribute("data-y-value")),d=e.PlayerBoard.game[i][A],u={x:i,y:A};try{if(e.isAllShipPlaced())return console.log("All ships have been placed."),document.dispatchEvent(new CustomEvent("shipsPlaced")),void l(t,d,n);if(r){console.log(r),c(r,o);const t=e.placeShip(r,u,a.default.currentAxis);t&&s(t)}else console.log("All ships placed")}catch(e){throw t.classList.add("ship_Pos_Err"),setTimeout((function(){t.classList.remove("ship_Pos_Err")}),500),new Error(`Failed to place ship: "${r}`)}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(156)})();
//# sourceMappingURL=main.js.map