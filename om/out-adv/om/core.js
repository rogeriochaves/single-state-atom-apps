// Compiled by ClojureScript 0.0-2760 {:elide-asserts true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj40216 = {};
return obj40216;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.display_name[(function (){var G__40220 = x__4420__auto__;
return goog.typeOf(G__40220);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.display_name["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj40222 = {};
return obj40222;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.init_state[(function (){var G__40226 = x__4420__auto__;
return goog.typeOf(G__40226);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.init_state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj40228 = {};
return obj40228;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.should_update[(function (){var G__40232 = x__4420__auto__;
return goog.typeOf(G__40232);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.should_update["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj40234 = {};
return obj40234;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.will_mount[(function (){var G__40238 = x__4420__auto__;
return goog.typeOf(G__40238);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.will_mount["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj40240 = {};
return obj40240;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.did_mount[(function (){var G__40244 = x__4420__auto__;
return goog.typeOf(G__40244);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.did_mount["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj40246 = {};
return obj40246;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.will_unmount[(function (){var G__40250 = x__4420__auto__;
return goog.typeOf(G__40250);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.will_unmount["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj40252 = {};
return obj40252;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.will_update[(function (){var G__40256 = x__4420__auto__;
return goog.typeOf(G__40256);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.will_update["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj40258 = {};
return obj40258;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.did_update[(function (){var G__40262 = x__4420__auto__;
return goog.typeOf(G__40262);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.did_update["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj40264 = {};
return obj40264;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.will_receive_props[(function (){var G__40268 = x__4420__auto__;
return goog.typeOf(G__40268);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj40270 = {};
return obj40270;
})();

om.core.render = (function render(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.render[(function (){var G__40274 = x__4420__auto__;
return goog.typeOf(G__40274);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.render["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj40276 = {};
return obj40276;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.render_props[(function (){var G__40280 = x__4420__auto__;
return goog.typeOf(G__40280);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.render_props["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj40282 = {};
return obj40282;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core.render_state[(function (){var G__40286 = x__4420__auto__;
return goog.typeOf(G__40286);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core.render_state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj40288 = {};
return obj40288;
})();


om.core.IOmSwap = (function (){var obj40290 = {};
return obj40290;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._om_swap_BANG_[(function (){var G__40294 = x__4420__auto__;
return goog.typeOf(G__40294);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj40296 = {};
return obj40296;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_state[(function (){var G__40302 = x__4420__auto__;
return goog.typeOf(G__40302);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_state[(function (){var G__40304 = x__4420__auto__;
return goog.typeOf(G__40304);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj40306 = {};
return obj40306;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_render_state[(function (){var G__40312 = x__4420__auto__;
return goog.typeOf(G__40312);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_render_state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_render_state[(function (){var G__40314 = x__4420__auto__;
return goog.typeOf(G__40314);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_render_state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj40316 = {};
return obj40316;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._set_state_BANG_[(function (){var G__40322 = x__4420__auto__;
return goog.typeOf(G__40322);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._set_state_BANG_[(function (){var G__40324 = x__4420__auto__;
return goog.typeOf(G__40324);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj40326 = {};
return obj40326;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_queue[(function (){var G__40330 = x__4420__auto__;
return goog.typeOf(G__40330);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_queue["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._queue_render_BANG_[(function (){var G__40334 = x__4420__auto__;
return goog.typeOf(G__40334);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._empty_queue_BANG_[(function (){var G__40338 = x__4420__auto__;
return goog.typeOf(G__40338);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj40340 = {};
return obj40340;
})();

om.core._value = (function _value(x){
if((function (){var and__3764__auto__ = x;
if(and__3764__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3764__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4420__auto__ = (((x == null))?null:x);
return (function (){var or__3776__auto__ = (om.core._value[(function (){var G__40344 = x__4420__auto__;
return goog.typeOf(G__40344);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._value["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj40346 = {};
return obj40346;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3764__auto__ = cursor;
if(and__3764__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3764__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4420__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3776__auto__ = (om.core._path[(function (){var G__40350 = x__4420__auto__;
return goog.typeOf(G__40350);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._path["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3764__auto__ = cursor;
if(and__3764__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3764__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4420__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3776__auto__ = (om.core._state[(function (){var G__40354 = x__4420__auto__;
return goog.typeOf(G__40354);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._state["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj40356 = {};
return obj40356;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3764__auto__ = value;
if(and__3764__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3764__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4420__auto__ = (((value == null))?null:value);
return (function (){var or__3776__auto__ = (om.core._to_cursor[(function (){var G__40362 = x__4420__auto__;
return goog.typeOf(G__40362);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._to_cursor["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3764__auto__ = value;
if(and__3764__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3764__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4420__auto__ = (((value == null))?null:value);
return (function (){var or__3776__auto__ = (om.core._to_cursor[(function (){var G__40364 = x__4420__auto__;
return goog.typeOf(G__40364);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._to_cursor["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj40366 = {};
return obj40366;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3764__auto__ = cursor;
if(and__3764__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3764__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4420__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3776__auto__ = (om.core._derive[(function (){var G__40370 = x__4420__auto__;
return goog.typeOf(G__40370);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._derive["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__40371 = derived;
var G__40372 = state;
var G__40373 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__40371,G__40372,G__40373) : om.core.to_cursor.call(null,G__40371,G__40372,G__40373));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj40375 = {};
return obj40375;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3764__auto__ = cursor;
if(and__3764__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3764__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4420__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3776__auto__ = (om.core._transact_BANG_[(function (){var G__40379 = x__4420__auto__;
return goog.typeOf(G__40379);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj40381 = {};
return obj40381;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3764__auto__ = x;
if(and__3764__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4420__auto__ = (((x == null))?null:x);
return (function (){var or__3776__auto__ = (om.core._listen_BANG_[(function (){var G__40385 = x__4420__auto__;
return goog.typeOf(G__40385);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3764__auto__ = x;
if(and__3764__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4420__auto__ = (((x == null))?null:x);
return (function (){var or__3776__auto__ = (om.core._unlisten_BANG_[(function (){var G__40389 = x__4420__auto__;
return goog.typeOf(G__40389);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3764__auto__ = x;
if(and__3764__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4420__auto__ = (((x == null))?null:x);
return (function (){var or__3776__auto__ = (om.core._notify_BANG_[(function (){var G__40393 = x__4420__auto__;
return goog.typeOf(G__40393);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj40395 = {};
return obj40395;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._set_property_BANG_[(function (){var G__40399 = x__4420__auto__;
return goog.typeOf(G__40399);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._remove_property_BANG_[(function (){var G__40403 = x__4420__auto__;
return goog.typeOf(G__40403);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._remove_properties_BANG_[(function (){var G__40407 = x__4420__auto__;
return goog.typeOf(G__40407);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_property[(function (){var G__40411 = x__4420__auto__;
return goog.typeOf(G__40411);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_property["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj40413 = {};
return obj40413;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3764__auto__ = cursor;
if(and__3764__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3764__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4420__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3776__auto__ = (om.core._root_key[(function (){var G__40417 = x__4420__auto__;
return goog.typeOf(G__40417);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._root_key["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj40419 = {};
return obj40419;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._adapt[(function (){var G__40423 = x__4420__auto__;
return goog.typeOf(G__40423);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._adapt["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj40425 = {};
return obj40425;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._add_dep_BANG_[(function (){var G__40429 = x__4420__auto__;
return goog.typeOf(G__40429);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._remove_dep_BANG_[(function (){var G__40433 = x__4420__auto__;
return goog.typeOf(G__40433);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__40437 = x__4420__auto__;
return goog.typeOf(G__40437);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3764__auto__ = this$;
if(and__3764__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3764__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4420__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3776__auto__ = (om.core._get_deps[(function (){var G__40441 = x__4420__auto__;
return goog.typeOf(G__40441);
})()]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (om.core._get_deps["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__40451 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40451) : cljs.core.deref.call(null,G__40451));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__40452 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__40452) : om.core.path.call(null,G__40452));
})(),korks);
var ret = (((function (){var G__40453 = state;
if(G__40453){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40453.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__40453.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__40453);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__40453);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$141)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$142,path,cljs.core.constant$keyword$143,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$144,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__40454 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40454) : cljs.core.deref.call(null,G__40454));
})(),path),cljs.core.constant$keyword$145,old_state,cljs.core.constant$keyword$146,(function (){var G__40455 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40455) : cljs.core.deref.call(null,G__40455));
})()], null);
if(!((tag == null))){
var G__40456 = cursor;
var G__40457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$123,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__40456,G__40457) : om.core.notify_STAR_.call(null,G__40456,G__40457));
} else {
var G__40458 = cursor;
var G__40459 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__40458,G__40459) : om.core.notify_STAR_.call(null,G__40458,G__40459));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__40461 = x;
if(G__40461){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40461.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__40461.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__40461);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__40461);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__40463 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__40463) : c.call(null,G__40463));
})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__40465 = (x.props["__om_cursor"]);
var G__40465__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__40465,korks__$1):G__40465);
return G__40465__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__40470 = state;
(G__40470["__om_prev_state"] = (state["__om_state"]));

(G__40470["__om_state"] = pending_state);

(G__40470["__om_pending_state"] = null);

return G__40470;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3776__auto__ = props;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3776__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__40475 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40475) : cljs.core.deref.call(null,G__40475));
})(),(function (){var G__40476 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__40476) : om.core.path.call(null,G__40476));
})(),cljs.core.constant$keyword$147);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__40482 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__40482) : om.core.path.call(null,G__40482));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__40483 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40483) : cljs.core.deref.call(null,G__40483));
})(),ref_path,cljs.core.constant$keyword$147);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$147)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__40484 = ref_val_SINGLEQUOTE_;
var G__40485 = ref_state;
var G__40486 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__40484,G__40485,G__40486) : om.core.to_cursor.call(null,G__40484,G__40485,G__40486));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$148,cljs.core.constant$keyword$149,cljs.core.constant$keyword$150,cljs.core.constant$keyword$151,cljs.core.constant$keyword$152,cljs.core.constant$keyword$153,cljs.core.constant$keyword$154,cljs.core.constant$keyword$155,cljs.core.constant$keyword$156,cljs.core.constant$keyword$157,cljs.core.constant$keyword$158],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__40488 = c;
if(G__40488){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40488.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__40488.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__40488);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__40488);
}
})()){
var state_40513 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3776__auto__ = (state_40513["__om_prev_state"]);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return (state_40513["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__40489 = c;
if(G__40489){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40489.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__40489.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__40489);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__40489);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__40490 = cljs.core.seq(refs);
var chunk__40491 = null;
var count__40492 = (0);
var i__40493 = (0);
while(true){
if((i__40493 < count__40492)){
var ref = chunk__40491.cljs$core$IIndexed$_nth$arity$2(null,i__40493);
var G__40494_40514 = this$;
var G__40495_40515 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__40494_40514,G__40495_40515) : om.core.unobserve.call(null,G__40494_40514,G__40495_40515));

var G__40516 = seq__40490;
var G__40517 = chunk__40491;
var G__40518 = count__40492;
var G__40519 = (i__40493 + (1));
seq__40490 = G__40516;
chunk__40491 = G__40517;
count__40492 = G__40518;
i__40493 = G__40519;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__40490);
if(temp__4126__auto____$1){
var seq__40490__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40490__$1)){
var c__4563__auto__ = cljs.core.chunk_first(seq__40490__$1);
var G__40520 = cljs.core.chunk_rest(seq__40490__$1);
var G__40521 = c__4563__auto__;
var G__40522 = cljs.core.count(c__4563__auto__);
var G__40523 = (0);
seq__40490 = G__40520;
chunk__40491 = G__40521;
count__40492 = G__40522;
i__40493 = G__40523;
continue;
} else {
var ref = cljs.core.first(seq__40490__$1);
var G__40496_40524 = this$;
var G__40497_40525 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__40496_40524,G__40497_40525) : om.core.unobserve.call(null,G__40496_40524,G__40497_40525));

var G__40526 = cljs.core.next(seq__40490__$1);
var G__40527 = null;
var G__40528 = (0);
var G__40529 = (0);
seq__40490 = G__40526;
chunk__40491 = G__40527;
count__40492 = G__40528;
i__40493 = G__40529;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__40498 = c;
if(G__40498){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40498.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__40498.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__40498);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__40498);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__40499 = c;
if(G__40499){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40499.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__40499.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__40499);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__40499);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3764__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__3764__auto__){
return cljs.core.some(((function (and__3764__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__40487_SHARP_){
return om.core.ref_changed_QMARK_(p1__40487_SHARP_);
});})(and__3764__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3764__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_40500 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_40501 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_40502 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_40503 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_40504 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__40505 = c;
if(G__40505){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40505.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__40505.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__40505);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__40505);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__40506 = c;
if(G__40506){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40506.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__40506.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__40506);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__40506);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__40507 = c;
if(G__40507){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40507.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__40507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__40507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__40507);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_40504;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_40503;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_40502;

om.core._STAR_state_STAR_ = _STAR_state_STAR_40501;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_40500;
}}),(function (next_props,next_state){
var this$ = this;
var c_40530 = om.core.children(this$);
if((function (){var G__40508 = c_40530;
if(G__40508){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40508.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__40508.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__40508);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__40508);
}
})()){
var state_40531 = this$.state;
om.core.will_update(c_40530,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3776__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__40509 = c;
if(G__40509){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40509.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__40509.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__40509);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__40509);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$159)], 0)), "__om_id": (function (){var or__3776__auto__ = id;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__40510 = c;
if(G__40510){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40510.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__40510.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__40510);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__40510);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__40511 = c;
if(G__40511){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40511.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__40511.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__40511);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__40511);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_40532 = om.core.children(this$);
if((function (){var G__40512 = c_40532;
if(G__40512){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40512.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__40512.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__40512);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__40512);
}
})()){
om.core.will_mount(c_40532);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x40534 = obj;
x40534.om$core$IGetState$ = true;

x40534.om$core$IGetState$_get_state$arity$1 = ((function (x40534){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3776__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return (state["__om_state"]);
}
});})(x40534))
;

x40534.om$core$IGetState$_get_state$arity$2 = ((function (x40534){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x40534))
;

x40534.om$core$IGetRenderState$ = true;

x40534.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x40534){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x40534))
;

x40534.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x40534){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x40534))
;

x40534.om$core$ISetState$ = true;

x40534.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x40534){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3764__auto__ = !((app_state == null));
if(and__3764__auto__){
return render;
} else {
return and__3764__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x40534))
;

x40534.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x40534){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3764__auto__ = !((app_state == null));
if(and__3764__auto__){
return render;
} else {
return and__3764__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x40534))
;

return x40534;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__40536 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40536) : cljs.core.deref.call(null,G__40536));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$162,cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$163,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$161);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$155,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3776__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3776__auto__ = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$159),(((function (){var G__40537 = c;
if(G__40537){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40537.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__40537.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__40537);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__40537);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(this$),cljs.core.constant$keyword$163], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$158,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_40551 = om.core.children(this$);
if((function (){var G__40538 = c_40551;
if(G__40538){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40538.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__40538.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__40538);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__40538);
}
})()){
om.core.will_mount(c_40551);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$150,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__40539 = c;
if(G__40539){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40539.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__40539.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__40539);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__40539);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__40540 = cljs.core.seq(refs);
var chunk__40541 = null;
var count__40542 = (0);
var i__40543 = (0);
while(true){
if((i__40543 < count__40542)){
var ref = chunk__40541.cljs$core$IIndexed$_nth$arity$2(null,i__40543);
var G__40544_40552 = this$;
var G__40545_40553 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__40544_40552,G__40545_40553) : om.core.unobserve.call(null,G__40544_40552,G__40545_40553));

var G__40554 = seq__40540;
var G__40555 = chunk__40541;
var G__40556 = count__40542;
var G__40557 = (i__40543 + (1));
seq__40540 = G__40554;
chunk__40541 = G__40555;
count__40542 = G__40556;
i__40543 = G__40557;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__40540);
if(temp__4126__auto____$1){
var seq__40540__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40540__$1)){
var c__4563__auto__ = cljs.core.chunk_first(seq__40540__$1);
var G__40558 = cljs.core.chunk_rest(seq__40540__$1);
var G__40559 = c__4563__auto__;
var G__40560 = cljs.core.count(c__4563__auto__);
var G__40561 = (0);
seq__40540 = G__40558;
chunk__40541 = G__40559;
count__40542 = G__40560;
i__40543 = G__40561;
continue;
} else {
var ref = cljs.core.first(seq__40540__$1);
var G__40546_40562 = this$;
var G__40547_40563 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__40546_40562,G__40547_40563) : om.core.unobserve.call(null,G__40546_40562,G__40547_40563));

var G__40564 = cljs.core.next(seq__40540__$1);
var G__40565 = null;
var G__40566 = (0);
var G__40567 = (0);
seq__40540 = G__40564;
chunk__40541 = G__40565;
count__40542 = G__40566;
i__40543 = G__40567;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.constant$keyword$154,(function (next_props,next_state){
var this$ = this;
var props_40568 = this$.props;
var c_40569 = om.core.children(this$);
if((function (){var G__40548 = c_40569;
if(G__40548){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40548.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__40548.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__40548);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__40548);
}
})()){
var state_40570 = this$.state;
om.core.will_update(c_40569,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$148,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__40549 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40549) : cljs.core.deref.call(null,G__40549));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(this$)], null);
if((function (){var G__40550 = c;
if(G__40550){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40550.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__40550.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__40550);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__40550);
}
})()){
var state_40571 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3776__auto__ = cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$162], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x40575 = cljs.core.clj__GT_js(methods$);
x40575.om$core$IGetState$ = true;

x40575.om$core$IGetState$_get_state$arity$1 = ((function (x40575){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__40576 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40576) : cljs.core.deref.call(null,G__40576));
})(),spath);
var or__3776__auto__ = cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x40575))
;

x40575.om$core$IGetState$_get_state$arity$2 = ((function (x40575){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x40575))
;

x40575.om$core$IGetRenderState$ = true;

x40575.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x40575){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(this$__$1),cljs.core.constant$keyword$163], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__40577 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40577) : cljs.core.deref.call(null,G__40577));
})(),spath);
});})(x40575))
;

x40575.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x40575){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x40575))
;

x40575.om$core$ISetState$ = true;

x40575.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x40575){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,om.core.react_id(this$__$1),cljs.core.constant$keyword$161], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3764__auto__ = !((gstate == null));
if(and__3764__auto__){
return render;
} else {
return and__3764__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x40575))
;

x40575.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x40575){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x40575))
;

return x40575;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__40580 = x;
if(G__40580){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40580.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__40580.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__40580);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__40580);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__40581 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40581) : cljs.core.deref.call(null,G__40581));
})(),cljs.core.constant$keyword$164));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$147);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$147))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__40583){
var vec__40584 = p__40583;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40584,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__40586 = null;
var G__40586__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__40586__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__40586 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__40586__2.call(this,self__,k);
case 3:
return G__40586__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40586.cljs$core$IFn$_invoke$arity$2 = G__40586__2;
G__40586.cljs$core$IFn$_invoke$arity$3 = G__40586__3;
return G__40586;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args40582){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40582)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__40585 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40585) : cljs.core.deref.call(null,G__40585));
})(),self__.path,cljs.core.constant$keyword$164);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__40589 = null;
var G__40589__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__40589__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__40589 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__40589__2.call(this,self__,k);
case 3:
return G__40589__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40589.cljs$core$IFn$_invoke$arity$2 = G__40589__2;
G__40589.cljs$core$IFn$_invoke$arity$3 = G__40589__3;
return G__40589;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args40587){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40587)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__40588 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40588) : cljs.core.deref.call(null,G__40588));
})(),self__.path,cljs.core.constant$keyword$164);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x40592 = cljs.core.clone(val);
x40592.cljs$core$IEquiv$ = true;

x40592.cljs$core$IEquiv$_equiv$arity$2 = ((function (x40592){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x40592))
;

x40592.om$core$ITransact$ = true;

x40592.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x40592){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x40592))
;

x40592.om$core$ICursor$ = true;

x40592.om$core$ICursor$_path$arity$1 = ((function (x40592){
return (function (_){
var ___$1 = this;
return path;
});})(x40592))
;

x40592.om$core$ICursor$_state$arity$1 = ((function (x40592){
return (function (_){
var ___$1 = this;
return state;
});})(x40592))
;

x40592.cljs$core$IDeref$ = true;

x40592.cljs$core$IDeref$_deref$arity$1 = ((function (x40592){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__40593 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40593) : cljs.core.deref.call(null,G__40593));
})(),path,cljs.core.constant$keyword$164);
});})(x40592))
;

return x40592;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__40602 = val;
if(G__40602){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40602.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__40602.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__40602);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__40602);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__40603 = val;
if(G__40603){
var bit__4457__auto__ = (G__40603.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4457__auto__) || (G__40603.cljs$core$ICloneable$)){
return true;
} else {
if((!G__40603.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__40603);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__40603);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__40605 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40605) : cljs.core.deref.call(null,G__40605));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__40607 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40607) : cljs.core.deref.call(null,G__40607));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__40608 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40608) : cljs.core.atom.call(null,G__40608));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x40617 = cljs.core.clone(x);
x40617.om$core$ITransact$ = true;

x40617.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x40617){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__40618_40621 = cursor__$1;
var G__40619_40622 = korks;
var G__40620_40623 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__40618_40621,G__40619_40622,G__40620_40623) : om.core.commit_BANG_.call(null,G__40618_40621,G__40619_40622,G__40620_40623));

return om.core._refresh_deps_BANG_(parent);
});})(x40617))
;

x40617.om$core$ICursorDerive$ = true;

x40617.om$core$ICursorDerive$_derive$arity$4 = ((function (x40617){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x40617))
;

x40617.om$core$IAdapt$ = true;

x40617.om$core$IAdapt$_adapt$arity$2 = ((function (x40617){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x40617))
;

x40617.cljs$core$ICloneable$ = true;

x40617.cljs$core$ICloneable$_clone$arity$1 = ((function (x40617){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x40617))
;

return x40617;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){

if((function (){var G__40639 = cursor;
if(G__40639){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40639.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__40639.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__40639);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__40639);
}
})()){
return cursor;
} else {
var path = (function (){var G__40640 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__40640) : om.core.path.call(null,G__40640));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__40641 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40641) : cljs.core.atom.call(null,G__40641));
})())),path);
var x40642 = cljs.core.clone(cursor);
x40642.om$core$ITransact$ = true;

x40642.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x40642,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__40643_40654 = cursor__$2;
var G__40644_40655 = korks;
var G__40645_40656 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__40643_40654,G__40644_40655,G__40645_40656) : om.core.commit_BANG_.call(null,G__40643_40654,G__40644_40655,G__40645_40656));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x40642,path,storage))
;

x40642.om$core$IOmRef$ = true;

x40642.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x40642,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__40646 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__40646) : om.core.id.call(null,G__40646));
})(),c);
});})(x40642,path,storage))
;

x40642.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x40642,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__40647 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__40647) : om.core.id.call(null,G__40647));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x40642,path,storage))
;

x40642.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x40642,path,storage){
return (function (_){
var ___$1 = this;
var seq__40648 = cljs.core.seq(cljs.core.vals((function (){var G__40652 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40652) : cljs.core.deref.call(null,G__40652));
})()));
var chunk__40649 = null;
var count__40650 = (0);
var i__40651 = (0);
while(true){
if((i__40651 < count__40650)){
var c = chunk__40649.cljs$core$IIndexed$_nth$arity$2(null,i__40651);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__40657 = seq__40648;
var G__40658 = chunk__40649;
var G__40659 = count__40650;
var G__40660 = (i__40651 + (1));
seq__40648 = G__40657;
chunk__40649 = G__40658;
count__40650 = G__40659;
i__40651 = G__40660;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__40648);
if(temp__4126__auto__){
var seq__40648__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40648__$1)){
var c__4563__auto__ = cljs.core.chunk_first(seq__40648__$1);
var G__40661 = cljs.core.chunk_rest(seq__40648__$1);
var G__40662 = c__4563__auto__;
var G__40663 = cljs.core.count(c__4563__auto__);
var G__40664 = (0);
seq__40648 = G__40661;
chunk__40649 = G__40662;
count__40650 = G__40663;
i__40651 = G__40664;
continue;
} else {
var c = cljs.core.first(seq__40648__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__40665 = cljs.core.next(seq__40648__$1);
var G__40666 = null;
var G__40667 = (0);
var G__40668 = (0);
seq__40648 = G__40665;
chunk__40649 = G__40666;
count__40650 = G__40667;
i__40651 = G__40668;
continue;
}
} else {
return null;
}
}
break;
}
});})(x40642,path,storage))
;

x40642.om$core$IOmRef$_get_deps$arity$1 = ((function (x40642,path,storage){
return (function (_){
var ___$1 = this;
var G__40653 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40653) : cljs.core.deref.call(null,G__40653));
});})(x40642,path,storage))
;

x40642.om$core$ICursorDerive$ = true;

x40642.om$core$ICursorDerive$_derive$arity$4 = ((function (x40642,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x40642,path,storage))
;

return x40642;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3776__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){


om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__40669 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40669) : cljs.core.atom.call(null,G__40669));
})();
om.core.get_renderT = (function get_renderT(state){
var or__3776__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__40676_40681 = cljs.core.seq((function (){var G__40680 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40680) : cljs.core.deref.call(null,G__40680));
})());
var chunk__40677_40682 = null;
var count__40678_40683 = (0);
var i__40679_40684 = (0);
while(true){
if((i__40679_40684 < count__40678_40683)){
var f_40685 = chunk__40677_40682.cljs$core$IIndexed$_nth$arity$2(null,i__40679_40684);
(f_40685.cljs$core$IFn$_invoke$arity$0 ? f_40685.cljs$core$IFn$_invoke$arity$0() : f_40685.call(null));

var G__40686 = seq__40676_40681;
var G__40687 = chunk__40677_40682;
var G__40688 = count__40678_40683;
var G__40689 = (i__40679_40684 + (1));
seq__40676_40681 = G__40686;
chunk__40677_40682 = G__40687;
count__40678_40683 = G__40688;
i__40679_40684 = G__40689;
continue;
} else {
var temp__4126__auto___40690 = cljs.core.seq(seq__40676_40681);
if(temp__4126__auto___40690){
var seq__40676_40691__$1 = temp__4126__auto___40690;
if(cljs.core.chunked_seq_QMARK_(seq__40676_40691__$1)){
var c__4563__auto___40692 = cljs.core.chunk_first(seq__40676_40691__$1);
var G__40693 = cljs.core.chunk_rest(seq__40676_40691__$1);
var G__40694 = c__4563__auto___40692;
var G__40695 = cljs.core.count(c__4563__auto___40692);
var G__40696 = (0);
seq__40676_40681 = G__40693;
chunk__40677_40682 = G__40694;
count__40678_40683 = G__40695;
i__40679_40684 = G__40696;
continue;
} else {
var f_40697 = cljs.core.first(seq__40676_40691__$1);
(f_40697.cljs$core$IFn$_invoke$arity$0 ? f_40697.cljs$core$IFn$_invoke$arity$0() : f_40697.call(null));

var G__40698 = cljs.core.next(seq__40676_40691__$1);
var G__40699 = null;
var G__40700 = (0);
var G__40701 = (0);
seq__40676_40681 = G__40698;
chunk__40677_40682 = G__40699;
count__40678_40683 = G__40700;
i__40679_40684 = G__40701;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = (function (){var G__40702 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40702) : cljs.core.atom.call(null,G__40702));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
return null;
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$165,null,cljs.core.constant$keyword$166,null,cljs.core.constant$keyword$167,null,cljs.core.constant$keyword$168,null,cljs.core.constant$keyword$169,null,cljs.core.constant$keyword$170,null,cljs.core.constant$keyword$171,null,cljs.core.constant$keyword$172,null,cljs.core.constant$keyword$173,null,cljs.core.constant$keyword$174,null,cljs.core.constant$keyword$175,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__40707 = (function (){var G__40708 = (function (){var or__3776__auto__ = descriptor;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3776__auto____$1)){
return or__3776__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__40708);
})();
return React.createFactory(G__40707);
})());
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){



if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__40726 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__40727 = cursor;
var G__40728 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40727,G__40728) : f.call(null,G__40727,G__40728));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__40726) : ctor.call(null,G__40726));
} else {
var map__40729 = m;
var map__40729__$1 = ((cljs.core.seq_QMARK_(map__40729))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40729):map__40729);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,cljs.core.constant$keyword$173);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,cljs.core.constant$keyword$170);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,cljs.core.constant$keyword$171);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,cljs.core.constant$keyword$172);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,cljs.core.constant$keyword$169);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$166);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$174.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__40730 = cursor;
var G__40731 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__40730,G__40731) : dataf.call(null,G__40730,G__40731));
} else {
var G__40732 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__40732) : dataf.call(null,G__40732));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__40733 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__40733) : key_fn.call(null,G__40733));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$168)
));
var shared = (function (){var or__3776__auto__ = cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(m));
var G__40734 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__40729,map__40729__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__40735 = cursor_SINGLEQUOTE_;
var G__40736 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40735,G__40736) : f.call(null,G__40735,G__40736));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__40729,map__40729__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__40729,map__40729__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__40737 = cursor_SINGLEQUOTE_;
var G__40738 = this$;
var G__40739 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40737,G__40738,G__40739) : f.call(null,G__40737,G__40738,G__40739));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__40729,map__40729__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3776__auto__ = rkey;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$174.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__40734) : ctor.call(null,G__40734));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){


if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__40746 = f;
var G__40747 = x;
var G__40748 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__40746,G__40747,G__40748) : om.core._STAR_instrument_STAR_.call(null,G__40746,G__40747,G__40748));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$176)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){


return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$174,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__40771 = state;
if(G__40771){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40771.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__40771.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__40771);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__40771);
}
})()){
} else {
var properties_40790 = (function (){var G__40772 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40772) : cljs.core.atom.call(null,G__40772));
})();
var listeners_40791 = (function (){var G__40773 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40773) : cljs.core.atom.call(null,G__40773));
})();
var render_queue_40792 = (function (){var G__40774 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40774) : cljs.core.atom.call(null,G__40774));
})();
var x40775_40793 = state;
x40775_40793.om$core$IRenderQueue$ = true;

