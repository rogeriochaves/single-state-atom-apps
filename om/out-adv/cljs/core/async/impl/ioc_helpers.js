// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$124);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t40033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t40033 = (function (f,fn_handler,meta40034){
this.f = f;
this.fn_handler = fn_handler;
this.meta40034 = meta40034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t40033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t40033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t40033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t40033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40035){
var self__ = this;
var _40035__$1 = this;
return self__.meta40034;
});

cljs.core.async.impl.ioc_helpers.t40033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40035,meta40034__$1){
var self__ = this;
var _40035__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t40033(self__.f,self__.fn_handler,meta40034__$1));
});

cljs.core.async.impl.ioc_helpers.t40033.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t40033.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t40033";

cljs.core.async.impl.ioc_helpers.t40033.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async.impl.ioc-helpers/t40033");
});

cljs.core.async.impl.ioc_helpers.__GT_t40033 = (function __GT_t40033(f__$1,fn_handler__$1,meta40034){
return (new cljs.core.async.impl.ioc_helpers.t40033(f__$1,fn_handler__$1,meta40034));
});

}

return (new cljs.core.async.impl.ioc_helpers.t40033(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,19,cljs.core.constant$keyword$110,30,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,27,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e40037){if((e40037 instanceof Object)){
var ex = e40037;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e40037;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_40041_40044 = state;
(statearr_40041_40044[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_40041_40044[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_40042_40045 = state;
(statearr_40042_40045[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__40043 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40043) : cljs.core.deref.call(null,G__40043));
})());

(statearr_40042_40045[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$125;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_40049_40052 = state;
(statearr_40049_40052[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_40049_40052[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_40050_40053 = state;
(statearr_40050_40053[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__40051 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40051) : cljs.core.deref.call(null,G__40051));
})());

(statearr_40050_40053[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$125;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4379__auto__,k__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4379__auto____$1,k__4380__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4381__auto__,k40055,else__4382__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var G__40057 = (((k40055 instanceof cljs.core.Keyword))?k40055.fqn:null);
switch (G__40057) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40055,else__4382__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4393__auto__,writer__4394__auto__,opts__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
var pr_pair__4396__auto__ = ((function (this__4393__auto____$1){
return (function (keyval__4397__auto__){
return cljs.core.pr_sequential_writer(writer__4394__auto__,cljs.core.pr_writer,""," ","",opts__4395__auto__,keyval__4397__auto__);
});})(this__4393__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4394__auto__,pr_pair__4396__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4395__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$126,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$127,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$128,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$129,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$130,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4377__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4374__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
var h__4197__auto__ = self__.__hash;
if(!((h__4197__auto__ == null))){
return h__4197__auto__;
} else {
var h__4197__auto____$1 = cljs.core.hash_imap(this__4374__auto____$1);
self__.__hash = h__4197__auto____$1;

return h__4197__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4375__auto__,other__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3764__auto__ = other__4376__auto__;
if(cljs.core.truth_(and__3764__auto__)){
return ((this__4375__auto____$1.constructor === other__4376__auto__.constructor)) && (cljs.core.equiv_map(this__4375__auto____$1,other__4376__auto__));
} else {
return and__3764__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4388__auto__,k__4389__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$128,null,cljs.core.constant$keyword$126,null,cljs.core.constant$keyword$127,null,cljs.core.constant$keyword$130,null,cljs.core.constant$keyword$129,null], null), null),k__4389__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4388__auto____$1),self__.__meta),k__4389__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4389__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4386__auto__,k__4387__auto__,G__40054){
var self__ = this;
var this__4386__auto____$1 = this;
var pred__40058 = cljs.core.keyword_identical_QMARK_;
var expr__40059 = k__4387__auto__;
if(cljs.core.truth_((function (){var G__40061 = cljs.core.constant$keyword$126;
var G__40062 = expr__40059;
return (pred__40058.cljs$core$IFn$_invoke$arity$2 ? pred__40058.cljs$core$IFn$_invoke$arity$2(G__40061,G__40062) : pred__40058.call(null,G__40061,G__40062));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__40054,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40063 = cljs.core.constant$keyword$127;
var G__40064 = expr__40059;
return (pred__40058.cljs$core$IFn$_invoke$arity$2 ? pred__40058.cljs$core$IFn$_invoke$arity$2(G__40063,G__40064) : pred__40058.call(null,G__40063,G__40064));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__40054,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40065 = cljs.core.constant$keyword$128;
var G__40066 = expr__40059;
return (pred__40058.cljs$core$IFn$_invoke$arity$2 ? pred__40058.cljs$core$IFn$_invoke$arity$2(G__40065,G__40066) : pred__40058.call(null,G__40065,G__40066));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__40054,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40067 = cljs.core.constant$keyword$129;
var G__40068 = expr__40059;
return (pred__40058.cljs$core$IFn$_invoke$arity$2 ? pred__40058.cljs$core$IFn$_invoke$arity$2(G__40067,G__40068) : pred__40058.call(null,G__40067,G__40068));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__40054,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40069 = cljs.core.constant$keyword$130;
var G__40070 = expr__40059;
return (pred__40058.cljs$core$IFn$_invoke$arity$2 ? pred__40058.cljs$core$IFn$_invoke$arity$2(G__40069,G__40070) : pred__40058.call(null,G__40069,G__40070));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__40054,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4387__auto__,G__40054),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4391__auto__){
var self__ = this;
var this__4391__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$126,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$127,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$128,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$129,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$130,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4378__auto__,G__40054){
var self__ = this;
var this__4378__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__40054,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4384__auto__,entry__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4385__auto__)){
return cljs.core._assoc(this__4384__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4385__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4385__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4384__auto____$1,entry__4385__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4413__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4413__auto__,writer__4414__auto__){
return cljs.core._write(writer__4414__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__40056){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(G__40056),cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(G__40056),cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(G__40056),cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(G__40056),cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(G__40056),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40056,cljs.core.constant$keyword$126,cljs.core.array_seq([cljs.core.constant$keyword$127,cljs.core.constant$keyword$128,cljs.core.constant$keyword$129,cljs.core.constant$keyword$130], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_40073 = state;
(statearr_40073[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_40073;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3764__auto__ = exception;
if(cljs.core.truth_(and__3764__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3764__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3764__auto__ = exception;
if(cljs.core.truth_(and__3764__auto__)){
var and__3764__auto____$1 = catch_block;
if(cljs.core.truth_(and__3764__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3764__auto____$1;
}
} else {
return and__3764__auto__;
}
})())){
var statearr_40079 = state;
(statearr_40079[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_40079[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_40079[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_40079[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$126,null,cljs.core.array_seq([cljs.core.constant$keyword$127,null], 0)));

return statearr_40079;
} else {
if(cljs.core.truth_((function (){var and__3764__auto__ = exception;
if(cljs.core.truth_(and__3764__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3764__auto__;
}
})())){
var statearr_40080_40084 = state;
(statearr_40080_40084[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__40085 = state;
state = G__40085;
continue;
} else {
if(cljs.core.truth_((function (){var and__3764__auto__ = exception;
if(cljs.core.truth_(and__3764__auto__)){
var and__3764__auto____$1 = cljs.core.not(catch_block);
if(and__3764__auto____$1){
return cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3764__auto____$1;
}
} else {
return and__3764__auto__;
}
})())){
var statearr_40081 = state;
(statearr_40081[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_40081[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$128,null));

return statearr_40081;
} else {
if(cljs.core.truth_((function (){var and__3764__auto__ = cljs.core.not(exception);
if(and__3764__auto__){
return cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3764__auto__;
}
})())){
var statearr_40082 = state;
(statearr_40082[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_40082[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$128,null));

return statearr_40082;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_40083 = state;
(statearr_40083[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_40083[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_40083;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
