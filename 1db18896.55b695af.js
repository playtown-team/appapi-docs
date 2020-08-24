(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(94)),i={id:"por-categorias",title:"Filtro por categor\xedas"},c={unversionedId:"por-categorias",id:"por-categorias",isDocsHomePage:!1,title:"Filtro por categor\xedas",description:"Endpoint",source:"@site/docs/por-categorias.md",permalink:"/appapi-docs/docs/por-categorias",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/por-categorias.md",sidebar:"someSidebar",previous:{title:"status",permalink:"/appapi-docs/docs/status"},next:{title:"Obtener por nombre",permalink:"/appapi-docs/docs/category"}},s=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Path y par\xe1metros",id:"path-y-par\xe1metros",children:[]},{value:"Ejemplo de respuesta",id:"ejemplo-de-respuesta",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"endpoint"},"Endpoint"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," https://nombredominio/wp-json/api/v3/articles/category/:category ")),Object(o.b)("h2",{id:"path-y-par\xe1metros"},"Path y par\xe1metros"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Nombre"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"https://nombredominio")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(o.b)("em",{parentName:"td"},"Este es el dominio del sitio que se quiere generar una API para React Native"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/wp-json/")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(o.b)("em",{parentName:"td"},"Este es el path por default de wordpress para todas las api"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(o.b)("em",{parentName:"td"},"Esta es la ruta definida por el plugin"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/v3/")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(o.b)("em",{parentName:"td"},"Esta es la versi\xf3n de la api, actualmente est\xe1 en la versi\xf3n 3"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/articles/")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(o.b)("em",{parentName:"td"},"Todo lo relacionado a art\xedculos se obtiene apartir de este path en adelante"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/category/")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(o.b)("em",{parentName:"td"},"Indica que el par\xe1metro de b\xfasqueda ser\xe1 un ",Object(o.b)("inlineCode",{parentName:"em"},"string")," y devolver\xe1 un array de art\xedculos"))))),Object(o.b)("h2",{id:"ejemplo-de-respuesta"},"Ejemplo de respuesta"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "data": [\n        {\n            "id": 18,\n            "type": "article",\n            "template": null,\n            "date": "hace 24 mins",\n            "title": "Cl\\u00e1sicos que deber\\u00edas ver",\n            "slug": "clasicos-que-deberias-ver",\n            "short_description": "Cl\\u00e1sicos que deber\\u00edas ver",\n            "author": null,\n            "author_avatar": "http:\\/\\/0.gravatar.com\\/avatar\\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",\n            "thumbnail": "http:\\/\\/multisitedemo.local\\/cineba\\/wp-content\\/uploads\\/sites\\/10\\/2020\\/08\\/photo-1521967906867-14ec9d64bee8-1200x800.jpeg"\n        },\n        {\n            "id": 11,\n            "type": "article",\n            "template": null,\n            "date": "hace 2 days",\n            "title": "10 mejores pel\\u00edculas de netflix",\n            "slug": "cacacac",\n            "short_description": "Llevamos la mitad de un 2020 que nadie en su sano juicio habr\\u00eda vaticinado jam\\u00e1s. Con las salas cerradas desde hace m\\u00e1s de dos meses, el streaming ha servido como v\\u00e1lvula de escape para espectadores sedientos de estrenos de estrenos. Vamos a repescar alguno de los m\\u00e1s llamativos que Netflix ha sacado en lo que llevamos de ",\n            "author": null,\n            "author_avatar": "http:\\/\\/0.gravatar.com\\/avatar\\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",\n            "thumbnail": "http:\\/\\/multisitedemo.local\\/cineba\\/wp-content\\/uploads\\/sites\\/10\\/2020\\/08\\/photo-1521967906867-14ec9d64bee8-1200x800.jpeg"\n        },\n        {\n            "id": "ad-7",\n            "type": "normal-ad"\n        },\n        {\n            "id": 7,\n            "type": "article",\n            "template": null,\n            "date": "hace 2 days",\n            "title": "Las 10 comedias de culto que todo el mundo deber\\u00eda ver",\n            "slug": "test",\n            "short_description": "En esta nota, una selecci\\u00f3n de pel\\u00edculas que se encuentran en las diferentes plataformas de streaming y que incluye desde los Monty Python y los hermanos Coen a Tim Burton o los Muppets. Una gu\\u00eda ideal para ir tras el efecto sanador de la risa en estos tiempos inciertos",\n            "author": null,\n            "author_avatar": "http:\\/\\/0.gravatar.com\\/avatar\\/c2b06ae950033b392998ada50767b50e?s=96&d=mm&r=g",\n            "thumbnail": "http:\\/\\/multisitedemo.local\\/cineba\\/wp-content\\/uploads\\/sites\\/10\\/2020\\/08\\/photo-1568876694728-451bbf694b83-1200x675.jpeg"\n        }\n    ],\n    "limit": 10,\n    "category": "cine",\n    "previous": "http:\\/\\/multisitedemo.local\\/cineba\\/wp-json\\/content\\/v3\\/articles\\/category\\/cine&limit=10&page=0",\n    "next": "http:\\/\\/multisitedemo.local\\/cineba\\/wp-json\\/content\\/v3\\/articles\\/category\\/cine&limit=10&page=1",\n    "status": "success",\n    "code": 200,\n    "message": "OK"\n}\n')))}p.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);