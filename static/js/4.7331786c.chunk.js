(this.webpackJsonpmelp=this.webpackJsonpmelp||[]).push([[4],{196:function(e,t){},239:function(e,t,n){"use strict";n.r(t);var a,i,c,r=n(148),s=n.n(r),l=n(149),o=n(102),j=n(0),d=n.n(j),u=n(233),b=n(11),h=n(12),O=n(75),x=n(237),p=n(71),f=n(218),g=n(220),m=n(82),v=n(3),w=x.a.Title,y=m.a.div(a||(a=Object(O.a)(['\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg");\n  background-size: cover;\n\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  height: 100vh;\n  width: 100vw;\n\n  max-height: 100%;\n  max-height: 100%;\n\n  /**Paralaleja*/\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  position: relative;\n  z-index: 0;\n\n  &:before {\n    background: rgba(0, 0, 0, 0.6);\n    content: "";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 1200px) {\n    justify-content: center;\n  }\n']))),S=Object(m.a)(w)(i||(i=Object(O.a)(["\n  width: 100%;\n  &.ant-typography {\n    color: white;\n    font-size: 5rem;\n    margin: 0;\n    @media screen and (min-width: 1200px) {\n      justify-content: center;\n      font-size: 15rem;\n    }\n  }\n"]))),k=Object(m.a)(p.a)(c||(c=Object(O.a)(["\n  max-width: 60vw;\n  &.ant-typography {\n    color: white;\n  }\n  @media screen and (min-width: 1200px) {\n    max-width: 90vw;\n    width: 20vw;\n    height: 5vh;\n    font-size: 1.6rem;\n  }\n"]))),C=function(){return Object(v.jsx)(k,{type:"primary",shape:"round",onClick:function(){return window.scrollTo({top:900,behavior:"smooth"})},children:"Seach restaurants"})};var z=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y,{children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(g.a,{span:24,style:{margin:"50px"},children:[Object(v.jsx)(S,{children:"Melp"}),Object(v.jsx)(C,{})]})})})})},A=n(56),F=n(83),M=n.n(F),R=n(247),T=n(250),E=n(249),I=n(240),D=n(245),L=n(246),N=I.a.Search,V=function(e){var t=e.setFiltro,n=e.options,a=e.title,i=e.value,c=Object(v.jsx)(D.a,{children:n.map((function(e,n){return Object(v.jsx)(D.a.Item,{icon:Object(v.jsx)(T.a,{}),onClick:function(){t(e.toLocaleLowerCase()),console.log(e)},children:e},n)}))});return Object(v.jsx)(L.a,{overlay:c,children:Object(v.jsxs)(p.a,{children:[""!=i?i:a," ",Object(v.jsx)(E.a,{})]})})},q=function(e){var t=e.setBusqueda,n=e.setFiltro,a=e.filtro,i=e.setTipoOrden,c=e.tipoOrden;return Object(v.jsx)(f.a,{style:{margin:"50px"},children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(N,{placeholder:"Fast fruit...",enterButton:!0,onChange:function(e){t(e.target.value)}}),Object(v.jsx)(V,{setFiltro:n,options:["Alphabet","Rating"],title:"Filter",value:a}),Object(v.jsx)(V,{setFiltro:i,options:["Asc","Desc"],title:"by...",value:c})]})})},B=n(241),P=n(236),H=n(243),K=n(242),G=n(227),J=n(228),_=n(229),U=n(230),W=n(231),Q=n(232),X=function(e){var t=e.frase,n="https://vilkas99.github.io/melp/";return Object(v.jsxs)(f.a,{children:[Object(v.jsx)(G.a,{url:n,quote:t,children:Object(v.jsx)(J.a,{round:!0,size:30})}),Object(v.jsx)(_.a,{url:n,via:t,children:Object(v.jsx)(U.a,{round:!0,size:30})}),Object(v.jsx)(W.a,{url:n,title:t,children:Object(v.jsx)(Q.a,{round:!0,size:30})})]})};var Y,Z,$=function(e){var t=e.visible,n=e.setModal,a=e.data,i="I've found ".concat(a.name," in Melp! Go and visit it's website: ").concat(a.contact.site,"! ");return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(K.a,{title:a.name,visible:t,onOk:function(){n(!1)},onCancel:function(){n(!1)},children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)("h2",{children:"Contact"}),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Email: ",a.contact.email]}),Object(v.jsxs)("li",{children:["Phone: ",a.contact.phone]}),Object(v.jsxs)("li",{children:["Site: ",Object(v.jsx)("a",{href:a.contact.site,children:a.contact.site})]})]}),Object(v.jsx)(X,{frase:i})]})})})})},ee=P.a.Meta,te=x.a.Title,ne=Object(m.a)(P.a)(Y||(Y=Object(O.a)(["\n  width: 90vw;\n  height: 80vh;\n  margin-bottom: 50px;\n\n  @media screen and (min-width: 700px) {\n    margin-left: 15vw;\n    width: 65vw;\n    height: 80vh;\n    margin-right: 40px;\n  }\n\n  @media screen and (min-width: 900px) {\n    width: 25vw;\n    height: 60vh;\n    margin-right: 40px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-left: 30px;\n    width: 25vw;\n    height: 70vh;\n  }\n"]))),ae=function(e){var t=e.name,n=e.address,a=e.rating,i=e.data,c=Object(j.useState)(!1),r=Object(A.a)(c,2),s=r[0],l=r[1];return Object(v.jsx)(ne,{hoverable:!0,cover:Object(v.jsx)("img",{alt:"example",src:"https://media-cdn.tripadvisor.com/media/photo-s/12/51/77/a2/intro-restaurant-plaza.jpg"}),children:Object(v.jsx)(ee,{title:Object(v.jsx)(te,{level:4,children:t}),description:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Street: ",null===n||void 0===n?void 0:n.street]}),Object(v.jsxs)("li",{children:["City: ",null===n||void 0===n?void 0:n.city]}),Object(v.jsxs)("li",{children:["State: ",null===n||void 0===n?void 0:n.state]})]}),Object(v.jsx)(H.a,{disabled:!0,defaultValue:a}),Object(v.jsx)(p.a,{onClick:function(){l(!0)},children:"Show more..."}),Object(v.jsx)($,{visible:s,setModal:l,data:i})]})})})},ie=Object(m.a)(f.a)(Z||(Z=Object(O.a)(["\n  margin: 15px;\n  @media screen and (min-width: 1200px) {\n    margin-left: 50px;\n  }\n"]))),ce=function(e){var t=e.dataArray,n=e.busqueda;return Object(v.jsx)(ie,{type:"flex",align:"middle",justify:"center",children:t.map((function(e){return""==n||e.name.toLowerCase().includes(n.toLowerCase())?Object(v.jsx)(g.a,{xs:24,lg:8,flex:"900px",children:Object(v.jsx)(ae,{id:e.id,name:e.name,address:e.address,rating:e.rating,data:e},e.id)}):void 0}))})},re=(n(15),function(e){var t=e.pedazosData,n=e.busqueda,a=e.filtro;return Object(v.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(v.jsxs)(B.a,{effect:"fade",children:[console.log(t),t.map((function(e){return Object(v.jsx)(ce,{dataArray:e,busqueda:n,filtro:a})}))]})})}),se=function(){var e=Object(j.useState)(""),t=Object(A.a)(e,2),n=t[0],a=t[1],i=Object(j.useState)(""),c=Object(A.a)(i,2),r=c[0],s=c[1],l=Object(j.useState)("desc"),o=Object(A.a)(l,2),d=o[0],u=o[1],O=Object(b.c)(h.c),x=M.a.chunk(O,3);if("alphabet"==r){var p=M.a.orderBy(O,[function(e){return e.name.toLocaleLowerCase()}],[d]);x=M.a.chunk(p,3)}else if("rating"==r){var f=M.a.orderBy(O,[function(e){return e.rating}],[d]);x=M.a.chunk(f,3)}return Object(v.jsxs)("div",{style:{display:"block",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)(R.a,{message:"If the data shown is not the one from the API, wait a couple of seconds until the server wakes up (It's running in a free Heroku plan)",type:"warning",showIcon:!0,closable:!0,style:{width:"320px"}}),Object(v.jsx)(q,{setBusqueda:a,setFiltro:s,filtro:r,setTipoOrden:u,tipoOrden:d}),Object(v.jsx)(re,{pedazosData:x,busqueda:n,filtro:r})]})};var le=function(){return Object(v.jsx)(se,{})},oe=n(248),je=n(93),de=P.a.Meta,ue=x.a.Title,be=function(e){var t=e.data,n=Object(j.useState)(!1),a=Object(A.a)(n,2),i=a[0],c=a[1];return Object(v.jsx)(P.a,{style:{width:"150px"},cover:Object(v.jsx)("img",{alt:"example",src:"https://media-cdn.tripadvisor.com/media/photo-s/12/51/77/a2/intro-restaurant-plaza.jpg"}),children:Object(v.jsx)(de,{title:Object(v.jsx)(ue,{level:4,children:t.name}),description:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsx)(H.a,{style:{fontSize:12},disabled:!0,defaultValue:t.rating}),Object(v.jsx)(p.a,{onClick:function(){return c(!i)},children:"Show more..."}),Object(v.jsx)($,{visible:i,setModal:c,data:t})]})})})},he=function(e){var t=e.location,n=e.data,a=Object(j.useState)(!1),i=Object(A.a)(a,2),c=i[0],r=i[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(je.e,{position:t,label:"R",onClick:function(){return r(!c)}}),c&&Object(v.jsx)(je.c,{position:t,children:Object(v.jsx)(be,{data:n})})]})},Oe=n(238),xe=x.a.Title,pe=function(e){var t=e.setRadio,n=e.defaultValue,a=e.range,i=e.title,c=e.multiple;return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(xe,{level:5,children:i}),Object(v.jsx)(Oe.a,{range:c,defaultValue:n,onChange:function(e){return t(e)},min:a[0],max:a[1]})]})},fe=function(e){var t=e.setRadio,n=e.setRating;return Object(v.jsx)("div",{style:{marginTop:"25px"},children:Object(v.jsx)(P.a,{children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(g.a,{span:24,children:[Object(v.jsx)(pe,{setRadio:t,defaultValue:3e4,range:[300,1e3],title:"Select Radius"}),Object(v.jsx)(pe,{setRadio:n,defaultValue:[1,4],range:[1,4],title:"Select Rating",multiple:!0})]})})})})},ge=n(244),me=n(235),ve=P.a.Meta,we=x.a.Title,ye=ge.a.Panel,Se=function(e){var t=e.marcadores,n=e.promedio,a=e.desviacionStd;return Object(v.jsx)(P.a,{children:Object(v.jsx)(ve,{title:Object(v.jsx)(we,{level:4,children:"Statistics"}),description:Object(v.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Total: ",t.length]}),Object(v.jsxs)("li",{children:["Average of rating: ",n]}),Object(v.jsxs)("li",{children:["Standar Deviation: ",a]})]})})})})},ke=function(e){var t=e.marcadores,n=e.rango,a=Object(j.useState)(!1),i=Object(A.a)(a,2),c=i[0],r=i[1],s=Object(j.useState)([]),l=Object(A.a)(s,2),o=l[0],d=l[1];return Object(j.useEffect)((function(){var e=M.a.filter(t,(function(e){return e.rating>=n[0]&&e.rating<=n[1]}));console.log("Filtrando por ".concat(n," a :").concat(e," ")),d(e)}),[t,n]),Object(v.jsx)(P.a,{children:Object(v.jsx)(ge.a,{children:o.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(ye,{header:Object(v.jsxs)(g.a,{children:[Object(v.jsx)("h3",{children:e.name}),Object(v.jsx)(H.a,{defaultValue:e.rating,disabled:!0,count:4})]}),children:[Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Street: ",e.address.street]}),Object(v.jsxs)("li",{children:["City: ",e.address.city]}),Object(v.jsxs)("li",{children:["State: ",e.address.state]})]}),Object(v.jsx)(p.a,{onClick:function(){return r(!c)},children:"Show more..."}),Object(v.jsx)($,{visible:c,setModal:r,data:e})]},e.id)})}))})})};var Ce=function(e){var t=e.marcadores,n=e.rango,a=e.data,i=Object(j.useState)(0),c=Object(A.a)(i,2),r=c[0],s=c[1],l=Object(j.useState)([]),o=Object(A.a)(l,2),d=(o[0],o[1]),u=Object(j.useState)(0),b=Object(A.a)(u,2),h=b[0],O=b[1],x=function(){var e=0,n=[];t.forEach((function(t){e+=null===t||void 0===t?void 0:t.rating,n.push(null===t||void 0===t?void 0:t.rating)})),e/=null===t||void 0===t?void 0:t.length,s(e),d(n),function(e){e.length>1?(console.log("Mis ratings: ",e),O(Object(me.a)(e))):console.log("No hay ratings para la STD")}(n),console.log("Obtuvimos el promedio: ",e)};return Object(j.useEffect)((function(){t.length>=1?(console.log("Estamos calculando: ",t),x()):(console.log("No hay suficientes datos"),s(0),O(0))}),[t]),Object(v.jsx)(f.a,{gutter:{xs:12},children:Object(v.jsxs)(g.a,{xs:24,m:12,flex:"auto",children:[Object(v.jsx)(Se,{marcadores:t,promedio:r,desviacionStd:h}),Object(v.jsx)(ke,{marcadores:t,rango:n,data:a})]})})};function ze(e){var t=e.restaurant,n=e.estilo,a=Object(j.useState)(null),i=Object(A.a)(a,2),c=i[0],r=i[1],s=Object(j.useState)(!1),l=Object(A.a)(s,2),o=l[0],d=l[1],u=Object(j.useState)(3e3),O=Object(A.a)(u,2),x=O[0],p=O[1],m=Object(j.useState)([1,4]),w=Object(A.a)(m,2),y=w[0],S=w[1],k=Object(j.useState)([]),C=Object(A.a)(k,2),z=C[0],F=C[1],M=Object(j.useState)({lat:-3.745,lng:-38.523}),R=Object(A.a)(M,2),T=R[0],E=R[1],I=Object(b.c)(h.c);Object(j.useEffect)((function(){!t&&navigator.geolocation.getCurrentPosition((function(e){E({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]);var D={strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:x,zIndex:1};return Object(v.jsxs)(f.a,{style:{margin:"20px"},children:[Object(v.jsx)(g.a,{xl:12,flex:"auto",style:{padding:"2rem"},children:Object(v.jsxs)(je.d,{googleMapsApiKey:"AIzaSyChAKNN_dBGE-2OKMP9ljjMHv3784CRvO8",children:[Object(v.jsxs)(je.b,{mapContainerStyle:n,center:T,zoom:10,onClick:function(e){return function(e){var t=[];r(e.latLng),d(!0),I.map((function(n){Math.ceil(Object(oe.a)(e.latLng,n.address.location))<x&&t.push(n)})),F(t),console.log("Mis marcadores: ",z)}(e)},children:[I&&I.map((function(e,t){return Object(v.jsx)(he,{location:null===e||void 0===e?void 0:e.address.location,data:e},t)})),o&&Object(v.jsx)(je.e,{position:c,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}),o&&Object(v.jsx)(je.a,{center:c,options:D}),Object(v.jsx)(v.Fragment,{})]}),Object(v.jsx)(fe,{setRadio:p,setRating:S,style:{margin:"20px"}})]})}),Object(v.jsx)(g.a,{xl:12,flex:"1024px",style:{padding:"2rem"},children:Object(v.jsx)(Ce,{marcadores:z,rango:y})})]})}var Ae=d.a.memo(ze);var Fe=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(Ae,{estilo:{padding:"2rem",height:"400px"}})})},Me=n(198),Re=n.n(Me);t.default=function(){u.a.Header,u.a.Footer,u.a.Sider;var e=u.a.Content,t=Object(b.b)(),n={headers:Object(o.a)({"Access-Control-Allow-Origin":"https://vilkas99.github.io/melp/"},"Access-Control-Allow-Origin",!0)};return Object(j.useEffect)((function(){console.log("Esta es la \xdaLTIMA VERSI\xd3N"),function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.get("https://api-melb.herokuapp.com/getData",n).then((function(e){console.log("NUESTRO DATOS FINALES: ",e),t(Object(h.b)(e.data))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(v.jsx)(u.a,{children:Object(v.jsxs)(e,{children:[Object(v.jsx)(z,{}),Object(v.jsx)(le,{}),Object(v.jsx)(Fe,{})]})})}}}]);
//# sourceMappingURL=4.7331786c.chunk.js.map