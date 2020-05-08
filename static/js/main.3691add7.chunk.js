(this["webpackJsonpauthor-quiz"]=this["webpackJsonpauthor-quiz"]||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),i=a.n(r),l=a(5),c=a(10);a(31),a(32),a(33);function m(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-10 offset-1"},o.a.createElement("h1",null,"Author Quiz"),o.a.createElement("p",null,"Select the book written by the author shown")))}function u(e){var t=e.title,a=e.onClick;return o.a.createElement("div",{className:"answer",onClick:function(){a(t)}},o.a.createElement("h4",null,t))}function s(e){var t=e.author,a=e.books,n=e.highlight,r=e.onAnswerSelected;return o.a.createElement("div",{className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"green",wrong:"red"}[e]}(n)}},o.a.createElement("div",{className:"col-4 offset-1"},o.a.createElement("img",{src:t.imageUrl,className:"authorimage",alt:"Author"})),o.a.createElement("div",{className:"col-6"},a.map((function(e){return o.a.createElement(u,{title:e,key:e,onClick:r})}))))}function h(e){var t=e.show;e.onContinue;return o.a.createElement("div",null,t?o.a.createElement("div",{className:"col-11 continue"},o.a.createElement("button",{className:"btn btn-primary btn-lg float-right"},"Continue")):null)}function d(){return o.a.createElement("div",{className:"row",id:"footer"},o.a.createElement("div",{className:"col-12"},o.a.createElement("p",{className:"text-muted credit"},"All images are from ",o.a.createElement("a",{href:"https://commons.wikimedia.org/wiki/Main_Page"},"Wikimedia Commons")," and are in the public domain")))}var g=function(e){var t=e.turnData,a=e.highlight,n=e.onAnswerSelected,r=e.onContinue;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(m,null),o.a.createElement(s,Object.assign({},t,{highlight:a,onAnswerSelected:n})),o.a.createElement(h,{show:"correct"===a,onContinue:r}),o.a.createElement("p",null,o.a.createElement(c.b,{to:"/add"},"Add an author")),o.a.createElement(d,null))},b=a(21),k=a(22),p=a(23),f=a(8),E=a(25),v=a(24),A=(a(38),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={name:"",imageUrl:"",books:[],bookTemp:""},n.onFieldChange=n.onFieldChange.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n.handleAddBook=n.handleAddBook.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddAuthor(this.state)}},{key:"onFieldChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleAddBook",value:function(e){this.setState({books:this.state.books.concat([this.state.bookTemp]),bookTemp:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"AddAuthorForm__input"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.onFieldChange})),o.a.createElement("div",{className:"AddAuthorForm__input"},o.a.createElement("label",{htmlFor:"imageUrl"},"Image URL"),o.a.createElement("input",{type:"text",name:"imageUrl",value:this.state.imageUrl,onChange:this.onFieldChange})),o.a.createElement("div",{className:"AddAuthorForm__input"},o.a.createElement("label",{htmlFor:"bookTemp"},"Books"),this.state.books.map((function(e){return o.a.createElement("p",{key:e},e)})),o.a.createElement("input",{type:"text",name:"bookTemp",value:this.state.bookTemp,onChange:this.onFieldChange}),o.a.createElement("input",{type:"button",value:"+",onClick:this.handleAddBook})),o.a.createElement("input",{type:"submit",value:"Add"}))}}]),a}(o.a.Component));var C=function(e){e.match;var t=e.onAddAuthor;return o.a.createElement("div",{className:"AddAuthorForm"},o.a.createElement("h1",null,"Add Author"),o.a.createElement(A,{onAddAuthor:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(14),S=[{name:"Mark Twain",imageUrl:"images/authors/marktwain.jpg",imageSource:"Wikimedia Commons",books:["The Adventures of Huckleberry Finn"]},{name:"Joseph Conrad",imageUrl:"images/authors/josephconrad.png",imageSource:"Wikimedia Commons",books:["Heart of Darkness"]},{name:"J.K. Rowling",imageUrl:"images/authors/jkrowling.jpg",imageSource:"Wikimedia Commons",imageAttribution:"Daniel Ogren",books:["Harry Potter and the Sorcerers Stone"]},{name:"Stephen King",imageUrl:"images/authors/stephenking.jpg",imageSource:"Wikimedia Commons",imageAttribution:"Pinguino",books:["The Shining","IT"]},{name:"Charles Dickens",imageUrl:"images/authors/charlesdickens.jpg",imageSource:"Wikimedia Commons",books:["David Copperfield","A Tale of Two Cities"]},{name:"William Shakespeare",imageUrl:"images/authors/williamshakespeare.jpg",imageSource:"Wikimedia Commons",books:["Hamlet","Macbeth","Romeo and Juliet"]}];function j(e){var t=e.reduce((function(e,t,a){return e.concat(t.books)}),[]),a=Object(w.b)(t).slice(0,4),n=Object(w.a)(a);return{books:a,author:e.find((function(e){return e.books.some((function(e){return e===n}))}))}}function y(){return{turnData:j(S),highlight:""}}var N=y();function F(e){var t=N.turnData.author.books.some((function(t){return t===e}));N.highlight=t?"correct":"wrong",U()}function O(){return o.a.createElement(g,Object.assign({},N,{onAnswerSelected:F,onContinue:function(){N=y(),U()}}))}var T=Object(l.e)((function(e){var t=e.history;return o.a.createElement(C,{onAddAuthor:function(e){S.push(e),t.push("/")}})}));function U(){i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{exact:!0,path:"/",component:O}),o.a.createElement(l.a,{path:"/add",component:T})))),document.getElementById("root"))}U(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.3691add7.chunk.js.map