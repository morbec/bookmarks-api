(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(100),a(10)),s=a(26),i=a(13),u=a(41),m=a(42),g=a(50),d=a(44),p=a(43),f=a(51),h=a(166),E=a(167),b=a(168),k=a(173),v=a(169),j=a(45),y=a.n(j),O=y.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),w=function(){return O.get("/bookmark").then(function(e){return e.data}).catch(function(e){return e})},x=a(66),L=function(e){var t=e.bookmarks,a=e.activeTags,n=new Set,o=new Set;t.length&&t.map(function(e){return e._tags.map(function(e){return n.add(e._id),o.add(e.name)})});var l=Object(x.a)(n),c=Object(x.a)(o).map(function(t,n){return r.a.createElement(k.a.Item,{style:{padding:"10px 20px",marginTop:"1px",marginBottom:"1px",backgroundColor:"#f9f9f9"},action:!0,onClick:function(t){return function(t,n,r){if(r.target.classList.contains("active")){r.target.style.backgroundColor="white";var o=a.indexOf(t);-1!==o&&a.splice(o,1),e.handleTagClick()}else r.target.style.backgroundColor="blue",a.push(t),e.handleTagClick();r.target.classList.toggle("active")}(l[n],0,t)},as:"li",key:l[n]},t)});return r.a.createElement(k.a,{as:"ul",style:{padding:"0 20px"}},c)},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={bookmarksList:[],filteredBookmarks:[],userLoggedIn:a.props.userLoggedIn},a.activeTags=[],a.getBookmarks=function(){w().then(function(e){a.setState({bookmarksList:e,filteredBookmarks:e})}).catch(function(e){return alert(e)})},a.handleTagClick=function(){var e=Object(p.a)(a).activeTags,t=[];e.length?(e.forEach(function(e){a.state.bookmarksList.filter(function(t){return t._tags.find(function(t){return t._id===e})}).forEach(function(e){t.includes(e)||t.push(e)})}),a.setState({filteredBookmarks:t})):a.setState(function(e){return{filteredBookmarks:e.bookmarksList}})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getBookmarks()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&(this.setState({userLoggedIn:this.props.userLoggedIn}),this.getBookmarks())}},{key:"render",value:function(){return r.a.createElement(h.a,{style:{height:"100vh"}},r.a.createElement(E.a,null,r.a.createElement(b.a,{xs:2},r.a.createElement(L,{activeTags:this.activeTags,handleTagClick:this.handleTagClick,bookmarks:this.state.bookmarksList})),r.a.createElement(b.a,{xs:9},this.state.userLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"flush"},this.state.filteredBookmarks.map(function(e,t){return r.a.createElement(k.a.Item,{style:{padding:"25px",marginTop:"2px",marginBottom:"5px",borderRadius:"10px 10px 10px 10px"},key:t,as:"a",target:"_blank",href:e.url},e.title," - ",e.url)}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"danger"},r.a.createElement(v.a.Heading,null,"Protected content"),r.a.createElement("p",null,"You need to",r.a.createElement("strong",null,"Log in"),"or",r.a.createElement("strong",null,"Sign up"),"first."))))))}}]),t}(n.Component),C=a(28),I=a(11),T=a.n(I),B=a(18),A=a.n(B),D=a(34),U=a.n(D),P=y.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),N=function(){return P.post("/auth/logout").then(function(e){return e.data}).catch(function(e){return Promise.reject(e)})},G=a(170),F=a(174),q=a(171),H=a(172),z=function(e){return r.a.createElement(v.a,{variant:"danger"},r.a.createElement(v.a.Heading,null,"Something whent wrong"),r.a.createElement("p",null,e.errorMessage))},M=function(e){return r.a.createElement(G.a,{className:"mb-3"},e.children)},_=function(e){return r.a.createElement(G.a.Prepend,null,r.a.createElement(G.a.Text,null,e.groupText))},R=function(e){return r.a.createElement(F.a,{name:e.name,placeholder:e.placeholder,as:"input",focus:e.focus.toString(),"aria-describedby":e.name,onChange:e.onChange})},Y=function(e){return r.a.createElement(q.a,{type:e.type,variant:e.variant,onClick:e.onClick},e.text)},J=function(e){var t=Object(n.useState)(e.userLoggedIn),a=Object(c.a)(t,2),o=(a[0],a[1],Object(n.useState)("")),l=Object(c.a)(o,2),s=l[0],i=l[1],u=Object(n.useState)(""),m=Object(c.a)(u,2),g=m[0],d=m[1],p=Object(n.useState)(""),f=Object(c.a)(p,2),h=f[0],E=f[1],b=Object(n.useState)(!1),k=Object(c.a)(b,2),v=k[0],j=k[1],y=Object(n.useState)(!1),w=Object(c.a)(y,2),x=w[0],L=w[1],S="",C=Object(n.useState)(!1),I=Object(c.a)(C,2),T=I[0],B=I[1],A=function(e){var t=e.target;!function(e,t){switch(e){case"title":i(t);break;case"url":d(t);break;case"tags":E(t.toLowerCase())}}(t.name,t.value)};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j(!1)}},r.a.createElement(Y,{type:"button",variant:"outline-secondary",onClick:function(){return j(!0)},text:"Add"}),r.a.createElement(H.a,{centered:!0,show:v,autoFocus:!0,onHide:function(){return j(!1)}},r.a.createElement(H.a.Header,null,r.a.createElement(H.a.Title,null,"Add new bookmark")),r.a.createElement(H.a.Body,null,r.a.createElement(M,null,r.a.createElement(_,{groupText:"www"}),r.a.createElement(R,{name:"url",placeholder:"www.example.com",focus:!0,onChange:A})),r.a.createElement("label",{htmlFor:"url"},"Separate tags by , "),r.a.createElement(M,null,r.a.createElement(_,{groupText:"Tags"}),r.a.createElement(R,{name:"tags",placeholder:"tag1, tag2,",focus:"false",onChange:A}),r.a.createElement(_,{groupText:"Title"}),r.a.createElement(R,{name:"title",placeholder:"Title",focus:"false",onChange:A}))),r.a.createElement(H.a.Footer,null,r.a.createElement(Y,{type:"submit",variant:"danger",onClick:function(){B(!1),j(!1)},text:"Cancel"}),r.a.createElement(Y,{type:"submit",variant:"success",onClick:function(){L(!0);var t=h.split(",").filter(function(e){if(e.trim().length>0)return e.trim()});(function(e,t,a){return O.post("/bookmark",{title:e,url:t,tags:a}).then(function(e){return e.data}).catch(function(e){return Promise.reject(e)})})(s,g,t).then(function(t){L(!1),j(!1),e.saveUrl({newBookmark:t})}).catch(function(e){S=e.message,j(!0),L(!1),B(!0)})},text:x?"Saving...":"Save"})),T&&r.a.createElement(z,{errorMessage:S})))},W=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],l=a[1];return r.a.createElement(F.a,{hidden:!0,placeholder:e.placeholder,onChange:function(t){var a=t.target.value;e.filterBookmarks(a),l({input:a})},value:o,className:"mr-sm-2"})},$=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={userLoggedIn:a.props.userLoggedIn},a.handleLogout=function(){N().then(function(){a.setState({userLoggedIn:null}),a.props.setUser(null)})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.userLoggedIn!==e.userLoggedIn&&this.setState({userLoggedIn:this.props.userLoggedIn})}},{key:"render",value:function(){return r.a.createElement(U.a,{sticky:"top",variant:"dark",bg:"dark",expand:"lg"},r.a.createElement(U.a.Brand,null,r.a.createElement(C.a,{to:"/bookmarks",style:{textDecoration:"none",color:"#9A9DA0"}},"Bookmarks")),r.a.createElement(U.a,null,this.state.userLoggedIn&&r.a.createElement(J,{saveUrl:this.props.saveUrl,userLoggedIn:this.state.userLoggedIn})),r.a.createElement(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(U.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav"},r.a.createElement(A.a,{hidden:!this.state.userLoggedIn,className:"justify-content-center"},r.a.createElement(A.a.Item,null,r.a.createElement(T.a,{inline:!0},r.a.createElement(W,{placeholder:"Search..."})))),r.a.createElement(A.a,{className:"justify-content-end"},this.state.userLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Link,{variant:"outline-info"},r.a.createElement(C.a,{variant:"outline-info",to:"/",onClick:this.handleLogout,style:{textDecoration:"none",color:"#9A9DA0"}},"Log out"))),r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Link,{variant:"outline-info"},r.a.createElement(C.a,{to:"/Settings",disabled:!0,style:{textDecoration:"none",color:"#9A9DA0"}},"Settings")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Link,{variant:"outline-linfo"},r.a.createElement(C.a,{to:"/login",style:{textDecoration:"none",color:"#9A9DA0"}},"Log in"))),r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Link,{variant:"outline-info"},r.a.createElement(C.a,{to:"/sign-up",style:{textDecoration:"none",color:"#9A9DA0"}},"Sign up")))))))}}]),t}(n.Component),K=a(33),Q=a.n(K),V=a(48),X=a.n(V),Z=a(22),ee=a.n(Z),te=a(25),ae=a.n(te),ne=(a(91),function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],o=a[1];return{value:r,onChange:function(e){o(e.target.value)}}}),re=function(e){var t=ne(""),a=ne(""),o=Object(n.useState)(!1),l=Object(c.a)(o,2),s=l[0],i=l[1],u=Object(n.useState)(""),m=Object(c.a)(u,2),g=m[0],d=m[1];return r.a.createElement("div",{className:"container"},r.a.createElement(T.a,{display:"block",onSubmit:function(n){n.preventDefault(),i(!1),function(e,t){return P.post("/auth/login",{email:e,password:t}).then(function(e){return e.data}).catch(function(e){return Promise.reject(e.request.status)})}(t.value,a.value).then(function(t){e.setUser(t),e.history.push("/bookmarks")}).catch(function(t){switch(i(!0),t){case 0:d("Could not connect to server \ud83d\ude41");break;case 401:d("Incorrect username or password.");break;default:d("Something went wrong... \ud83d\ude29")}e.setUser(null)})}},r.a.createElement(T.a.Group,{as:ae.a,controlId:"errorMessage"},r.a.createElement(ee.a,null,s?r.a.createElement(Q.a,{variant:"danger",onClose:function(e){return i(e)},dismissible:!0},r.a.createElement(Q.a.Heading,null,"You got an error"),r.a.createElement("p",null,g)):r.a.createElement(r.a.Fragment,null))),r.a.createElement(T.a.Group,{as:ae.a,controlId:"formPlaintextEmail"},r.a.createElement(ee.a,null,r.a.createElement(T.a.Control,Object.assign({size:"lg",type:"email",name:"email",placeholder:"example@email.com"},t,{required:!0})))),r.a.createElement(T.a.Group,{as:ae.a,controlId:"formPlaintextPassword"},r.a.createElement(ee.a,null,r.a.createElement(T.a.Control,Object.assign({size:"lg",type:"password",name:"password",placeholder:"Enter your password"},a,{required:!0})))),r.a.createElement(T.a.Group,null,r.a.createElement(X.a,{type:"submit",variant:"outline-primary"},"Login"))))},oe=function(e){var t=ne(""),a=ne(""),o=ne(""),l=Object(n.useState)(!1),s=Object(c.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),g=Object(c.a)(m,2),d=g[0],p=g[1];return r.a.createElement("div",{className:"container"},r.a.createElement(T.a,{display:"block",onSubmit:function(n){n.preventDefault(),function(e,t,a){return P.post("/auth/signup",{name:e,email:t,password:a}).then(function(e){return e.data}).catch(function(e){return Promise.reject(e.request.status)})}(t.value,a.value,o.value).then(function(t){e.setUser(t),e.history.push("/bookmarks")}).catch(function(t){switch(e.setUser(null),u(!0),t){case 0:p("Could not connect to server \ud83d\ude41");break;case 409:p("The email already exists");break;default:p("Something went wrong... \ud83d\ude29")}})}},r.a.createElement(T.a.Group,{as:ae.a,controlId:"errorMessage"},r.a.createElement(ee.a,null,i&&r.a.createElement(Q.a,{variant:"danger",onClose:function(e){return u(e)},dismissible:!0},r.a.createElement(Q.a.Heading,null,"You got an error "),r.a.createElement("p",null,d)))),r.a.createElement(T.a.Group,{as:ae.a,controlId:"formPlaintextPassword"},r.a.createElement(ee.a,null,r.a.createElement(T.a.Control,Object.assign({size:"lg",type:"text",name:"name",placeholder:"Enter your name"},t,{required:!0})))),r.a.createElement(T.a.Group,{as:ae.a,controlId:"formPlaintextPassword"},r.a.createElement(ee.a,null,r.a.createElement(T.a.Control,Object.assign({size:"lg",type:"email",name:"email",placeholder:"example@email.com"},a,{required:!0})))),r.a.createElement(T.a.Group,{as:ae.a,controlId:"formPlaintextPassword"},r.a.createElement(ee.a,null,r.a.createElement(T.a.Control,Object.assign({size:"lg",type:"password",name:"password",placeholder:"Enter your password",required:!0},o)))),r.a.createElement(T.a.Group,null,r.a.createElement(X.a,{type:"submit",variant:"outline-primary"},"Sign up"))))},le=(a(162),function(){return r.a.createElement("div",{className:"container left-box"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("span",{className:"anim-left"}," A place where your bookmarks"),r.a.createElement("span",{className:"anim-bottom"}," can call Home."))))}),ce=(a(163),Object(i.a)()),se=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)(function(){a||P.get("/auth/loggedin").then(function(e){return e.data}).then(function(e){o(e)})},[a]);var l=function(e){return o(e)},i=Object(n.useState)(null),u=Object(c.a)(i,2)[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{history:ce},r.a.createElement($,{saveUrl:function(e){u(e)},setUser:l,userLoggedIn:a}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:le}),r.a.createElement(s.a,{exact:!0,path:"/sign-up",render:function(e){return r.a.createElement(oe,Object.assign({},e,{setUser:l}))}}),r.a.createElement(s.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(re,Object.assign({},e,{setUser:l}))}}),r.a.createElement(s.a,{exact:!0,path:"/bookmarks",render:function(e){return r.a.createElement(S,Object.assign({},e,{userLoggedIn:a}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){},95:function(e,t,a){e.exports=a(164)}},[[95,1,2]]]);
//# sourceMappingURL=main.725098c6.chunk.js.map