(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QeAG:function(t,n,i){"use strict";i.r(n),i.d(n,"AuthModule",(function(){return M}));var e=i("BonA"),o=i("ofXK"),a=i("3Pt+"),s=i("tyNb"),r=i("fXoL"),l=i("ccyI"),c=i("kmnG"),u=i("qFsG"),d=i("bTqV"),m=i("Xa2L");function b(t,n){if(1&t&&(r.Sb(0,"button",13),r.wc(1," Login "),r.Rb()),2&t){r.ec();const t=r.nc(1);r.jc("disabled",!t.valid)}}function p(t,n){1&t&&r.Ob(0,"mat-spinner")}class f{isErrorState(t,n){return!!(t&&t.invalid&&(t.dirty||t.touched||n&&n.submitted))}}let h=(()=>{class t{constructor(t,n){this.authService=t,this.router=n,this.emailFormControl=new a.c("",[a.q.required,a.q.email]),this.passwordFormControl=new a.c("",[a.q.required]),this.matcher=new f,this.isloading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isloading=!1})}ngOnDestroy(){this.authStatusSub.unsubscribe()}onLogin(t){t.invalid?alert("form i invalid"):(this.isloading=!0,this.authService.loginUser(t.value.email,t.value.password))}}return t.\u0275fac=function(n){return new(n||t)(r.Nb(l.a),r.Nb(s.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-login"]],decls:15,vars:2,consts:[[3,"submit"],["loginForm","ngForm"],[1,"email-full-width"],["for","email"],["matInput","","placeholder","example@example.com","ngModel","","type","text","id","email","name","email","required","","email","",1,"form-control"],["emailInput","ngModel"],[1,"password-full-width"],["for","password"],["matInput","","placeholder","password","type","password","id","password","name","password","ngModel","","required","","password","","minlength","6"],["passwordInput","ngModel"],[1,"button-row"],["mat-raised-button","","color","primary","type","submit",3,"disabled",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,n){if(1&t){const t=r.Tb();r.Sb(0,"form",0,1),r.ac("submit",(function(){r.pc(t);const i=r.nc(1);return n.onLogin(i)})),r.Sb(2,"mat-form-field",2),r.Sb(3,"mat-label",3),r.wc(4," E-mail: "),r.Rb(),r.Ob(5,"input",4,5),r.Rb(),r.Sb(7,"mat-form-field",6),r.Sb(8,"mat-label",7),r.wc(9,"Password "),r.Rb(),r.Ob(10,"input",8,9),r.Rb(),r.Sb(12,"div",10),r.vc(13,b,2,1,"button",11),r.Rb(),r.vc(14,p,1,0,"mat-spinner",12),r.Rb()}2&t&&(r.Bb(13),r.jc("ngIf",!n.isloading),r.Bb(1),r.jc("ngIf",n.isloading))},directives:[a.r,a.l,a.m,c.c,c.f,u.a,a.a,a.k,a.n,a.p,a.b,a.h,o.k,d.b,m.b],styles:["mat-form-field[_ngcontent-%COMP%]{min-width:0;max-width:auto;width:100%};.example-form[_ngcontent-%COMP%]{width:80%}.email-full-width[_ngcontent-%COMP%], .password-full-width[_ngcontent-%COMP%]{width:100%}.button-row[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:space-between}"]}),t})();var w=i("Wp6s");function g(t,n){1&t&&r.Ob(0,"mat-spinner")}function S(t,n){if(1&t&&(r.Sb(0,"button",13),r.wc(1," Register to Post "),r.Rb()),2&t){r.ec();const t=r.nc(1);r.jc("disabled",!t.valid)}}function v(t,n){if(1&t){const t=r.Tb();r.Sb(0,"form",2,3),r.ac("submit",(function(){r.pc(t);const n=r.nc(1);return r.ec().onSignup(n)})),r.Sb(2,"mat-form-field",4),r.Sb(3,"mat-label",5),r.wc(4," E-mail: "),r.Rb(),r.Ob(5,"input",6,7),r.Rb(),r.Sb(7,"mat-form-field",8),r.Sb(8,"mat-label"),r.wc(9,"Password"),r.Rb(),r.Ob(10,"input",9,10),r.Rb(),r.Sb(12,"div",11),r.vc(13,S,2,1,"button",12),r.Rb(),r.Rb()}if(2&t){const t=r.ec();r.Bb(13),r.jc("ngIf",!t.isloading)}}class y{isErrorState(t,n){return!!(t&&t.invalid&&(t.dirty||t.touched||n&&n.submitted))}}const O=[{path:"login",component:h},{path:"signup",component:(()=>{class t{constructor(t){this.authService=t,this.emailFormControl=new a.c("",[a.q.required,a.q.email]),this.passwordFormControl=new a.c("",[a.q.required]),this.matcher=new y,this.isloading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isloading=!1})}onSignup(t){t.invalid?alert("form in invalid"):(this.isloading=!0,this.authService.signupUser(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.Nb(l.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-signup"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],[1,"email-full-width"],["for","email"],["matInput","","placeholder","example@example.com","ngModel","","type","email","id","email","name","email","required","","email","",1,"form-control"],["emailInput","ngModel"],[1,"password-full-width"],["matInput","","placeholder","******","ngModel","","type","password","id","passowrd","name","password","required","","password","",1,"form-control"],["passwordInput","ngModel"],[1,"button-row"],["mat-raised-button","","color","primary","type","submit",3,"disabled",4,"ngIf"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,n){1&t&&(r.Sb(0,"mat-card"),r.vc(1,g,1,0,"mat-spinner",0),r.vc(2,v,14,1,"form",1),r.Rb()),2&t&&(r.Bb(1),r.jc("ngIf",n.isloading),r.Bb(1),r.jc("ngIf",!n.isloading))},directives:[w.a,o.k,m.b,a.r,a.l,a.m,c.c,c.f,u.a,a.a,a.k,a.n,a.p,a.b,d.b],styles:["mat-form-field[_ngcontent-%COMP%]{min-width:0;max-width:auto;width:100%};.example-form[_ngcontent-%COMP%]{width:80%}.email-full-width[_ngcontent-%COMP%], .first-full-width[_ngcontent-%COMP%], .last-full-width[_ngcontent-%COMP%], .password-full-width[_ngcontent-%COMP%]{width:100%}.button-row[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:space-between}"]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(n){return new(n||t)},imports:[[s.f.forChild(O)],s.f]}),t})(),M=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(n){return new(n||t)},imports:[[e.a,o.c,a.g,I]]}),t})()}}]);