// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t36623 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36623 = (function (f,fn_handler,meta36624){
this.f = f;
this.fn_handler = fn_handler;
this.meta36624 = meta36624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36623.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36625){
var self__ = this;
var _36625__$1 = this;
return self__.meta36624;
});

cljs.core.async.t36623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36625,meta36624__$1){
var self__ = this;
var _36625__$1 = this;
return (new cljs.core.async.t36623(self__.f,self__.fn_handler,meta36624__$1));
});

cljs.core.async.t36623.cljs$lang$type = true;

cljs.core.async.t36623.cljs$lang$ctorStr = "cljs.core.async/t36623";

cljs.core.async.t36623.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t36623");
});

cljs.core.async.__GT_t36623 = (function __GT_t36623(f__$1,fn_handler__$1,meta36624){
return (new cljs.core.async.t36623(f__$1,fn_handler__$1,meta36624));
});

}

return (new cljs.core.async.t36623(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,20,cljs.core.constant$keyword$110,16,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,13,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__36627 = buff;
if(G__36627){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__36627.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36627.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36627);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36627);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_36644 = (function (){var G__36641 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36641) : cljs.core.deref.call(null,G__36641));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__36642_36645 = val_36644;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__36642_36645) : fn1.call(null,G__36642_36645));
} else {
cljs.core.async.impl.dispatch.run(((function (val_36644,ret){
return (function (){
var G__36643 = val_36644;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__36643) : fn1.call(null,G__36643));
});})(val_36644,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__36654 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36654) : cljs.core.deref.call(null,G__36654));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__36655 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36655) : cljs.core.deref.call(null,G__36655));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__36656_36658 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__36656_36658) : fn1.call(null,G__36656_36658));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__36657 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__36657) : fn1.call(null,G__36657));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4663__auto___36659 = n;
var x_36660 = (0);
while(true){
if((x_36660 < n__4663__auto___36659)){
(a[x_36660] = (0));

var G__36661 = (x_36660 + (1));
x_36660 = G__36661;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__36662 = (i + (1));
i = G__36662;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__36670 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36670) : cljs.core.atom.call(null,G__36670));
})();
if(typeof cljs.core.async.t36671 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36671 = (function (flag,alt_flag,meta36672){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36672 = meta36672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__36674 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36674) : cljs.core.deref.call(null,G__36674));
});})(flag))
;

cljs.core.async.t36671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__36675_36677 = self__.flag;
var G__36676_36678 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36675_36677,G__36676_36678) : cljs.core.reset_BANG_.call(null,G__36675_36677,G__36676_36678));

return true;
});})(flag))
;

cljs.core.async.t36671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36673){
var self__ = this;
var _36673__$1 = this;
return self__.meta36672;
});})(flag))
;

cljs.core.async.t36671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36673,meta36672__$1){
var self__ = this;
var _36673__$1 = this;
return (new cljs.core.async.t36671(self__.flag,self__.alt_flag,meta36672__$1));
});})(flag))
;

cljs.core.async.t36671.cljs$lang$type = true;

cljs.core.async.t36671.cljs$lang$ctorStr = "cljs.core.async/t36671";

cljs.core.async.t36671.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t36671");
});})(flag))
;

cljs.core.async.__GT_t36671 = ((function (flag){
return (function __GT_t36671(flag__$1,alt_flag__$1,meta36672){
return (new cljs.core.async.t36671(flag__$1,alt_flag__$1,meta36672));
});})(flag))
;

}

return (new cljs.core.async.t36671(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,15,cljs.core.constant$keyword$110,146,cljs.core.constant$keyword$111,5,cljs.core.constant$keyword$112,141,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t36682 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36682 = (function (cb,flag,alt_handler,meta36683){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36683 = meta36683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36682.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t36682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t36682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36684){
var self__ = this;
var _36684__$1 = this;
return self__.meta36683;
});

cljs.core.async.t36682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36684,meta36683__$1){
var self__ = this;
var _36684__$1 = this;
return (new cljs.core.async.t36682(self__.cb,self__.flag,self__.alt_handler,meta36683__$1));
});

cljs.core.async.t36682.cljs$lang$type = true;

cljs.core.async.t36682.cljs$lang$ctorStr = "cljs.core.async/t36682";

cljs.core.async.t36682.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t36682");
});

cljs.core.async.__GT_t36682 = (function __GT_t36682(cb__$1,flag__$1,alt_handler__$1,meta36683){
return (new cljs.core.async.t36682(cb__$1,flag__$1,alt_handler__$1,meta36683));
});

}

