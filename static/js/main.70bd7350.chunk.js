(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),s=a(26),r=a.n(s),i=a(8),l=(a(33),a(17)),o=(a(34),a(50),a(51),a(36),l.a.initializeApp({apiKey:"AIzaSyDrICxenlVfwbaIN-KR2dE_MoYrzY1IRl8",authDomain:"hus-fb.firebaseapp.com",databaseURL:"https://hus-fb-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hus-fb",storageBucket:"hus-fb.appspot.com",messagingSenderId:"282388248517",appId:"1:282388248517:web:b854c85aea206ed7663dac",measurementId:"G-91KBN4N2X3"}),l.a),u=l.a.auth(),d=(l.a.firestore(),l.a.storage(),l.a.database()),m=a(27),j=a(5),b=a(15),h=a.n(b),p=a(18),O=a(2),x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(n.useState)(""),m=Object(i.a)(d,2),j=m[0],b=m[1],x=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;switch(t){case"email":c(a);break;case"password":o(a)}},g=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.signInWithEmailAndPassword(a,l);case 4:e.sent&&console.log("signed in"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message),b(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:g,className:"",children:[Object(O.jsx)("div",{className:"my-3",children:Object(O.jsx)("h4",{style:{fontWeight:"lighter"},children:"Log in to your account"})}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",name:"email",placeholder:"Email",className:"my-3",onChange:x}),Object(O.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"my-3",onChange:x}),Object(O.jsx)("button",{type:"submit",name:"submit",className:"my-1",children:"Sign In"})]}),Object(O.jsx)("div",{children:j})]})},g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],m=Object(n.useState)(""),j=Object(i.a)(m,2),b=j[0],x=j[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),v=f[0],N=f[1],y=Object(n.useState)("male"),S=Object(i.a)(y,2),w=S[0],I=S[1],k=Object(n.useState)("nsw"),C=Object(i.a)(k,2),A=C[0],B=C[1],E=Object(n.useState)(null),P=Object(i.a)(E,2),D=P[0],T=P[1],U=function(e){e.preventDefault();var t,a,n=e.target.name,s=e.target.value;switch(n){case"email":c(s);break;case"password":o(s);break;case"fullName":x(s);break;case"phoneNumber":N(s);break;case"gender":a=(t=document.getElementById(e.target.id)).options[t.selectedIndex].value,I(a);break;case"state":a=(t=document.getElementById(e.target.id)).options[t.selectedIndex].value,B(a);break;case"YOB":T(s)}},q=function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=(new Date).getFullYear(),e.next=4,u.createUserWithEmailAndPassword(a,l);case 4:e.sent&&d.ref("users/"+u.currentUser.uid).set({email:a,fullName:b,phoneNumber:v,gender:w,state:A,YOB:D,age:n-D,createdAt:u.currentUser.metadata.creationTime,lastSignInTime:u.currentUser.metadata.lastSignInTime});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:q,className:"",children:[Object(O.jsx)("div",{className:"my-3",children:Object(O.jsx)("h4",{style:{fontWeight:"lighter"},children:"Become a Member!"})}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"col-12",children:[Object(O.jsx)("input",{required:!0,type:"text",name:"email",placeholder:"Email",className:"m-3 col-md-3",onChange:U}),Object(O.jsx)("input",{required:!0,type:"password",name:"password",placeholder:"Password",className:"m-3 col-md-3",onChange:U}),Object(O.jsx)("input",{required:!0,type:"text",name:"fullName",placeholder:"Full Name",className:"m-3 col-md-3",onChange:U})]}),Object(O.jsxs)("div",{className:"col-12",children:[Object(O.jsx)("input",{required:!0,type:"tel",name:"phoneNumber",placeholder:"Phone Number",className:"m-3 col-md-3 ",onChange:U}),Object(O.jsxs)("select",{required:!0,name:"state",className:"m-3 col-md-3 ",id:"state",onChange:U,children:[Object(O.jsx)("option",{value:"nsw",children:"NSW"}),Object(O.jsx)("option",{value:"qld",children:"QLD"}),Object(O.jsx)("option",{value:"vic",children:"VIC"}),Object(O.jsx)("option",{value:"tas",children:"TAS"}),Object(O.jsx)("option",{value:"wa",children:"WA"}),Object(O.jsx)("option",{value:"sa",children:"SA"})]}),Object(O.jsxs)("select",{required:!0,name:"gender",className:"m-3 col-md-3 ",id:"gender",onChange:U,children:[Object(O.jsx)("option",{value:"male",children:"Male"}),Object(O.jsx)("option",{value:"female",children:"Female"})]}),Object(O.jsx)("input",{required:!0,type:"number",name:"YOB",placeholder:"Year of Birth",className:"m-3 col-md-3 ",onChange:U})]}),Object(O.jsx)("button",{type:"submit",name:"submit",className:"my-3 col-4",children:"Sign Up"})]})]})},f=function(e){var t=e.isSignIn,a=function(){var e=Object(p.a)(h.a.mark((function e(a){var n,c,s,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n=a.target.name,e.t0=n,e.next="google"===e.t0?5:"facebook"===e.t0?11:12;break;case 5:return c=new o.auth.GoogleAuthProvider,e.next=8,u.signInWithPopup(c);case 8:return s=e.sent,console.log(u.currentUser),e.abrupt("break",13);case 11:case 12:return e.abrupt("break",13);case 13:!t&&s&&(r=u.currentUser,new Promise((function(e,t){var a={fullName:r.displayName,phoneNumber:r.phoneNumber,email:r.email,createdAt:r.metadata.creationTime,lastSignInTime:r.metadata.lastSignInTime,YOB:null,state:null};a?(console.log("Promise worked"),e(a)):t("Error in Promise")})).then((function(e){console.log(e)}),(function(e){console.log(e)})));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{name:"google",onClick:a,className:"transparent-button text-dark",children:"Google"}),Object(O.jsx)("button",{name:"facebook",onClick:a,className:"transparent-button text-dark",children:"Facebook"})]})},v=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2);r[0],r[1];return Object(O.jsxs)("div",{id:"login-form",className:"col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xl-6 text-white mx-auto text-center",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"text-center mt-5",children:"HUS"}),Object(O.jsx)("h3",{className:"monte",children:"Have your say"})]}),Object(O.jsx)("div",{children:a?Object(O.jsx)(x,{}):Object(O.jsx)(g,{})}),Object(O.jsx)(f,{isSignIn:a}),Object(O.jsxs)("div",{className:"my-3 d-grid",children:[Object(O.jsx)("span",{style:{fontWeight:"bold"},children:a?"Not a member yet?":"Are you a member?"}),Object(O.jsx)("button",{className:" mb-3 transparent-button",onClick:function(){return c(!a)},children:a?"Create Account":"Sign In"})]})]})},N=function(){return Object(O.jsx)("section",{id:"auth",className:"container-fluid",children:Object(O.jsx)("div",{className:"row",style:{minHeight:"100vh",alignContent:"center"},children:Object(O.jsx)(v,{})})})},y=function(e){e.isLoggedIn,e.userObj;return Object(O.jsx)(m.a,{children:Object(O.jsx)(j.c,{children:Object(O.jsx)(j.a,{exact:!0,path:"/",children:Object(O.jsx)(N,{})})})})};var S=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(i.a)(s,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){u.onAuthStateChanged((function(e){e&&(o(e),d.ref("users/"+e.uid).update({lastSignInTime:e.metadata.lastSignInTime})),c(!1)}))}),[l]),Object(O.jsx)(O.Fragment,{children:a?Object(O.jsx)(O.Fragment,{children:"Loading..."}):Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(y,{isLoggedIn:Boolean(l),userObj:l})})})};a(48);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.70bd7350.chunk.js.map