x40775_40793.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (this$){
var this$__$1 = this;
var G__40776 = render_queue_40792;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40776) : cljs.core.deref.call(null,G__40776));
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__40777 = render_queue_40792;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40777) : cljs.core.deref.call(null,G__40777));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_40792,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_40792,cljs.core.empty);
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$INotify$ = true;

x40775_40793.om$core$INotify$_listen_BANG_$arity$3 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_40791,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_40791,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$INotify$_notify_BANG_$arity$3 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__40778_40794 = cljs.core.seq((function (){var G__40782 = listeners_40791;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40782) : cljs.core.deref.call(null,G__40782));
})());
var chunk__40779_40795 = null;
var count__40780_40796 = (0);
var i__40781_40797 = (0);
while(true){
if((i__40781_40797 < count__40780_40796)){
var vec__40783_40798 = chunk__40779_40795.cljs$core$IIndexed$_nth$arity$2(null,i__40781_40797);
var __40799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40783_40798,(0),null);
var f_40800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40783_40798,(1),null);
var G__40784_40801 = tx_data;
var G__40785_40802 = root_cursor;
(f_40800.cljs$core$IFn$_invoke$arity$2 ? f_40800.cljs$core$IFn$_invoke$arity$2(G__40784_40801,G__40785_40802) : f_40800.call(null,G__40784_40801,G__40785_40802));

