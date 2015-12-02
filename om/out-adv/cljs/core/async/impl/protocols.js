// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj40089 = {};
return obj40089;
})();

cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){
if((function (){var and__3764__auto__ = port;
if(and__3764__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4420__auto__ = (((port == null))?null:port);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__40093 = x__4420__auto__;
return goog.typeOf(G__40093);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj40095 = {};
return obj40095;
})();

cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){
if((function (){var and__3764__auto__ = port;
if(and__3764__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4420__auto__ = (((port == null))?null:port);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__40099 = x__4420__auto__;
return goog.typeOf(G__40099);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj40101 = {};
return obj40101;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){
if((function (){var and__3764__auto__ = chan;
if(and__3764__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4420__auto__ = (((chan == null))?null:chan);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__40105 = x__4420__auto__;
return goog.typeOf(G__40105);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){
if((function (){var and__3764__auto__ = chan;
if(and__3764__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4420__auto__ = (((chan == null))?null:chan);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__40109 = x__4420__auto__;
return goog.typeOf(G__40109);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj40111 = {};
return obj40111;
})();

cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){
if((function (){var and__3764__auto__ = h;
if(and__3764__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4420__auto__ = (((h == null))?null:h);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__40115 = x__4420__auto__;
return goog.typeOf(G__40115);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

cljs.core.async.impl.protocols.commit = (function commit(h){
if((function (){var and__3764__auto__ = h;
if(and__3764__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__3764__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4420__auto__ = (((h == null))?null:h);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__40119 = x__4420__auto__;
return goog.typeOf(G__40119);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj40121 = {};
return obj40121;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){
if((function (){var and__3764__auto__ = b;
if(and__3764__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4420__auto__ = (((b == null))?null:b);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__40125 = x__4420__auto__;
return goog.typeOf(G__40125);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){
if((function (){var and__3764__auto__ = b;
if(and__3764__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4420__auto__ = (((b == null))?null:b);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__40129 = x__4420__auto__;
return goog.typeOf(G__40129);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){
if((function (){var and__3764__auto__ = b;
if(and__3764__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__4420__auto__ = (((b == null))?null:b);
return (function (){var or__3776__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__40133 = x__4420__auto__;
return goog.typeOf(G__40133);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){
return b;
});
var add_BANG___2 = (function (b,itm){

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj40135 = {};
return obj40135;
})();

