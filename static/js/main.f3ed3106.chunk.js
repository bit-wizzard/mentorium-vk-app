(this["webpackJsonpmentorium-vk"]=this["webpackJsonpmentorium-vk"]||[]).push([[0],{176:function(e,t,n){},181:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);n(100),n(126),n(128),n(129),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168);var a=n(0),r=n.n(a),i=n(38),s=n.n(i),o=n(28),c=n(34),l=n(90),u=n.n(l),m=n(11),d=n(12),p=n(14),f=n(13),g=n(15),h=n(29),b=(n(176),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,e)}}]),t}(a.Component)),v=Object(c.e)(Object(h.a)(b)),E=(n(181),n(6)),y=n(7);function O(){var e=Object(E.a)(["   \n    padding: 1rem;\n    .course-list {\n        margin-top: 1rem;\n    }\n    .items-enter {\n        opacity: 0;\n    }\n    .items-enter-active {\n        opacity: 1;\n        transition: 0.2s;\n    }\n\n    .items-exit {\n        opacity: 1;\n    }\n    .items-exit-active {\n        opacity: 0;\n        transition: 0.2s;\n    }\n\n    .main-header {\n        background: #ffb600;\n        margin: -1rem -1rem 0 -1rem;     \n        padding: 1rem;\n        height: 20vh;  \n        border-radius: 0 0 25px 25px; \n    }\n\n        ","\n        ","\n\n"]);return O=function(){return e},e}var w=y.a.div(O(),(function(e){return 0===e.margin&&!e.firstEnter&&"\n        .notification {\n            width: calc(".concat(e.width,"px - 2rem);\n            animation-name: first;\n            animation-duration: 0.8s;\n        }\n        @keyframes first {\n            0% {margin-left: 0;}\n            20% {margin-left: -").concat(e.width,"px;}\n            100% {margin-left: 0}\n        }\n        ")}),(function(e){return 1===e.margin&&!e.firstEnter&&"\n        .notification {\n            width: calc(".concat(e.width,"px - 2rem);\n            animation-name: second;\n            animation-duration: 0.8s;\n        }\n        @keyframes second {\n            0% {margin-left: 0;}\n            20% {margin-left: -").concat(e.width,"px;}\n            100% {margin-left: 0}\n        }\n    ")}));function j(){var e=Object(E.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    grid-gap: 1rem;\n"]);return j=function(){return e},e}var k=y.a.div(j()),x=n(18),C=n(19);function z(){var e=Object(E.a)(["\n    margin: 0;\n    font-family: 'Nunito', sans-serif;\n    white-space: ",";\n    line-height: ",";\n    font-size: ",";\n    color: ",";\n    font-weight: ",";\n\n"]);return z=function(){return e},e}var F=y.a.p(z(),(function(e){return e.nowrap?"nowrap":"normal"}),(function(e){return"medium"===e.size||"small"===e.size||"smallest"===e.size?"1.5":"big"===e.size||"large"===e.size?"1.25":"largest"===e.size&&"1"}),(function(e){return"small"===e.size?"15px":"default"===e.size?"18px":"big"===e.size&&"24px"}),(function(e){return"primary"===e.type?"#000":"secondary"===e.type?"#6a6a6a":"brand"===e.type&&"#ffb600"}),(function(e){return"bold"===e.weight?"bold":"light"===e.weight&&"regular"})),N=function(e){var t=e.children,n=e.size,a=e.type,i=e.weight,s=e.nowrap;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{size:n,type:a,weight:i,nowrap:s},t))};N.defaultProps={children:null,size:"small",type:"default",weight:"light",nowrap:!1};var D=N,S=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.main?r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{size:"big",weight:"bold"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b")):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(x.a,{icon:C.b,onClick:function(){return e.props.history.goBack()}}),r.a.createElement(D,{size:"big",weight:"bold"},this.props.title))))}}]),t}(a.Component),A=Object(c.e)(S);function q(){var e=Object(E.a)(["\n    padding-top: 1rem;\n"]);return q=function(){return e},e}var L=y.a.div(q()),Q=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).notifications=["\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b - \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0412 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u043a\u0438 \u0438 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441. \u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443, \u0447\u0442\u043e \u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c.","\u0421\u0430\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u043a\u0438. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u043d\u0438\u0437\u0443, \u0447\u0442\u043e \u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c","\u0412\u0430\u0448 \u0442\u0435\u0441\u0442 \u0433\u043e\u0442\u043e\u0432. \u041c\u043e\u0436\u0435\u0442\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"],n.state={noti_text:n.notifications[n.props.type]},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentWillUpdate",value:function(){var e=this;0==this.props.type||1==this.props.type?setTimeout((function(){e.setState({noti_text:e.notifications[e.props.type]})}),300):setTimeout((function(){e.setState({noti_text:e.notifications[e.props.type]})}),0)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement(D,{size:"small"},this.state.noti_text)))}}]),t}(a.Component);function H(){var e=Object(E.a)(["\n\n"]);return H=function(){return e},e}function _(){var e=Object(E.a)(["\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    "]);return _=function(){return e},e}function B(){var e=Object(E.a)(["\n\n    display: grid;\n    margin: 0 1rem;\n    background: #fff;\n    padding-bottom: 1rem;\n    \n    \n    transition: 0.1s;\n    \n    .caption {\n        border-radius: 15px;\n\n        display: grid;\n        background: #FFB600;\n        padding: 1rem;\n        justify-content: center;\n        position: relative;\n        z-index: 999;\n        div {\n            display: grid;\n            grid-template-columns: auto 1fr;\n            align-items: center;\n            grid-gap: 0.5rem;\n        }\n    }\n\n    .course-selector {\n        position: relative;\n    }\n    .course-selector-inner {\n        position: absolute;\n        width: 100%;\n    }\n    ","\n\n"]);return B=function(){return e},e}function W(){var e=Object(E.a)(["\n    display: grid;\n    ","\n"]);return W=function(){return e},e}function M(){var e=Object(E.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    z-index: -500;\n"]);return M=function(){return e},e}var T=y.a.div(M()),P=y.a.div(W(),(function(e){return!e.bottomOpened&&"\n        height: 10px;\n        "})),I=y.a.div(B(),(function(e){return e.bottomOpened?"\n        .course-selector-inner {\n                bottom: 0;\n                opacity: 1;\n                transition: 0.2s;\n                z-index: 1;\n            }\n        ":"\n            .course-selector-inner {\n                opacity: 0;\n                bottom: -10rem;\n                transition: 0.2s;\n                z-index: -999;\n            }\n        "})),K=y.a.div(_());y.a.div(H());function U(){var e=Object(E.a)(["\nbackground: rgb(251,251,251);\nbackground: linear-gradient(180deg, rgba(251,251,251,1) 0%, rgba(251,251,251,1) 57%, rgba(251,251,251,0.9037814955083596) 72%, rgba(251,251,251,0) 100%);    display: grid;\n    grid-gap: 0.5rem;\n    border-radius: 15px 15px 0 0;\n    padding: 1rem;\n    .selector-item {\n        display: grid;\n        grid-template-columns: 1fr auto;\n        padding: 0.5rem 0;\n    }\n"]);return U=function(){return e},e}var J=y.a.div(U()),R=n(1);Object(R.h)({enforceActions:"observed"});var V=function(){function e(){Object(m.a)(this,e),this.lessons=[],this.lesson={name:null,code:null,language:null}}return Object(d.a)(e,[{key:"set",value:function(e,t){this[e]=t}},{key:"addLesson",value:function(e){var t=e.code;-1===this.lessons.findIndex((function(e){return e.code===t}))&&this.lessons.push(e)}},{key:"getLessonData",value:function(e){this.lesson=this.lessons.find((function(t){return t.code===e}))}},{key:"deleteFromLessons",value:function(e){if(e){var t=this.lessons.findIndex((function(t){return t.code===e}));return this.lessons.splice(t,1)}}}]),e}();Object(R.j)(V,{lessons:R.o,lesson:R.o,addLesson:R.f,deleteFromLessons:R.f,getLessonData:R.f,set:R.f});var X=new V,Z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this))).state={active:!0},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"nextPath",value:function(e){e!==this.props.location.pathname&&this.props.history.push(e)}},{key:"onAddLesson",value:function(e){X.addLesson(e)}},{key:"render",value:function(){var e=this,t=[{name:"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d \u0442\u0430\u0440\u0438\u0445\u044b",language:"\u041a\u0430\u0437",code:"KHK"},{name:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430",language:"\u0420\u0443\u0441",code:"KZR"},{name:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430\u043b\u043a \u0441\u0430\u0443\u0430\u0442\u0442\u044b\u043b\u044b\u043a",language:"\u041a\u0430\u0437",code:"MHR"}].map((function(t,n){return r.a.createElement("div",{className:"selector-item",onClick:function(){return e.onAddLesson(t)},key:n},r.a.createElement(D,{size:"default"},t.name),r.a.createElement(D,{size:"default"},"(",t.language,")"))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null,t))}}]),t}(a.Component),G=Object(c.e)(Object(h.a)(Z)),Y=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).state={bottomOpened:!1},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,"main"===this.props.type&&r.a.createElement(T,null,r.a.createElement(P,{onClick:function(){return e.setState({bottomOpened:!1})},bottomOpened:this.state.bottomOpened}),r.a.createElement(I,{bottomOpened:this.state.bottomOpened},r.a.createElement("div",{className:"course-selector",onClick:function(){return e.setState({bottomOpened:!1})}},r.a.createElement("div",{className:"course-selector-inner"},r.a.createElement(G,null))),r.a.createElement("div",{className:"caption",onClick:function(){return e.setState({bottomOpened:!0})}},r.a.createElement("div",null,r.a.createElement(x.a,{icon:C.d}),r.a.createElement(D,{size:"default"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442"))))),"new-test"===this.props.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(I,null,r.a.createElement("div",{className:"caption"},r.a.createElement("div",null,r.a.createElement(x.a,{icon:C.d}),r.a.createElement(D,{size:"default"},"\u041d\u0430\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0435\u0441\u0442")))))),"next-question"===this.props.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(I,null,r.a.createElement("div",{className:"caption"},r.a.createElement("div",null,r.a.createElement(D,{size:"default"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(x.a,{icon:C.c})))))),"submit"===this.props.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(I,null,r.a.createElement("div",{className:"caption"},r.a.createElement("div",null,r.a.createElement(D,{size:"default"},"Submit"),r.a.createElement(x.a,{icon:C.c})))))))}}]),t}(a.Component),$=Object(c.e)(Y);function ee(){var e=Object(E.a)(["\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    ","\n"]);return ee=function(){return e},e}function te(){var e=Object(E.a)(["\n    padding: 0.5rem;\n    background: #fbfbfb;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    border-radius: 10px;\n    grid-gap: 1rem;\n    margin-bottom 1rem; \n      \n    .progress {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        align-items: center;\n        grid-gap: 0.5rem;\n    }\n"]);return te=function(){return e},e}function ne(){var e=Object(E.a)(["\n    padding: 0.5rem;\n    background: #fbfbfb;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    border-radius: 10px;\n    grid-gap: 1rem;\n    margin-bottom 1rem;\n\n    .card {\n        display: grid;\n        grid-template-columns: 1fr auto;\n    }\n    \n    .title {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        grid-gap: 10px;\n    }\n\n    .progress {\n        display: grid;\n        grid-template-columns: auto auto;\n        align-items: center;\n        grid-gap: 0.5rem;\n    }\n\n"]);return ne=function(){return e},e}var ae=y.a.div(ne()),re=y.a.div(te()),ie=y.a.div(ee(),(function(e){return e.onDelete?"\n            left: 0;\n            opacity: 1;\n            transition: opacity 0.3s;\n        ":"\n            opacity: 0;\n            transition: opacity 0.3s;\n            left: -1000px;\n        "}));function se(){var e=Object(E.a)(["\n    display: grid;\n    justify-content: center;\n    padding: 0.5rem 1rem;\n    background: #ffb600;\n    border-radius: 5px;\n"]);return se=function(){return e},e}function oe(){var e=Object(E.a)(["\n    display: grid;\n    justify-content: center;\n    background: #f0f0f0;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n"]);return oe=function(){return e},e}function ce(){var e=Object(E.a)(["\n    background: #fff;\n    padding: 1rem;\n    border-radius: 10px;\n    margin: 0 2rem;\n\n    .options {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        margin-top: 1rem;\n        grid-gap: 1rem;\n    }\n"]);return ce=function(){return e},e}function le(){var e=Object(E.a)(["\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    background: rgba(0, 0, 0, 0.2);\n"]);return le=function(){return e},e}var ue=y.a.div(le()),me=y.a.div(ce()),de=y.a.div(oe()),pe=y.a.div(se()),fe=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onDelete",value:function(e){X.deleteFromLessons(e)}},{key:"render",value:function(){var e=this,t=this.props.lesson,n=t.name,a=t.language,i=t.code;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,r.a.createElement(me,null,r.a.createElement(D,{size:"default"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043c\u0435\u0442 ","".concat(n," (").concat(a,")")," ?"),r.a.createElement("div",{className:"options"},r.a.createElement(de,{onClick:function(){return e.onDelete(i)}},"\u0414\u0430"),r.a.createElement(pe,null,"\u041d\u0435\u0442")))))}}]),t}(a.Component),ge=Object(c.e)(Object(h.a)(fe)),he=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={onDelete:!1},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"nextPath",value:function(e){e!==this.props.location.pathname&&this.props.history.push(e)}},{key:"onClose",value:function(){this.setState({onDelete:!0}),X.getLessonData(this.props.id)}},{key:"onChangeDirection",value:function(e){this.nextPath("/course/"+e),X.getLessonData(this.props.id)}},{key:"onOpenTest",value:function(e){this.nextPath("/test/"+e)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.test?r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{onClick:function(){return e.onOpenTest(e.props.test_id)}},r.a.createElement("div",{className:"progress"},r.a.createElement(x.a,{icon:C.a,color:"#31B43D",size:"lg"}),r.a.createElement("div",null,this.props.progress,"%")),r.a.createElement("div",{className:"date"},this.props.date))):r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{onDelete:this.state.onDelete},r.a.createElement("div",{className:"card",onClick:function(){return e.onChangeDirection(e.props.id)}},r.a.createElement("div",{className:"title"},r.a.createElement(D,{size:"default"},this.props.title),r.a.createElement(D,{size:"default"},"(",this.props.language,")")),r.a.createElement("div",{className:"progress"},r.a.createElement(x.a,{icon:C.a,color:"#31B43D",size:"lg"}),r.a.createElement("div",null,this.props.progress,"%"))),r.a.createElement("div",{className:"delete",onClick:function(){return e.onClose()}},r.a.createElement(x.a,{icon:C.e,color:"#999"})),r.a.createElement(ie,{onDelete:this.state.onDelete,onClick:function(){return e.setState({onDelete:!1})}},r.a.createElement(ge,{lesson:X.lesson})))))}}]),t}(a.Component),be=Object(c.e)(he),ve=n(186),Ee=n(185),ye=n(95),Oe=n.n(ye),we=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).courses=X.lessons,e.state={width:window,notificationCounter:0,firstEnter:!0,prevState:!e.firstEnter},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({width:window.innerWidth})}},{key:"componentDidUpdate",value:function(){0==this.state.notificationCounter&&this.courses.length>0&&this.setState({notificationCounter:1}),1==this.state.notificationCounter&&0==this.courses.length&&this.setState({notificationCounter:0}),this.state.firstEnter==this.state.prevState&&this.setState({firstEnter:!1})}},{key:"componentDidMount",value:function(){Oe()()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{width:this.state.width,margin:this.state.notificationCounter,firstEnter:this.state.firstEnter},r.a.createElement("div",{className:"main-header"},this.state.width,r.a.createElement(A,{main:!0}),r.a.createElement("div",{className:"notification"},r.a.createElement(Q,{type:this.state.notificationCounter}))),r.a.createElement("div",{className:"course-list"},r.a.createElement(ve.a,null,this.courses.map((function(e,t){return r.a.createElement(Ee.a,{timeout:200,classNames:"items",key:t},r.a.createElement(be,{title:e.name,progress:"0",language:e.language,id:e.code,key:t}))}))))),r.a.createElement($,{type:"main"}))}}]),t}(a.Component),je=Object(h.a)(we);function ke(){var e=Object(E.a)(["   \n    padding: 1rem;\n    .test-list {\n        margin-top: 1rem;\n    }\n"]);return ke=function(){return e},e}var xe=y.a.div(ke()),Ce=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).tests=[{progress:10,date:"20.02.20",id:1}],e.state={notificationCounter:2},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.tests.length>0&&this.setState({notificationCounter:3})}},{key:"render",value:function(){var e=this.tests.map((function(e,t){return r.a.createElement(be,{test:!0,progress:e.progress,date:e.date,key:t,test_id:e.id,z:!0})})),t=X.lesson,n=t.name,a=t.language;return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,null,n?r.a.createElement(A,{title:"".concat(n," (").concat(a,")")}):r.a.createElement(r.a.Fragment,null," hello "),r.a.createElement(Q,{type:this.state.notificationCounter}),r.a.createElement("div",{className:"test-list"},e)),r.a.createElement("div",{onClick:function(){return console.log("hello")}},r.a.createElement($,{type:"new-test"})))}}]),t}(a.Component),ze=Object(c.e)(Ce);function Fe(){var e=Object(E.a)(["\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-gap: 3rem;\n\n    .test-answer {\n        display: grid;\n        grid-gap: 1rem;\n    }\n    .test-answer_item {\n        padding-bottom: 1rem;\n    }\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(E.a)(["       \n    margin-top: ","px;\n    width: calc(","px);\n    .test-option_wrapper-absolute {\n        position: absolute;\n        padding-bottom: 4rem;\n    }\n    .test-option-wrapper {\n        display: grid\n        grid-gap: 1rem;\n    }\n    .test-option {\n        background: #fafafa;\n        border-radius: 10px;\n        padding: 1rem;\n        margin: 1rem;\n    }   \n    .correct {\n        background: rgba(130, 222, 139, 0.5);\n    }\n    .incorrect {\n        background: rgba(255, 128, 128, 0.2);\n    }\n"]);return Ne=function(){return e},e}function De(){var e=Object(E.a)(["\n    margin-top: 1rem;\n\n    .test-content-inner {\n        position: relative;\n    }\n    .test-question-wrapper {\n        display: grid;\n        grid-template-columns: repeat(20, 1fr);\n        grid-template-rows: auto 1fr;\n        transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n    }\n    .test-question {\n        grid-gap: 0.5rem;\n        display: grid;\n        padding: 1rem;\n        width: calc(100vw - 4rem);\n        border-radius: 15px;\n        margin-right: 0.5rem;\n        background: #fff;\n        grid-template-rows: auto 1fr;\n    }\n    .status {\n        display: grid;\n        grid-template-columns: 1fr auto;\n    }\n    // .correct {\n        // background: rgba(130, 222, 139, 0.5);\n    // }\n    // .incorrect {\n        // background: rgba(255, 128, 128, 0.2);\n    // }\n"]);return De=function(){return e},e}function Se(){var e=Object(E.a)(["   \n    padding-bottom: 4rem;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    .test-content {\n        display: grid;\n    }\n    .test-header {\n        background: #FFB600;\n        padding: 1rem;\n        display: grid;\n        grid-template-rows: auto 1fr;\n        position: fixed;\n\n    }\n"]);return Se=function(){return e},e}var Ae=y.a.div(Se()),qe=y.a.div(De()),Le=y.a.div(Ne(),(function(e){return e.margin}),(function(e){return e.width})),Qe=y.a.div(Fe()),He=[{id:0,question:"\u041d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442, \u043e\u0434\u043d\u0430\u043a\u043e \u0437\u0430\u0431\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u043d\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438?",options:["\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439","\u0420\u0430\u0432\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0440\u0430\u043c\u043a\u0438 \u0438 \u043c\u0435\u0441\u0442\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0434\u0440\u043e\u0432","C\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0434\u0440\u043e\u0432, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0430\u0441\u0443\u0449\u043d\u044b\u043c","\u0420\u0430\u0432\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0440\u0430\u043c\u043a\u0438 \u0438 \u043c\u0435\u0441\u0442\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0434\u0440\u043e\u0432","\u0420\u0430\u0432\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0440\u0430\u043c\u043a\u0438 \u0438 \u043c\u0435\u0441\u0442\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0434\u0440\u043e\u0432"],answer:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439"},{id:1,question:"\u041d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442, \u043e\u0434\u043d\u0430\u043a\u043e \u0437\u0430\u0431\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u043d\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438?",options:["Bassan","Shmargun","Lirinirill","Darnurda","Darnurda"],answer:"Bassan"},{id:2,question:"What is your age?",options:["1","2","3","4"],answer:"2"},{id:3,question:"What is your pussy?",options:["Assanpussy","Argunpussy","Chirillpussy","Argunpussy"],answer:"Chirillpussy"}],_e=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).loadTest=function(){var e=n.state.currentQuestion;n.setState((function(){return{questions:He.map((function(e){return e.question})),options:He[e].options,answers:He[e].answer,correctAnswer:He[e].answer}}))},n.nextQuestionHandler=function(){var e=n.state,t=e.userAnswer,a=e.correctAnswer,r=e.score;n.setState({currentQuestion:n.state.currentQuestion+1}),t===a&&n.setState({score:r+1})},n.finishHandler=function(){var e=n.state,t=e.userAnswer,a=e.correctAnswer,r=e.score;n.state.currentQuestion===He.length-1&&(n.setState({testEnd:!0}),t===a&&n.setState({score:r+1}))},n.state={width:e.window,userAnswer:null,currentQuestion:0,options:[],correctAnswer:null,testEnd:!1,score:0,questions:He.map((function(e){return e.question})),elHeight:0},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({width:window.innerWidth})}},{key:"componentDidMount",value:function(){this.loadTest();var e=this.divElement.clientHeight;this.setState({elHeight:e})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentQuestion;this.state.currentQuestion!==t.currentQuestion&&this.setState((function(){return{questions:He.map((function(e){return e.question})),options:He[n].options,answers:He[n].answer,correctAnswer:He[n].answer,userAnswer:null}}))}},{key:"setAnswer",value:function(e){this.setState({userAnswer:e})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.questions,i=n.options,s=n.currentQuestion,o=n.userAnswer,c=n.correctAnswer;return n.testEnd?r.a.createElement(Qe,null,r.a.createElement("div",null,"hello, your final score is ",this.state.score),r.a.createElement("div",{className:"test-answer"},"need to remember:",r.a.createElement("div",null,He.map((function(e,t){return r.a.createElement("div",{className:"test-answer_item",key:t},r.a.createElement(D,{type:"secondary"},"(incorrect ans number) \u0438\u0437 ",He.length),r.a.createElement("div",null,e.question),e.answer)})))),r.a.createElement($,{type:"end-test"})):(e=o===c,r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null,r.a.createElement("div",{className:"test-header",ref:function(e){t.divElement=e}},r.a.createElement("div",{className:"test-header-fixed"},r.a.createElement(A,{title:"".concat(X.lesson.name," (").concat(X.lesson.language,")")}),r.a.createElement("div",{className:"test-content"},r.a.createElement(qe,null,r.a.createElement("div",{className:"test-content-inner active-slide-".concat(s)},r.a.createElement("div",{className:"test-question-wrapper",style:{transform:"translateX(-".concat(s*(100/He.length),"%)")}},a.map((function(t,n){return r.a.createElement("div",{key:n,className:"test-question\n                            ".concat(o===c?"correct":o&&!e&&"incorrect")},r.a.createElement("div",{className:"status"},r.a.createElement(D,{type:"secondary"},"\u0412\u043e\u043f\u0440\u043e\u0441 ",s+1," \u0438\u0437 ",He.length),o===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:C.a,color:"#31B43D",size:"lg"})):o&&!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:C.f,color:"#FF8080",size:"lg"}))),r.a.createElement("div",{className:"questions"},t))})),r.a.createElement("div",null))))))),r.a.createElement(Le,{margin:this.state.elHeight,width:this.state.width},i.map((function(n){return r.a.createElement("div",{className:"test-option-wrapper"},r.a.createElement("div",{key:n.id,className:"test-option\n                                ".concat(o&&n===c?"correct":o===n&&!e&&"incorrect","\n                                "),onClick:function(){o?null:t.setAnswer(n)}},n))}))),s<He.length-1&&r.a.createElement("div",{onClick:this.nextQuestionHandler},r.a.createElement($,{type:"next-question"})),s===He.length-1&&r.a.createElement("div",{onClick:this.finishHandler},r.a.createElement($,{type:"submit"})))))}}]),t}(a.Component),Be=Object(c.e)(Object(h.a)(_e));u.a.send("VKWebAppInit");s.a.render(r.a.createElement(o.a,{basename:"mentorium-vk-app"},r.a.createElement(v,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null))}}),r.a.createElement(c.a,{exact:!0,path:"/new",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null),r.a.createElement($,{type:"session"}))}}),r.a.createElement(c.a,{exact:!0,path:"/course/:id",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,null))}}),r.a.createElement(c.a,{exact:!0,path:"/test/:test_id",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Be,null))}}))),document.getElementById("root"))},99:function(e,t,n){e.exports=n(184)}},[[99,1,2]]]);
//# sourceMappingURL=main.f3ed3106.chunk.js.map