// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('todomvc.app');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('todomvc.utils');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('todomvc.item');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('om.core');
cljs.core.enable_console_print_BANG_();
todomvc.app.ENTER_KEY = (13);
todomvc.app.app_state = (function (){var G__29944 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,cljs.core.constant$keyword$196,cljs.core.constant$keyword$195,cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29944) : cljs.core.atom.call(null,G__29944));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__10347__auto__){
var map__29945 = params__10347__auto__;
var map__29945__$1 = ((cljs.core.seq_QMARK_(map__29945))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29945):map__29945);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todomvc.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$194,cljs.core.constant$keyword$196);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:filter",(function (params__10347__auto__){
var map__29946 = params__10347__auto__;
var map__29946__$1 = ((cljs.core.seq_QMARK_(map__29946))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29946):map__29946);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29946__$1,cljs.core.constant$keyword$197);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todomvc.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$194,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(filter));
}));
todomvc.app.history = (new goog.History());
var G__29947_29950 = todomvc.app.history;
var G__29948_29951 = goog.history.EventType.NAVIGATE;
var G__29949_29952 = ((function (G__29947_29950,G__29948_29951){
return (function (e){
return secretary.core.dispatch_BANG_(e.token);
});})(G__29947_29950,G__29948_29951))
;
goog.events.listen(G__29947_29950,G__29948_29951,G__29949_29952);
todomvc.app.history.setEnabled(true);
todomvc.app.visible_QMARK_ = (function visible_QMARK_(todo,filter){
var G__29954 = (((filter instanceof cljs.core.Keyword))?filter.fqn:null);
switch (G__29954) {
case "completed":
return cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(todo);

break;
case "active":
return cljs.core.not(cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(todo));

break;
case "all":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(filter)].join('')));

}
});
todomvc.app.main = (function main(p__29957,comm){
var map__29966 = p__29957;
var map__29966__$1 = ((cljs.core.seq_QMARK_(map__29966))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29966):map__29966);
var app = map__29966__$1;
var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29966__$1,cljs.core.constant$keyword$192);
var showing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29966__$1,cljs.core.constant$keyword$194);
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29966__$1,cljs.core.constant$keyword$195);
var G__29967 = {"style": todomvc.utils.hidden(cljs.core.empty_QMARK_(todos)), "id": "main"};
var G__29968 = (function (){var G__29970 = {"checked": cljs.core.every_QMARK_(cljs.core.constant$keyword$191,todos), "onChange": ((function (G__29967,map__29966,map__29966__$1,app,editing,showing,todos){
return (function (p1__29956_SHARP_){
var G__29971 = p1__29956_SHARP_;
var G__29972 = app;
return (todomvc.app.toggle_all.cljs$core$IFn$_invoke$arity$2 ? todomvc.app.toggle_all.cljs$core$IFn$_invoke$arity$2(G__29971,G__29972) : todomvc.app.toggle_all.call(null,G__29971,G__29972));
});})(G__29967,map__29966,map__29966__$1,app,editing,showing,todos))
, "type": "checkbox", "id": "toggle-all"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__29970) : om.dom.input.call(null,G__29970));
})();
var G__29969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"id": "todo-list"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(todomvc.item.todo_item,todos,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$190,comm], null),cljs.core.constant$keyword$169,cljs.core.constant$keyword$198,cljs.core.constant$keyword$166,((function (G__29967,G__29968,map__29966,map__29966__$1,app,editing,showing,todos){
return (function (todo){
var G__29973 = todo;
var G__29973__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(todo),editing))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29973,cljs.core.constant$keyword$192,true):G__29973);
var G__29973__$2 = ((cljs.core.not(todomvc.app.visible_QMARK_(todo,showing)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29973__$1,cljs.core.constant$keyword$193,true):G__29973__$1);
return G__29973__$2;
});})(G__29967,G__29968,map__29966,map__29966__$1,app,editing,showing,todos))
], null)));
return React.DOM.section(G__29967,G__29968,G__29969);
});
todomvc.app.make_clear_button = (function make_clear_button(completed,comm){
if((completed > (0))){
var G__29976 = {"onClick": (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,todomvc.utils.now()], null));
}), "id": "clear-completed"};
var G__29977 = [cljs.core.str("Clear completed ("),cljs.core.str(completed),cljs.core.str(")")].join('');
return React.DOM.button(G__29976,G__29977);
} else {
return null;
}
});
todomvc.app.footer = (function footer(app,count,completed,comm){
var clear_button = todomvc.app.make_clear_button(completed,comm);
var sel = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.zipmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,cljs.core.constant$keyword$200,cljs.core.constant$keyword$191], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")),cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(app),"selected");
var G__30006 = {"style": todomvc.utils.hidden(cljs.core.empty_QMARK_(cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(app))), "id": "footer"};
var G__30007 = (function (){var G__30010 = {"id": "todo-count"};
var G__30011 = (function (){var G__30013 = null;
var G__30014 = count;
return React.DOM.strong(G__30013,G__30014);
})();
var G__30012 = [cljs.core.str(" "),cljs.core.str(todomvc.utils.pluralize(count,"item")),cljs.core.str(" left")].join('');
return React.DOM.span(G__30010,G__30011,G__30012);
})();
var G__30008 = (function (){var G__30015 = {"id": "filters"};
var G__30016 = (function (){var G__30019 = null;
var G__30020 = (function (){var G__30021 = {"className": (function (){var G__30023 = cljs.core.constant$keyword$196;
return (sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(G__30023) : sel.call(null,G__30023));
})(), "href": "#/"};
var G__30022 = "All";
return React.DOM.a(G__30021,G__30022);
})();
return React.DOM.li(G__30019,G__30020);
})();
var G__30017 = (function (){var G__30024 = null;
var G__30025 = (function (){var G__30026 = {"className": (function (){var G__30028 = cljs.core.constant$keyword$200;
return (sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(G__30028) : sel.call(null,G__30028));
})(), "href": "#/active"};
var G__30027 = "Active";
return React.DOM.a(G__30026,G__30027);
})();
return React.DOM.li(G__30024,G__30025);
})();
var G__30018 = (function (){var G__30029 = null;
var G__30030 = (function (){var G__30031 = {"className": (function (){var G__30033 = cljs.core.constant$keyword$191;
return (sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(G__30033) : sel.call(null,G__30033));
})(), "href": "#/completed"};
var G__30032 = "Completed";
return React.DOM.a(G__30031,G__30032);
})();
return React.DOM.li(G__30029,G__30030);
})();
return React.DOM.ul(G__30015,G__30016,G__30017,G__30018);
})();
var G__30009 = clear_button;
return React.DOM.footer(G__30006,G__30007,G__30008,G__30009);
});
todomvc.app.toggle_all = (function toggle_all(e,app){
var checked = e.target.checked;
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$195,((function (checked){
return (function (todos){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (checked){
return (function (p1__30034_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30034_SHARP_,cljs.core.constant$keyword$191,checked);
});})(checked))
,todos));
});})(checked))
);
});
todomvc.app.handle_new_todo_keydown = (function handle_new_todo_keydown(e,app,owner){
if((e.which === todomvc.app.ENTER_KEY)){
var new_field_30036 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"newField");
if(cljs.core.truth_(clojure.string.blank_QMARK_(new_field_30036.value.trim()))){
} else {
var new_todo_30037 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$198,todomvc.utils.guid(),cljs.core.constant$keyword$184,new_field_30036.value,cljs.core.constant$keyword$191,false], null);
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$195,((function (new_todo_30037,new_field_30036){
return (function (p1__30035_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30035_SHARP_,new_todo_30037);
});})(new_todo_30037,new_field_30036))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new_todo_30037], null));

