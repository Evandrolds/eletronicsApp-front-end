"use strict";(self.webpackChunkTarefas_App=self.webpackChunkTarefas_App||[]).push([[582],{7582:(v,p,a)=>{a.r(p),a.d(p,{CarrinhoModule:()=>x});var s=a(6895),l=a(9541),n=a(1571),m=a(8065),c=a(433);function C(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"li",8),n._UZ(1,"img",9),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label",10),n._uU(8,"Quantidade: "),n.TgZ(9,"input",11),n.NdJ("ngModelChange",function(i){const u=n.CHM(t).$implicit;return n.KtG(u.quantidade=i)})("change",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.totalProdutosCarrinho())}),n.qZA()(),n.TgZ(10,"button",12),n.NdJ("click",function(){const h=n.CHM(t).$implicit,u=n.oxw(2);return n.KtG(u.removeProdutoCarrinho(h.id))}),n._uU(11," Remover "),n.qZA()()}if(2&o){const t=e.$implicit;n.xp6(1),n.Q6J("src",t.imagem,n.LSH),n.xp6(2),n.Oqu(t.nome),n.xp6(2),n.hij("Pre\xe7o: ",n.xi3(6,4,t.preco,"BRL"),""),n.xp6(4),n.Q6J("ngModel",t.quantidade)}}function d(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div",2)(1,"h2",3),n._uU(2,"Carrinho"),n.qZA(),n.TgZ(3,"ul",4),n.YNc(4,C,12,7,"li",5),n.TgZ(5,"h2",6),n._uU(6),n.ALo(7,"currency"),n.qZA(),n.TgZ(8,"button",7),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.comprar())}),n._uU(9,"Comprar"),n.qZA()()()}if(2&o){const t=n.oxw();n.xp6(4),n.Q6J("ngForOf",t.intensDoCarrinho),n.xp6(2),n.hij(" Total de produtos: ",n.xi3(7,2,t.precoTotal,"BRL")," ")}}function g(o,e){1&o&&(n.TgZ(0,"h2",13),n._uU(1,"Voc\xea n\xe3o possue produtos no carrinho!"),n.qZA())}const _=[{path:"",component:(()=>{class o{constructor(t,r){this.carrinhoService=t,this.route=r,this.intensDoCarrinho=[],this.precoTotal=0}ngOnInit(){this.intensDoCarrinho=this.carrinhoService.obterCarrinho(),this.totalProdutosCarrinho()}removeProdutoCarrinho(t){this.intensDoCarrinho=this.intensDoCarrinho.filter(r=>r.id!==t),this.carrinhoService.removerProdutosDoCarrinho(t),this.totalProdutosCarrinho()}totalProdutosCarrinho(){this.precoTotal=this.intensDoCarrinho.reduce((t,r)=>t+r.preco*r.quantidade,0)}comprar(){alert("Parabens, compra finalizada com sucesso!"),this.carrinhoService.esvaziarCarrinho(),this.route.navigate(["produtos"])}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(m.q),n.Y36(l.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-carrinho"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["naoHaProdutos",""],[1,"container"],[1,"cart-title"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"cart-total"],[1,"btn","btn-primary",3,"click"],[1,"list-group-item"],["alt","",3,"src"],["for",""],["type","number",1,"input-quantidade",3,"ngModel","ngModelChange","change"],[1,"btn","btn-danger",3,"click"],[1,"info"]],template:function(t,r){if(1&t&&(n.YNc(0,d,10,5,"div",0),n.YNc(1,g,2,0,"ng-template",null,1,n.W1O)),2&t){const i=n.MAs(2);n.Q6J("ngIf",r.intensDoCarrinho.length>0)("ngIfElse",i)}},dependencies:[s.sg,s.O5,c.Fj,c.wV,c.JJ,c.On,s.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:25px;font-family:Times New Roman,Times,serif;font-weight:700;margin:10px;color:#82a9c4}.list-group-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:10px;justify-content:space-evenly;align-items:center}li[_ngcontent-%COMP%]{list-style-type:none}.input-quantidade[_ngcontent-%COMP%]{width:3rem}img[_ngcontent-%COMP%]{width:150px;height:150px}.info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.btn[_ngcontent-%COMP%]{margin:10px}@media (max-width: 800px){.list-group-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:10px}}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild(_),l.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.ez,f,c.u5]}),o})()}}]);