var G__40803 = seq__40778_40794;
var G__40804 = chunk__40779_40795;
var G__40805 = count__40780_40796;
var G__40806 = (i__40781_40797 + (1));
seq__40778_40794 = G__40803;
chunk__40779_40795 = G__40804;
count__40780_40796 = G__40805;
i__40781_40797 = G__40806;
continue;
} else {
var temp__4126__auto___40807 = cljs.core.seq(seq__40778_40794);
if(temp__4126__auto___40807){
var seq__40778_40808__$1 = temp__4126__auto___40807;
if(cljs.core.chunked_seq_QMARK_(seq__40778_40808__$1)){
var c__4563__auto___40809 = cljs.core.chunk_first(seq__40778_40808__$1);
var G__40810 = cljs.core.chunk_rest(seq__40778_40808__$1);
var G__40811 = c__4563__auto___40809;
var G__40812 = cljs.core.count(c__4563__auto___40809);
var G__40813 = (0);
seq__40778_40794 = G__40810;
chunk__40779_40795 = G__40811;
count__40780_40796 = G__40812;
i__40781_40797 = G__40813;
continue;
} else {
var vec__40786_40814 = cljs.core.first(seq__40778_40808__$1);
var __40815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40786_40814,(0),null);
var f_40816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40786_40814,(1),null);
var G__40787_40817 = tx_data;
var G__40788_40818 = root_cursor;
(f_40816.cljs$core$IFn$_invoke$arity$2 ? f_40816.cljs$core$IFn$_invoke$arity$2(G__40787_40817,G__40788_40818) : f_40816.call(null,G__40787_40817,G__40788_40818));

var G__40819 = cljs.core.next(seq__40778_40808__$1);
var G__40820 = null;
var G__40821 = (0);
var G__40822 = (0);
seq__40778_40794 = G__40819;
chunk__40779_40795 = G__40820;
count__40780_40796 = G__40821;
i__40781_40797 = G__40822;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$IRootProperties$ = true;

x40775_40793.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_40790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_40790,cljs.core.dissoc,id,k);
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_40790,cljs.core.dissoc,id);
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

