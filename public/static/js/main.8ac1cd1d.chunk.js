(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},139:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),c=(a(102),a(10)),i=a(27),u=a(14),s=a(36),m=a.n(s),d=a(50),k=a.n(d),p=a(23),g=a.n(p),f=a(12),h=a.n(f),b=a(26),E=a.n(b),v=a(33),j=a.n(v),w=j.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),y=function(){return w.post("/auth/logout").then(function(e){return e.data}).catch(function(e){return Promise.reject(e)})},O=(a(79),function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],o=a[1];return{value:r,onChange:function(e){o(e.target.value)}}}),x=function(e){var t=O(""),a=O(""),o=Object(n.useState)(!1),l=Object(c.a)(o,2),i=l[0],u=l[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),p=d[0],f=d[1];return r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{display:"block",onSubmit:function(n){n.preventDefault(),u(!1),function(e,t){return w.post("/auth/login",{email:e,password:t}).then(function(e){return e.data}).catch(function(e){return Promise.reject(e.request.status)})}(t.value,a.value).then(function(t){e.setUser(t),e.history.push("/bookmarks")}).catch(function(t){switch(u(!0),t){case 0:f("Could not connect to server \ud83d\ude41");break;case 401:f("Incorrect username or password.");break;default:f("Something went wrong... \ud83d\ude29")}e.setUser(null)})}},r.a.createElement(h.a.Group,{as:E.a,controlId:"errorMessage"},r.a.createElement(g.a,null,i?r.a.createElement(m.a,{variant:"danger",onClose:function(e){return u(e)},dismissible:!0},r.a.createElement(m.a.Heading,null,"You got an error"),r.a.createElement("p",null,p)):r.a.createElement(r.a.Fragment,null))),r.a.createElement(h.a.Group,{as:E.a,controlId:"formPlaintextEmail"},r.a.createElement(g.a,null,r.a.createElement(h.a.Control,Object.assign({size:"lg",type:"email",name:"email",placeholder:"example@email.com"},t,{required:!0})))),r.a.createElement(h.a.Group,{as:E.a,controlId:"formPlaintextPassword"},r.a.createElement(g.a,null,r.a.createElement(h.a.Control,Object.assign({size:"lg",type:"password",name:"password",placeholder:"Enter your password"},a,{required:!0})))),r.a.createElement(h.a.Group,null,r.a.createElement(k.a,{type:"submit",variant:"outline-primary"},"Login"))))},C=function(e){var t=O(""),a=O(""),o=O(""),l=Object(n.useState)(!1),i=Object(c.a)(l,2),u=i[0],s=i[1],d=Object(n.useState)(""),p=Object(c.a)(d,2),f=p[0],b=p[1];return r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{display:"block",onSubmit:function(n){n.preventDefault(),function(e,t,a){return w.post("/auth/signup",{name:e,email:t,password:a}).then(function(e){return e.data}).catch(function(e){return Promise.reject(e.request.status)})}(t.value,a.value,o.value).then(function(t){e.setUser(t),e.history.push("/bookmarks")}).catch(function(t){switch(e.setUser(null),s(!0),t){case 0:b("Could not connect to server \ud83d\ude41");break;case 409:b("The email already exists");break;default:b("Something went wrong... \ud83d\ude29")}})}},r.a.createElement(h.a.Group,{as:E.a,controlId:"errorMessage"},r.a.createElement(g.a,null,u&&r.a.createElement(m.a,{variant:"danger",onClose:function(e){return s(e)},dismissible:!0},r.a.createElement(m.a.Heading,null,"You got an error "),r.a.createElement("p",null,f)))),r.a.createElement(h.a.Group,{as:E.a,controlId:"formPlaintextPassword"},r.a.createElement(g.a,null,r.a.createElement(h.a.Control,Object.assign({size:"lg",type:"text",name:"name",placeholder:"Enter your name"},t,{required:!0})))),r.a.createElement(h.a.Group,{as:E.a,controlId:"formPlaintextPassword"},r.a.createElement(g.a,null,r.a.createElement(h.a.Control,Object.assign({size:"lg",type:"email",name:"email",placeholder:"example@email.com"},a,{required:!0})))),r.a.createElement(h.a.Group,{as:E.a,controlId:"formPlaintextPassword"},r.a.createElement(g.a,null,r.a.createElement(h.a.Control,Object.assign({size:"lg",type:"password",name:"password",placeholder:"Enter your password",required:!0},o)))),r.a.createElement(h.a.Group,null,r.a.createElement(k.a,{type:"submit",variant:"outline-primary"},"Sign up"))))},S=(a(139),function(){return r.a.createElement("div",{className:"container left-box"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("span",{className:"anim-left"}," A place where your bookmarks"),r.a.createElement("span",{className:"anim-bottom"}," can call Home."))))}),L=a(51),B=a(38),I=a(39),T=a(42),U=a(40),D=a(43),P=a(175),M=a(176),A=a(177),N=a(173),_=a(68),F=a(179),G=function(e){var t=e.bookmarks,a=e.activeTags,n=new Set,o=new Set;t.length&&t.map(function(e){return e._tags.forEach(function(e){n.add(e._id),o.add(e.name)})});var l=Object(_.a)(n),c=Object(_.a)(o).map(function(t,n){return r.a.createElement(F.a.Item,{style:{padding:"10px 20px",marginTop:"1px",marginBottom:"1px",backgroundColor:"#f9f9f9"},action:!0,onClick:function(t){return function(t,n,r){if(r.target.classList.contains("active")){r.target.style.backgroundColor="white";var o=a.indexOf(t);-1!==o&&a.splice(o,1),e.handleTagClick()}else r.target.style.backgroundColor="blue",a.push(t),e.handleTagClick();r.target.classList.toggle("active")}(l[n],0,t)},as:"li",key:l[n]},t)});return r.a.createElement(F.a,{as:"ul",style:{padding:"0 20px"}},c)},q=a(28),z=a.n(q),H=a(41),R=j.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),W=function(){return R.get("/bookmark").then(function(e){return e.data}).catch(function(e){return e})},Y=function(){var e=Object(H.a)(z.a.mark(function e(t,a,n,r){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.put("/bookmark/".concat(t),{title:a,url:n,tags:r});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,a,n,r){return e.apply(this,arguments)}}(),J=function(){var e=Object(H.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.delete("/bookmark/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),$=j.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),K=function(){var e=Object(H.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.delete("/tag/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Q=a(169),V=a(180),X=a(170),Z=a(171),ee=a(172),te=function(e){var t=e.bookmarks,a=e.handleDeleteBookmark,n=e.handleEditBookmark,o=function(e,t){switch(e.persist(),e.target.innerText){case"Edit":n(t);break;case"Delete":a(t)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,null,t.map(function(e,t){return r.a.createElement(V.a,{key:t,border:"info",style:{width:"18rem"}},r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Title,null,e.title),r.a.createElement(V.a.Text,null,e.url)),r.a.createElement(V.a.Footer,null,r.a.createElement(X.a,{className:"justify-content-between"},r.a.createElement(Z.a,null,r.a.createElement(ee.a,{onClick:function(t){return o(t,e)},variant:"success",size:"sm"},"Edit")),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{onClick:function(t){return o(t,e)},variant:"danger",size:"sm"},"Delete")))))})))},ae=a(178),ne=function(e){return r.a.createElement(N.a,{variant:"danger"},r.a.createElement(N.a.Heading,null,"Something whent wrong"),r.a.createElement("p",null,e.errorMessage))},re=a(174),oe=function(e){return r.a.createElement(re.a,{className:"mb-3"},e.children)},le=function(e){return r.a.createElement(re.a.Prepend,null,r.a.createElement(re.a.Text,null,e.groupText))},ce=a(181),ie=function(e){var t=Object(n.useState)({value:e.value?e.value:"",title:e.bookmarkTitle,url:e.bookmarkUrl,tags:e.bookmarkTags}),a=Object(c.a)(t,2),o=a[0],l=a[1];return r.a.createElement(ce.a,{name:e.name,placeholder:e.placeholder,as:"input",focus:e.focus.toString(),"aria-describedby":e.name,onChange:function(t){var a=t.target,n=a.name,r=a.value;l({value:r}),l({name:n,value:r}),e.onChange(t)},value:o.value})},ue=function(e){return r.a.createElement(ee.a,{type:e.type,variant:e.variant,onClick:e.onClick},e.text)},se=function(e){var t=Object(n.useState)(e.editing?e.bookmark.title:""),a=Object(c.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(e.editing?e.bookmark.url:""),u=Object(c.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)(e.editing?e.bookmark._tags.map(function(e){return e.name}).reduce(function(e,t){return"".concat(e,",").concat(t)}):""),k=Object(c.a)(d,2),p=k[0],g=k[1],f=Object(n.useState)(e.showModal),h=Object(c.a)(f,2),b=h[0],E=h[1],v=Object(n.useState)(!1),j=Object(c.a)(v,2),w=j[0],y=j[1],O=Object(n.useState)(""),x=Object(c.a)(O,2),C=x[0],S=x[1],L=Object(n.useState)(!1),B=Object(c.a)(L,2),I=B[0],T=B[1],U=function(e){var t=e.target;!function(e,t){switch(e){case"title":l(t);break;case"url":m(t);break;case"tags":g(t.toLowerCase())}}(t.name,t.value)};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(!1)}},r.a.createElement(ue,{type:"button",variant:"outline-secondary",onClick:function(){return E(!0)},text:"Add"}),r.a.createElement(ae.a,{centered:!0,show:b,autoFocus:!0,onHide:function(){return E(!1)}},r.a.createElement(ae.a.Header,null,r.a.createElement(ae.a.Title,null,e.modalTitle)),r.a.createElement(ae.a.Body,null,r.a.createElement(oe,null,r.a.createElement(le,{groupText:"www"}),r.a.createElement(ie,{as:"input",name:"url",placeholder:"www.example.com",focus:!0,onChange:U,value:e.bookmark?e.bookmark.url:""})),r.a.createElement("label",{htmlFor:"url"},"Separate tags by , "),r.a.createElement(oe,null,r.a.createElement(le,{groupText:"Tags"}),r.a.createElement(ie,{name:"tags",placeholder:"tag1, tag2,",focus:"false",onChange:U,value:e.bookmark?e.bookmark._tags.map(function(e){return e.name}).reduce(function(e,t){return e+","+t}):""}),r.a.createElement(le,{groupText:"Title"}),r.a.createElement(ie,{as:"input",name:"title",placeholder:"Title",focus:"false",onChange:U,value:e.bookmark?e.bookmark.title:"",bookmarkTitle:e.bookmark?e.bookmark.title:"",bookmarkUrl:e.bookmark?e.bookmark.url:"",bookmarkTags:e.bookmark?e.bookmark._tags.map(function(e){return e.name}).reduce(function(e,t){return e+","+t}):""}))),r.a.createElement(ae.a.Footer,null,r.a.createElement(ue,{type:"submit",variant:"danger",onClick:function(){T(!1),E(!1),e.editing&&e.hideModal()},text:"Cancel"}),r.a.createElement(ue,{type:"submit",variant:"success",onClick:function(){if(0===s.trim().length)S("URL can't be empty"),T(!0);else if(0===o.trim().length)S("Title can't be empty"),T(!0);else{T(!1),y(!0);var t=p.split(",").filter(function(e){return e.trim()});e.editing?Y(e.bookmark._id,o,s,t).then(function(t){y(!1),E(!1),e.saveUrl({newBookmark:t})}).catch(function(e){return alert("error editing bookmark:  ".concat(e))}):function(e,t,a){return R.post("/bookmark",{title:e,url:t,tags:a}).then(function(e){return e.data}).catch(function(e){return Promise.reject(e)})}(o,s,t).then(function(t){y(!1),E(!1),e.saveUrl({newBookmark:t})}).catch(function(e){S(e.message),E(!0),y(!1),T(!0)}),m(""),l(""),g("")}},text:w?"Saving...":"Save"})),I&&r.a.createElement(ne,{errorMessage:C})))},me=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(T.a)(this,Object(U.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(D.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("edit-bookmark").appendChild(this.el)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){document.getElementById("edit-bookmark").removeChild(this.el)}},{key:"render",value:function(){return l.a.createPortal(this.props.children,this.el)}}]),t}(n.Component),de=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(T.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).state={bookmark:null,bookmarksList:[],filteredBookmarks:[],userLoggedIn:a.props.userLoggedIn,showEditBookmarkModal:!1},a.activeTags=[],a.getBookmarks=function(){W().then(function(e){a.setState({bookmarksList:e,filteredBookmarks:e})}).catch(function(e){return alert(e)})},a.getBookmarksByTag=function(e){return a.state.bookmarksList.filter(function(t){return t._tags.find(function(t){return t._id===e})})},a.handleTagClick=function(){var e=Object(L.a)(a).activeTags,t=[];e.length?(e.forEach(function(e){a.getBookmarksByTag(e).forEach(function(e){t.includes(e)||t.push(e)})}),a.setState({filteredBookmarks:t})):a.setState(function(e){return{filteredBookmarks:e.bookmarksList}})},a.handleEditBookmark=function(e){a.setState({bookmark:e}),a.setState({showEditBookmarkModal:!0})},a.handleDeleteBookmark=function(e){e._tags.forEach(function(e){1===a.getBookmarksByTag(e._id).length&&K(e._id).then().catch(function(e){return alert(e)})}),J(e._id).then(function(){return a.getBookmarks()}).catch(function(e){return alert(e)})},a.hideModal=function(){a.setState({showEditBookmarkModal:!1})},a}return Object(D.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.getBookmarks()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&(this.setState({userLoggedIn:this.props.userLoggedIn}),this.setState({showEditBookmarkModal:!1}),this.getBookmarks())}},{key:"render",value:function(){var e=this.state.showEditBookmarkModal?r.a.createElement(me,null,r.a.createElement(se,{showModal:!0,saveUrl:this.props.saveUrl,bookmark:this.state.bookmark,userLoggedIn:this.state.userLoggedIn,editing:!0,hideModal:this.hideModal,modalTitle:"Edit bookmark"})):"";return r.a.createElement("div",null,e,r.a.createElement(P.a,null,r.a.createElement(M.a,null,r.a.createElement(A.a,{xs:2},r.a.createElement(G,{activeTags:this.activeTags,handleTagClick:this.handleTagClick,bookmarks:this.state.bookmarksList})),r.a.createElement(A.a,{xs:9},this.state.userLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{handleEditBookmark:this.handleEditBookmark,handleDeleteBookmark:this.handleDeleteBookmark,bookmarks:this.state.filteredBookmarks})):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"danger"},r.a.createElement(N.a.Heading,null,"Protected content"),r.a.createElement("p",null,"You need to",r.a.createElement("strong",null,"Log in"),"or",r.a.createElement("strong",null,"Sign up"),"first.")))))))}}]),t}(n.Component),ke=a(66),pe=a(18),ge=a.n(pe),fe=a(37),he=a.n(fe),be=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],l=a[1];return r.a.createElement(ce.a,{hidden:!0,placeholder:e.placeholder,onChange:function(t){var a=t.target.value;e.filterBookmarks(a),l({input:a})},value:o,className:"mr-sm-2"})},Ee=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(T.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).state={userLoggedIn:a.props.userLoggedIn},a.handleLogout=function(){y().then(function(){a.setState({userLoggedIn:null}),a.props.setUser(null)})},a}return Object(D.a)(t,e),Object(I.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.userLoggedIn!==e.userLoggedIn&&this.setState({userLoggedIn:this.props.userLoggedIn})}},{key:"render",value:function(){return r.a.createElement(he.a,{sticky:"top",variant:"dark",bg:"dark",expand:"lg"},r.a.createElement(he.a.Brand,null,r.a.createElement(ke.a,{to:"/bookmarks",style:{textDecoration:"none",color:"#9A9DA0"}},"Bookmarks")),r.a.createElement(he.a,null,this.state.userLoggedIn&&r.a.createElement(se,{editing:!1,saveUrl:this.props.saveUrl,userLoggedIn:this.state.userLoggedIn,modalTitle:"Add new bookmark"})),r.a.createElement(he.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(he.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav"},r.a.createElement(ge.a,{hidden:!this.state.userLoggedIn,className:"justify-content-center"},r.a.createElement(ge.a.Item,null,r.a.createElement(h.a,{inline:!0},r.a.createElement(be,{placeholder:"Search..."})))),r.a.createElement(ge.a,{className:"justify-content-end"},this.state.userLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a.Item,null,r.a.createElement(ge.a.Link,{variant:"outline-info",as:"a",href:"/",onClick:this.handleLogout,style:{textDecoration:"none",color:"#9A9DA0"}},"Log out")),r.a.createElement(ge.a.Item,null,r.a.createElement(ge.a.Link,{variant:"outline-info",as:"a",href:"/Settings",disabled:!0,style:{textDecoration:"none",color:"#9A9DA0"}},"Settings"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a.Item,null,r.a.createElement(ge.a.Link,{variant:"outline-linfo",as:"a",href:"/login",style:{textDecoration:"none",color:"#9A9DA0"}},"Log in")),r.a.createElement(ge.a.Item,null,r.a.createElement(ge.a.Link,{variant:"outline-info",as:"a",href:"/sign-up",style:{textDecoration:"none",color:"#9A9DA0"}},"Sign up"))))))}}]),t}(n.Component),ve=(a(166),Object(u.a)()),je=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)(function(){a||w.get("/auth/loggedin").then(function(e){return e.data}).then(function(e){o(e)})},[a]);var l=function(e){return o(e)},u=Object(n.useState)(null),s=Object(c.a)(u,2)[1],m=function(e){s(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(i.b,{history:ve},r.a.createElement(Ee,{saveUrl:m,setUser:l,userLoggedIn:a}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:S}),r.a.createElement(i.a,{exact:!0,path:"/sign-up",render:function(e){return r.a.createElement(C,Object.assign({},e,{setUser:l}))}}),r.a.createElement(i.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(x,Object.assign({},e,{setUser:l}))}}),r.a.createElement(i.a,{exact:!0,path:"/bookmarks",render:function(e){return r.a.createElement(de,Object.assign({saveUrl:m},e,{userLoggedIn:a}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){},97:function(e,t,a){e.exports=a(167)}},[[97,1,2]]]);
//# sourceMappingURL=main.8ac1cd1d.chunk.js.map