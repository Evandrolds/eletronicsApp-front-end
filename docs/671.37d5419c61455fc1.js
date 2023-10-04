"use strict";(self.webpackChunkTarefas_App=self.webpackChunkTarefas_App||[]).push([[671],{2671:(O,c,l)=>{l.r(c),l.d(c,{ContatoModule:()=>U});var o=l(1571);let p=(()=>{class t{constructor(){this.mask="."}onKeyPress(n){return this.filterInput(n)}onPaste(n){return this.filterInput(n)}filterInput(n){const e=n._input||n.target;if(n.ctrlKey||n.altKey)return;let s=null,i=null;switch(n._type||n.type){case"keypress":const m=n.charCode||n.keyCode||0;if(13===m||[8,9,13,35,36,37,39,46].indexOf(m)>-1&&0===n.charCode&&n.keyCode===m)return!0;s=String.fromCharCode(m),i=new RegExp(this.mask);break;case"paste":return e.dataset.value_before_paste=n.target.value,setTimeout(()=>{n._type="after_paste",n._input=e,this.filterInput(n)},0),!0;case"after_paste":s=e.value,i=new RegExp(`^(${this.mask})+$`);break;default:return n.preventDefault(),!1}return!!i.test(s)||("after_paste"===n._type&&(e.value=e.dataset.value_before_paste),n.preventDefault(),!1)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=o.lG2({type:t,selectors:[["input","mask",""]],hostBindings:function(n,e){1&n&&o.NdJ("keypress",function(i){return e.onKeyPress(i)})("paste",function(i){return e.onPaste(i)})},inputs:{mask:"mask"}}),t})(),d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})();var f=l(6895),u=l(9541),r=l(433);function C(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," Esse campo precisa ter no m\xednimo 4 caracteres "),o.qZA())}function g(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," Esse campo \xe9 obrigat\xf3rio "),o.qZA())}function _(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,C,2,0,"small",4),o.YNc(2,g,2,0,"small",4),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.hasError("required"))}}function v(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," Esse campo precisa ter no m\xednimo 10 caracteres! "),o.qZA())}function x(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," Esse campo \xe9 obrigat\xf3rio! "),o.qZA())}function h(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,v,2,0,"small",4),o.YNc(2,x,2,0,"small",4),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.hasError("required"))}}function y(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," Esse campo \xe9 obrigat\xf3rio! "),o.qZA())}function I(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," O numero de telefone precisa ter no m\xednimo de 11 digitos! "),o.qZA())}function Z(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," O numero de telefone tem apenas 11 digitos "),o.qZA())}function k(t,a){if(1&t&&(o.TgZ(0,"div",13),o.YNc(1,y,2,0,"small",4),o.YNc(2,I,2,0,"small",4),o.YNc(3,Z,2,0,"small",4),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.hasError("required")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.hasError("maxlength"))}}function T(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," E-mail incorreto, tente seuemail@exemplo.com "),o.qZA())}function M(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," E-mail obrigat\xf3rio! "),o.qZA())}function E(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,T,2,0,"small",4),o.YNc(2,M,2,0,"small",4),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.hasError("email")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.hasError("required"))}}function N(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," O campo de texto precisa de no m\xednimo 30 caracteres "),o.qZA())}function A(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," O campo de texto \xe9 obrigat\xf3rio! "),o.qZA())}function J(t,a){1&t&&(o.TgZ(0,"small"),o._uU(1," O limite de caracteres acabou! "),o.qZA())}function q(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,N,2,0,"small",4),o.YNc(2,A,2,0,"small",4),o.YNc(3,J,2,0,"small",4),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.texto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.texto.hasError("required")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.texto.hasError("maxlength"))}}const w=[{path:"",component:(()=>{class t{constructor(n){this.formBuilder=n,this.formContato=this.formBuilder.group({nome:["",[r.kI.minLength(4),r.kI.required]],assunto:["",[r.kI.required,r.kI.minLength(10)]],telefone:["",[r.kI.minLength(10),r.kI.maxLength(11),r.kI.required]],email:["",[r.kI.email,r.kI.required]],texto:["",[r.kI.minLength(30),r.kI.maxLength(350),r.kI.required]]})}salvarContatop(){this.formContato.reset(),alert("As informa\xe7\xf5es foram envidas com sucesso!")}ngOnInit(){throw new Error("Method not implemented.")}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(r.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contato"]],decls:21,vars:27,consts:[[1,"title-contato"],[1,"container-fluid"],[1,"contato-form",3,"formGroup"],["type","nome","placeholder","Nome:","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Assunto:","formControlName","assunto"],["type","tel","placeholder","TEL: (00) 00000-0000","mask","(00) 0 0000-0000","formControlName","telefone"],["class","ivalid-format",4,"ngIf"],["type","email","placeholder","E-mail","formControlName","email"],["type","text","maxlength","350","placeholder","M\xe1ximo de caracteres 350","formControlName","texto",1,"campo-texto"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],[1,"map"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.8344710178467!2d-46.787525960202736!3d-23.55615012405767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff7ec8b1c40b%3A0x8af27e4faa648bda!2sAv.%20Jos%C3%A9%20Louren%C3%A7o%2C%20215%20-%20Jaguaribe%2C%20Osasco%20-%20SP%2C%2006053-020!5e0!3m2!1spt-BR!2sbr!4v1680304396635!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",1,"map-Iframe",2,"border","0"],[1,"ivalid-format"]],template:function(n,e){1&n&&(o.TgZ(0,"h2",0),o._uU(1,"Entrar em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o._UZ(4,"input",3),o.YNc(5,_,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,h,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,k,4,3,"div",7),o._UZ(10,"input",8),o.YNc(11,E,3,2,"div",4),o.TgZ(12,"textarea",9),o._uU(13,"    "),o.qZA(),o.YNc(14,q,4,3,"div",4),o.TgZ(15,"button",10),o.NdJ("click",function(){return e.salvarContatop()}),o._uU(16," Enviar "),o.qZA()(),o.TgZ(17,"div",11)(18,"p"),o._uU(19,"Av. Jos\xe9 Louren\xe7o, 215 - Jaguaribe, Osasco - SP, 06053-020"),o.qZA(),o._UZ(20,"iframe",12),o.qZA()()),2&n&&(o.xp6(3),o.Q6J("formGroup",e.formContato),o.xp6(1),o.ekj("valid",e.formContato.controls.nome.valid)("invalid",e.formContato.controls.nome.invalid&&(e.formContato.controls.nome.touched||e.formContato.controls.nome.dirty)),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.invalid&&(e.formContato.controls.nome.touched||e.formContato.controls.nome.dirty)),o.xp6(1),o.ekj("valid",e.formContato.controls.assunto.valid)("invalid",e.formContato.controls.assunto.invalid&&(e.formContato.controls.assunto.touched||e.formContato.controls.assunto.dirty)),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.invalid&&e.formContato.controls.assunto.touched||e.formContato.controls.assunto.dirty),o.xp6(1),o.ekj("valid",e.formContato.controls.telefone.valid)("invalid",e.formContato.controls.telefone.invalid&&(e.formContato.controls.telefone.touched||e.formContato.controls.telefone.dirty)),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.invalid&&(e.formContato.controls.telefone.touched||e.formContato.controls.telefone.dirty)),o.xp6(1),o.ekj("valid",e.formContato.controls.email.valid)("invalid",e.formContato.controls.email.invalid&&(e.formContato.controls.email.touched||e.formContato.controls.email.dirty)),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.invalid&&(e.formContato.controls.email.touched||e.formContato.controls.email.dirty)),o.xp6(1),o.ekj("valid",e.formContato.controls.texto.valid)("invalid",e.formContato.controls.texto.invalid&&(e.formContato.controls.texto.touched||e.formContato.controls.texto.dirty)),o.xp6(2),o.Q6J("ngIf",e.formContato.controls.texto.invalid&&(e.formContato.controls.texto.touched||e.formContato.controls.texto.dirty)),o.xp6(1),o.Q6J("disabled",e.formContato.invalid))},dependencies:[f.O5,r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u,p],styles:[".title-contato[_ngcontent-%COMP%]{font-size:25px;font-weight:700;margin:15px}.container-fluid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly}.contato-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;row-gap:15px;margin-right:10px;margin-top:10px}.campo-texto[_ngcontent-%COMP%]{height:160px}.btn[_ngcontent-%COMP%]{margin-top:10px}input[_ngcontent-%COMP%]{padding:10px}small[_ngcontent-%COMP%]{color:#e45a38}.map[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.map-Iframe[_ngcontent-%COMP%]{display:flex;justify-content:center;align-self:center;padding:auto}p[_ngcontent-%COMP%]{font-weight:700;font-size:14px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(w),u.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[f.ez,b,r.UX,d]}),t})()}}]);