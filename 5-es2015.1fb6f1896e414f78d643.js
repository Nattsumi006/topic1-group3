(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(t,n,e){"use strict";e.r(n),e.d(n,"AdminModule",(function(){return f}));var r=e("ofXK"),c=e("tyNb"),o=e("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["app-admin"]],decls:2,vars:0,template:function(t,n){1&t&&(o.Ub(0,"h4"),o.zc(1,"HELLO FROM ADMIN PAGE"),o.Tb())},encapsulation:2}),t})();var a=e("lJxs"),s=e("ZF+8");let u=(()=>{class t{constructor(t){this.authService=t}canActivate(){return this.authService.getUser().pipe(Object(a.a)(t=>!!(null==t?void 0:t.isAdmin)))}}return t.\u0275fac=function(n){return new(n||t)(o.Yb(s.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})();const p=[{path:"admin",canActivate:[u],children:[{path:"",component:i}]}];let l=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(n){return new(n||t)},imports:[[c.e.forChild(p)],c.e]}),t})(),f=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(n){return new(n||t)},providers:[u],imports:[[r.c,l]]}),t})()}}]);