return (new cljs.core.async.t36682(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,11,cljs.core.constant$keyword$110,154,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,149,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__36692 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__36692) : port.call(null,G__36692));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__36693 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__36693) : port.call(null,G__36693));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36685_SHARP_){
var G__36694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36685_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36694) : fret.call(null,G__36694));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36686_SHARP_){
var G__36695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36686_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36695) : fret.call(null,G__36695));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36696 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36696) : cljs.core.deref.call(null,G__36696));
})(),(function (){var or__3776__auto__ = wport;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36697 = (i + (1));
i = G__36697;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3776__auto__ = ret;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$108)){
var temp__4126__auto__ = (function (){var and__3764__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3764__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3764__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$108], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__36698){
var map__36700 = p__36698;
var map__36700__$1 = ((cljs.core.seq_QMARK_(map__36700))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36700):map__36700);
var opts = map__36700__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__36698 = null;
if (arguments.length > 1) {
var G__36701__i = 0, G__36701__a = new Array(arguments.length -  1);
while (G__36701__i < G__36701__a.length) {G__36701__a[G__36701__i] = arguments[G__36701__i + 1]; ++G__36701__i;}
  p__36698 = new cljs.core.IndexedSeq(G__36701__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__36698);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36702){
var ports = cljs.core.first(arglist__36702);
var p__36698 = cljs.core.rest(arglist__36702);
return alts_BANG___delegate(ports,p__36698);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7226__auto___36800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___36800){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___36800){
return (function (state_36776){
var state_val_36777 = (state_36776[(1)]);
if((state_val_36777 === (7))){
var inst_36772 = (state_36776[(2)]);
var state_36776__$1 = state_36776;
var statearr_36778_36801 = state_36776__$1;
(statearr_36778_36801[(2)] = inst_36772);

(statearr_36778_36801[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (1))){
var state_36776__$1 = state_36776;
var statearr_36779_36802 = state_36776__$1;
(statearr_36779_36802[(2)] = null);

(statearr_36779_36802[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (4))){
var inst_36755 = (state_36776[(7)]);
var inst_36755__$1 = (state_36776[(2)]);
var inst_36756 = (inst_36755__$1 == null);
var state_36776__$1 = (function (){var statearr_36780 = state_36776;
(statearr_36780[(7)] = inst_36755__$1);

return statearr_36780;
})();
if(cljs.core.truth_(inst_36756)){
var statearr_36781_36803 = state_36776__$1;
(statearr_36781_36803[(1)] = (5));

} else {
var statearr_36782_36804 = state_36776__$1;
(statearr_36782_36804[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (13))){
var state_36776__$1 = state_36776;
var statearr_36783_36805 = state_36776__$1;
(statearr_36783_36805[(2)] = null);

(statearr_36783_36805[(1)] = (14));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (6))){
var inst_36755 = (state_36776[(7)]);
var state_36776__$1 = state_36776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36776__$1,(11),to,inst_36755);
} else {
if((state_val_36777 === (3))){
var inst_36774 = (state_36776[(2)]);
var state_36776__$1 = state_36776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36776__$1,inst_36774);
} else {
if((state_val_36777 === (12))){
var state_36776__$1 = state_36776;
var statearr_36784_36806 = state_36776__$1;
(statearr_36784_36806[(2)] = null);

(statearr_36784_36806[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (2))){
var state_36776__$1 = state_36776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36776__$1,(4),from);
} else {
if((state_val_36777 === (11))){
var inst_36765 = (state_36776[(2)]);
var state_36776__$1 = state_36776;
if(cljs.core.truth_(inst_36765)){
var statearr_36785_36807 = state_36776__$1;
(statearr_36785_36807[(1)] = (12));

} else {
var statearr_36786_36808 = state_36776__$1;
(statearr_36786_36808[(1)] = (13));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (9))){
var state_36776__$1 = state_36776;
var statearr_36787_36809 = state_36776__$1;
(statearr_36787_36809[(2)] = null);

(statearr_36787_36809[(1)] = (10));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (5))){
var state_36776__$1 = state_36776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36788_36810 = state_36776__$1;
(statearr_36788_36810[(1)] = (8));

} else {
var statearr_36789_36811 = state_36776__$1;
(statearr_36789_36811[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (14))){
var inst_36770 = (state_36776[(2)]);
var state_36776__$1 = state_36776;
var statearr_36790_36812 = state_36776__$1;
(statearr_36790_36812[(2)] = inst_36770);

(statearr_36790_36812[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (10))){
var inst_36762 = (state_36776[(2)]);
var state_36776__$1 = state_36776;
var statearr_36791_36813 = state_36776__$1;
(statearr_36791_36813[(2)] = inst_36762);

(statearr_36791_36813[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_36777 === (8))){
var inst_36759 = cljs.core.async.close_BANG_(to);
var state_36776__$1 = state_36776;
var statearr_36792_36814 = state_36776__$1;
(statearr_36792_36814[(2)] = inst_36759);

(statearr_36792_36814[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__7226__auto___36800))
;
return ((function (switch__7170__auto__,c__7226__auto___36800){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_36796 = [null,null,null,null,null,null,null,null];
(statearr_36796[(0)] = state_machine__7171__auto__);

(statearr_36796[(1)] = (1));

return statearr_36796;
});
var state_machine__7171__auto____1 = (function (state_36776){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_36776);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e36797){if((e36797 instanceof Object)){
var ex__7174__auto__ = e36797;
var statearr_36798_36815 = state_36776;
(statearr_36798_36815[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36776);

return cljs.core.constant$keyword$125;
} else {
throw e36797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__36816 = state_36776;
state_36776 = G__36816;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_36776){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_36776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___36800))
})();
var state__7228__auto__ = (function (){var statearr_36799 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_36799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___36800);

return statearr_36799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___36800))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__37002){
var vec__37003 = p__37002;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37003,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37003,(1),null);
var job = vec__37003;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7226__auto___37187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___37187,res,vec__37003,v,p,job,jobs,results){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___37187,res,vec__37003,v,p,job,jobs,results){
return (function (state_37008){
var state_val_37009 = (state_37008[(1)]);
if((state_val_37009 === (2))){
var inst_37005 = (state_37008[(2)]);
var inst_37006 = cljs.core.async.close_BANG_(res);
var state_37008__$1 = (function (){var statearr_37010 = state_37008;
(statearr_37010[(7)] = inst_37005);

return statearr_37010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37008__$1,inst_37006);
} else {
if((state_val_37009 === (1))){
var state_37008__$1 = state_37008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37008__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7226__auto___37187,res,vec__37003,v,p,job,jobs,results))
;
return ((function (switch__7170__auto__,c__7226__auto___37187,res,vec__37003,v,p,job,jobs,results){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37014 = [null,null,null,null,null,null,null,null];
(statearr_37014[(0)] = state_machine__7171__auto__);

(statearr_37014[(1)] = (1));

return statearr_37014;
});
var state_machine__7171__auto____1 = (function (state_37008){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37008);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37015){if((e37015 instanceof Object)){
var ex__7174__auto__ = e37015;
var statearr_37016_37188 = state_37008;
(statearr_37016_37188[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37008);

return cljs.core.constant$keyword$125;
} else {
throw e37015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37189 = state_37008;
state_37008 = G__37189;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37008){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___37187,res,vec__37003,v,p,job,jobs,results))
})();
var state__7228__auto__ = (function (){var statearr_37017 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___37187);

return statearr_37017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___37187,res,vec__37003,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37018){
var vec__37019 = p__37018;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37019,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37019,(1),null);
var job = vec__37019;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__37020_37190 = v;
var G__37021_37191 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__37020_37190,G__37021_37191) : xf.call(null,G__37020_37190,G__37021_37191));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4663__auto___37192 = n;
var __37193 = (0);
while(true){
if((__37193 < n__4663__auto___37192)){
var G__37022_37194 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37022_37194) {
case "async":
var c__7226__auto___37196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37193,c__7226__auto___37196,G__37022_37194,n__4663__auto___37192,jobs,results,process,async){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (__37193,c__7226__auto___37196,G__37022_37194,n__4663__auto___37192,jobs,results,process,async){
return (function (state_37035){
var state_val_37036 = (state_37035[(1)]);
if((state_val_37036 === (7))){
var inst_37031 = (state_37035[(2)]);
var state_37035__$1 = state_37035;
var statearr_37037_37197 = state_37035__$1;
(statearr_37037_37197[(2)] = inst_37031);

(statearr_37037_37197[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37036 === (6))){
var state_37035__$1 = state_37035;
var statearr_37038_37198 = state_37035__$1;
(statearr_37038_37198[(2)] = null);

(statearr_37038_37198[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37036 === (5))){
var state_37035__$1 = state_37035;
var statearr_37039_37199 = state_37035__$1;
(statearr_37039_37199[(2)] = null);

(statearr_37039_37199[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37036 === (4))){
var inst_37025 = (state_37035[(2)]);
var inst_37026 = async(inst_37025);
var state_37035__$1 = state_37035;
if(cljs.core.truth_(inst_37026)){
var statearr_37040_37200 = state_37035__$1;
(statearr_37040_37200[(1)] = (5));

} else {
var statearr_37041_37201 = state_37035__$1;
(statearr_37041_37201[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37036 === (3))){
var inst_37033 = (state_37035[(2)]);
var state_37035__$1 = state_37035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37035__$1,inst_37033);
} else {
if((state_val_37036 === (2))){
var state_37035__$1 = state_37035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37035__$1,(4),jobs);
} else {
if((state_val_37036 === (1))){
var state_37035__$1 = state_37035;
var statearr_37042_37202 = state_37035__$1;
(statearr_37042_37202[(2)] = null);

(statearr_37042_37202[(1)] = (2));


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
});})(__37193,c__7226__auto___37196,G__37022_37194,n__4663__auto___37192,jobs,results,process,async))
;
return ((function (__37193,switch__7170__auto__,c__7226__auto___37196,G__37022_37194,n__4663__auto___37192,jobs,results,process,async){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37046 = [null,null,null,null,null,null,null];
(statearr_37046[(0)] = state_machine__7171__auto__);

(statearr_37046[(1)] = (1));

return statearr_37046;
});
var state_machine__7171__auto____1 = (function (state_37035){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37035);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37047){if((e37047 instanceof Object)){
var ex__7174__auto__ = e37047;
var statearr_37048_37203 = state_37035;
(statearr_37048_37203[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37035);

return cljs.core.constant$keyword$125;
} else {
throw e37047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37204 = state_37035;
state_37035 = G__37204;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37035){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(__37193,switch__7170__auto__,c__7226__auto___37196,G__37022_37194,n__4663__auto___37192,jobs,results,process,async))
})();
var state__7228__auto__ = (function (){var statearr_37049 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___37196);

return statearr_37049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(__37193,c__7226__auto___37196,G__37022_37194,n__4663__auto___37192,jobs,results,process,async))
);


break;
case "compute":
var c__7226__auto___37205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37193,c__7226__auto___37205,G__37022_37194,n__4663__auto___37192,jobs,results,process,async){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (__37193,c__7226__auto___37205,G__37022_37194,n__4663__auto___37192,jobs,results,process,async){
return (function (state_37062){
var state_val_37063 = (state_37062[(1)]);
if((state_val_37063 === (7))){
var inst_37058 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37064_37206 = state_37062__$1;
(statearr_37064_37206[(2)] = inst_37058);

(statearr_37064_37206[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37063 === (6))){
var state_37062__$1 = state_37062;
var statearr_37065_37207 = state_37062__$1;
(statearr_37065_37207[(2)] = null);

(statearr_37065_37207[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37063 === (5))){
var state_37062__$1 = state_37062;
var statearr_37066_37208 = state_37062__$1;
(statearr_37066_37208[(2)] = null);

(statearr_37066_37208[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37063 === (4))){
var inst_37052 = (state_37062[(2)]);
var inst_37053 = process(inst_37052);
var state_37062__$1 = state_37062;
if(cljs.core.truth_(inst_37053)){
var statearr_37067_37209 = state_37062__$1;
(statearr_37067_37209[(1)] = (5));

} else {
var statearr_37068_37210 = state_37062__$1;
(statearr_37068_37210[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37063 === (3))){
var inst_37060 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37062__$1,inst_37060);
} else {
if((state_val_37063 === (2))){
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37062__$1,(4),jobs);
} else {
if((state_val_37063 === (1))){
var state_37062__$1 = state_37062;
var statearr_37069_37211 = state_37062__$1;
(statearr_37069_37211[(2)] = null);

(statearr_37069_37211[(1)] = (2));


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
});})(__37193,c__7226__auto___37205,G__37022_37194,n__4663__auto___37192,jobs,results,process,async))
;
return ((function (__37193,switch__7170__auto__,c__7226__auto___37205,G__37022_37194,n__4663__auto___37192,jobs,results,process,async){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37073 = [null,null,null,null,null,null,null];
(statearr_37073[(0)] = state_machine__7171__auto__);

(statearr_37073[(1)] = (1));

return statearr_37073;
});
var state_machine__7171__auto____1 = (function (state_37062){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37062);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37074){if((e37074 instanceof Object)){
var ex__7174__auto__ = e37074;
var statearr_37075_37212 = state_37062;
(statearr_37075_37212[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37062);

return cljs.core.constant$keyword$125;
} else {
throw e37074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37213 = state_37062;
state_37062 = G__37213;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37062){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(__37193,switch__7170__auto__,c__7226__auto___37205,G__37022_37194,n__4663__auto___37192,jobs,results,process,async))
})();
var state__7228__auto__ = (function (){var statearr_37076 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___37205);

return statearr_37076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(__37193,c__7226__auto___37205,G__37022_37194,n__4663__auto___37192,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37214 = (__37193 + (1));
__37193 = G__37214;
continue;
} else {
}
break;
}

var c__7226__auto___37215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___37215,jobs,results,process,async){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___37215,jobs,results,process,async){
return (function (state_37098){
var state_val_37099 = (state_37098[(1)]);
if((state_val_37099 === (9))){
var inst_37091 = (state_37098[(2)]);
var state_37098__$1 = (function (){var statearr_37100 = state_37098;
(statearr_37100[(7)] = inst_37091);

return statearr_37100;
})();
var statearr_37101_37216 = state_37098__$1;
(statearr_37101_37216[(2)] = null);

(statearr_37101_37216[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37099 === (8))){
var inst_37084 = (state_37098[(8)]);
var inst_37089 = (state_37098[(2)]);
var state_37098__$1 = (function (){var statearr_37102 = state_37098;
(statearr_37102[(9)] = inst_37089);

return statearr_37102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37098__$1,(9),results,inst_37084);
} else {
if((state_val_37099 === (7))){
var inst_37094 = (state_37098[(2)]);
var state_37098__$1 = state_37098;
var statearr_37103_37217 = state_37098__$1;
(statearr_37103_37217[(2)] = inst_37094);

(statearr_37103_37217[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37099 === (6))){
var inst_37079 = (state_37098[(10)]);
var inst_37084 = (state_37098[(8)]);
var inst_37084__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37086 = [inst_37079,inst_37084__$1];
var inst_37087 = (new cljs.core.PersistentVector(null,2,(5),inst_37085,inst_37086,null));
var state_37098__$1 = (function (){var statearr_37104 = state_37098;
(statearr_37104[(8)] = inst_37084__$1);

return statearr_37104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37098__$1,(8),jobs,inst_37087);
} else {
if((state_val_37099 === (5))){
var inst_37082 = cljs.core.async.close_BANG_(jobs);
var state_37098__$1 = state_37098;
var statearr_37105_37218 = state_37098__$1;
(statearr_37105_37218[(2)] = inst_37082);

(statearr_37105_37218[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37099 === (4))){
var inst_37079 = (state_37098[(10)]);
var inst_37079__$1 = (state_37098[(2)]);
var inst_37080 = (inst_37079__$1 == null);
var state_37098__$1 = (function (){var statearr_37106 = state_37098;
(statearr_37106[(10)] = inst_37079__$1);

return statearr_37106;
})();
if(cljs.core.truth_(inst_37080)){
var statearr_37107_37219 = state_37098__$1;
(statearr_37107_37219[(1)] = (5));

} else {
var statearr_37108_37220 = state_37098__$1;
(statearr_37108_37220[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37099 === (3))){
var inst_37096 = (state_37098[(2)]);
var state_37098__$1 = state_37098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37098__$1,inst_37096);
} else {
if((state_val_37099 === (2))){
var state_37098__$1 = state_37098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37098__$1,(4),from);
} else {
if((state_val_37099 === (1))){
var state_37098__$1 = state_37098;
var statearr_37109_37221 = state_37098__$1;
(statearr_37109_37221[(2)] = null);

(statearr_37109_37221[(1)] = (2));


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
}
}
});})(c__7226__auto___37215,jobs,results,process,async))
;
return ((function (switch__7170__auto__,c__7226__auto___37215,jobs,results,process,async){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37113[(0)] = state_machine__7171__auto__);

(statearr_37113[(1)] = (1));

return statearr_37113;
});
var state_machine__7171__auto____1 = (function (state_37098){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37098);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37114){if((e37114 instanceof Object)){
var ex__7174__auto__ = e37114;
var statearr_37115_37222 = state_37098;
(statearr_37115_37222[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37098);

return cljs.core.constant$keyword$125;
} else {
throw e37114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37223 = state_37098;
state_37098 = G__37223;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37098){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___37215,jobs,results,process,async))
})();
var state__7228__auto__ = (function (){var statearr_37116 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___37215);

return statearr_37116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___37215,jobs,results,process,async))
);


var c__7226__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto__,jobs,results,process,async){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto__,jobs,results,process,async){
return (function (state_37154){
var state_val_37155 = (state_37154[(1)]);
if((state_val_37155 === (7))){
var inst_37150 = (state_37154[(2)]);
var state_37154__$1 = state_37154;
var statearr_37156_37224 = state_37154__$1;
(statearr_37156_37224[(2)] = inst_37150);

(statearr_37156_37224[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (20))){
var state_37154__$1 = state_37154;
var statearr_37157_37225 = state_37154__$1;
(statearr_37157_37225[(2)] = null);

(statearr_37157_37225[(1)] = (21));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (1))){
var state_37154__$1 = state_37154;
var statearr_37158_37226 = state_37154__$1;
(statearr_37158_37226[(2)] = null);

(statearr_37158_37226[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (4))){
var inst_37119 = (state_37154[(7)]);
var inst_37119__$1 = (state_37154[(2)]);
var inst_37120 = (inst_37119__$1 == null);
var state_37154__$1 = (function (){var statearr_37159 = state_37154;
(statearr_37159[(7)] = inst_37119__$1);

return statearr_37159;
})();
if(cljs.core.truth_(inst_37120)){
var statearr_37160_37227 = state_37154__$1;
(statearr_37160_37227[(1)] = (5));

} else {
var statearr_37161_37228 = state_37154__$1;
(statearr_37161_37228[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (15))){
var inst_37132 = (state_37154[(8)]);
var state_37154__$1 = state_37154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37154__$1,(18),to,inst_37132);
} else {
if((state_val_37155 === (21))){
var inst_37145 = (state_37154[(2)]);
var state_37154__$1 = state_37154;
var statearr_37162_37229 = state_37154__$1;
(statearr_37162_37229[(2)] = inst_37145);

(statearr_37162_37229[(1)] = (13));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (13))){
var inst_37147 = (state_37154[(2)]);
var state_37154__$1 = (function (){var statearr_37163 = state_37154;
(statearr_37163[(9)] = inst_37147);

return statearr_37163;
})();
var statearr_37164_37230 = state_37154__$1;
(statearr_37164_37230[(2)] = null);

(statearr_37164_37230[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (6))){
var inst_37119 = (state_37154[(7)]);
var state_37154__$1 = state_37154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37154__$1,(11),inst_37119);
} else {
if((state_val_37155 === (17))){
var inst_37140 = (state_37154[(2)]);
var state_37154__$1 = state_37154;
if(cljs.core.truth_(inst_37140)){
var statearr_37165_37231 = state_37154__$1;
(statearr_37165_37231[(1)] = (19));

} else {
var statearr_37166_37232 = state_37154__$1;
(statearr_37166_37232[(1)] = (20));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (3))){
var inst_37152 = (state_37154[(2)]);
var state_37154__$1 = state_37154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37154__$1,inst_37152);
} else {
if((state_val_37155 === (12))){
var inst_37129 = (state_37154[(10)]);
var state_37154__$1 = state_37154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37154__$1,(14),inst_37129);
} else {
if((state_val_37155 === (2))){
var state_37154__$1 = state_37154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37154__$1,(4),results);
} else {
if((state_val_37155 === (19))){
var state_37154__$1 = state_37154;
var statearr_37167_37233 = state_37154__$1;
(statearr_37167_37233[(2)] = null);

(statearr_37167_37233[(1)] = (12));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (11))){
var inst_37129 = (state_37154[(2)]);
var state_37154__$1 = (function (){var statearr_37168 = state_37154;
(statearr_37168[(10)] = inst_37129);

return statearr_37168;
})();
var statearr_37169_37234 = state_37154__$1;
(statearr_37169_37234[(2)] = null);

(statearr_37169_37234[(1)] = (12));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (9))){
var state_37154__$1 = state_37154;
var statearr_37170_37235 = state_37154__$1;
(statearr_37170_37235[(2)] = null);

(statearr_37170_37235[(1)] = (10));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (5))){
var state_37154__$1 = state_37154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37171_37236 = state_37154__$1;
(statearr_37171_37236[(1)] = (8));

} else {
var statearr_37172_37237 = state_37154__$1;
(statearr_37172_37237[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (14))){
var inst_37134 = (state_37154[(11)]);
var inst_37132 = (state_37154[(8)]);
var inst_37132__$1 = (state_37154[(2)]);
var inst_37133 = (inst_37132__$1 == null);
var inst_37134__$1 = cljs.core.not(inst_37133);
var state_37154__$1 = (function (){var statearr_37173 = state_37154;
(statearr_37173[(11)] = inst_37134__$1);

(statearr_37173[(8)] = inst_37132__$1);

return statearr_37173;
})();
if(inst_37134__$1){
var statearr_37174_37238 = state_37154__$1;
(statearr_37174_37238[(1)] = (15));

} else {
var statearr_37175_37239 = state_37154__$1;
(statearr_37175_37239[(1)] = (16));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (16))){
var inst_37134 = (state_37154[(11)]);
var state_37154__$1 = state_37154;
var statearr_37176_37240 = state_37154__$1;
(statearr_37176_37240[(2)] = inst_37134);

(statearr_37176_37240[(1)] = (17));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (10))){
var inst_37126 = (state_37154[(2)]);
var state_37154__$1 = state_37154;
var statearr_37177_37241 = state_37154__$1;
(statearr_37177_37241[(2)] = inst_37126);

(statearr_37177_37241[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (18))){
var inst_37137 = (state_37154[(2)]);
var state_37154__$1 = state_37154;
var statearr_37178_37242 = state_37154__$1;
(statearr_37178_37242[(2)] = inst_37137);

(statearr_37178_37242[(1)] = (17));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37155 === (8))){
var inst_37123 = cljs.core.async.close_BANG_(to);
var state_37154__$1 = state_37154;
var statearr_37179_37243 = state_37154__$1;
(statearr_37179_37243[(2)] = inst_37123);

(statearr_37179_37243[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto__,jobs,results,process,async))
;
return ((function (switch__7170__auto__,c__7226__auto__,jobs,results,process,async){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37183[(0)] = state_machine__7171__auto__);

(statearr_37183[(1)] = (1));

return statearr_37183;
});
var state_machine__7171__auto____1 = (function (state_37154){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37154);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37184){if((e37184 instanceof Object)){
var ex__7174__auto__ = e37184;
var statearr_37185_37244 = state_37154;
(statearr_37185_37244[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37154);

return cljs.core.constant$keyword$125;
} else {
throw e37184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37245 = state_37154;
state_37154 = G__37245;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37154){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto__,jobs,results,process,async))
})();
var state__7228__auto__ = (function (){var statearr_37186 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto__);

return statearr_37186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto__,jobs,results,process,async))
);

return c__7226__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$132);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$133);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7226__auto___37368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___37368,tc,fc){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___37368,tc,fc){
return (function (state_37342){
var state_val_37343 = (state_37342[(1)]);
if((state_val_37343 === (7))){
var inst_37338 = (state_37342[(2)]);
var state_37342__$1 = state_37342;
var statearr_37344_37369 = state_37342__$1;
(statearr_37344_37369[(2)] = inst_37338);

(statearr_37344_37369[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (1))){
var state_37342__$1 = state_37342;
var statearr_37345_37370 = state_37342__$1;
(statearr_37345_37370[(2)] = null);

(statearr_37345_37370[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (4))){
var inst_37319 = (state_37342[(7)]);
var inst_37319__$1 = (state_37342[(2)]);
var inst_37320 = (inst_37319__$1 == null);
var state_37342__$1 = (function (){var statearr_37346 = state_37342;
(statearr_37346[(7)] = inst_37319__$1);

return statearr_37346;
})();
if(cljs.core.truth_(inst_37320)){
var statearr_37347_37371 = state_37342__$1;
(statearr_37347_37371[(1)] = (5));

} else {
var statearr_37348_37372 = state_37342__$1;
(statearr_37348_37372[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (13))){
var state_37342__$1 = state_37342;
var statearr_37349_37373 = state_37342__$1;
(statearr_37349_37373[(2)] = null);

(statearr_37349_37373[(1)] = (14));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (6))){
var inst_37319 = (state_37342[(7)]);
var inst_37325 = (function (){var G__37350 = inst_37319;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__37350) : p.call(null,G__37350));
})();
var state_37342__$1 = state_37342;
if(cljs.core.truth_(inst_37325)){
var statearr_37351_37374 = state_37342__$1;
(statearr_37351_37374[(1)] = (9));

} else {
var statearr_37352_37375 = state_37342__$1;
(statearr_37352_37375[(1)] = (10));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (3))){
var inst_37340 = (state_37342[(2)]);
var state_37342__$1 = state_37342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37342__$1,inst_37340);
} else {
if((state_val_37343 === (12))){
var state_37342__$1 = state_37342;
var statearr_37353_37376 = state_37342__$1;
(statearr_37353_37376[(2)] = null);

(statearr_37353_37376[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (2))){
var state_37342__$1 = state_37342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37342__$1,(4),ch);
} else {
if((state_val_37343 === (11))){
var inst_37319 = (state_37342[(7)]);
var inst_37329 = (state_37342[(2)]);
var state_37342__$1 = state_37342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37342__$1,(8),inst_37329,inst_37319);
} else {
if((state_val_37343 === (9))){
var state_37342__$1 = state_37342;
var statearr_37354_37377 = state_37342__$1;
(statearr_37354_37377[(2)] = tc);

(statearr_37354_37377[(1)] = (11));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (5))){
var inst_37322 = cljs.core.async.close_BANG_(tc);
var inst_37323 = cljs.core.async.close_BANG_(fc);
var state_37342__$1 = (function (){var statearr_37355 = state_37342;
(statearr_37355[(8)] = inst_37322);

return statearr_37355;
})();
var statearr_37356_37378 = state_37342__$1;
(statearr_37356_37378[(2)] = inst_37323);

(statearr_37356_37378[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (14))){
var inst_37336 = (state_37342[(2)]);
var state_37342__$1 = state_37342;
var statearr_37357_37379 = state_37342__$1;
(statearr_37357_37379[(2)] = inst_37336);

(statearr_37357_37379[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (10))){
var state_37342__$1 = state_37342;
var statearr_37358_37380 = state_37342__$1;
(statearr_37358_37380[(2)] = fc);

(statearr_37358_37380[(1)] = (11));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37343 === (8))){
var inst_37331 = (state_37342[(2)]);
var state_37342__$1 = state_37342;
if(cljs.core.truth_(inst_37331)){
var statearr_37359_37381 = state_37342__$1;
(statearr_37359_37381[(1)] = (12));

} else {
var statearr_37360_37382 = state_37342__$1;
(statearr_37360_37382[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__7226__auto___37368,tc,fc))
;
return ((function (switch__7170__auto__,c__7226__auto___37368,tc,fc){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37364 = [null,null,null,null,null,null,null,null,null];
(statearr_37364[(0)] = state_machine__7171__auto__);

(statearr_37364[(1)] = (1));

return statearr_37364;
});
var state_machine__7171__auto____1 = (function (state_37342){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37342);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37365){if((e37365 instanceof Object)){
var ex__7174__auto__ = e37365;
var statearr_37366_37383 = state_37342;
(statearr_37366_37383[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37342);

return cljs.core.constant$keyword$125;
} else {
throw e37365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37384 = state_37342;
state_37342 = G__37384;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37342){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___37368,tc,fc))
})();
var state__7228__auto__ = (function (){var statearr_37367 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___37368);

return statearr_37367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___37368,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7226__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto__){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto__){
return (function (state_37433){
var state_val_37434 = (state_37433[(1)]);
if((state_val_37434 === (7))){
var inst_37429 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
var statearr_37435_37453 = state_37433__$1;
(statearr_37435_37453[(2)] = inst_37429);

(statearr_37435_37453[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37434 === (6))){
var inst_37419 = (state_37433[(7)]);
var inst_37422 = (state_37433[(8)]);
var inst_37426 = (function (){var G__37436 = inst_37419;
var G__37437 = inst_37422;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37436,G__37437) : f.call(null,G__37436,G__37437));
})();
var inst_37419__$1 = inst_37426;
var state_37433__$1 = (function (){var statearr_37438 = state_37433;
(statearr_37438[(7)] = inst_37419__$1);

return statearr_37438;
})();
var statearr_37439_37454 = state_37433__$1;
(statearr_37439_37454[(2)] = null);

(statearr_37439_37454[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37434 === (5))){
var inst_37419 = (state_37433[(7)]);
var state_37433__$1 = state_37433;
var statearr_37440_37455 = state_37433__$1;
(statearr_37440_37455[(2)] = inst_37419);

(statearr_37440_37455[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37434 === (4))){
var inst_37422 = (state_37433[(8)]);
var inst_37422__$1 = (state_37433[(2)]);
var inst_37423 = (inst_37422__$1 == null);
var state_37433__$1 = (function (){var statearr_37441 = state_37433;
(statearr_37441[(8)] = inst_37422__$1);

return statearr_37441;
})();
if(cljs.core.truth_(inst_37423)){
var statearr_37442_37456 = state_37433__$1;
(statearr_37442_37456[(1)] = (5));

} else {
var statearr_37443_37457 = state_37433__$1;
(statearr_37443_37457[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37434 === (3))){
var inst_37431 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37433__$1,inst_37431);
} else {
if((state_val_37434 === (2))){
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37433__$1,(4),ch);
} else {
if((state_val_37434 === (1))){
var inst_37419 = init;
var state_37433__$1 = (function (){var statearr_37444 = state_37433;
(statearr_37444[(7)] = inst_37419);

return statearr_37444;
})();
var statearr_37445_37458 = state_37433__$1;
(statearr_37445_37458[(2)] = null);

(statearr_37445_37458[(1)] = (2));


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
});})(c__7226__auto__))
;
return ((function (switch__7170__auto__,c__7226__auto__){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37449 = [null,null,null,null,null,null,null,null,null];
(statearr_37449[(0)] = state_machine__7171__auto__);

(statearr_37449[(1)] = (1));

return statearr_37449;
});
var state_machine__7171__auto____1 = (function (state_37433){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37433);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37450){if((e37450 instanceof Object)){
var ex__7174__auto__ = e37450;
var statearr_37451_37459 = state_37433;
(statearr_37451_37459[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37433);

return cljs.core.constant$keyword$125;
} else {
throw e37450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37460 = state_37433;
state_37433 = G__37460;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37433){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto__))
})();
var state__7228__auto__ = (function (){var statearr_37452 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto__);

return statearr_37452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto__))
);

return c__7226__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7226__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto__){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto__){
return (function (state_37537){
var state_val_37538 = (state_37537[(1)]);
if((state_val_37538 === (7))){
var inst_37519 = (state_37537[(2)]);
var state_37537__$1 = state_37537;
var statearr_37539_37562 = state_37537__$1;
(statearr_37539_37562[(2)] = inst_37519);

(statearr_37539_37562[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (1))){
var inst_37513 = cljs.core.seq(coll);
var inst_37514 = inst_37513;
var state_37537__$1 = (function (){var statearr_37540 = state_37537;
(statearr_37540[(7)] = inst_37514);

return statearr_37540;
})();
var statearr_37541_37563 = state_37537__$1;
(statearr_37541_37563[(2)] = null);

(statearr_37541_37563[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (4))){
var inst_37514 = (state_37537[(7)]);
var inst_37517 = cljs.core.first(inst_37514);
var state_37537__$1 = state_37537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37537__$1,(7),ch,inst_37517);
} else {
if((state_val_37538 === (13))){
var inst_37531 = (state_37537[(2)]);
var state_37537__$1 = state_37537;
var statearr_37542_37564 = state_37537__$1;
(statearr_37542_37564[(2)] = inst_37531);

(statearr_37542_37564[(1)] = (10));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (6))){
var inst_37522 = (state_37537[(2)]);
var state_37537__$1 = state_37537;
if(cljs.core.truth_(inst_37522)){
var statearr_37543_37565 = state_37537__$1;
(statearr_37543_37565[(1)] = (8));

} else {
var statearr_37544_37566 = state_37537__$1;
(statearr_37544_37566[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (3))){
var inst_37535 = (state_37537[(2)]);
var state_37537__$1 = state_37537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37537__$1,inst_37535);
} else {
if((state_val_37538 === (12))){
var state_37537__$1 = state_37537;
var statearr_37545_37567 = state_37537__$1;
(statearr_37545_37567[(2)] = null);

(statearr_37545_37567[(1)] = (13));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (2))){
var inst_37514 = (state_37537[(7)]);
var state_37537__$1 = state_37537;
if(cljs.core.truth_(inst_37514)){
var statearr_37546_37568 = state_37537__$1;
(statearr_37546_37568[(1)] = (4));

} else {
var statearr_37547_37569 = state_37537__$1;
(statearr_37547_37569[(1)] = (5));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (11))){
var inst_37528 = cljs.core.async.close_BANG_(ch);
var state_37537__$1 = state_37537;
var statearr_37548_37570 = state_37537__$1;
(statearr_37548_37570[(2)] = inst_37528);

(statearr_37548_37570[(1)] = (13));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (9))){
var state_37537__$1 = state_37537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37549_37571 = state_37537__$1;
(statearr_37549_37571[(1)] = (11));

} else {
var statearr_37550_37572 = state_37537__$1;
(statearr_37550_37572[(1)] = (12));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (5))){
var inst_37514 = (state_37537[(7)]);
var state_37537__$1 = state_37537;
var statearr_37551_37573 = state_37537__$1;
(statearr_37551_37573[(2)] = inst_37514);

(statearr_37551_37573[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (10))){
var inst_37533 = (state_37537[(2)]);
var state_37537__$1 = state_37537;
var statearr_37552_37574 = state_37537__$1;
(statearr_37552_37574[(2)] = inst_37533);

(statearr_37552_37574[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37538 === (8))){
var inst_37514 = (state_37537[(7)]);
var inst_37524 = cljs.core.next(inst_37514);
var inst_37514__$1 = inst_37524;
var state_37537__$1 = (function (){var statearr_37553 = state_37537;
(statearr_37553[(7)] = inst_37514__$1);

return statearr_37553;
})();
var statearr_37554_37575 = state_37537__$1;
(statearr_37554_37575[(2)] = null);

(statearr_37554_37575[(1)] = (2));


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
}
}
}
}
}
}
});})(c__7226__auto__))
;
return ((function (switch__7170__auto__,c__7226__auto__){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_37558 = [null,null,null,null,null,null,null,null];
(statearr_37558[(0)] = state_machine__7171__auto__);

(statearr_37558[(1)] = (1));

return statearr_37558;
});
var state_machine__7171__auto____1 = (function (state_37537){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37537);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e37559){if((e37559 instanceof Object)){
var ex__7174__auto__ = e37559;
var statearr_37560_37576 = state_37537;
(statearr_37560_37576[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37537);

return cljs.core.constant$keyword$125;
} else {
throw e37559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__37577 = state_37537;
state_37537 = G__37577;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37537){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto__))
})();
var state__7228__auto__ = (function (){var statearr_37561 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_37561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto__);

return statearr_37561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto__))
);

return c__7226__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj37579 = {};
return obj37579;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3764__auto__ = _;
if(and__3764__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4420__auto__ = (((_ == null))?null:_);
return (function (){var or__3776__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__37583 = x__4420__auto__;
return goog.typeOf(G__37583);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj37585 = {};
return obj37585;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__37589 = x__4420__auto__;
return goog.typeOf(G__37589);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__37593 = x__4420__auto__;
return goog.typeOf(G__37593);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__37597 = x__4420__auto__;
return goog.typeOf(G__37597);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__37827 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37827) : cljs.core.atom.call(null,G__37827));
})();
var m = (function (){
if(typeof cljs.core.async.t37828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37828 = (function (cs,ch,mult,meta37829){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37829 = meta37829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37828.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37828.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37828.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37828.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__37831_38056 = self__.cs;
var G__37832_38057 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37831_38056,G__37832_38057) : cljs.core.reset_BANG_.call(null,G__37831_38056,G__37832_38057));

return null;
});})(cs))
;

cljs.core.async.t37828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37830){
var self__ = this;
var _37830__$1 = this;
return self__.meta37829;
});})(cs))
;

cljs.core.async.t37828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37830,meta37829__$1){
var self__ = this;
var _37830__$1 = this;
return (new cljs.core.async.t37828(self__.cs,self__.ch,self__.mult,meta37829__$1));
});})(cs))
;

cljs.core.async.t37828.cljs$lang$type = true;

cljs.core.async.t37828.cljs$lang$ctorStr = "cljs.core.async/t37828";

cljs.core.async.t37828.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t37828");
});})(cs))
;

cljs.core.async.__GT_t37828 = ((function (cs){
return (function __GT_t37828(cs__$1,ch__$1,mult__$1,meta37829){
return (new cljs.core.async.t37828(cs__$1,ch__$1,mult__$1,meta37829));
});})(cs))
;

}

