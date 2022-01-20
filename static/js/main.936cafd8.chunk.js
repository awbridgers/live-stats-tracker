(this["webpackJsonplive-stats-tracker"]=this["webpackJsonplive-stats-tracker"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(4),r=n.n(a),o=(n(24),n(14)),d=n(6),u=n(3),c=n(15),h=function(t){var e=t.split(" "),n=e.shift(),i=(e.pop(),e.join(" ")),s=l.find((function(t){return t.name.toLowerCase().includes(i.toLowerCase())&&t.number.toFixed(0)===n}));if(!s)throw Error("No player found");return s},m=function t(e){var n=this;Object(c.a)(this,t),this.players=void 0,this.time=void 0,this.pointsFor=void 0,this.pointsAgainst=void 0,this.dRebFor=void 0,this.dRebAgainst=void 0,this.oRebFor=void 0,this.oRebAgainst=void 0,this.madeTwosFor=void 0,this.missedTwosFor=void 0,this.madeTwosAgainst=void 0,this.missedTwosAgainst=void 0,this.madeThreesFor=void 0,this.madeThreesAgainst=void 0,this.missedThreesFor=void 0,this.missedThreesAgainst=void 0,this.turnoversFor=void 0,this.turnoversAgainst=void 0,this.assistsFor=void 0,this.assistsAgainst=void 0,this.FTAfor=void 0,this.FTAagainst=void 0,this.paintPointsFor=void 0,this.paintPointsAgainst=void 0,this.pointsFromTOFor=void 0,this.pointsFromTOAgainst=void 0,this.secondChanceFor=void 0,this.secondChanceAgainst=void 0,this.addTime=function(t){n.time.push(function(t){var e=t.split(":"),n=Object(u.a)(e,2),i=60*+n[0],s=+n[1];if(isNaN(i)||isNaN(s))throw Error("There was an error reading the time");return i+s}(t))},this.addBasket=function(t,e,i,s,a,r){"ft"===r?t?(n.FTAfor+=1,n.pointsFor+=e?1:0):(n.FTAagainst+=1,n.pointsAgainst+=e?1:0):"2"===r?t?e?(n.pointsFor+=2,n.madeTwosFor+=1,n.paintPointsFor+=i?2:0,n.pointsFromTOFor+=a?2:0,n.secondChanceFor+=s?2:0):n.missedTwosFor+=1:e?(n.pointsAgainst+=2,n.madeTwosAgainst+=1,n.paintPointsAgainst+=i?2:0,n.pointsFromTOAgainst+=a?2:0,n.secondChanceAgainst+=s?2:0):n.missedTwosAgainst+=1:"3"===r&&(t?e?(n.pointsFor+=3,n.madeThreesFor+=1,n.secondChanceFor+=s?3:0,n.pointsFromTOFor+=a?3:0):n.missedThreesFor+=1:e?(n.pointsAgainst+=3,n.madeThreesAgainst+=1,n.secondChanceAgainst+=s?3:0,n.pointsFromTOAgainst+=a?3:0):n.missedThreesAgainst+=1)},this.addRebound=function(t,e){"o"===e?n[t?"oRebFor":"oRebAgainst"]+=1:n[t?"dRebFor":"dRebAgainst"]+=1},this.addTurnover=function(t){n[t?"turnoversFor":"turnoversAgainst"]+=1},this.addAssist=function(t){n[t?"assistsFor":"assistsAgainst"]+=1},this.report=function(){console.log(n)},this.players=Object(d.a)(e).sort((function(t,e){return t.name>e.name?1:t.name<e.name?-1:0})),this.pointsFor=0,this.pointsAgainst=0,this.dRebFor=0,this.dRebAgainst=0,this.oRebFor=0,this.oRebAgainst=0,this.madeTwosFor=0,this.missedTwosFor=0,this.madeTwosAgainst=0,this.missedTwosAgainst=0,this.madeThreesFor=0,this.madeThreesAgainst=0,this.missedThreesFor=0,this.missedThreesAgainst=0,this.paintPointsFor=0,this.paintPointsAgainst=0,this.secondChanceFor=0,this.secondChanceAgainst=0,this.pointsFromTOFor=0,this.pointsFromTOAgainst=0,this.turnoversFor=0,this.turnoversAgainst=0,this.assistsFor=0,this.assistsAgainst=0,this.FTAfor=0,this.FTAagainst=0,this.time=[]},l=[{name:"Jake LaRavia",number:0},{name:"Isaiah Mucius",number:1},{name:"Cameron Hildreth",number:2},{name:"Daivien Williamson",number:4},{name:"Carter Whitt",number:11},{name:"Dallas Walton",number:13},{name:"Khadim Sy",number:20},{name:"Lucas Taylor",number:23},{name:"Robert McCray",number:25},{name:"Alondes Williams",number:31},{name:"Matthew Marsh",number:33},{name:"RJ Kennah",number:40},{name:"Luc Robinson",number:44},{name:"Anthony Mathis",number:45},{name:"Kevin Dunn",number:51},{name:"Grant van Beveren",number:52},{name:"Miles Lester",number:55},{name:"Tariq Ingraham",number:10}],f=l.map((function(t){return function(t){var e=t.name.split(" "),n=e.shift(),i=e.join(" ");return"".concat(t.number," ").concat(i," ").concat(n)}(t)})),p=n(16),g=/(Official Basketball Play by Play)(.|\n)*?(Officials: .+)/gi,F=/(Game Time)(.+)(Score Diff)(.+)/gi,A=/\d+:\d+/,b=function(t){var e=function(t){var e=t.replace(g,"").replace(F,"").split(/\n/),n=e.splice(0,2),i=[];return e.filter((function(t){return""!==t})).forEach((function(t){A.test(t)||"OVERTIME"===t?i.push(t):i[i.length-1]+=" ".concat(t)})),{starterData:n,playData:i}}(t),n=e.starterData,i=e.playData,s=new m(function(t){var e=f.join(" "),n=t.map((function(t){return t.match(/\d+(\s[a-zA-Z]+)+/g)})).filter((function(t){var n=!0;return null===t||void 0===t||t.forEach((function(t){e.includes(t)||(n=!1)})),n})),i=Object(u.a)(n,1)[0];if(!i)throw Error("There was an error loading the starters");return i.map((function(t){return h(t)}))}(n));s.addTime("20:00");var a=Object(d.a)(s.players),r=[s],o=0;return i.forEach((function(t){var e=function(t){if("OVERTIME"===t)return{time:"00:00",player:null,details:"OVERTIME"};var e=t.split(" "),n=Object(p.a)(e),i=n[0],s=n.slice(1).join(" ").match(/\d+(\s[A-Z]+)+/)||[null],a=Object(u.a)(s,1)[0],r=a?t.split(a).pop():t.split(i).pop();if(!r)throw Error("Play details not found");return{time:i,player:a,details:r}}(t),n=e.time,i=e.player,s=e.details,d=!(!i||!f.find((function(t){return t.toUpperCase().includes(i)}))),c=s.includes("made"),l=s.includes("in the paint"),g=s.includes("second chance"),F=s.includes("from turnover");if(i){if(s.includes("substitution")){if(d){if(s.includes("substitution out")){var A=a.findIndex((function(t){return t.name===h(i).name}));if(-1===A)throw Error("Error with substitution at ".concat(n));a.splice(A,1)}else if(s.includes("substitution in")){var b=h(i);a.push(b)}if(5===a.length){var T="20:00"===n?"00:00":n,v=r.findIndex((function(t){return function(t,e){var n=!0;return t.forEach((function(t){e.find((function(e){return e.name===t.name}))||(n=!1)})),n}(t.players,a)}));if(-1===v){var O=new m(a);O.addTime(n),r.push(O),r[o].addTime(T),o=r.length-1}else r[o].addTime(T),o=v,r[v].addTime(n)}}}else if(s.includes("2pt FG"))r[o].addBasket(d,c,l,g,F,"2");else if(s.includes("3pt FG"))r[o].addBasket(d,c,!1,g,F,"3");else if(s.includes("free throw")){var w=s.includes("made");r[o].addBasket(d,w,!1,g,F,"ft")}else if(s.includes("assist"))r[o].addAssist(d);else if(s.includes("turnover"))r[o].addTurnover(d);else if(s.includes("rebound")){var x=s.includes("defensive")?"d":"o";r[o].addRebound(d,x)}}else"OVERTIME"===s&&(r[o].addTime(n),r[o].addTime("05:00"))})),r[o].addTime("00:00"),r},T=(n(25),n(19)),v=[{title:"Lineup",dataIndex:"players",width:200},{title:"Time",dataIndex:"time",width:50},{title:"Pts For",dataIndex:"pointsFor"},{title:"Pts Ag",dataIndex:"pointsAgainst"},{title:"DReb For",dataIndex:"dRebFor"},{title:"DReb Ag",dataIndex:"dRebAgainst"},{title:"OReb For",dataIndex:"oRebFor"},{title:"OReb Ag",dataIndex:"oRebAgainst"},{title:"FTA For",dataIndex:"FTAfor"},{title:"FTA Ag",dataIndex:"FTAagainst"},{title:"2PM For",dataIndex:"madeTwosFor"},{title:"2PA For",dataIndex:"attemptedTwosFor"},{title:"2PM Ag",dataIndex:"madeTwosAgainst"},{title:"2PA Ag",dataIndex:"attemptedTwosAgainst"},{title:"3PM For",dataIndex:"madeThreesFor"},{title:"3PA For",dataIndex:"attemptedThreesFor"},{title:"3PM Ag",dataIndex:"madeThreesAgainst"},{title:"3PA Ag",dataIndex:"attemptedThreesAgainst"},{title:"AST For",dataIndex:"assistsFor"},{title:"AST Ag",dataIndex:"assistsAgainst"},{title:"TO For",dataIndex:"turnoversFor"},{title:"TO Ag",dataIndex:"turnoversAgainst"},{title:"Paint For",dataIndex:"paintPointsFor"},{title:"Paint Ag",dataIndex:"paintPointsAgainst"},{title:"2nd For",dataIndex:"secondChanceFor"},{title:"2nd Ag",dataIndex:"secondChanceAgainst"}],O=function(t){for(var e=0,n=0;n<t.length;n+=2)e+=t[n]-t[n+1];return e},w=function(t){var e=new m([{name:"Total",number:0}]);return Object.keys(e).forEach((function(n){"number"===typeof e[n]&&(e[n]=t.reduce((function(t,e){return t+e[n]}),0))})),t.forEach((function(t){return t.time.forEach((function(t){return e.time.push(t)}))})),e},x=n(2);var j=function(){var t=Object(i.useState)(""),e=Object(u.a)(t,2),n=e[0],s=e[1],a=Object(i.useState)([]),r=Object(u.a)(a,2),c=r[0],h=r[1],m=Object(i.useState)(!1),l=Object(u.a)(m,2),f=l[0],p=l[1];return f?Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",onClick:function(){return p(!1)},children:"Back"}),Object(x.jsx)(T.a,{className:"resultsTable",scroll:{x:!0},columns:v,data:[].concat(Object(d.a)(c),[w(c)]).map((function(t,e){return Object(o.a)(Object(o.a)({},t),{},{players:t.players.map((function(t){return t.name})).join("-"),time:O(t.time),attemptedTwosFor:t.madeTwosFor+t.missedTwosFor,attemptedTwosAgainst:t.madeTwosAgainst+t.missedTwosAgainst,attemptedThreesFor:t.madeThreesFor+t.missedThreesFor,attemptedThreesAgainst:t.madeThreesAgainst+t.missedThreesAgainst,key:e})}))})]}):Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("textarea",{value:n,onChange:function(t){return s(t.target.value)},className:"textBox",placeholder:"Enter the play by play data here, starting with both teams starters."}),Object(x.jsx)("button",{className:"submit",type:"button",onClick:function(){var t=b(n);console.log(t),h(t),p(!0)},children:"Submit"}),Object(x.jsx)("div",{style:{color:"white"}})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),a(t),r(t)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(j,{})}),document.getElementById("root")),I()}},[[29,1,2]]]);
//# sourceMappingURL=main.936cafd8.chunk.js.map