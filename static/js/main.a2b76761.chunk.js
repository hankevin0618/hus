(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(31),r=n.n(s),i=n(5),o=(n(37),n(18)),l=(n(38),n(56),n(57),n(40),o.a.initializeApp({apiKey:"AIzaSyDrICxenlVfwbaIN-KR2dE_MoYrzY1IRl8",authDomain:"hus-fb.firebaseapp.com",databaseURL:"https://hus-fb-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hus-fb",storageBucket:"hus-fb.appspot.com",messagingSenderId:"282388248517",appId:"1:282388248517:web:b854c85aea206ed7663dac",measurementId:"G-91KBN4N2X3"}),o.a),d=o.a.auth(),u=o.a.firestore(),j=(o.a.storage(),o.a.database()),m=n(20),b=n(6),h=n(9),p=n.n(h),x=n(15),O=n(2),f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),m=j[0],b=j[1],h=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;switch(t){case"email":a(n);break;case"password":l(n)}},f=function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.signInWithEmailAndPassword(n,o);case 4:e.sent&&console.log("signed in"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message),b(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:f,className:"",children:[Object(O.jsx)("div",{className:"my-3",children:Object(O.jsx)("h4",{style:{fontWeight:"lighter"},children:"Log in to your account"})}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",name:"email",placeholder:"Email",className:"my-3",onChange:h}),Object(O.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"my-3",onChange:h}),Object(O.jsx)("button",{type:"submit",name:"submit",className:"my-1",children:"Sign In"})]}),Object(O.jsx)("div",{children:m})]})},g=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)(""),m=Object(i.a)(u,2),b=m[0],h=m[1],f=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;switch(t){case"email":a(n);break;case"password":l(n);break;case"fullName":h(n)}},g=function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.createUserWithEmailAndPassword(n,o);case 3:if(!e.sent){e.next=9;break}return e.next=7,d.currentUser.updateProfile({displayName:b});case 7:return e.next=9,j.ref("users/"+d.currentUser.uid).set({email:n,fullName:b,createdAt:d.currentUser.metadata.creationTime,lastSignInTime:d.currentUser.metadata.lastSignInTime});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:g,className:"row",children:[Object(O.jsx)("div",{className:"my-3",children:Object(O.jsx)("h4",{style:{fontWeight:"lighter"},children:"Become a Member!"})}),Object(O.jsxs)("div",{className:"d-grid mx-auto col-md-6 col-xl-5",children:[Object(O.jsx)("input",{required:!0,type:"text",name:"email",placeholder:"Email",className:"m-3",onChange:f}),Object(O.jsx)("input",{required:!0,type:"password",name:"password",placeholder:"Password",className:"m-3 ",onChange:f}),Object(O.jsx)("input",{required:!0,type:"text",name:"fullName",placeholder:"Full Name",className:"m-3 ",onChange:f}),Object(O.jsx)("button",{type:"submit",name:"submit",className:"my-3 col-7 d-block mx-auto",children:"Sign Up"})]})]})},v=function(){var e=function(){var e=Object(x.a)(p.a.mark((function e(t){var n,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target.name,e.t0=n,e.next="google"===e.t0?5:"facebook"===e.t0?10:12;break;case 5:return c=new l.auth.GoogleAuthProvider,e.next=8,d.signInWithPopup(c);case 8:return a=e.sent,e.abrupt("break",13);case 10:return alert("Not yet implemented"),e.abrupt("break",13);case 12:return e.abrupt("break",13);case 13:if(!a){e.next=16;break}return e.next=16,j.ref("users/"+d.currentUser.uid).update({email:d.currentUser.email,fullName:d.currentUser.displayName,createdAt:d.currentUser.metadata.creationTime,lastSignInTime:d.currentUser.metadata.lastSignInTime});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{name:"google",onClick:e,className:"transparent-button text-dark",children:"Google"}),Object(O.jsx)("button",{name:"facebook",onClick:e,className:"transparent-button text-dark",children:"Facebook"})]})},N=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=function(){return n?Object(O.jsx)(f,{}):n?Object(O.jsx)("div",{children:"Error"}):Object(O.jsx)(g,{})};return Object(O.jsxs)("div",{id:"login-form",className:"col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xl-6 text-white mx-auto text-center",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"text-center mt-5",children:"HUS"}),Object(O.jsx)("h3",{className:"monte",children:"Have your say"})]}),Object(O.jsx)("div",{children:Object(O.jsx)(s,{})}),Object(O.jsx)(v,{isSignIn:n}),Object(O.jsxs)("div",{className:"my-3 d-grid",children:[Object(O.jsx)("span",{style:{fontWeight:"bold"},children:n?"Not a member yet?":"Are you a member?"}),Object(O.jsx)("button",{className:" mb-3 transparent-button",onClick:function(){return a(!n)},children:n?"Create Account":"Sign In"})]})]})},w=function(e){e.isLoggedIn;return Object(O.jsx)("section",{id:"auth",className:"container-fluid",children:Object(O.jsx)("div",{className:"row",style:{minHeight:"100vh",alignContent:"center"},children:Object(O.jsx)(N,{})})})},y=n(19),D=function(e){var t=e.setPopPost,n=Object(c.useState)(null),a=Object(i.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),m=l[0],b=l[1],h=Object(c.useState)(null),f=Object(i.a)(h,2),g=f[0],v=f[1],N=Object(c.useState)("up"),w=Object(i.a)(N,2),D=w[0],I=w[1],S=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;switch(t){case"url":r(n);break;case"comment":b(n)}},k=function(){var e=Object(x.a)(p.a.mark((function e(n){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,j.ref("users/"+d.currentUser.uid).on("value",(function(e){var t=e.val().email;v(t)}));case 3:return c={url:s,authorEmail:g,author:d.currentUser.displayName,authorID:d.currentUser.uid,comment:[{c_author_name:d.currentUser.displayName,c_authorID:d.currentUser.uid,text:m,c_up:0,c_down:0,c_id:"C_"+d.currentUser.uid+Date.now()}],up:0,down:0,upAndDown:D,createdDate:Date.now()},e.prev=4,a=d.currentUser.uid+Date.now(),e.next=8,u.collection("post").doc(a).set(c);case 8:alert("Post uploaded successfully"),t(!1),window.location.reload(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){switch(e.preventDefault(),e.target.name){case"up":try{document.getElementById("up").classList.add("active-white"),document.getElementById("down").classList.remove("active-white"),I("up")}catch(t){console.log(t)}break;case"down":try{document.getElementById("down").classList.add("active-white"),document.getElementById("up").classList.remove("active-white"),I("down")}catch(t){console.log(t)}}};return Object(O.jsxs)("div",{id:"post-field",className:"row",children:[Object(O.jsx)("div",{children:s&&""!==s&&Object(O.jsx)(y.a,{url:s})}),Object(O.jsx)("div",{className:"col-12 mt-3",children:Object(O.jsxs)("form",{onSubmit:k,children:[Object(O.jsx)("input",{required:!0,type:"text",onChange:S,name:"url",placeholder:"Drag & Drop the article",style:{padding:"30px",borderRadius:"8px"}}),Object(O.jsxs)("div",{className:"d-grid mt-3",children:[Object(O.jsx)("input",{required:!0,type:"text",onChange:S,name:"comment",placeholder:"comment"}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("button",{id:"up",name:"up",className:"transparent-button active-white",onClick:C,style:{color:"red"},children:"AGREE"}),Object(O.jsx)("button",{id:"down",name:"down",className:"transparent-button",onClick:C,style:{color:"blue"},children:"DISAGREE"})]})]}),Object(O.jsx)("button",{name:"submit",className:"transparent-button",children:"Post"})]})})]})},I=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(i.a)(s,2),o=r[0],l=r[1],j=0,b=function(){var e=Object(x.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.collection("post").get();case 3:t=e.sent,n=[],t.forEach((function(e){var t={postID:e.id,author:e.data().author,authorID:e.data().authorID,comment:e.data().comment,createdDate:e.data().createdDate,title:e.data().title,up:e.data().up,down:e.data().down,upAndDown:e.data().upAndDown,url:e.data().url};n.push(t),n.sort((function(e,t){return t.createdDate-e.createdDate}))})),l(n),a(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),h=function(e){e.preventDefault(),window.confirm("Really Delete?")&&alert("Not implemented yet")},f=function(e){var t=e.author,n=e.comment,c=e.url,a=e.up,s=e.down,r=e.upAndDown,i=e.createdDate,o=e.authorID,l=e.postID,u=e.comment_author,j=new Date(i).toLocaleDateString("en-US"),b=!1;return d.currentUser&&(b=Boolean(o===d.currentUser.uid)),"up"===r?a++:s++,Object(O.jsxs)("div",{className:"border p-3 my-3 post-card",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-5",children:Object(O.jsx)("div",{className:"",style:{float:"right"},children:b&&Object(O.jsx)("button",{onClick:h,className:"transparent-button",style:{color:"red"},children:"Delete"})})})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"border col-md-6",style:{minHeight:"300px"},children:[Object(O.jsx)(y.a,{url:c}),";"]}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsxs)("div",{style:{fontSize:"small"},children:[Object(O.jsx)("p",{className:"m-0",children:t}),Object(O.jsxs)("p",{children:["Date Created: ",j]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Agree: ",a]}),Object(O.jsxs)("p",{children:["Disagree: ",s]})]}),Object(O.jsx)("p",{children:"Top comment"}),Object(O.jsxs)("div",{className:"comment-box",children:[Object(O.jsxs)("p",{style:{fontSize:"small",float:"right"},children:["Author: ",u]}),Object(O.jsxs)("p",{style:{fontWeight:"bold"},children:['"',n,'"']})]}),Object(O.jsx)(m.b,{to:"/post/".concat(l),children:"View More"})]})]}),Object(O.jsx)("div",{className:"col-md-12"})]})};return Object(c.useEffect)((function(){b()}),[n]),Object(O.jsx)("div",{children:n?"Loading...":o.map((function(e){j++,e.comment.sort((function(e,t){return e.c_up-t.c_up}));var t=e.comment[0].text,n=e.comment[0].c_author_name;return Object(O.jsx)(f,{id:e.postID,url:e.url,title:e.title,authorID:e.authorID,comment:t,comment_author:n,author:e.author,postID:e.postID,createdDate:e.createdDate,up:e.up,down:e.down,upAndDown:e.upAndDown},j)}))})},S=function(e){var t=e.isLoggedIn,n=Object(c.useState)(!1),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(O.jsx)("section",{className:"container-fluid",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-3"}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("div",{className:"text-center py-3",children:Object(O.jsxs)("div",{id:"post-button",children:[Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),r(!s),t||alert("Please login first")},className:"transparent-button text-dark",children:"What's on your mind?"}),s&&t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(D,{setPopPost:r})})]})}),Object(O.jsx)(I,{})]}),Object(O.jsx)("div",{className:"col-md-3"})]})})},k=function(e){var t=e.isLoggedIn;return Object(O.jsxs)("header",{className:"row",children:[Object(O.jsx)("h1",{className:"text-center mt-5",children:"HUS"}),Object(O.jsxs)("nav",{className:"col-12 d-md-flex mt-3 justify-content-center",children:[Object(O.jsxs)("ul",{className:"d-md-flex my-0",children:[Object(O.jsx)("li",{className:"mx-5 p-2",children:"National"}),Object(O.jsx)("li",{className:"mx-5 p-2",children:"International"}),Object(O.jsx)("li",{className:"mx-5 p-2",children:"Sports"}),Object(O.jsx)("li",{className:"mx-5 p-2",children:"Business"}),Object(O.jsx)("li",{className:"mx-5 p-2",children:"Entertainment"})]}),t?Object(O.jsx)("button",{onClick:function(){d.signOut(),window.location.reload()},className:"transparent-button",children:"Logout"}):Object(O.jsx)(m.b,{to:"/login",className:"p-2 login-button",children:"Login"})]})]})},C=function(){var e=Object(b.g)(),t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),o=Object(i.a)(r,2),l=o[0],d=o[1],j=function(){var t=Object(x.a)(p.a.mark((function t(){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.collection("post").doc(e.id).get();case 2:(n=t.sent)?(c=n.data(),d(c),s(!0)):console.log("No Such Document in Firestore");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"col-md-6 border",children:Object(O.jsx)(y.a,{url:l.url})}),Object(O.jsx)("div",{className:"col-md-6 border",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{style:{fontSize:"small"},children:[Object(O.jsxs)("p",{className:"m-0",children:["Created by: ",l.author]}),Object(O.jsxs)("p",{children:["Date Created: ",l.date]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Agree: ",l.up]}),Object(O.jsxs)("p",{children:["Disagree: ",l.down]})]}),Object(O.jsxs)("div",{className:"mt-5",children:[Object(O.jsx)("p",{style:{fontWeight:"bold",textAlign:"center"},children:"Best Comment"}),l.comment.map((function(e,t){return console.log(e),Object(O.jsxs)("div",{className:"comment-box d-flex",children:[Object(O.jsxs)("div",{className:"col-md-8",children:[Object(O.jsxs)("p",{children:["Author: ",e.c_author_name]}),Object(O.jsxs)("p",{style:{fontWeight:"bold"},children:['"',e.text,'"']}),Object(O.jsxs)("p",{children:["up: ",e.c_up," / down: ",e.c_down]})]}),Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("button",{onClick:function(){return alert("Not Implemented")},children:"UP"}),Object(O.jsx)("button",{onClick:function(){return alert("Not Implemented")},children:"DOWN"})]})]},t)}))]})]})}),Object(O.jsx)("div",{className:"col-md-10 mt-4 d-block mx-auto border",children:"comment here"})]})};return Object(c.useEffect)((function(){j()}),[a]),Object(O.jsx)("section",{className:"container",children:Object(O.jsx)("div",{className:"row",children:a&&Object(O.jsx)(m,{})})})},U=function(e){var t=e.isLoggedIn;e.userObj;return Object(O.jsx)(m.a,{children:Object(O.jsxs)(b.d,{children:[Object(O.jsxs)(b.b,{exact:!0,path:"/",children:[Object(O.jsx)(k,{isLoggedIn:t}),Object(O.jsx)(S,{isLoggedIn:t})]}),Object(O.jsxs)(b.b,{exact:!0,path:"/login",children:[Object(O.jsx)(w,{isLoggedIn:t}),t&&Object(O.jsx)(b.a,{to:"/"})]}),Object(O.jsxs)(b.b,{path:"/post/:id",children:[Object(O.jsx)(k,{isLoggedIn:t}),Object(O.jsx)(C,{})]})]})})};var A=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){d.onAuthStateChanged((function(e){e&&(l(e),j.ref("users/"+e.uid).update({lastSignInTime:e.metadata.lastSignInTime})),a(!1)}))}),[o]),Object(O.jsx)(O.Fragment,{children:n?Object(O.jsx)(O.Fragment,{children:"Loading..."}):Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(U,{isLoggedIn:Boolean(o),userObj:o})})})};n(54);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a2b76761.chunk.js.map