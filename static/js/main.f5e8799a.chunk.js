(this["webpackJsonpexpence-tracker"]=this["webpackJsonpexpence-tracker"]||[]).push([[0],[,,function(e,c,t){e.exports={wrapper:"CardList_wrapper__1of0c",card:"CardList_card__369kM",card__caption:"CardList_card__caption__3IyIK",card__content:"CardList_card__content__163_O",card__thumb:"CardList_card__thumb__27qkJ",card__snippet:"CardList_card__snippet__2rVXA",card__image:"CardList_card__image__2-vFb",card__title:"CardList_card__title__11j5K",card__button:"CardList_card__button__3Iho_",disclaimer:"CardList_disclaimer__sxG48",disclaimer__link:"CardList_disclaimer__link__TWORK"}},function(e,c,t){e.exports={wrapper:"Recipe_wrapper__38rIL",exit:"Recipe_exit__2ieUp",image:"Recipe_image__tM43C","image-container":"Recipe_image-container__2Iz85","recipe-container":"Recipe_recipe-container__2fivS"}},,function(e,c,t){e.exports={wrapper:"Form_wrapper__kssY0",form:"Form_form__1Q8o6","search-bar":"Form_search-bar__3s3mS","search-button":"Form_search-button__33vO3"}},,,,,function(e,c,t){e.exports={container:"Card_container__1OQ1S"}},,,,,,,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(1),r=t.n(a),n=t(8),s=t.n(n),i=t(4),o=r.a.createContext({recipe:{}}),d=t(0),l=function(e){var c=Object(a.useState)(!1),t=Object(i.a)(c,2),r=t[0],n=t[1],s=Object(a.useState)(),l=Object(i.a)(s,2),_=l[0],j=l[1],p={recipe:_,isShown:r,showRecipe:function(){n(!0),console.log(_),console.log(r)},hideRecipe:function(){n(!1)},addRecipe:function(e){j(e),n(!0)}};return Object(d.jsx)(o.Provider,{value:p,children:e.children})},_=t(7),j=t.n(_),p=t(9),b=t(5),h=t.n(b),u=function(e){return Object(d.jsx)("div",{className:h.a.wrapper,children:Object(d.jsxs)("form",{className:h.a.form,onSubmit:e.onSubmitHandler,children:[Object(d.jsx)("input",{value:e.value,onChange:e.onChangeHandler,className:h.a["search-bar"],type:"text"}),Object(d.jsx)("button",{className:h.a["search-button"],type:"submit",children:"search"})]})})},m=t(2),x=t.n(m),O=function(e){var c=Object(a.useContext)(o);return Object(d.jsx)("div",{className:x.a.wrapper,children:Object(d.jsx)("div",{className:x.a.card,children:Object(d.jsxs)("figure",{className:x.a.card__thumb,children:[Object(d.jsx)("img",{src:e.img,alt:e.label,className:x.a.card__image}),Object(d.jsx)("div",{className:x.a.card__content,children:Object(d.jsxs)("figcaption",{className:x.a.card__caption,children:[Object(d.jsx)("h2",{className:x.a.card__title,children:e.label}),Object(d.jsxs)("p",{className:x.a.card__snippet,children:[e.area," recipe for a ",e.category,"."]}),Object(d.jsx)("button",{className:x.a.card__button,onClick:c.addRecipe.bind(null,e.recipe),children:"Read more"})]})})]})})})},f=t(10),g=t.n(f),v=function(e){return Object(d.jsx)("div",{className:g.a.container,children:e.recipes.map((function(c){return Object(d.jsx)(O,{recipe:c,label:c.strMeal,img:c.strMealThumb,area:c.strArea,category:c.strCategory},e.recipes.indexOf(c))}))})},w=t(3),C=t.n(w),N=function(e){for(var c=Object(a.useContext)(o),t=[],r=1;r<=20&&c.recipe["strIngredient".concat(r)];r++)t.push("".concat(c.recipe["strIngredient".concat(r)]," - ").concat(c.recipe["strMeasure".concat(r)]));return Object(d.jsxs)("div",{className:C.a.wrapper,children:[Object(d.jsx)("span",{className:C.a.exit,onClick:c.hideRecipe,children:"X"}),Object(d.jsxs)("div",{className:C.a["recipe-container"],children:[Object(d.jsx)("h2",{children:c.recipe.strMeal}),Object(d.jsxs)("div",{className:C.a.ingredients,children:[Object(d.jsx)("h3",{children:"Ingredients"}),Object(d.jsx)("ul",{className:C.a["recipe-card__ingredients"],children:t.map((function(e){return Object(d.jsx)("li",{children:e},t.indexOf(e))}))})]}),Object(d.jsxs)("div",{className:C.a.method,children:[Object(d.jsx)("h3",{children:"Method"}),Object(d.jsx)("p",{children:c.recipe.strInstructions})]})]}),Object(d.jsx)("div",{className:C.a.image,children:Object(d.jsx)("div",{className:C.a["image-container"],children:Object(d.jsx)("img",{src:c.recipe.strMealThumb})})})]})},S=(t(17),function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),_=l[0],b=l[1],h=Object(a.useState)(!1),m=Object(i.a)(h,2),x=m[0],O=m[1],f=Object(a.useState)(null),g=Object(i.a)(f,2),w=g[0],C=g[1],S=Object(a.useContext)(o),k=function(){var e=Object(p.a)(j.a.mark((function e(c){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),O(!0),C(null),e.prev=3,e.next=6,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(_));case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Something went wrong!");case 9:return e.next=11,a.json();case 11:(r=e.sent).meals?n(r.meals):n([]),console.log(t),b(""),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),C(e.t0.message);case 20:O(!1);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(c){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"app-container",children:[S.isShown&&Object(d.jsx)(N,{}),!S.isShown&&Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("h1",{children:"Search for best recipe"}),Object(d.jsx)(u,{value:_,onChangeHandler:function(e){b(e.target.value)},onSubmitHandler:k}),!x&&t.length>0&&Object(d.jsx)(v,{recipes:t}),!x&&0===t.length&&Object(d.jsx)("h2",{children:"Found no recipes."}),x&&Object(d.jsx)("h2",{children:"Loading..."}),!x&&w&&Object(d.jsx)("h2",{children:w})]})]})});s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l,{children:Object(d.jsx)(S,{})})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f5e8799a.chunk.js.map