new_field_30036.value = "";
}

return false;
} else {
return null;
}
});
todomvc.app.destroy_todo = (function destroy_todo(app,p__30039){
var map__30041 = p__30039;
var map__30041__$1 = ((cljs.core.seq_QMARK_(map__30041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30041):map__30041);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30041__$1,cljs.core.constant$keyword$198);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$195,((function (map__30041,map__30041__$1,id){
return (function (todos){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__30041,map__30041__$1,id){
return (function (p1__30038_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(p1__30038_SHARP_),id);
});})(map__30041,map__30041__$1,id))
,todos));
});})(map__30041,map__30041__$1,id))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,id], null));
});
todomvc.app.edit_todo = (function edit_todo(app,p__30042){
var map__30044 = p__30042;
var map__30044__$1 = ((cljs.core.seq_QMARK_(map__30044))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30044):map__30044);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30044__$1,cljs.core.constant$keyword$198);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$192,id);
});
todomvc.app.save_todos = (function save_todos(app){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$192,null);
});
todomvc.app.cancel_action = (function cancel_action(app){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$192,null);
});
todomvc.app.clear_completed = (function clear_completed(app){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$195,(function (todos){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$191,todos));
}));
});
todomvc.app.handle_event = (function handle_event(type,app,val){
var G__30046 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30046) {
case "cancel":
return todomvc.app.cancel_action(app);

break;
case "clear":
return todomvc.app.clear_completed(app);

break;
case "save":
return todomvc.app.save_todos(app);

break;
case "edit":
return todomvc.app.edit_todo(app,val);

break;
case "destroy":
return todomvc.app.destroy_todo(app,val);

break;
default:
return null;

}
});
todomvc.app.render_start = null;
todomvc.app.todo_app = (function todo_app(p__30049,owner){
var map__30097 = p__30049;
var map__30097__$1 = ((cljs.core.seq_QMARK_(map__30097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30097):map__30097);
var app = map__30097__$1;
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30097__$1,cljs.core.constant$keyword$195);
if(typeof todomvc.app.t30098 !== 'undefined'){
} else {

/**
* @constructor
*/
todomvc.app.t30098 = (function (todos,app,map__30097,owner,p__30049,todo_app,meta30099){
this.todos = todos;
this.app = app;
this.map__30097 = map__30097;
this.owner = owner;
this.p__30049 = p__30049;
this.todo_app = todo_app;
this.meta30099 = meta30099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.app.t30098.prototype.om$core$IRenderState$ = true;

todomvc.app.t30098.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30097,map__30097__$1,app,todos){
return (function (_,p__30101){
var self__ = this;
var map__30102 = p__30101;
var map__30102__$1 = ((cljs.core.seq_QMARK_(map__30102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30102):map__30102);
var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30102__$1,cljs.core.constant$keyword$190);
var ___$1 = this;
var active = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$191,self__.todos));
var completed = (cljs.core.count(self__.todos) - active);
var G__30103 = null;
var G__30104 = (function (){var G__30105 = {"id": "header"};
var G__30106 = (function (){var G__30110 = null;
var G__30111 = "todos";
return React.DOM.h1(G__30110,G__30111);
})();
var G__30107 = (function (){var G__30112 = {"onKeyDown": ((function (G__30105,G__30106,G__30103,active,completed,___$1,map__30102,map__30102__$1,comm,map__30097,map__30097__$1,app,todos){
return (function (p1__30048_SHARP_){
return todomvc.app.handle_new_todo_keydown(p1__30048_SHARP_,self__.app,self__.owner);
});})(G__30105,G__30106,G__30103,active,completed,___$1,map__30102,map__30102__$1,comm,map__30097,map__30097__$1,app,todos))
, "placeholder": "What needs to be done?", "id": "new-todo", "ref": "newField"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__30112) : om.dom.input.call(null,G__30112));
})();
var G__30108 = todomvc.app.main(self__.app,comm);
var G__30109 = todomvc.app.footer(self__.app,active,completed,comm);
return React.DOM.header(G__30105,G__30106,G__30107,G__30108,G__30109);
})();
return React.DOM.div(G__30103,G__30104);
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.t30098.prototype.om$core$IDidUpdate$ = true;

todomvc.app.t30098.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30097,map__30097__$1,app,todos){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return todomvc.utils.store.cljs$core$IFn$_invoke$arity$2("todos",self__.todos);
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.t30098.prototype.om$core$IWillUpdate$ = true;

todomvc.app.t30098.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30097,map__30097__$1,app,todos){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return todomvc.app.render_start = todomvc.utils.now();
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.t30098.prototype.om$core$IWillMount$ = true;

todomvc.app.t30098.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__30097,map__30097__$1,app,todos){
return (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$190,comm);

var c__7226__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto__,comm,___$1,map__30097,map__30097__$1,app,todos){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto__,comm,___$1,map__30097,map__30097__$1,app,todos){
return (function (state_30128){
var state_val_30129 = (state_30128[(1)]);
if((state_val_30129 === (7))){
var inst_30117 = (state_30128[(2)]);
var inst_30118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30117,(0),null);
var inst_30119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30117,(1),null);
var inst_30120 = todomvc.app.handle_event(inst_30118,self__.app,inst_30119);
var state_30128__$1 = (function (){var statearr_30130 = state_30128;
(statearr_30130[(7)] = inst_30120);

return statearr_30130;
})();
var statearr_30131_30144 = state_30128__$1;
(statearr_30131_30144[(2)] = null);

(statearr_30131_30144[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_30129 === (6))){
var inst_30124 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30132_30145 = state_30128__$1;
(statearr_30132_30145[(2)] = inst_30124);

(statearr_30132_30145[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_30129 === (5))){
var state_30128__$1 = state_30128;
var statearr_30133_30146 = state_30128__$1;
(statearr_30133_30146[(2)] = null);

(statearr_30133_30146[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_30129 === (4))){
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30128__$1,(7),comm);
} else {
if((state_val_30129 === (3))){
var inst_30126 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30128__$1,inst_30126);
} else {
if((state_val_30129 === (2))){
var state_30128__$1 = state_30128;
var statearr_30134_30147 = state_30128__$1;
(statearr_30134_30147[(1)] = (4));



return cljs.core.constant$keyword$125;
} else {
if((state_val_30129 === (1))){
var state_30128__$1 = state_30128;
var statearr_30136_30148 = state_30128__$1;
(statearr_30136_30148[(2)] = null);

(statearr_30136_30148[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
return null;
}
}
}
}
}
}
}
});})(c__7226__auto__,comm,___$1,map__30097,map__30097__$1,app,todos))
;
return ((function (switch__7170__auto__,c__7226__auto__,comm,___$1,map__30097,map__30097__$1,app,todos){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_30140 = [null,null,null,null,null,null,null,null];
(statearr_30140[(0)] = state_machine__7171__auto__);

(statearr_30140[(1)] = (1));

return statearr_30140;
});
var state_machine__7171__auto____1 = (function (state_30128){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_30128);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e30141){if((e30141 instanceof Object)){
var ex__7174__auto__ = e30141;
var statearr_30142_30149 = state_30128;
(statearr_30142_30149[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30128);

return cljs.core.constant$keyword$125;
} else {
throw e30141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__30150 = state_30128;
state_30128 = G__30150;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_30128){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_30128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto__,comm,___$1,map__30097,map__30097__$1,app,todos))
})();
var state__7228__auto__ = (function (){var statearr_30143 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_30143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto__);

return statearr_30143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto__,comm,___$1,map__30097,map__30097__$1,app,todos))
);

