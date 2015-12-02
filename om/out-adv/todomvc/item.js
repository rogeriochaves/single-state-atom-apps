// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('todomvc.item');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('todomvc.utils');
goog.require('cljs.core.async');
todomvc.item.ESCAPE_KEY = (27);
todomvc.item.ENTER_KEY = (13);
todomvc.item.submit = (function submit(e,todo,owner,comm){
var temp__4126__auto___30166 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$183);
if(cljs.core.truth_(temp__4126__auto___30166)){
var edit_text_30167 = temp__4126__auto___30166;
if(cljs.core.not(clojure.string.blank_QMARK_(edit_text_30167.trim()))){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(todo,cljs.core.constant$keyword$184,edit_text_30167);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,todo], null));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,todo], null));
}
} else {
}

return false;
});
todomvc.item.edit = (function edit(e,todo,owner,comm){
var node = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"editField");
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,todo], null));

var G__30169 = owner;
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__30169,cljs.core.constant$keyword$188,true);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__30169,cljs.core.constant$keyword$183,cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(todo));

return G__30169;
});
todomvc.item.key_down = (function key_down(e,todo,owner,comm){
var pred__30177 = cljs.core._EQ__EQ_;
var expr__30178 = e.keyCode;
if(cljs.core.truth_((function (){var G__30180 = todomvc.item.ESCAPE_KEY;
var G__30181 = expr__30178;
return (pred__30177.cljs$core$IFn$_invoke$arity$2 ? pred__30177.cljs$core$IFn$_invoke$arity$2(G__30180,G__30181) : pred__30177.call(null,G__30180,G__30181));
})())){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$183,cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(todo));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189,todo], null));
} else {
if(cljs.core.truth_((function (){var G__30182 = todomvc.item.ENTER_KEY;
var G__30183 = expr__30178;
return (pred__30177.cljs$core$IFn$_invoke$arity$2 ? pred__30177.cljs$core$IFn$_invoke$arity$2(G__30182,G__30183) : pred__30177.call(null,G__30182,G__30183));
})())){
return todomvc.item.submit(e,todo,owner,comm);
} else {
return null;
}
}
});
todomvc.item.change = (function change(e,todo,owner){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$183,e.target.value);
});
todomvc.item.todo_item = (function todo_item(todo,owner){
if(typeof todomvc.item.t30207 !== 'undefined'){
} else {

/**
* @constructor
*/
todomvc.item.t30207 = (function (owner,todo,todo_item,meta30208){
this.owner = owner;
this.todo = todo;
this.todo_item = todo_item;
this.meta30208 = meta30208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.item.t30207.prototype.om$core$IRenderState$ = true;

todomvc.item.t30207.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30210){
var self__ = this;
var map__30211 = p__30210;
var map__30211__$1 = ((cljs.core.seq_QMARK_(map__30211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30211):map__30211);
var state = map__30211__$1;
var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30211__$1,cljs.core.constant$keyword$190);
var ___$1 = this;
var class$ = (function (){var G__30212 = "";
var G__30212__$1 = (cljs.core.truth_(cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(self__.todo))?[cljs.core.str(G__30212),cljs.core.str("completed ")].join(''):G__30212);
var G__30212__$2 = (cljs.core.truth_(cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(self__.todo))?[cljs.core.str(G__30212__$1),cljs.core.str("editing")].join(''):G__30212__$1);
return G__30212__$2;
})();
var G__30213 = {"style": todomvc.utils.hidden(cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(self__.todo)), "className": class$};
var G__30214 = (function (){var G__30216 = {"className": "view"};
var G__30217 = (function (){var G__30220 = {"onChange": ((function (G__30216,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (___$2){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.todo,cljs.core.constant$keyword$191,((function (G__30216,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (p1__30184_SHARP_){
return cljs.core.not(p1__30184_SHARP_);
});})(G__30216,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm))
);
});})(G__30216,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm))
, "checked": (function (){var and__3764__auto__ = cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(self__.todo);
if(cljs.core.truth_(and__3764__auto__)){
return "checked";
} else {
return and__3764__auto__;
}
})(), "type": "checkbox", "className": "toggle"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__30220) : om.dom.input.call(null,G__30220));
})();
var G__30218 = (function (){var G__30221 = {"onDoubleClick": ((function (G__30216,G__30217,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (p1__30185_SHARP_){
return todomvc.item.edit(p1__30185_SHARP_,self__.todo,self__.owner,comm);
});})(G__30216,G__30217,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm))
};
var G__30222 = cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(self__.todo);
return React.DOM.label(G__30221,G__30222);
})();
var G__30219 = (function (){var G__30223 = {"onClick": ((function (G__30216,G__30217,G__30218,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (___$2){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,self__.todo], null));
});})(G__30216,G__30217,G__30218,G__30213,class$,___$1,map__30211,map__30211__$1,state,comm))
, "className": "destroy"};
return React.DOM.button(G__30223);
})();
return React.DOM.div(G__30216,G__30217,G__30218,G__30219);
})();
var G__30215 = (function (){var G__30224 = {"onKeyDown": ((function (G__30213,G__30214,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (p1__30188_SHARP_){
return todomvc.item.key_down(p1__30188_SHARP_,self__.todo,self__.owner,comm);
});})(G__30213,G__30214,class$,___$1,map__30211,map__30211__$1,state,comm))
, "onChange": ((function (G__30213,G__30214,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (p1__30187_SHARP_){
return todomvc.item.change(p1__30187_SHARP_,self__.todo,self__.owner);
});})(G__30213,G__30214,class$,___$1,map__30211,map__30211__$1,state,comm))
, "onBlur": ((function (G__30213,G__30214,class$,___$1,map__30211,map__30211__$1,state,comm){
return (function (p1__30186_SHARP_){
return todomvc.item.submit(p1__30186_SHARP_,self__.todo,self__.owner,comm);
});})(G__30213,G__30214,class$,___$1,map__30211,map__30211__$1,state,comm))
, "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$183), "className": "edit", "ref": "editField"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__30224) : om.dom.input.call(null,G__30224));
})();
return React.DOM.li(G__30213,G__30214,G__30215);
});

