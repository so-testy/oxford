(window.webpackJsonphack=window.webpackJsonphack||[]).push([[0],{107:function(e,t,n){e.exports=n(128)},112:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),i=n(48),l=n(35),u=n(13),s=n(54),m=n(55),p=n(63),f=n(56),d=n(64),b=(n(112),n(12)),y=function(e){return{type:"CHANGE_CONSTRUCTOR",payload:e}},E=function(e){return{type:"CHANGE_TRAINER",payload:e}},h=function(e){return Object(b.b)((function(e){return{constructor:e.constructor}}),(function(e){return{changeConstructor:function(t){return e(y(t))}}}))(e)};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.name,r=t.value,a=this.props;(0,a.changeConstructor)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a.constructor,Object(u.a)({},n,r)))}},{key:"render",value:function(){var e=this.props.constructor;return a.a.createElement("section",{className:"constructor__params"},a.a.createElement("div",{className:"about"},a.a.createElement("div",{className:"title"},a.a.createElement("input",{type:"text",name:"title",value:e.title||"",onChange:this.handleInputChange.bind(this)})),a.a.createElement("div",{className:"description"},a.a.createElement("input",{type:"text",name:"description",value:e.description||"",onChange:this.handleInputChange.bind(this)}))),a.a.createElement("div",{className:"color"},a.a.createElement("button",{name:"color",value:"#EDE7F6",onClick:this.handleInputChange.bind(this),style:{background:"#EDE7F6"}}),a.a.createElement("button",{name:"color",value:"#6D6AFF",onClick:this.handleInputChange.bind(this),style:{background:"#6D6AFF"}}),a.a.createElement("button",{name:"color",value:"#EBFF00",onClick:this.handleInputChange.bind(this),style:{background:"#EBFF00"}}),a.a.createElement("button",{name:"color",value:"#FF6262",onClick:this.handleInputChange.bind(this),style:{background:"#FF6262"}})))}}]),t}(r.Component),v=Object(l.e)(h(g)),j=n(159),k=n(164),w=n(188),C=n(189),P=n(162),x=n(181),S=n(168),D=n(184),N=function(e){return Object(b.b)((function(e){return{constructor:e.constructor}}),(function(e){return{changeConstructor:function(t){return e(y(t))}}}))(e)};n(118);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:230,maxWidth:500}}})),A=["HARD","MEDIUM","EASY"],q=["SELECT","UPDATE","DELETE","INSERT"],W=N((function(e){var t=I(),n=e.constructor,r=e.changeConstructor;return a.a.createElement("div",{className:"filters"},a.a.createElement("div",{className:"complexity"},a.a.createElement(P.a,{className:t.formControl},a.a.createElement(w.a,{id:"demo-mutiple-checkbox-label"},"Complexity"),a.a.createElement(x.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:n.complexity,onChange:function(e){r(F({},n,{complexity:e.target.value}))},input:a.a.createElement(k.a,null),renderValue:function(e){return e.join(", ")}},A.map((function(e){return a.a.createElement(C.a,{key:e,value:e},a.a.createElement(D.a,{checked:n.complexity.indexOf(e)>-1}),a.a.createElement(S.a,{primary:e}))}))))),a.a.createElement("div",{className:"type"},a.a.createElement(P.a,{className:t.formControl},a.a.createElement(w.a,{id:"demo-mutiple-checkbox-label"},"Task types"),a.a.createElement(x.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:n.type,onChange:function(e){r(F({},n,{type:e.target.value}))},input:a.a.createElement(k.a,null),renderValue:function(e){return e.join(", ")}},q.map((function(e){return a.a.createElement(C.a,{key:e,value:e},a.a.createElement(D.a,{checked:n.type.indexOf(e)>-1}),a.a.createElement(S.a,{primary:e}))}))))))})),_=n(16),R=n.n(_),L=n(24),M=n(22),U=n(166),H=n(170),V=n(174),B=n(173),J=n(169),G=n(171),Y=n(185),K=n(172),z=function(e){return Object(b.b)((function(e){return{constructor:e.constructor}}),(function(e){return{changeConstructor:function(t){return e(y(t))}}}))(e)};n(120);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=[{id:"isSelected",align:"left",getValue:function(e,t){return a.a.createElement(D.a,{checked:e.isSelected,onChange:function(){var n=t.constructor;(0,t.changeConstructor)(X({},n,{tasks:n.tasks.map((function(t){return t.id===e.id&&(t.isSelected=!t.isSelected),t}))}))}})}},{id:"question",label:"Question",minWidth:400,getValue:function(e){return e.question.en}},{id:"type",label:"Type",align:"right",minWidth:40,getValue:function(e){return e.type.toUpperCase()}},{id:"complexity",label:"Complexity",minWidth:40,align:"right",getValue:function(e){return e.complexity.toUpperCase()}}],$=Object(j.a)({root:{width:"100%"}}),ee=z((function(e){var t=$(),n=e.constructor,c=e.changeConstructor,o=a.a.useState(0),i=Object(M.a)(o,2),l=i[0],u=i[1],s=a.a.useState(5),m=Object(M.a)(s,2),p=m[0],f=m[1];return Object(r.useEffect)((function(){Object(L.a)(R.a.mark((function e(){var t,r,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.tasks.length){e.next=9;break}return e.next=3,fetch("https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/questions");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,a=r.map((function(e){return X({},e,{isSelected:!1,complexity:e.points>3?e.points>6?"hard":"medium":"easy"})})),c(X({},n,{tasks:a}));case 9:case"end":return e.stop()}}),e)})))()}),[n,c]),a.a.createElement("div",{className:"table"},a.a.createElement(U.a,{className:t.root},a.a.createElement(J.a,{className:t.container},a.a.createElement(H.a,{stickyHeader:!0,"aria-label":"sticky table"},a.a.createElement(G.a,null,a.a.createElement(K.a,null,Z.map((function(e){return a.a.createElement(B.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),a.a.createElement(V.a,null,n.tasks.filter((function(e){return n.type.includes(e.type.toUpperCase())&&n.complexity.includes(e.complexity.toUpperCase())})).slice(l*p,l*p+p).map((function(t){return a.a.createElement(K.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t.id},Z.map((function(n){return a.a.createElement(B.a,{key:n.id,align:n.align},n.getValue(t,e))})))}))))),a.a.createElement(Y.a,{rowsPerPageOptions:[5,10,50],component:"div",count:n.tasks.length,rowsPerPage:p,page:l,onChangePage:function(e,t){u(t)},onChangeRowsPerPage:function(e){f(+e.target.value),u(0)}})))})),te=function(e){return Object(b.b)((function(e){return{constructor:e.constructor}}),(function(e){return{changeConstructor:function(t){return e(y(t))}}}))(e)},ne=(n(121),te((function(e){return a.a.createElement("section",{className:"constructor__questions"},a.a.createElement(W,null),a.a.createElement(ee,null))}))),re=n(129),ae=n(187),ce=n(186),oe=n(178),ie=n(176),le=n(177),ue=n(175);n(122);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=function(e){return Object(b.b)((function(e){return{constructor:e.constructor}}),(function(e){return{changeConstructor:function(t){return e(y(t))}}}))(e)}((function(e){var t=e.constructor,n=e.changeConstructor,r=a.a.useState(!1),c=Object(M.a)(r,2),o=c[0],i=c[1],l=a.a.useState(!1),s=Object(M.a)(l,2),m=s[0],p=s[1],f=a.a.useState(!1),d=Object(M.a)(f,2),b=d[0],y=d[1],E=function(){i(!1),y(!1)},h=function(){p(!1)},O=function(){var e=Object(L.a)(R.a.mark((function e(){var r,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,fetch("https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/createtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({testData:{color:t.color,email:t.email,title:t.title,description:t.description,tasks:t.tasks.filter((function(e){return e.isSelected})).map((function(e){return e.id}))}})});case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,y(!1),i(!1),p(!0),n(me({},t,{link:a.link}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(ce.a,{open:o,onClose:E,"aria-labelledby":"form-dialog-title"},a.a.createElement(ue.a,{id:"form-dialog-title"},"Publish"),a.a.createElement(ie.a,null,a.a.createElement(le.a,null,"For the results of passing the tests enter your email"),a.a.createElement(ae.a,{autoFocus:!0,margin:"dense",label:"Email Address",type:"email",name:"email",value:t.email||"",disabled:b,onChange:function(e){var r=e.target,a=r.name,c=r.value;n(me({},t,Object(u.a)({},a,c)))},fullWidth:!0})),a.a.createElement(oe.a,null,b?"":a.a.createElement(re.a,{onClick:E,color:"primary"},"Cancel"),a.a.createElement(re.a,{onClick:O,disabled:b,color:"primary"},b?"Loading":"Publish"))),a.a.createElement(ce.a,{maxWidth:"lg",open:m,onClose:h,"aria-labelledby":"form-dialog-title"},a.a.createElement(ue.a,{id:"form-dialog-title"},"Test published successfully"),a.a.createElement(ie.a,null,a.a.createElement(le.a,null,"Link to test: ",a.a.createElement("a",{href:"https://so-testy.github.io/oxford/#/trainer/".concat(t.link)},"https://so-testy.github.io/oxford/#/trainer/".concat(t.link)))),a.a.createElement(oe.a,null,a.a.createElement(re.a,{onClick:h,color:"primary"},"Cancel"))),a.a.createElement("section",{className:"constructor__submit",style:{background:t.color||"#EDE7F6"}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"title"},"SELECTED ",t.tasks.filter((function(e){return e.isSelected})).length," TASKS"),a.a.createElement("div",{className:"action"},a.a.createElement(re.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)}},"Publish test")))))})),fe=function(e){return Object(b.b)((function(e){return{constructor:e.constructor}}),(function(e){return{changeConstructor:function(t){return e(y(t))}}}))(e)},de=(n(123),fe((function(e){var t=e.constructor;return document.body.style.background=t.color||"#EDE7F6",a.a.createElement("div",{className:"constructor",style:{background:t.color||"#EDE7F6"}},a.a.createElement("main",null,a.a.createElement(v,null),a.a.createElement(ne,null),a.a.createElement(pe,null)))}))),be=n(180),ye=n(179),Ee=(n(124),function(e){return Object(b.b)((function(e){return{trainer:e.trainer}}),(function(e){return{changeTrainer:function(t){return e(E(t))}}}))(e)});function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=Object(l.e)(Ee((function(e){var t=e.trainer,n=e.changeTrainer,r=a.a.useState(!1),c=Object(M.a)(r,2),o=c[0],i=c[1],l=a.a.useState(!1),s=Object(M.a)(l,2),m=s[0],p=s[1],f=function(e){var r=e.target,a=r.name,c=r.value;n(Oe({},t,Object(u.a)({},a,c)))},d=function(){i(!1)},b=function(){var e=Object(L.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/submit_test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({testName:t.title,testEmail:t.email,sender:{email:t.userEmail,name:t.userName},tasks:t.tasks.map((function(e){return{id:e.id,sql:e.sql,isSuccess:e.isSuccess}}))})});case 2:i(!1),p(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("section",{className:"trainer__nav"},a.a.createElement("div",{className:"tasks"},a.a.createElement(ye.a,{color:"primary","aria-label":"outlined primary button group"},t.tasks.map((function(e,r){return a.a.createElement(re.a,{disabled:t.currTaskIndex===r,onClick:function(){return function(e){n(Oe({},t,{currTaskIndex:e,result:null,sql:"",error:!1}))}(r)},style:{backgroundColor:e.isSuccess?"green":void 0},key:r},r+1)})))),a.a.createElement("div",{className:"complete"},a.a.createElement(re.a,{color:"primary",onClick:function(){i(!0)}},"COMPLETE")),a.a.createElement(ce.a,{open:o,onClose:d,"aria-labelledby":"form-dialog-title"},a.a.createElement(ue.a,{id:"form-dialog-title"},"Complete"),a.a.createElement(ie.a,null,a.a.createElement(le.a,null,"Provide information about yourself before sending"),a.a.createElement(ae.a,{autoFocus:!0,margin:"dense",label:"Email Address",type:"email",name:"userEmail",value:t.userEmail||"",onChange:f,fullWidth:!0}),a.a.createElement(ae.a,{autoFocus:!0,margin:"dense",label:"Your name",type:"text",name:"userName",value:t.userName||"",onChange:f,fullWidth:!0})),a.a.createElement(oe.a,null,a.a.createElement(re.a,{onClick:d,color:"primary"},"Cancel"),a.a.createElement(re.a,{onClick:b,color:"primary"},"Complete"))),a.a.createElement(ce.a,{open:m,keepMounted:!0,onClose:function(){p(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},a.a.createElement(ue.a,{id:"alert-dialog-slide-title"},"THANK!"),a.a.createElement(ie.a,null,a.a.createElement(le.a,{id:"alert-dialog-slide-description"},"Your solution has been sent successfully!"))))}))),ve=n(182),je=(n(125),function(e){return Object(b.b)((function(e){return{trainer:e.trainer}}),(function(e){return{changeTrainer:function(t){return e(E(t))}}}))(e)});function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=Object(l.e)(je((function(e){var t=e.trainer,n=e.changeTrainer,r=a.a.useState(!1),c=Object(M.a)(r,2),o=c[0],i=c[1],l=function(){var e=Object(L.a)(R.a.mark((function e(){var r,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(we({},t,{result:null,error:!1})),e.next=3,fetch("https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.tasks[t.currTaskIndex].id,sql:t.sql})});case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,n(we({},t,{result:a.body})),a.body?a.body.success&&n(we({},t,{tasks:t.tasks.map((function(e,n){return n===t.currTaskIndex?we({},e,{sql:t.sql,isSuccess:!0}):e})),result:a.body})):n(we({},t,{result:null,error:!0}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){i(!1)};return a.a.createElement("section",{className:"trainer__main"},a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"question"},a.a.createElement("div",{className:"title"},"TASK"),a.a.createElement("div",{className:"text"},t.tasks[t.currTaskIndex]&&t.tasks[t.currTaskIndex].question.en)),a.a.createElement("div",{className:"database"},a.a.createElement(re.a,{onClick:function(){i(!0)},color:"primary"},"SHOW DATABASE"))),a.a.createElement("div",{className:"decision"},a.a.createElement("div",{className:"textarea"},a.a.createElement(ae.a,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,rowsMax:4,name:"sql",value:t.sql,onChange:function(e){var r=e.target,a=r.name,c=r.value;n(we({},t,Object(u.a)({},a,c)))},style:{width:"100%"},variant:"outlined"})),a.a.createElement("div",{className:"actions"},a.a.createElement(re.a,{variant:"outlined",color:"primary",onClick:l},"Submit")),a.a.createElement("div",{className:"table"},t.result?t.result.success?a.a.createElement(ve.a,{severity:"success"},"Correct answer"):a.a.createElement(ve.a,{severity:"warning"},"Answer is not correct"):"",t.error?a.a.createElement(ve.a,{severity:"error"},"Execution error"):"",t.result?a.a.createElement(J.a,{component:U.a},a.a.createElement(H.a,{size:"small","aria-label":"a dense table"},a.a.createElement(G.a,null,a.a.createElement(K.a,null,t.result.fields.map((function(e){return a.a.createElement(B.a,{align:"right"},e)})))),a.a.createElement(V.a,null,t.result.rows.map((function(e){return a.a.createElement(K.a,{key:e.id},t.result.fields.map((function(t){return a.a.createElement(B.a,{align:"right"},e[t])})))}))))):"")),a.a.createElement(ce.a,{open:o,maxWidth:"lg",fullWidth:!0,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},a.a.createElement(ue.a,{id:"alert-dialog-title"},"Database"),a.a.createElement(ie.a,null,a.a.createElement("iframe",{width:"100%",height:"600px",allowFullScreen:!0,scrolling:"no",title:"Database",frameBorder:"0",src:function(){var e=t.tasks[t.currTaskIndex].database;return"https://drawsql.app/sql-academy-1/diagrams/".concat({"4ed2b809d7446b9a0e100001":"airo","4ed2b809d7446b9a0e100002":"family","4ed2b809d7446b9a0e100003":"schedule"}[e],"/embed")}()})),a.a.createElement(oe.a,null,a.a.createElement(re.a,{onClick:s,color:"primary",autoFocus:!0},"Close"))))}))),Pe=function(e){return Object(b.b)((function(e){return{trainer:e.trainer}}),(function(e){return{changeTrainer:function(t){return e(E(t))}}}))(e)};n(126);function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=Pe(function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={isLoading:!0},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(L.a)(R.a.mark((function e(){var t,n,r,a,c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.match.params,r=t.changeTrainer,e.next=3,fetch("https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/test?id=".concat(n.id));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.next=9,Promise.all(c.tasks.map(function(){var e=Object(L.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/question?id=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:o=e.sent,r(Se({},c,{tasks:o.map((function(e){return e[0]})),currTaskIndex:0})),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return document.body.style.background=this.props.trainer.color||"#EDE7F6",a.a.createElement("div",{className:"trainer"},a.a.createElement("main",null,this.state.isLoading?a.a.createElement("div",{className:"loading"},a.a.createElement(be.a,null)):a.a.createElement(a.a.Fragment,null,a.a.createElement(ge,null),a.a.createElement(Ce,null))))}}]),t}(r.Component));n(127);var Ne=function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement(l.a,{exact:!0,path:"/",component:de}),a.a.createElement(l.a,{path:"/trainer/:id",component:De})))},Te=n(88),Fe=n(40),Ie=n(89);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var We={constructor:{title:"Test name",description:"Type the test description",complexity:["HARD","MEDIUM","EASY"],type:["SELECT","UPDATE","DELETE","INSERT"],tasks:[],isOpenSubmitForm:!1,color:"#EDE7F6",link:""},trainer:{tasks:[],color:"#EDE7F6",sql:""}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CONSTRUCTOR":return qe({},e,{constructor:t.payload});case"CHANGE_TRAINER":return qe({},e,{trainer:t.payload});default:return e}},Re=Object(Fe.createStore)(_e,Object(Ie.composeWithDevTools)(Object(Fe.applyMiddleware)(Te.a)));o.a.render(a.a.createElement(b.a,{store:Re},a.a.createElement(Ne,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.7addf3ab.chunk.js.map