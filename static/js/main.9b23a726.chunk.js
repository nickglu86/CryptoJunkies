(this["webpackJsonpcrypto-site"]=this["webpackJsonpcrypto-site"]||[]).push([[0],{33:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),s=t(25),a=t.n(s),i=(t(33),t(8)),j=t.p+"static/media/logo.7b109fb6.png",o=t(0),l=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:j,alt:"Cypto Junkies logo"}),Object(o.jsx)("figcaption",{children:"Crypto Junkies"})]})}),Object(o.jsxs)("nav",{children:[Object(o.jsx)(i.b,{to:"/",children:"Crypto Index"}),Object(o.jsx)(i.b,{to:"/news",children:"News"}),Object(o.jsx)(i.b,{to:"/defi",children:"DeFi"}),Object(o.jsx)(i.b,{to:"/nft",children:"NFT"}),Object(o.jsx)(i.b,{to:"/metrics",children:"Metrics"}),Object(o.jsx)(i.b,{to:"/buycrypto",children:"Buy Crypto"})]})]})},d=t(2),b=t(11),p=t(12),h=t.n(p),u=function(e){var c=e.name,t=e.image,n=e.symbol,r=e.price,s=e.volume,a=e.priceChange,i=e.marketcap;return Object(o.jsx)("div",{className:"currency-container",children:Object(o.jsxs)("div",{className:"chart-row",children:[Object(o.jsxs)("div",{className:"coin",children:[Object(o.jsx)("img",{src:t,alt:"crypto"}),Object(o.jsx)("h2",{children:c}),Object(o.jsx)("p",{className:"coin-symbol",children:n})]}),Object(o.jsxs)("div",{className:"coin-data",children:[Object(o.jsxs)("p",{className:"coin-price",children:["$",r]}),Object(o.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),a<0?Object(o.jsxs)("p",{className:"coin-percent red",children:[a.toFixed(2),"%"]}):Object(o.jsxs)("p",{className:"coin-percent green",children:[a.toFixed(2),"%"]}),Object(o.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})};var m=function(){var e=Object(n.useState)([]),c=Object(b.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)(""),a=Object(b.a)(s,2),i=a[0],j=a[1];Object(n.useEffect)((function(){h.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var l=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"crypto-search",children:Object(o.jsx)("form",{children:Object(o.jsx)("input",{type:"text",placeholder:"Search",className:"search-input",onChange:function(e){j(e.target.value)}})})}),l.map((function(e){return Object(o.jsx)(u,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})},x=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"page-header",children:"CryptoIndex Page"}),Object(o.jsx)(m,{})]})},O=t(16),f=t.n(O),g=t(28),v=function(e){var c=e.title,t=e.description,n=e.url,r=e.urlToImage;return Object(o.jsx)("a",{href:n,children:Object(o.jsxs)("div",{className:"news-item",children:[Object(o.jsx)("img",{src:r,alt:"new image"}),Object(o.jsxs)("div",{className:"news-content",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsx)("p",{children:t})]})]})})},y=function(){var e=Object(n.useState)([]),c=Object(b.a)(e,2),t=c[0],r=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(g.a)(f.a.mark((function e(){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://newsapi.org/v2/everything?q=crypto&from=2021-08-30&sortBy=popularity&apiKey=2df2efdecd10476b97305d5c4a8b7825");case 2:c=e.sent,r(c.data.articles),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsx)("div",{className:"news-feed",children:t.map((function(e){var c=e.title,t=e.description,n=e.url,r=e.urlToImage;return Object(o.jsx)(v,{title:c,description:t,url:n,urlToImage:r})}))})},N=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"page-header",children:" News "}),Object(o.jsx)(y,{})]})},w=function(){return Object(o.jsx)("div",{className:"page-header",children:" DeFi Page "})},k=function(){return Object(o.jsx)("div",{className:"page-header",children:" NFT Page "})},C=function(){return Object(o.jsx)("div",{className:"page-header",children:" Metrics Page "})},_=function(){return Object(o.jsx)("div",{className:"page-header",children:" CryptoIndex Page "})},I=function(){return Object(o.jsxs)("div",{className:"404",children:[Object(o.jsx)("h2",{children:"404"}),Object(o.jsx)("h2",{children:"Page is Not found"})]})};var S=function(){return Object(o.jsx)(i.a,{basename:"/crypto-site",children:Object(o.jsxs)("main",{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",component:x,exact:!0}),Object(o.jsx)(d.a,{path:"/news",component:N}),Object(o.jsx)(d.a,{path:"/defi",component:w}),Object(o.jsx)(d.a,{path:"/nft",component:k}),Object(o.jsx)(d.a,{path:"/metrics",component:C}),Object(o.jsx)(d.a,{path:"/buycrypto",component:_}),Object(o.jsx)(d.a,{component:I})]})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.9b23a726.chunk.js.map