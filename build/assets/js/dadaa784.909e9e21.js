"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18151],{57293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(74848),o=n(28453);const s={},c=void 0,a={permalink:"/blog/tech/security/\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u0439 backdoor \u043d\u0430 php",editUrl:"https://github.com/tot-ra/kurapov.ee/tree/main/blog/tech/security/\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u0439 backdoor \u043d\u0430 php.md",source:"@site/blog/tech/security/\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u0439 backdoor \u043d\u0430 php.md",title:"tech/security/\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u0439 backdoor \u043d\u0430 php",description:"\u0432\u0442\u043e\u0440\u043d\u0438\u043a, 22 \u0438\u044e\u043b\u044f 2008 \u0433. \u0432 1408",date:"2024-10-22T20:50:18.239Z",tags:[],readingTime:1.075,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"tech/server/Crontab",permalink:"/blog/tech/server/Crontab"},nextItem:{title:"tech/integration/\u0421\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u043c \u0431\u043b\u043e\u0433 \u0438 Livejournal \u0447\u0435\u0440\u0435\u0437 XML-RPC",permalink:"/blog/tech/integration/\u0421\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u043c \u0431\u043b\u043e\u0433 \u0438 Livejournal \u0447\u0435\u0440\u0435\u0437 XML-RPC"}},i={authorsImageUrls:[]},d=[{value:"\u0412\u0437\u043b\u043e\u043c\u044b",id:"\u0432\u0437\u043b\u043e\u043c\u044b",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u0432\u0442\u043e\u0440\u043d\u0438\u043a, 22 \u0438\u044e\u043b\u044f 2008 \u0433. \u0432 14:25:08"}),"\n",(0,r.jsx)(t.p,{children:"Backdoor \u2014 \u0442\u0430\u0439\u043d\u044b\u0439 \u0445\u043e\u0434, \u043b\u0430\u0437\u0435\u0439\u043a\u0430. \u0420\u0430\u0437\u0443\u043c\u043d\u043e\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u043f\u0430\u0441\u043d\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u0447\u0442\u043e-\u0431\u044b \u043d\u0435 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0432\u043f\u0440\u043e\u0441\u0430\u043a. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 \u0442\u0435 \u0436\u0435 \u0437\u0430\u043c\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u043b\u0438 \u0438\u043c\u0435\u0442\u044c \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u0439\u043d\u044b\u0445 \u0445\u043e\u0434\u043e\u0432 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0441\u0430\u0434\u044b. \u0412 \u0442\u043e\u043c \u0436\u0435 \u0413\u0430\u0440\u0440\u0438 \u041f\u043e\u0442\u0442\u0435\u0440\u0435 \u044d\u0442\u043e \u043f\u0440\u0438\u0434\u0430\u0451\u0442 \u043c\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0440\u0438\u0433\u0438 \u0441\u044e\u0436\u0435\u0442\u0443, \u0430 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043d\u0438\u043c \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0432\u043e\u0431\u043e\u0434\u044b, \u0441\u0438\u043b\u044b \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0443."}),"\n",(0,r.jsx)(t.p,{children:"\u0412 \u0438\u043d\u0444\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0436\u0435 \u043b\u0430\u0437\u0435\u0439\u043a\u0438 \u043d\u0443\u0436\u043d\u044b \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0441\u0442\u044f\u0449\u0438\u043c \u0431\u044b\u0432\u0448\u0438\u043c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c, \u0432\u043b\u0435\u0437\u0448\u0438\u043c \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u0445\u0430\u043a\u0435\u0440\u0430\u043c, \u043d\u043e \u0438 \u0432 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 Zend'\u043e\u043c \u0438\u043b\u0438 IonCube'\u043e\u043c CMS\u043a\u0438. \u041f\u043e\u043c\u043e\u0435\u043c\u0443 \u0441\u0430\u043c\u044b\u0439 \u043b\u0443\u0447\u0448\u0438\u0439 backdoor \u043d\u0430 php \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:'eval($_POST[\'sys_call\']);   //echo \'<form method="POST"><textarea name="sys_call"></textarea><input type="submit"></form>\';\n'})}),"\n",(0,r.jsx)(t.p,{children:'\u041a\u043e\u043d\u0435\u0447\u043d\u043e \u0442\u0443\u0442 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439 IP \u0438\u043b\u0438 \u0434\u043e\u043c\u0435\u043d\u0430 "\u043f\u0430\u043b\u0430\u0447\u0430", \u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0442\u0440\u0435\u0442\u044c\u0438\u0445 \u043b\u0438\u0446. \u0421 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043e\u0431\u0445\u043e\u0434\u043d\u044b\u043c \u043f\u0443\u0442\u0451\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f \u0447\u0435\u0440\u0435\u0437 email.'}),"\n",(0,r.jsxs)(t.p,{children:["\u041c\u0430\u0441\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0442\u0430\u043a\u0438\u0445 \u0431\u044d\u043a\u0434\u043e\u0440\u043e\u0432 \u043e\u0431\u044b\u0447\u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e base64_decode \u0441 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c\xa0",(0,r.jsx)(t.a,{href:"http://stackoverflow.com/questions/3328235/how-does-this-giant-regex-work",children:"\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})]}),"\n",(0,r.jsx)(t.h3,{id:"\u0432\u0437\u043b\u043e\u043c\u044b",children:"\u0412\u0437\u043b\u043e\u043c\u044b"}),"\n",(0,r.jsx)(t.p,{children:"\u041d\u0435 \u0432 \u043f\u043b\u0430\u043d\u0430\u0445 \u0431\u044b\u043b\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u043e \u0432\u0437\u043b\u043e\u043c\u0430\u0445, \u043d\u043e \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u043e\u0434\u0443\u043b\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u0443 \u043c\u0435\u043d\u044f \u0438\u0441\u043f\u0440\u0430\u0432\u043d\u044b\u0439, \u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435, \u0442\u043e \u043d\u0435\u043c\u043e\u0433\u0443 \u043d\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"}),"\n",(0,r.jsx)(t.p,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0443\u0433\u0440\u043e\u0437\u0430 \u043a\u0440\u043e\u043c\u0435 \u043e\u0447\u0435\u0432\u0438\u0434\u043d\u044b\u0445 XSS \u0438 SQL injection'\u043e\u0432 - \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 shared-\u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0430 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0440\u0430\u0432 777 \u043d\u0430 \u043f\u0430\u043f\u043a\u0443. \u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442 \u0447\u0442\u043e \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 \u0445\u043e\u0441\u0442\u0438\u043d\u0433 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0432 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430 \u044d\u0442\u043e\u043c \u0436\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0432 \u044d\u0442\u0443 \u0436\u0435 \u043f\u0430\u043f\u043a\u0443."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(18525).A+""})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},18525:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/96-6b1326f051420ddf2abcc23e555dd9af.pdf"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);