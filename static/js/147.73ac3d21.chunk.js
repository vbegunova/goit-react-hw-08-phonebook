"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{147:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r=e(439),i=e(791),u=e(434),o="NOT_FOUND";var a=function(n,t){return n===t};function c(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,i=void 0===r?a:r,u=e.maxSize,c=void 0===u?1:u,l=e.resultEqualityCheck,s=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(i),f=1===c?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:o},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var i=e[r];return r>0&&(e.splice(r,1),e.unshift(i)),i.value}return o}return{get:r,put:function(t,i){r(t)===o&&(e.unshift({key:t,value:i}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(c,s);function p(){var t=f.get(arguments);if(t===o){if(t=n.apply(null,arguments),l){var e=f.getEntries(),r=e.find((function(n){return l(n.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function l(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function s(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var u,o=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=a,f=s.memoizeOptions,p=void 0===f?e:f,d=Array.isArray(p)?p:[p],m=l(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],t=m.length,e=0;e<t;e++)n.push(m[e].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return i}var f,p,d,m,h,v=s(c),x=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},b=function(n){return n.filter},j=v([x,b],(function(n,t){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),w=e(634),C=e(168),k=e(867),Z=k.ZP.form(f||(f=(0,C.Z)(["\n  width: 400px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n\n  label {\n    margin-bottom: 7px;\n  }\n\n  input {\n    margin-bottom: 20px;\n    width: 200px;\n  }\n\n  button {\n    width: 100px;\n    height: 30px;\n  }\n"]))),A=e(329),F=function(){var n=(0,i.useState)(""),t=(0,r.Z)(n,2),e=t[0],o=t[1],a=(0,i.useState)(""),c=(0,r.Z)(a,2),l=c[0],s=c[1],f=(0,u.v9)(x),p=(0,u.I0)(),d=function(){o(""),s("")};return(0,A.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var t={name:e,number:l};f.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts")):p((0,w.uK)(t)),d()},children:[(0,A.jsx)("label",{htmlFor:"name-input",children:"Name"}),(0,A.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(n){o(n.target.value)},required:!0,id:"name-input"}),(0,A.jsx)("label",{htmlFor:"number-input",children:"Number"}),(0,A.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:l,onChange:function(n){s(n.target.value)},required:!0,id:"number-input"}),(0,A.jsx)("button",{type:"submit",children:"Add contact"})]})},z=e(808),E=k.ZP.div(p||(p=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-top: 15px;\n    margin-bottom: 10px;\n    width: 200px;\n  }\n"]))),P=function(){var n=(0,u.v9)(b),t=(0,u.I0)();return(0,A.jsxs)(E,{children:[(0,A.jsx)("label",{htmlFor:"filter-input",children:"Find contacts by name"}),(0,A.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){t((0,z.M)(n.target.value))},id:"filter-input"})]})},q=k.ZP.p(d||(d=(0,C.Z)(["\n  margin-bottom: 25px;\n  font-weight: 700;\n"]))),S=k.ZP.li(m||(m=(0,C.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  button {\n    margin-left: 10px;\n  }\n"]))),L=function(){var n=(0,u.v9)(j),t=(0,u.v9)(g),e=(0,u.v9)(y),r=(0,u.I0)();return(0,i.useEffect)((function(){r((0,w.yF)())}),[r]),(0,A.jsxs)("ul",{children:[t&&!e&&(0,A.jsx)(q,{children:"Request in progress..."}),!n&&(0,A.jsx)("p",{children:"There are no contacts!"}),n.map((function(n){return(0,A.jsxs)(S,{children:[n.name,": ",n.number,(0,A.jsx)("button",{onClick:function(){return r((0,w.GK)(n.id))},children:"Delete"})]},n.id)}))]})},N=k.ZP.div(h||(h=(0,C.Z)(["\n  margin-top: 40px;\n  width: 450px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),O=function(){return(0,A.jsxs)(N,{children:[(0,A.jsx)("h1",{children:"Phonebook"}),(0,A.jsx)(F,{}),(0,A.jsx)("h2",{children:"Contacts"}),(0,A.jsx)(P,{}),(0,A.jsx)(L,{})]})}}}]);
//# sourceMappingURL=147.73ac3d21.chunk.js.map