return c__7226__auto__;
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.t30098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30097,map__30097__$1,app,todos){
return (function (_30100){
var self__ = this;
var _30100__$1 = this;
return self__.meta30099;
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.t30098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30097,map__30097__$1,app,todos){
return (function (_30100,meta30099__$1){
var self__ = this;
var _30100__$1 = this;
return (new todomvc.app.t30098(self__.todos,self__.app,self__.map__30097,self__.owner,self__.p__30049,self__.todo_app,meta30099__$1));
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.t30098.cljs$lang$type = true;

todomvc.app.t30098.cljs$lang$ctorStr = "todomvc.app/t30098";

todomvc.app.t30098.cljs$lang$ctorPrWriter = ((function (map__30097,map__30097__$1,app,todos){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"todomvc.app/t30098");
});})(map__30097,map__30097__$1,app,todos))
;

todomvc.app.__GT_t30098 = ((function (map__30097,map__30097__$1,app,todos){
return (function __GT_t30098(todos__$1,app__$1,map__30097__$2,owner__$1,p__30049__$1,todo_app__$1,meta30099){
return (new todomvc.app.t30098(todos__$1,app__$1,map__30097__$2,owner__$1,p__30049__$1,todo_app__$1,meta30099));
});})(map__30097,map__30097__$1,app,todos))
;

}

return (new todomvc.app.t30098(todos,app,map__30097__$1,owner,p__30049,todo_app,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,52,cljs.core.constant$keyword$110,155,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,130,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/src/todomvc/app.cljs"], null)));
});
om.core.root(todomvc.app.todo_app,todomvc.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$180,document.getElementById("todoapp")], null));
om.dom.render((function (){var G__30151 = null;
var G__30152 = (function (){var G__30155 = null;
var G__30156 = "Double-click to edit a todo";
return React.DOM.p(G__30155,G__30156);
})();
var G__30153 = (function (){var G__30157 = null;
var G__30158 = (function (){var G__30159 = {"href": "http://github.com/swannodette"};
return React.DOM.a(G__30159);
})();
return React.DOM.p(G__30157,G__30158);
})();
var G__30154 = (function (){var G__30160 = null;
var G__30161 = ["Part of",(function (){var G__30162 = {"href": "http://todomvc.com"};
var G__30163 = "TodoMVC";
return React.DOM.a(G__30162,G__30163);
})()];
return React.DOM.p(G__30160,G__30161);
})();
return React.DOM.div(G__30151,G__30152,G__30153,G__30154);
})(),document.getElementById("info"));