return (new cljs.core.async.t37828(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,48,cljs.core.constant$keyword$110,397,cljs.core.constant$keyword$111,11,cljs.core.constant$keyword$112,390,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__37833 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37833) : cljs.core.atom.call(null,G__37833));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7226__auto___38058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___38058,cs,m,dchan,dctr,done){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___38058,cs,m,dchan,dctr,done){
return (function (state_37964){
var state_val_37965 = (state_37964[(1)]);
if((state_val_37965 === (7))){
var inst_37960 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_37966_38059 = state_37964__$1;
(statearr_37966_38059[(2)] = inst_37960);

(statearr_37966_38059[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (20))){
var inst_37865 = (state_37964[(7)]);
var inst_37875 = cljs.core.first(inst_37865);
var inst_37876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37875,(0),null);
var inst_37877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37875,(1),null);
var state_37964__$1 = (function (){var statearr_37967 = state_37964;
(statearr_37967[(8)] = inst_37876);

return statearr_37967;
})();
if(cljs.core.truth_(inst_37877)){
var statearr_37968_38060 = state_37964__$1;
(statearr_37968_38060[(1)] = (22));

} else {
var statearr_37969_38061 = state_37964__$1;
(statearr_37969_38061[(1)] = (23));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (27))){
var inst_37912 = (state_37964[(9)]);
var inst_37907 = (state_37964[(10)]);
var inst_37905 = (state_37964[(11)]);
var inst_37836 = (state_37964[(12)]);
var inst_37912__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37905,inst_37907);
var inst_37913 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37912__$1,inst_37836,done);
var state_37964__$1 = (function (){var statearr_37970 = state_37964;
(statearr_37970[(9)] = inst_37912__$1);

return statearr_37970;
})();
if(cljs.core.truth_(inst_37913)){
var statearr_37971_38062 = state_37964__$1;
(statearr_37971_38062[(1)] = (30));

} else {
var statearr_37972_38063 = state_37964__$1;
(statearr_37972_38063[(1)] = (31));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (1))){
var state_37964__$1 = state_37964;
var statearr_37973_38064 = state_37964__$1;
(statearr_37973_38064[(2)] = null);

(statearr_37973_38064[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (24))){
var inst_37865 = (state_37964[(7)]);
var inst_37882 = (state_37964[(2)]);
var inst_37883 = cljs.core.next(inst_37865);
var inst_37845 = inst_37883;
var inst_37846 = null;
var inst_37847 = (0);
var inst_37848 = (0);
var state_37964__$1 = (function (){var statearr_37974 = state_37964;
(statearr_37974[(13)] = inst_37882);

(statearr_37974[(14)] = inst_37847);

(statearr_37974[(15)] = inst_37846);

(statearr_37974[(16)] = inst_37848);

(statearr_37974[(17)] = inst_37845);

return statearr_37974;
})();
var statearr_37975_38065 = state_37964__$1;
(statearr_37975_38065[(2)] = null);

(statearr_37975_38065[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (39))){
var state_37964__$1 = state_37964;
var statearr_37979_38066 = state_37964__$1;
(statearr_37979_38066[(2)] = null);

(statearr_37979_38066[(1)] = (41));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (4))){
var inst_37836 = (state_37964[(12)]);
var inst_37836__$1 = (state_37964[(2)]);
var inst_37837 = (inst_37836__$1 == null);
var state_37964__$1 = (function (){var statearr_37980 = state_37964;
(statearr_37980[(12)] = inst_37836__$1);

return statearr_37980;
})();
if(cljs.core.truth_(inst_37837)){
var statearr_37981_38067 = state_37964__$1;
(statearr_37981_38067[(1)] = (5));

} else {
var statearr_37982_38068 = state_37964__$1;
(statearr_37982_38068[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (15))){
var inst_37847 = (state_37964[(14)]);
var inst_37846 = (state_37964[(15)]);
var inst_37848 = (state_37964[(16)]);
var inst_37845 = (state_37964[(17)]);
var inst_37861 = (state_37964[(2)]);
var inst_37862 = (inst_37848 + (1));
var tmp37976 = inst_37847;
var tmp37977 = inst_37846;
var tmp37978 = inst_37845;
var inst_37845__$1 = tmp37978;
var inst_37846__$1 = tmp37977;
var inst_37847__$1 = tmp37976;
var inst_37848__$1 = inst_37862;
var state_37964__$1 = (function (){var statearr_37983 = state_37964;
(statearr_37983[(14)] = inst_37847__$1);

(statearr_37983[(15)] = inst_37846__$1);

(statearr_37983[(18)] = inst_37861);

(statearr_37983[(16)] = inst_37848__$1);

(statearr_37983[(17)] = inst_37845__$1);

return statearr_37983;
})();
var statearr_37984_38069 = state_37964__$1;
(statearr_37984_38069[(2)] = null);

(statearr_37984_38069[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (21))){
var inst_37886 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_37988_38070 = state_37964__$1;
(statearr_37988_38070[(2)] = inst_37886);

(statearr_37988_38070[(1)] = (18));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (31))){
var inst_37912 = (state_37964[(9)]);
var inst_37916 = done(null);
var inst_37917 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37912);
var state_37964__$1 = (function (){var statearr_37989 = state_37964;
(statearr_37989[(19)] = inst_37916);

return statearr_37989;
})();
var statearr_37990_38071 = state_37964__$1;
(statearr_37990_38071[(2)] = inst_37917);

(statearr_37990_38071[(1)] = (32));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (32))){
var inst_37907 = (state_37964[(10)]);
var inst_37906 = (state_37964[(20)]);
var inst_37904 = (state_37964[(21)]);
var inst_37905 = (state_37964[(11)]);
var inst_37919 = (state_37964[(2)]);
var inst_37920 = (inst_37907 + (1));
var tmp37985 = inst_37906;
var tmp37986 = inst_37904;
var tmp37987 = inst_37905;
var inst_37904__$1 = tmp37986;
var inst_37905__$1 = tmp37987;
var inst_37906__$1 = tmp37985;
var inst_37907__$1 = inst_37920;
var state_37964__$1 = (function (){var statearr_37991 = state_37964;
(statearr_37991[(10)] = inst_37907__$1);

(statearr_37991[(22)] = inst_37919);

(statearr_37991[(20)] = inst_37906__$1);

(statearr_37991[(21)] = inst_37904__$1);

(statearr_37991[(11)] = inst_37905__$1);

return statearr_37991;
})();
var statearr_37992_38072 = state_37964__$1;
(statearr_37992_38072[(2)] = null);

(statearr_37992_38072[(1)] = (25));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (40))){
var inst_37932 = (state_37964[(23)]);
var inst_37936 = done(null);
var inst_37937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37932);
var state_37964__$1 = (function (){var statearr_37993 = state_37964;
(statearr_37993[(24)] = inst_37936);

return statearr_37993;
})();
var statearr_37994_38073 = state_37964__$1;
(statearr_37994_38073[(2)] = inst_37937);

(statearr_37994_38073[(1)] = (41));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (33))){
var inst_37923 = (state_37964[(25)]);
var inst_37925 = cljs.core.chunked_seq_QMARK_(inst_37923);
var state_37964__$1 = state_37964;
if(inst_37925){
var statearr_37995_38074 = state_37964__$1;
(statearr_37995_38074[(1)] = (36));

} else {
var statearr_37996_38075 = state_37964__$1;
(statearr_37996_38075[(1)] = (37));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (13))){
var inst_37855 = (state_37964[(26)]);
var inst_37858 = cljs.core.async.close_BANG_(inst_37855);
var state_37964__$1 = state_37964;
var statearr_37997_38076 = state_37964__$1;
(statearr_37997_38076[(2)] = inst_37858);

(statearr_37997_38076[(1)] = (15));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (22))){
var inst_37876 = (state_37964[(8)]);
var inst_37879 = cljs.core.async.close_BANG_(inst_37876);
var state_37964__$1 = state_37964;
var statearr_37998_38077 = state_37964__$1;
(statearr_37998_38077[(2)] = inst_37879);

(statearr_37998_38077[(1)] = (24));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (36))){
var inst_37923 = (state_37964[(25)]);
var inst_37927 = cljs.core.chunk_first(inst_37923);
var inst_37928 = cljs.core.chunk_rest(inst_37923);
var inst_37929 = cljs.core.count(inst_37927);
var inst_37904 = inst_37928;
var inst_37905 = inst_37927;
var inst_37906 = inst_37929;
var inst_37907 = (0);
var state_37964__$1 = (function (){var statearr_37999 = state_37964;
(statearr_37999[(10)] = inst_37907);

(statearr_37999[(20)] = inst_37906);

(statearr_37999[(21)] = inst_37904);

(statearr_37999[(11)] = inst_37905);

return statearr_37999;
})();
var statearr_38000_38078 = state_37964__$1;
(statearr_38000_38078[(2)] = null);

(statearr_38000_38078[(1)] = (25));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (41))){
var inst_37923 = (state_37964[(25)]);
var inst_37939 = (state_37964[(2)]);
var inst_37940 = cljs.core.next(inst_37923);
var inst_37904 = inst_37940;
var inst_37905 = null;
var inst_37906 = (0);
var inst_37907 = (0);
var state_37964__$1 = (function (){var statearr_38001 = state_37964;
(statearr_38001[(10)] = inst_37907);

(statearr_38001[(20)] = inst_37906);

(statearr_38001[(21)] = inst_37904);

(statearr_38001[(27)] = inst_37939);

(statearr_38001[(11)] = inst_37905);

return statearr_38001;
})();
var statearr_38002_38079 = state_37964__$1;
(statearr_38002_38079[(2)] = null);

(statearr_38002_38079[(1)] = (25));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (43))){
var state_37964__$1 = state_37964;
var statearr_38003_38080 = state_37964__$1;
(statearr_38003_38080[(2)] = null);

(statearr_38003_38080[(1)] = (44));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (29))){
var inst_37948 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38004_38081 = state_37964__$1;
(statearr_38004_38081[(2)] = inst_37948);

(statearr_38004_38081[(1)] = (26));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (44))){
var inst_37957 = (state_37964[(2)]);
var state_37964__$1 = (function (){var statearr_38005 = state_37964;
(statearr_38005[(28)] = inst_37957);

return statearr_38005;
})();
var statearr_38006_38082 = state_37964__$1;
(statearr_38006_38082[(2)] = null);

(statearr_38006_38082[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (6))){
var inst_37896 = (state_37964[(29)]);
var inst_37895 = (function (){var G__38007 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38007) : cljs.core.deref.call(null,G__38007));
})();
var inst_37896__$1 = cljs.core.keys(inst_37895);
var inst_37897 = cljs.core.count(inst_37896__$1);
var inst_37898 = (function (){var G__38008 = dctr;
var G__38009 = inst_37897;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38008,G__38009) : cljs.core.reset_BANG_.call(null,G__38008,G__38009));
})();
var inst_37903 = cljs.core.seq(inst_37896__$1);
var inst_37904 = inst_37903;
var inst_37905 = null;
var inst_37906 = (0);
var inst_37907 = (0);
var state_37964__$1 = (function (){var statearr_38010 = state_37964;
(statearr_38010[(30)] = inst_37898);

(statearr_38010[(10)] = inst_37907);

(statearr_38010[(20)] = inst_37906);

(statearr_38010[(29)] = inst_37896__$1);

(statearr_38010[(21)] = inst_37904);

(statearr_38010[(11)] = inst_37905);

return statearr_38010;
})();
var statearr_38011_38083 = state_37964__$1;
(statearr_38011_38083[(2)] = null);