x40775_40793.om$core$IRootProperties$_get_property$arity$3 = ((function (x40775_40793,properties_40790,listeners_40791,render_queue_40792){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__40789 = properties_40790;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40789) : cljs.core.deref.call(null,G__40789));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x40775_40793,properties_40790,listeners_40791,render_queue_40792))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x40828 = cljs.core.clone(cursor);
x40828.om$core$IRootKey$ = true;

x40828.om$core$IRootKey$_root_key$arity$1 = ((function (x40828){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x40828))
;

x40828.om$core$IAdapt$ = true;

x40828.om$core$IAdapt$_adapt$arity$2 = ((function (x40828){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x40828))
;

x40828.cljs$core$ICloneable$ = true;

x40828.cljs$core$ICloneable$_clone$arity$1 = ((function (x40828){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x40828))
;

return x40828;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__40829){
var map__40918 = p__40829;
var map__40918__$1 = ((cljs.core.seq_QMARK_(map__40918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40918):map__40918);
var options = map__40918__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$177);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$178);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$165);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$167);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$142);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$179);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,cljs.core.constant$keyword$180);


var roots_SINGLEQUOTE__41006 = (function (){var G__40919 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40919) : cljs.core.deref.call(null,G__40919));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__41006,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__41006,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__40920 = value;
if(G__40920){
var bit__4457__auto__ = (G__40920.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4457__auto__) || (G__40920.cljs$core$IAtom$)){
return true;
} else {
if((!G__40920.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__40920);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__40920);
}
})())?value:(function (){var G__40921 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40921) : cljs.core.atom.call(null,G__40921));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3776__auto__ = adapt;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$180,cljs.core.array_seq([cljs.core.constant$keyword$179,cljs.core.constant$keyword$142,cljs.core.constant$keyword$178,cljs.core.constant$keyword$177], 0));
var ret = (function (){var G__40922 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40922) : cljs.core.atom.call(null,G__40922));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__40962 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40962) : cljs.core.deref.call(null,G__40962));
})();
var cursor = (function (){var G__40963 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__40963) : adapt__$1.call(null,G__40963));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$181))){
} else {
var c_41007 = om.dom.render((function (){var _STAR_descriptor_STAR_40964 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_40965 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_40966 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_40967 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_40967;

om.core._STAR_state_STAR_ = _STAR_state_STAR_40966;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_40965;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_40964;
}})(),target);
if(((function (){var G__40968 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40968) : cljs.core.deref.call(null,G__40968));
})() == null)){
var G__40969_41008 = ret;
var G__40970_41009 = c_41007;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40969_41008,G__40970_41009) : cljs.core.reset_BANG_.call(null,G__40969_41008,G__40970_41009));
} else {
}
}

