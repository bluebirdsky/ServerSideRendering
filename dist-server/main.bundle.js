!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}({0:function(e,t,n){e.exports=n("aVAX")},"02xY":function(e,t){e.exports=require("@angular/forms")},"6d7x":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("wp5R"),r=function(){function e(e){this.metaService=e,this.title="page 3"}return e.prototype.ngOnInit=function(){this.metaService.updateTag({property:"og:title",content:"title page 3"}),this.metaService.updateTag({property:"og:description",content:"Description page 3"}),this.metaService.updateTag({property:"og:image",content:"https://pillartechnology.com/dist/assets/work/connected-car-cs.jpg"})},e.ctorParameters=function(){return[{type:o.Meta}]},e}();t.Page3Component=r},"8wGh":function(e,t){e.exports=require("@angular/animations/browser")},A7Ap:function(e,t){e.exports=require("@angular/router")},ASwt:function(e,t){e.exports=require("@angular/platform-server")},ATKg:function(e,t,n){"use strict";function o(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),p.\u0275ted(null,["\n  ","\n"])),(e()(),p.\u0275ted(null,["\n"]))],null,function(e,t){e(t,1,0,t.component.title)})}function r(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"app-root",[],null,null,null,o,t.RenderType_Page2Component)),p.\u0275did(114688,null,0,u.Page2Component,[i.Meta],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var l=n("DH9x"),p=n("OQ0P"),u=n("flQm"),i=n("wp5R"),a=[l.styles];t.RenderType_Page2Component=p.\u0275crt({encapsulation:0,styles:a,data:{}}),t.View_Page2Component_0=o,t.View_Page2Component_Host_0=r,t.Page2ComponentNgFactory=p.\u0275ccf("app-root",u.Page2Component,r,{},{},[])},DH9x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=[""]},ECCM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("wp5R"),r=function(){function e(e){this.metaService=e,this.title="app works!"}return e.prototype.ngOnInit=function(){this.metaService.updateTag({property:"og:title",content:"title"}),this.metaService.updateTag({property:"og:description",content:"Description"}),this.metaService.updateTag({property:"og:image",content:"https://pillartechnology.com/dist/assets/work/connected-car-cs.jpg"})},e.ctorParameters=function(){return[{type:o.Meta}]},e}();t.HomeComponent=r},EXGM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e}();t.ServerAppModule=o},"Hq/i":function(e,t){e.exports=require("@angular/platform-browser/animations")},Ir0Z:function(e,t){e.exports=require("@angular/common/http")},JdMA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=[""]},LDkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("OQ0P"),r=n("EXGM"),l=n("wQAS"),p=n("ZErz"),u=n("ATKg"),i=n("y0C7"),a=n("q4dy"),d=n("yv0u"),c=n("wp5R"),s=n("ASwt"),m=n("8wGh"),f=n("Hq/i"),g=n("f9NF"),y=n("Ir0Z"),C=n("l0JX"),R=n("02xY"),M=n("A7Ap"),A=n("ECCM"),_=n("flQm"),v=n("6d7x"),P=n("aR8+");t.ServerAppModuleNgFactory=o.\u0275cmf(r.ServerAppModule,[l.AppComponent],function(e){return o.\u0275mod([o.\u0275mpd(512,o.ComponentFactoryResolver,o.\u0275CodegenComponentFactoryResolver,[[8,[p.HomeComponentNgFactory,u.Page2ComponentNgFactory,i.Page3ComponentNgFactory,a.AppComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.\u0275mpd(5120,o.LOCALE_ID,o.\u0275m,[[3,o.LOCALE_ID]]),o.\u0275mpd(4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID]),o.\u0275mpd(5120,o.IterableDiffers,o.\u0275k,[]),o.\u0275mpd(5120,o.KeyValueDiffers,o.\u0275l,[]),o.\u0275mpd(4608,c.DomSanitizer,c.\u0275e,[d.DOCUMENT]),o.\u0275mpd(6144,o.Sanitizer,null,[c.DomSanitizer]),o.\u0275mpd(4608,c.HAMMER_GESTURE_CONFIG,c.HammerGestureConfig,[]),o.\u0275mpd(5120,c.EVENT_MANAGER_PLUGINS,function(e,t,n,o){return[new c.\u0275DomEventsPlugin(e),new c.\u0275KeyEventsPlugin(t),new c.\u0275HammerGesturesPlugin(n,o)]},[d.DOCUMENT,d.DOCUMENT,d.DOCUMENT,c.HAMMER_GESTURE_CONFIG]),o.\u0275mpd(4608,c.EventManager,c.EventManager,[c.EVENT_MANAGER_PLUGINS,o.NgZone]),o.\u0275mpd(135680,c.\u0275DomSharedStylesHost,c.\u0275DomSharedStylesHost,[d.DOCUMENT]),o.\u0275mpd(4608,c.\u0275DomRendererFactory2,c.\u0275DomRendererFactory2,[c.EventManager,c.\u0275DomSharedStylesHost]),o.\u0275mpd(4608,s.\u0275b,s.\u0275b,[c.DOCUMENT,[2,c.\u0275TRANSITION_ID]]),o.\u0275mpd(6144,c.\u0275SharedStylesHost,null,[s.\u0275b]),o.\u0275mpd(4608,s.\u0275ServerRendererFactory2,s.\u0275ServerRendererFactory2,[o.NgZone,c.DOCUMENT,c.\u0275SharedStylesHost]),o.\u0275mpd(4608,m.AnimationDriver,m.\u0275NoopAnimationDriver,[]),o.\u0275mpd(5120,m.\u0275AnimationStyleNormalizer,f.\u0275d,[]),o.\u0275mpd(4608,m.\u0275AnimationEngine,f.\u0275b,[m.AnimationDriver,m.\u0275AnimationStyleNormalizer]),o.\u0275mpd(5120,o.RendererFactory2,s.\u0275a,[s.\u0275ServerRendererFactory2,m.\u0275AnimationEngine,o.NgZone]),o.\u0275mpd(4352,o.Testability,null,[]),o.\u0275mpd(4608,c.Meta,c.Meta,[d.DOCUMENT]),o.\u0275mpd(4608,c.Title,c.Title,[d.DOCUMENT]),o.\u0275mpd(4608,g.BrowserXhr,s.\u0275c,[]),o.\u0275mpd(4608,g.ResponseOptions,g.BaseResponseOptions,[]),o.\u0275mpd(4608,g.XSRFStrategy,s.\u0275d,[]),o.\u0275mpd(4608,g.XHRBackend,g.XHRBackend,[g.BrowserXhr,g.ResponseOptions,g.XSRFStrategy]),o.\u0275mpd(4608,g.RequestOptions,g.BaseRequestOptions,[]),o.\u0275mpd(5120,g.Http,s.\u0275e,[g.XHRBackend,g.RequestOptions]),o.\u0275mpd(4608,y.HttpXsrfTokenExtractor,y.\u0275g,[d.DOCUMENT,o.PLATFORM_ID,y.\u0275e]),o.\u0275mpd(4608,y.\u0275h,y.\u0275h,[y.HttpXsrfTokenExtractor,y.\u0275f]),o.\u0275mpd(5120,y.HTTP_INTERCEPTORS,function(e){return[e]},[y.\u0275h]),o.\u0275mpd(4608,y.XhrFactory,s.\u0275c,[]),o.\u0275mpd(4608,y.HttpXhrBackend,y.HttpXhrBackend,[y.XhrFactory]),o.\u0275mpd(6144,y.HttpBackend,null,[y.HttpXhrBackend]),o.\u0275mpd(5120,y.HttpHandler,s.\u0275f,[y.HttpBackend,[2,y.HTTP_INTERCEPTORS]]),o.\u0275mpd(4608,y.HttpClient,y.HttpClient,[y.HttpHandler]),o.\u0275mpd(4608,y.\u0275d,y.\u0275d,[]),o.\u0275mpd(4608,C.AnimationBuilder,f.\u0275BrowserAnimationBuilder,[o.RendererFactory2,c.DOCUMENT]),o.\u0275mpd(4608,R.\u0275i,R.\u0275i,[]),o.\u0275mpd(5120,M.ActivatedRoute,M.\u0275f,[M.Router]),o.\u0275mpd(4608,M.NoPreloading,M.NoPreloading,[]),o.\u0275mpd(6144,M.PreloadingStrategy,null,[M.NoPreloading]),o.\u0275mpd(135680,M.RouterPreloader,M.RouterPreloader,[M.Router,o.NgModuleFactoryLoader,o.Compiler,o.Injector,M.PreloadingStrategy]),o.\u0275mpd(4608,M.PreloadAllModules,M.PreloadAllModules,[]),o.\u0275mpd(5120,M.ROUTER_INITIALIZER,M.\u0275i,[M.\u0275g]),o.\u0275mpd(5120,o.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[M.ROUTER_INITIALIZER]),o.\u0275mpd(512,d.CommonModule,d.CommonModule,[]),o.\u0275mpd(1024,o.ErrorHandler,c.\u0275a,[]),o.\u0275mpd(1024,o.NgProbeToken,function(){return[M.\u0275b()]},[]),o.\u0275mpd(512,M.\u0275g,M.\u0275g,[o.Injector]),o.\u0275mpd(256,o.APP_ID,"my-app-id",[]),o.\u0275mpd(2048,c.\u0275TRANSITION_ID,null,[o.APP_ID]),o.\u0275mpd(1024,o.APP_INITIALIZER,function(e,t,n,o,r,l){return[c.\u0275c(e,t),M.\u0275h(n),c.\u0275f(o,r,l)]},[[2,c.NgProbeToken],[2,o.NgProbeToken],M.\u0275g,c.\u0275TRANSITION_ID,d.DOCUMENT,o.Injector]),o.\u0275mpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.\u0275mpd(131584,o.\u0275e,o.\u0275e,[o.NgZone,o.\u0275Console,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.\u0275mpd(2048,o.ApplicationRef,null,[o.\u0275e]),o.\u0275mpd(512,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.\u0275mpd(512,c.BrowserModule,c.BrowserModule,[[3,c.BrowserModule]]),o.\u0275mpd(512,g.HttpModule,g.HttpModule,[]),o.\u0275mpd(512,y.HttpClientXsrfModule,y.HttpClientXsrfModule,[]),o.\u0275mpd(512,y.HttpClientModule,y.HttpClientModule,[]),o.\u0275mpd(512,f.NoopAnimationsModule,f.NoopAnimationsModule,[]),o.\u0275mpd(512,s.ServerModule,s.ServerModule,[]),o.\u0275mpd(512,R.\u0275ba,R.\u0275ba,[]),o.\u0275mpd(512,R.FormsModule,R.FormsModule,[]),o.\u0275mpd(1024,M.\u0275a,M.\u0275d,[[3,M.Router]]),o.\u0275mpd(512,M.UrlSerializer,M.DefaultUrlSerializer,[]),o.\u0275mpd(512,M.ChildrenOutletContexts,M.ChildrenOutletContexts,[]),o.\u0275mpd(256,M.ROUTER_CONFIGURATION,{},[]),o.\u0275mpd(1024,d.LocationStrategy,M.\u0275c,[d.PlatformLocation,[2,d.APP_BASE_HREF],M.ROUTER_CONFIGURATION]),o.\u0275mpd(512,d.Location,d.Location,[d.LocationStrategy]),o.\u0275mpd(512,o.Compiler,o.Compiler,[]),o.\u0275mpd(512,o.NgModuleFactoryLoader,o.SystemJsNgModuleLoader,[o.Compiler,[2,o.SystemJsNgModuleLoaderConfig]]),o.\u0275mpd(1024,M.ROUTES,function(){return[[{path:"",component:A.HomeComponent},{path:"page2",component:_.Page2Component},{path:"page2/:Id",component:v.Page3Component},{path:"**",redirectTo:""}]]},[]),o.\u0275mpd(1024,M.Router,M.\u0275e,[o.ApplicationRef,M.UrlSerializer,M.ChildrenOutletContexts,d.Location,o.Injector,o.NgModuleFactoryLoader,o.Compiler,M.ROUTES,M.ROUTER_CONFIGURATION,[2,M.UrlHandlingStrategy],[2,M.RouteReuseStrategy]]),o.\u0275mpd(512,M.RouterModule,M.RouterModule,[[2,M.\u0275a],[2,M.Router]]),o.\u0275mpd(512,P.AppModule,P.AppModule,[]),o.\u0275mpd(512,r.ServerAppModule,r.ServerAppModule,[]),o.\u0275mpd(256,y.\u0275e,"XSRF-TOKEN",[]),o.\u0275mpd(256,y.\u0275f,"X-XSRF-TOKEN",[])])})},NhKt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=[""]},OQ0P:function(e,t){e.exports=require("@angular/core")},ZErz:function(e,t,n){"use strict";function o(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),p.\u0275ted(null,["\n  ","\n"])),(e()(),p.\u0275ted(null,["\n"]))],null,function(e,t){e(t,1,0,t.component.title)})}function r(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"app-root",[],null,null,null,o,t.RenderType_HomeComponent)),p.\u0275did(114688,null,0,u.HomeComponent,[i.Meta],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var l=n("JdMA"),p=n("OQ0P"),u=n("ECCM"),i=n("wp5R"),a=[l.styles];t.RenderType_HomeComponent=p.\u0275crt({encapsulation:0,styles:a,data:{}}),t.View_HomeComponent_0=o,t.View_HomeComponent_Host_0=r,t.HomeComponentNgFactory=p.\u0275ccf("app-root",u.HomeComponent,r,{},{},[])},"aR8+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e}();t.AppModule=o},aVAX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("EXGM");t.ServerAppModule=o.ServerAppModule;var r=n("LDkm");t.ServerAppModuleNgFactory=r.ServerAppModuleNgFactory,t.LAZY_MODULE_MAP={}},f9NF:function(e,t){e.exports=require("@angular/http")},flQm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("wp5R"),r=function(){function e(e){this.metaService=e,this.title="page 2!"}return e.prototype.ngOnInit=function(){this.metaService.updateTag({property:"og:title",content:"title page 2"}),this.metaService.updateTag({property:"og:description",content:"Description page 2"}),this.metaService.updateTag({property:"og:image",content:"https://pillartechnology.com/dist/assets/work/connected-car-cs.jpg"})},e.ctorParameters=function(){return[{type:o.Meta}]},e}();t.Page2Component=r},foA4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=[""]},l0JX:function(e,t){e.exports=require("@angular/animations")},q4dy:function(e,t,n){"use strict";function o(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),p.\u0275did(212992,null,0,u.RouterOutlet,[u.ChildrenOutletContexts,p.ViewContainerRef,p.ComponentFactoryResolver,[8,null],p.ChangeDetectorRef],null,null),(e()(),p.\u0275ted(null,["\n"]))],function(e,t){e(t,1,0)},null)}function r(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"app-root",[],null,null,null,o,t.RenderType_AppComponent)),p.\u0275did(114688,null,0,i.AppComponent,[u.Router],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var l=n("NhKt"),p=n("OQ0P"),u=n("A7Ap"),i=n("wQAS"),a=[l.styles];t.RenderType_AppComponent=p.\u0275crt({encapsulation:0,styles:a,data:{}}),t.View_AppComponent_0=o,t.View_AppComponent_Host_0=r,t.AppComponentNgFactory=p.\u0275ccf("app-root",i.AppComponent,r,{},{},[])},wQAS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("A7Ap"),r=function(){function e(e){this.router=e,this.title="Test Angular Universal Application"}return e.prototype.ngOnInit=function(){this.router.events.subscribe(function(e){o.NavigationEnd})},e.ctorParameters=function(){return[{type:o.Router}]},e}();t.AppComponent=r},wp5R:function(e,t){e.exports=require("@angular/platform-browser")},y0C7:function(e,t,n){"use strict";function o(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),p.\u0275ted(null,["\n  ","\n"])),(e()(),p.\u0275ted(null,["\n"]))],null,function(e,t){e(t,1,0,t.component.title)})}function r(e){return p.\u0275vid(0,[(e()(),p.\u0275eld(0,null,null,1,"app-root",[],null,null,null,o,t.RenderType_Page3Component)),p.\u0275did(114688,null,0,u.Page3Component,[i.Meta],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var l=n("foA4"),p=n("OQ0P"),u=n("6d7x"),i=n("wp5R"),a=[l.styles];t.RenderType_Page3Component=p.\u0275crt({encapsulation:0,styles:a,data:{}}),t.View_Page3Component_0=o,t.View_Page3Component_Host_0=r,t.Page3ComponentNgFactory=p.\u0275ccf("app-root",u.Page3Component,r,{},{},[])},yv0u:function(e,t){e.exports=require("@angular/common")}}));