(statearr_38011_38083[(1)] = (25));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (28))){
var inst_37923 = (state_37964[(25)]);
var inst_37904 = (state_37964[(21)]);
var inst_37923__$1 = cljs.core.seq(inst_37904);
var state_37964__$1 = (function (){var statearr_38012 = state_37964;
(statearr_38012[(25)] = inst_37923__$1);

return statearr_38012;
})();
if(inst_37923__$1){
var statearr_38013_38084 = state_37964__$1;
(statearr_38013_38084[(1)] = (33));

} else {
var statearr_38014_38085 = state_37964__$1;
(statearr_38014_38085[(1)] = (34));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (25))){
var inst_37907 = (state_37964[(10)]);
var inst_37906 = (state_37964[(20)]);
var inst_37909 = (inst_37907 < inst_37906);
var inst_37910 = inst_37909;
var state_37964__$1 = state_37964;
if(cljs.core.truth_(inst_37910)){
var statearr_38015_38086 = state_37964__$1;
(statearr_38015_38086[(1)] = (27));

} else {
var statearr_38016_38087 = state_37964__$1;
(statearr_38016_38087[(1)] = (28));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (34))){
var state_37964__$1 = state_37964;
var statearr_38017_38088 = state_37964__$1;
(statearr_38017_38088[(2)] = null);

(statearr_38017_38088[(1)] = (35));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (17))){
var state_37964__$1 = state_37964;
var statearr_38018_38089 = state_37964__$1;
(statearr_38018_38089[(2)] = null);

(statearr_38018_38089[(1)] = (18));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (3))){
var inst_37962 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37964__$1,inst_37962);
} else {
if((state_val_37965 === (12))){
var inst_37891 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38019_38090 = state_37964__$1;
(statearr_38019_38090[(2)] = inst_37891);

(statearr_38019_38090[(1)] = (9));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (2))){
var state_37964__$1 = state_37964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37964__$1,(4),ch);
} else {
if((state_val_37965 === (23))){
var state_37964__$1 = state_37964;
var statearr_38020_38091 = state_37964__$1;
(statearr_38020_38091[(2)] = null);

(statearr_38020_38091[(1)] = (24));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (35))){
var inst_37946 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38021_38092 = state_37964__$1;
(statearr_38021_38092[(2)] = inst_37946);

(statearr_38021_38092[(1)] = (29));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (19))){
var inst_37865 = (state_37964[(7)]);
var inst_37869 = cljs.core.chunk_first(inst_37865);
var inst_37870 = cljs.core.chunk_rest(inst_37865);
var inst_37871 = cljs.core.count(inst_37869);
var inst_37845 = inst_37870;
var inst_37846 = inst_37869;
var inst_37847 = inst_37871;
var inst_37848 = (0);
var state_37964__$1 = (function (){var statearr_38022 = state_37964;
(statearr_38022[(14)] = inst_37847);

(statearr_38022[(15)] = inst_37846);

(statearr_38022[(16)] = inst_37848);

(statearr_38022[(17)] = inst_37845);

return statearr_38022;
})();
var statearr_38023_38093 = state_37964__$1;
(statearr_38023_38093[(2)] = null);

(statearr_38023_38093[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (11))){
var inst_37865 = (state_37964[(7)]);
var inst_37845 = (state_37964[(17)]);
var inst_37865__$1 = cljs.core.seq(inst_37845);
var state_37964__$1 = (function (){var statearr_38024 = state_37964;
(statearr_38024[(7)] = inst_37865__$1);

return statearr_38024;
})();
if(inst_37865__$1){
var statearr_38025_38094 = state_37964__$1;
(statearr_38025_38094[(1)] = (16));

} else {
var statearr_38026_38095 = state_37964__$1;
(statearr_38026_38095[(1)] = (17));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (9))){
var inst_37893 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38027_38096 = state_37964__$1;
(statearr_38027_38096[(2)] = inst_37893);

(statearr_38027_38096[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (5))){
var inst_37843 = (function (){var G__38028 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38028) : cljs.core.deref.call(null,G__38028));
})();
var inst_37844 = cljs.core.seq(inst_37843);
var inst_37845 = inst_37844;
var inst_37846 = null;
var inst_37847 = (0);
var inst_37848 = (0);
var state_37964__$1 = (function (){var statearr_38029 = state_37964;
(statearr_38029[(14)] = inst_37847);

(statearr_38029[(15)] = inst_37846);

(statearr_38029[(16)] = inst_37848);

(statearr_38029[(17)] = inst_37845);

return statearr_38029;
})();
var statearr_38030_38097 = state_37964__$1;
(statearr_38030_38097[(2)] = null);

(statearr_38030_38097[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (14))){
var state_37964__$1 = state_37964;
var statearr_38031_38098 = state_37964__$1;
(statearr_38031_38098[(2)] = null);

(statearr_38031_38098[(1)] = (15));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (45))){
var inst_37954 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38032_38099 = state_37964__$1;
(statearr_38032_38099[(2)] = inst_37954);

(statearr_38032_38099[(1)] = (44));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (26))){
var inst_37896 = (state_37964[(29)]);
var inst_37950 = (state_37964[(2)]);
var inst_37951 = cljs.core.seq(inst_37896);
var state_37964__$1 = (function (){var statearr_38033 = state_37964;
(statearr_38033[(31)] = inst_37950);

return statearr_38033;
})();
if(inst_37951){
var statearr_38034_38100 = state_37964__$1;
(statearr_38034_38100[(1)] = (42));

} else {
var statearr_38035_38101 = state_37964__$1;
(statearr_38035_38101[(1)] = (43));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (16))){
var inst_37865 = (state_37964[(7)]);
var inst_37867 = cljs.core.chunked_seq_QMARK_(inst_37865);
var state_37964__$1 = state_37964;
if(inst_37867){
var statearr_38036_38102 = state_37964__$1;
(statearr_38036_38102[(1)] = (19));

} else {
var statearr_38037_38103 = state_37964__$1;
(statearr_38037_38103[(1)] = (20));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (38))){
var inst_37943 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38038_38104 = state_37964__$1;
(statearr_38038_38104[(2)] = inst_37943);

(statearr_38038_38104[(1)] = (35));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (30))){
var state_37964__$1 = state_37964;
var statearr_38039_38105 = state_37964__$1;
(statearr_38039_38105[(2)] = null);

(statearr_38039_38105[(1)] = (32));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (10))){
var inst_37846 = (state_37964[(15)]);
var inst_37848 = (state_37964[(16)]);
var inst_37854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37846,inst_37848);
var inst_37855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37854,(0),null);
var inst_37856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37854,(1),null);
var state_37964__$1 = (function (){var statearr_38040 = state_37964;
(statearr_38040[(26)] = inst_37855);

return statearr_38040;
})();
if(cljs.core.truth_(inst_37856)){
var statearr_38041_38106 = state_37964__$1;
(statearr_38041_38106[(1)] = (13));

} else {
var statearr_38042_38107 = state_37964__$1;
(statearr_38042_38107[(1)] = (14));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (18))){
var inst_37889 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
var statearr_38043_38108 = state_37964__$1;
(statearr_38043_38108[(2)] = inst_37889);

(statearr_38043_38108[(1)] = (12));


return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (42))){
var state_37964__$1 = state_37964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37964__$1,(45),dchan);
} else {
if((state_val_37965 === (37))){
var inst_37923 = (state_37964[(25)]);
var inst_37836 = (state_37964[(12)]);
var inst_37932 = (state_37964[(23)]);
var inst_37932__$1 = cljs.core.first(inst_37923);
var inst_37933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37932__$1,inst_37836,done);
var state_37964__$1 = (function (){var statearr_38044 = state_37964;
(statearr_38044[(23)] = inst_37932__$1);

return statearr_38044;
})();
if(cljs.core.truth_(inst_37933)){
var statearr_38045_38109 = state_37964__$1;
(statearr_38045_38109[(1)] = (39));

} else {
var statearr_38046_38110 = state_37964__$1;
(statearr_38046_38110[(1)] = (40));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_37965 === (8))){
var inst_37847 = (state_37964[(14)]);
var inst_37848 = (state_37964[(16)]);
var inst_37850 = (inst_37848 < inst_37847);
var inst_37851 = inst_37850;
var state_37964__$1 = state_37964;
if(cljs.core.truth_(inst_37851)){
var statearr_38047_38111 = state_37964__$1;
(statearr_38047_38111[(1)] = (10));

} else {
var statearr_38048_38112 = state_37964__$1;
(statearr_38048_38112[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto___38058,cs,m,dchan,dctr,done))
;
return ((function (switch__7170__auto__,c__7226__auto___38058,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_38052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38052[(0)] = state_machine__7171__auto__);

(statearr_38052[(1)] = (1));

return statearr_38052;
});
var state_machine__7171__auto____1 = (function (state_37964){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_37964);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e38053){if((e38053 instanceof Object)){
var ex__7174__auto__ = e38053;
var statearr_38054_38113 = state_37964;
(statearr_38054_38113[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37964);

return cljs.core.constant$keyword$125;
} else {
throw e38053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__38114 = state_37964;
state_37964 = G__38114;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_37964){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_37964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___38058,cs,m,dchan,dctr,done))
})();
var state__7228__auto__ = (function (){var statearr_38055 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_38055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___38058);

return statearr_38055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___38058,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj38119 = {};
return obj38119;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__38123 = x__4420__auto__;
return goog.typeOf(G__38123);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__38127 = x__4420__auto__;
return goog.typeOf(G__38127);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__38131 = x__4420__auto__;
return goog.typeOf(G__38131);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__38135 = x__4420__auto__;
return goog.typeOf(G__38135);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__38139 = x__4420__auto__;
return goog.typeOf(G__38139);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__38140){
var map__38146 = p__38140;
var map__38146__$1 = ((cljs.core.seq_QMARK_(map__38146))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38146):map__38146);
var opts = map__38146__$1;
var statearr_38147_38151 = state;
(statearr_38147_38151[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__38146,map__38146__$1,opts){
return (function (val){
var statearr_38148_38152 = state;
(statearr_38148_38152[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__38146,map__38146__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_38149_38153 = state;
(statearr_38149_38153[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__38150 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38150) : cljs.core.deref.call(null,G__38150));
})());


return cljs.core.constant$keyword$125;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__38140 = null;
if (arguments.length > 3) {
var G__38154__i = 0, G__38154__a = new Array(arguments.length -  3);
while (G__38154__i < G__38154__a.length) {G__38154__a[G__38154__i] = arguments[G__38154__i + 3]; ++G__38154__i;}
  p__38140 = new cljs.core.IndexedSeq(G__38154__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__38140);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__38155){
var state = cljs.core.first(arglist__38155);
arglist__38155 = cljs.core.next(arglist__38155);
var cont_block = cljs.core.first(arglist__38155);
arglist__38155 = cljs.core.next(arglist__38155);
var ports = cljs.core.first(arglist__38155);
var p__38140 = cljs.core.rest(arglist__38155);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__38140);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__38288 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38288) : cljs.core.atom.call(null,G__38288));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$134,null,cljs.core.constant$keyword$135,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$136);
var solo_mode = (function (){var G__38289 = cljs.core.constant$keyword$135;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38289) : cljs.core.atom.call(null,G__38289));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__38290 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__38290) : attr.call(null,G__38290));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__38291 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38291) : cljs.core.deref.call(null,G__38291));
})();
var mode = (function (){var G__38292 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38292) : cljs.core.deref.call(null,G__38292));
})();
var solos = pick(cljs.core.constant$keyword$136,chs);
var pauses = pick(cljs.core.constant$keyword$134,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$137,solos,cljs.core.constant$keyword$138,pick(cljs.core.constant$keyword$135,chs),cljs.core.constant$keyword$139,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$134)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t38293 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38293 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38294){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38294 = meta38294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38293.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t38293.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__38296_38420 = self__.cs;
var G__38297_38421 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38296_38420,G__38297_38421) : cljs.core.reset_BANG_.call(null,G__38296_38420,G__38297_38421));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__38298_38422 = self__.solo_mode;
var G__38299_38423 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38298_38422,G__38299_38423) : cljs.core.reset_BANG_.call(null,G__38298_38422,G__38299_38423));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38295){
var self__ = this;
var _38295__$1 = this;
return self__.meta38294;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38295,meta38294__$1){
var self__ = this;
var _38295__$1 = this;
return (new cljs.core.async.t38293(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38294__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38293.cljs$lang$type = true;

cljs.core.async.t38293.cljs$lang$ctorStr = "cljs.core.async/t38293";

cljs.core.async.t38293.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t38293");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t38293 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38293(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38294){
return (new cljs.core.async.t38293(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38294));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t38293(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,25,cljs.core.constant$keyword$110,510,cljs.core.constant$keyword$111,11,cljs.core.constant$keyword$112,499,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
})()
;
var c__7226__auto___38424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___38424,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___38424,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38371){
var state_val_38372 = (state_38371[(1)]);
if((state_val_38372 === (7))){
var inst_38313 = (state_38371[(7)]);
var inst_38318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38313);
var state_38371__$1 = state_38371;
var statearr_38373_38425 = state_38371__$1;
(statearr_38373_38425[(2)] = inst_38318);

(statearr_38373_38425[(1)] = (9));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (20))){
var inst_38328 = (state_38371[(8)]);
var state_38371__$1 = state_38371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38371__$1,(23),out,inst_38328);
} else {
if((state_val_38372 === (1))){
var inst_38303 = (state_38371[(9)]);
var inst_38303__$1 = calc_state();
var inst_38304 = cljs.core.seq_QMARK_(inst_38303__$1);
var state_38371__$1 = (function (){var statearr_38374 = state_38371;
(statearr_38374[(9)] = inst_38303__$1);

return statearr_38374;
})();
if(inst_38304){
var statearr_38375_38426 = state_38371__$1;
(statearr_38375_38426[(1)] = (2));

} else {
var statearr_38376_38427 = state_38371__$1;
(statearr_38376_38427[(1)] = (3));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (24))){
var inst_38321 = (state_38371[(10)]);
var inst_38313 = inst_38321;
var state_38371__$1 = (function (){var statearr_38377 = state_38371;
(statearr_38377[(7)] = inst_38313);

return statearr_38377;
})();
var statearr_38378_38428 = state_38371__$1;
(statearr_38378_38428[(2)] = null);

(statearr_38378_38428[(1)] = (5));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (4))){
var inst_38303 = (state_38371[(9)]);
var inst_38309 = (state_38371[(2)]);
var inst_38310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38309,cljs.core.constant$keyword$139);
var inst_38311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38309,cljs.core.constant$keyword$138);
var inst_38312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38309,cljs.core.constant$keyword$137);
var inst_38313 = inst_38303;
var state_38371__$1 = (function (){var statearr_38379 = state_38371;
(statearr_38379[(11)] = inst_38310);

(statearr_38379[(12)] = inst_38312);

(statearr_38379[(13)] = inst_38311);

(statearr_38379[(7)] = inst_38313);

return statearr_38379;
})();
var statearr_38380_38429 = state_38371__$1;
(statearr_38380_38429[(2)] = null);

(statearr_38380_38429[(1)] = (5));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (15))){
var state_38371__$1 = state_38371;
var statearr_38381_38430 = state_38371__$1;
(statearr_38381_38430[(2)] = null);

(statearr_38381_38430[(1)] = (16));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (21))){
var inst_38321 = (state_38371[(10)]);
var inst_38313 = inst_38321;
var state_38371__$1 = (function (){var statearr_38382 = state_38371;
(statearr_38382[(7)] = inst_38313);

return statearr_38382;
})();
var statearr_38383_38431 = state_38371__$1;
(statearr_38383_38431[(2)] = null);

(statearr_38383_38431[(1)] = (5));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (13))){
var inst_38367 = (state_38371[(2)]);
var state_38371__$1 = state_38371;
var statearr_38384_38432 = state_38371__$1;
(statearr_38384_38432[(2)] = inst_38367);

(statearr_38384_38432[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (22))){
var inst_38365 = (state_38371[(2)]);
var state_38371__$1 = state_38371;
var statearr_38385_38433 = state_38371__$1;
(statearr_38385_38433[(2)] = inst_38365);

(statearr_38385_38433[(1)] = (13));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (6))){
var inst_38369 = (state_38371[(2)]);
var state_38371__$1 = state_38371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38371__$1,inst_38369);
} else {
if((state_val_38372 === (25))){
var state_38371__$1 = state_38371;
var statearr_38386_38434 = state_38371__$1;
(statearr_38386_38434[(2)] = null);

(statearr_38386_38434[(1)] = (26));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (17))){
var inst_38344 = (state_38371[(14)]);
var state_38371__$1 = state_38371;
var statearr_38387_38435 = state_38371__$1;
(statearr_38387_38435[(2)] = inst_38344);

(statearr_38387_38435[(1)] = (19));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (3))){
var inst_38303 = (state_38371[(9)]);
var state_38371__$1 = state_38371;
var statearr_38388_38436 = state_38371__$1;
(statearr_38388_38436[(2)] = inst_38303);

(statearr_38388_38436[(1)] = (4));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (12))){
var inst_38329 = (state_38371[(15)]);
var inst_38324 = (state_38371[(16)]);
var inst_38344 = (state_38371[(14)]);
var inst_38344__$1 = (function (){var G__38389 = inst_38329;
return (inst_38324.cljs$core$IFn$_invoke$arity$1 ? inst_38324.cljs$core$IFn$_invoke$arity$1(G__38389) : inst_38324.call(null,G__38389));
})();
var state_38371__$1 = (function (){var statearr_38390 = state_38371;
(statearr_38390[(14)] = inst_38344__$1);

return statearr_38390;
})();
if(cljs.core.truth_(inst_38344__$1)){
var statearr_38391_38437 = state_38371__$1;
(statearr_38391_38437[(1)] = (17));

} else {
var statearr_38392_38438 = state_38371__$1;
(statearr_38392_38438[(1)] = (18));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (2))){
var inst_38303 = (state_38371[(9)]);
var inst_38306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38303);
var state_38371__$1 = state_38371;
var statearr_38393_38439 = state_38371__$1;
(statearr_38393_38439[(2)] = inst_38306);

