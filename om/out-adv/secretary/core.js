// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
secretary.core._STAR_routes_STAR_ = (function (){var G__41140 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41140) : cljs.core.atom.call(null,G__41140));
})();
secretary.core.slash = /\//;
secretary.core.param_QMARK_ = (function param_QMARK_(r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),":");
});
secretary.core.component_matches_QMARK_ = (function component_matches_QMARK_(r,u){
return (secretary.core.param_QMARK_(r)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,u));
});
secretary.core.extract_component = (function extract_component(r,u){
if(secretary.core.param_QMARK_(r)){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,(1))),u], true, false);
} else {
return null;
}
});
secretary.core.exact_match_QMARK_ = (function exact_match_QMARK_(r,u){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,u);
});
/**
* A predicate to determine if a route matches a URI path.
*/
secretary.core.route_matches_QMARK_ = (function route_matches_QMARK_(route,uri_path){
var r = clojure.string.split.cljs$core$IFn$_invoke$arity$2(route,secretary.core.slash);
var u = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri_path,secretary.core.slash);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(r),cljs.core.count(u))){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (r,u){
return (function (p1__41141_SHARP_,p2__41142_SHARP_){
return secretary.core.component_matches_QMARK_(p1__41141_SHARP_,p2__41142_SHARP_);
});})(r,u))
,r,u));
} else {
return null;
}
});
/**
* Determines if there are any routes that match a given URI path.
*/
secretary.core.any_matches_QMARK_ = (function any_matches_QMARK_(uri_path){
return cljs.core.some((function (p1__41143_SHARP_){
return secretary.core.route_matches_QMARK_(cljs.core.first(p1__41143_SHARP_),uri_path);
}),(function (){var G__41145 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41145) : cljs.core.deref.call(null,G__41145));
})());
});
/**
* Extract the match data from the URI path into a hash map
*/
secretary.core.extract_components = (function extract_components(route,uri_path){
if(cljs.core.truth_(secretary.core.route_matches_QMARK_(route,uri_path))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4532__auto__ = (function iter__41152(s__41153){
return (new cljs.core.LazySeq(null,(function (){
var s__41153__$1 = s__41153;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__41153__$1);
if(temp__4126__auto__){
var s__41153__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41153__$2)){
var c__4530__auto__ = cljs.core.chunk_first(s__41153__$2);
var size__4531__auto__ = cljs.core.count(c__4530__auto__);
var b__41155 = cljs.core.chunk_buffer(size__4531__auto__);
if((function (){var i__41154 = (0);
while(true){
if((i__41154 < size__4531__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4530__auto__,i__41154);
var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(secretary.core.extract_component,z);
if(!((c == null))){
cljs.core.chunk_append(b__41155,c);

var G__41158 = (i__41154 + (1));
i__41154 = G__41158;
continue;
} else {
var G__41159 = (i__41154 + (1));
i__41154 = G__41159;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41155),iter__41152(cljs.core.chunk_rest(s__41153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41155),null);
}
} else {
var z = cljs.core.first(s__41153__$2);
var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(secretary.core.extract_component,z);
if(!((c == null))){
return cljs.core.cons(c,iter__41152(cljs.core.rest(s__41153__$2)));
} else {
var G__41160 = cljs.core.rest(s__41153__$2);
s__41153__$1 = G__41160;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4532__auto__(cljs.core.zipmap(clojure.string.split.cljs$core$IFn$_invoke$arity$2(route,secretary.core.slash),clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri_path,secretary.core.slash)));
})());
} else {
return null;
}
});
secretary.core.filter_routes = (function filter_routes(f,uri_path){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41161_SHARP_){
var G__41165 = cljs.core.first(p1__41161_SHARP_);
var G__41166 = uri_path;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41165,G__41166) : f.call(null,G__41165,G__41166));
}),(function (){var G__41167 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41167) : cljs.core.deref.call(null,G__41167));
})());
});
/**
* Dispatch an action for a given route if it matches the URI path
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri_path){
var temp__4124__auto__ = cljs.core.first(secretary.core.filter_routes(secretary.core.exact_match_QMARK_,uri_path));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__41172 = temp__4124__auto__;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41172,(1),null);
var G__41173 = cljs.core.PersistentArrayMap.EMPTY;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__41173) : action.call(null,G__41173));
} else {
var temp__4126__auto__ = cljs.core.seq(secretary.core.filter_routes(secretary.core.route_matches_QMARK_,uri_path));
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__41174 = cljs.core.first(xs__4624__auto__);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41174,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41174,(1),null);
var G__41175 = secretary.core.extract_components(route,uri_path);
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__41175) : action.call(null,G__41175));
} else {
return null;
}
}
});
