"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66275],{53855:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(74848),i=s(28453);const r={},a="Our Requirement",o={permalink:"/blog/Journey to a Federated GraphQL",editUrl:"https://github.com/tot-ra/kurapov.ee/tree/main/blog/Journey to a Federated GraphQL.md",source:"@site/blog/Journey to a Federated GraphQL.md",title:"Journey to a Federated GraphQL",description:"https://miro.medium.com/max/1400/16ADAF1r2LFunXgdklnMRzw.png",date:"2024-10-22T20:50:16.860Z",tags:[],readingTime:14.26,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Dream of scalable & enriched graphql-subscriptions",permalink:"/blog/Dream of scalable & enriched graphql-subscriptions"},nextItem:{title:"Test",permalink:"/blog/2024/10/21/posts/test"}},h={authorsImageUrls:[]},l=[{value:"<strong>Gathering developer expectations</strong>",id:"gathering-developer-expectations",level:2},{value:"<strong>Manage your schema</strong>",id:"manage-your-schema",level:2},{value:"<strong>Version your schema</strong>",id:"version-your-schema",level:2},{value:"<strong>Defining schema based on existing REST is not so straightforward</strong>",id:"defining-schema-based-on-existing-rest-is-not-so-straightforward",level:2},{value:"<strong>CQRS and cache</strong>",id:"cqrs-and-cache",level:2},{value:"<strong>Track performance</strong>",id:"track-performance",level:2},{value:"<strong>Do not track performance (in production)</strong>",id:"do-not-track-performance-in-production",level:2},{value:"<strong>Consider prefetching on frontend</strong>",id:"consider-prefetching-on-frontend",level:2},{value:"<strong>Evaluate query complexity</strong>",id:"evaluate-query-complexity",level:2},{value:"<strong>Schema has many faces</strong>",id:"schema-has-many-faces",level:2},{value:"<strong>Gradual canary rollout</strong>",id:"gradual-canary-rollout",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*6ADAF1r2LFunXgdklnMRzw.png",alt:"https://miro.medium.com/max/1400/1*6ADAF1r2LFunXgdklnMRzw.png"})}),"\n",(0,n.jsxs)(t.p,{children:["Image taken from ",(0,n.jsx)(t.a,{href:"http://dgraph.io",children:"dgraph.io"})]}),"\n",(0,n.jsxs)(t.p,{children:["Engineers tend to love good stories, so hopefully our 5-year journey of moving towards API composition with\xa0",(0,n.jsx)(t.a,{href:"https://graphql.org/",children:"GraphQL"}),"\xa0now in production (serving at peak 110 requests per second at 100ms latency) provides a good story."]}),"\n",(0,n.jsxs)(t.p,{children:["[If you\u2019re in a hurry, scroll down to\xa0",(0,n.jsx)(t.em,{children:"Lessons learned"}),"\xa0and check out the open-sourced\xa0",(0,n.jsx)(t.a,{href:"https://github.com/pipedrive/graphql-schema-registry",children:"graphql-schema-registry"}),".]"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*d32xg4FUICDlOm9q0PCLkw.png",alt:"https://miro.medium.com/max/1400/1*d32xg4FUICDlOm9q0PCLkw.png"})}),"\n",(0,n.jsxs)(t.p,{children:["schema registry with some\xa0",(0,n.jsx)(t.a,{href:"https://github.com/jeffwillette/graphql-go-pets-example",children:"example schema"})]}),"\n",(0,n.jsxs)(t.p,{children:["For years, Pipedrive (which hit 10 years near the beginning of 2020) has had a\xa0",(0,n.jsx)(t.a,{href:"https://developers.pipedrive.com/docs/api/v1/",children:"public REST API"}),", as well as hidden, undocumented endpoints for our webapp \u2014 one of which is\xa0",(0,n.jsx)(t.em,{children:"/users/self,"}),"\xa0that was initially for loading user information but over time became a page-load API, composed of 30 different entity types. It originated in our PHP monolith which by nature is synced. We\xa0",(0,n.jsx)(t.a,{href:"https://medium.com/pipedrive-engineering/how-two-developers-accelerated-php-monolith-in-pipedrive-df8a18bc2d8a",children:"tried to split it"}),"\xa0into parallel threads but that didn\u2019t work out so well."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*pqnU6EvMYnIQmVnnt5V1mA.png",alt:"https://miro.medium.com/max/1400/1*pqnU6EvMYnIQmVnnt5V1mA.png"})}),"\n",(0,n.jsx)(t.p,{children:"/users/self latency distribution currently for the remaining traffic"}),"\n",(0,n.jsx)(t.p,{children:"From a maintenance point of view, with every new change, it became messier as nobody wanted to own this enormous endpoint."}),"\n",(0,n.jsx)(t.h1,{id:"direct-db-access-poc",children:(0,n.jsx)(t.strong,{children:"Direct DB Access PoC"})}),"\n",(0,n.jsx)(t.p,{children:"Let's go back in time to when our devs experimented with graphql."}),"\n",(0,n.jsxs)(t.p,{children:["About 3\u20134 years ago in the\xa0",(0,n.jsx)(t.a,{href:"https://marketplace.pipedrive.com/",children:"marketplace"}),"\xa0team, I began hearing new terms like \u201c",(0,n.jsx)(t.a,{href:"https://elixir-lang.org/",children:"elixir"}),"\u201d and \u201cgraphql\u201d from\xa0",(0,n.jsx)(t.a,{href:"https://twitter.com/bashmach",children:"Pavel"}),", our fullstack engineer. He was involved in a proof-of-concept project which directly accessed MySQL and exposed the\xa0",(0,n.jsx)(t.em,{children:"/graphql"}),"\xa0endpoint for querying core Pipedrive entities."]}),"\n",(0,n.jsx)(t.p,{children:"It worked fine in dev, but it wasn\u2019t scalable because our backend was not only CRUD and nobody wanted to rewrite the monolith."}),"\n",(0,n.jsx)(t.h1,{id:"stitching-poc",children:(0,n.jsx)(t.strong,{children:"Stitching PoC"})}),"\n",(0,n.jsxs)(t.p,{children:["Fast forward to 2019 when I saw another internal PoC by a colleague that used GraphQL schema stitching with\xa0",(0,n.jsx)(t.a,{href:"https://github.com/graphql-compose/graphql-compose",children:"graphql-compose"}),"\xa0and makes requests to our REST API. As you can imagine, this was a major improvement since we wouldn\u2019t need to re-implement all of the business logic and it was just a wrapper."]}),"\n",(0,n.jsx)(t.p,{children:"The downsides in this PoC were:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Performance"})}),"\n",(0,n.jsx)(t.p,{children:". It didn\u2019t have"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/graphql/dataloader",children:"dataloader"})}),"\n",(0,n.jsx)(t.p,{children:", so it had a potential N+1 API call problem. It didn\u2019t limit query complexity and it didn\u2019t have any intermediate caching. On average, the latency was higher than with the monolith."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Schema management."}),"\xa0With schema stitching, we need to define a schema in the single repo, separate from an actual service that serves data. This complicates deployment, as we would need intermediate backward-compatible deployments to avoid crashes in case service changes."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"preparation",children:(0,n.jsx)(t.strong,{children:"Preparation"})}),"\n",(0,n.jsxs)(t.p,{children:["In October 2019, I started to prepare for the mission that would move the previous PoC into production, but with a new Apollo federation that\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/blog/apollo-federation-f260cf525d21/",children:"came out"}),"\xa0the same year. This would also land into a core team that would maintain the service through the long-term."]}),"\n",(0,n.jsx)(t.h2,{id:"gathering-developer-expectations",children:(0,n.jsx)(t.strong,{children:"Gathering developer expectations"})}),"\n",(0,n.jsx)(t.p,{children:"Internally, some developers were skeptical and suggested building an in-house API composition by stitching REST API URLs and their payloads into a single POST request and relying on an internal gateway to split requests on the backend."}),"\n",(0,n.jsxs)(t.p,{children:["Some saw graphql as still too raw to adopt in production & keep a status-quo. Some suggested exploring alternatives, like Protobuf or\xa0",(0,n.jsx)(t.a,{href:"https://thrift.apache.org/",children:"Thrift"}),", and using transport conventions like\xa0",(0,n.jsx)(t.a,{href:"https://grpc.io/",children:"GRPC"}),",\xa0",(0,n.jsx)(t.a,{href:"https://www.odata.org/",children:"OData"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Conversely, some teams went full throttle and already had graphql in production for individual services (insights, teams), but couldn\u2019t reuse other schemas (like User entity). Some (",(0,n.jsx)(t.a,{href:"https://www.pipedrive.com/en/jobs/czech-republic",children:"leads"}),") used a typescript +\xa0",(0,n.jsx)(t.a,{href:"https://relay.dev/",children:"relay"}),"\xa0which still needed to figure out\xa0",(0,n.jsx)(t.a,{href:"https://github.com/apollographql/apollo-server/issues/3159",children:"how to federate"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Local conference talk about a similar topic (VP of Tech @\xa0",(0,n.jsx)(t.a,{href:"https://medium.com/@MyMonese",children:"Monese"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["Researching new tech was exciting",":Strict",", self-describing API for frontend developers? Global entity declaration and ownership that forces the reduction of duplication and increases transparency? A gateway that could automatically join data from different services without over-fetching? Wow."]}),"\n",(0,n.jsxs)(t.p,{children:["I knew that we needed schema management as a service to not rely on a hard-coded one and have visibility on what\u2019s happening. Something like\xa0",(0,n.jsx)(t.a,{href:"https://docs.confluent.io/current/schema-registry/index.html",children:"Confluent\u2019s schema-registry"}),"\xa0or\xa0",(0,n.jsx)(t.a,{href:"https://bitbucket.org/atlassian/graphql-braid/src/master/",children:"Atlassian\u2019s Braid"}),", but not Kafka-specific or written in Java, which we didn\u2019t want to maintain."]}),"\n",(0,n.jsx)(t.h1,{id:"the-plan",children:(0,n.jsx)(t.strong,{children:"The plan"})}),"\n",(0,n.jsx)(t.p,{children:"I pitched an engineering mission that focused on 3 goals:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reducing initial page load time (pipeline view) by 15%. Achievable by joining some REST API calls into a single /graphql request"}),"\n",(0,n.jsx)(t.li,{children:"Reducing API traffic by 30%. Achievable by moving deal loading for the pipeline view to graphql and requesting fewer properties."}),"\n",(0,n.jsxs)(t.li,{children:["Using strict schema in API (for the frontend to write less\xa0",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Defensive_programming",children:"defensive code"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["I was lucky to get\xa0",(0,n.jsx)(t.a,{href:"https://github.com/pipedrive/graphql-schema-registry#honorable-mentions",children:"3 awesome experienced developers"}),"\xa0to join the mission, including a PoC author."]}),"\n",(0,n.jsx)(t.p,{children:"Multiple REST API calls from webapp done at different time"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/5004/1*jmyHq5UWstzZeCuXSPYHIw.png",alt:"https://miro.medium.com/max/5004/1*jmyHq5UWstzZeCuXSPYHIw.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/5000/1*_L6W6bxg5jt4oC_Yd6jkAw.png",alt:"https://miro.medium.com/max/5000/1*_L6W6bxg5jt4oC_Yd6jkAw.png"})}),"\n",(0,n.jsx)(t.p,{children:"The original plan for the services looked like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*hZPmw66Kk3e9TtYj-FWNEg.png",alt:"https://miro.medium.com/max/1400/1*hZPmw66Kk3e9TtYj-FWNEg.png"})}),"\n",(0,n.jsx)(t.p,{children:"Services we would need to work on"}),"\n",(0,n.jsxs)(t.p,{children:["The schema-registry here would be a generic service that could store any type of schema you throw at it as an input (",(0,n.jsx)(t.a,{href:"https://editor.swagger.io/",children:"swagger"}),", typescript, graphql, avro, proto). It would also be smart enough to convert an entity to whatever format you want for the output. The gateway would poll schema and call services that own it. Frontend components would need to download schema and use it for making queries."]}),"\n",(0,n.jsx)(t.p,{children:"In reality however, we implemented only graphql because federation only need this and we ran out of time pretty quickly."}),"\n",(0,n.jsx)(t.h1,{id:"results",children:(0,n.jsx)(t.strong,{children:"Results"})}),"\n",(0,n.jsxs)(t.p,{children:["The main goal of replacing messy\xa0",(0,n.jsx)(t.em,{children:"/users/self"}),"\xa0endpoint in the webapp was done within the first 2 weeks of the mission \ud83d\ude33 (yay!). Polishing it so that it\u2019s performant and reliable, took most of the mission time though."]}),"\n",(0,n.jsxs)(t.p,{children:["By the end of the mission (in February 2020), we\xa0",(0,n.jsx)(t.em,{children:"did"}),"\xa0achieve\xa0",(0,n.jsx)(t.strong,{children:"13%"}),"\xa0initial page load time reduction and\xa0",(0,n.jsx)(t.strong,{children:"25%"}),"\xa0on page reload (due to introduced caching) based on the synthetic\xa0",(0,n.jsx)(t.a,{href:"https://www.datadoghq.com/",children:"Datadog"}),"\xa0test that we used."]}),"\n",(0,n.jsxs)(t.p,{children:["We did not reach the goal of traffic volume reduction, because we didn\u2019t reach the refactoring\xa0",(0,n.jsx)(t.em,{children:"pipeline"}),"\xa0view in webapp \u2014 we still use REST there."]}),"\n",(0,n.jsx)(t.p,{children:"To increase adoption we added internal tooling to ease federation process and recorded onboarding videos for teams to understand how it works now. After the mission ended, IOS and Android clients also migrated to graphql and the teams gave positive feedback."}),"\n",(0,n.jsx)(t.h1,{id:"lessons-learned",children:(0,n.jsx)(t.strong,{children:"Lessons learned"})}),"\n",(0,n.jsx)(t.p,{children:"Looking back at the mission log that I kept for all of the 60 days, I can outline the biggest issues so that you don\u2019t make the same mistakes"}),"\n",(0,n.jsx)(t.h2,{id:"manage-your-schema",children:(0,n.jsx)(t.strong,{children:"Manage your schema"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Could we have built this ourselves? Maybe, but it wouldn\u2019t be as polished.Mark Stuart, Paypal Engineering"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Through the first couple of days, I tried\xa0",(0,n.jsx)(t.a,{href:"https://studio.apollographql.com/",children:"Apollo studio"}),"\xa0& its\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/studio/schema-checks/#the-check-process",children:"tooling"}),"\xa0for CLI to validate schema. The service is excellent and works out-of-the-box with minimal gateway configuration."]}),"\n",(0,n.jsx)(t.p,{children:"Our internal tools to see schema diffs and validate pushed schema from the terminal, similar to Apollo\u2019s tooling"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/2612/1*peOiXrxaxYTeJ0kAjXOqnA.png",alt:"https://miro.medium.com/max/2612/1*peOiXrxaxYTeJ0kAjXOqnA.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/3700/1*0PkQISCe0ux2nG6c6l5wXg.png",alt:"https://miro.medium.com/max/3700/1*0PkQISCe0ux2nG6c6l5wXg.png"})}),"\n",(0,n.jsxs)(t.p,{children:["As well as it works, I still felt that tying core backend traffic to an external SaaS is too risky for business continuity, regardless of its great features or pricing plans. This is why we wrote a service of our own, with basic functionality \u2014 now it\u2019s an open-source\xa0",(0,n.jsx)(t.a,{href:"https://github.com/pipedrive/graphql-schema-registry",children:"graphql-schema-registry"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The second reason to have in-house schema-registry was to follow Pipedrive\u2019s\xa0",(0,n.jsx)(t.a,{href:"https://medium.com/pipedrive-engineering/tanker-the-story-of-multi-dc-customer-data-migration-framework-ad842c2c6b9c",children:"distributed datacenter model"}),". We don\u2019t rely on centralized infrastructure, every datacenter is self-sufficient. This gives us higher reliability as well as a potential advantage in case we need to open a new DC in places like China, Russia, Iran, or Mars \ud83d\ude80"]}),"\n",(0,n.jsx)(t.h2,{id:"version-your-schema",children:(0,n.jsx)(t.strong,{children:"Version your schema"})}),"\n",(0,n.jsx)(t.p,{children:"Federated schema and graphql gateway are very fragile. If you have type name collision or invalid reference in one of the services and serve it to the gateway, it won\u2019t like it."}),"\n",(0,n.jsxs)(t.p,{children:["By default, a gateway\u2019s behavior is to\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/#gateway-example",children:"poll services for their schemas"}),"\xa0so it's easy for one service to crash the traffic. Apollo studio solves it by validating schema on-push and rejecting registration if it causes possible conflict."]}),"\n",(0,n.jsxs)(t.p,{children:["The validation concept is the right way to go, but the implementation also means that Apollo studio is a\xa0",(0,n.jsx)(t.strong,{children:"stateful"}),"\xa0service that holds\xa0",(0,n.jsx)(t.strong,{children:"current"}),"\xa0valid schema. It makes the schema\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/studio/schema/schema-reporting-protocol/#protocol-sequence",children:"registration protocol"}),"\xa0more complex and\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/studio/schema/schema-reporting/#rolling-deploys-with-schema-reporting",children:"dependent on time"}),", which can be somewhat hard to debug in case of\xa0",(0,n.jsx)(t.em,{children:"rolling deploys"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In contrast, we tied the service version (based on\xa0",(0,n.jsx)(t.strong,{children:"docker image hash"}),") to its schema. Service registers schema also in runtime, but we do it once, without\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/studio/schema/schema-reporting/#rolling-deploys-with-schema-reporting",children:"constant pushing"}),". The gateway takes federated services from service discovery (",(0,n.jsx)(t.a,{href:"https://www.consul.io/",children:"consul"}),") and asks schema-registry to\xa0",(0,n.jsx)(t.em,{children:"/schema/compose"}),", providing their services\u2019\xa0",(0,n.jsx)(t.strong,{children:"versions"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If schema-registry sees that the provided set of versions is not stable, it falls back to the last registered versions (which are used for schema validation on commit, so should be stable)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*Sw5SVUCfE0pU3eqpcVg7EQ.png",alt:"https://miro.medium.com/max/1400/1*Sw5SVUCfE0pU3eqpcVg7EQ.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*ycJcR95HBuDhgkyWkUN2aw.png",alt:"https://miro.medium.com/max/1400/1*ycJcR95HBuDhgkyWkUN2aw.png"})}),"\n",(0,n.jsx)(t.p,{children:"Runtime schema registration example using an internal library"}),"\n",(0,n.jsx)(t.p,{children:"Services can serve both REST and Graphql APIs, so we resort to alerts in case schema registration fails, keeping service operational for REST to work."}),"\n",(0,n.jsx)(t.h2,{id:"defining-schema-based-on-existing-rest-is-not-so-straightforward",children:(0,n.jsx)(t.strong,{children:"Defining schema based on existing REST is not so straightforward"})}),"\n",(0,n.jsxs)(t.p,{children:["Since I didn\u2019t know how to convert our REST API to graphql, I tried\xa0",(0,n.jsx)(t.a,{href:"https://github.com/IBM/openapi-to-graphql",children:"openapi-to-graphql"}),", but our\xa0",(0,n.jsx)(t.a,{href:"https://developers.pipedrive.com/docs/api/v1/",children:"API reference"}),"\xa0didn\u2019t have sufficiently detailed swagger documentation to cover all inputs/outputs at the time."]}),"\n",(0,n.jsx)(t.p,{children:"Asking each team to define schema would take so much time that we just defined the schema for main entities ourselves \ud83d\ude13 based on REST API responses."}),"\n",(0,n.jsxs)(t.p,{children:["Doing this came back to haunt us later, when it turned out that some of the REST API depended on the client that makes requests\xa0",(0,n.jsx)(t.strong,{children:"OR"}),"\xa0had different response format depending on some business logic/state."]}),"\n",(0,n.jsxs)(t.p,{children:["For example,\xa0",(0,n.jsx)(t.strong,{children:"custom fields"}),"\xa0affect API response depending on the customer. If you add a custom field to a deal, it will be served as a\xa0",(0,n.jsx)(t.em,{children:"hash"}),"\xa0on the same level as\xa0",(0,n.jsx)(t.em,{children:"deal.pipeline_id"}),". Dynamic schema is not possible with graphql federation, so we had to work-around that by moving custom fields into a separate property."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/3040/1*wRvmLci_zeX8SI3XLablcA.png",alt:"https://miro.medium.com/max/3040/1*wRvmLci_zeX8SI3XLablcA.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/5452/1*jYUN6yru6BRPltGcZvQzqQ.png",alt:"https://miro.medium.com/max/5452/1*jYUN6yru6BRPltGcZvQzqQ.png"})}),"\n",(0,n.jsxs)(t.p,{children:["Another long-term issue is\xa0",(0,n.jsx)(t.strong,{children:"naming conventions"}),". We wanted to use\xa0",(0,n.jsx)(t.em,{children:"camelCase"}),", but since most of REST used\xa0",(0,n.jsx)(t.em,{children:"snake_case"}),", we ended up with a mix for now."]}),"\n",(0,n.jsxs)(t.p,{children:["Current Pipedrive\u2019s federated graph (on the left) with 2 federated microservices (out of 539) and not-yet federated leads (on the right), generated with\xa0",(0,n.jsx)(t.a,{href:"https://github.com/APIs-guru/graphql-voyager",children:"voyager"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/2420/1*4FDJvhR6Z9zQSCF4_lu-Qg.png",alt:"https://miro.medium.com/max/2420/1*4FDJvhR6Z9zQSCF4_lu-Qg.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/3860/1*x2jV67R_69ZYy6y75TsDiA.png",alt:"https://miro.medium.com/max/3860/1*x2jV67R_69ZYy6y75TsDiA.png"})}),"\n",(0,n.jsx)(t.h2,{id:"cqrs-and-cache",children:(0,n.jsx)(t.strong,{children:"CQRS and cache"})}),"\n",(0,n.jsx)(t.p,{children:"The Pipedrive data model isn\u2019t simple enough to rely only on a TTL-cache."}),"\n",(0,n.jsxs)(t.p,{children:["For example, if a support engineer creates a\xa0",(0,n.jsx)(t.em,{children:"global message"}),"\xa0about maintenance from our backoffice, he also expects it to be immediately shown to customers. Those global messages can be shown to\xa0",(0,n.jsx)(t.em,{children:"all customers"}),"\xa0or can affect\xa0",(0,n.jsx)(t.em,{children:"specific users"}),"\xa0or\xa0",(0,n.jsx)(t.em,{children:"companies"}),". Breaking such cache needs 3 layers."]}),"\n",(0,n.jsxs)(t.p,{children:["To handle php monolith with graphql in async mode, we have created a nodejs service (called\xa0",(0,n.jsx)(t.em,{children:"monograph"}),") which caches everything php responded into memcached. This cache has to be cleaned from PHP depending on business-logic making it a bit of an anti-pattern of tightly-coupled cross-service cache."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*MWhY3MEiDCMs2lnpWjyvIQ.png",alt:"https://miro.medium.com/max/1400/1*MWhY3MEiDCMs2lnpWjyvIQ.png"})}),"\n",(0,n.jsxs)(t.p,{children:["You can see the\xa0",(0,n.jsx)(t.a,{href:"https://martinfowler.com/bliki/CQRS.html",children:"CQRS pattern"}),"\xa0here. Such cache makes it possible to speed-up 80% of requests and get avg latency to the same as php-app, while still having strict schema and no overfetching"]}),"\n",(0,n.jsx)(t.p,{children:"Average latency in php-app (left) vs graphql gateway (right) in US region via NewRelic"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/3192/1*-6FCWqp-bdqK64_5wq-wtw.png",alt:"https://miro.medium.com/max/3192/1*-6FCWqp-bdqK64_5wq-wtw.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/3128/1*F6ArQsPeRYYiAeD4zOAOCg.png",alt:"https://miro.medium.com/max/3128/1*F6ArQsPeRYYiAeD4zOAOCg.png"})}),"\n",(0,n.jsxs)(t.p,{children:["Another complication is the\xa0",(0,n.jsx)(t.em,{children:"customer\u2019s language"}),". Changing this affects so many different entities \u2014 from activity types to google map views and to make things worse, the user language is not managed by php-app anymore, its in\xa0",(0,n.jsx)(t.em,{children:"identity"}),"\xa0service \u2014 and I didn\u2019t want to couple even more services to a single cache."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Identity"}),"\xa0owns user information, so it emits a change event that\xa0",(0,n.jsx)(t.em,{children:"monograph"}),"\xa0listens to and clears its caches. This\xa0",(0,n.jsx)(t.em,{children:"means"}),"\xa0that there is some delay (maybe max ~1 sec) between changing language and getting caches cleared, but it's not critical, because a customer won\u2019t navigate away from a page\xa0",(0,n.jsx)(t.em,{children:"so fast"}),"\xa0to notice the old language still in the cache."]}),"\n",(0,n.jsx)(t.h2,{id:"track-performance",children:(0,n.jsx)(t.strong,{children:"Track performance"})}),"\n",(0,n.jsx)(t.p,{children:"Performance was the main goal and to reach that goal we had to master APM and distributed tracing between microservices to see what is the slowest area. We used Datadog during this time and it showed the main issues."}),"\n",(0,n.jsxs)(t.p,{children:["We also used memcached to cache all 30 parallel requests. The problem (shown on this picture) displays that purple requests to memcached for some of the resolvers throttled up to 220ms, whereas the first 20 requests saved data in 10ms. This was because I used the same\xa0",(0,n.jsx)(t.a,{href:"https://github.com/facebook/mcrouter",children:"mcrouter"}),"\xa0host for all of the requests. Rotating hosts reduced caching write latency to 20 ms max."]}),"\n",(0,n.jsxs)(t.p,{children:["To reduce latency due to network traffic, we got data from memcached with a single batch request for different resolvers using\xa0",(0,n.jsx)(t.a,{href:"https://github.com/3rd-Eden/memcached#public-methods",children:"getMulti"}),"\xa0and a 5 ms debounce."]}),"\n",(0,n.jsx)(t.p,{children:"Issues during mission \u2014 memcached (left), slow single resolver (right) in Datadog distributed tracing"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/3700/1*ibZbgnevw9dsYg0nVHbo3Q.png",alt:"https://miro.medium.com/max/3700/1*ibZbgnevw9dsYg0nVHbo3Q.png"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/2388/1*bB4N6SdLy0kAQvRO5o3aAQ.png",alt:"https://miro.medium.com/max/2388/1*bB4N6SdLy0kAQvRO5o3aAQ.png"})}),"\n",(0,n.jsxs)(t.p,{children:["Notice also the yellow bars on the right \u2014 that\u2019s the graphql\xa0",(0,n.jsx)(t.strong,{children:"gateway\u2019s tax"}),"\xa0on making data strictly typed after all data is resolved. It grows with the amount of data you transfer."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*KKchwFbhA817Ok5Eugq7hQ.png",alt:"https://miro.medium.com/max/1400/1*KKchwFbhA817Ok5Eugq7hQ.png"})}),"\n",(0,n.jsx)(t.p,{children:"We needed to find the slowest resolvers because the latency of the entire request depends entirely on them. It was pretty infuriating to see 28 out of 30 resolvers reply in 40ms time.. and 2 of the APIs taking 500ms, because they didn\u2019t have any cache."}),"\n",(0,n.jsx)(t.p,{children:"We had to move some of these endpoints out of the initialization query to create better latency. So we actually make 3\u20135 separate graphql queries from frontend, depending on when query is requested (also with some debounce logic)."}),"\n",(0,n.jsx)(t.h2,{id:"do-not-track-performance-in-production",children:(0,n.jsx)(t.strong,{children:"Do not track performance (in production)"})}),"\n",(0,n.jsxs)(t.p,{children:["The counter-intuitive clickbait heading here actually means that you should avoid using APMs in production for graphql gateway or apollo server\u2019s built-in\xa0",(0,n.jsxs)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/api/apollo-server/#apolloserver",children:["tracing",":true"]}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*u0oVzzJPCylM7aR47ZzzHA.png",alt:"https://miro.medium.com/max/1400/1*u0oVzzJPCylM7aR47ZzzHA.png"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27",children:"Profiling graphql gateway with Chrome DevTools"}),"\xa0flame chart is not apparent if the function is small but there are many calls to it"]}),"\n",(0,n.jsxs)(t.p,{children:["Both turning on and removing them resulted in a 2x latency reduction from 700ms to 300ms for our test company. The reason at the time (as I understand) was that the time functions (like\xa0",(0,n.jsx)(t.em,{children:"performance.now()"}),") that measure spans for every resolver are too CPU-intensive."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=VnG7ej56lWw",children:"Ben here"}),"\xa0did a nice benchmark of different backend servers and confirmed this."]}),"\n",(0,n.jsx)(t.h2,{id:"consider-prefetching-on-frontend",children:(0,n.jsx)(t.strong,{children:"Consider prefetching on frontend"})}),"\n",(0,n.jsx)(t.p,{children:"The timing of graphql query on a frontend is tricky. I wanted to move the initial graphql request as early as possible (before vendors.js) in the network waterfall. Doing this granted us some time, but it made the webapp much less maintainable."}),"\n",(0,n.jsxs)(t.p,{children:["To make the query, you need\xa0",(0,n.jsx)(t.a,{href:"https://github.com/apollographql/apollo-client",children:"graphql client"}),"\xa0and\xa0",(0,n.jsx)(t.a,{href:"https://github.com/apollographql/graphql-tag",children:"gql literal parsing"}),"\xa0and these typically would come via vendors.js. Now you would either need to bundle them separately or make a query with\xa0",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",children:"raw fetch"}),". Even if you do make a raw request, you\u2019ll need to manage the response gracefully so that the response gets propagated into the correct models, (but those are initialized until later). So it made sense to not continue with this and maybe resort to server-side-rendering or\xa0",(0,n.jsx)(t.a,{href:"https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6",children:"service workers"}),"\xa0in the future."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*GZSPDEh_sZrYsl2OHxxG_A.png",alt:"https://miro.medium.com/max/1400/1*GZSPDEh_sZrYsl2OHxxG_A.png"})}),"\n",(0,n.jsx)(t.p,{children:"Moving /graphql call earlier in the chain of network requests (Google Chrome inspector)"}),"\n",(0,n.jsx)(t.h2,{id:"evaluate-query-complexity",children:(0,n.jsx)(t.strong,{children:"Evaluate query complexity"})}),"\n",(0,n.jsxs)(t.p,{children:["What makes graphql unique from REST is that you can estimate how complicated a client\u2019s request is going to be for your infrastructure before processing it. This is based purely on what he requests and how you define execution costs for your schema. If the estimated cost is too big, we reject the request, similar to our\xa0",(0,n.jsx)(t.a,{href:"https://pipedrive.readme.io/docs/core-api-concepts-rate-limiting",children:"rate limiting"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We first tried\xa0",(0,n.jsx)(t.a,{href:"https://github.com/pa-bru/graphql-cost-analysis",children:"graphql-cost-analysis"}),"\xa0library but ended up creating our own because we wanted logic to take into account pagination multipliers, nesting, and impact types (network, I/O, DB, CPU). Though the hardest part is injecting custom cost directive into gateway & schema-registry. I hope we can opensource it too in the near future."]}),"\n",(0,n.jsx)(t.h2,{id:"schema-has-many-faces",children:(0,n.jsx)(t.strong,{children:"Schema has many faces"})}),"\n",(0,n.jsx)(t.p,{children:"Working with schema in js/typescript on a low level is confusing. You figure it out when you try to integrate federation into your existing graphql service."}),"\n",(0,n.jsxs)(t.p,{children:["For example, plain\xa0",(0,n.jsx)(t.a,{href:"https://github.com/graphql-community/koa-graphql#options",children:"koa-graphql"}),"\xa0and\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/v1/servers/koa/",children:"apollo-server-koa"}),"\xa0setups expect a nested\xa0",(0,n.jsx)(t.a,{href:"https://github.com/graphql/graphql-js#using-graphqljs",children:(0,n.jsx)(t.strong,{children:"GraphQLSchema"})}),"\xa0param that includes resolvers, but federated apollo/server\xa0",(0,n.jsx)(t.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/implementing-services/#generating-a-federated-schema",children:"wants schema to be passed separately"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["buildFederatedSchema([",(typeDefs,resolvers),"])"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In another case, you may want to define schema as an inline\xa0",(0,n.jsx)(t.a,{href:"https://github.com/apollographql/graphql-tag",children:"gql tag"}),"\xa0string or store it as schema.graphql file, but when you want to do cost evaluation, you may need it as\xa0",(0,n.jsx)(t.a,{href:"https://github.com/graphql/graphql-js/blob/master/src/language/ast.js",children:"ASTNode"}),"\xa0(",(0,n.jsx)(t.a,{href:"https://github.com/graphql/graphql-js/blob/d4c82e0849318d045107321c6655c1a5da37b798/src/language/parser.d.ts#L58",children:"parse"}),"\xa0/\xa0",(0,n.jsx)(t.a,{href:"https://github.com/graphql/graphql-js/blob/dd0297302800347a20a192624ba6373ee86836a3/src/utilities/buildASTSchema.js#L121",children:"buildASTSchema"}),")."]}),"\n",(0,n.jsx)(t.h2,{id:"gradual-canary-rollout",children:(0,n.jsx)(t.strong,{children:"Gradual canary rollout"})}),"\n",(0,n.jsxs)(t.p,{children:["During the mission, we did a gradual rollout to all internal\xa0",(0,n.jsx)(t.strong,{children:"developers first"}),"\xa0to catch obvious errors."]}),"\n",(0,n.jsx)(t.p,{children:"By the end of the mission, in February, we released graphql only to 100 lucky companies. We then slowly rolled it out to 1000 \u2014 1%, 10%, 30%, 50%, and finally 100% of the customers finishing it in June."}),"\n",(0,n.jsx)(t.p,{children:"The rollout was based on company ID and modulo logic. We also had allow- and deny-lists for test companies and for cases when developers didn\u2019t want their companies to have graphql on yet. We also had an emergency off-switch that would revert it, which was handy during incidents to ease debugging"}),"\n",(0,n.jsx)(t.p,{children:"Considering how big of a change we did, it was a great way to get feedback and find bugs, while having lower risks for our customers."}),"\n",(0,n.jsx)(t.h1,{id:"hopes--dreams",children:(0,n.jsx)(t.strong,{children:"Hopes & dreams"})}),"\n",(0,n.jsxs)(t.p,{children:["To get all of the graphql benefits, we need to adopt mutations,\xa0",(0,n.jsx)(t.strong,{children:"subscriptions,"}),"\xa0and batch operations on a federated level. All of this needs teamwork & internal evangelism to expand the\xa0",(0,n.jsx)(t.strong,{children:"number of federated services."})]}),"\n",(0,n.jsxs)(t.p,{children:["Once graphql is stable and sufficient enough for our customers, it can become version 2 of our public API. A public launch would need directives to limit entity access based on\xa0",(0,n.jsx)(t.a,{href:"https://oauth.net/2/scope/",children:"OAuth scopes"}),"\xa0(for marketplace apps) and our\xa0",(0,n.jsx)(t.a,{href:"https://www.pipedrive.com/en/pricing",children:"product suites"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For schema-registry, we need\xa0",(0,n.jsx)(t.strong,{children:"tracking clients,"}),"\xa0and getting\xa0",(0,n.jsx)(t.strong,{children:"usage analytics"}),"\xa0for better deprecation experience,\xa0",(0,n.jsx)(t.strong,{children:"filtering"}),"/highlighting of schemas\u2019 costs & visibility,\xa0",(0,n.jsx)(t.strong,{children:"naming validation"}),", managing non-ephemeral\xa0",(0,n.jsx)(t.strong,{children:"persisted queries"}),", public schema\xa0",(0,n.jsx)(t.strong,{children:"change history"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["As we have services in\xa0",(0,n.jsx)(t.a,{href:"https://golang.org/",children:"go"}),", it's unclear how internal communication should happen \u2014 over GRPC for speed & reliability, or individual graphql endpoints, or via centralized internal graphql gateway? If GRPC is better only due to its binary nature, could we make graphql binary instead with\xa0",(0,n.jsx)(t.a,{href:"https://msgpack.org/",children:"msgpack"}),"?"]}),"\n",(0,n.jsxs)(t.p,{children:["As for the outside world, I hope Apollo\u2019s roadmap with\xa0",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=MvHzOwdLb_o",children:"project Constellation"}),"\xa0will optimize\xa0",(0,n.jsx)(t.em,{children:"Query planner"}),"\xa0in\xa0",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),"\xa0so that we don\u2019t see that 10%\xa0",(0,n.jsx)(t.em,{children:"gateway tax"}),"\xa0on performance, as well as enable flexible federation of services without their knowledge."]}),"\n",(0,n.jsx)(t.p,{children:"Exciting times to enjoy software development, full of complexity!"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);