(statearr_38393_38439[(1)] = (4));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (23))){
var inst_38356 = (state_38371[(2)]);
var state_38371__$1 = state_38371;
if(cljs.core.truth_(inst_38356)){
var statearr_38394_38440 = state_38371__$1;
(statearr_38394_38440[(1)] = (24));

} else {
var statearr_38395_38441 = state_38371__$1;
(statearr_38395_38441[(1)] = (25));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (19))){
var inst_38353 = (state_38371[(2)]);
var state_38371__$1 = state_38371;
if(cljs.core.truth_(inst_38353)){
var statearr_38396_38442 = state_38371__$1;
(statearr_38396_38442[(1)] = (20));

} else {
var statearr_38397_38443 = state_38371__$1;
(statearr_38397_38443[(1)] = (21));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (11))){
var inst_38328 = (state_38371[(8)]);
var inst_38334 = (inst_38328 == null);
var state_38371__$1 = state_38371;
if(cljs.core.truth_(inst_38334)){
var statearr_38398_38444 = state_38371__$1;
(statearr_38398_38444[(1)] = (14));

} else {
var statearr_38399_38445 = state_38371__$1;
(statearr_38399_38445[(1)] = (15));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (9))){
var inst_38321 = (state_38371[(10)]);
var inst_38321__$1 = (state_38371[(2)]);
var inst_38322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38321__$1,cljs.core.constant$keyword$139);
var inst_38323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38321__$1,cljs.core.constant$keyword$138);
var inst_38324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38321__$1,cljs.core.constant$keyword$137);
var state_38371__$1 = (function (){var statearr_38400 = state_38371;
(statearr_38400[(17)] = inst_38323);

(statearr_38400[(16)] = inst_38324);

(statearr_38400[(10)] = inst_38321__$1);

return statearr_38400;
})();
return cljs.core.async.ioc_alts_BANG_(state_38371__$1,(10),inst_38322);
} else {
if((state_val_38372 === (5))){
var inst_38313 = (state_38371[(7)]);
var inst_38316 = cljs.core.seq_QMARK_(inst_38313);
var state_38371__$1 = state_38371;
if(inst_38316){
var statearr_38401_38446 = state_38371__$1;
(statearr_38401_38446[(1)] = (7));

} else {
var statearr_38402_38447 = state_38371__$1;
(statearr_38402_38447[(1)] = (8));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (14))){
var inst_38329 = (state_38371[(15)]);
var inst_38336 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38329);
var state_38371__$1 = state_38371;
var statearr_38403_38448 = state_38371__$1;
(statearr_38403_38448[(2)] = inst_38336);

(statearr_38403_38448[(1)] = (16));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (26))){
var inst_38361 = (state_38371[(2)]);
var state_38371__$1 = state_38371;
var statearr_38404_38449 = state_38371__$1;
(statearr_38404_38449[(2)] = inst_38361);

(statearr_38404_38449[(1)] = (22));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (16))){
var inst_38339 = (state_38371[(2)]);
var inst_38340 = calc_state();
var inst_38313 = inst_38340;
var state_38371__$1 = (function (){var statearr_38405 = state_38371;
(statearr_38405[(18)] = inst_38339);

(statearr_38405[(7)] = inst_38313);

return statearr_38405;
})();
var statearr_38406_38450 = state_38371__$1;
(statearr_38406_38450[(2)] = null);

(statearr_38406_38450[(1)] = (5));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (10))){
var inst_38328 = (state_38371[(8)]);
var inst_38329 = (state_38371[(15)]);
var inst_38327 = (state_38371[(2)]);
var inst_38328__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38327,(0),null);
var inst_38329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38327,(1),null);
var inst_38330 = (inst_38328__$1 == null);
var inst_38331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38329__$1,change);
var inst_38332 = (inst_38330) || (inst_38331);
var state_38371__$1 = (function (){var statearr_38407 = state_38371;
(statearr_38407[(8)] = inst_38328__$1);

(statearr_38407[(15)] = inst_38329__$1);

return statearr_38407;
})();
if(cljs.core.truth_(inst_38332)){
var statearr_38408_38451 = state_38371__$1;
(statearr_38408_38451[(1)] = (11));

} else {
var statearr_38409_38452 = state_38371__$1;
(statearr_38409_38452[(1)] = (12));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (18))){
var inst_38329 = (state_38371[(15)]);
var inst_38323 = (state_38371[(17)]);
var inst_38324 = (state_38371[(16)]);
var inst_38348 = cljs.core.empty_QMARK_(inst_38324);
var inst_38349 = (function (){var G__38410 = inst_38329;
return (inst_38323.cljs$core$IFn$_invoke$arity$1 ? inst_38323.cljs$core$IFn$_invoke$arity$1(G__38410) : inst_38323.call(null,G__38410));
})();
var inst_38350 = cljs.core.not(inst_38349);
var inst_38351 = (inst_38348) && (inst_38350);
var state_38371__$1 = state_38371;
var statearr_38411_38453 = state_38371__$1;
(statearr_38411_38453[(2)] = inst_38351);

(statearr_38411_38453[(1)] = (19));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38372 === (8))){
var inst_38313 = (state_38371[(7)]);
var state_38371__$1 = state_38371;
var statearr_38412_38454 = state_38371__$1;
(statearr_38412_38454[(2)] = inst_38313);

(statearr_38412_38454[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto___38424,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7170__auto__,c__7226__auto___38424,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_38416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38416[(0)] = state_machine__7171__auto__);

(statearr_38416[(1)] = (1));

return statearr_38416;
});
var state_machine__7171__auto____1 = (function (state_38371){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_38371);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e38417){if((e38417 instanceof Object)){
var ex__7174__auto__ = e38417;
var statearr_38418_38455 = state_38371;
(statearr_38418_38455[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38371);

return cljs.core.constant$keyword$125;
} else {
throw e38417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__38456 = state_38371;
state_38371 = G__38456;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_38371){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_38371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___38424,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7228__auto__ = (function (){var statearr_38419 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_38419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___38424);

return statearr_38419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___38424,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj38458 = {};
return obj38458;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__38462 = x__4420__auto__;
return goog.typeOf(G__38462);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__38466 = x__4420__auto__;
return goog.typeOf(G__38466);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__38472 = x__4420__auto__;
return goog.typeOf(G__38472);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__38474 = x__4420__auto__;
return goog.typeOf(G__38474);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__38613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38613) : cljs.core.atom.call(null,G__38613));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3776__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__38615 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38615) : cljs.core.deref.call(null,G__38615));
})(),topic);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3776__auto__,mults){
return (function (p1__38475_SHARP_){
if(cljs.core.truth_((function (){var G__38616 = topic;
return (p1__38475_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38475_SHARP_.cljs$core$IFn$_invoke$arity$1(G__38616) : p1__38475_SHARP_.call(null,G__38616));
})())){
return p1__38475_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38475_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__38617 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__38617) : buf_fn.call(null,G__38617));
})())));
}
});})(or__3776__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t38618 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38618 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38619){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38619 = meta38619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38618.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t38618.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__38621 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__38621) : self__.ensure_mult.call(null,G__38621));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t38618.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__38622 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38622) : cljs.core.deref.call(null,G__38622));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t38618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__38623 = self__.mults;
var G__38624 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38623,G__38624) : cljs.core.reset_BANG_.call(null,G__38623,G__38624));
});})(mults,ensure_mult))
;

cljs.core.async.t38618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t38618.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t38618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38620){
var self__ = this;
var _38620__$1 = this;
return self__.meta38619;
});})(mults,ensure_mult))
;

cljs.core.async.t38618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38620,meta38619__$1){
var self__ = this;
var _38620__$1 = this;
return (new cljs.core.async.t38618(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38619__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t38618.cljs$lang$type = true;

cljs.core.async.t38618.cljs$lang$ctorStr = "cljs.core.async/t38618";

cljs.core.async.t38618.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t38618");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t38618 = ((function (mults,ensure_mult){
return (function __GT_t38618(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38619){
return (new cljs.core.async.t38618(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38619));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t38618(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,65,cljs.core.constant$keyword$110,603,cljs.core.constant$keyword$111,14,cljs.core.constant$keyword$112,591,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
})()
;
var c__7226__auto___38747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___38747,mults,ensure_mult,p){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___38747,mults,ensure_mult,p){
return (function (state_38696){
var state_val_38697 = (state_38696[(1)]);
if((state_val_38697 === (7))){
var inst_38692 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38698_38748 = state_38696__$1;
(statearr_38698_38748[(2)] = inst_38692);

(statearr_38698_38748[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (20))){
var state_38696__$1 = state_38696;
var statearr_38699_38749 = state_38696__$1;
(statearr_38699_38749[(2)] = null);

(statearr_38699_38749[(1)] = (21));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (1))){
var state_38696__$1 = state_38696;
var statearr_38700_38750 = state_38696__$1;
(statearr_38700_38750[(2)] = null);

(statearr_38700_38750[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (24))){
var inst_38675 = (state_38696[(7)]);
var inst_38684 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38675);
var state_38696__$1 = state_38696;
var statearr_38701_38751 = state_38696__$1;
(statearr_38701_38751[(2)] = inst_38684);

(statearr_38701_38751[(1)] = (25));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (4))){
var inst_38627 = (state_38696[(8)]);
var inst_38627__$1 = (state_38696[(2)]);
var inst_38628 = (inst_38627__$1 == null);
var state_38696__$1 = (function (){var statearr_38702 = state_38696;
(statearr_38702[(8)] = inst_38627__$1);

return statearr_38702;
})();
if(cljs.core.truth_(inst_38628)){
var statearr_38703_38752 = state_38696__$1;
(statearr_38703_38752[(1)] = (5));

} else {
var statearr_38704_38753 = state_38696__$1;
(statearr_38704_38753[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (15))){
var inst_38669 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38705_38754 = state_38696__$1;
(statearr_38705_38754[(2)] = inst_38669);

(statearr_38705_38754[(1)] = (12));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (21))){
var inst_38689 = (state_38696[(2)]);
var state_38696__$1 = (function (){var statearr_38706 = state_38696;
(statearr_38706[(9)] = inst_38689);

return statearr_38706;
})();
var statearr_38707_38755 = state_38696__$1;
(statearr_38707_38755[(2)] = null);

(statearr_38707_38755[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (13))){
var inst_38651 = (state_38696[(10)]);
var inst_38653 = cljs.core.chunked_seq_QMARK_(inst_38651);
var state_38696__$1 = state_38696;
if(inst_38653){
var statearr_38708_38756 = state_38696__$1;
(statearr_38708_38756[(1)] = (16));

} else {
var statearr_38709_38757 = state_38696__$1;
(statearr_38709_38757[(1)] = (17));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (22))){
var inst_38681 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
if(cljs.core.truth_(inst_38681)){
var statearr_38710_38758 = state_38696__$1;
(statearr_38710_38758[(1)] = (23));

} else {
var statearr_38711_38759 = state_38696__$1;
(statearr_38711_38759[(1)] = (24));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (6))){
var inst_38677 = (state_38696[(11)]);
var inst_38627 = (state_38696[(8)]);
var inst_38675 = (state_38696[(7)]);
var inst_38675__$1 = (function (){var G__38712 = inst_38627;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__38712) : topic_fn.call(null,G__38712));
})();
var inst_38676 = (function (){var G__38713 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38713) : cljs.core.deref.call(null,G__38713));
})();
var inst_38677__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38676,inst_38675__$1);
var state_38696__$1 = (function (){var statearr_38714 = state_38696;
(statearr_38714[(11)] = inst_38677__$1);

(statearr_38714[(7)] = inst_38675__$1);

return statearr_38714;
})();
if(cljs.core.truth_(inst_38677__$1)){
var statearr_38715_38760 = state_38696__$1;
(statearr_38715_38760[(1)] = (19));

} else {
var statearr_38716_38761 = state_38696__$1;
(statearr_38716_38761[(1)] = (20));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (25))){
var inst_38686 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38717_38762 = state_38696__$1;
(statearr_38717_38762[(2)] = inst_38686);

(statearr_38717_38762[(1)] = (21));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (17))){
var inst_38651 = (state_38696[(10)]);
var inst_38660 = cljs.core.first(inst_38651);
var inst_38661 = cljs.core.async.muxch_STAR_(inst_38660);
var inst_38662 = cljs.core.async.close_BANG_(inst_38661);
var inst_38663 = cljs.core.next(inst_38651);
var inst_38637 = inst_38663;
var inst_38638 = null;
var inst_38639 = (0);
var inst_38640 = (0);
var state_38696__$1 = (function (){var statearr_38718 = state_38696;
(statearr_38718[(12)] = inst_38662);

(statearr_38718[(13)] = inst_38640);

(statearr_38718[(14)] = inst_38638);

(statearr_38718[(15)] = inst_38639);

(statearr_38718[(16)] = inst_38637);

return statearr_38718;
})();
var statearr_38719_38763 = state_38696__$1;
(statearr_38719_38763[(2)] = null);

(statearr_38719_38763[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (3))){
var inst_38694 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38696__$1,inst_38694);
} else {
if((state_val_38697 === (12))){
var inst_38671 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38720_38764 = state_38696__$1;
(statearr_38720_38764[(2)] = inst_38671);

(statearr_38720_38764[(1)] = (9));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (2))){
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38696__$1,(4),ch);
} else {
if((state_val_38697 === (23))){
var state_38696__$1 = state_38696;
var statearr_38721_38765 = state_38696__$1;
(statearr_38721_38765[(2)] = null);

(statearr_38721_38765[(1)] = (25));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (19))){
var inst_38677 = (state_38696[(11)]);
var inst_38627 = (state_38696[(8)]);
var inst_38679 = cljs.core.async.muxch_STAR_(inst_38677);
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38696__$1,(22),inst_38679,inst_38627);
} else {
if((state_val_38697 === (11))){
var inst_38651 = (state_38696[(10)]);
var inst_38637 = (state_38696[(16)]);
var inst_38651__$1 = cljs.core.seq(inst_38637);
var state_38696__$1 = (function (){var statearr_38722 = state_38696;
(statearr_38722[(10)] = inst_38651__$1);

return statearr_38722;
})();
if(inst_38651__$1){
var statearr_38723_38766 = state_38696__$1;
(statearr_38723_38766[(1)] = (13));

} else {
var statearr_38724_38767 = state_38696__$1;
(statearr_38724_38767[(1)] = (14));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (9))){
var inst_38673 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38725_38768 = state_38696__$1;
(statearr_38725_38768[(2)] = inst_38673);

(statearr_38725_38768[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (5))){
var inst_38634 = (function (){var G__38726 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38726) : cljs.core.deref.call(null,G__38726));
})();
var inst_38635 = cljs.core.vals(inst_38634);
var inst_38636 = cljs.core.seq(inst_38635);
var inst_38637 = inst_38636;
var inst_38638 = null;
var inst_38639 = (0);
var inst_38640 = (0);
var state_38696__$1 = (function (){var statearr_38727 = state_38696;
(statearr_38727[(13)] = inst_38640);

(statearr_38727[(14)] = inst_38638);

(statearr_38727[(15)] = inst_38639);

(statearr_38727[(16)] = inst_38637);

return statearr_38727;
})();
var statearr_38728_38769 = state_38696__$1;
(statearr_38728_38769[(2)] = null);

(statearr_38728_38769[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (14))){
var state_38696__$1 = state_38696;
var statearr_38732_38770 = state_38696__$1;
(statearr_38732_38770[(2)] = null);

(statearr_38732_38770[(1)] = (15));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (16))){
var inst_38651 = (state_38696[(10)]);
var inst_38655 = cljs.core.chunk_first(inst_38651);
var inst_38656 = cljs.core.chunk_rest(inst_38651);
var inst_38657 = cljs.core.count(inst_38655);
var inst_38637 = inst_38656;
var inst_38638 = inst_38655;
var inst_38639 = inst_38657;
var inst_38640 = (0);
var state_38696__$1 = (function (){var statearr_38733 = state_38696;
(statearr_38733[(13)] = inst_38640);

(statearr_38733[(14)] = inst_38638);

(statearr_38733[(15)] = inst_38639);

(statearr_38733[(16)] = inst_38637);

return statearr_38733;
})();
var statearr_38734_38771 = state_38696__$1;
(statearr_38734_38771[(2)] = null);

(statearr_38734_38771[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (10))){
var inst_38640 = (state_38696[(13)]);
var inst_38638 = (state_38696[(14)]);
var inst_38639 = (state_38696[(15)]);
var inst_38637 = (state_38696[(16)]);
var inst_38645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38638,inst_38640);
var inst_38646 = cljs.core.async.muxch_STAR_(inst_38645);
var inst_38647 = cljs.core.async.close_BANG_(inst_38646);
var inst_38648 = (inst_38640 + (1));
var tmp38729 = inst_38638;
var tmp38730 = inst_38639;
var tmp38731 = inst_38637;
var inst_38637__$1 = tmp38731;
var inst_38638__$1 = tmp38729;
var inst_38639__$1 = tmp38730;
var inst_38640__$1 = inst_38648;
var state_38696__$1 = (function (){var statearr_38735 = state_38696;
(statearr_38735[(13)] = inst_38640__$1);

(statearr_38735[(14)] = inst_38638__$1);

(statearr_38735[(15)] = inst_38639__$1);

(statearr_38735[(17)] = inst_38647);

(statearr_38735[(16)] = inst_38637__$1);

return statearr_38735;
})();
var statearr_38736_38772 = state_38696__$1;
(statearr_38736_38772[(2)] = null);

(statearr_38736_38772[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (18))){
var inst_38666 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38737_38773 = state_38696__$1;
(statearr_38737_38773[(2)] = inst_38666);

(statearr_38737_38773[(1)] = (15));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38697 === (8))){
var inst_38640 = (state_38696[(13)]);
var inst_38639 = (state_38696[(15)]);
var inst_38642 = (inst_38640 < inst_38639);
var inst_38643 = inst_38642;
var state_38696__$1 = state_38696;
if(cljs.core.truth_(inst_38643)){
var statearr_38738_38774 = state_38696__$1;
(statearr_38738_38774[(1)] = (10));

} else {
var statearr_38739_38775 = state_38696__$1;
(statearr_38739_38775[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto___38747,mults,ensure_mult,p))
;
return ((function (switch__7170__auto__,c__7226__auto___38747,mults,ensure_mult,p){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_38743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38743[(0)] = state_machine__7171__auto__);

(statearr_38743[(1)] = (1));

return statearr_38743;
});
var state_machine__7171__auto____1 = (function (state_38696){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_38696);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e38744){if((e38744 instanceof Object)){
var ex__7174__auto__ = e38744;
var statearr_38745_38776 = state_38696;
(statearr_38745_38776[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38696);

return cljs.core.constant$keyword$125;
} else {
throw e38744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__38777 = state_38696;
state_38696 = G__38777;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_38696){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_38696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___38747,mults,ensure_mult,p))
})();
var state__7228__auto__ = (function (){var statearr_38746 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_38746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___38747);

return statearr_38746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___38747,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__38858 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38858) : cljs.core.atom.call(null,G__38858));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7226__auto___38931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___38931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___38931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38897){
var state_val_38898 = (state_38897[(1)]);
if((state_val_38898 === (7))){
var state_38897__$1 = state_38897;
var statearr_38899_38932 = state_38897__$1;
(statearr_38899_38932[(2)] = null);

(statearr_38899_38932[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (1))){
var state_38897__$1 = state_38897;
var statearr_38900_38933 = state_38897__$1;
(statearr_38900_38933[(2)] = null);

(statearr_38900_38933[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (4))){
var inst_38861 = (state_38897[(7)]);
var inst_38863 = (inst_38861 < cnt);
var state_38897__$1 = state_38897;
if(cljs.core.truth_(inst_38863)){
var statearr_38901_38934 = state_38897__$1;
(statearr_38901_38934[(1)] = (6));

} else {
var statearr_38902_38935 = state_38897__$1;
(statearr_38902_38935[(1)] = (7));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (15))){
var inst_38893 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
var statearr_38903_38936 = state_38897__$1;
(statearr_38903_38936[(2)] = inst_38893);

(statearr_38903_38936[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (13))){
var inst_38886 = cljs.core.async.close_BANG_(out);
var state_38897__$1 = state_38897;
var statearr_38904_38937 = state_38897__$1;
(statearr_38904_38937[(2)] = inst_38886);

(statearr_38904_38937[(1)] = (15));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (6))){
var state_38897__$1 = state_38897;
var statearr_38905_38938 = state_38897__$1;
(statearr_38905_38938[(2)] = null);

(statearr_38905_38938[(1)] = (11));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (3))){
var inst_38895 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38897__$1,inst_38895);
} else {
if((state_val_38898 === (12))){
var inst_38883 = (state_38897[(8)]);
var inst_38883__$1 = (state_38897[(2)]);
var inst_38884 = cljs.core.some(cljs.core.nil_QMARK_,inst_38883__$1);
var state_38897__$1 = (function (){var statearr_38906 = state_38897;
(statearr_38906[(8)] = inst_38883__$1);

return statearr_38906;
})();
if(cljs.core.truth_(inst_38884)){
var statearr_38907_38939 = state_38897__$1;
(statearr_38907_38939[(1)] = (13));

} else {
var statearr_38908_38940 = state_38897__$1;
(statearr_38908_38940[(1)] = (14));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (2))){
var inst_38860 = (function (){var G__38909 = dctr;
var G__38910 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38909,G__38910) : cljs.core.reset_BANG_.call(null,G__38909,G__38910));
})();
var inst_38861 = (0);
var state_38897__$1 = (function (){var statearr_38911 = state_38897;
(statearr_38911[(7)] = inst_38861);

(statearr_38911[(9)] = inst_38860);

return statearr_38911;
})();
var statearr_38912_38941 = state_38897__$1;
(statearr_38912_38941[(2)] = null);

(statearr_38912_38941[(1)] = (4));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (11))){
var inst_38861 = (state_38897[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38897,(10),Object,null,(9));
var inst_38870 = (function (){var G__38913 = inst_38861;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__38913) : chs__$1.call(null,G__38913));
})();
var inst_38871 = (function (){var G__38914 = inst_38861;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38914) : done.call(null,G__38914));
})();
var inst_38872 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38870,inst_38871);
var state_38897__$1 = state_38897;
var statearr_38915_38942 = state_38897__$1;
(statearr_38915_38942[(2)] = inst_38872);


