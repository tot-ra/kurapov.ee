"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10156],{79628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(74848),o=n(28453);const a={},s=void 0,l={permalink:"/blog/tech/backend/Dashboard \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Grafana \u0438 InfluxDB",editUrl:"https://github.com/tot-ra/kurapov.ee/tree/main/blog/tech/backend/Dashboard \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Grafana \u0438 InfluxDB.md",source:"@site/blog/tech/backend/Dashboard \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Grafana \u0438 InfluxDB.md",title:"tech/backend/Dashboard \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Grafana \u0438 InfluxDB",description:"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a, 25 \u0434\u0435\u043a\u0430\u0431\u0440\u044f 2017 \u0433. \u0432 1613",date:"2024-10-22T20:50:17.538Z",tags:[],readingTime:1.58,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"tech/backend/gpu/CUDA",permalink:"/blog/tech/backend/gpu/CUDA"},nextItem:{title:"tech/backend/JasperReports",permalink:"/blog/tech/backend/JasperReports"}},i={authorsImageUrls:[]},d=[];function c(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a, 25 \u0434\u0435\u043a\u0430\u0431\u0440\u044f 2017 \u0433. \u0432 16:34:13"}),"\n",(0,r.jsxs)(t.p,{children:["\u0412 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0442\u0435\u043c\u044b \u0443\u043c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430 \u0433\u0434\u0435 \u043c\u043e\u0439\xa0",(0,r.jsx)(t.a,{href:"https://kurapov.ee/rus/technology/gadgets/smart_home_pellet_burner_RTB30/",children:"\u043a\u043e\u0442\u0451\u043b \u0443\u043c\u0435\u043b \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c API"}),"\xa0\u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440, \u0437\u0430\u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u043c\u043d\u0435 \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439 \u0432\u0438\u0434. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0445\u043e\u0442\u044f \u0441\u0430\u043c \u043a\u043e\u0442\u0451\u043b \u0443\u043c\u0435\u0435\u0442 \u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a\u0438, \u043e\u043d \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043b \u043d\u0430 \u043d\u0438\u0445 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u0443\u044e \u0437\u043e\u043d\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430, \u0430 \u043c\u043d\u0435 \u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u0432\u0438\u0434\u0435\u0442\u044c \u0434\u0432\u0430."]}),"\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u044f \u0440\u0435\u0448\u0438\u043b \u043f\u043e\u0438\u0437\u0443\u0447\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 dashboard \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u043e-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435\xa0",(0,r.jsx)(t.a,{href:"http://grafana.net/",children:"Grafana"}),". \u0417\u0430\u0440\u0435\u0433\u0438\u043b\u0441\u044f \u0438 \u0443\u043f\u0451\u0440\u0441\u044f \u0432 \u0442\u043e \u0447\u0442\u043e \u043e\u043d \u0441\u0430\u043c \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435. \u041e\u043d \u0443\u043c\u0435\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a\xa0",(0,r.jsx)(t.strong,{children:"\u0432\u043d\u0435\u0448\u043d\u0438\u043c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c"}),"\xa0\u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0442\u0443\u0434\u0430.\xa0"]}),"\n",(0,r.jsx)(t.p,{children:"\u041d\u043e\u0432\u044b\u0439 MySQL \u043c\u043d\u0435 \u043d\u0435 \u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0442\u044c, \u0430 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0442\u0435\u043c \u0431\u043e\u043b\u0435\u0435. Cloudwatch \u043e\u0442 \u0410\u043c\u0430\u0437\u043e\u043d\u0430 - \u0432\u0438\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0435\u0441\u043b\u0438 \u0432\u044b \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c \u044d\u0442\u043e\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439. Prometheus \u044f \u043c\u043e\u0433\u0443 \u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c. \u0412\u044b\u0431\u0440\u0430\u043b InfluxDB - \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0411\u0414 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.influxdata.com/influxdb/v1.4/introduction/installation/",children:"\u0421\u0442\u0430\u0432\u0438\u0442\u044c Influx"}),"\xa0\u0431\u044b\u043b\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e.\xa0\u0421\u043b\u043e\u0436\u043d\u0435\u0439 \u0431\u044b\u043b\u043e \u0441\u0432\u044f\u0437\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0430\u043d\u0443 \u0441 influx."]}),"\n",(0,r.jsx)(t.p,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0433\u043e\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 8086 \u043f\u043e\u0440\u0442\u0443 \u0438 Grafana \u0445\u043e\u0447\u0435\u0442 SSL \u0438 CORS. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0434\u0435\u043b\u0430\u0442\u044c proxy \u043d\u0430 nginx \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c header:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"location /influx/ {\n    proxy_set_header HOST $host;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    add_header 'Access-Control-Allow-Credentials' 'true';\n\n    proxy_pass http://localhost:8086/;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u0441\u0442\u0430\u0451\u0442 \u0432\u043e\u043f\u0440\u043e\u0441 \u043a\u0430\u043a \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 influx. \u041f\u0438\u0441\u0430\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043d\u0430 node, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044f \u043f\u043e-\u0431\u044b\u0441\u0442\u0440\u043e\u043c\u0443 \u043d\u0430\u0448\u0451\u043b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u0447\u043a\u0443 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:\xa0"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"const Influx = require('influx');\n\nconst influx = new Influx.InfluxDB({\n\thost: 'localhost',\n\tdatabase: 'home',\n\tschema: [\n\t\t{\n\t\t\tmeasurement: 'response_times',\n\t\t\tfields: {\n\t\t\t\tboiler_smoketemp: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_output: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_power: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_light: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_oxygen: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_oxygenlow: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_oxygenmid: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_oxygenhigh: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_connectionindex: Influx.FieldType.FLOAT,\n\t\t\t\tboiler_return: Influx.FieldType.FLOAT,\n\t\t\t\tzone_1: Influx.FieldType.FLOAT,\n\t\t\t\tzone_2: Influx.FieldType.FLOAT\n\t\t\t},\n\t\t\ttags: [\n\t\t\t\t'host'\n\t\t\t]\n\t\t}\n\t]\n});\n\n//\u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u043c data..\n\ninflux.writePoints([\n\t{\n\t\tmeasurement: 'heating',\n\t\tfields: data\n\t}\n]).catch(err => {\n\tconsole.error(`Error saving data to InfluxDB! ${err.stack}`)\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0447\u0442\u043e-\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0445\u0440\u043e\u043d\u043e\u0433\u0440\u0430\u0444 - \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u044b\u0439 UI-\u0441\u0435\u0440\u0432\u0438\u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u043d\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 \u0431\u044b\u043b \u0432\u0441\u0442\u0440\u043e\u0435\u043d \u0432 influx \u0432 \u0432\u0438\u0434\u0435 \u0430\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u0438."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(59644).A+"",width:"1322",height:"1164"})}),"\n",(0,r.jsx)(t.p,{children:"\u041e\u043a\u0435\u0439, \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043b\u044b\u0432\u0443\u0442, \u0442\u0435\u043f\u0435\u0440\u044c \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0432\u0441\u0435\u043c \u0447\u0443\u0442\u044c-\u0447\u0443\u0442\u044c \u0447\u0442\u043e-\u0431\u044b \u043e\u043d\u0438 \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c \u0438 \u0432 \u0433\u0440\u0430\u0444\u0430\u043d\u0435 \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0436\u0435.."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(64672).A+"",width:"2154",height:"1566"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},59644:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Pasted image 20241016133602-4282ac478ccf1d138f4f4fc2f78efe1f.png"},64672:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Pasted image 20241016133611-bdbc720d783f18d90ae5bad523a89875.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);