(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{116:function(e,a,t){},120:function(e,a,t){},147:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(34),s=t.n(c),r=(t(116),t(99)),i=t(10),l=(t(117),t(118),t(120),t(9)),o=t(102),b=t(18),j=t(97),d=t.n(j),h=t(1),m=function(){var e=Object(n.useState)(new Array(l.j.length).fill("socialicons")),a=Object(b.a)(e,2),t=a[0],c=a[1],s=function(e){var a=Object(o.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",c(a)):"leave"===e.event?(a[e.icon.id]="socialicons",c(a)):void 0};return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0",children:[Object(h.jsx)("div",{id:"stars"}),Object(h.jsxs)("div",{className:"container container-fluid text-center ",children:[Object(h.jsxs)(d.a,{className:"lead",cursor:{show:!1},children:[Object(h.jsxs)("h1",{className:"display-1",children:["Hello, I'm ",Object(h.jsx)("span",{style:{color:"black"},children:l.a+" "+l.c+" "+l.b})]}),Object(h.jsx)("span",{children:l.f})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"p-5",children:l.j.map((function(e){return Object(h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1]),children:Object(h.jsx)("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return s({icon:e,event:"enter"})},onMouseOut:function(){return s({icon:e,event:"leave"})}})},e.id)}))}),Object(h.jsx)("a",{href:"https://tryhackme.com/p/Candidate14",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:"https://tryhackme-badges.s3.amazonaws.com/Candidate14.png",alt:"TryHackMe"})})]}),Object(h.jsx)("a",{style:{marginTop:"4em"},className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me",children:"More about me"})]})]})})},u=t.p+"static/media/resume.4b7c0506.pdf",f=function(){var e=Object(n.useState)(u),a=Object(b.a)(e,1)[0];return Object(h.jsx)("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",children:Object(h.jsx)("div",{className:"container container-fluid p-5",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-lg-12",children:[Object(h.jsx)("h1",{className:"display-4 mb-5 text-center",children:l.e}),l.d.split("\n").map((function(e,a){return Object(h.jsx)("p",{className:"lead text-center",children:e})})),a&&Object(h.jsxs)("p",{className:"lead text-center",children:[Object(h.jsx)("a",{className:"btn btn-outline-dark btn-lg",href:u,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV",children:"Resume"}),Object(h.jsx)("span",{children:"    "}),Object(h.jsx)("a",{className:"btn btn-outline-dark btn-lg",href:l.k,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV",children:"Blogs"})]})]}),Object(h.jsx)("div",{})]})})})},O=t(59),p=t.n(O),x=function(e){var a=e.value,t=Object(n.useState)([]),c=Object(b.a)(t,2),s=c[0],r=c[1],i=Object(n.useCallback)((function(e){p.a.get(a).then((function(e){return r(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){i()}),[i]);var l=[],o=0;for(var j in s)l.push(j),o+=s[j];return Object(h.jsxs)("div",{className:"pb-3",children:["Languages:"," ",l.map((function(e){return Object(h.jsxs)("p",{className:"badge badge-light card-link",children:[e,": ",Math.trunc(s[e]/o*1e3)/10," %"]},e)}))]})},g=function(e){var a=e.value,t=Object(n.useState)("0 mints"),c=Object(b.a)(t,2),s=c[0],r=c[1],i=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),c=Math.trunc(n/1e3/60/60);if(c<24)return r("".concat(c.toString()," hours ago"));var s=t.getDate(),i=t.getMonth(),l=t.getFullYear();return r("on ".concat(s," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(l))}),[a.pushed_at]);Object(n.useEffect)((function(){i()}),[i]);var l=a.name,o=a.description,j=a.svn_url,d=a.stargazers_count,m=a.languages_url;return Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h5",{className:"card-title",children:[l," "]}),Object(h.jsxs)("p",{className:"card-text",children:[o," "]}),Object(h.jsxs)("a",{href:"".concat(j,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3",children:[Object(h.jsx)("i",{className:"fab fa-github"})," Clone Project"]}),Object(h.jsxs)("a",{href:j,target:" _blank",className:"btn btn-outline-secondary",children:[Object(h.jsx)("i",{className:"fab fa-github"})," Repo"]}),Object(h.jsx)("hr",{}),Object(h.jsx)(x,{value:m}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsxs)("span",{className:"text-dark card-link mr-4",children:[Object(h.jsx)("i",{className:"fab fa-github"})," Stars"," ",Object(h.jsx)("span",{className:"badge badge-dark",children:d})]}),Object(h.jsxs)("small",{className:"text-muted",children:["Updated ",s]})]})]})})})},v=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],c=a[1],s=Object(n.useCallback)((function(e){p.a.get(l.g+l.i+l.h).then((function(e){return c(e.data.slice(0,l.n))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){s()}),[s]),Object(h.jsx)("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0",children:t.length&&Object(h.jsxs)("div",{className:"container container-fluid p-5",children:[Object(h.jsx)("h1",{className:"display-4 pb-5",children:l.m}),Object(h.jsx)("div",{className:"row",children:t.map((function(e){return Object(h.jsx)(g,{id:e.id,value:e},e.id)}))})]})})},N=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(b.a)(e,1)[0];return Object(h.jsxs)("footer",{style:a,className:"mt-auto py-3 text-center",children:[Object(h.jsx)("i",{className:"fas fa-code"})," with ",Object(h.jsx)("i",{className:"fas fa-heart"})," by"," ",Object(h.jsx)("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/fato07","aria-label":"My GitHub",children:"Fathin Dosunmu"})," ","using ",Object(h.jsx)("i",{className:"fab fa-react"}),Object(h.jsx)("p",{})]})},k=t.p+"static/media/Huawei_Recommendation.d781dbb5.pdf",w=function(e){var a=Object(n.useState)(!0),t=Object(b.a)(a,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==c&&s(e)}))}),[c]),Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(c?"bg-transparent":"bg-gradient"," "),children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/home/#home",children:"<".concat(l.a," />")}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:[Object(h.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link lead",href:"/home/#aboutme",children:Object(h.jsx)("b",{children:"About"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link lead",href:u,target:"_blank",rel:"noreferrer noopener",children:Object(h.jsx)("b",{children:"Resume"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link lead",href:"/home/#projects",children:"Projects"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link lead",href:"/home/#portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link lead",href:k,target:"_blank",rel:"noreferrer noopener",children:"Reference"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link lead",href:l.k,target:"_blank",rel:"noreferrer noopener",children:"Blogs"})})]}),Object(h.jsx)("span",{children:Object(h.jsxs)("a",{className:"btn btn-dark btn-lg bgstyleButton",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/fathin",role:"button","aria-label":"Buy Me Coffee",children:["Buy Me Coffee ",Object(h.jsx)("span",{role:"img","aria-label":"Emoji",children:"\u2615\ud83d\ude01 "})]})})]})]})},y=t(162),C=t(160),S=t(161),M=t.p+"static/media/Fsecrets.d8a112e5.png",_=t.p+"static/media/WhatsApp.8a94faf2.png",D=function(){return Object(h.jsx)("div",{id:"portfolio",className:"jumbotron jumbotron-fluid m-0",children:Object(h.jsxs)("div",{className:"container container-fluid p-5",children:[Object(h.jsx)("h1",{className:"display-4 pb-5",children:l.l}),Object(h.jsxs)(y.a.Group,{children:[Object(h.jsxs)(y.a,{fluid:!0,children:[Object(h.jsx)(C.a,{src:M,as:"a",size:"large",href:"https://fundamentalsecrets.web.app/",target:"_blank",wrapped:!0,ui:!1}),Object(h.jsxs)(y.a.Content,{children:[Object(h.jsx)(y.a.Header,{children:"Fundamental Secrets"}),Object(h.jsx)(y.a.Description,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(S.a.Item,{children:[Object(h.jsx)(S.a.Icon,{name:"marker"}),Object(h.jsxs)(S.a.Content,{children:[Object(h.jsx)(S.a.Header,{children:"About"}),Object(h.jsx)(S.a.Description,{children:"A Cryptocurrency learning platform. Inbuilt PayPal and Stripe CheckOut pages, notification System, comment section, customer portal and more..."})]})]}),Object(h.jsxs)(S.a.Item,{children:[Object(h.jsx)(S.a.Icon,{name:"marker"}),Object(h.jsxs)(S.a.Content,{children:[Object(h.jsx)(S.a.Header,{children:"Challenges"}),Object(h.jsx)(S.a.Description,{children:"Due to the rapid changing enviroment of the course content, managing and editing code on a regualr basis was quite challenging. The notification system was also quite challenging but fun to implement."})]})]})]})})]}),Object(h.jsx)(y.a.Content,{extra:!0,children:Object(h.jsxs)("div",{className:"pb-3",children:["Languages:"," ",["JavaScript: 95.8%","SCSS: 2.9%","HTML: 1.3%"].map((function(e){return Object(h.jsxs)("p",{className:"badge badge-light card-link",children:[e,":"," "]},e)}))]})})]}),Object(h.jsxs)(y.a,{fluid:!0,children:[Object(h.jsx)(C.a,{src:_,as:"a",size:"large",href:"https://whatsapp-clone-bd456.web.app/",target:"_blank",wrapped:!0,ui:!1}),Object(h.jsxs)(y.a.Content,{children:[Object(h.jsx)(y.a.Header,{children:"WhatsApp Chat"}),Object(h.jsx)(y.a.Description,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(S.a.Item,{children:[Object(h.jsx)(S.a.Icon,{name:"marker"}),Object(h.jsxs)(S.a.Content,{children:[Object(h.jsx)(S.a.Header,{children:"About"}),Object(h.jsx)(S.a.Description,{children:"A wannabe version of whats App built for fun. Main tech stack: firebase and react js. A user can sign in with his/her google account. create a chat room and chat with other users."})]})]}),Object(h.jsxs)(S.a.Item,{children:[Object(h.jsx)(S.a.Icon,{name:"marker"}),Object(h.jsxs)(S.a.Content,{children:[Object(h.jsx)(S.a.Header,{children:"Challenges"}),Object(h.jsx)(S.a.Description,{children:"This project was built entirely out of boredom to sharpen my firebase skills. More imporovements would be made such as recording and sending voice messages, uploading a story and sending Gifs"})]})]})]})})]}),Object(h.jsx)(y.a.Content,{extra:!0,children:Object(h.jsxs)("div",{className:"pb-3",children:["Languages:"," ",["CSS: 53.2%","JavaScript: 42.8","%HTML: 3.8 %"].map((function(e){return Object(h.jsxs)("p",{className:"badge badge-light card-link",children:[e,":"," "]},e)}))]})})]})]})]})})},I=(t(145),function(){return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(f,{}),Object(h.jsx)(v,{}),Object(h.jsx)(D,{})]})}),T=function(){return Object(h.jsxs)(r.a,{basename:"/home/",children:[l.o&&Object(h.jsx)(w,{}),Object(h.jsx)(i.a,{path:"/",exact:!0,component:I}),Object(h.jsx)(N,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(T,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e){e.exports=JSON.parse('{"a":"Fathin","c":"","b":"Dosunmu","f":"| Programmer | Ethical Hacker ","j":[{"id":0,"image":"fa-github","url":"https://github.com/Fato07","style":"socialicons"},{"id":1,"image":"fa-gitlab","url":"https://gitlab.com/Fato_07","style":"socialicons"},{"id":2,"image":"fa-linkedin","url":"https://www.linkedin.com/in/fathindos/","style":"socialicons"}],"e":"About Me","d":"I\'m a Masters Student in Cyber Security, full-time software developer and coding is the sauce of my life. I\'m passionate about anything Programming, Ethical hacking and Technology as a whole. Sometimes, when I\u2019m in the flow, I craft applications.\\nI also play CTF\u2019s and write writeups about The interesting machines on my blog as well as tech, web and security related stuff","m":"Recent Projects","g":"https://api.github.com/users/","i":"Fato07","h":"/repos?sort=updated&direction=desc","n":4,"o":true,"l":"Web Developer Portfolio","k":"https://medium.com/@fathindos.fd"}')}},[[147,1,2]]]);
//# sourceMappingURL=main.8a70e130.chunk.js.map