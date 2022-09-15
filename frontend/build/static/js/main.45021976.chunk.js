(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),r=n.n(s),i=(n(17),n(9)),o=n(24),l=n(2),u=n(3),p=n(8),d=n(0);var j=function(e){var t=e.onSignOut,n=e.userData;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"header__logo"}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__user-email-logout",children:[Object(d.jsx)("p",{className:"header__user-email",children:n.email}),Object(d.jsx)(p.b,{to:"login",className:"header__logout-link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsx)(u.b,{path:"/register",children:Object(d.jsx)(p.b,{to:"login",className:"header__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(u.b,{path:"/login",children:Object(d.jsx)(p.b,{to:"register",className:"header__login-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})};var b=function(){var e=new Date;return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__author",children:["\xa9 ",e.getFullYear(),". Mesto-React. \u041c\u0430\u0440\u0438\u043d\u0430 \u0412\u0438\u0440\u0438\u044f\u043b\u043e\u0432\u0430"]})})};function h(e){return Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{src:e.currentUser.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__title",children:[Object(d.jsx)("h1",{className:"profile__title-text",children:e.currentUser.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__subtitle-text",children:e.currentUser.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:e.onAddPlace})]})}var m=c.a.createContext();function _(e){var t=Object(a.useContext)(m);return Object(d.jsxs)("li",{className:"element",children:[e.card.owner===t._id&&Object(d.jsx)("button",{type:"button",className:"element__delete-button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){return e.onCardDelete(e.card)}}),Object(d.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:function(){return e.onCardClick(e.card)}}),Object(d.jsxs)("div",{className:"element__description",children:[Object(d.jsx)("h2",{className:"element__title",children:e.card.name}),Object(d.jsxs)("div",{className:"element__likes",children:[Object(d.jsx)("button",{type:"button",className:"element__like-button ".concat(e.card.likes.some((function(e){return e._id===t._id}))?"element__like-button_active":""),"aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){return e.onCardLike(e.card)}}),Object(d.jsx)("span",{className:"element__likes-number",children:e.card.likes.length?e.card.likes.length:""})]})]})]})}function O(e){return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"elements",children:e.children})})}function f(e){var t=Object(a.useContext)(m);return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,Object(i.a)({currentUser:t},e)),Object(d.jsx)(O,{children:e.cards.map((function(t){return Object(d.jsx)(_,{card:t,onCardDelete:e.onCardDelete,onCardClick:e.onCardClick,onCardLike:e.onCardLike},t._id)}))})]})}function x(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:e.onClose,children:Object(d.jsxs)("div",{className:"popup__container",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("h3",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),method:"POST",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{type:"submit",className:"popup__submit","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",children:e.buttonText})]})]})})}function v(e){var t=Object(a.useContext)(m),n=Object(a.useState)(t.name),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(t.about),o=Object(l.a)(i,2),u=o[0],p=o[1];return Object(a.useEffect)((function(){r(t.name),p(t.about)}),[t,e.isOpen]),Object(d.jsxs)(x,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},children:[Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_text_name",placeholder:"\u0418\u043c\u044f",name:"userName",id:"user-name",minLength:"2",maxLength:"40",required:!0,value:s||"",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("span",{className:"name-error popup__form-error"}),Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_text_work",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",name:"userJob",id:"user-job",minLength:"2",maxLength:"200",required:!0,value:u||"",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("span",{className:"profession-error popup__form-error popup__form-error_pos_under"})]})}function g(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current.value=""}),[e.isOpen]),Object(d.jsxs)(x,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(d.jsx)("input",{ref:t,type:"url",className:"popup__input popup__input_value_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatarLink",id:"avatar-link",required:!0}),Object(d.jsx)("span",{className:"avatar-link-error popup__form-error-msg"})]})}function k(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){s(""),u("")}),[e.isOpen]),Object(d.jsxs)(x,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({link:c,name:o})},children:[Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_value_pic-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"picName",id:"pic-name",minLength:"2",maxLength:"30",required:!0,value:o,onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("span",{className:"title-error popup__form-error"}),Object(d.jsx)("input",{type:"url",className:"popup__input popup__input_value_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"picLink",id:"pic-link",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("span",{className:"link-error popup__form-error popup__form-error_pos_under"})]})}function C(e){return Object(d.jsx)("div",{className:"popup popup_type_pic ".concat(e.isOpen?"popup_opened":""),onClick:e.onClose,children:Object(d.jsxs)("figure",{className:"popup__pic-container",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("img",{src:e.data.link,alt:e.data.name,className:"popup__pic"}),Object(d.jsx)("figcaption",{className:"popup__pic-title",children:e.data.name})]})})}function N(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:e.onClose,children:Object(d.jsxs)("div",{className:"popup__container",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("div",{className:"popup__success ".concat(e.isSuccess?"":"popup__success_type_unsuccess")}),Object(d.jsx)("h3",{className:"popup__title popup__title_type_info-tooltip",children:"".concat(e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")})]})})}function y(e){var t=e.onLoginSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],p=o[1];return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h3",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t(u,s)},children:[Object(d.jsx)("input",{type:"email",className:"login__input",placeholder:"E-mail",name:"email",id:"email",required:!0,value:s||"",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"password",required:!0,value:u||"",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"login__submit","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function S(e){var t=e.onRegisterSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(d.jsxs)("div",{className:"register",children:[Object(d.jsx)("h3",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),t(u,s)},children:[Object(d.jsx)("input",{type:"email",className:"register__input",placeholder:"E-mail",name:"email",id:"email",required:!0,value:s||"",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"password",required:!0,value:u||"",onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"register__submit","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("div",{className:"register__login",children:[Object(d.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0"}),Object(d.jsx)(p.b,{to:"login",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var U=n(25),E=["component"],T=function(e){var t=e.component,n=Object(U.a)(e,E);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(i.a)({},n)):Object(d.jsx)(u.a,{to:"/login"})}})},w=n(22),L=n(23),D=new(function(){function e(t){Object(w.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(L.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers,credentials:"include"}).then((function(t){return e._handleResponse(t)}))}},{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers,credentials:"include"}).then((function(t){return e._handleResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about}),credentials:"include"}).then((function(e){return t._handleResponse(e)}))}},{key:"editUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar}),credentials:"include"}).then((function(e){return t._handleResponse(e)}))}},{key:"postCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link}),credentials:"include"}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return t._handleResponse(e)}))}},{key:"_makeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers,credentials:"include"}).then((function(e){return t._handleResponse(e)}))}},{key:"_makeUnlike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return t._handleResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._makeUnlike(e):this._makeLike(e)}}]),e}())({baseUrl:"https://api.viriyalova-mesto.nomoredomains.work",headers:{"Content-Type":"application/json"}}),P="https://api.viriyalova-mesto.nomoredomains.work";function A(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var R=function(e,t){return fetch("".concat(P,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({password:e,email:t})}).then((function(e){return A(e)})).then((function(e){var t;(t=e?e.token:null)?localStorage.setItem("jwt",t):console.error("No token")}))};var I=function(){var e=Object(u.g)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),p=Object(l.a)(r,2),h=p[0],_=p[1],O=Object(a.useState)(!1),U=Object(l.a)(O,2),E=U[0],w=U[1],L=Object(a.useState)({isOpen:!1,cardToDelete:{}}),I=Object(l.a)(L,2),q=I[0],J=I[1],G=Object(a.useState)({isOpen:!1,data:{}}),H=Object(l.a)(G,2),B=H[0],F=H[1],M=Object(a.useState)({}),Y=Object(l.a)(M,2),z=Y[0],K=Y[1],Q=Object(a.useState)([]),V=Object(l.a)(Q,2),W=V[0],X=V[1],Z=Object(a.useState)({isOpen:!1,isSuccess:!0}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],re=z&&z._id;function ie(){s(!1),_(!1),w(!1),J({isOpen:!1,cardToDelete:{}}),F({isOpen:!1,data:B.data}),te({isOpen:!1})}function oe(){var t=localStorage.getItem("jwt");t?fetch("".concat(P,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return A(e)})).then((function(t){se(!0),K(Object(i.a)({},t.data)),e.push("/")})).catch((function(e){console.log(e)})):e.push("/login")}return Object(a.useEffect)((function(){oe()}),[]),Object(a.useEffect)((function(){D.getUserInfo().then((function(e){return K(e)})).catch((function(e){return console.log(e)}))}),[re]),Object(a.useEffect)((function(){z&&z._id&&D.getInitialCards().then((function(e){return X(e)})).catch((function(e){return console.log(e)}))}),[z]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&ie()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsx)("div",{className:"page__content",children:Object(d.jsxs)(m.Provider,{value:z,children:[Object(d.jsx)(j,{onSignOut:function(){localStorage.removeItem("jwt"),se(!1),K({}),X([]),e.push("/login")},userData:z}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(T,{exact:!0,path:"/",loggedIn:ce,component:f,onEditProfile:function(){return s(!0)},onEditAvatar:function(){return _(!0)},onAddPlace:function(){return w(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e===z._id}));D.changeLikeCardStatus(e._id,t).then((function(t){X((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){J({isOpen:!0,cardToDelete:Object(i.a)({},e)})},onCardClick:function(e){F({isOpen:!0,data:{link:e.link,name:e.name}})},cards:W}),Object(d.jsx)(u.b,{path:"/login",children:Object(d.jsx)(y,{onLoginSubmit:function(e,t){R(e,t).then((function(){oe()})).catch((function(e){console.log(e)}))}})}),Object(d.jsx)(u.b,{path:"/register",children:Object(d.jsx)(S,{onRegisterSubmit:function(t,n){(function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return A(e)}))})(t,n).then((function(t){te({isOpen:!0,isSuccess:!0}),e.push("/login")})).catch((function(e){console.log(e),te({isOpen:!0,isSuccess:!1})}))}})})]}),Object(d.jsx)(b,{}),Object(d.jsx)(v,{isOpen:c,onClose:ie,onUpdateUser:function(e){D.editUserInfo(e).then((function(e){K(e),ie()})).catch((function(e){return console.log(e)}))},onOvelayClick:ie}),Object(d.jsx)(g,{isOpen:h,onClose:ie,onUpdateAvatar:function(e){D.editUserAvatar(e).then((function(e){K(e),ie()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(k,{isOpen:E,onClose:ie,onAddPlace:function(e){D.postCard(e).then((function(e){X([e].concat(Object(o.a)(W))),ie()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(x,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:q.isOpen,onClose:ie,buttonText:"\u0414\u0430",onSubmit:function(e){!function(e,t){e.preventDefault(),D.deleteCard(t._id).then((function(){X((function(e){return e.filter((function(e){return e._id!==t._id}))})),ie()})).catch((function(e){return console.log(e)}))}(e,q.cardToDelete)}}),Object(d.jsx)(C,Object(i.a)(Object(i.a)({},B),{},{onClose:ie})),Object(d.jsx)(N,{isOpen:ee.isOpen,isSuccess:ee.isSuccess,name:"info-tooltip",onClose:ie})]})})})};r.a.render(Object(d.jsx)(p.a,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.45021976.chunk.js.map