cljs.core.async.impl.ioc_helpers.process_exception(state_38897__$1);

return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (9))){
var inst_38861 = (state_38897[(7)]);
var inst_38874 = (state_38897[(2)]);
var inst_38875 = (inst_38861 + (1));
var inst_38861__$1 = inst_38875;
var state_38897__$1 = (function (){var statearr_38916 = state_38897;
(statearr_38916[(7)] = inst_38861__$1);

(statearr_38916[(10)] = inst_38874);

return statearr_38916;
})();
var statearr_38917_38943 = state_38897__$1;
(statearr_38917_38943[(2)] = null);

(statearr_38917_38943[(1)] = (4));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (5))){
var inst_38881 = (state_38897[(2)]);
var state_38897__$1 = (function (){var statearr_38918 = state_38897;
(statearr_38918[(11)] = inst_38881);

return statearr_38918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38897__$1,(12),dchan);
} else {
if((state_val_38898 === (14))){
var inst_38883 = (state_38897[(8)]);
var inst_38888 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38883);
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38897__$1,(16),out,inst_38888);
} else {
if((state_val_38898 === (16))){
var inst_38890 = (state_38897[(2)]);
var state_38897__$1 = (function (){var statearr_38919 = state_38897;
(statearr_38919[(12)] = inst_38890);

return statearr_38919;
})();
var statearr_38920_38944 = state_38897__$1;
(statearr_38920_38944[(2)] = null);

(statearr_38920_38944[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (10))){
var inst_38865 = (state_38897[(2)]);
var inst_38866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38897__$1 = (function (){var statearr_38921 = state_38897;
(statearr_38921[(13)] = inst_38865);

return statearr_38921;
})();
var statearr_38922_38945 = state_38897__$1;
(statearr_38922_38945[(2)] = inst_38866);


cljs.core.async.impl.ioc_helpers.process_exception(state_38897__$1);

return cljs.core.constant$keyword$125;
} else {
if((state_val_38898 === (8))){
var inst_38879 = (state_38897[(2)]);
var state_38897__$1 = state_38897;
var statearr_38923_38946 = state_38897__$1;
(statearr_38923_38946[(2)] = inst_38879);

(statearr_38923_38946[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__7226__auto___38931,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7170__auto__,c__7226__auto___38931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_38927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38927[(0)] = state_machine__7171__auto__);

(statearr_38927[(1)] = (1));

return statearr_38927;
});
var state_machine__7171__auto____1 = (function (state_38897){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_38897);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e38928){if((e38928 instanceof Object)){
var ex__7174__auto__ = e38928;
var statearr_38929_38947 = state_38897;
(statearr_38929_38947[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38897);

return cljs.core.constant$keyword$125;
} else {
throw e38928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__38948 = state_38897;
state_38897 = G__38948;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_38897){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_38897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___38931,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7228__auto__ = (function (){var statearr_38930 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_38930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___38931);

return statearr_38930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___38931,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7226__auto___39058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___39058,out){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___39058,out){
return (function (state_39034){
var state_val_39035 = (state_39034[(1)]);
if((state_val_39035 === (7))){
var inst_39013 = (state_39034[(7)]);
var inst_39014 = (state_39034[(8)]);
var inst_39013__$1 = (state_39034[(2)]);
var inst_39014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39013__$1,(0),null);
var inst_39015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39013__$1,(1),null);
var inst_39016 = (inst_39014__$1 == null);
var state_39034__$1 = (function (){var statearr_39036 = state_39034;
(statearr_39036[(7)] = inst_39013__$1);

(statearr_39036[(8)] = inst_39014__$1);

(statearr_39036[(9)] = inst_39015);

return statearr_39036;
})();
if(cljs.core.truth_(inst_39016)){
var statearr_39037_39059 = state_39034__$1;
(statearr_39037_39059[(1)] = (8));

} else {
var statearr_39038_39060 = state_39034__$1;
(statearr_39038_39060[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (1))){
var inst_39005 = cljs.core.vec(chs);
var inst_39006 = inst_39005;
var state_39034__$1 = (function (){var statearr_39039 = state_39034;
(statearr_39039[(10)] = inst_39006);

return statearr_39039;
})();
var statearr_39040_39061 = state_39034__$1;
(statearr_39040_39061[(2)] = null);

(statearr_39040_39061[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (4))){
var inst_39006 = (state_39034[(10)]);
var state_39034__$1 = state_39034;
return cljs.core.async.ioc_alts_BANG_(state_39034__$1,(7),inst_39006);
} else {
if((state_val_39035 === (6))){
var inst_39030 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
var statearr_39041_39062 = state_39034__$1;
(statearr_39041_39062[(2)] = inst_39030);

(statearr_39041_39062[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (3))){
var inst_39032 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39034__$1,inst_39032);
} else {
if((state_val_39035 === (2))){
var inst_39006 = (state_39034[(10)]);
var inst_39008 = cljs.core.count(inst_39006);
var inst_39009 = (inst_39008 > (0));
var state_39034__$1 = state_39034;
if(cljs.core.truth_(inst_39009)){
var statearr_39043_39063 = state_39034__$1;
(statearr_39043_39063[(1)] = (4));

} else {
var statearr_39044_39064 = state_39034__$1;
(statearr_39044_39064[(1)] = (5));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (11))){
var inst_39006 = (state_39034[(10)]);
var inst_39023 = (state_39034[(2)]);
var tmp39042 = inst_39006;
var inst_39006__$1 = tmp39042;
var state_39034__$1 = (function (){var statearr_39045 = state_39034;
(statearr_39045[(10)] = inst_39006__$1);

(statearr_39045[(11)] = inst_39023);

return statearr_39045;
})();
var statearr_39046_39065 = state_39034__$1;
(statearr_39046_39065[(2)] = null);

(statearr_39046_39065[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (9))){
var inst_39014 = (state_39034[(8)]);
var state_39034__$1 = state_39034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39034__$1,(11),out,inst_39014);
} else {
if((state_val_39035 === (5))){
var inst_39028 = cljs.core.async.close_BANG_(out);
var state_39034__$1 = state_39034;
var statearr_39047_39066 = state_39034__$1;
(statearr_39047_39066[(2)] = inst_39028);

(statearr_39047_39066[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (10))){
var inst_39026 = (state_39034[(2)]);
var state_39034__$1 = state_39034;
var statearr_39048_39067 = state_39034__$1;
(statearr_39048_39067[(2)] = inst_39026);

(statearr_39048_39067[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39035 === (8))){
var inst_39013 = (state_39034[(7)]);
var inst_39014 = (state_39034[(8)]);
var inst_39015 = (state_39034[(9)]);
var inst_39006 = (state_39034[(10)]);
var inst_39018 = (function (){var c = inst_39015;
var v = inst_39014;
var vec__39011 = inst_39013;
var cs = inst_39006;
return ((function (c,v,vec__39011,cs,inst_39013,inst_39014,inst_39015,inst_39006,state_val_39035,c__7226__auto___39058,out){
return (function (p1__38949_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38949_SHARP_);
});
;})(c,v,vec__39011,cs,inst_39013,inst_39014,inst_39015,inst_39006,state_val_39035,c__7226__auto___39058,out))
})();
var inst_39019 = cljs.core.filterv(inst_39018,inst_39006);
var inst_39006__$1 = inst_39019;
var state_39034__$1 = (function (){var statearr_39049 = state_39034;
(statearr_39049[(10)] = inst_39006__$1);

return statearr_39049;
})();
var statearr_39050_39068 = state_39034__$1;
(statearr_39050_39068[(2)] = null);

(statearr_39050_39068[(1)] = (2));


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
}
}
}
}
});})(c__7226__auto___39058,out))
;
return ((function (switch__7170__auto__,c__7226__auto___39058,out){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39054 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39054[(0)] = state_machine__7171__auto__);

(statearr_39054[(1)] = (1));

return statearr_39054;
});
var state_machine__7171__auto____1 = (function (state_39034){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39034);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39055){if((e39055 instanceof Object)){
var ex__7174__auto__ = e39055;
var statearr_39056_39069 = state_39034;
(statearr_39056_39069[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39034);

return cljs.core.constant$keyword$125;
} else {
throw e39055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39070 = state_39034;
state_39034 = G__39070;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39034){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___39058,out))
})();
var state__7228__auto__ = (function (){var statearr_39057 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___39058);

return statearr_39057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___39058,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7226__auto___39166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___39166,out){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___39166,out){
return (function (state_39143){
var state_val_39144 = (state_39143[(1)]);
if((state_val_39144 === (7))){
var inst_39125 = (state_39143[(7)]);
var inst_39125__$1 = (state_39143[(2)]);
var inst_39126 = (inst_39125__$1 == null);
var inst_39127 = cljs.core.not(inst_39126);
var state_39143__$1 = (function (){var statearr_39145 = state_39143;
(statearr_39145[(7)] = inst_39125__$1);

return statearr_39145;
})();
if(inst_39127){
var statearr_39146_39167 = state_39143__$1;
(statearr_39146_39167[(1)] = (8));

} else {
var statearr_39147_39168 = state_39143__$1;
(statearr_39147_39168[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (1))){
var inst_39120 = (0);
var state_39143__$1 = (function (){var statearr_39148 = state_39143;
(statearr_39148[(8)] = inst_39120);

return statearr_39148;
})();
var statearr_39149_39169 = state_39143__$1;
(statearr_39149_39169[(2)] = null);

(statearr_39149_39169[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (4))){
var state_39143__$1 = state_39143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39143__$1,(7),ch);
} else {
if((state_val_39144 === (6))){
var inst_39138 = (state_39143[(2)]);
var state_39143__$1 = state_39143;
var statearr_39150_39170 = state_39143__$1;
(statearr_39150_39170[(2)] = inst_39138);

(statearr_39150_39170[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (3))){
var inst_39140 = (state_39143[(2)]);
var inst_39141 = cljs.core.async.close_BANG_(out);
var state_39143__$1 = (function (){var statearr_39151 = state_39143;
(statearr_39151[(9)] = inst_39140);

return statearr_39151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39143__$1,inst_39141);
} else {
if((state_val_39144 === (2))){
var inst_39120 = (state_39143[(8)]);
var inst_39122 = (inst_39120 < n);
var state_39143__$1 = state_39143;
if(cljs.core.truth_(inst_39122)){
var statearr_39152_39171 = state_39143__$1;
(statearr_39152_39171[(1)] = (4));

} else {
var statearr_39153_39172 = state_39143__$1;
(statearr_39153_39172[(1)] = (5));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (11))){
var inst_39120 = (state_39143[(8)]);
var inst_39130 = (state_39143[(2)]);
var inst_39131 = (inst_39120 + (1));
var inst_39120__$1 = inst_39131;
var state_39143__$1 = (function (){var statearr_39154 = state_39143;
(statearr_39154[(10)] = inst_39130);

(statearr_39154[(8)] = inst_39120__$1);

return statearr_39154;
})();
var statearr_39155_39173 = state_39143__$1;
(statearr_39155_39173[(2)] = null);

(statearr_39155_39173[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (9))){
var state_39143__$1 = state_39143;
var statearr_39156_39174 = state_39143__$1;
(statearr_39156_39174[(2)] = null);

(statearr_39156_39174[(1)] = (10));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (5))){
var state_39143__$1 = state_39143;
var statearr_39157_39175 = state_39143__$1;
(statearr_39157_39175[(2)] = null);

(statearr_39157_39175[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (10))){
var inst_39135 = (state_39143[(2)]);
var state_39143__$1 = state_39143;
var statearr_39158_39176 = state_39143__$1;
(statearr_39158_39176[(2)] = inst_39135);

(statearr_39158_39176[(1)] = (6));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39144 === (8))){
var inst_39125 = (state_39143[(7)]);
var state_39143__$1 = state_39143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39143__$1,(11),out,inst_39125);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto___39166,out))
;
return ((function (switch__7170__auto__,c__7226__auto___39166,out){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39162[(0)] = state_machine__7171__auto__);

(statearr_39162[(1)] = (1));

return statearr_39162;
});
var state_machine__7171__auto____1 = (function (state_39143){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39143);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39163){if((e39163 instanceof Object)){
var ex__7174__auto__ = e39163;
var statearr_39164_39177 = state_39143;
(statearr_39164_39177[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39143);

return cljs.core.constant$keyword$125;
} else {
throw e39163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39178 = state_39143;
state_39143 = G__39178;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39143){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___39166,out))
})();
var state__7228__auto__ = (function (){var statearr_39165 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___39166);

return statearr_39165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___39166,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t39191 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39191 = (function (ch,f,map_LT_,meta39192){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39192 = meta39192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t39194 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39194 = (function (fn1,_,meta39192,map_LT_,f,ch,meta39195){
this.fn1 = fn1;
this._ = _;
this.meta39192 = meta39192;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39195 = meta39195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39194.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t39194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39179_SHARP_){
var G__39197 = (((p1__39179_SHARP_ == null))?null:(function (){var G__39198 = p1__39179_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39198) : self__.f.call(null,G__39198));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39197) : f1.call(null,G__39197));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t39194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39196){
var self__ = this;
var _39196__$1 = this;
return self__.meta39195;
});})(___$1))
;

cljs.core.async.t39194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39196,meta39195__$1){
var self__ = this;
var _39196__$1 = this;
return (new cljs.core.async.t39194(self__.fn1,self__._,self__.meta39192,self__.map_LT_,self__.f,self__.ch,meta39195__$1));
});})(___$1))
;

cljs.core.async.t39194.cljs$lang$type = true;

cljs.core.async.t39194.cljs$lang$ctorStr = "cljs.core.async/t39194";

cljs.core.async.t39194.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t39194");
});})(___$1))
;