var queue_41010 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_41010)){
} else {
var seq__40971_41011 = cljs.core.seq(queue_41010);
var chunk__40972_41012 = null;
var count__40973_41013 = (0);
var i__40974_41014 = (0);
while(true){
if((i__40974_41014 < count__40973_41013)){
var c_41015 = chunk__40972_41012.cljs$core$IIndexed$_nth$arity$2(null,i__40974_41014);
if(cljs.core.truth_(c_41015.isMounted())){
var temp__4126__auto___41016 = (c_41015.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___41016)){
var next_props_41017 = temp__4126__auto___41016;
(c_41015.props["__om_cursor"] = next_props_41017);

(c_41015.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3776__auto__ = !((function (){var G__40976 = om.core.children(c_41015);
if(G__40976){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40976.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__40976.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__40976);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__40976);
}
})());
if(or__3776__auto__){
return or__3776__auto__;
} else {
return c_41015.shouldComponentUpdate(c_41015.props,c_41015.state);
}
})())){
c_41015.forceUpdate();
} else {
}
} else {
}

var G__41018 = seq__40971_41011;
var G__41019 = chunk__40972_41012;
var G__41020 = count__40973_41013;
var G__41021 = (i__40974_41014 + (1));
seq__40971_41011 = G__41018;
chunk__40972_41012 = G__41019;
count__40973_41013 = G__41020;
i__40974_41014 = G__41021;
continue;
} else {
var temp__4126__auto___41022 = cljs.core.seq(seq__40971_41011);
if(temp__4126__auto___41022){
var seq__40971_41023__$1 = temp__4126__auto___41022;
if(cljs.core.chunked_seq_QMARK_(seq__40971_41023__$1)){
var c__4563__auto___41024 = cljs.core.chunk_first(seq__40971_41023__$1);
var G__41025 = cljs.core.chunk_rest(seq__40971_41023__$1);
var G__41026 = c__4563__auto___41024;
var G__41027 = cljs.core.count(c__4563__auto___41024);
var G__41028 = (0);
seq__40971_41011 = G__41025;
chunk__40972_41012 = G__41026;
count__40973_41013 = G__41027;
i__40974_41014 = G__41028;
continue;
} else {
var c_41029 = cljs.core.first(seq__40971_41023__$1);
if(cljs.core.truth_(c_41029.isMounted())){
var temp__4126__auto___41030__$1 = (c_41029.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___41030__$1)){
var next_props_41031 = temp__4126__auto___41030__$1;
(c_41029.props["__om_cursor"] = next_props_41031);

(c_41029.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3776__auto__ = !((function (){var G__40978 = om.core.children(c_41029);
if(G__40978){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__40978.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__40978.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__40978);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__40978);
}
})());
if(or__3776__auto__){
return or__3776__auto__;
} else {
return c_41029.shouldComponentUpdate(c_41029.props,c_41029.state);
}
})())){
c_41029.forceUpdate();
} else {
}
} else {
}

