(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),l=a(16),c=a(17),i=a(19),u=a(18),m=a(20),p=a(26),h=a(13),g=a(27),d=a(8),f=a.n(d),b=a(35),k=a.n(b),E=a(11),v=a.n(E),y=a(25),L=a.n(y),w=a(31),I=a.n(w),j=I.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),O=function(e,t,a){return j.post("/auth/signup",{name:e,email:t,password:a}).then(function(e){return e.data}).catch(function(e){return e})},C=function(e,t){return j.post("/auth/login",{email:e,password:t}).then(function(e){return e.data}).catch(function(e){return Promise.reject("".concat(e))})},U=function(){return j.post("/auth/logout").then(function(e){return e.data}).catch(function(e){return e})},S=function(){return j.get("/auth/loggedin").then(function(e){return e.data})},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userLoggedIn:a.props.userLoggedIn},a.handleLogout=function(){U().then(function(){a.setState({userLoggedIn:null}),a.props.setUser(null)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.userLoggedIn!==e.userLoggedIn&&this.setState({userLoggedIn:this.props.userLoggedIn})}},{key:"render",value:function(){return r.a.createElement(L.a,{sticky:"top",variant:"dark",bg:"dark",expand:"lg"},r.a.createElement(L.a.Brand,null,r.a.createElement(g.a,{to:"/bookmarks",style:{textDecoration:"none",color:"#9A9DA0"}},"Bookmarks")),r.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"justify-content-start mr-auto"}),r.a.createElement(v.a,{hidden:!this.state.userLoggedIn,className:"justify-content-center"},r.a.createElement(v.a.Item,null,r.a.createElement(f.a,{inline:!0},r.a.createElement(k.a,{type:"text",disabled:!0,placeholder:"Search...",className:"mr-sm-2"})))),r.a.createElement(v.a,{className:"justify-content-end"},this.state.userLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Link,{variant:"outline-info"},r.a.createElement(g.a,{variant:"outline-info",to:"/",onClick:this.handleLogout,style:{textDecoration:"none",color:"#9A9DA0"}},"Log out"))),r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Link,{variant:"outline-info"},r.a.createElement(g.a,{to:"/Settings",disabled:!0,style:{textDecoration:"none",color:"#9A9DA0"}},"Settings")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Link,{variant:"outline-linfo"},r.a.createElement(g.a,{to:"/login",style:{textDecoration:"none",color:"#9A9DA0"}},"Log in"))),r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Link,{variant:"outline-info"},r.a.createElement(g.a,{to:"/sign-up",style:{textDecoration:"none",color:"#9A9DA0"}},"Sign up")))))))}}]),t}(n.Component),A=a(32),D=a(86),P=a.n(D),N=a(84),R=a.n(N),B=I.a.create({baseURL:"https://bookmarks--app.herokuapp.com/api",withCredentials:!0}),G=function(e,t){return B.post("/bookmark",{title:e,url:t}).then(function(e){return e}).catch(function(e){return e})},z=function(e){return B.post("/bookmark/scrape",{anyURL:e}).then(function(e){return e.data}).catch(function(e){return e})},F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bookmarkURL:"",userLoggedIn:a.props.userLoggedIn},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.bookmarkURL;t.startsWith("http")||(t="https://"+t),z(t).then(function(e){G(e,t).then(function(){a.props.saveUrl({title:e,bookmarkURL:t}),a.setState({bookmarkURL:""})}).catch(function(){a.setState({bookmarkURL:"Something went wrong..."})})})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.userLoggedIn!==e.userLoggedIn&&this.setState({userLoggedIn:this.props.userLoggedIn})}},{key:"render",value:function(){return r.a.createElement(L.a,{hidden:!this.state.userLoggedIn,fixed:"bottom",variant:"dark",bg:"dark",expand:"lg"},r.a.createElement(L.a.Collapse,null,r.a.createElement(v.a,{className:"justify-content-center"},r.a.createElement(v.a.Item,null,r.a.createElement(R.a,{placement:"top",overlay:r.a.createElement(P.a,{id:"addNewBookmark"}," Add new bookmark ")},r.a.createElement(f.a,{inline:!0,onSubmit:this.handleSubmit},r.a.createElement(k.a,{name:"bookmarkURL",value:this.state.bookmarkURL,type:"text",onChange:this.handleChange,placeholder:"https://...",className:"mr-sm-2"})))))))}}]),t}(n.Component),W=a(38),J=a.n(W),M=a(24),H=a.n(M),T=a(28),Y=a.n(T),$=(a(81),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:""},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,o=t.password;O(n,r,o).then(function(e){a.props.setUser(e),a.props.history.push("/bookmarks")}).catch(function(){a.props.setUser(null)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{display:"block",onSubmit:this.onSubmit},r.a.createElement(f.a.Group,{as:Y.a,controlId:"formPlaintextPassword"},r.a.createElement(H.a,null,r.a.createElement(f.a.Control,{size:"lg",type:"text",name:"name",value:this.state.name,onChange:this.onChange,placeholder:"Enter your name"}))),r.a.createElement(f.a.Group,{as:Y.a,controlId:"formPlaintextPassword"},r.a.createElement(H.a,null,r.a.createElement(f.a.Control,{size:"lg",type:"email",name:"email",value:this.state.email,onChange:this.onChange,placeholder:"example@email.com"}))),r.a.createElement(f.a.Group,{as:Y.a,controlId:"formPlaintextPassword"},r.a.createElement(H.a,null,r.a.createElement(f.a.Control,{size:"lg",type:"password",name:"password",id:"password",placeholder:"Enter your password",value:this.state.password,onChange:this.onChange}))),r.a.createElement(f.a.Group,null,r.a.createElement(J.a,{type:"submit",variant:"outline-primary"},"Login"))))}}]),t}(n.Component)),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;C(n,r).then(function(e){a.props.setUser(e),a.props.history.push("/bookmarks")}).catch(function(){a.props.setUser(null)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{display:"block",onSubmit:this.onSubmit},r.a.createElement(f.a.Group,{as:Y.a,controlId:"formPlaintextEmail"},r.a.createElement(H.a,null,r.a.createElement(f.a.Control,{size:"lg",type:"email",name:"email",id:"email",placeholder:"example@email.com",onChange:this.onChange,value:this.state.email}))),r.a.createElement(f.a.Group,{as:Y.a,controlId:"formPlaintextPassword"},r.a.createElement(H.a,null,r.a.createElement(f.a.Control,{size:"lg",type:"password",name:"password",id:"password",placeholder:"Enter your password",onChange:this.onChange,value:this.state.password}))),r.a.createElement(f.a.Group,null,r.a.createElement(J.a,{type:"submit",variant:"outline-primary"},"Login"))))}}]),t}(n.Component),q=a(50),K=a.n(q),Q=a(49),V=a.n(Q),X=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bookmarksList:[],userLoggedIn:a.props.userLoggedIn},a.getBookmarks=function(){I.a.get("".concat("https://bookmarks--app.herokuapp.com/api","/bookmark"),{withCredentials:!0}).then(function(e){a.setState({bookmarksList:e.data})}).catch(function(e){return e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getBookmarks()}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&(this.setState({userLoggedIn:this.props.userLoggedIn}),this.getBookmarks())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.userLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{variant:"flush"},this.state.bookmarksList.map(function(e,t){return r.a.createElement(V.a.Item,{key:t,as:"a",target:"_blank",href:e.url},e.url)}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{variant:"danger"},r.a.createElement(K.a.Heading,null,"Protected content"),r.a.createElement("p",null,"You need to ",r.a.createElement("strong",null,"Log in")," or ",r.a.createElement("strong",null,"Sign up")," first."))))}}]),t}(n.Component),Z=Object(h.a)(),ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userLoggedIn:null,bookmark:null},a.setUser=function(e){a.setState({userLoggedIn:e})},a.getUser=function(){S().then(function(e){a.setState({userLoggedIn:e})})},a.saveUrl=function(e){a.setState({bookmark:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.b,{history:Z},r.a.createElement(x,{setUser:this.setUser,userLoggedIn:this.state.userLoggedIn}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/sign-up",render:function(t){return r.a.createElement($,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(_,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(p.a,{exact:!0,path:"/bookmarks",render:function(t){return r.a.createElement(X,Object.assign({},t,{userLoggedIn:e.state.userLoggedIn}))}})),r.a.createElement(F,{saveUrl:this.saveUrl,userLoggedIn:this.state.userLoggedIn})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){},87:function(e,t,a){e.exports=a(158)}},[[87,1,2]]]);
//# sourceMappingURL=main.a80ba2b5.chunk.js.map