cljs.core.async.__GT_t39194 = ((function (___$1){
return (function __GT_t39194(fn1__$1,___$2,meta39192__$1,map_LT___$1,f__$1,ch__$1,meta39195){
return (new cljs.core.async.t39194(fn1__$1,___$2,meta39192__$1,map_LT___$1,f__$1,ch__$1,meta39195));
});})(___$1))
;

}

return (new cljs.core.async.t39194(fn1,___$1,self__.meta39192,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,46,cljs.core.constant$keyword$110,737,cljs.core.constant$keyword$111,10,cljs.core.constant$keyword$112,731,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3764__auto__ = ret;
if(cljs.core.truth_(and__3764__auto__)){
return !(((function (){var G__39199 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39199) : cljs.core.deref.call(null,G__39199));
})() == null));
} else {
return and__3764__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39200 = (function (){var G__39201 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39201) : cljs.core.deref.call(null,G__39201));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39200) : self__.f.call(null,G__39200));
})());
} else {
return ret;
}
});

cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t39191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t39191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39193){
var self__ = this;
var _39193__$1 = this;
return self__.meta39192;
});

cljs.core.async.t39191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39193,meta39192__$1){
var self__ = this;
var _39193__$1 = this;
return (new cljs.core.async.t39191(self__.ch,self__.f,self__.map_LT_,meta39192__$1));
});

cljs.core.async.t39191.cljs$lang$type = true;

cljs.core.async.t39191.cljs$lang$ctorStr = "cljs.core.async/t39191";

cljs.core.async.t39191.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t39191");
});

cljs.core.async.__GT_t39191 = (function __GT_t39191(ch__$1,f__$1,map_LT___$1,meta39192){
return (new cljs.core.async.t39191(ch__$1,f__$1,map_LT___$1,meta39192));
});

}

return (new cljs.core.async.t39191(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,46,cljs.core.constant$keyword$110,743,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,722,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t39206 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39206 = (function (ch,f,map_GT_,meta39207){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta39207 = meta39207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__39209 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39209) : self__.f.call(null,G__39209));
})(),fn1);
});

cljs.core.async.t39206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t39206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t39206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39208){
var self__ = this;
var _39208__$1 = this;
return self__.meta39207;
});

cljs.core.async.t39206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39208,meta39207__$1){
var self__ = this;
var _39208__$1 = this;
return (new cljs.core.async.t39206(self__.ch,self__.f,self__.map_GT_,meta39207__$1));
});

cljs.core.async.t39206.cljs$lang$type = true;

cljs.core.async.t39206.cljs$lang$ctorStr = "cljs.core.async/t39206";

cljs.core.async.t39206.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t39206");
});

cljs.core.async.__GT_t39206 = (function __GT_t39206(ch__$1,f__$1,map_GT___$1,meta39207){
return (new cljs.core.async.t39206(ch__$1,f__$1,map_GT___$1,meta39207));
});

}

return (new cljs.core.async.t39206(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,34,cljs.core.constant$keyword$110,757,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,748,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t39214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39214 = (function (ch,p,filter_GT_,meta39215){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta39215 = meta39215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__39217 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__39217) : self__.p.call(null,G__39217));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t39214.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t39214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39216){
var self__ = this;
var _39216__$1 = this;
return self__.meta39215;
});

cljs.core.async.t39214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39216,meta39215__$1){
var self__ = this;
var _39216__$1 = this;
return (new cljs.core.async.t39214(self__.ch,self__.p,self__.filter_GT_,meta39215__$1));
});

cljs.core.async.t39214.cljs$lang$type = true;

cljs.core.async.t39214.cljs$lang$ctorStr = "cljs.core.async/t39214";

cljs.core.async.t39214.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t39214");
});

cljs.core.async.__GT_t39214 = (function __GT_t39214(ch__$1,p__$1,filter_GT___$1,meta39215){
return (new cljs.core.async.t39214(ch__$1,p__$1,filter_GT___$1,meta39215));
});

}