var G__41032 = cljs.core.next(seq__40971_41023__$1);
var G__41033 = null;
var G__41034 = (0);
var G__41035 = (0);
seq__40971_41011 = G__41032;
chunk__40972_41012 = G__41033;
count__40973_41013 = G__41034;
i__40974_41014 = G__41035;
continue;
}
} else {
}
}
break;
}
}

var _refs_41036 = (function (){var G__40979 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40979) : cljs.core.deref.call(null,G__40979));
})();
if(cljs.core.empty_QMARK_(_refs_41036)){
} else {
var seq__40980_41037 = cljs.core.seq(_refs_41036);
var chunk__40981_41038 = null;
var count__40982_41039 = (0);
var i__40983_41040 = (0);
while(true){
if((i__40983_41040 < count__40982_41039)){
var vec__40984_41041 = chunk__40981_41038.cljs$core$IIndexed$_nth$arity$2(null,i__40983_41040);
var path_41042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40984_41041,(0),null);
var cs_41043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40984_41041,(1),null);
var cs_41044__$1 = (function (){var G__40985 = cs_41043;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40985) : cljs.core.deref.call(null,G__40985));
})();
var seq__40986_41045 = cljs.core.seq(cs_41044__$1);
var chunk__40987_41046 = null;
var count__40988_41047 = (0);
var i__40989_41048 = (0);
while(true){
if((i__40989_41048 < count__40988_41047)){
var vec__40990_41049 = chunk__40987_41046.cljs$core$IIndexed$_nth$arity$2(null,i__40989_41048);
var id_41050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990_41049,(0),null);
var c_41051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990_41049,(1),null);
if(cljs.core.truth_(c_41051.shouldComponentUpdate(c_41051.props,c_41051.state))){
c_41051.forceUpdate();
} else {
}