todomvc.item.t30207.prototype.om$core$IDidUpdate$ = true;

todomvc.item.t30207.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_((function (){var and__3764__auto__ = cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(self__.todo);
if(cljs.core.truth_(and__3764__auto__)){
return om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$188);
} else {
return and__3764__auto__;
}
})())){
var node_30225 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"editField");
var len_30226 = node_30225.value.length;
node_30225.focus();

node_30225.setSelectionRange(len_30226,len_30226);

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$188,null);
} else {
return null;
}
});

todomvc.item.t30207.prototype.om$core$IInitState$ = true;

todomvc.item.t30207.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$183,cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(self__.todo)], null);
});

todomvc.item.t30207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30209){
var self__ = this;
var _30209__$1 = this;
return self__.meta30208;
});

todomvc.item.t30207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30209,meta30208__$1){
var self__ = this;
var _30209__$1 = this;
return (new todomvc.item.t30207(self__.owner,self__.todo,self__.todo_item,meta30208__$1));
});

todomvc.item.t30207.cljs$lang$type = true;

todomvc.item.t30207.cljs$lang$ctorStr = "todomvc.item/t30207";

todomvc.item.t30207.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"todomvc.item/t30207");
});

todomvc.item.__GT_t30207 = (function __GT_t30207(owner__$1,todo__$1,todo_item__$1,meta30208){
return (new todomvc.item.t30207(owner__$1,todo__$1,todo_item__$1,meta30208));
});

}

return (new todomvc.item.t30207(owner,todo,todo_item,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,64,cljs.core.constant$keyword$110,83,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,48,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/src/todomvc/item.cljs"], null)));
});