return (new cljs.core.async.t39214(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,48,cljs.core.constant$keyword$110,774,cljs.core.constant$keyword$111,3,cljs.core.constant$keyword$112,762,cljs.core.constant$keyword$113,"/Users/rchaves/Dropbox/Apresentac\u0327o\u0303es/single-state-atom-apps/om/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7226__auto___39305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___39305,out){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___39305,out){
return (function (state_39283){
var state_val_39284 = (state_39283[(1)]);
if((state_val_39284 === (7))){
var inst_39279 = (state_39283[(2)]);
var state_39283__$1 = state_39283;
var statearr_39285_39306 = state_39283__$1;
(statearr_39285_39306[(2)] = inst_39279);

(statearr_39285_39306[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (1))){
var state_39283__$1 = state_39283;
var statearr_39286_39307 = state_39283__$1;
(statearr_39286_39307[(2)] = null);

(statearr_39286_39307[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (4))){
var inst_39265 = (state_39283[(7)]);
var inst_39265__$1 = (state_39283[(2)]);
var inst_39266 = (inst_39265__$1 == null);
var state_39283__$1 = (function (){var statearr_39287 = state_39283;
(statearr_39287[(7)] = inst_39265__$1);

return statearr_39287;
})();
if(cljs.core.truth_(inst_39266)){
var statearr_39288_39308 = state_39283__$1;
(statearr_39288_39308[(1)] = (5));

} else {
var statearr_39289_39309 = state_39283__$1;
(statearr_39289_39309[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (6))){
var inst_39265 = (state_39283[(7)]);
var inst_39270 = (function (){var G__39290 = inst_39265;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__39290) : p.call(null,G__39290));
})();
var state_39283__$1 = state_39283;
if(cljs.core.truth_(inst_39270)){
var statearr_39291_39310 = state_39283__$1;
(statearr_39291_39310[(1)] = (8));

} else {
var statearr_39292_39311 = state_39283__$1;
(statearr_39292_39311[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (3))){
var inst_39281 = (state_39283[(2)]);
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39283__$1,inst_39281);
} else {
if((state_val_39284 === (2))){
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39283__$1,(4),ch);
} else {
if((state_val_39284 === (11))){
var inst_39273 = (state_39283[(2)]);
var state_39283__$1 = state_39283;
var statearr_39293_39312 = state_39283__$1;
(statearr_39293_39312[(2)] = inst_39273);

(statearr_39293_39312[(1)] = (10));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (9))){
var state_39283__$1 = state_39283;
var statearr_39294_39313 = state_39283__$1;
(statearr_39294_39313[(2)] = null);

(statearr_39294_39313[(1)] = (10));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (5))){
var inst_39268 = cljs.core.async.close_BANG_(out);
var state_39283__$1 = state_39283;
var statearr_39295_39314 = state_39283__$1;
(statearr_39295_39314[(2)] = inst_39268);

(statearr_39295_39314[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (10))){
var inst_39276 = (state_39283[(2)]);
var state_39283__$1 = (function (){var statearr_39296 = state_39283;
(statearr_39296[(8)] = inst_39276);

return statearr_39296;
})();
var statearr_39297_39315 = state_39283__$1;
(statearr_39297_39315[(2)] = null);

(statearr_39297_39315[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39284 === (8))){
var inst_39265 = (state_39283[(7)]);
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39283__$1,(11),out,inst_39265);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto___39305,out))
;
return ((function (switch__7170__auto__,c__7226__auto___39305,out){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39301 = [null,null,null,null,null,null,null,null,null];
(statearr_39301[(0)] = state_machine__7171__auto__);

(statearr_39301[(1)] = (1));

return statearr_39301;
});
var state_machine__7171__auto____1 = (function (state_39283){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39283);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39302){if((e39302 instanceof Object)){
var ex__7174__auto__ = e39302;
var statearr_39303_39316 = state_39283;
(statearr_39303_39316[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39283);

return cljs.core.constant$keyword$125;
} else {
throw e39302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39317 = state_39283;
state_39283 = G__39317;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39283){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___39305,out))
})();
var state__7228__auto__ = (function (){var statearr_39304 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___39305);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___39305,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7226__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto__){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto__){
return (function (state_39487){
var state_val_39488 = (state_39487[(1)]);
if((state_val_39488 === (7))){
var inst_39483 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39489_39531 = state_39487__$1;
(statearr_39489_39531[(2)] = inst_39483);

(statearr_39489_39531[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (20))){
var inst_39453 = (state_39487[(7)]);
var inst_39464 = (state_39487[(2)]);
var inst_39465 = cljs.core.next(inst_39453);
var inst_39439 = inst_39465;
var inst_39440 = null;
var inst_39441 = (0);
var inst_39442 = (0);
var state_39487__$1 = (function (){var statearr_39490 = state_39487;
(statearr_39490[(8)] = inst_39442);

(statearr_39490[(9)] = inst_39439);

(statearr_39490[(10)] = inst_39440);

(statearr_39490[(11)] = inst_39441);

(statearr_39490[(12)] = inst_39464);

return statearr_39490;
})();
var statearr_39491_39532 = state_39487__$1;
(statearr_39491_39532[(2)] = null);

(statearr_39491_39532[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (1))){
var state_39487__$1 = state_39487;
var statearr_39492_39533 = state_39487__$1;
(statearr_39492_39533[(2)] = null);

(statearr_39492_39533[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (4))){
var inst_39428 = (state_39487[(13)]);
var inst_39428__$1 = (state_39487[(2)]);
var inst_39429 = (inst_39428__$1 == null);
var state_39487__$1 = (function (){var statearr_39493 = state_39487;
(statearr_39493[(13)] = inst_39428__$1);

return statearr_39493;
})();
if(cljs.core.truth_(inst_39429)){
var statearr_39494_39534 = state_39487__$1;
(statearr_39494_39534[(1)] = (5));

} else {
var statearr_39495_39535 = state_39487__$1;
(statearr_39495_39535[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (15))){
var state_39487__$1 = state_39487;
var statearr_39499_39536 = state_39487__$1;
(statearr_39499_39536[(2)] = null);

(statearr_39499_39536[(1)] = (16));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (21))){
var state_39487__$1 = state_39487;
var statearr_39500_39537 = state_39487__$1;
(statearr_39500_39537[(2)] = null);

(statearr_39500_39537[(1)] = (23));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (13))){
var inst_39442 = (state_39487[(8)]);
var inst_39439 = (state_39487[(9)]);
var inst_39440 = (state_39487[(10)]);
var inst_39441 = (state_39487[(11)]);
var inst_39449 = (state_39487[(2)]);
var inst_39450 = (inst_39442 + (1));
var tmp39496 = inst_39439;
var tmp39497 = inst_39440;
var tmp39498 = inst_39441;
var inst_39439__$1 = tmp39496;
var inst_39440__$1 = tmp39497;
var inst_39441__$1 = tmp39498;
var inst_39442__$1 = inst_39450;
var state_39487__$1 = (function (){var statearr_39501 = state_39487;
(statearr_39501[(8)] = inst_39442__$1);

(statearr_39501[(9)] = inst_39439__$1);

(statearr_39501[(14)] = inst_39449);

(statearr_39501[(10)] = inst_39440__$1);

(statearr_39501[(11)] = inst_39441__$1);

return statearr_39501;
})();
var statearr_39502_39538 = state_39487__$1;
(statearr_39502_39538[(2)] = null);

(statearr_39502_39538[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (22))){
var state_39487__$1 = state_39487;
var statearr_39503_39539 = state_39487__$1;
(statearr_39503_39539[(2)] = null);

(statearr_39503_39539[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (6))){
var inst_39428 = (state_39487[(13)]);
var inst_39437 = (function (){var G__39504 = inst_39428;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__39504) : f.call(null,G__39504));
})();
var inst_39438 = cljs.core.seq(inst_39437);
var inst_39439 = inst_39438;
var inst_39440 = null;
var inst_39441 = (0);
var inst_39442 = (0);
var state_39487__$1 = (function (){var statearr_39505 = state_39487;
(statearr_39505[(8)] = inst_39442);

(statearr_39505[(9)] = inst_39439);

(statearr_39505[(10)] = inst_39440);

(statearr_39505[(11)] = inst_39441);

return statearr_39505;
})();
var statearr_39506_39540 = state_39487__$1;
(statearr_39506_39540[(2)] = null);

(statearr_39506_39540[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (17))){
var inst_39453 = (state_39487[(7)]);
var inst_39457 = cljs.core.chunk_first(inst_39453);
var inst_39458 = cljs.core.chunk_rest(inst_39453);
var inst_39459 = cljs.core.count(inst_39457);
var inst_39439 = inst_39458;
var inst_39440 = inst_39457;
var inst_39441 = inst_39459;
var inst_39442 = (0);
var state_39487__$1 = (function (){var statearr_39507 = state_39487;
(statearr_39507[(8)] = inst_39442);

(statearr_39507[(9)] = inst_39439);

(statearr_39507[(10)] = inst_39440);

(statearr_39507[(11)] = inst_39441);

return statearr_39507;
})();
var statearr_39508_39541 = state_39487__$1;
(statearr_39508_39541[(2)] = null);

(statearr_39508_39541[(1)] = (8));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (3))){
var inst_39485 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39487__$1,inst_39485);
} else {
if((state_val_39488 === (12))){
var inst_39473 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39509_39542 = state_39487__$1;
(statearr_39509_39542[(2)] = inst_39473);

(statearr_39509_39542[(1)] = (9));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (2))){
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39487__$1,(4),in$);
} else {
if((state_val_39488 === (23))){
var inst_39481 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39510_39543 = state_39487__$1;
(statearr_39510_39543[(2)] = inst_39481);

(statearr_39510_39543[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (19))){
var inst_39468 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39511_39544 = state_39487__$1;
(statearr_39511_39544[(2)] = inst_39468);

(statearr_39511_39544[(1)] = (16));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (11))){
var inst_39439 = (state_39487[(9)]);
var inst_39453 = (state_39487[(7)]);
var inst_39453__$1 = cljs.core.seq(inst_39439);
var state_39487__$1 = (function (){var statearr_39512 = state_39487;
(statearr_39512[(7)] = inst_39453__$1);

return statearr_39512;
})();
if(inst_39453__$1){
var statearr_39513_39545 = state_39487__$1;
(statearr_39513_39545[(1)] = (14));

} else {
var statearr_39514_39546 = state_39487__$1;
(statearr_39514_39546[(1)] = (15));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (9))){
var inst_39475 = (state_39487[(2)]);
var inst_39476 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39487__$1 = (function (){var statearr_39515 = state_39487;
(statearr_39515[(15)] = inst_39475);

return statearr_39515;
})();
if(cljs.core.truth_(inst_39476)){
var statearr_39516_39547 = state_39487__$1;
(statearr_39516_39547[(1)] = (21));

} else {
var statearr_39517_39548 = state_39487__$1;
(statearr_39517_39548[(1)] = (22));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (5))){
var inst_39431 = cljs.core.async.close_BANG_(out);
var state_39487__$1 = state_39487;
var statearr_39518_39549 = state_39487__$1;
(statearr_39518_39549[(2)] = inst_39431);

(statearr_39518_39549[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (14))){
var inst_39453 = (state_39487[(7)]);
var inst_39455 = cljs.core.chunked_seq_QMARK_(inst_39453);
var state_39487__$1 = state_39487;
if(inst_39455){
var statearr_39519_39550 = state_39487__$1;
(statearr_39519_39550[(1)] = (17));

} else {
var statearr_39520_39551 = state_39487__$1;
(statearr_39520_39551[(1)] = (18));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (16))){
var inst_39471 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39521_39552 = state_39487__$1;
(statearr_39521_39552[(2)] = inst_39471);

(statearr_39521_39552[(1)] = (12));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39488 === (10))){
var inst_39442 = (state_39487[(8)]);
var inst_39440 = (state_39487[(10)]);
var inst_39447 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39440,inst_39442);
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39487__$1,(13),out,inst_39447);
} else {
if((state_val_39488 === (18))){
var inst_39453 = (state_39487[(7)]);
var inst_39462 = cljs.core.first(inst_39453);
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39487__$1,(20),out,inst_39462);
} else {
if((state_val_39488 === (8))){
var inst_39442 = (state_39487[(8)]);
var inst_39441 = (state_39487[(11)]);
var inst_39444 = (inst_39442 < inst_39441);
var inst_39445 = inst_39444;
var state_39487__$1 = state_39487;
if(cljs.core.truth_(inst_39445)){
var statearr_39522_39553 = state_39487__$1;
(statearr_39522_39553[(1)] = (10));

} else {
var statearr_39523_39554 = state_39487__$1;
(statearr_39523_39554[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7226__auto__))
;
return ((function (switch__7170__auto__,c__7226__auto__){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39527[(0)] = state_machine__7171__auto__);

(statearr_39527[(1)] = (1));

return statearr_39527;
});
var state_machine__7171__auto____1 = (function (state_39487){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39487);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39528){if((e39528 instanceof Object)){
var ex__7174__auto__ = e39528;
var statearr_39529_39555 = state_39487;
(statearr_39529_39555[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39487);

return cljs.core.constant$keyword$125;
} else {
throw e39528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39556 = state_39487;
state_39487 = G__39556;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39487){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto__))
})();
var state__7228__auto__ = (function (){var statearr_39530 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto__);

return statearr_39530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto__))
);

return c__7226__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7226__auto___39661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___39661,out){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___39661,out){
return (function (state_39636){
var state_val_39637 = (state_39636[(1)]);
if((state_val_39637 === (7))){
var inst_39631 = (state_39636[(2)]);
var state_39636__$1 = state_39636;
var statearr_39638_39662 = state_39636__$1;
(statearr_39638_39662[(2)] = inst_39631);

(statearr_39638_39662[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (1))){
var inst_39613 = null;
var state_39636__$1 = (function (){var statearr_39639 = state_39636;
(statearr_39639[(7)] = inst_39613);

return statearr_39639;
})();
var statearr_39640_39663 = state_39636__$1;
(statearr_39640_39663[(2)] = null);

(statearr_39640_39663[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (4))){
var inst_39616 = (state_39636[(8)]);
var inst_39616__$1 = (state_39636[(2)]);
var inst_39617 = (inst_39616__$1 == null);
var inst_39618 = cljs.core.not(inst_39617);
var state_39636__$1 = (function (){var statearr_39641 = state_39636;
(statearr_39641[(8)] = inst_39616__$1);

return statearr_39641;
})();
if(inst_39618){
var statearr_39642_39664 = state_39636__$1;
(statearr_39642_39664[(1)] = (5));

} else {
var statearr_39643_39665 = state_39636__$1;
(statearr_39643_39665[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (6))){
var state_39636__$1 = state_39636;
var statearr_39644_39666 = state_39636__$1;
(statearr_39644_39666[(2)] = null);

(statearr_39644_39666[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (3))){
var inst_39633 = (state_39636[(2)]);
var inst_39634 = cljs.core.async.close_BANG_(out);
var state_39636__$1 = (function (){var statearr_39645 = state_39636;
(statearr_39645[(9)] = inst_39633);

return statearr_39645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39636__$1,inst_39634);
} else {
if((state_val_39637 === (2))){
var state_39636__$1 = state_39636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39636__$1,(4),ch);
} else {
if((state_val_39637 === (11))){
var inst_39616 = (state_39636[(8)]);
var inst_39625 = (state_39636[(2)]);
var inst_39613 = inst_39616;
var state_39636__$1 = (function (){var statearr_39646 = state_39636;
(statearr_39646[(10)] = inst_39625);

(statearr_39646[(7)] = inst_39613);

return statearr_39646;
})();
var statearr_39647_39667 = state_39636__$1;
(statearr_39647_39667[(2)] = null);

(statearr_39647_39667[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (9))){
var inst_39616 = (state_39636[(8)]);
var state_39636__$1 = state_39636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39636__$1,(11),out,inst_39616);
} else {
if((state_val_39637 === (5))){
var inst_39616 = (state_39636[(8)]);
var inst_39613 = (state_39636[(7)]);
var inst_39620 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39616,inst_39613);
var state_39636__$1 = state_39636;
if(inst_39620){
var statearr_39649_39668 = state_39636__$1;
(statearr_39649_39668[(1)] = (8));

} else {
var statearr_39650_39669 = state_39636__$1;
(statearr_39650_39669[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (10))){
var inst_39628 = (state_39636[(2)]);
var state_39636__$1 = state_39636;
var statearr_39651_39670 = state_39636__$1;
(statearr_39651_39670[(2)] = inst_39628);

(statearr_39651_39670[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39637 === (8))){
var inst_39613 = (state_39636[(7)]);
var tmp39648 = inst_39613;
var inst_39613__$1 = tmp39648;
var state_39636__$1 = (function (){var statearr_39652 = state_39636;
(statearr_39652[(7)] = inst_39613__$1);

return statearr_39652;
})();
var statearr_39653_39671 = state_39636__$1;
(statearr_39653_39671[(2)] = null);

(statearr_39653_39671[(1)] = (2));


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
}
}
}
}
});})(c__7226__auto___39661,out))
;
return ((function (switch__7170__auto__,c__7226__auto___39661,out){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39657[(0)] = state_machine__7171__auto__);

(statearr_39657[(1)] = (1));

return statearr_39657;
});
var state_machine__7171__auto____1 = (function (state_39636){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39636);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39658){if((e39658 instanceof Object)){
var ex__7174__auto__ = e39658;
var statearr_39659_39672 = state_39636;
(statearr_39659_39672[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39636);

return cljs.core.constant$keyword$125;
} else {
throw e39658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39673 = state_39636;
state_39636 = G__39673;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39636){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___39661,out))
})();
var state__7228__auto__ = (function (){var statearr_39660 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___39661);

return statearr_39660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___39661,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7226__auto___39811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___39811,out){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___39811,out){
return (function (state_39781){
var state_val_39782 = (state_39781[(1)]);
if((state_val_39782 === (7))){
var inst_39777 = (state_39781[(2)]);
var state_39781__$1 = state_39781;
var statearr_39783_39812 = state_39781__$1;
(statearr_39783_39812[(2)] = inst_39777);

(statearr_39783_39812[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (1))){
var inst_39744 = (new Array(n));
var inst_39745 = inst_39744;
var inst_39746 = (0);
var state_39781__$1 = (function (){var statearr_39784 = state_39781;
(statearr_39784[(7)] = inst_39745);

(statearr_39784[(8)] = inst_39746);

return statearr_39784;
})();
var statearr_39785_39813 = state_39781__$1;
(statearr_39785_39813[(2)] = null);

(statearr_39785_39813[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (4))){
var inst_39749 = (state_39781[(9)]);
var inst_39749__$1 = (state_39781[(2)]);
var inst_39750 = (inst_39749__$1 == null);
var inst_39751 = cljs.core.not(inst_39750);
var state_39781__$1 = (function (){var statearr_39786 = state_39781;
(statearr_39786[(9)] = inst_39749__$1);

return statearr_39786;
})();
if(inst_39751){
var statearr_39787_39814 = state_39781__$1;
(statearr_39787_39814[(1)] = (5));

} else {
var statearr_39788_39815 = state_39781__$1;
(statearr_39788_39815[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (15))){
var inst_39771 = (state_39781[(2)]);
var state_39781__$1 = state_39781;
var statearr_39789_39816 = state_39781__$1;
(statearr_39789_39816[(2)] = inst_39771);

(statearr_39789_39816[(1)] = (14));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (13))){
var state_39781__$1 = state_39781;
var statearr_39790_39817 = state_39781__$1;
(statearr_39790_39817[(2)] = null);

(statearr_39790_39817[(1)] = (14));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (6))){
var inst_39746 = (state_39781[(8)]);
var inst_39767 = (inst_39746 > (0));
var state_39781__$1 = state_39781;
if(cljs.core.truth_(inst_39767)){
var statearr_39791_39818 = state_39781__$1;
(statearr_39791_39818[(1)] = (12));

} else {
var statearr_39792_39819 = state_39781__$1;
(statearr_39792_39819[(1)] = (13));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (3))){
var inst_39779 = (state_39781[(2)]);
var state_39781__$1 = state_39781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39781__$1,inst_39779);
} else {
if((state_val_39782 === (12))){
var inst_39745 = (state_39781[(7)]);
var inst_39769 = cljs.core.vec(inst_39745);
var state_39781__$1 = state_39781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39781__$1,(15),out,inst_39769);
} else {
if((state_val_39782 === (2))){
var state_39781__$1 = state_39781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39781__$1,(4),ch);
} else {
if((state_val_39782 === (11))){
var inst_39761 = (state_39781[(2)]);
var inst_39762 = (new Array(n));
var inst_39745 = inst_39762;
var inst_39746 = (0);
var state_39781__$1 = (function (){var statearr_39793 = state_39781;
(statearr_39793[(10)] = inst_39761);

(statearr_39793[(7)] = inst_39745);

(statearr_39793[(8)] = inst_39746);

return statearr_39793;
})();
var statearr_39794_39820 = state_39781__$1;
(statearr_39794_39820[(2)] = null);

(statearr_39794_39820[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (9))){
var inst_39745 = (state_39781[(7)]);
var inst_39759 = cljs.core.vec(inst_39745);
var state_39781__$1 = state_39781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39781__$1,(11),out,inst_39759);
} else {
if((state_val_39782 === (5))){
var inst_39745 = (state_39781[(7)]);
var inst_39754 = (state_39781[(11)]);
var inst_39749 = (state_39781[(9)]);
var inst_39746 = (state_39781[(8)]);
var inst_39753 = (inst_39745[inst_39746] = inst_39749);
var inst_39754__$1 = (inst_39746 + (1));
var inst_39755 = (inst_39754__$1 < n);
var state_39781__$1 = (function (){var statearr_39795 = state_39781;
(statearr_39795[(11)] = inst_39754__$1);

(statearr_39795[(12)] = inst_39753);

return statearr_39795;
})();
if(cljs.core.truth_(inst_39755)){
var statearr_39796_39821 = state_39781__$1;
(statearr_39796_39821[(1)] = (8));

} else {
var statearr_39797_39822 = state_39781__$1;
(statearr_39797_39822[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (14))){
var inst_39774 = (state_39781[(2)]);
var inst_39775 = cljs.core.async.close_BANG_(out);
var state_39781__$1 = (function (){var statearr_39799 = state_39781;
(statearr_39799[(13)] = inst_39774);

return statearr_39799;
})();
var statearr_39800_39823 = state_39781__$1;
(statearr_39800_39823[(2)] = inst_39775);

(statearr_39800_39823[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (10))){
var inst_39765 = (state_39781[(2)]);
var state_39781__$1 = state_39781;
var statearr_39801_39824 = state_39781__$1;
(statearr_39801_39824[(2)] = inst_39765);

(statearr_39801_39824[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39782 === (8))){
var inst_39745 = (state_39781[(7)]);
var inst_39754 = (state_39781[(11)]);
var tmp39798 = inst_39745;
var inst_39745__$1 = tmp39798;
var inst_39746 = inst_39754;
var state_39781__$1 = (function (){var statearr_39802 = state_39781;
(statearr_39802[(7)] = inst_39745__$1);

(statearr_39802[(8)] = inst_39746);

return statearr_39802;
})();
var statearr_39803_39825 = state_39781__$1;
(statearr_39803_39825[(2)] = null);

(statearr_39803_39825[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__7226__auto___39811,out))
;
return ((function (switch__7170__auto__,c__7226__auto___39811,out){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39807[(0)] = state_machine__7171__auto__);

(statearr_39807[(1)] = (1));

return statearr_39807;
});
var state_machine__7171__auto____1 = (function (state_39781){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39781);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39808){if((e39808 instanceof Object)){
var ex__7174__auto__ = e39808;
var statearr_39809_39826 = state_39781;
(statearr_39809_39826[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39781);

return cljs.core.constant$keyword$125;
} else {
throw e39808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39827 = state_39781;
state_39781 = G__39827;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39781){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___39811,out))
})();
var state__7228__auto__ = (function (){var statearr_39810 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___39811);

return statearr_39810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___39811,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7226__auto___39975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7226__auto___39975,out){
return (function (){
var f__7227__auto__ = (function (){var switch__7170__auto__ = ((function (c__7226__auto___39975,out){
return (function (state_39944){
var state_val_39945 = (state_39944[(1)]);
if((state_val_39945 === (7))){
var inst_39940 = (state_39944[(2)]);
var state_39944__$1 = state_39944;
var statearr_39946_39976 = state_39944__$1;
(statearr_39946_39976[(2)] = inst_39940);

(statearr_39946_39976[(1)] = (3));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (1))){
var inst_39903 = [];
var inst_39904 = inst_39903;
var inst_39905 = cljs.core.constant$keyword$140;
var state_39944__$1 = (function (){var statearr_39947 = state_39944;
(statearr_39947[(7)] = inst_39905);

(statearr_39947[(8)] = inst_39904);

return statearr_39947;
})();
var statearr_39948_39977 = state_39944__$1;
(statearr_39948_39977[(2)] = null);

(statearr_39948_39977[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (4))){
var inst_39908 = (state_39944[(9)]);
var inst_39908__$1 = (state_39944[(2)]);
var inst_39909 = (inst_39908__$1 == null);
var inst_39910 = cljs.core.not(inst_39909);
var state_39944__$1 = (function (){var statearr_39949 = state_39944;
(statearr_39949[(9)] = inst_39908__$1);

return statearr_39949;
})();
if(inst_39910){
var statearr_39950_39978 = state_39944__$1;
(statearr_39950_39978[(1)] = (5));

} else {
var statearr_39951_39979 = state_39944__$1;
(statearr_39951_39979[(1)] = (6));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (15))){
var inst_39934 = (state_39944[(2)]);
var state_39944__$1 = state_39944;
var statearr_39952_39980 = state_39944__$1;
(statearr_39952_39980[(2)] = inst_39934);

(statearr_39952_39980[(1)] = (14));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (13))){
var state_39944__$1 = state_39944;
var statearr_39953_39981 = state_39944__$1;
(statearr_39953_39981[(2)] = null);

(statearr_39953_39981[(1)] = (14));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (6))){
var inst_39904 = (state_39944[(8)]);
var inst_39929 = inst_39904.length;
var inst_39930 = (inst_39929 > (0));
var state_39944__$1 = state_39944;
if(cljs.core.truth_(inst_39930)){
var statearr_39954_39982 = state_39944__$1;
(statearr_39954_39982[(1)] = (12));

} else {
var statearr_39955_39983 = state_39944__$1;
(statearr_39955_39983[(1)] = (13));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (3))){
var inst_39942 = (state_39944[(2)]);
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39944__$1,inst_39942);
} else {
if((state_val_39945 === (12))){
var inst_39904 = (state_39944[(8)]);
var inst_39932 = cljs.core.vec(inst_39904);
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39944__$1,(15),out,inst_39932);
} else {
if((state_val_39945 === (2))){
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39944__$1,(4),ch);
} else {
if((state_val_39945 === (11))){
var inst_39912 = (state_39944[(10)]);
var inst_39908 = (state_39944[(9)]);
var inst_39922 = (state_39944[(2)]);
var inst_39923 = [];
var inst_39924 = inst_39923.push(inst_39908);
var inst_39904 = inst_39923;
var inst_39905 = inst_39912;
var state_39944__$1 = (function (){var statearr_39956 = state_39944;
(statearr_39956[(7)] = inst_39905);

(statearr_39956[(11)] = inst_39924);

(statearr_39956[(12)] = inst_39922);

(statearr_39956[(8)] = inst_39904);

return statearr_39956;
})();
var statearr_39957_39984 = state_39944__$1;
(statearr_39957_39984[(2)] = null);

(statearr_39957_39984[(1)] = (2));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (9))){
var inst_39904 = (state_39944[(8)]);
var inst_39920 = cljs.core.vec(inst_39904);
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39944__$1,(11),out,inst_39920);
} else {
if((state_val_39945 === (5))){
var inst_39905 = (state_39944[(7)]);
var inst_39912 = (state_39944[(10)]);
var inst_39908 = (state_39944[(9)]);
var inst_39912__$1 = (function (){var G__39958 = inst_39908;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__39958) : f.call(null,G__39958));
})();
var inst_39913 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39912__$1,inst_39905);
var inst_39914 = cljs.core.keyword_identical_QMARK_(inst_39905,cljs.core.constant$keyword$140);
var inst_39915 = (inst_39913) || (inst_39914);
var state_39944__$1 = (function (){var statearr_39959 = state_39944;
(statearr_39959[(10)] = inst_39912__$1);

return statearr_39959;
})();
if(cljs.core.truth_(inst_39915)){
var statearr_39960_39985 = state_39944__$1;
(statearr_39960_39985[(1)] = (8));

} else {
var statearr_39961_39986 = state_39944__$1;
(statearr_39961_39986[(1)] = (9));

}

return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (14))){
var inst_39937 = (state_39944[(2)]);
var inst_39938 = cljs.core.async.close_BANG_(out);
var state_39944__$1 = (function (){var statearr_39963 = state_39944;
(statearr_39963[(13)] = inst_39937);

return statearr_39963;
})();
var statearr_39964_39987 = state_39944__$1;
(statearr_39964_39987[(2)] = inst_39938);

(statearr_39964_39987[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (10))){
var inst_39927 = (state_39944[(2)]);
var state_39944__$1 = state_39944;
var statearr_39965_39988 = state_39944__$1;
(statearr_39965_39988[(2)] = inst_39927);

(statearr_39965_39988[(1)] = (7));


return cljs.core.constant$keyword$125;
} else {
if((state_val_39945 === (8))){
var inst_39912 = (state_39944[(10)]);
var inst_39908 = (state_39944[(9)]);
var inst_39904 = (state_39944[(8)]);
var inst_39917 = inst_39904.push(inst_39908);
var tmp39962 = inst_39904;
var inst_39904__$1 = tmp39962;
var inst_39905 = inst_39912;
var state_39944__$1 = (function (){var statearr_39966 = state_39944;
(statearr_39966[(7)] = inst_39905);

(statearr_39966[(14)] = inst_39917);

(statearr_39966[(8)] = inst_39904__$1);

return statearr_39966;
})();
var statearr_39967_39989 = state_39944__$1;
(statearr_39967_39989[(2)] = null);

(statearr_39967_39989[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__7226__auto___39975,out))
;
return ((function (switch__7170__auto__,c__7226__auto___39975,out){
return (function() {
var state_machine__7171__auto__ = null;
var state_machine__7171__auto____0 = (function (){
var statearr_39971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39971[(0)] = state_machine__7171__auto__);

(statearr_39971[(1)] = (1));

return statearr_39971;
});
var state_machine__7171__auto____1 = (function (state_39944){
while(true){
var ret_value__7172__auto__ = (function (){try{while(true){
var result__7173__auto__ = switch__7170__auto__(state_39944);
if(cljs.core.keyword_identical_QMARK_(result__7173__auto__,cljs.core.constant$keyword$125)){
continue;
} else {
return result__7173__auto__;
}
break;
}
}catch (e39972){if((e39972 instanceof Object)){
var ex__7174__auto__ = e39972;
var statearr_39973_39990 = state_39944;
(statearr_39973_39990[(5)] = ex__7174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39944);

return cljs.core.constant$keyword$125;
} else {
throw e39972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7172__auto__,cljs.core.constant$keyword$125)){
var G__39991 = state_39944;
state_39944 = G__39991;
continue;
} else {
return ret_value__7172__auto__;
}
break;
}
});
state_machine__7171__auto__ = function(state_39944){
switch(arguments.length){
case 0:
return state_machine__7171__auto____0.call(this);
case 1:
return state_machine__7171__auto____1.call(this,state_39944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7171__auto____0;
state_machine__7171__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7171__auto____1;
return state_machine__7171__auto__;
})()
;})(switch__7170__auto__,c__7226__auto___39975,out))
})();
var state__7228__auto__ = (function (){var statearr_39974 = (function (){return (f__7227__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7227__auto__.cljs$core$IFn$_invoke$arity$0() : f__7227__auto__.call(null));
})();
(statearr_39974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7226__auto___39975);

return statearr_39974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7228__auto__);
});})(c__7226__auto___39975,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
