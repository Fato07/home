(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/Fsecrets.b28c5f0e.png"},103:function(e,a,t){e.exports=t.p+"static/media/WhatsApp.b400802e.png"},115:function(e,a,t){e.exports=t(150)},120:function(e,a,t){},124:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(33),c=t.n(l),i=(t(120),t(40)),s=t(31),o=(t(121),t(122),t(124),t(7)),m=t(105),u=t(13),d=t(97),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],l=a[1],c=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",l(a)):"leave"===e.event?(a[e.icon.id]="socialicons",l(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.f),r.a.createElement("div",null,r.a.createElement("div",{className:"p-5"},o.j.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return c({icon:e,event:"enter"})},onMouseOut:function(){return c({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{href:"https://tryhackme.com/p/Candidate14",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://tryhackme-badges.s3.amazonaws.com/Candidate14.png",alt:"TryHackMe"}))),r.a.createElement("a",{style:{marginTop:"4em"},className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(39),h=t.n(b),f=t(53),E=t.n(f),v=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(o.r),i=Object(u.a)(c,2),s=i[0],m=i[1],d=Object(n.useState)(E.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){s&&g()}),[s]);var g=function(e){h.a.get(o.k+o.m+o.l).then((function(e){return l(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))),r.a.createElement("div",null))))},N=function(e){var a=e.value,t=Object(n.useState)([]),l=Object(u.a)(t,2),c=l[0],i=l[1],s=Object(n.useCallback)((function(e){h.a.get(a).then((function(e){return i(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in c)o.push(d),m+=c[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/m*1e3)/10," %")})))},y=function(e){var a=e.value,t=Object(n.useState)("0 mints"),l=Object(u.a)(t,2),c=l[0],i=l[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return i("".concat(r.toString()," hours ago"));var l=t.getDate(),c=t.getMonth(),s=t.getFullYear();return i("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][c]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(N,{value:g}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},k=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useCallback)((function(e){h.a.get(o.g+o.i+o.h).then((function(e){return l(e.data.slice(0,o.p))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.o),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,value:e})})))))},w=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/fato07","aria-label":"My GitHub"},"Fathin Dosunmu")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null))},j=t(98),q=t.n(j),x=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==l&&c(e)}))}),[l]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(l?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/home/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.q&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link lead",to:"/home/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/home/#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/home/#portfolio"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:E.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:q.a,target:"_blank",rel:"noreferrer noopener"},"Reference")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/home/#aboutme"},r.a.createElement("b",null,"About"))),r.a.createElement("li",{className:"nav-item"}))))},O=t(101),S=function e(a){var t=this,l=a.title,c=a.image,i=a.description;Object(O.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=l,this.image=c,this.description=i},C=[],P=new S({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),_=new S({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");C.push(_),C.push(P);var D=C,H=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),D.map((function(e,a){return r.a.createElement(M,{key:a,title:e.title,description:e.description,index:a})})))},M=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(i.b,{to:"".concat("/home","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},A=function(e){var a=e.match.params.id,t=D[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},L=t(165),T=t(163),I=t(164),F=t(102),B=t.n(F),J=t(103),R=t.n(J),z=function(){return r.a.createElement("div",{id:"portfolio",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.n),r.a.createElement(L.a.Group,null,r.a.createElement(L.a,{fluid:!0},r.a.createElement(T.a,{src:B.a,as:"a",size:"large",href:"https://fundamentalsecrets.web.app/",target:"_blank",wrapped:!0,ui:!1}),r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,"Fundamental Secrets"),r.a.createElement(L.a.Description,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Icon,{name:"marker"}),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Header,null,"About"),r.a.createElement(I.a.Description,null,"A Cryptocurrency learning platform. Inbuilt PayPal and Stripe CheckOut pages, notification System, comment section, customer portal and more..."))),r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Icon,{name:"marker"}),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Header,null,"Challenges"),r.a.createElement(I.a.Description,null,"Due to the rapid changing enviroment of the course content, managing and editing code on a regualr basis was quite challenging. The notification system was also quite challenging but fun to implement.")))))),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement("div",{className:"pb-3"},"Languages:"," ",["JavaScript: 95.8%","SCSS: 2.9%","HTML: 1.3%"].map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,":"," ")}))))),r.a.createElement(L.a,{fluid:!0},r.a.createElement(T.a,{src:R.a,as:"a",size:"large",href:"https://whatsapp-clone-bd456.web.app/",target:"_blank",wrapped:!0,ui:!1}),r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,"WhatsApp Chat"),r.a.createElement(L.a.Description,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Icon,{name:"marker"}),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Header,null,"About"),r.a.createElement(I.a.Description,null,"A wannabe version of whats App built for fun. Main tech stack: firebase and react js. A user can sign in with his/her google account. create a chat room and chat with other users."))),r.a.createElement(I.a.Item,null,r.a.createElement(I.a.Icon,{name:"marker"}),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Header,null,"Challenges"),r.a.createElement(I.a.Description,null,"This project was built entirely out of boredom to sharpen my firebase skills. More imporovements would be made such as recording and sending voice messages, uploading a story and sending Gifs")))))),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement("div",{className:"pb-3"},"Languages:"," ",["CSS: 53.2%","JavaScript: 42.8","%HTML: 3.8 %"].map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,":"," ")}))))))))},W=(t(149),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(k,null),r.a.createElement(z,null))}),Q=function(){return r.a.createElement(i.a,{basename:"/home/"},o.s&&r.a.createElement(x,null),r.a.createElement(s.a,{path:"/",exact:!0,component:W}),o.q&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:H}),o.q&&r.a.createElement(s.a,{path:"/blog/:id",component:A}),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,a,t){e.exports=t.p+"static/media/resume.d3f09212.pdf"},7:function(e){e.exports=JSON.parse('{"a":"Fathin","c":"","b":"Dosunmu","f":"| Programmer | Ethical Hacker ","j":[{"id":0,"image":"fa-github","url":"https://github.com/Fato07","style":"socialicons"},{"id":1,"image":"fa-gitlab","url":"https://gitlab.com/Fato_07","style":"socialicons"},{"id":2,"image":"fa-linkedin","url":"https://www.linkedin.com/in/fathindos/","style":"socialicons"}],"e":"About Me","r":false,"k":"https://www.instagram.com/","m":"Fathin_d","l":"/?__a=1","d":"I\'m a Masters Student in Cyber Security with 1 year + experience in web development who is passionate about anything Programming, Ethical hacking and Technology as a whole. I am Looking for Internships, Part Time roles or full Time roles to enhance and better my SkillSet","o":"Recent Projects","g":"https://api.github.com/users/","i":"Fato07","h":"/repos?sort=updated&direction=desc","p":4,"s":true,"q":false,"n":"Web Developer Portfolio"}')},98:function(e,a,t){e.exports=t.p+"static/media/Huawei_Recommendation.e8590d8d.pdf"}},[[115,1,2]]]);
//# sourceMappingURL=main.a28a12c4.chunk.js.map