var G__41052 = seq__40986_41045;
var G__41053 = chunk__40987_41046;
var G__41054 = count__40988_41047;
var G__41055 = (i__40989_41048 + (1));
seq__40986_41045 = G__41052;
chunk__40987_41046 = G__41053;
count__40988_41047 = G__41054;
i__40989_41048 = G__41055;
continue;
} else {
var temp__4126__auto___41056 = cljs.core.seq(seq__40986_41045);
if(temp__4126__auto___41056){
var seq__40986_41057__$1 = temp__4126__auto___41056;
if(cljs.core.chunked_seq_QMARK_(seq__40986_41057__$1)){
var c__4563__auto___41058 = cljs.core.chunk_first(seq__40986_41057__$1);
var G__41059 = cljs.core.chunk_rest(seq__40986_41057__$1);
var G__41060 = c__4563__auto___41058;
var G__41061 = cljs.core.count(c__4563__auto___41058);
var G__41062 = (0);
seq__40986_41045 = G__41059;
chunk__40987_41046 = G__41060;
count__40988_41047 = G__41061;
i__40989_41048 = G__41062;
continue;
} else {
var vec__40991_41063 = cljs.core.first(seq__40986_41057__$1);
var id_41064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40991_41063,(0),null);
var c_41065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40991_41063,(1),null);
if(cljs.core.truth_(c_41065.shouldComponentUpdate(c_41065.props,c_41065.state))){
c_41065.forceUpdate();
} else {
}

var G__41066 = cljs.core.next(seq__40986_41057__$1);
var G__41067 = null;
var G__41068 = (0);
var G__41069 = (0);
seq__40986_41045 = G__41066;
chunk__40987_41046 = G__41067;
count__40988_41047 = G__41068;
i__40989_41048 = G__41069;
continue;
}
} else {
}
}
break;
}

