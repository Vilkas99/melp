(this.webpackJsonpmelp=this.webpackJsonpmelp||[]).push([[4],{194:function(e,t){},237:function(e,t,n){"use strict";n.r(t);var a,i,c,r=n(146),s=n.n(r),l=n(147),o=n(98),j=n(0),d=n.n(j),u=n(231),b=n(12),h=n(11),O=n(75),x=n(235),p=n(72),f=n(216),g=n(218),m=n(82),v=n(3),y=x.a.Title,w=m.a.div(a||(a=Object(O.a)(['\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg");\n  background-size: cover;\n\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  height: 100vh;\n  width: 100vw;\n\n  max-height: 100%;\n  max-height: 100%;\n\n  /**Paralaleja*/\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  position: relative;\n  z-index: 0;\n\n  &:before {\n    background: rgba(0, 0, 0, 0.6);\n    content: "";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 1200px) {\n    justify-content: center;\n  }\n']))),S=Object(m.a)(y)(i||(i=Object(O.a)(["\n  width: 100%;\n  &.ant-typography {\n    color: white;\n    font-size: 5rem;\n    margin: 0;\n    @media screen and (min-width: 1200px) {\n      justify-content: center;\n      font-size: 15rem;\n    }\n  }\n"]))),k=Object(m.a)(p.a)(c||(c=Object(O.a)(["\n  max-width: 60vw;\n  &.ant-typography {\n    color: white;\n  }\n  @media screen and (min-width: 1200px) {\n    max-width: 90vw;\n    width: 20vw;\n    height: 5vh;\n    font-size: 1.6rem;\n  }\n"]))),C=function(){return Object(v.jsx)(k,{type:"primary",shape:"round",onClick:function(){return window.scrollTo({top:900,behavior:"smooth"})},children:"Seach restaurants"})};var z=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(w,{children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(g.a,{span:24,style:{margin:"50px"},children:[Object(v.jsx)(S,{children:"Melp"}),Object(v.jsx)(C,{})]})})})})},F=n(58),A=n(83),R=n.n(A),M=n(247),T=n(246),E=n(238),D=n(243),L=n(244),I=E.a.Search,N=function(e){var t=e.setFiltro,n=e.options,a=e.title,i=e.value,c=Object(v.jsx)(D.a,{children:n.map((function(e,n){return Object(v.jsx)(D.a.Item,{icon:Object(v.jsx)(M.a,{}),onClick:function(){t(e.toLocaleLowerCase()),console.log(e)},children:e},n)}))});return Object(v.jsx)(L.a,{overlay:c,children:Object(v.jsxs)(p.a,{children:[""!=i?i:a," ",Object(v.jsx)(T.a,{})]})})},V=function(e){var t=e.setBusqueda,n=e.setFiltro,a=e.filtro,i=e.setTipoOrden,c=e.tipoOrden;return Object(v.jsx)(f.a,{style:{margin:"50px"},children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(I,{placeholder:"Fast fruit...",enterButton:!0,onChange:function(e){t(e.target.value)}}),Object(v.jsx)(N,{setFiltro:n,options:["Alphabet","Rating"],title:"Filter",value:a}),Object(v.jsx)(N,{setFiltro:i,options:["Asc","Desc"],title:"by...",value:c})]})})},q=n(239),B=n(234),P=n(241),K=n(240),G=n(225),H=n(226),J=n(227),_=n(228),U=n(229),W=n(230),Q=function(e){var t=e.frase,n="https://vilkas99.github.io/melp/";return Object(v.jsxs)(f.a,{children:[Object(v.jsx)(G.a,{url:n,quote:t,children:Object(v.jsx)(H.a,{round:!0,size:30})}),Object(v.jsx)(J.a,{url:n,via:t,children:Object(v.jsx)(_.a,{round:!0,size:30})}),Object(v.jsx)(U.a,{url:n,title:t,children:Object(v.jsx)(W.a,{round:!0,size:30})})]})};var X,Y,Z=function(e){var t=e.visible,n=e.setModal,a=e.data,i="I've found ".concat(a.name," in Melp! Go and visit it's website: ").concat(a.contact.site,"! ");return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(K.a,{title:a.name,visible:t,onOk:function(){n(!1)},onCancel:function(){n(!1)},children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)("h2",{children:"Contact"}),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Email: ",a.contact.email]}),Object(v.jsxs)("li",{children:["Phone: ",a.contact.phone]}),Object(v.jsxs)("li",{children:["Site: ",Object(v.jsx)("a",{href:a.contact.site,children:a.contact.site})]})]}),Object(v.jsx)(Q,{frase:i})]})})})})},$=B.a.Meta,ee=x.a.Title,te=Object(m.a)(B.a)(X||(X=Object(O.a)(["\n  width: 90vw;\n  height: 80vh;\n  margin-bottom: 50px;\n\n  @media screen and (min-width: 700px) {\n    margin-left: 15vw;\n    width: 65vw;\n    height: 80vh;\n    margin-right: 40px;\n  }\n\n  @media screen and (min-width: 900px) {\n    width: 25vw;\n    height: 60vh;\n    margin-right: 40px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-left: 30px;\n    width: 25vw;\n    height: 70vh;\n  }\n"]))),ne=function(e){var t=e.name,n=e.address,a=e.rating,i=e.data,c=Object(j.useState)(!1),r=Object(F.a)(c,2),s=r[0],l=r[1];return Object(v.jsx)(te,{hoverable:!0,cover:Object(v.jsx)("img",{alt:"example",src:"https://media-cdn.tripadvisor.com/media/photo-s/12/51/77/a2/intro-restaurant-plaza.jpg"}),children:Object(v.jsx)($,{title:Object(v.jsx)(ee,{level:4,children:t}),description:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Street: ",null===n||void 0===n?void 0:n.street]}),Object(v.jsxs)("li",{children:["City: ",null===n||void 0===n?void 0:n.city]}),Object(v.jsxs)("li",{children:["State: ",null===n||void 0===n?void 0:n.state]})]}),Object(v.jsx)(P.a,{disabled:!0,defaultValue:a}),Object(v.jsx)(p.a,{onClick:function(){l(!0)},children:"Show more..."}),Object(v.jsx)(Z,{visible:s,setModal:l,data:i})]})})})},ae=Object(m.a)(f.a)(Y||(Y=Object(O.a)(["\n  margin: 15px;\n  @media screen and (min-width: 1200px) {\n    margin-left: 50px;\n  }\n"]))),ie=function(e){var t=e.dataArray,n=e.busqueda;return Object(v.jsx)(ae,{type:"flex",align:"middle",justify:"center",children:t.map((function(e){return""==n||e.name.toLowerCase().includes(n.toLowerCase())?Object(v.jsx)(g.a,{xs:24,lg:8,flex:"900px",children:Object(v.jsx)(ne,{id:e.id,name:e.name,address:e.address,rating:e.rating,data:e},e.id)}):void 0}))})},ce=(n(16),function(e){var t=e.pedazosData,n=e.busqueda,a=e.filtro;return Object(v.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(v.jsxs)(q.a,{effect:"fade",children:[console.log(t),t.map((function(e){return Object(v.jsx)(ie,{dataArray:e,busqueda:n,filtro:a})}))]})})}),re=function(){var e=Object(j.useState)(""),t=Object(F.a)(e,2),n=t[0],a=t[1],i=Object(j.useState)(""),c=Object(F.a)(i,2),r=c[0],s=c[1],l=Object(j.useState)("desc"),o=Object(F.a)(l,2),d=o[0],u=o[1],O=Object(b.c)(h.c),x=R.a.chunk(O,3);if("alphabet"==r){var p=R.a.orderBy(O,[function(e){return e.name.toLocaleLowerCase()}],[d]);x=R.a.chunk(p,3)}else if("rating"==r){var f=R.a.orderBy(O,[function(e){return e.rating}],[d]);x=R.a.chunk(f,3)}return Object(v.jsxs)("div",{style:{display:"block",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)(V,{setBusqueda:a,setFiltro:s,filtro:r,setTipoOrden:u,tipoOrden:d}),Object(v.jsx)(ce,{pedazosData:x,busqueda:n,filtro:r})]})};var se=function(){return Object(v.jsx)(re,{})},le=n(245),oe=n(93),je=B.a.Meta,de=x.a.Title,ue=function(e){var t=e.data;return Object(v.jsx)(B.a,{style:{width:"150px"},cover:Object(v.jsx)("img",{alt:"example",src:"https://media-cdn.tripadvisor.com/media/photo-s/12/51/77/a2/intro-restaurant-plaza.jpg"}),children:Object(v.jsx)(je,{title:Object(v.jsx)(de,{level:4,children:t.name}),description:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsx)(P.a,{style:{fontSize:12},disabled:!0,defaultValue:t.rating}),Object(v.jsx)(p.a,{children:"Show more..."})]})})})},be=function(e){var t=e.location,n=e.data,a=Object(j.useState)(!1),i=Object(F.a)(a,2),c=i[0],r=i[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(oe.e,{position:t,label:"R",onClick:function(){return r(!c)}}),c&&Object(v.jsx)(oe.c,{position:t,children:Object(v.jsx)(ue,{data:n})})]})},he=n(236),Oe=x.a.Title,xe=function(e){var t=e.setRadio,n=e.defaultValue,a=e.range,i=e.title,c=e.multiple;return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(Oe,{level:5,children:i}),Object(v.jsx)(he.a,{range:c,defaultValue:n,onChange:function(e){return t(e)},min:a[0],max:a[1]})]})},pe=function(e){var t=e.setRadio,n=e.setRating;return Object(v.jsx)("div",{style:{marginTop:"25px"},children:Object(v.jsx)(B.a,{children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(g.a,{span:24,children:[Object(v.jsx)(xe,{setRadio:t,defaultValue:3e4,range:[300,1e3],title:"Select Radius"}),Object(v.jsx)(xe,{setRadio:n,defaultValue:[1,4],range:[1,4],title:"Select Rating",multiple:!0})]})})})})},fe=n(242),ge=n(233),me=B.a.Meta,ve=x.a.Title,ye=fe.a.Panel,we=function(e){var t=e.marcadores,n=e.promedio,a=e.desviacionStd;return Object(v.jsx)(B.a,{children:Object(v.jsx)(me,{title:Object(v.jsx)(ve,{level:4,children:"Statistics"}),description:Object(v.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Total: ",t.length]}),Object(v.jsxs)("li",{children:["Average of rating: ",n]}),Object(v.jsxs)("li",{children:["Standar Deviation: ",a]})]})})})})},Se=function(e){var t=e.marcadores,n=e.rango,a=Object(j.useState)([]),i=Object(F.a)(a,2),c=i[0],r=i[1];return Object(j.useEffect)((function(){var e=R.a.filter(t,(function(e){return e.rating>=n[0]&&e.rating<=n[1]}));console.log("Filtrando por ".concat(n," a :").concat(e," ")),r(e)}),[t,n]),Object(v.jsx)(B.a,{children:Object(v.jsx)(fe.a,{children:c.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(ye,{header:Object(v.jsxs)(g.a,{children:[Object(v.jsx)("h3",{children:e.name}),Object(v.jsx)(P.a,{defaultValue:e.rating,disabled:!0,count:4})]}),children:[Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Street: ",e.address.street]}),Object(v.jsxs)("li",{children:["City: ",e.address.city]}),Object(v.jsxs)("li",{children:["State: ",e.address.State]})]}),Object(v.jsx)(p.a,{children:"Show more..."})]},e.id)})}))})})};var ke=function(e){var t=e.marcadores,n=e.rango,a=Object(j.useState)(0),i=Object(F.a)(a,2),c=i[0],r=i[1],s=Object(j.useState)([]),l=Object(F.a)(s,2),o=(l[0],l[1]),d=Object(j.useState)(0),u=Object(F.a)(d,2),b=u[0],h=u[1],O=function(){var e=0,n=[];t.forEach((function(t){e+=null===t||void 0===t?void 0:t.rating,n.push(null===t||void 0===t?void 0:t.rating)})),e/=null===t||void 0===t?void 0:t.length,r(e),o(n),function(e){e.length>1?(console.log("Mis ratings: ",e),h(Object(ge.a)(e))):console.log("No hay ratings para la STD")}(n),console.log("Obtuvimos el promedio: ",e)};return Object(j.useEffect)((function(){t.length>=1?(console.log("Estamos calculando: ",t),O()):(console.log("No hay suficientes datos"),r(0),h(0))}),[t]),Object(v.jsx)(f.a,{gutter:{xs:12},children:Object(v.jsxs)(g.a,{xs:24,m:12,flex:"auto",children:[Object(v.jsx)(we,{marcadores:t,promedio:c,desviacionStd:b}),Object(v.jsx)(Se,{marcadores:t,rango:n})]})})};function Ce(e){var t=e.restaurant,n=e.estilo,a=Object(j.useState)(null),i=Object(F.a)(a,2),c=i[0],r=i[1],s=Object(j.useState)(!1),l=Object(F.a)(s,2),o=l[0],d=l[1],u=Object(j.useState)(3e3),O=Object(F.a)(u,2),x=O[0],p=O[1],m=Object(j.useState)([1,4]),y=Object(F.a)(m,2),w=y[0],S=y[1],k=Object(j.useState)([]),C=Object(F.a)(k,2),z=C[0],A=C[1],R=Object(j.useState)({lat:-3.745,lng:-38.523}),M=Object(F.a)(R,2),T=M[0],E=M[1],D=Object(b.c)(h.c);Object(j.useEffect)((function(){!t&&navigator.geolocation.getCurrentPosition((function(e){E({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]);var L={strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:x,zIndex:1};return Object(v.jsxs)(f.a,{style:{margin:"20px"},children:[Object(v.jsx)(g.a,{xl:12,flex:"auto",style:{padding:"2rem"},children:Object(v.jsxs)(oe.d,{googleMapsApiKey:"AIzaSyChAKNN_dBGE-2OKMP9ljjMHv3784CRvO8",children:[Object(v.jsxs)(oe.b,{mapContainerStyle:n,center:T,zoom:10,onClick:function(e){return function(e){var t=[];r(e.latLng),d(!0),D.map((function(n){Math.ceil(Object(le.a)(e.latLng,n.address.location))<x&&t.push(n)})),A(t),console.log("Mis marcadores: ",z)}(e)},children:[D&&D.map((function(e,t){return Object(v.jsx)(be,{location:null===e||void 0===e?void 0:e.address.location,data:e},t)})),o&&Object(v.jsx)(oe.e,{position:c,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}),o&&Object(v.jsx)(oe.a,{center:c,options:L}),Object(v.jsx)(v.Fragment,{})]}),Object(v.jsx)(pe,{setRadio:p,setRating:S,style:{margin:"20px"}})]})}),Object(v.jsx)(g.a,{xl:12,flex:"1024px",style:{padding:"2rem"},children:Object(v.jsx)(ke,{marcadores:z,rango:w})})]})}var ze=d.a.memo(Ce);n(13);var Fe=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(ze,{estilo:{padding:"2rem",height:"400px"}})})},Ae=n(196),Re=n.n(Ae);t.default=function(){u.a.Header,u.a.Footer,u.a.Sider;var e=u.a.Content,t=Object(b.b)(),n={headers:Object(o.a)({"Access-Control-Allow-Origin":"https://vilkas99.github.io/melp/"},"Access-Control-Allow-Origin",!0)};return Object(j.useEffect)((function(){console.log("Esta es la \xdaLTIMA VERSI\xd3N"),function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.get("https://api-melb.herokuapp.com/getData",n).then((function(e){console.log("NUESTRO DATOS FINALES: ",e),t(Object(h.b)(e.data))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(v.jsx)(u.a,{children:Object(v.jsxs)(e,{children:[Object(v.jsx)(z,{}),Object(v.jsx)(se,{}),Object(v.jsx)(Fe,{})]})})}}}]);
//# sourceMappingURL=4.6dbc573b.chunk.js.map