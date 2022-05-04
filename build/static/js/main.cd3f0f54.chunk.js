(this.webpackJsonphridoypartho=this.webpackJsonphridoypartho||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),a=c(0),l=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),r=n[0],o=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="#",j="HP.",h="Hridoy Partho",d="Front End Engineer",b="I\u2019m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I\u2019m focused on building accessible, ThemeForest products at",u="./resume.pdf",m={linkedin:"https://www.linkedin.com/in/hriody-halder-partho-0a23151b9/",github:"https://github.com/hridoypartho"},p=[{name:"Project 1",description:"A Multipurpose web app for Company, built with Html, Scss, Javascript ",stack:["HTML","SASS","Javascript"],sourceCode:"https://github.com",livePreview:"https://zakirsoft.com/"},{name:"Project 2",description:"Bestkit - Multipurpose Landing Page HTML Template",stack:["HTML","SASS","Javascript"],sourceCode:"https://github.com",livePreview:"https://bestkit.netlify.app/"},{name:"Project 3",description:"Custar - React Next JS Landing Page Template",stack:["React","SASS","Next JS"],sourceCode:"https://github.com",livePreview:"https://custar-next.netlify.app/"},{name:"Project 4",description:"Custar - App, Software & SaaS Landing Templates",stack:["HTML","SASS","Javascript"],sourceCode:"https://github.com",livePreview:"https://finestdevs.com/demos/custar-html"},{name:"Project 5",description:"Fastland - React Gatsby JS Landing Page Template",stack:["React","SASS","Gatsby JS"],sourceCode:"https://github.com",livePreview:"https://fastland-gatsby.netlify.app/"},{name:"Project 6",description:"A single-page web app for client, built with React Next.js, and SCSS",stack:["React","SASS","Next JS"],sourceCode:"https://github.com",livePreview:"https://bouldbound.netlify.app/"},{name:"Project 7",description:"Kevin \u2013 Personal Portfolio is a HTML Template. It is designed with modern looks, clean ui and 6 different homepages",stack:["HTML","SASS","Javascript"],sourceCode:"https://github.com",livePreview:"https://kevin-html.netlify.app/"},{name:"Project 8",description:"Clicon - Multipurpose eCommerce HTML Template",stack:["HTML","SASS","Javascript"],sourceCode:"https://github.com",livePreview:"https://clicon-html.netlify.app/"},{name:"Project 9",description:"Poco - Bootstrap 4 Agency HTML Template",stack:["HTML","SASS","Javascript"],sourceCode:"https://github.com",livePreview:"https://poco-html.netlify.app/"}],O=["HTML","CSS","Nunjucks","JavaScript","React","Redux","SASS","Material UI","Git","Php","Jest","Enzyme"],x="hridoyhalderpartho@mail.com",f=c(16),v=c.n(f),k=c(14),g=c.n(k),S=c(18),N=c.n(S),_=c(17),y=c.n(_),w=(c(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(y.a,{}):Object(a.jsx)(N.a,{})})]})}),P=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(w,{})]})}),C=c(11),T=c.n(C),L=c(19),A=c.n(L),J=(c(33),function(){var e=h,t=d,c=b,n=u,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsxs)("p",{className:"about__desc",children:[c&&c," ",Object(a.jsx)("a",{href:"https://zakirsoft.com/",className:"about__name",children:" ZakirSoft."})]}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),M=c(7),H=c.n(M),E=c(20),I=c.n(E),R=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(I.a,{})})]})}),z=(c(36),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(R,{project:e},H()())}))})]}):null}),B=(c(37),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),F=c(21),G=c.n(F),q=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(G.a,{fontSize:"large"})})}):null}),D=(c(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("p",{className:"section__text",children:"Although I\u2019m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Designed & Built by hridoyPartho"})})}),U=(c(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(J,{}),Object(a.jsx)(z,{}),Object(a.jsx)(B,{}),Object(a.jsx)(D,{})]}),Object(a.jsx)(q,{}),Object(a.jsx)(K,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.cd3f0f54.chunk.js.map