var G__41070 = seq__40980_41037;
var G__41071 = chunk__40981_41038;
var G__41072 = count__40982_41039;
var G__41073 = (i__40983_41040 + (1));
seq__40980_41037 = G__41070;
chunk__40981_41038 = G__41071;
count__40982_41039 = G__41072;
i__40983_41040 = G__41073;
continue;
} else {
var temp__4126__auto___41074 = cljs.core.seq(seq__40980_41037);
if(temp__4126__auto___41074){
var seq__40980_41075__$1 = temp__4126__auto___41074;
if(cljs.core.chunked_seq_QMARK_(seq__40980_41075__$1)){
var c__4563__auto___41076 = cljs.core.chunk_first(seq__40980_41075__$1);
var G__41077 = cljs.core.chunk_rest(seq__40980_41075__$1);
var G__41078 = c__4563__auto___41076;
var G__41079 = cljs.core.count(c__4563__auto___41076);
var G__41080 = (0);
seq__40980_41037 = G__41077;
chunk__40981_41038 = G__41078;
count__40982_41039 = G__41079;
i__40983_41040 = G__41080;
continue;
} else {
var vec__40992_41081 = cljs.core.first(seq__40980_41075__$1);
var path_41082__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40992_41081,(0),null);
var cs_41083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40992_41081,(1),null);
var cs_41084__$1 = (function (){var G__40993 = cs_41083;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40993) : cljs.core.deref.call(null,G__40993));
})();
var seq__40994_41085 = cljs.core.seq(cs_41084__$1);
var chunk__40995_41086 = null;
var count__40996_41087 = (0);
var i__40997_41088 = (0);
while(true){
if((i__40997_41088 < count__40996_41087)){
var vec__40998_41089 = chunk__40995_41086.cljs$core$IIndexed$_nth$arity$2(null,i__40997_41088);
var id_41090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40998_41089,(0),null);
var c_41091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40998_41089,(1),null);
if(cljs.core.truth_(c_41091.shouldComponentUpdate(c_41091.props,c_41091.state))){
c_41091.forceUpdate();
} else {
}

var G__41092 = seq__40994_41085;
var G__41093 = chunk__40995_41086;
var G__41094 = count__40996_41087;
var G__41095 = (i__40997_41088 + (1));
seq__40994_41085 = G__41092;
chunk__40995_41086 = G__41093;
count__40996_41087 = G__41094;
i__40997_41088 = G__41095;
continue;
} else {
var temp__4126__auto___41096__$1 = cljs.core.seq(seq__40994_41085);
if(temp__4126__auto___41096__$1){
var seq__40994_41097__$1 = temp__4126__auto___41096__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40994_41097__$1)){
var c__4563__auto___41098 = cljs.core.chunk_first(seq__40994_41097__$1);
var G__41099 = cljs.core.chunk_rest(seq__40994_41097__$1);
var G__41100 = c__4563__auto___41098;
var G__41101 = cljs.core.count(c__4563__auto___41098);
var G__41102 = (0);
seq__40994_41085 = G__41099;
chunk__40995_41086 = G__41100;
count__40996_41087 = G__41101;
i__40997_41088 = G__41102;
continue;
} else {
var vec__40999_41103 = cljs.core.first(seq__40994_41097__$1);
var id_41104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999_41103,(0),null);
var c_41105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999_41103,(1),null);
if(cljs.core.truth_(c_41105.shouldComponentUpdate(c_41105.props,c_41105.state))){
c_41105.forceUpdate();
} else {
}

var G__41106 = cljs.core.next(seq__40994_41097__$1);
var G__41107 = null;
var G__41108 = (0);
var G__41109 = (0);
seq__40994_41085 = G__41106;
chunk__40995_41086 = G__41107;
count__40996_41087 = G__41108;
i__40997_41088 = G__41109;
continue;
}
} else {
}
}
break;
}

var G__41110 = cljs.core.next(seq__40980_41075__$1);
var G__41111 = null;
var G__41112 = (0);
var G__41113 = (0);
seq__40980_41037 = G__41110;
chunk__40981_41038 = G__41111;
count__40982_41039 = G__41112;
i__40983_41040 = G__41113;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$181,true);

var G__41000 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41000) : cljs.core.deref.call(null,G__41000));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$182))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$181,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$182,false);

if(cljs.core.contains_QMARK_((function (){var G__41001 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41001) : cljs.core.deref.call(null,G__41001));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__41002 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__41003 = (16);
return setTimeout(G__41002,G__41003);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__41004 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__41004);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__41005 = target;
return React.unmountComponentAtNode(G__41005);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__40918,map__40918__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__41115 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41115) : cljs.core.deref.call(null,G__41115));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__41117 = x;
if(G__41117){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__41117.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__41117.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__41117);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__41117);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){


var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){


var key = (((function (){var G__41128 = cursor;
if(G__41128){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__41128.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__41128.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__41128);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__41128);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__41129 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__41129) : om.core.path.call(null,G__41129));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$182,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__41132 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41132) : f.call(null,G__41132));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__41133 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41133) : f.call(null,G__41133));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__41136 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41136) : f.call(null,G__41136));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__41137 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41137) : f.call(null,G__41137));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
