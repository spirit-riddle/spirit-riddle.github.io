"use strict";(self.webpackChunkgithub_entrance_page=self.webpackChunkgithub_entrance_page||[]).push([[587],{2802:function(e,t,a){var l=a(6540),s=a(9584);a(4704);t.A=e=>{let{navigation:t,tabs:a,children:n,activeSelection:r,activeSubItem:i=null,activeTabIndex:c=0}=e;t||(t=[{title:"Languages",items:[{title:"English Grammar",href:"/study-desk/languages/english-grammar/lesson-1/"},{title:"Arabic",href:"/study-desk/languages/arabic/resources/"}]},{title:"Technical Skills",items:[{title:"C++ Development",href:"/study-desk/technical-skills/cpp-guide/"}]},{title:"Projects",items:[{title:"MkDocs Software Printer",href:"/study-desk/projects/mkdocs-software-printer/"}]}]);const{0:m,1:o}=(0,l.useState)(r),{0:u,1:d}=(0,l.useState)(i),{0:h,1:g}=(0,l.useState)(c),{0:k,1:E}=(0,l.useState)(!1),f=()=>{E(!k)};return(0,l.useEffect)((()=>{o(r),d(i),g(c)}),[r,i,c]),l.createElement(s.N,null,l.createElement("div",{className:"study-desk-layout"},l.createElement("header",{className:"study-desk-header"},l.createElement("button",{className:"hamburger-menu",onClick:f},"☰"),l.createElement("div",{className:"logo"},"*_"),l.createElement("h1",{className:"title"},"Study Desk")),l.createElement("div",{className:"study-desk-body"},l.createElement("nav",{className:"sidebar "+(k?"open":"")},l.createElement("button",{className:"close-sidebar",onClick:f},"✕"),l.createElement("ul",null,l.createElement("li",{className:"Home"===m?"active":"",onClick:()=>{o("Home"),d(null),E(!1)}},l.createElement("a",{href:"/study-desk/"},"Home")),t.map((e=>l.createElement("li",{key:e.title},l.createElement("small",{style:{color:"rgb(140, 140, 140)",margin:"5px 0"}},l.createElement("em",null,e.title)),e.items&&l.createElement("ul",null,e.items.map((t=>l.createElement("li",{key:t.title,className:t.title===u?"active-subitem":"",onClick:()=>{o(e.title),d(t.title),E(!1)}},l.createElement("a",{href:t.href},t.title)))))))))),l.createElement("div",{className:"main-content"},a&&a.length>0&&l.createElement("div",{className:"tabs"},a.map(((e,t)=>l.createElement("a",{key:t,href:e.href,className:t===h?"active-tab":""},e.title)))),l.createElement("div",{className:"content"},n,l.createElement("footer",{className:"footer"},l.createElement("p",null,"© ",(new Date).getFullYear()," Spirit Riddle. All rights reserved.")))))))}},7541:function(e,t,a){a.r(t);var l=a(6540),s=a(2802);t.default=()=>l.createElement(s.A,{tabs:null,activeSelection:"Home"},l.createElement("h2",null,"Welcome to the Study Desk"),l.createElement("p",null,"This is my dedicated space for storing and organizing my studies. Here, I centralize resources, personal notes, and learning materials for a wide range of subjects I'm exploring. Whether it's languages, technical skills, or critical thinking, this desk helps me stay focused and track my progress. Feel free to explore the tabs and navigation to see how I structure my learning journey. This is where curiosity meets discipline, and ideas are built into knowledge."))}}]);
//# sourceMappingURL=component---src-pages-study-desk-index-js-1e10c31dc36a822b9c04.js.map