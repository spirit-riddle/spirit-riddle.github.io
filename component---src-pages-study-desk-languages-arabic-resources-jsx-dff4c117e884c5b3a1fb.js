"use strict";(self.webpackChunkgithub_entrance_page=self.webpackChunkgithub_entrance_page||[]).push([[453],{2802:function(e,t,a){var r=a(6540),n=a(9584);a(941);t.A=e=>{let{navigation:t,tabs:a,children:l,activeSelection:i,activeSubItem:s=null,activeTabIndex:c=0}=e;t||(t=[{title:"Languages",items:[{title:"English Grammar",href:"/study-desk/languages/english-grammar/lesson-1/"},{title:"Arabic",href:"/study-desk/languages/arabic/resources/"}]},{title:"Technical Skills",items:[{title:"C++ Development",href:"/study-desk/technical-skills/cpp-guide/"}]},{title:"Projects",items:[{title:"MkDocs Software Printer",href:"/study-desk/projects/mkdocs-software-printer/"}]}]);const{0:o,1:m}=(0,r.useState)(i),{0:d,1:u}=(0,r.useState)(s),{0:g,1:h}=(0,r.useState)(c),{0:p,1:b}=(0,r.useState)(!1),f=()=>{b(!p)};return(0,r.useEffect)((()=>{m(i),u(s),h(c)}),[i,s,c]),r.createElement(n.N,null,r.createElement("div",{className:"study-desk-layout"},r.createElement("header",{className:"study-desk-header"},r.createElement("button",{className:"hamburger-menu",onClick:f},"☰"),r.createElement("div",{className:"logo"},"*_"),r.createElement("h1",{className:"title"},"Study Desk")),r.createElement("div",{className:"study-desk-body"},r.createElement("nav",{className:"sidebar "+(p?"open":"")},r.createElement("button",{className:"close-sidebar",onClick:f},"✕"),r.createElement("ul",null,r.createElement("li",{className:"Home"===o?"active":"",onClick:()=>{m("Home"),u(null),b(!1)}},r.createElement("a",{href:"/study-desk/"},"Home")),t.map((e=>r.createElement("li",{key:e.title},r.createElement("small",{style:{color:"rgb(140, 140, 140)",margin:"5px 0"}},r.createElement("em",null,e.title)),e.items&&r.createElement("ul",null,e.items.map((t=>r.createElement("li",{key:t.title,className:t.title===d?"active-subitem":"",onClick:()=>{m(e.title),u(t.title),b(!1)}},r.createElement("a",{href:t.href},t.title)))))))))),r.createElement("div",{className:"main-content"},a&&a.length>0&&r.createElement("div",{className:"tabs"},a.map(((e,t)=>r.createElement("a",{key:t,href:e.href,className:t===g?"active-tab":""},e.title)))),r.createElement("div",{className:"content"},l,r.createElement("footer",{className:"footer"},r.createElement("p",null,"© ",(new Date).getFullYear()," Spirit Riddle. All rights reserved.")))))))}},1817:function(e,t,a){a.r(t);var r=a(6540),n=a(2802),l=a(3216);t.default=()=>r.createElement(n.A,{tabs:l.v,activeTabIndex:0,activeSubItem:"Arabic"},r.createElement("h2",null,"Resources for Learning Arabic"),r.createElement("p",null,"Learning Arabic is a journey into one of the most beautiful and widely spoken languages in the world. To start, mastering pronunciation is essential for understanding and communicating effectively. Below is a resource to help you get familiar with Arabic sounds, starting with the basics of pronunciation."),r.createElement("div",{style:{textAlign:"center",margin:"20px 0"}},r.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8_60iWXl7dw?start=267",title:"Arabic Pronunciation Guide",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.createElement("br",null),r.createElement("p",null,"The Arabic alphabet is unique and versatile, consisting of 28 letters that adapt their shape based on their position in a word. These letters can take on four forms: ",r.createElement("strong",null,"isolated")," (when the letter stands alone), ",r.createElement("strong",null,"initial")," (when it starts a word),",r.createElement("strong",null,"medial")," (when it occurs in the middle), and ",r.createElement("strong",null,"final")," (when it ends a word). Understanding these forms is crucial for reading and writing in Arabic, as the visual changes ensure a fluid connection between letters, giving the script its characteristic elegance and readability."),r.createElement("div",{style:{textAlign:"center",margin:"20px 0"}},r.createElement("img",{src:"/training/arabic/arabic-alphabet.png",alt:"Arabic Alphabet Forms",style:{maxWidth:"100%",border:"1px solid #ddd",borderRadius:"8px"}})),r.createElement("p",{style:{textAlign:"center"}},"For more detailed information on the Arabic script and its forms, refer to the"," ",r.createElement("a",{href:"https://www.loc.gov/catdir/cpso/romanization/arabic.pdf?utm_source=chatgpt.com",target:"_blank",rel:"noopener noreferrer",style:{color:"#007acc",textDecoration:"none",fontWeight:"bold"}},"Arabic Romanization Table")," ","provided by the Library of Congress."),r.createElement("br",null),r.createElement("p",null,"Arabic Grammar video playlist for learning how to write and speak words and sentences in Arabic."),r.createElement("div",{style:{textAlign:"center",margin:"20px 0"}},r.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0EMtQ64vS5Q?list=PL1M2O2sAd6vleEuMk58NyF1vAdfSGZtEI",title:"Arabic Grammar Video Playlist",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.createElement("br",null),r.createElement("p",null,"Memorizing Arabic words is a powerful way to build your vocabulary and deepen your understanding of the language. By focusing on patterns and repetition, you can quickly retain new words and their meanings. Using visual and audio aids, like videos, helps reinforce your memory while providing context for how the words are used in sentences. This playlist is designed to support your vocabulary building journey by introducing commonly used Arabic words and phrases in everyday scenarios."),r.createElement("p",{style:{textAlign:"center",margin:"20px 0"}},r.createElement("a",{href:"https://www.youtube.com/watch?v=AR6oclY-3jY&list=PLsr1ERsR7y1kOVVtHDU1RHm65IXk1mbWW&index=2",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#007acc",fontWeight:"bold",fontSize:"1rem"}},"Watch Playlist")),r.createElement("br",null),r.createElement("section",{style:{backgroundColor:"#fffbcc",borderRadius:"8px",padding:"1rem",marginTop:"2rem",textAlign:"center",color:"#555",fontSize:"1rem"}},r.createElement("p",null,r.createElement("strong",null,"In Progress:")," Content and insights are continuously being developed. Stay tuned for updates!"))))},3216:function(e){e.exports=JSON.parse('{"v":[{"title":"Resources","href":"/study-desk/languages/arabic/resources/"},{"title":"Muhammad\'s Technique","href":"/study-desk/languages/arabic/muhammad-technique/"},{"title":"References","href":"/study-desk/languages/arabic/references/"}]}')}}]);
//# sourceMappingURL=component---src-pages-study-desk-languages-arabic-resources-jsx-dff4c117e884c5b3a1fb.js.map