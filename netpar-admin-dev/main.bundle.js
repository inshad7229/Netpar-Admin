webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__ = __webpack_require__("../../../../ngx-croppie/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["b" /* NgxCroppieModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <!-- <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav> -->\n        <p class=\"copyright pull-right\">\n            &copy; {{test2.split('-')[0]}} <a href=\"javascript:void(0);\">X Billion Tech Lab</a>  Private Limited. All Rights Reserved.\n\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.test2 = this.test.toISOString();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse header-sec\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/home\" class=\"btn btn-white\">\n                        <i class=\"material-icons\">account_box</i>\n                        <span class=\"\" *ngIf=\"this.appProvider.current.loginData\">Hi {{this.appProvider.current.loginData.firstName}}</span>\n                        <div class=\"ripple-container\"></div>\n                    </a>\n                </li>\n                <li class=\"cus-list\">\n                    <a routerLink=\"/home\" class=\"btn btn-yellow\">\n                        <i class=\"material-icons\" >email</i>\n                        <span class=\"\" *ngIf=\"this.appProvider.current.loginData\">  {{this.appProvider.current.loginData.email}}</span>\n                        <div class=\"ripple-container\"></div>\n                    </a>\n                     <a routerLink=\"/login\" class=\"btn btn-black\">\n                        <i class=\"material-icons\">power_settings_new</i>\n                        <span class=\"\">Sign Out</span>\n                        <div class=\"ripple-container\"></div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, element, appProvider) {
        this.element = element;
        this.appProvider = appProvider;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_app_provider__["a" /* AppProvider */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a routerLink=\"/admin\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"./assets/img/logo.png\"/>\n        </div>\n        Netpar\n    </a>\n</div>\n    <div class=\"sidebar-wrapper ps-container\" [perfect-scrollbar]=\"config\">\n        <div class=\"user\">\n            <div class=\"photo\"  *ngIf=\"appProvider.current.loginData\">\n                <img *ngIf=\"!appProvider.current.loginData.image\" src=\"./assets/img/avatar1.jpg\">\n                <img *ngIf=\"appProvider.current.loginData.image\" [src]=\"appProvider.current.loginData.image\">\n            </div>\n            <div class=\"photo\"  *ngIf=\"!appProvider.current.loginData\">\n                <img src=\"./assets/img/avatar1.jpg\">\n            </div>\n            <div class=\"info\">\n                <a class=\"\" data-toggle=\"collapse\" href=\"#collapseExample\">\n                    <span *ngIf=\"appProvider.current.loginData\">\n                        {{appProvider.current.loginData.firstName}}  {{appProvider.current.loginData.lastName}}\n                        <b class=\"caret\"></b>\n                    </span>\n                </a>\n                <div class=\"collapse\" id=\"collapseExample\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\">\n                            <a routerLink=\"/profile\">\n                                <span class=\"sidebar-mini\">MP</span>\n                                <span class=\"sidebar-normal\">My Profile</span>\n                            </a>\n                        </li>\n                       <!--<li routerLinkActive=\"active\">\n                            <a routerLink=\"/edit-profile\">\n                                <span class=\"sidebar-mini\">EP</span>\n                                <span class=\"sidebar-normal\">Edit Profile</span>\n                            </a>\n                        </li> -->\n                        <!-- <li>\n                            <a href=\"javascript:void(0)\">\n                                <span class=\"sidebar-mini\">S</span>\n                                <span class=\"sidebar-normal\">Settings</span>\n                            </a>\n                        </li> -->\n                    </ul>\n                </div>\n                </div>\n            </div>\n      \n\n        <div class=\"nav-container\">\n            <ul class=\"nav\">\n               \n                <li>\n                    <a data-toggle=\"collapse\" href=\"#Components\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">account_circle</i>\n                        <p>Administrator<b class=\"caret\"></b></p>\n                    </a>\n                    <div class=\"collapse {{adminPath}}\" id=\"Components\" aria-expanded=\"true\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/home\">\n                                    <span class=\"sidebar-mini\">VE</span>\n                                    <span class=\"sidebar-normal\">View/Edit</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/edit-admin\"  (click)=\"goToAddAdmin()\">\n                                    <span class=\"sidebar-mini\">A</span>\n                                    <span class=\"sidebar-normal\">Add</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <li>\n                    <a data-toggle=\"collapse\" href=\"#template\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>Templates<b class=\"caret\"></b></p>\n                    </a>\n                    <div class=\"collapse {{template}}\" id=\"template\" aria-expanded=\"false\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/section-templates\">\n                                    <span class=\"sidebar-mini\">ST</span>\n                                    <span class=\"sidebar-normal\">Section Templates</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/category-templates\">\n                                    <span class=\"sidebar-mini\">CT</span>\n                                    <span class=\"sidebar-normal\">Category Templates</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/list-templates\">\n                                    <span class=\"sidebar-mini\">LT</span>\n                                    <span class=\"sidebar-normal\">Listing view Templates</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/homepage-templates\">\n                                    <span class=\"sidebar-mini\">HT</span>\n                                    <span class=\"sidebar-normal\">Homepage Templates</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n\n                <li>\n                    <a data-toggle=\"collapse\" href=\"#section\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">apps</i>\n                        <p>Section<b class=\"caret\"></b></p>\n                    </a>\n                    <div class=\"collapse {{sectionPath}}\" id=\"section\" aria-expanded=\"false\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/view-section\">\n                                    <span class=\"sidebar-mini\">VS</span>\n                                    <span class=\"sidebar-normal\">View Section</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/add-section\" (click)=\"onAction()\">\n                                    <span class=\"sidebar-mini\">AS</span>\n                                    <span class=\"sidebar-normal\" >Add Section</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" (click)=\"onAction()\">\n                                <a routerLink=\"/add-category\">\n                                    <span class=\"sidebar-mini\">AC</span>\n                                    <span class=\"sidebar-normal\" >Add Category</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" (click)=\"onAction()\">\n                                <a routerLink=\"/add-subcategory\">\n                                    <span class=\"sidebar-mini\">ASC</span>\n                                    <span class=\"sidebar-normal\" >Add Subcategory</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                \n                <li>\n                    <a data-toggle=\"collapse\" href=\"#description\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">description</i>\n                        <p>Content<b class=\"caret\"></b></p>\n                    </a>\n                    <div class=\"collapse {{content}}\" id=\"description\" aria-expanded=\"false\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/view-content\">\n                                    <span class=\"sidebar-mini\">VC</span>\n                                    <span class=\"sidebar-normal\">View Content</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/add-content\">\n                                    <span class=\"sidebar-mini\">AC</span>\n                                    <span class=\"sidebar-normal\">Add Content</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/comment\">\n                                    <span class=\"sidebar-mini\">CM</span>\n                                    <span class=\"sidebar-normal\">Comment Management</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n\n                </li>\n                <li routerLinkActive=\"active\" >\n                    <a routerLink=\"/user-contribution\">\n                        <i class=\"material-icons\">group</i>\n                        <p>User contribution</p>\n                    </a>\n                </li>\n                <li routerLinkActive=\"active\" >\n                    <a routerLink=\"/homepage\">\n                        <i class=\"material-icons\">home</i>\n                        <p>Homepage</p>\n                    </a>\n                </li>\n                <li routerLinkActive=\"active\" >\n                    <a routerLink=\"/user\">\n                        <i class=\"material-icons\">person</i>\n                        <p>User</p>\n                    </a>\n                </li>\n                <li>\n                    <a data-toggle=\"collapse\" href=\"#analytics\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">show_chart</i>\n                        <p>Platform Analytics<b class=\"caret\"></b></p>\n                    </a>\n                    <div class=\"collapse {{analaytics}}\" id=\"analytics\" aria-expanded=\"false\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/section-analytics\">\n                                    <span class=\"sidebar-mini\">SA</span>\n                                    <span class=\"sidebar-normal\">Section Analytics</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/article-analytics\">\n                                    <span class=\"sidebar-mini\">AA</span>\n                                    <span class=\"sidebar-normal\">Article Analytics</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/element-analytics\">\n                                    <span class=\"sidebar-mini\">EA</span>\n                                    <span class=\"sidebar-normal\">Element Analytics</span>\n                                </a>\n                            </li>\n                            <li routerLinkActive=\"active\" >\n                                <a routerLink=\"/template-analytics\">\n                                    <span class=\"sidebar-mini\">CT</span>\n                                    <span class=\"sidebar-normal\">Templates Analytics</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n\n                </li>\n                \n\n            </ul>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    { path: 'home', title: 'Administrator', icon: 'dashboard', class: '' },
    { path: 'admin', title: 'Template', icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'Section', icon: 'person', class: '' },
    { path: 'table-list', title: 'Content', icon: 'content_paste', class: '' },
    { path: 'typography', title: 'User contribution', icon: 'library_books', class: '' },
    { path: 'icons', title: 'Homepage', icon: 'bubble_chart', class: '' },
    { path: 'maps', title: 'User', icon: 'location_on', class: '' },
    { path: 'notifications', title: 'Platform Analytics', icon: 'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];
var SidebarComponent = (function () {
    function SidebarComponent(route, activeLink, appProvider) {
        this.route = route;
        this.activeLink = activeLink;
        this.appProvider = appProvider;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        //alert(this.route.url)
        this.appProvider.current.adminPageFlag;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        if (this.route.url == "/home" || this.route.url == "/edit-admin") {
            this.adminPath = "in";
            this.sectionPath = ' ';
            this.content = ' ';
            this.analaytics = ' ';
            this.template = ' ';
        }
        else if (this.route.url == "/view-section" || this.route.url == "/add-section" || this.route.url == "/add-category" || this.route.url == "/add-subcategory") {
            this.adminPath = " ";
            this.sectionPath = 'in';
            this.content = ' ';
            this.analaytics = ' ';
            this.template = ' ';
        }
        else if (this.route.url == '/add-content' || this.route.url == '/view-content' || this.route.url == '/comment') {
            this.adminPath = " ";
            this.sectionPath = ' ';
            this.content = 'in';
            this.analaytics = ' ';
            this.template = ' ';
            // code...
        }
        else if (this.route.url == '/section-analytics' || this.route.url == '/template-analytics' || this.route.url == '/element-analytics' || this.route.url == '/article-analytics') {
            // code...
            this.adminPath = "";
            this.sectionPath = ' ';
            this.content = ' ';
            this.analaytics = 'in';
            this.template = ' ';
        }
        else if (this.route.url == '/section-templates' || this.route.url == '/category-templates' || this.route.url == '/list-templates' || this.route.url == '/homepage-templates') {
            // code...
            this.adminPath = "";
            this.sectionPath = ' ';
            this.content = ' ';
            this.analaytics = ' ';
            this.template = 'in';
        }
        else {
            this.adminPath = " ";
            this.sectionPath = ' ';
            this.content = ' ';
            this.analaytics = ' ';
            this.template = ' ';
        }
    };
    SidebarComponent.prototype.goToAddAdmin = function () {
        this.appProvider.current.adminPageFlag = 'foradd';
        //this.route.navigate(['/edit-admin'],{ skipLocationChange: true });
    };
    SidebarComponent.prototype.goToAddSection = function () {
        this.appProvider.current.sectionAddFlag = 'foradd';
    };
    SidebarComponent.prototype.goToAddCategory = function () {
        this.appProvider.current.categoryAddFlag = 'foradd';
    };
    SidebarComponent.prototype.goToAddSubcategory = function () {
        this.appProvider.current.SubcategoryFlag = 'foradd';
    };
    SidebarComponent.prototype.onAction = function () {
        this.appProvider.current.actionFlag = 'menu';
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterLinkActive */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterLinkActive */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterLinkActive */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_provider__["a" /* AppProvider */]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-category/add-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                  <form class=\"example-form\" [formGroup]=\"addCategoryForm\">\n                    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Add Category</h4>\n                                <div class=\"cus-form\">\n                                    <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-select placeholder=\"Select State\">\n                                            <md-option value=\"1\"> State1 </md-option>\n                                            <md-option value=\"2\"> State2 </md-option>\n                                            <md-option value=\"3\"> State3 </md-option>\n                                            <md-option value=\"4\"> State4 </md-option>\n                                        </md-select>\n                                    </div> -->\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 abc\">\n                                        <md-select placeholder=\"Select Language\" [formControl]=\"addCategoryForm.controls['language']\" name=\"language\" [(ngModel)]=\"addCategoryRequest.language\">\n                                            <md-option  *ngFor=\"let lang of stringResource.language\" [value]=\"lang.language\">{{lang.language}}</md-option>\n                                           <!--  <md-option value=\"2\"> Language2 </md-option>\n                                            <md-option value=\"3\"> Language3 </md-option>\n                                            <md-option value=\"4\"> Language4 </md-option> -->\n                                        </md-select>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" >\n\t                                    <md-select placeholder=\"Select Section *\" [formControl]=\"addCategoryForm.controls['sectionName']\" name=\"sectionName\" [(ngModel)]=\"addCategoryRequest.sectionId\">\n\t                                        <md-option  *ngFor=\"let section of sections\"  [value]=\"section._id\" > {{section.sectionName}}</md-option>\n\t                                       <!--  <md-option value=\"2\"> Section2 </md-option>\n\t                                        <md-option value=\"3\"> Section3 </md-option>\n\t                                        <md-option value=\"4\"> Section4 </md-option> -->\n\t                                    </md-select>\n                                         <md-error  *ngIf=\"addCategoryForm.controls['sectionName'].hasError('required') && addCategoryForm.controls['sectionName'].touched\">\n                                                       Name of Category is <strong>required</strong>\n                                            </md-error>\n\t                                </div>\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Name of Category *\" type=\"text\" [formControl]=\"addCategoryForm.controls['categoryName']\" name=\"categoryName\" [(ngModel)]=\"addCategoryRequest.categoryName\">\n                                             <md-error  *ngIf=\"addCategoryForm.controls['categoryName'].hasError('required') && addCategoryForm.controls['categoryName'].touched\">\n                                                       Name of Category is <strong>required</strong>\n                                            </md-error>\n                                            <md-error  *ngIf=\"addCategoryForm.controls['categoryName'].hasError('pattern')\">\n                                                       only alphabets are acceptable \n                                            </md-error>\n                                            <md-error  *ngIf=\"addCategoryForm.controls['categoryName'].hasError('maxlength')\">\n                                                       max length is 30\n                                            </md-error> \n                                        </md-form-field>\n                                    </div>\n                                    \n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>Category Display Photo:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 text-center\">\n                                            <p> Thumbnail Picture </p>\n                                            <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                                 <ngx-croppie *ngIf=\"croppieImageThumbnail\" #ngxCroppie [croppieOptions]=\"croppieOptionsThumbnail\" [imageUrl]=\"croppieImageThumbnail\" (result)=\"newImageResultFromCroppieThumbnail($event)\"></ngx-croppie>\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img alt=\"...\"  [src]=\"imageToDisplayThumbnail\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                     <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppieThumbnail(myForm)\">\n                                                    Save\n                                                    <div class=\"ripple-container\"></div>\n                                                    </span>    \n                                                    <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEditThumbnail()\">\n                                                        <i class=\"fa fa-times\"></i> Cancel\n                                                        <div class=\"ripple-container\"></div>\n                                                    </span>\n                                                </div>\n                                                <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                    <span class=\"fileinput-new\">Change</span>\n                                                    <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUploadThumbnail (change)=\"imageUploadEventThumbnail($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"form-group col-md-6 col-sm-6 col-xs-12 text-center\">\n                                            <p> Horizontal Picture </p>\n                                            <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                                 <ngx-croppie *ngIf=\"croppieImageHorigontal\" #ngxCroppie [croppieOptions]=\"croppieOptionsHorigontal\" [imageUrl]=\"croppieImageHorigontal\" (result)=\"newImageResultFromCroppieHorigontal($event)\"></ngx-croppie>\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img alt=\"...\"  [src]=\"imageToDisplayHorigontal\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                     <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppieHorigontal(myForm)\">\n                                                    Save\n                                                    <div class=\"ripple-container\"></div>\n                                                    </span>    \n                                                    <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEditHorigontal()\">\n                                                        <i class=\"fa fa-times\"></i> Cancel\n                                                        <div class=\"ripple-container\"></div>\n                                                    </span>\n                                                </div>\n                                                <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                    <span class=\"fileinput-new\">Change</span>\n                                                    <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUploadHorigontal (change)=\"imageUploadEventHorigontal($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Template and View Settings</h4>\n                                <div class=\"cus-form\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>Category View Template Applicable *:</legend>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-radio-group    [formControl]=\"addCategoryForm.controls['categoryView']\" name=\"categoryView\" [(ngModel)]=\"addCategoryRequest.categoryView\">\n                                                <md-radio-button name=\"yes1\" value=\"yes\" class=\"col-md-2 col-sm-2 col-xs-12\" >Yes</md-radio-button>\n                                                <md-radio-button name=\"no1\"  value=\"no\" class=\"col-md-2 col-sm-2 col-xs-12\">No</md-radio-button>\n                                            </md-radio-group>\n                                             <md-error  *ngIf=\"addCategoryForm.controls['categoryView'].hasError('required') && addCategoryForm.controls['categoryView'].touched\">\n                                                       Category View Template Applicable is <strong>required</strong>\n                                            </md-error>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                    <md-select placeholder=\"Choose Category Template Format\" [formControl]=\"addCategoryForm.controls['categoryFormat']\" name=\"categoryFormat\" [(ngModel)]=\"addCategoryRequest.categoryFormat\">\n\t                                        <md-option value=\"1\"> Template1 </md-option>\n\t                                        <md-option value=\"2\"> Template2 </md-option>\n\t                                        <md-option value=\"3\"> Template3 </md-option>\n\t                                        <md-option value=\"4\"> Template4 </md-option>\n\t                                    </md-select>\n\t                                </div>\n\n\t                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>Subcategory View Applicable *:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                             <md-radio-group    [formControl]=\"addCategoryForm.controls['subCategoryView']\" name=\"subCategoryView\" [(ngModel)]=\"addCategoryRequest.subCategoryView\">\n                                                <md-radio-button name=\"yes2\"  value=\"yes\" class=\"col-md-2 col-sm-2 col-xs-12\">Yes</md-radio-button>\n                                                <md-radio-button name=\"no2\"  value=\"no\" class=\"col-md-2 col-sm-2 col-xs-12\">No</md-radio-button>\n                                            </md-radio-group>\n                                            <md-error  *ngIf=\"addCategoryForm.controls['subCategoryView'].hasError('required') && addCategoryForm.controls['subCategoryView'].touched\">\n                                                       Subcategory View Applicable is <strong>required</strong>\n                                           </md-error>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>Listing View Applicable *:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                             <md-radio-group    [formControl]=\"addCategoryForm.controls['listView']\" name=\"listView\" [(ngModel)]=\"addCategoryRequest.listView\">\n                                                <md-radio-button name=\"yes3\"  value=\"yes\" class=\"col-md-2 col-sm-2 col-xs-12\">Yes</md-radio-button>\n                                                <md-radio-button name=\"no3\"  value=\"no\" class=\"col-md-2 col-sm-2 col-xs-12\">No</md-radio-button>\n                                            </md-radio-group>\n                                             <md-error  *ngIf=\"addCategoryForm.controls['listView'].hasError('required') && addCategoryForm.controls['listView'].touched\">\n                                                      Listing View Applicable is <strong>required</strong>\n                                           </md-error>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                    <md-select placeholder=\"Choose Listing View Template\" [formControl]=\"addCategoryForm.controls['listViewFormat']\" name=\"listViewFormat\" [(ngModel)]=\"addCategoryRequest.listViewFormat\">\n\t                                        <md-option value=\"1\"> Template1 </md-option>\n\t                                        <md-option value=\"2\"> Template2 </md-option>\n\t                                        <md-option value=\"3\"> Template3 </md-option>\n\t                                        <md-option value=\"4\"> Template4 </md-option>\n\t                                    </md-select>\n\t                                </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">User Contribution Form</h4>\n                                <div class=\"cus-form\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>User Contribution Form Applicable *:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                             <md-radio-group    [formControl]=\"addCategoryForm.controls['contributionForm']\" name=\"contributionForm\" [(ngModel)]=\"addCategoryRequest.contributionForm\">\n                                                <md-radio-button name=\"yes4\"  value=\"yes\" class=\"col-md-2 col-sm-2 col-xs-12\">Yes</md-radio-button>\n                                                <md-radio-button name=\"no4\"  value=\"no\" class=\"col-md-2 col-sm-2 col-xs-12\">No</md-radio-button>\n                                            </md-radio-group>.\n                                             <md-error  *ngIf=\"addCategoryForm.controls['contributionForm'].hasError('required') && addCategoryForm.controls['contributionForm'].touched\">\n                                                       User Contribution Form Applicable is <strong>required</strong>\n                                           </md-error>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Title of Form\" type=\"text\" [formControl]=\"addCategoryForm.controls['titleForm']\" name=\"titleForm\" [(ngModel)]=\"addCategoryRequest.titleForm\">\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                        <md-form-field>\n                                            <textarea mdInput placeholder=\"Guide Text of Form\" rows=\"5\" md-select-on-focus [formControl]=\"addCategoryForm.controls['guildTextForForm']\" name=\"guildTextForForm\" [(ngModel)]=\"addCategoryRequest.guildTextForForm\"></textarea>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                        <md-form-field>\n                                            <textarea mdInput placeholder=\"Guide Text for Media of Form\" rows=\"5\" md-select-on-focus [formControl]=\"addCategoryForm.controls['guildTextForMedia']\" name=\"guildTextForMedia\" [(ngModel)]=\"addCategoryRequest.guildTextForMedia\"></textarea>\n                                        </md-form-field>\n                                    </div>\n\n\n                                \n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Engagement Settings</h4>\n                                <div class=\"cus-form\">\n\n                                    \n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>User Engagement Buttons:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['userEngBtnLike']\" name=\"userEngBtnLike\" [(ngModel)]=\"addCategoryRequest.userEngBtnLike\">Like</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['userEngBtnShare']\" name=\"userEngBtnShare\" [(ngModel)]=\"addCategoryRequest.userEngBtnShare\">Share</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['userEngBtnComment']\" name=\"userEngBtnComment\" [(ngModel)]=\"addCategoryRequest.userEngBtnComment\">Comment</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['userEngBtnSave']\" name=\"userEngBtnSave\" [(ngModel)]=\"addCategoryRequest.userEngBtnSave\">Save</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['userEngBtnDownload']\" name=\"userEngBtnDownload\" [(ngModel)]=\"addCategoryRequest.userEngBtnDownload\">Download</md-checkbox>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend> Call to Action Buttons:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['callToActBtnApply']\" name=\"callToActBtnApply\" [(ngModel)]=\"addCategoryRequest.callToActBtnApply\">Apply</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['callToActBtnCallMe']\" name=\"callToActBtnCallMe\" [(ngModel)]=\"addCategoryRequest.callToActBtnCallMe\">Call Me Back</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['callToActBtnInterested']\" name=\"callToActBtnInterested\" [(ngModel)]=\"addCategoryRequest.callToActBtnInterested\">I'm Interested</md-checkbox>\n                                            <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\" [formControl]=\"addCategoryForm.controls['callToActBtnCall']\" name=\"callToActBtnCall\" [(ngModel)]=\"addCategoryRequest.callToActBtnCall\">Call</md-checkbox>\n                                        </div>\n                                    </div>\n                                \n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                        <button class=\"btn custom-btn\" (click)=\"onAddCategory()\" [disabled]=\"!addCategoryForm.valid\"> Submit </button>\n                    </div>\n\n                   </form>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-category/add-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-category/add-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__ = __webpack_require__("../../../../ngx-croppie/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_section_modal__ = __webpack_require__("../../../../../src/app/models/section.modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_section_service__ = __webpack_require__("../../../../../src/app/providers/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_saredResources__ = __webpack_require__("../../../../../src/app/models/saredResources.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddCategoryComponent = (function () {
    function AddCategoryComponent(router, fb, vcr, toastr, http, sectionService, appProvider) {
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.http = http;
        this.sectionService = sectionService;
        this.appProvider = appProvider;
        this.widthPx = '300';
        this.heightPx = '300';
        this.imageUrl = '';
        this.addCategoryRequest = new __WEBPACK_IMPORTED_MODULE_6__models_section_modal__["a" /* AddCategoryRequest */]();
        this.stringResource = new __WEBPACK_IMPORTED_MODULE_8__models_saredResources__["a" /* StringResource */]();
        this.addCategoryForm = fb.group({
            'sectionName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'categoryName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern('[a-zA-Z ]*')])],
            'categoryView': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'categoryFormat': [null],
            'subCategoryView': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'listView': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'listViewFormat': [null],
            'contributionForm': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'titleForm': [null],
            'guildTextForForm': [null],
            'guildTextForMedia': [null],
            'userEngBtnLike': [null],
            'userEngBtnShare': [null],
            'userEngBtnComment': [null],
            'userEngBtnSave': [null],
            'userEngBtnDownload': [null],
            'callToActBtnApply': [null],
            'callToActBtnCallMe': [null],
            'callToActBtnInterested': [null],
            'callToActBtnCall': [null],
            'language': [null]
        });
        this.toastr.setRootViewContainerRef(vcr);
    }
    Object.defineProperty(AddCategoryComponent.prototype, "imageToDisplayHorigontal", {
        get: function () {
            if (this.currentImageHorigontal) {
                return this.currentImageHorigontal;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCategoryComponent.prototype, "croppieOptionsHorigontal", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCategoryComponent.prototype, "imageToDisplayThumbnail", {
        get: function () {
            if (this.currentImageThumbnail) {
                return this.currentImageThumbnail;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCategoryComponent.prototype, "croppieOptionsThumbnail", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    AddCategoryComponent.prototype.ngOnInit = function () {
        $('.file-type').on('change', function (e) {
            // var tmppath = URL.createObjectURL(e.target.files[0]);
            // console.log($(this));
            // $(this).closest('.fileinput').find('img').attr('src',tmppath);
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });
        $('.file_remove').on('click', function () {
            // var a = $(this).closest('.fileinput').find('img').attr('src','./assets/img/placeholder5.png');
            // console.log(a);
            $(this).closest('.fileinput-exists').hide();
            $(this).closest('.fileinput').find('.fileinput-noexists').show();
        });
        if (this.appProvider.current.actionFlag == 'editCategory') {
            this.getSectionList();
            this.getCategoryData();
        }
        else {
            this.getSectionList();
        }
    };
    AddCategoryComponent.prototype.newImageResultFromCroppieHorigontal = function (img) {
        this.croppieImageHorigontal = img;
        console.log(this.croppieImageHorigontal);
    };
    AddCategoryComponent.prototype.saveImageFromCroppieHorigontal = function () {
        this.currentImageHorigontal = this.croppieImageHorigontal;
    };
    AddCategoryComponent.prototype.cancelCroppieEditHorigontal = function () {
        this.croppieImageHorigontal = '';
        this.currentImageHorigontal = '';
    };
    AddCategoryComponent.prototype.imageUploadEventHorigontal = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImageHorigontal = fr.result;
        };
        fr.readAsDataURL(file);
    };
    AddCategoryComponent.prototype.newImageResultFromCroppieThumbnail = function (img) {
        this.croppieImageThumbnail = img;
        console.log(this.croppieImageThumbnail);
    };
    AddCategoryComponent.prototype.saveImageFromCroppieThumbnail = function () {
        this.currentImageThumbnail = this.croppieImageThumbnail;
    };
    AddCategoryComponent.prototype.cancelCroppieEditThumbnail = function () {
        this.croppieImageThumbnail = '';
        this.currentImageThumbnail = '';
    };
    AddCategoryComponent.prototype.imageUploadEventThumbnail = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImageThumbnail = fr.result;
        };
        fr.readAsDataURL(file);
    };
    AddCategoryComponent.prototype.onAddCategory = function () {
        var _this = this;
        if (this.addCategoryRequest._id) {
            var localsection = this.sections.filter(function (arg) { return arg._id == _this.addCategoryRequest.sectionId; });
            this.addCategoryRequest.sectionName = localsection[0].sectionName;
            this.addCategoryRequest.thumbnailImage = this.currentImageThumbnail;
            this.addCategoryRequest.horigontalImage = this.currentImageHorigontal;
            this.sectionService.onEditCategory(this.addCategoryRequest)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/view-section'], { skipLocationChange: true });
                }
                console.log(JSON.stringify(data));
            }, function (error) {
                alert(error);
            });
        }
        else {
            var date = new Date().toISOString();
            console.log(date.split('T')[0]);
            var localsection = this.sections.filter(function (arg) { return arg._id == _this.addCategoryRequest.sectionId; });
            this.addCategoryRequest.sectionName = localsection[0].sectionName;
            this.addCategoryRequest.thumbnailImage = this.currentImageThumbnail;
            this.addCategoryRequest.horigontalImage = this.currentImageHorigontal;
            this.addCategoryRequest.status = true;
            this.addCategoryRequest.publishStatus = false;
            this.addCategoryRequest.deleteStatus = false;
            this.addCategoryRequest.updatedDate = null;
            this.addCategoryRequest.enableDisableDate = null;
            this.addCategoryRequest.publishUnbuplishDate = null;
            this.sectionService.onAddCategory(this.addCategoryRequest)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/view-section'], { skipLocationChange: true });
                }
                console.log(JSON.stringify(data));
            }, function (error) {
                alert(error);
            });
        }
    };
    AddCategoryComponent.prototype.getSectionList = function () {
        var _this = this;
        this.sectionService.onGetSection()
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.sections = data;
        }, function (error) {
            alert(error);
        });
    };
    AddCategoryComponent.prototype.getCategoryData = function () {
        var _this = this;
        this.sectionService.onGetSingleSCategoryData(this.appProvider.current.currentId)
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.addCategoryRequest = data.response[0];
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    return AddCategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ngxCroppie'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["a" /* NgxCroppieComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["a" /* NgxCroppieComponent */]) === "function" && _a || Object)
], AddCategoryComponent.prototype, "ngxCroppie", void 0);
AddCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-category',
        template: __webpack_require__("../../../../../src/app/dashboard/add-category/add-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-category/add-category.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControlDirective */], __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */]) === "function" && _h || Object])
], AddCategoryComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/add-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Add Content</h4>\n                                <div class=\"cus-form\">\n                                    <form class=\"example-form\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\">\n                                                <md-option value=\"1\"> Language1 </md-option>\n                                                <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option>\n                                            </md-select>\n                                        </div>\n\n                                    \t<div class=\"form-group col-md-4 col-sm-4 col-xs-12\">\n\t\t                                    <md-select placeholder=\"Select Section\">\n\t\t                                        <md-option value=\"1\"> Section1 </md-option>\n\t\t                                        <md-option value=\"2\"> Section2 </md-option>\n\t\t                                        <md-option value=\"3\"> Section3 </md-option>\n\t\t                                        <md-option value=\"4\"> Section4 </md-option>\n\t\t                                    </md-select>\n\t\t                                </div>\n\t\t                                <div class=\"form-group col-md-4 col-sm-4 col-xs-12\">\n\t\t                                    <md-select placeholder=\"Select Category\">\n\t\t                                        <md-option value=\"1\"> Category1 </md-option>\n\t\t                                        <md-option value=\"2\"> Category2 </md-option>\n\t\t                                        <md-option value=\"3\"> Category3 </md-option>\n\t\t                                        <md-option value=\"4\"> Category4 </md-option>\n\t\t                                    </md-select>\n\t\t                                </div>\n\t\t                                <div class=\"form-group col-md-4 col-sm-4 col-xs-12\">\n\t\t                                    <md-select placeholder=\"Select Sub-category\">\n\t\t                                        <md-option value=\"1\"> Sub-category1 </md-option>\n\t\t                                        <md-option value=\"2\"> Sub-category2 </md-option>\n\t\t                                        <md-option value=\"3\"> Sub-category3 </md-option>\n\t\t                                        <md-option value=\"4\"> Sub-category4 </md-option>\n\t\t                                    </md-select>\n\t\t                                </div>\n\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Add headline\" type=\"text\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Add tagline\" type=\"text\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                    \t\t<input type=\"text\" placeholder=\"Add tags\" class=\"selectize txtselectize\">\n                                        </div>\n\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        \t<md-form-field>\n\t\t\t\t\t\t\t\t\t\t\t  \t<input mdInput [mdDatepicker]=\"picker\" placeholder=\"Date of creation\" name=\"adc\" disabled=\"\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t\t\t  \t<md-datepicker #picker></md-datepicker>\n\t\t\t\t\t\t\t\t\t\t\t</md-form-field>\n\t\t\t\t\t\t\t\t\t\t</div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t                                    <md-select placeholder=\"Type of user\">\n                                                <md-option value=\"1\"> Platform User </md-option>\n\t\t                                        <md-option value=\"2\"> Section Administrator </md-option>\n                                                <md-option value=\"3\"> Content Writer </md-option>\n\t\t                                        <md-option value=\"4\"> Business User </md-option>\n\t\t                                    </md-select>\n\t\t                                </div>  \n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Search user\" type=\"text\">\n                                            </md-form-field>\n                                        </div>\n\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div id=\"email-builder\">\n                                                <div class=\"email-builder-content\">\n                                                   \n                                                    <div class=\"md-card\">\n                                                        <div class=\"md-card-content elements-list\">\n                                                            <h3 class=\"m-t-0\">Tools</h3>\n                                                            <ul>\n                                                                <li data-type=\"text\" (click)=\"addText()\"> \n                                                                    <i class=\"material-icons\"></i>\n                                                                    <span>Text</span>\n                                                                </li>\n                                                                <li data-type=\"image\" (click)=\"addImage()\">\n                                                                    <i class=\"material-icons\"></i>\n                                                                    <span>Image</span>\n                                                                </li>\n                                                                <li data-type=\"audio\" (click)=\"addAudio()\">\n                                                                    <i class=\"material-icons\">audiotrack</i>\n                                                                    <span>Audio</span>\n                                                                </li>\n                                                                <li data-type=\"video\" (click)=\"addVideo()\">\n                                                                    <i class=\"material-icons\">videocam</i>\n                                                                    <span>Video</span>\n                                                                </li>\n                                                                <li data-type=\"document\" (click)=\"addFile()\">\n                                                                    <i class=\"material-icons\">insert_drive_file</i>\n                                                                    <span>Document</span>\n                                                                </li>\n                                                                <li data-type=\"media\" (click)=\"addGrid()\">\n                                                                    <i class=\"material-icons\">view_array</i>\n                                                                    <span>Media Grid</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addApply()\">\n                                                                    <i class=\"icon-check\"></i>\n                                                                    <span>Apply</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addCall()\">\n                                                                    <i class=\"icon-call\"></i>\n                                                                    <span>Call</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addCallMe()\">\n                                                                    <i class=\"icon-callme\"></i>\n                                                                    <span>Call me back</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addIntrested()\">\n                                                                    <i class=\"icon-click\"></i>\n                                                                    <span>I'm Interested</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addlike()\">\n                                                                    <i class=\"icon-okay\"></i>\n                                                                    <span>Kadak</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addshare()\">\n                                                                    <i class=\"fa fa-share-alt\"></i>\n                                                                    <span>Share</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addcomment()\">\n                                                                    <i class=\"icon-msg\"></i>\n                                                                    <span>Comment</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addsave()\">\n                                                                    <i class=\"icon-badge\"></i>\n                                                                    <span>Save</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addownload()\">\n                                                                    <i class=\"icon-donload\"></i>\n                                                                    <span>Download</span>\n                                                                </li>\n                                                                <li data-type=\"apply\" (click)=\"addForm()\">\n                                                                    <i class=\"width-17 material-icons\">assignments</i>\n                                                                    <span>Form</span>\n                                                                </li>\n\n                                                            </ul>\n                                                            <button type=\"button\" class=\"btn btn-success full-width\">\n                                                                <i class=\"material-icons\">save</i>\n                                                                Save changes\n                                                            </button>\n                                                            <button type=\"button\" class=\"btn btn-danger full-width\">\n                                                                <i class=\"material-icons\">delete</i> \n                                                                Delete All Element\n                                                            </button>\n                                                        </div>\n                                                    </div>\n\n                                                    <div position-relative>\n                                                        <div class=\"builder\">\n                                                            <div class=\"email-container list-group\" dnd-sortable-container [sortableData]=\"listOne\">\n                                                               <div *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\" >\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='grid'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td [ngStyle]=\"{textAlign:item.aligment}\" style=\"width: 33.33%;border: 1px dashed #333;height: 100px;background-color: #f5f5f5;\">\n                                                                                        \n                                                                                    </td>\n                                                                                    <td [ngStyle]=\"{textAlign:item.aligment}\" style=\"width: 33.33%;border: 1px dashed #333;height: 100px;background-color: #f5f5f5;\">\n                                                                                        \n                                                                                    </td>\n                                                                                    <td [ngStyle]=\"{textAlign:item.aligment}\" style=\"width: 33.33%;border: 1px dashed #333;height: 100px;background-color: #f5f5f5;\">\n                                                                                        \n                                                                                    </td>\n\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='button'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td [ngStyle]=\"{textAlign:item.aligment}\">\n                                                                                        <button type=\"button\" class=\"btn custom-btn btn-round\">Click  me</button>\n                                                                                    </td>\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='image'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td [ngStyle]=\"{textAlign:item.aligment}\">\n                                                                                        <h5>{{item.title}}</h5>\n                                                                                        <img [src]=\"item.url\" [ngStyle]=\"{width:item.width, display: item.display,paddingLeft:item.left, paddingRight: item.right,paddingTop:item.top,paddingBottom:item.bottom}\" >\n                                                                                        <figcaption>{{item.caption}}</figcaption>\n                                                                                    </td>\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='video'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td [ngStyle]=\"{textAlign:item.aligment}\">\n                                                                                        <h5>{{item.title}}</h5>\n                                                                                        <video id=\"my-video\" controls preload=\"auto\" width=\"80%\" [ngStyle]=\"{width:item.width, display: item.display,paddingLeft:item.left, paddingRight: item.right,paddingTop:item.top,paddingBottom:item.bottom}\">\n                                                                                            <source [src]=\"item.url\" type=\"video/mp4\">\n                                                                                        </video>\n                                                                                        <figcaption>{{item.caption}}</figcaption>\n                                                                                    </td>\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='audio'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td  [ngStyle]=\"{textAlign:item.aligment}\">\n                                                                                        <h5>{{item.title}}</h5>\n                                                                                        <audio controls [ngStyle]=\"{width:item.width, display: item.display,paddingLeft:item.left, paddingRight: item.right,paddingTop:item.top,paddingBottom:item.bottom}\">\n                                                                                            <source [src]=\"item.url\"  type=\"audio/mpeg\" />\n                                                                                            Your browser does not support the audio element.\n                                                                                        </audio>\n                                                                                        <figcaption>{{item.caption}}</figcaption>\n                                                                                    </td>\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='document'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td  [ngStyle]=\"{textAlign:item.aligment}\">\n                                                                                        <h5>{{item.title}}</h5>\n                                                                                        <img [src]=\"item.url\" [ngStyle]=\"{width:item.width, display: item.display,paddingLeft:item.left, paddingRight: item.right,paddingTop:item.top,paddingBottom:item.bottom}\" >\n                                                                                        <figcaption>{{item.caption}}</figcaption>\n                                                                                    </td>\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n\n                                                                    <div class=\"builder-element\" *ngIf=\"item.tag=='form'\">\n                                                                        <table class=\"main\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" [ngStyle]=\"{background:item.backgroundColor}\" align=\"center\" data-type=\"text-block\">\n                                                                            <tbody>\n                                                                                <tr (click)=\"onClickOnDragItem(i,item)\">\n                                                                                    <td>\n                                                                                        <h5>{{item.formURL}}</h5>\n                                                                                    </td>\n                                                                                </tr>\n                                                                            </tbody>\n                                                                        </table>\n                                                                        <div class=\"icons-actions\">\n                                                                            <i title=\"Move element\" class=\"material-icons\">drag_handle</i>\n                                                                            <i class=\"material-icons\" title=\"Delete element\">delete</i>\n                                                                        </div>\n                                                                    </div>\n\n                                                                </div>\n\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"md-card\" >\n                                                        <div class=\"md-card-content\">\n                                                            <form action=\"#\" *ngIf=\"showRightpan\">\n                                                                 <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"md-btn-group md-btn-group-justify\">\n                                                                            <button type=\"button\" class=\"custom-btn btn\" (click)=\"onAligmentChange('left')\">Left</button>\n                                                                            <button type=\"button\" class=\"custom-btn btn\" (click)=\"onAligmentChange('center')\">Center</button>\n                                                                            <button type=\"button\" class=\"custom-btn btn active\" (click)=\"onAligmentChange('right')\">Right</button>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <h3>Padding</h3>\n                                                                        <div class=\"form-row padding-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Top\" type=\"text\" name=\"top\" [(ngModel)]=\"rightPan.top\"  (input)=\"onTopChange()\">\n                                                                            </md-form-field>\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Right\" type=\"text\" name=\"right\" [(ngModel)]=\"rightPan.right\"  (input)=\"onRigthChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                        <div class=\"form-row padding-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Bottom\" type=\"text\"  name=\"bottom\" [(ngModel)]=\"rightPan.bottom\"(input)=\"onBottonChange()\">\n                                                                            </md-form-field>\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Left\" type=\"text\"  name=\"left\" [(ngModel)]=\"rightPan.left\" (input)=\"onLeftChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Button Text\" type=\"text\"  name=\"buttonText\" [(ngModel)]=\"rightPan.buttonText\" (input)=\"onButtonTextChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Width\" type=\"text\" name=\"width\" [(ngModel)]=\"rightPan.width\" (input)=\"onWidthChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Form Link\" type=\"text\" name=\"form\" [(ngModel)]=\"rightPan.formURL\" (input)=\"onFormChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <div class=\"fileinput\" data-provides=\"fileinput\">\n                                                                                <div class=\"fileinput-new thumbnail\">\n                                                                                    <img alt=\"...\" [src]=\"rightPan.placeHolder\">\n                                                                                </div>\n                                                                                <span class=\"btn custom-btn btn-round btn-file\">\n                                                                                    <span class=\"fileinput-new\">Change</span>\n                                                                                    <input type=\"file\" class=\"file-type\" id=\"fileupload\" (change)=\"imageUploadEvent($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                                                    <div class=\"ripple-container\"></div>\n                                                                                </span>\n                                                                            </div>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"URL\" type=\"text\" name=\"url\" [(ngModel)]=\"rightPan.url\" (input)=\"onUrlChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Background Color\" name=\"bgColor\" type=\"text\" (colorPickerChange)=\"color=oncolor(color)\" [(colorPicker)]=\"color\" [value]=\"color\" [cpPosition]=\"'bottom'\" [(ngModel)]=\"rightPan.bgColor\" (input)=\"onbgChange()\" autofocus/>\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Alt Tag\" type=\"text\" name=\"altTag\" [(ngModel)]=\"rightPan.altTag\" (input)=\"onaltTagChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Title\" type=\"text\" name=\"title\" [(ngModel)]=\"rightPan.title\"  (input)=\"onTitleChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n                                                                \n                                                                <div class=\"email-builder-element-edit-field\">\n\n                                                                    <div class=\"block-properties\">\n                                                                        <div class=\"form-row text-inputs\">\n                                                                            <md-form-field>\n                                                                                <input mdInput placeholder=\"Caption\" type=\"text\" name=\"caption\" [(ngModel)]=\"rightPan.caption\" (input)=\"onCaptionChange()\">\n                                                                            </md-form-field>\n                                                                        </div>\n                                                                           \n                                                                    </div>\n\n                                                                </div>\n\n                                                            </form>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <!-- <div class=\"col-sm-3\">\n                                                <div class=\"panel panel-success\">\n                                                    <div class=\"panel-heading\">Available to drag</div>\n                                                    <div class=\"panel-body\">\n                                                        <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"transferData\">\n                                                            <div class=\"panel-body\">\n                                                                <div>Drag Me</div>\n                                                                <div>{{transferData | json}}</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccess($event)\">\n                                                    <div class=\"panel-heading\">Place to drop (Items:{{receivedData.length}})</div>\n                                                    <div class=\"panel-body\">\n                                                        <div [hidden]=\"!receivedData.length > 0\" *ngFor=\"let data of receivedData\">{{data | json}}</div>\n                                                    </div>\n                                                </div>\n                                            </div> -->\n                                            \n                                            <!-- <div class=\"form-panel\">\n                                                <div class=\"form-box left\">\n                                                    <div dnd-droppable class=\"dnd-drop\" (onDropSuccess)=\"transferDataSuccess($event)\">\n                                                        <div class=\"place-to-drop\">\n                                                            <div [hidden]=\"!receivedData.length > 0\" *ngFor=\"let data of receivedData\">\n                                                                <div class=\"li\">\n                                                                    <div class=\"edit-box\">\n                                                                        <a href=\"javascript:void(0);\" class=\"btn btn-success for_edit\"> <i class=\"material-icons\">mode_edit</i> </a>\n                                                                        <a href=\"javascript:void(0);\" class=\"btn btn-danger for_delete\"> <i class=\"material-icons\">delete</i> </a>\n                                                                    </div>\n                                                                    \n                                                                    <div *ngIf=\"data.dragData.name=='Textbox'\">\n                                                                        <md-form-field>\n                                                                            <input mdInput placeholder=\"Textbox\" type=\"text\">\n                                                                        </md-form-field>\n                                                                        <div class=\"to_edit\">\n                                                                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                                                                <md-form-field>\n                                                                                    <input mdInput placeholder=\"label\" type=\"text\">\n                                                                                </md-form-field>    \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    \n                                                                    <div *ngIf=\"data.dragData.name=='Textarea'\">\n                                                                        <md-form-field>\n                                                                            <textarea mdInput placeholder=\"Guide Text of Form\" rows=\"5\" md-select-on-focus></textarea>\n                                                                        </md-form-field>\n                                                                        <div class=\"to_edit\">\n                                                                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                                                                <md-form-field>\n                                                                                    <input mdInput placeholder=\"label\" type=\"text\">\n                                                                                </md-form-field>    \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n\n                                                                    <div *ngIf=\"data.dragData.name=='File_Upload'\">\n                                                                        <div class=\"file_upload\">\n                                                                            <span class=\"btn custom-btn btn-round btn-file\">\n                                                                                <span class=\"fileinput-new\">Upload</span>\n                                                                                <input type=\"file\" class=\"file-type\" (click)=\"formimage()\" />\n                                                                                <div class=\"ripple-container\"></div>\n                                                                            </span>\n                                                                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                                                                <div class=\"file_img thumbnail\" style=\"display:none;\">\n                                                                                    <img alt=\"...\" src=\"./assets/img/placeholder5.png\">\n                                                                                    <span class=\"close\"> <i (click)=\"close_img()\" class=\"material-icons\">cancel</i> </span>\n                                                                                </div>\n                                                                            </div>\n\n                                                                        </div>\n                                                                        <div class=\"to_edit\">\n                                                                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                                                                <md-form-field>\n                                                                                    <input mdInput placeholder=\"label\" type=\"text\">\n                                                                                </md-form-field>    \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    \n                                                                </div>\n\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"form-box right\">\n                                                    <div class=\"right-form\">\n                                                        <div class=\"\">\n                                                            <ul class=\"right-ul\">\n                                                                <li *ngFor=\"let item of items\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"item\">{{item.name}}</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div> -->\n                                            <!-- <a class=\"btn custom-btn\" (click)=\"openDialog()\" > Add Content </a> -->\n                                        </div>\n                                        <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfV85oZqg7SYXnOmpt9uJLM5uBM4dO8uR9O5faRPCYwvNj0JA/viewform?embedded=true\" width=\"100%\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <legend>Add suggested articles:</legend>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-radio-button name=\"yes1\" class=\"col-md-2 col-sm-2 col-xs-12\">Yes</md-radio-button>\n                                                <md-radio-button name=\"yes1\" class=\"col-md-2 col-sm-2 col-xs-12\">No</md-radio-button>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <a class=\"btn btn-success m-0\" (click)=\"openDialog2()\" > Add Article + </a>\n                                        </div>\n                                        <!-- <div class=\"form-group col-md-4 col-sm-12 col-xs-12\">\n\t\t                                    <md-select placeholder=\"Select Section\">\n\t\t                                        <md-option value=\"1\"> Section1 </md-option>\n\t\t                                        <md-option value=\"2\"> Section2 </md-option>\n\t\t                                        <md-option value=\"3\"> Section3 </md-option>\n\t\t                                        <md-option value=\"4\"> Section4 </md-option>\n\t\t                                    </md-select>\n\t\t                                </div>\n                                        <div class=\"form-group col-md-4 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Category\">\n                                                <md-option value=\"1\"> Category1 </md-option>\n                                                <md-option value=\"2\"> Category2 </md-option>\n                                                <md-option value=\"3\"> Category3 </md-option>\n                                                <md-option value=\"4\"> Category4 </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-4 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Sub-category\">\n                                                <md-option value=\"1\"> Sub-category1 </md-option>\n                                                <md-option value=\"2\"> Sub-category2 </md-option>\n                                                <md-option value=\"3\"> Sub-category3 </md-option>\n                                                <md-option value=\"4\"> Sub-category4 </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                            \t<md-icon mdSuffix>mode_edit</md-icon>\n                                                <input mdInput placeholder=\"Search name of content item\" type=\"text\">\n                                            </md-form-field>\n                                        </div> -->\n\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <div class=\"row\">\n                                                <div class=\"dshbrd-table table-responsive\">\n                                                    <table class=\"table view-content-table\">\n                                                        <tbody>\n                                                            <tr>\n                                                                <td class=\"text-left\">\n                                                                    <div class=\"cont-img\">\n                                                                        <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                                    </div>\n                                                                    <div class=\"cont-dtl\">\n                                                                        <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                                        <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                                        <div class=\"\"> \n                                                                            <a href=\"javascript:;\">\n                                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                                            </a>\n                                                                        </div>\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <a href=\"javascript:void(0);\"> <i class=\"material-icons\">delete</i> </a>\n                                                                </td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td class=\"text-left\">\n                                                                    <div class=\"cont-img\">\n                                                                        <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                                    </div>\n                                                                    <div class=\"cont-dtl\">\n                                                                        <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                                        <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                                        <div class=\"\"> \n                                                                            <a href=\"javascript:;\">\n                                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                                            </a>\n                                                                        </div>\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <a href=\"javascript:void(0);\"> <i class=\"material-icons\">delete</i> </a>\n                                                                </td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td class=\"text-left\">\n                                                                    <div class=\"cont-img\">\n                                                                        <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                                    </div>\n                                                                    <div class=\"cont-dtl\">\n                                                                        <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                                        <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                                        <div class=\"\"> \n                                                                            <a href=\"javascript:;\">\n                                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                                            </a>\n                                                                        </div>\n                                                                    </div>\n                                                                </td>\n                                                                <td>\n                                                                    <a href=\"javascript:void(0);\"> <i class=\"material-icons\">delete</i> </a>\n                                                                </td>\n                                                            </tr>\n                                                            \n                                                        </tbody>\n                                                        \n                                                    </table>\n                                                    \n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <legend>Picture of Subcategory:</legend>\n                                        </div>\n                                        <div class=\"form-group col-md-4 col-sm-4 col-xs-12\">\n                                            <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                                <p class=\"text-center\"> Thumbnail Picture </p>\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img alt=\"...\" src=\"./assets/img/placeholder5.png\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                \t<span class=\"btn custom-btn btn-round btn-file\">\n\t                                                    Change\n\t                                                    <input type=\"file\" class=\"file-type\" (click)=\"imagChange()\" />\n\t                                                    <div class=\"ripple-container\"></div>\n\t                                                </span>    \n\t                                                <span class=\"btn btn-danger btn-round btn-file\">\n\t                                                \t<i class=\"fa fa-times\"></i> Remove\n\t                                                \t<div class=\"ripple-container\"></div>\n\t                                                </span>\n                                                </div>\n                                                <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                    <span class=\"fileinput-new\">Change</span>\n                                                    <input type=\"file\" class=\"file-type\" (click)=\"imagChange()\" />\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"form-group col-md-4 col-sm-4 col-xs-12\">\n                                            <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                                <p class=\"text-center\"> Horizontal Picture </p>\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img alt=\"...\" src=\"./assets/img/placeholder5.png\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                \t<span class=\"btn custom-btn btn-round btn-file\">\n\t                                                    Change\n\t                                                    <input type=\"file\" class=\"file-type\" (click)=\"imagChange()\" />\n\t                                                    <div class=\"ripple-container\"></div>\n\t                                                </span>    \n\t                                                <span class=\"btn btn-danger btn-round btn-file\">\n\t                                                \t<i class=\"fa fa-times\"></i> Remove\n\t                                                \t<div class=\"ripple-container\"></div>\n\t                                                </span>\n                                                </div>\n                                                <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                    <span class=\"fileinput-new\">Change</span>\n                                                    <input type=\"file\" class=\"file-type\" (click)=\"imagChange()\" />\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                            </div>\n                                        </div>\n\n\n\n                                        <!-- <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <legend>User engagement buttons:</legend>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Kadak</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Share</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Comment</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Save</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Download</md-checkbox>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <legend>Call to action buttons:</legend>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Apply</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Call me back</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">I'm interested</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Call</md-checkbox>\n                                            </div>\n                                        </div> -->\n\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <legend>Shortlist content for promotion:</legend>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Homepage</md-checkbox>\n                                                <md-checkbox class=\"col-md-2 col-sm-2 col-xs-12\">Category</md-checkbox>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <label> This content is applicable for: </label>\n                                            <md-select placeholder=\"Select State\" multiple>\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div>\n\n\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                            <legend>Preview:</legend>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <a class=\"btn custom-btn\"> Content View </a>\n                                            <a class=\"btn custom-btn\"> Listing View </a>\n                                        </div>\n\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <a class=\"btn btn-warning\" (click)=\"openDialog()\"> Save as draft </a>\n                                            <a class=\"btn btn-success\"> Submit for review </a>\n                                            <a class=\"btn btn-danger\" (click)=\"openDialog()\"> Publish </a>\n                                            <a class=\"btn btn-warning\" (click)=\"openDialog()\"> Publish later </a>\n                                            <a class=\"btn btn-success\"> Send for revision </a>\n                                            <a class=\"btn btn-danger\"> Reject </a>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/add-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#email-builder .email-builder-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  display: -moz-flex;\n  overflow: hidden;\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#email-builder .email-builder-content > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 100%;\n  background-color: #fff;\n  color: #4d4d4d; }\n\n#email-builder .email-builder-content > :first-child {\n  max-width: 280px;\n  padding: 1em 1em;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n#email-builder .email-builder-content > :last-child {\n  z-index: 1;\n  padding: 1rem;\n  max-width: 320px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: all .2s ease-in-out; }\n\n.md-card {\n  background: #4d4d4d;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border: none; }\n\n#email-builder .email-builder-content > :first-child .elements-list ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n#email-builder .email-builder-content > :first-child .elements-list ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  display: -moz-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.3em .5em;\n  border: 1px solid #bfbfbf;\n  margin-bottom: 6px;\n  border-radius: 3px;\n  max-width: calc(50% - 3px);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 50%;\n          flex: 1 1 50%;\n  box-sizing: border-box;\n  word-wrap: break-word;\n  cursor: pointer;\n  transition: all .2s ease-in-out; }\n\n#email-builder .email-builder-content > :first-child .elements-list ul li > i {\n  font-size: 120%; }\n\n#email-builder .email-builder-content > :first-child .elements-list ul li > i.material-icons {\n  font-size: 150%;\n  width: 21px; }\n\n.full-width {\n  width: 100%; }\n\n#email-builder .email-builder-content [position-relative] {\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-color: #e6e6e6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#email-builder .email-builder-content [position-relative] .builder {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  padding: 20px;\n  overflow-y: auto; }\n\n#email-builder .email-builder-content [position-relative] .builder .empty {\n  min-height: 500px;\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#email-builder .email-builder-content [position-relative] .builder .email-container {\n  background-color: #222;\n  width: 600px;\n  margin: 0 auto;\n  padding: 10px;\n  position: relative;\n  box-sizing: border-box; }\n\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .block-properties .form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .block-properties .form-row label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #4d4d4d;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: capitalize; }\n\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .block-properties .form-row > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1; }\n\n#email-builder .email-builder-content > :last-child .md-btn-group-justify {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0; }\n\n#email-builder .email-builder-content > :last-child .md-btn-group-justify button {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  margin: 0; }\n\n#email-builder button.btn-custom {\n  border-radius: 1px; }\n\n.md-btn-group .btn:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.md-btn-group .btn:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.md-btn-group .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .block-properties .form-row.padding-inputs .mat-form-field:nth-child(1) {\n  margin-right: .5em; }\n\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .block-properties .form-row.text-inputs {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .block-properties .form-row.text-inputs label {\n  padding-bottom: .5em;\n  padding-left: 0; }\n\n.list-group {\n  width: 100%; }\n\n.block-properties .form-row.text-inputs .fileinput-new.thumbnail {\n  display: inline-block;\n  width: 85px;\n  height: 85px;\n  margin: 0;\n  vertical-align: middle; }\n\n.block-properties .form-row.text-inputs .fileinput-new.thumbnail img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.builder-element {\n  position: relative; }\n\n.list-group-item {\n  padding: 0; }\n\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > .icons-actions {\n  background-color: #fff;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  z-index: 1;\n  position: absolute;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  left: 0; }\n\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element:hover > .icons-actions {\n  opacity: 1;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%); }\n\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > .icons-actions i.actions {\n  margin: .2em;\n  color: #4d4d4d;\n  font-size: 1.5em;\n  cursor: pointer; }\n\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > .icons-actions i.actions.move {\n  cursor: move; }\n\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element img {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/add-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_color_picker__ = __webpack_require__("../../../../angular4-color-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular4_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/dashboard/add-content/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__suggest_article_dialog_suggest_article_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/add-content/suggest-article-dialog/suggest-article-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddContentComponent = (function () {
    function AddContentComponent(dialog, cpService) {
        this.dialog = dialog;
        this.cpService = cpService;
        this.listOne = [];
        this.showRightpan = false;
        this.color = "#FFFFFF";
        this.rightPan = {};
    }
    AddContentComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__drag_drop_drag_drop_component__["a" /* DragDropComponent */], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AddContentComponent.prototype.openDialog2 = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__suggest_article_dialog_suggest_article_dialog_component__["a" /* SuggestArticleDialogComponent */], {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AddContentComponent.prototype.addText = function () {
    };
    AddContentComponent.prototype.addImage = function () {
        this.listOne.push({ tag: "image", backgroundColor: '#FFFFFF', top: '10px', bottom: '10px', right: '10px', left: '10px', buttonText: 'button', width: '75%', url: './assets/img/cover.jpeg', altTag: 'file not found', title: 'Title', caption: 'Image', aligment: 'center', display: 'inline-block' });
    };
    AddContentComponent.prototype.addAudio = function () {
        this.listOne.push({ tag: "audio", backgroundColor: '#FFFFFF', top: '10px', bottom: '10px', right: '10px', left: '10px', buttonText: 'button', width: '75%', url: './assets/img/cover.jpeg', altTag: 'file not found', title: 'Title', caption: 'Audio', aligment: 'center', display: 'inline-block' });
    };
    AddContentComponent.prototype.addVideo = function () {
        this.listOne.push({ tag: "video", backgroundColor: '#FFFFFF', top: '10px', bottom: '10px', right: '10px', left: '10px', buttonText: 'button', width: '75%', url: './assets/videos/SampleVideo.mp4', altTag: 'file not found', title: 'Title', caption: 'Video', aligment: 'center', display: 'inline-block' });
    };
    AddContentComponent.prototype.addFile = function () {
        this.listOne.push({ tag: "document", backgroundColor: '#FFFFFF', top: '10px', bottom: '10px', right: '10px', left: '10px', buttonText: 'button', width: '110px', url: './assets/img/JAVA.png', altTag: 'file not found', title: 'Title', caption: 'File', aligment: 'center', display: 'inline-block' });
    };
    AddContentComponent.prototype.addGrid = function () {
        this.listOne.push({ tag: "grid", top: null, bottom: null, right: null, left: null });
    };
    AddContentComponent.prototype.addApply = function () {
        this.listOne.push({ tag: "button", backgroundColor: '#FFFFFF', top: '10px', bottom: '10px', right: '10px', left: '10px', buttonText: 'button', width: '75%', url: '', altTag: 'file not found', title: 'Title', caption: 'Image', aligment: 'center', display: 'inline-block' });
    };
    AddContentComponent.prototype.addForm = function () {
        this.listOne.push({ tag: "form", formURL: 'Link of google form' });
    };
    AddContentComponent.prototype.addCall = function () {
    };
    AddContentComponent.prototype.addCallMe = function () {
    };
    AddContentComponent.prototype.addIntrested = function () {
    };
    AddContentComponent.prototype.hello = function () {
        alert('her');
    };
    AddContentComponent.prototype.onClickOnDragItem = function (index, item) {
        //alert(index)
        this.showRightpan = true;
        this.currentIndex = index;
        //this.rightPan=item
        //this.rightPan.placeHolder=item.url;
    };
    AddContentComponent.prototype.onAligmentChange = function (flag) {
        this.listOne[this.currentIndex].aligment = flag;
    };
    AddContentComponent.prototype.onTopChange = function () {
        this.listOne[this.currentIndex].top = this.rightPan.top;
    };
    AddContentComponent.prototype.onRigthChange = function () {
        this.listOne[this.currentIndex].right = this.rightPan.right;
    };
    AddContentComponent.prototype.onBottonChange = function () {
        this.listOne[this.currentIndex].bottom = this.rightPan.bottom;
    };
    AddContentComponent.prototype.onLeftChange = function () {
        this.listOne[this.currentIndex].left = this.rightPan.left;
    };
    AddContentComponent.prototype.onButtonTextChange = function () {
    };
    AddContentComponent.prototype.onWidthChange = function () {
        this.listOne[this.currentIndex].width = this.rightPan.width;
    };
    AddContentComponent.prototype.onUrlChange = function () {
        this.listOne[this.currentIndex].url = this.rightPan.url;
        this.listOne[this.currentIndex].placeHolder = this.rightPan.url;
    };
    AddContentComponent.prototype.onFormChange = function () {
        this.listOne[this.currentIndex].formURL = this.rightPan.formURL;
    };
    AddContentComponent.prototype.onaltTagChange = function () {
        this.listOne[this.currentIndex].altTag = this.rightPan.altTag;
    };
    AddContentComponent.prototype.onTitleChange = function () {
        this.listOne[this.currentIndex].title = this.rightPan.title;
    };
    AddContentComponent.prototype.onCaptionChange = function () {
        this.listOne[this.currentIndex].caption = this.rightPan.caption;
    };
    AddContentComponent.prototype.onbgChange = function () {
        this.listOne[this.currentIndex].backgroundColor = this.rightPan.bgColor;
    };
    AddContentComponent.prototype.oncolor = function (color) {
        this.listOne[this.currentIndex].backgroundColor = color;
    };
    /*demo:any
    
    transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    htmlStr: string = '<input  placeholder="Add tagline" type="text">';
    items = [
            {name:'Textbox'},
            {name:'Textarea'},
            {name:'File_Upload'},
            {name:'Video'},
            {name:'Audio'},
            {name:'Document'}
         ];

     listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
    
    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        console.log(JSON.stringify(this.receivedData))
    }*/
    AddContentComponent.prototype.ngOnInit = function () {
        $('.selectize').selectize({
            plugins: ['remove_button'],
            persist: false,
            createOnBlur: true,
            create: true
        });
        $(document).on('click', '.for_edit', function () {
            $(this).closest('.li').find('.to_edit').toggle('100');
        });
        $(document).on('click', '.for_delete', function () {
            $(this).closest('.li').remove();
        });
    };
    /*imagChange(){

        $('.file-type').on('change',function(e){
            var tmppath = URL.createObjectURL(e.target.files[0]);
            
            console.log($(this));
            $(this).closest('.fileinput').find('img').attr('src',tmppath);
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });
    }*/
    AddContentComponent.prototype.formimage = function () {
        $('.file-type').on('change', function (e) {
            var tmppath = URL.createObjectURL(e.target.files[0]);
            console.log($(this));
            $(this).closest('.btn-file').hide();
            $(this).closest('.file_upload').find('img').attr('src', tmppath);
            $(this).closest('.file_upload').find('.file_img').show();
        });
    };
    AddContentComponent.prototype.close_img = function () {
        $('.file_img .close').click(function () {
            console.log('s');
            $(this).closest('.file_img').hide();
            $(this).closest('.file_img').find('img').attr('src', './assets/img/placeholder5.png');
            $(this).closest('.file_upload').find('.btn-file').show();
        });
    };
    AddContentComponent.prototype.imageUploadEvent = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.rightPan.url = fr.result;
            _this.rightPan.placeHolder = fr.result;
            _this.listOne[_this.currentIndex].url = fr.result;
        };
        fr.readAsDataURL(file);
    };
    return AddContentComponent;
}());
AddContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-content',
        template: __webpack_require__("../../../../../src/app/dashboard/add-content/add-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-content/add-content.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular4_color_picker__["ColorPickerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular4_color_picker__["ColorPickerService"]) === "function" && _b || Object])
], AddContentComponent);

var _a, _b;
//# sourceMappingURL=add-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/drag-drop/drag-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n    <h4 class=\"modal-title\">Select date and time</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"\">\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n            <md-form-field>\n                <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Start Date\">\n                <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                <md-datepicker #picker></md-datepicker>\n            </md-form-field>\n        </div>\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n            <md-form-field>\n                <input mdInput [mdDatepicker]=\"picker1\" placeholder=\"End Date\">\n                <md-datepicker-toggle mdSuffix [for]=\"picker1\"></md-datepicker-toggle>\n                <md-datepicker #picker1></md-datepicker>\n            </md-form-field>\n        </div>\n\n        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n            \n        </div>\n\n        \n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/drag-drop/drag-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#email-builder .email-builder-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  display: -moz-flex;\n  overflow: hidden;\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#email-builder .email-builder-content > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 100%;\n  background-color: #fff;\n  color: #4d4d4d; }\n\n#email-builder .email-builder-content > :first-child {\n  max-width: 280px;\n  padding: 1em 2em;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n#email-builder .email-builder-content > :last-child {\n  z-index: 1;\n  padding: 1rem;\n  max-width: 320px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: all .2s ease-in-out; }\n\n#email-builder .email-builder-content [position-relative] {\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-color: #e6e6e6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.md-card {\n  background: #4d4d4d;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border: none; }\n\n#email-builder .email-builder-content > :first-child .elements-list ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n#email-builder .email-builder-content > :first-child .elements-list ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  display: -moz-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.3em .5em;\n  border: 1px solid #bfbfbf;\n  margin-bottom: 6px;\n  border-radius: 3px;\n  max-width: calc(50% - 3px);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 50%;\n          flex: 1 1 50%;\n  box-sizing: border-box;\n  word-wrap: break-word;\n  cursor: move;\n  transition: all .2s ease-in-out; }\n\n.full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/drag-drop/drag-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDropComponent = (function () {
    function DragDropComponent() {
    }
    DragDropComponent.prototype.ngOnInit = function () {
    };
    return DragDropComponent;
}());
DragDropComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-drag-drop',
        template: __webpack_require__("../../../../../src/app/dashboard/add-content/drag-drop/drag-drop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-content/drag-drop/drag-drop.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DragDropComponent);

//# sourceMappingURL=drag-drop.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/suggest-article-dialog/suggest-article-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\t<h4 class=\"modal-title\" >Suggested Articles <span class=\"pull-right\"><a (click)=\"onClosed()\"><i class=\"fa fa-times\"></i></a></span> </h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"form-group col-md-4 col-sm-12 col-xs-12\">\n        <md-select placeholder=\"Select Section\">\n            <md-option value=\"1\"> Section1 </md-option>\n            <md-option value=\"2\"> Section2 </md-option>\n            <md-option value=\"3\"> Section3 </md-option>\n            <md-option value=\"4\"> Section4 </md-option>\n        </md-select>\n    </div>\n    <div class=\"form-group col-md-4 col-sm-12 col-xs-12\">\n        <md-select placeholder=\"Select Category\">\n            <md-option value=\"1\"> Category1 </md-option>\n            <md-option value=\"2\"> Category2 </md-option>\n            <md-option value=\"3\"> Category3 </md-option>\n            <md-option value=\"4\"> Category4 </md-option>\n        </md-select>\n    </div>\n    <div class=\"form-group col-md-4 col-sm-12 col-xs-12\">\n        <md-select placeholder=\"Select Sub-category\">\n            <md-option value=\"1\"> Sub-category1 </md-option>\n            <md-option value=\"2\"> Sub-category2 </md-option>\n            <md-option value=\"3\"> Sub-category3 </md-option>\n            <md-option value=\"4\"> Sub-category4 </md-option>\n        </md-select>\n    </div>\n    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        <md-form-field>\n        \t<md-icon mdSuffix>mode_edit</md-icon>\n            <input mdInput placeholder=\"Search name of content item\" type=\"text\">\n        </md-form-field>\n    </div>\n\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"row\">\n            <div class=\"dshbrd-table table-responsive\">\n                <table class=\"table view-content-table m-b-0\">\n                    <tbody>\n                        <tr>\n                        \t<td>\n                                <md-checkbox></md-checkbox>\n                            </td>\n                            <td class=\"text-left\">\n                                <div class=\"cont-img\">\n                                    <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                </div>\n                                <div class=\"cont-dtl\">\n                                    <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                    <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                    <div class=\"\"> \n                                        <a href=\"javascript:;\">\n                                            News | <span class=\"dark_ylw\">Sports News</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </td>\n                            \n                        </tr>\n                        <tr>\n                        \t<td>\n                                <md-checkbox></md-checkbox>\n                            </td>\n\t\t\t\t\t\t\t<td class=\"text-left\">\n                                <div class=\"cont-img\">\n                                    <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                </div>\n                                <div class=\"cont-dtl\">\n                                    <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                    <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                    <div class=\"\"> \n                                        <a href=\"javascript:;\">\n                                            News | <span class=\"dark_ylw\">Sports News</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </td>\n                            \n                        </tr>\n                        <tr>\n                        \t<td>\n                                <md-checkbox></md-checkbox>\n                            </td>\n\t\t\t\t\t\t\t<td class=\"text-left\">\n                                <div class=\"cont-img\">\n                                    <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                </div>\n                                <div class=\"cont-dtl\">\n                                    <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                    <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                    <div class=\"\"> \n                                        <a href=\"javascript:;\">\n                                            News | <span class=\"dark_ylw\">Sports News</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </td>\n                            \n                        </tr>\n                        \n                    </tbody>\n                    \n                </table>\n                \n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n\t<button class=\"btn custom-btn\"> Save </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/suggest-article-dialog/suggest-article-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  position: relative;\n  padding: 15px;\n  height: 70vh;\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-content/suggest-article-dialog/suggest-article-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestArticleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SuggestArticleDialogComponent = (function () {
    function SuggestArticleDialogComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SuggestArticleDialogComponent.prototype.ngOnInit = function () {
    };
    SuggestArticleDialogComponent.prototype.onClosed = function () {
        this.dialogRef.close();
    };
    return SuggestArticleDialogComponent;
}());
SuggestArticleDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-suggest-article-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/add-content/suggest-article-dialog/suggest-article-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-content/suggest-article-dialog/suggest-article-dialog.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object, Object])
], SuggestArticleDialogComponent);

var _a, _b;
//# sourceMappingURL=suggest-article-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-section/add-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <form class=\"example-form\" [formGroup]=\"addSectionForm\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-md-12\">\n                            <div class=\"card\" > \n                                <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                    <i class=\"material-icons\">edit</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Add Section</h4>\n                                    <div class=\"cus-form\">\n                                            <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"addSectionForm.controls['language']\" \n                                            name=\"language\" [(ngModel)]=\"addSectionModel.language\">\n                                            <md-option  *ngFor=\"let lang of stringResource.language\" [value]=\"lang.language\">{{lang.language}}</md-option>\n                                           <!--  <md-option value=\"2\"> Language2 </md-option>\n                                            <md-option value=\"3\"> Language3 </md-option>\n                                            <md-option value=\"4\"> Language4 </md-option> -->\n                                        </md-select>\n                                        </div>\n\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-form-field>\n                                                    <input mdInput placeholder=\"Name of Section *\" type=\"text\" [formControl]=\"addSectionForm.controls['sectionName']\" name=\"sectionName\"  [(ngModel)]=\"addSectionModel.sectionName\">\n                                                      <md-error  *ngIf=\"addSectionForm.controls['sectionName'].hasError('required') && addSectionForm.controls['sectionName'].touched\">\n                                                       Section Name is <strong>required</strong>\n                                                     </md-error>\n                                                     <md-error  *ngIf=\"addSectionForm.controls['sectionName'].hasError('pattern')\">\n                                                       only alphabets are acceptable \n                                                     </md-error>\n                                                     <md-error  *ngIf=\"addSectionForm.controls['sectionName'].hasError('maxlength')\">\n                                                       max length is 30\n                                                     </md-error>                                                   \n                                                </md-form-field>\n                                            </div>\n                                            \n                                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                                <legend>Section Display Photo:</legend>\n                                            </div>\n                                            <div class=\"form-group col-md-4 col-sm-6 col-xs-12 text-center\">\n                                                <p> Thumbnail Picture </p>\n                                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                                    <ngx-croppie *ngIf=\"croppieImageThumbnail\" #ngxCroppie [croppieOptions]=\"croppieOptionsThumbnail\" [imageUrl]=\"croppieImageThumbnail\" (result)=\"newImageResultFromCroppieThumbnail($event)\"></ngx-croppie>\n                                                    <div class=\"fileinput-new thumbnail\">\n                                                        <img alt=\"...\"  [src]=\"imageToDisplayThumbnail\">\n                                                    </div>\n                                                    <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                         <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppieThumbnail(myForm)\">\n                                                        Save\n                                                        <div class=\"ripple-container\"></div>\n                                                        </span>    \n                                                        <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEditThumbnail()\">\n                                                            <i class=\"fa fa-times\"></i> Cancel\n                                                            <div class=\"ripple-container\"></div>\n                                                        </span>\n                                                    </div>\n                                                    <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                        <span class=\"fileinput-new\">Change</span>\n                                                        <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUploadThumbnail (change)=\"imageUploadEventThumbnail($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                        <div class=\"ripple-container\"></div>\n                                                    </span>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"form-group col-md-4 col-sm-6 col-xs-12 text-center\">\n                                                <p> Horizontal Picture </p>\n                                                <div>\n                                                    <ngx-croppie *ngIf=\"croppieImageHorigontal\" #ngxCroppie [croppieOptions]=\"croppieOptionsHorigontal\" [imageUrl]=\"croppieImageHorigontal\" (result)=\"newImageResultFromCroppieHorigontal($event)\"></ngx-croppie>\n                                                </div>\n                                                \n                                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                                    <div class=\"fileinput-new thumbnail\">\n                                                        <img alt=\"...\"  [src]=\"imageToDisplayHorigontal\">\n                                                    </div>\n                                                    <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                        <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppieHorigontal(myForm)\">\n                                                        Save\n                                                            <div class=\"ripple-container\"></div>\n                                                        </span>    \n                                                        <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEditHorigontal()\">\n                                                            <i class=\"fa fa-times\"></i> Cancel\n                                                            <div class=\"ripple-container\"></div>\n                                                        </span>\n                                                    </div>\n                                                    <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                        <span class=\"fileinput-new\">Change</span>\n                                                        <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUploadHorigontal (change)=\"imageUploadEventHorigontal($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                        <div class=\"ripple-container\"></div>\n                                                    </span>\n                                                </div>\n                                            </div>\n\n\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                                <legend>Category View Applicable *:</legend>\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                    <md-radio-group    [formControl]=\"addSectionForm.controls['categoryView']\" name=\"cateGoryView\" [(ngModel)]=\"addSectionModel.categoryView\">\n                                                        <md-radio-button class=\"col-md-2 col-sm-2 col-xs-12\" value=\"yes\">Yes</md-radio-button>\n                                                        <md-radio-button class=\"col-md-2 col-sm-2 col-xs-12\" value=\"No\">No</md-radio-button>\n                                                    </md-radio-group>\n                                                       <md-error  *ngIf=\"addSectionForm.controls['categoryView'].hasError('required') && addSectionForm.controls['categoryView'].touched\">\n                                                       Category View is <strong>required</strong>\n                                                     </md-error>                                                   \n                                                </div>\n                                            </div>\n                                             <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-form-field>\n                                                    <input mdInput placeholder=\"Section Order No\" type=\"number\" [formControl]=\"addSectionForm.controls['orderNo']\" name=\"orderNo\" [(ngModel)]=\"addSectionModel.orderNo\">\n                                                </md-form-field>\n                                            </div>\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <button class=\"btn custom-btn\" (click)=\"onAddSection()\" [disabled]=\"!addSectionForm.valid\"> Submit </button>\n                                            </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-section/add-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-section/add-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__ = __webpack_require__("../../../../ngx-croppie/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_section_modal__ = __webpack_require__("../../../../../src/app/models/section.modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_section_service__ = __webpack_require__("../../../../../src/app/providers/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_saredResources__ = __webpack_require__("../../../../../src/app/models/saredResources.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddSectionComponent = (function () {
    function AddSectionComponent(router, fb, vcr, toastr, http, sectionService, appProvider) {
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.http = http;
        this.sectionService = sectionService;
        this.appProvider = appProvider;
        this.widthPx = '300';
        this.heightPx = '300';
        this.imageUrl = '';
        this.addSectionModel = new __WEBPACK_IMPORTED_MODULE_6__models_section_modal__["b" /* AddSectionRequest */]();
        this.stringResource = new __WEBPACK_IMPORTED_MODULE_9__models_saredResources__["a" /* StringResource */]();
        this.addSectionForm = fb.group({
            'sectionName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern('[a-zA-Z ]*')])],
            'categoryView': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'orderNo': [null],
            'language': [null]
        });
        this.toastr.setRootViewContainerRef(vcr);
    }
    Object.defineProperty(AddSectionComponent.prototype, "imageToDisplayHorigontal", {
        get: function () {
            if (this.currentImageHorigontal) {
                return this.currentImageHorigontal;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSectionComponent.prototype, "croppieOptionsHorigontal", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSectionComponent.prototype, "imageToDisplayThumbnail", {
        get: function () {
            if (this.currentImageThumbnail) {
                return this.currentImageThumbnail;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSectionComponent.prototype, "croppieOptionsThumbnail", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    AddSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.file-type').on('change', function (e) {
            // var tmppath = URL.createObjectURL(e.target.files[0]);
            // console.log($(this));
            // $(this).closest('.fileinput').find('img').attr('src',tmppath);
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });
        $('.file_remove').on('click', function () {
            // var a = $(this).closest('.fileinput').find('img').attr('src','./assets/img/placeholder5.png');
            // console.log(a);
            $(this).closest('.fileinput-exists').hide();
            $(this).closest('.fileinput').find('.fileinput-noexists').show();
        });
        if (this.appProvider.current.actionFlag == 'editSection') {
            this.sectionService.onGetSingleSectionData(this.appProvider.current.currentId)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.addSectionModel = data.response[0];
                    _this.croppieImageThumbnail = data.response[0].thumbnailImage;
                    _this.currentImageThumbnail = data.response[0].thumbnailImage;
                    _this.croppieImageHorigontal = data.response[0].horigontalImage;
                    _this.currentImageHorigontal = data.response[0].horigontalImage;
                }
            }, function (error) {
            });
            // code...
        }
    };
    AddSectionComponent.prototype.newImageResultFromCroppieHorigontal = function (img) {
        this.croppieImageHorigontal = img;
        console.log(this.croppieImageHorigontal);
    };
    AddSectionComponent.prototype.saveImageFromCroppieHorigontal = function () {
        this.currentImageHorigontal = this.croppieImageHorigontal;
    };
    AddSectionComponent.prototype.cancelCroppieEditHorigontal = function () {
        this.croppieImageHorigontal = '';
        this.currentImageHorigontal = '';
    };
    AddSectionComponent.prototype.imageUploadEventHorigontal = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImageHorigontal = fr.result;
        };
        fr.readAsDataURL(file);
    };
    AddSectionComponent.prototype.newImageResultFromCroppieThumbnail = function (img) {
        this.croppieImageThumbnail = img;
        console.log(this.croppieImageThumbnail);
    };
    AddSectionComponent.prototype.saveImageFromCroppieThumbnail = function () {
        this.currentImageThumbnail = this.croppieImageThumbnail;
    };
    AddSectionComponent.prototype.cancelCroppieEditThumbnail = function () {
        this.croppieImageThumbnail = '';
        this.currentImageThumbnail = '';
    };
    AddSectionComponent.prototype.imageUploadEventThumbnail = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImageThumbnail = fr.result;
        };
        fr.readAsDataURL(file);
    };
    AddSectionComponent.prototype.onAddSection = function () {
        var _this = this;
        //   if(this.app)
        if (this.addSectionModel._id) {
            this.addSectionModel.thumbnailImage = this.currentImageThumbnail;
            this.addSectionModel.horigontalImage = this.currentImageHorigontal;
            this.sectionService.onEditSection(this.addSectionModel)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/view-section'], { skipLocationChange: true });
                    //this.router.navigate(['/home'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data));
            }, function (error) {
                alert(error);
            });
        }
        else {
            var date = new Date().toISOString();
            console.log(date.split('T')[0]);
            console.log(date);
            this.addSectionModel.createdDate = date.split('T')[0];
            this.addSectionModel.thumbnailImage = this.currentImageThumbnail;
            this.addSectionModel.horigontalImage = this.currentImageHorigontal;
            this.addSectionModel.status = true;
            this.addSectionModel.publishStatus = false;
            this.addSectionModel.deleteStatus = false;
            this.addSectionModel.updatedDate = null;
            this.addSectionModel.enableDisableDate = null;
            this.addSectionModel.publishUnbuplishDate = null;
            this.sectionService.onAddSection(this.addSectionModel)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/view-section'], { skipLocationChange: true });
                    //this.router.navigate(['/home'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data));
            }, function (error) {
                alert(error);
            });
        }
    };
    return AddSectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ngxCroppie'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["a" /* NgxCroppieComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["a" /* NgxCroppieComponent */]) === "function" && _a || Object)
], AddSectionComponent.prototype, "ngxCroppie", void 0);
AddSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-section',
        template: __webpack_require__("../../../../../src/app/dashboard/add-section/add-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-section/add-section.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControlDirective */], __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_app_provider__["a" /* AppProvider */]) === "function" && _h || Object])
], AddSectionComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                  <form class=\"example-form\" [formGroup]=\"addSubCategoryForm\">\n\n                    \n                    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Add Subcategory</h4>\n                                <div class=\"cus-form\">\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 abc\">\n                                       <md-select placeholder=\"Select Language\" [formControl]=\"addSubCategoryForm.controls['language']\" name=\"language\" [(ngModel)]=\"addSubCategoryRequest.language\">\n                                            <md-option  *ngFor=\"let lang of stringResource.language\" [value]=\"lang.language\">{{lang.language}}</md-option>\n                                           <!--  <md-option value=\"2\"> Language2 </md-option>\n                                            <md-option value=\"3\"> Language3 </md-option>\n                                            <md-option value=\"4\"> Language4 </md-option> -->\n                                        </md-select>\n                                    </div>\n                                \t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                    <md-select placeholder=\"Select Section *\" [formControl]=\"addSubCategoryForm.controls['sectionName']\" name=\"sectionName\" [(ngModel)]=\"addSubCategoryRequest.sectionId\" (change)=\"getCategory()\">\n\t                                         <md-option  *ngFor=\"let section of sections\"  [value]=\"section._id\" > {{section.sectionName}}</md-option>\n\t                                       <!--  <md-option value=\"2\"> Section2 </md-option>\n\t                                        <md-option value=\"3\"> Section3 </md-option>\n\t                                        <md-option value=\"4\"> Section4 </md-option> -->\n\t                                    </md-select>\n                                         <md-error  *ngIf=\"addSubCategoryForm.controls['sectionName'].hasError('required') && addSubCategoryForm.controls['sectionName'].touched\">\n                                                       Name Of Section is <strong>required</strong>\n                                        </md-error>\n\t                                </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-select placeholder=\"Select Category *\" [formControl]=\"addSubCategoryForm.controls['categoryName']\" name=\"categoryName\" [(ngModel)]=\"addSubCategoryRequest.categoryId\">\n                                            <md-option *ngFor=\"let category of categories\"  [value]=\"category._id\" > {{category.categoryName}}</md-option>\n                                           <!--  <md-option value=\"2\"> Category2 </md-option>\n                                            <md-option value=\"3\"> Category3 </md-option>\n                                            <md-option value=\"4\"> Category4 </md-option> -->\n                                        </md-select>\n                                        <md-error  *ngIf=\"addSubCategoryForm.controls['categoryName'].hasError('required') && addSubCategoryForm.controls['categoryName'].touched\">\n                                                       Name Of Category is <strong>required</strong>\n                                        </md-error>\n                                    </div>\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Name Of Subcategory  *\" type=\"text\" [formControl]=\"addSubCategoryForm.controls['subCategoryName']\" name=\"subCategoryName\" [(ngModel)]=\"addSubCategoryRequest.subCategoryName\">\n                                            <md-error  *ngIf=\"addSubCategoryForm.controls['subCategoryName'].hasError('required') && addSubCategoryForm.controls['subCategoryName'].touched\">\n                                                       Name Of Subcategory is <strong>required</strong>\n                                            </md-error>\n                                            <md-error  *ngIf=\"addSubCategoryForm.controls['subCategoryName'].hasError('pattern')\">\n                                                       only alphabets are acceptable \n                                            </md-error>\n                                            <md-error  *ngIf=\"addSubCategoryForm.controls['subCategoryName'].hasError('maxlength')\">\n                                                       max length is 30\n                                            </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    \n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>Picture of Subcategory:</legend>\n                                    </div>\n                                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12 text-center\">\n                                        <p> Thumbnail Picture </p>\n                                        <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                             <ngx-croppie *ngIf=\"croppieImageThumbnail\" #ngxCroppie [croppieOptions]=\"croppieOptionsThumbnail\" [imageUrl]=\"croppieImageThumbnail\" (result)=\"newImageResultFromCroppieThumbnail($event)\"></ngx-croppie>\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img alt=\"...\"  [src]=\"imageToDisplayThumbnail\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                     <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppieThumbnail(myForm)\">\n                                                    Save\n                                                    <div class=\"ripple-container\"></div>\n                                                    </span>    \n                                                    <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEditThumbnail()\">\n                                                        <i class=\"fa fa-times\"></i> Cancel\n                                                        <div class=\"ripple-container\"></div>\n                                                    </span>\n                                                </div>\n                                                <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                    <span class=\"fileinput-new\">Change</span>\n                                                    <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUploadThumbnail (change)=\"imageUploadEventThumbnail($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-md-6 col-sm-6 col-xs-12 text-center\">\n                                        <p> Horizontal Picture </p>\n                                        <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                             <ngx-croppie *ngIf=\"croppieImageHorigontal\" #ngxCroppie [croppieOptions]=\"croppieOptionsHorigontal\" [imageUrl]=\"croppieImageHorigontal\" (result)=\"newImageResultFromCroppieHorigontal($event)\"></ngx-croppie>\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img alt=\"...\"  [src]=\"imageToDisplayHorigontal\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                     <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppieHorigontal(myForm)\">\n                                                    Save\n                                                    <div class=\"ripple-container\"></div>\n                                                    </span>    \n                                                    <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEditHorigontal()\">\n                                                        <i class=\"fa fa-times\"></i> Cancel\n                                                        <div class=\"ripple-container\"></div>\n                                                    </span>\n                                                </div>\n                                                <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                    <span class=\"fileinput-new\">Change</span>\n                                                    <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUploadHorigontal (change)=\"imageUploadEventHorigontal($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Template Settings</h4>                                \n                                <div class=\"cus-form\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 mt15\">\n                                        <legend>Subcategory Template Applicable *:</legend>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-radio-group [formControl]=\"addSubCategoryForm.controls['subCategoryView']\" name=\"subCategoryView\" [(ngModel)]=\"addSubCategoryRequest.subCategoryView\">\n                                                <md-radio-button value=\"yes\" class=\"col-md-2 col-sm-2 col-xs-12\">Yes</md-radio-button>\n                                                <md-radio-button value=\"no\" class=\"col-md-2 col-sm-2 col-xs-12\">No</md-radio-button>\n                                            </md-radio-group>\n                                            <md-error  *ngIf=\"addSubCategoryForm.controls['subCategoryView'].hasError('required') && addSubCategoryForm.controls['subCategoryView'].touched\">\n                                                       Subcategory Template Applicable is <strong>required</strong>\n                                            </md-error>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                    <md-select placeholder=\"Choose Subcategory Template Format\" [formControl]=\"addSubCategoryForm.controls['subCategoryFormat']\" name=\"subCategoryFormat\" [(ngModel)]=\"addSubCategoryRequest.subCategoryFormat\">\n\t                                        <md-option value=\"1\"> Template1 </md-option>\n\t                                        <md-option value=\"2\"> Template2 </md-option>\n\t                                        <md-option value=\"3\"> Template3 </md-option>\n\t                                        <md-option value=\"4\"> Template4 </md-option>\n\t                                    </md-select>\n\t                                </div>\n\n\t                                \n                                   \n                                    \n                                    \n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                     <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">edit</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Engagement Settings</h4>                                \n                                <div class=\"cus-form\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>User Engagement Buttons:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"addSubCategoryForm.controls['userEngBtnLike']\" name=\"userEngBtnLike\"  [(ngModel)]=\"addSubCategoryRequest.userEngBtnLike\">Like</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"addSubCategoryForm.controls['userEngBtnShare']\" name=\"userEngBtnShare\"  [(ngModel)]=\"addSubCategoryRequest.userEngBtnShare\">Share</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"addSubCategoryForm.controls['userEngBtnComment']\" name=\"userEngBtnComment\"  [(ngModel)]=\"addSubCategoryRequest.userEngBtnComment\">Comment</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"addSubCategoryForm.controls['userEngBtnSave']\" name=\"userEngBtnSave\"  [(ngModel)]=\"addSubCategoryRequest.userEngBtnSave\">Save</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"addSubCategoryForm.controls['userEngBtnDownload']\" name=\"userEngBtnDownload\"  [(ngModel)]=\"addSubCategoryRequest.userEngBtnDownload\">Download</md-checkbox>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <legend>Call to Action Buttons:</legend>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"   [formControl]=\"addSubCategoryForm.controls['callToActBtnApply']\" name=\"callToActBtnApply'\" [(ngModel)]=\"addSubCategoryRequest.callToActBtnApply\">Apply</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"  [formControl]=\"addSubCategoryForm.controls['callToActBtnCallMe']\" name=\"callToActBtnCallMe\" [(ngModel)]=\"addSubCategoryRequest.callToActBtnCallMe\">Call Me Back</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"  [formControl]=\"addSubCategoryForm.controls['callToActBtnInterested']\" name=\"callToActBtnInterested\" [(ngModel)]=\"addSubCategoryRequest.callToActBtnInterested\">I'm Interested</md-checkbox>\n                                            <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"  [formControl]=\"addSubCategoryForm.controls['callToActBtnCall']\" name=\"callToActBtnCall\" [(ngModel)]=\"addSubCategoryRequest.callToActBtnCall\">Call</md-checkbox>\n                                        </div>\n                                    </div>\n                                    \n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                         <button class=\"btn custom-btn\" (click)=\"onAddSubcategory()\" [disabled]=\"!addSubCategoryForm.valid\"> Submit </button>\n                    </div>\n                  </form>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mt15 {\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubcategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__ = __webpack_require__("../../../../ngx-croppie/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_section_modal__ = __webpack_require__("../../../../../src/app/models/section.modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_section_service__ = __webpack_require__("../../../../../src/app/providers/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_saredResources__ = __webpack_require__("../../../../../src/app/models/saredResources.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddSubcategoryComponent = (function () {
    function AddSubcategoryComponent(router, fb, vcr, toastr, http, sectionService, appProvider) {
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.http = http;
        this.sectionService = sectionService;
        this.appProvider = appProvider;
        this.widthPx = '300';
        this.heightPx = '300';
        this.imageUrl = '';
        this.addSubCategoryRequest = new __WEBPACK_IMPORTED_MODULE_6__models_section_modal__["c" /* AddSubCategoryRequest */]();
        this.stringResource = new __WEBPACK_IMPORTED_MODULE_8__models_saredResources__["a" /* StringResource */]();
        this.addSubCategoryForm = fb.group({
            'sectionName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'categoryName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'subCategoryName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern('[a-zA-Z ]*')])],
            'subCategoryView': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'subCategoryFormat': [null],
            'userEngBtnLike': [null],
            'userEngBtnShare': [null],
            'userEngBtnComment': [null],
            'userEngBtnSave': [null],
            'userEngBtnDownload': [null],
            'callToActBtnApply': [null],
            'callToActBtnCallMe': [null],
            'callToActBtnInterested': [null],
            'callToActBtnCall': [null],
            'language': [null]
        });
        this.toastr.setRootViewContainerRef(vcr);
    }
    Object.defineProperty(AddSubcategoryComponent.prototype, "imageToDisplayHorigontal", {
        get: function () {
            if (this.currentImageHorigontal) {
                return this.currentImageHorigontal;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSubcategoryComponent.prototype, "croppieOptionsHorigontal", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSubcategoryComponent.prototype, "imageToDisplayThumbnail", {
        get: function () {
            if (this.currentImageThumbnail) {
                return this.currentImageThumbnail;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSubcategoryComponent.prototype, "croppieOptionsThumbnail", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    AddSubcategoryComponent.prototype.ngOnInit = function () {
        $('.file-type').on('change', function (e) {
            // var tmppath = URL.createObjectURL(e.target.files[0]);
            // console.log($(this));
            // $(this).closest('.fileinput').find('img').attr('src',tmppath);
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });
        $('.file_remove').on('click', function () {
            // var a = $(this).closest('.fileinput').find('img').attr('src','./assets/img/placeholder5.png');
            // console.log(a);
            $(this).closest('.fileinput-exists').hide();
            $(this).closest('.fileinput').find('.fileinput-noexists').show();
        });
        if (this.appProvider.current.actionFlag == 'editSubCategory') {
            this.getSectionList();
            this.getSubCategoryData();
        }
        else {
            this.getSectionList();
        }
    };
    AddSubcategoryComponent.prototype.newImageResultFromCroppieHorigontal = function (img) {
        this.croppieImageHorigontal = img;
        console.log(this.croppieImageHorigontal);
    };
    AddSubcategoryComponent.prototype.saveImageFromCroppieHorigontal = function () {
        this.currentImageHorigontal = this.croppieImageHorigontal;
    };
    AddSubcategoryComponent.prototype.cancelCroppieEditHorigontal = function () {
        this.croppieImageHorigontal = '';
        this.currentImageHorigontal = '';
    };
    AddSubcategoryComponent.prototype.imageUploadEventHorigontal = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImageHorigontal = fr.result;
        };
        fr.readAsDataURL(file);
    };
    AddSubcategoryComponent.prototype.newImageResultFromCroppieThumbnail = function (img) {
        this.croppieImageThumbnail = img;
        console.log(this.croppieImageThumbnail);
    };
    AddSubcategoryComponent.prototype.saveImageFromCroppieThumbnail = function () {
        this.currentImageThumbnail = this.croppieImageThumbnail;
    };
    AddSubcategoryComponent.prototype.cancelCroppieEditThumbnail = function () {
        this.croppieImageThumbnail = '';
        this.currentImageThumbnail = '';
    };
    AddSubcategoryComponent.prototype.imageUploadEventThumbnail = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImageThumbnail = fr.result;
        };
        fr.readAsDataURL(file);
    };
    AddSubcategoryComponent.prototype.getCategory = function () {
        var _this = this;
        this.sectionService.onGetCategory(this.addSubCategoryRequest.sectionId)
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.categories = data.response;
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    AddSubcategoryComponent.prototype.onAddSubcategory = function () {
        var _this = this;
        if (this.addSubCategoryRequest._id) {
            var localsection = this.sections.filter(function (arg) { return arg._id == _this.addSubCategoryRequest.sectionId; });
            var localcategory = this.categories.filter(function (arg) { return arg._id == _this.addSubCategoryRequest.categoryId; });
            this.addSubCategoryRequest.sectionName = localsection[0].sectionName;
            this.addSubCategoryRequest.categoryName = localcategory[0].categoryName;
            this.addSubCategoryRequest.thumbnailImage = this.currentImageThumbnail;
            this.addSubCategoryRequest.horigontalImage = this.currentImageHorigontal;
            this.sectionService.onEditSubCategory(this.addSubCategoryRequest)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/view-section'], { skipLocationChange: true });
                }
                console.log(JSON.stringify(data));
            }, function (error) {
                alert(error);
            });
        }
        else {
            var date = new Date().toISOString();
            var localsection = this.sections.filter(function (arg) { return arg._id == _this.addSubCategoryRequest.sectionId; });
            var localcategory = this.categories.filter(function (arg) { return arg._id == _this.addSubCategoryRequest.categoryId; });
            this.addSubCategoryRequest.createdDate = date.split('T')[0];
            this.addSubCategoryRequest.sectionName = localsection[0].sectionName;
            this.addSubCategoryRequest.categoryName = localcategory[0].categoryName;
            this.addSubCategoryRequest.thumbnailImage = this.currentImageThumbnail;
            this.addSubCategoryRequest.horigontalImage = this.currentImageHorigontal;
            this.addSubCategoryRequest.status = true;
            this.addSubCategoryRequest.publishStatus = false;
            this.addSubCategoryRequest.deleteStatus = false;
            this.addSubCategoryRequest.updatedDate = null;
            this.addSubCategoryRequest.enableDisableDate = null;
            this.addSubCategoryRequest.publishUnbuplishDate = null;
            this.sectionService.onAddSubcategory(this.addSubCategoryRequest)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/view-section'], { skipLocationChange: true });
                }
                console.log(JSON.stringify(data));
            }, function (error) {
                alert(error);
            });
        }
    };
    AddSubcategoryComponent.prototype.getSectionList = function () {
        var _this = this;
        this.sectionService.onGetSection()
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.sections = data;
        }, function (error) {
            alert(error);
        });
    };
    AddSubcategoryComponent.prototype.getSubCategoryData = function () {
        var _this = this;
        this.sectionService.onGetSingleSubCategoryData(this.appProvider.current.currentId)
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.addSubCategoryRequest = data.response[0];
            _this.getCategory();
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    return AddSubcategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ngxCroppie'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["a" /* NgxCroppieComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_croppie__["a" /* NgxCroppieComponent */]) === "function" && _a || Object)
], AddSubcategoryComponent.prototype, "ngxCroppie", void 0);
AddSubcategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-subcategory',
        template: __webpack_require__("../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControlDirective */], __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */]) === "function" && _h || Object])
], AddSubcategoryComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-subcategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(router) {
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        localStorage['currentpath'] = this.router.url;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/article-analytics/article-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        \n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Rejected <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Draft <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Article Analytics</h4>\n                                <div class=\"row\">\n\t                                \n                                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> all </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                    \n                                    \n                                    <div class=\"p-lr-15 pull-right\">\n\t                                \t<div class=\"dropdown right chck\">\n                                            <a href=\"javascript:;\" class=\"dropdown-toggle btn btn-success\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                <i class=\"material-icons\">tune</i>\n                                            </a>\n                                            <ul class=\"dropdown-menu\">\n                                            \t<md-radio-group>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"8\">  Number of comments   </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"9\">  Number of Shares     </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"9\">  Number of likes      </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"10\"> Number of saves      </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"11\"> Number of downloads  </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"4\">  Page views           </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"12\"> Unique views         </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"1\"> No of click on apply  </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"2\"> No of click on i'm interested</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"3\"> No of click on call me</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"5\"> No of click on call</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\n                                            </ul>\n                                        </div>\n\t                                </div>\n\t                            </div>\n\n                                <div class=\"row\">\n\t                                <div class=\"dshbrd-table table-responsive\">\n\t                                \t<table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n\t                                        <thead class=\"text-danger\">\n\t\t                                        <tr>\n\t\t                                            <th> Content Item </th>\n\t\t                                            <th colspan=\"3\"> Views </th>\n\t\t                                            <th colspan=\"5\"> User Engagement Buttons </th>\n\t\t                                            <th colspan=\"4\"> Call To Action Buttons </th>\n\t\t                                        </tr>\n\t\t                                        <tr>\n                                                    <th> </th>\n                                                    <th><mfDefaultSorter by=\"page\">Page Views</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"unique\"> Unique Views</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgp\"> Continue Reading</mfDefaultSorter> </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Kadak\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Apply\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"I'm Interested\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                </tr>\n\t\t                                    </thead>\n\t\t                                    <tbody>\n\t\t                                        <tr>\n                                                    <td class=\"td-wdth282 text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                            <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\" class=\"text-success\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\" class=\"text-danger\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td> 10,00,000 </td> <td> 1,00,000 </td> <td> 20 </td>\n                                                    <td> 300 </td> <td> 50 </td> <td> 120 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 250 </td> <td> 50 </td> <td> 152 </td> <td> 89 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"td-wdth282 text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                            <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\" class=\"text-success\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\" class=\"text-danger\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td> 10,00,000 </td> <td> 1,00,000 </td> <td> 20 </td>\n                                                    <td> 300 </td> <td> 50 </td> <td> 120 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 250 </td> <td> 50 </td> <td> 152 </td> <td> 89 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"td-wdth282 text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                            <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\" class=\"text-success\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\" class=\"text-danger\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td> 10,00,000 </td> <td> 1,00,000 </td> <td> 20 </td>\n                                                    <td> 300 </td> <td> 50 </td> <td> 120 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 250 </td> <td> 50 </td> <td> 152 </td> <td> 89 </td>\n\n                                                </tr>\n\n\t\t                                       \t<tr>\n                                                    <td class=\"td-wdth282 text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                            <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\" class=\"text-success\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\" class=\"text-danger\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td> 10,00,000 </td> <td> 1,00,000 </td> <td> 20 </td>\n                                                    <td> 300 </td> <td> 50 </td> <td> 120 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 250 </td> <td> 50 </td> <td> 152 </td> <td> 89 </td>\n\n                                                </tr>\n\n\t\t                                       \t\n\t\t                                    </tbody>\n\t\t                                    <tfoot>\n\t                                            <tr>\n\t                                                <td colspan=\"14\">\n\t                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n\t                                                </td>\n\t                                            </tr>\n                                            </tfoot>\n\t                                    </table>\n\t                                </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-category</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket news</md-checkbox></li>\n                                <li><md-checkbox>Football news</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                    </div>\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/article-analytics/article-analytics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/article-analytics/article-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleAnalyticsComponent = (function () {
    function ArticleAnalyticsComponent() {
    }
    ArticleAnalyticsComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    return ArticleAnalyticsComponent;
}());
ArticleAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-analytics',
        template: __webpack_require__("../../../../../src/app/dashboard/article-analytics/article-analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/article-analytics/article-analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ArticleAnalyticsComponent);

//# sourceMappingURL=article-analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/category-templates/category-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Category Template</h4>\n                                <div class=\"row\">\n                                    <div class=\"template-table dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th> Template </th>\n                                                    <th> Template Name </th>\n                                                    <th> Active In Category </th>\n                                                    <th> Start Time </th>\n                                                    <th> End Time </th>\n                                                </tr>\n                                               \n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template3.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template1.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen2 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template2.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen3 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template4.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n\n\n                                            </tbody>\n                                            \n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/category-templates/category-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/category-templates/category-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryTemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryTemplatesComponent = (function () {
    function CategoryTemplatesComponent() {
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }
        };
    }
    CategoryTemplatesComponent.prototype.ngOnInit = function () {
    };
    return CategoryTemplatesComponent;
}());
CategoryTemplatesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category-templates',
        template: __webpack_require__("../../../../../src/app/dashboard/category-templates/category-templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/category-templates/category-templates.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CategoryTemplatesComponent);

//# sourceMappingURL=category-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Deleted <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Jobs <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Cricket <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">description</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Comment Management</h4>\n                                <div class=\"row\">\n                                    <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-warning\" (click)=\"openDialog()\">Reviewed</a>\n                                        <!-- <a class=\"btn btn-round btn-md btn-disabled btn-success\" (click)=\"openDialog()\"> Filter</a> -->\n                                    </div>\n                                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items Per Page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped\">    \n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th>  </th>\n                                                    <th class=\"maxWidth200\"> Content  Item</th>\n                                                    <th> Name </th>\n                                                    <th class=\"maxWidth200\"> Comment </th>\n                                                    <th> Date &amp; Time </th>\n                                                    <th> Action </th>\n                                                </tr>                                                \n                                            </thead>\n                                            <tbody class=\"td-icon\">\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\">\n                                                        <p>Headline: Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                        <div class=\"\"> \n                                                            <a href=\"javascript:;\">\n                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                            </a>\n                                                        </div>\n                                                        <p> <strong> Status: </strong> Reviewd </p>\n                                                    </td>\n                                                    <td> John Mayer </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>\n                                                    <td class=\"vertical-top\"> <p> 08:35</p> <p> 18/07/2016 </p> </td>\n                                                    <td><a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a> </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\">\n                                                        <p>Headline: Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                        <div class=\"\"> \n                                                            <a href=\"javascript:;\">\n                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                            </a>\n                                                        </div>\n                                                        <p> <strong> Status: </strong> Reviewd </p>\n                                                    </td>\n                                                    <td> John Mayer </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>\n                                                    <td class=\"vertical-top\"> <p> 08:35</p> <p> 18/07/2016 </p> </td>\n                                                    <td><a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a> </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\">\n                                                        <p>Headline: Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                        <div class=\"\"> \n                                                            <a href=\"javascript:;\">\n                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                            </a>\n                                                        </div>\n                                                        <p> <strong> Status: </strong> Reviewd </p>\n                                                    </td>\n                                                    <td> John Mayer </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>\n                                                    <td class=\"vertical-top\"> <p> 08:35</p> <p> 18/07/2016 </p> </td>\n                                                    <td><a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a> </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\">\n                                                        <p>Headline: Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                        <div class=\"\"> \n                                                            <a href=\"javascript:;\">\n                                                                News | <span class=\"dark_ylw\">Sports News</span>\n                                                            </a>\n                                                        </div>\n                                                        <p> <strong> Status: </strong> Reviewd </p>\n                                                    </td>\n                                                    <td> John Mayer </td>\n                                                    <td class=\"text-left maxWidth200 vertical-top\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>\n                                                    <td class=\"vertical-top\"> <p> 08:35</p> <p> 18/07/2016 </p> </td>\n                                                    <td><a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a> </td>\n\n                                                </tr>\n                                                \n                                            </tbody>\n                                            \n                                        </table>\n                                        \n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n       \n        <app-footer></app-footer>\n    </div>\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <!-- <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n -->\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Status</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Reviewed</md-checkbox></li>\n                                <li><md-checkbox>Deleted</md-checkbox></li>\n                                <li><md-checkbox>Need to reviewed</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket</md-checkbox></li>\n                                <li><md-checkbox>Football</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                         <a class=\"btn custom-btn\">Apply Filter </a>\n                                    \n                     </div>\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/comment/comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".maxWidth200 {\n  max-width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentComponent = (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    return CommentComponent;
}());
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/dashboard/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/comment/comment.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CommentComponent);

//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='white' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar> -->\n     <!--    <router-outlet></router-outlet> -->\n       <!--  <div >\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_croppie__ = __webpack_require__("../../../../ngx-croppie/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular4_color_picker__ = __webpack_require__("../../../../angular4-color-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular4_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular4_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_routes__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_admin_edit_admin_component__ = __webpack_require__("../../../../../src/app/dashboard/edit-admin/edit-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_section_view_section_component__ = __webpack_require__("../../../../../src/app/dashboard/view-section/view-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_section_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/view-section/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_section_add_section_component__ = __webpack_require__("../../../../../src/app/dashboard/add-section/add-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_category_add_category_component__ = __webpack_require__("../../../../../src/app/dashboard/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_subcategory_add_subcategory_component__ = __webpack_require__("../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_content_add_content_component__ = __webpack_require__("../../../../../src/app/dashboard/add-content/add-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__view_content_view_content_component__ = __webpack_require__("../../../../../src/app/dashboard/view-content/view-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__view_content_view_dialog_view_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/dashboard/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__homepage_home_dialog_home_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__priority_priority_component__ = __webpack_require__("../../../../../src/app/dashboard/priority/priority.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__priority_priority_dialog_priority_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comment_comment_component__ = __webpack_require__("../../../../../src/app/dashboard/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_contribution_user_contribution_component__ = __webpack_require__("../../../../../src/app/dashboard/user-contribution/user-contribution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__user_user_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__section_analytics_section_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/section-analytics/section-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__article_analytics_article_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/article-analytics/article-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__element_analytics_element_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/element-analytics/element-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__user_user_dialog_user_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_language_dialog_language_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__dashboard_routes__["b" /* MODULE_ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG),
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_croppie__["b" /* NgxCroppieModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular4_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* AdminConfirmation */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_sidebar_sidebar_component__["b" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_routes__["a" /* MODULE_COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_14__edit_admin_edit_admin_component__["a" /* EditAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_15__view_section_view_section_component__["a" /* ViewSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_16__view_section_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_17__add_section_add_section_component__["a" /* AddSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__add_category_add_category_component__["a" /* AddCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__add_subcategory_add_subcategory_component__["a" /* AddSubcategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_20__add_content_add_content_component__["a" /* AddContentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__view_content_view_content_component__["a" /* ViewContentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__view_content_view_dialog_view_dialog_component__["a" /* ViewDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_24__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_25__homepage_home_dialog_home_dialog_component__["a" /* HomeDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__priority_priority_component__["a" /* PriorityComponent */],
            __WEBPACK_IMPORTED_MODULE_27__priority_priority_dialog_priority_dialog_component__["a" /* PriorityDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_28__comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_29__user_contribution_user_contribution_component__["a" /* UserContributionComponent */],
            __WEBPACK_IMPORTED_MODULE_30__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_31__section_analytics_section_analytics_component__["a" /* SectionAnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_32__article_analytics_article_analytics_component__["a" /* ArticleAnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__element_analytics_element_analytics_component__["a" /* ElementAnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__user_user_dialog_user_dialog_component__["a" /* UserDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_35__home_language_dialog_language_dialog_component__["a" /* LanguageDialogComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_16__view_section_dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* AdminConfirmation */], __WEBPACK_IMPORTED_MODULE_22__view_content_view_dialog_view_dialog_component__["a" /* ViewDialogComponent */], __WEBPACK_IMPORTED_MODULE_25__homepage_home_dialog_home_dialog_component__["a" /* HomeDialogComponent */], __WEBPACK_IMPORTED_MODULE_27__priority_priority_dialog_priority_dialog_component__["a" /* PriorityDialogComponent */], __WEBPACK_IMPORTED_MODULE_34__user_user_dialog_user_dialog_component__["a" /* UserDialogComponent */], __WEBPACK_IMPORTED_MODULE_35__home_language_dialog_language_dialog_component__["a" /* LanguageDialogComponent */]],
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__ = __webpack_require__("../../../../../src/app/dashboard/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_admin_edit_admin_component__ = __webpack_require__("../../../../../src/app/dashboard/edit-admin/edit-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_section_view_section_component__ = __webpack_require__("../../../../../src/app/dashboard/view-section/view-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_section_add_section_component__ = __webpack_require__("../../../../../src/app/dashboard/add-section/add-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_category_add_category_component__ = __webpack_require__("../../../../../src/app/dashboard/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_subcategory_add_subcategory_component__ = __webpack_require__("../../../../../src/app/dashboard/add-subcategory/add-subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_content_add_content_component__ = __webpack_require__("../../../../../src/app/dashboard/add-content/add-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_content_view_content_component__ = __webpack_require__("../../../../../src/app/dashboard/view-content/view-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/dashboard/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__priority_priority_component__ = __webpack_require__("../../../../../src/app/dashboard/priority/priority.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__comment_comment_component__ = __webpack_require__("../../../../../src/app/dashboard/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_contribution_user_contribution_component__ = __webpack_require__("../../../../../src/app/dashboard/user-contribution/user-contribution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__section_analytics_section_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/section-analytics/section-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__article_analytics_article_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/article-analytics/article-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__element_analytics_element_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/element-analytics/element-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__template_analytics_template_analytics_component__ = __webpack_require__("../../../../../src/app/dashboard/template-analytics/template-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__section_templates_section_templates_component__ = __webpack_require__("../../../../../src/app/dashboard/section-templates/section-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__category_templates_category_templates_component__ = __webpack_require__("../../../../../src/app/dashboard/category-templates/category-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__list_templates_list_templates_component__ = __webpack_require__("../../../../../src/app/dashboard/list-templates/list-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__homepage_templates_homepage_templates_component__ = __webpack_require__("../../../../../src/app/dashboard/homepage-templates/homepage-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/dashboard/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/edit-profile/edit-profile.component.ts");

























var MODULE_ROUTES = [
    { path: 'administrator', component: __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["b" /* HomeComponent */] },
    { path: 'edit-admin', component: __WEBPACK_IMPORTED_MODULE_2__edit_admin_edit_admin_component__["a" /* EditAdminComponent */] },
    { path: 'view-section', component: __WEBPACK_IMPORTED_MODULE_3__view_section_view_section_component__["a" /* ViewSectionComponent */] },
    { path: 'add-section', component: __WEBPACK_IMPORTED_MODULE_4__add_section_add_section_component__["a" /* AddSectionComponent */] },
    { path: 'add-category', component: __WEBPACK_IMPORTED_MODULE_5__add_category_add_category_component__["a" /* AddCategoryComponent */] },
    { path: 'add-subcategory', component: __WEBPACK_IMPORTED_MODULE_6__add_subcategory_add_subcategory_component__["a" /* AddSubcategoryComponent */] },
    { path: 'add-content', component: __WEBPACK_IMPORTED_MODULE_7__add_content_add_content_component__["a" /* AddContentComponent */] },
    { path: 'view-content', component: __WEBPACK_IMPORTED_MODULE_8__view_content_view_content_component__["a" /* ViewContentComponent */] },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'priority', component: __WEBPACK_IMPORTED_MODULE_10__priority_priority_component__["a" /* PriorityComponent */] },
    { path: 'comment', component: __WEBPACK_IMPORTED_MODULE_11__comment_comment_component__["a" /* CommentComponent */] },
    { path: 'user-contribution', component: __WEBPACK_IMPORTED_MODULE_12__user_contribution_user_contribution_component__["a" /* UserContributionComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_13__user_user_component__["a" /* UserComponent */] },
    { path: 'section-analytics', component: __WEBPACK_IMPORTED_MODULE_14__section_analytics_section_analytics_component__["a" /* SectionAnalyticsComponent */] },
    { path: 'article-analytics', component: __WEBPACK_IMPORTED_MODULE_15__article_analytics_article_analytics_component__["a" /* ArticleAnalyticsComponent */] },
    { path: 'element-analytics', component: __WEBPACK_IMPORTED_MODULE_16__element_analytics_element_analytics_component__["a" /* ElementAnalyticsComponent */] },
    { path: 'template-analytics', component: __WEBPACK_IMPORTED_MODULE_17__template_analytics_template_analytics_component__["a" /* TemplateAnalyticsComponent */] },
    { path: 'section-templates', component: __WEBPACK_IMPORTED_MODULE_18__section_templates_section_templates_component__["a" /* SectionTemplatesComponent */] },
    { path: 'category-templates', component: __WEBPACK_IMPORTED_MODULE_19__category_templates_category_templates_component__["a" /* CategoryTemplatesComponent */] },
    { path: 'list-templates', component: __WEBPACK_IMPORTED_MODULE_20__list_templates_list_templates_component__["a" /* ListTemplatesComponent */] },
    { path: 'homepage-templates', component: __WEBPACK_IMPORTED_MODULE_21__homepage_templates_homepage_templates_component__["a" /* HomepageTemplatesComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_22__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_24__edit_profile_edit_profile_component__["a" /* EditProfileComponent */] },
];
var MODULE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__["a" /* AdminComponent */],
    __WEBPACK_IMPORTED_MODULE_0__home_home_component__["b" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__edit_admin_edit_admin_component__["a" /* EditAdminComponent */],
    __WEBPACK_IMPORTED_MODULE_3__view_section_view_section_component__["a" /* ViewSectionComponent */],
    __WEBPACK_IMPORTED_MODULE_4__add_section_add_section_component__["a" /* AddSectionComponent */],
    __WEBPACK_IMPORTED_MODULE_5__add_category_add_category_component__["a" /* AddCategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_6__add_subcategory_add_subcategory_component__["a" /* AddSubcategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_7__add_content_add_content_component__["a" /* AddContentComponent */],
    __WEBPACK_IMPORTED_MODULE_8__view_content_view_content_component__["a" /* ViewContentComponent */],
    __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
    __WEBPACK_IMPORTED_MODULE_10__priority_priority_component__["a" /* PriorityComponent */],
    __WEBPACK_IMPORTED_MODULE_11__comment_comment_component__["a" /* CommentComponent */],
    __WEBPACK_IMPORTED_MODULE_12__user_contribution_user_contribution_component__["a" /* UserContributionComponent */],
    __WEBPACK_IMPORTED_MODULE_13__user_user_component__["a" /* UserComponent */],
    __WEBPACK_IMPORTED_MODULE_14__section_analytics_section_analytics_component__["a" /* SectionAnalyticsComponent */],
    __WEBPACK_IMPORTED_MODULE_15__article_analytics_article_analytics_component__["a" /* ArticleAnalyticsComponent */],
    __WEBPACK_IMPORTED_MODULE_16__element_analytics_element_analytics_component__["a" /* ElementAnalyticsComponent */],
    __WEBPACK_IMPORTED_MODULE_17__template_analytics_template_analytics_component__["a" /* TemplateAnalyticsComponent */],
    __WEBPACK_IMPORTED_MODULE_18__section_templates_section_templates_component__["a" /* SectionTemplatesComponent */],
    __WEBPACK_IMPORTED_MODULE_19__category_templates_category_templates_component__["a" /* CategoryTemplatesComponent */],
    __WEBPACK_IMPORTED_MODULE_20__list_templates_list_templates_component__["a" /* ListTemplatesComponent */],
    __WEBPACK_IMPORTED_MODULE_21__homepage_templates_homepage_templates_component__["a" /* HomepageTemplatesComponent */],
    __WEBPACK_IMPORTED_MODULE_22__welcome_welcome_component__["a" /* WelcomeComponent */],
    __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_24__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-admin/edit-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                \n                <md-progress-bar *ngIf=\"waitLoader\" mode=\"indeterminate\"></md-progress-bar>\n                <form [formGroup]=\"complexForm\" >\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\n                            <div class=\"card\"> \n                                <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                    <i class=\"material-icons\">person</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Basic Information</h4>\n\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                        <div>\n                                            <ngx-croppie *ngIf=\"croppieImage\" #ngxCroppie [croppieOptions]=\"croppieOptions\" [imageUrl]=\"croppieImage\" (result)=\"newImageResultFromCroppie($event)\"></ngx-croppie>\n                                        </div>\n                                        <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                            <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppie(myForm)\">\n                                                    Save\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>    \n                                                <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEdit()\">\n                                                    <i class=\"fa fa-times\"></i> Cancel\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                            </div>\n                                            <div class=\"fileinput-new thumbnail\">\n                                                <img [src]=\"imageToDisplay\" alt=\"\" />\n                                            </div>\n                                            <!-- <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n                                                <span class=\"btn custom-btn btn-round btn-file\" (click)=\"saveImageFromCroppie(myForm)\">\n                                                    Save\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>    \n                                                <span class=\"btn btn-danger btn-round file_remove\" data-dismiss=\"modal\" (click)=\"cancelCroppieEdit()\">\n                                                    <i class=\"fa fa-times\"></i> Cancel\n                                                    <div class=\"ripple-container\"></div>\n                                                </span>\n                                            </div> -->\n                                            <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n                                                <span class=\"fileinput-new\">Change</span>\n                                                <input type=\"file\" class=\"file-type\" id=\"fileupload\" #imageUpload (change)=\"imageUploadEvent($event)\" accept=\"image/gif, image/jpeg, image/png\" />\n                                                <div class=\"ripple-container\"></div>\n                                            </span>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"First Name *\" name=\"firstName\" type=\"text\"  [formControl]=\"complexForm.controls['firstName']\" [(ngModel)]=\"register.firstName\" [readonly]=\"disable\">\n                                             <md-error  *ngIf=\"complexForm.controls['firstName'].hasError('required') && complexForm.controls['firstName'].touched\">\n                                               First Name is <strong>required</strong>\n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['firstName'].hasError('pattern')\">\n                                               only alphabets are acceptable \n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['firstName'].hasError('maxlength')\">\n                                               max length is 30\n                                             </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput name=\"lastName\"  placeholder=\"Last Name *\" type=\"text\"  [formControl]=\"complexForm.controls['lastName']\" [(ngModel)]=\"register.lastName\" [readonly]=\"disable\">\n                                             <md-error  *ngIf=\"complexForm.controls['lastName'].hasError('required')\">\n                                               Last Name is <strong>required</strong>\n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['lastName'].hasError('pattern')\">\n                                               only alphabets are acceptable \n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['lastName'].hasError('maxlength')\">\n                                               max length is 30\n                                             </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput name=\"email\" placeholder=\"Email *\" type=\"email\"  [formControl]=\"complexForm.controls['email']\" [(ngModel)]=\"register.email\" [readonly]=\"disable\">\n                                            <md-error  *ngIf=\"complexForm.controls['email'].hasError('required')\">\n                                               Email is <strong>required</strong>\n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['email'].hasError('pattern')\">\n                                              Please insert valid email id\n                                             </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput name=\"alteremail\" placeholder=\"Alternate Email *\" type=\"email\"  [formControl]=\"complexForm.controls['alternativeEmail']\" [(ngModel)]=\"register.alternativeEmail\" [readonly]=\"disable\">\n                                            <md-error  *ngIf=\"complexForm.controls['alternativeEmail'].hasError('required')\">\n                                               Email is <strong>required</strong>\n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['alternativeEmail'].hasError('pattern')\">\n                                              Please insert valid email id\n                                             </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput name=\"password\" placeholder=\"Password *\" type=\"password\"  [formControl]=\"complexForm.controls['password']\" [(ngModel)]=\"register.password\">\n                                            <md-error  *ngIf=\"complexForm.controls['password'].hasError('required')\">\n                                               Password is <strong>required</strong>\n                                             </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput name=\"contactNo\" placeholder=\"Contact No. *\" type=\"text\"  [formControl]=\"complexForm.controls['contactNo']\" [(ngModel)]=\"register.contactNo\" [readonly]=\"disable\">\n                                            <md-error  *ngIf=\"complexForm.controls['contactNo'].hasError('required')\">\n                                               Contact No is <strong>required</strong>\n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['contactNo'].hasError('pattern')\">\n                                               only numeric value acceptable\n                                             </md-error>\n                                             <md-error  *ngIf=\"complexForm.controls['contactNo'].hasError('maxlength')\">\n                                               max length is 10\n                                             </md-error>\n                                        </md-form-field>\n                                    </div>\n                                        \n                                     <div *ngIf=\"showsecondary>0\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language1']\" [(ngModel)]=\"register.language1\" name=\"language1\">\n                                                <md-option *ngFor=\"let lang of getResources1()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName1']\" [(ngModel)]=\"register.firstName1\" name=\"firstName1\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName1']\" [(ngModel)]=\"register.lastName1\" name=\"lastName1\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>1\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language2']\" [(ngModel)]=\"register.language2\" name=\"language2\">\n                                                <md-option *ngFor=\"let lang of getResources2()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName2']\" [(ngModel)]=\"register.firstName2\" name=\"firstName2\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName2']\" [(ngModel)]=\"register.lastName2\" name=\"lastName2\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>2\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language3']\" [(ngModel)]=\"register.language3\" name=\"language1\">\n                                                <md-option *ngFor=\"let lang of getResources3()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName3']\" [(ngModel)]=\"register.firstName3\" name=\"firstName3\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName3']\" [(ngModel)]=\"register.lastName3\" name=\"lastName3\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>3\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                         <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language4']\" [(ngModel)]=\"register.language4\" name=\"language4\">\n                                                <md-option *ngFor=\"let lang of getResources4()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName4']\" [(ngModel)]=\"register.firstName4\" name=\"firstName4\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName4']\" [(ngModel)]=\"register.lastName4\" name=\"lastName4\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>4\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                         <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language5']\" [(ngModel)]=\"register.language5\" name=\"language5\">\n                                                <md-option *ngFor=\"let lang of getResources5()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName5']\" [(ngModel)]=\"register.firstName5\" name=\"firstName1\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName5']\" [(ngModel)]=\"register.lastName5\" name=\"lastName5\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>5\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                         <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language6']\" [(ngModel)]=\"register.language6\" name=\"language6\">\n                                                <md-option *ngFor=\"let lang of getResources6()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName6']\" [(ngModel)]=\"register.firstName6\" name=\"firstName6\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName6']\" [(ngModel)]=\"register.lastName6\" name=\"lastName6\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>6\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                       <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language7']\" [(ngModel)]=\"register.language7\" name=\"language7\">\n                                                <md-option *ngFor=\"let lang of getResources7()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName7']\" [(ngModel)]=\"register.firstName7\" name=\"firstName7\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName7']\" [(ngModel)]=\"register.lastName7\" name=\"lastName7\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>7\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                       <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language8']\" [(ngModel)]=\"register.language8\" name=\"language8\">\n                                                <md-option *ngFor=\"let lang of getResources8()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName8']\" [(ngModel)]=\"register.firstName8\" name=\"firstName8\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName8']\" [(ngModel)]=\"register.lastName8\" name=\"lastName8\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>8\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language9']\" [(ngModel)]=\"register.language9\" name=\"language9\">\n                                                <md-option *ngFor=\"let lang of getResources9()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName9']\" [(ngModel)]=\"register.firstName9\" name=\"firstName9\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName9']\" [(ngModel)]=\"register.lastName9\" name=\"lastName9\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>9\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                         <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language10']\" [(ngModel)]=\"register.language10\" name=\"language10\">\n                                                <md-option *ngFor=\"let lang of getResources10()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName10']\" [(ngModel)]=\"register.firstName10\" name=\"firstName10\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName10']\" [(ngModel)]=\"register.lastName10\" name=\"lastName10\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"showsecondary>10\">\n                                        <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                            </md-select>\n                                        </div> -->\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-select placeholder=\"Select Language\" [formControl]=\"complexForm.controls['language11']\" [(ngModel)]=\"register.language11\" name=\"language11\">\n                                                <md-option *ngFor=\"let lang of getResources11()\" [value]=\"lang.language\" >{{lang.language}}</md-option>\n                                               <!--  <md-option value=\"2\"> Language2 </md-option>\n                                                <md-option value=\"3\"> Language3 </md-option>\n                                                <md-option value=\"4\"> Language4 </md-option> -->\n                                            </md-select>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"complexForm.controls['firstName11']\" [(ngModel)]=\"register.firstName11\" name=\"firstName11\">\n                                            </md-form-field>\n                                        </div>\n                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                            <md-form-field>\n                                                <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"complexForm.controls['lastName11']\" [(ngModel)]=\"register.lastName11\" name=\"lastName11\">\n                                            </md-form-field>\n                                        </div>\n                                    </div>\n\n                                  <!--   <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"showsecondary==0\">\n                                        <md-select placeholder=\"Select State\">\n                                            <md-option value=\"1\"> State1 </md-option>\n                                            <md-option value=\"2\"> State2 </md-option>\n                                            <md-option value=\"3\"> State3 </md-option>\n                                            <md-option value=\"4\"> State4 </md-option>\n                                        </md-select>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"showsecondary==0\">\n                                        <md-select placeholder=\"Select Language\">\n                                            <md-option value=\"1\"> Language1 </md-option>\n                                            <md-option value=\"2\"> Language2 </md-option>\n                                            <md-option value=\"3\"> Language3 </md-option>\n                                            <md-option value=\"4\"> Language4 </md-option>\n                                        </md-select>\n                                    </div> -->\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" >\n                                        <button class=\"btn btn-round btn-success appendLang\" type=\"button\" (click)=\"addAppend()\">Add Languages<i class=\"material-icons\">add</i></button>\n                                    </div>\n                                    \n                                    \n                                    <!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\" *ngIf=\"showsecondary\">\n                                        <button class=\"btn btn-round btn-success appendLang\" (click)=\"removeAppend()\">Remove Languages<i class=\"material-icons\">add</i></button>\n                                    </div> -->\n\n                               \n                            </div>\n                        </div>\n                    </div>\n                        \n\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                            <div class=\"card\"> \n                                <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                    <i class=\"material-icons\">touch_app</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Access Information</h4>\n                                    <div class=\"cus-form m-t-20\">\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <label class=\"form-group col-md-12\">Role as: *</label>\n                                                <md-radio-group  name=\"roleAdministrator\"  [formControl]=\"complexForm.controls['role']\" [(ngModel)]=\"register.role\" >\n                                                    <md-radio-button value=\"superAdmin\" class=\"col-md-4 col-sm-4 col-xs-12\">Administrator</md-radio-button>\n                                                    <md-radio-button value=\"contentWriter\" class=\"col-md-4 col-sm-4 col-xs-12\">Content Writer</md-radio-button>\n                                                    <md-radio-button value=\"businessuser\" class=\"col-md-4 col-sm-4 col-xs-12\">Business User</md-radio-button>\n                                                </md-radio-group>\n                                            </div>\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <label class=\"form-group col-md-12\" >Name of section:</label>\n                                                <div *ngFor=\"let option of options \">\n                                                    \n                                                <md-checkbox class=\"col-md-4 col-sm-4 col-xs-12\"value=\"{{option.value}}\" [(ngModel)]=\"option.checked\"  [formControl]=\"complexForm.controls['section']\">{{option.name}}</md-checkbox>\n                                                </div>\n                                               <!--  <md-checkbox class=\"col-md-4 col-sm-4 col-xs-12\"value=\"{{option.value}}\" [(ngModel)]=\"option.checked\" >Loan</md-checkbox>\n                                                <md-checkbox class=\"col-md-4 col-sm-4 col-xs-12\"value=\"{{option.value}}\"  [(ngModel)]=\"option.checked\" >News</md-checkbox> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                            <div class=\"card\"> \n                                <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                    <i class=\"material-icons\">verified_user</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Backend Privilieges:</h4>\n                                    <div class=\"cus-form\">\n                                        <div class=\"row wrap-form\">\n                                            <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                                <div class=\"privlig-box\">\n                                                    <div class=\"privlig-header\">\n                                                        <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['sectionManagement']\" [(ngModel)]=\"register.sectionManagement\"  (change)=\"onPriviliegesChange('section',register.sectionManagement)\" >Section Management</md-checkbox>\n                                                    </div>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['addSection']\" [(ngModel)]=\"register.addSection\"  (change)=\"onPriviliegesChange('sectionOption')\" >Add Section</md-checkbox >\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['addcategory']\" [(ngModel)]=\"register.addcategory\"  (change)=\"onPriviliegesChange('sectionOption')\" >Add category</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['addSubcategory']\" [(ngModel)]=\"register.addSubcategory\"  (change)=\"onPriviliegesChange('sectionOption')\" >Add Subcategory</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"  [formControl]=\"complexForm.controls['viewEditSection']\" [(ngModel)]=\"register.viewEditSection\"  (change)=\"onPriviliegesChange('sectionOption')\"  >View/Edit Section</md-checkbox>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                                <div class=\"privlig-box\">\n                                                    <div class=\"privlig-header\">\n                                                        <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['templateManagement']\" [(ngModel)]=\"register.templateManagement\" (change)=\"onPriviliegesChange('template',register.templateManagement)\" >Template Management</md-checkbox>\n                                                    </div>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['sectionTemplate']\" [(ngModel)]=\"register.sectionTemplate\" (change)=\"onPriviliegesChange('templateOption')\" >Section Template</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['categoryTemplate']\" [(ngModel)]=\"register.categoryTemplate\" (change)=\"onPriviliegesChange('templateOption')\" >Category Template</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['listingView']\" [(ngModel)]=\"register.listingView\" (change)=\"onPriviliegesChange('templateOption')\" >Listing View Template</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['homepageTemplate']\" [(ngModel)]=\"register.homepageTemplate\" (change)=\"onPriviliegesChange('templateOption')\" >Homepage Template</md-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row wrap-form\">\n                                            <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                                <div class=\"privlig-box\">\n                                                    <div class=\"privlig-header\">\n                                                        <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"  [formControl]=\"complexForm.controls['administratorManagement']\" [(ngModel)]=\"register.administratorManagement\" (change)=\"onPriviliegesChange('administrator',register.administratorManagement)\" >Admin Management</md-checkbox>\n                                                    </div>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['viewEditAdministrator']\" [(ngModel)]=\"register.viewEditAdministrator\" (change)=\"onPriviliegesChange('administratorOption')\" >View/Edit Administrator</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['addAdministrator']\" [(ngModel)]=\"register.addAdministrator\" (change)=\"onPriviliegesChange('administratorOption')\" >Add Administrator</md-checkbox>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                                                <div class=\"privlig-box\">\n                                                    <div class=\"privlig-header\">\n                                                        <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['contentManagement']\" [(ngModel)]=\"register.contentManagement\" (change)=\"onPriviliegesChange('content',register.contentManagement)\" >Content Management</md-checkbox>\n                                                    </div>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['addContentManagement']\" [(ngModel)]=\"register.addContentManagement\" (change)=\"onPriviliegesChange('contentOption')\" >Add Content Management</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['manageContentItem']\" [(ngModel)]=\"register.manageContentItem\" (change)=\"onPriviliegesChange('contentOption')\" >Manage Content Item</md-checkbox>\n                                                    <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['commentManagement']\" [(ngModel)]=\"register.commentManagement\" (change)=\"onPriviliegesChange('contentOption')\" >Comment Management</md-checkbox>\n                                                </div>\n                                            </div>\n                                        </div>\n\n\n                                        <div class=\"row wrap-form\">\n\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\"  [formControl]=\"complexForm.controls['userContributionManagement']\" [(ngModel)]=\"register.userContributionManagement\" >User Contribution Management</md-checkbox>\n                                                <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['homepageManagement']\" [(ngModel)]=\"register.homepageManagement\" >Homepage Management</md-checkbox>\n                                                <md-checkbox class=\"col-md-12 col-sm-12 col-xs-12\" [formControl]=\"complexForm.controls['userManagement']\" [(ngModel)]=\"register.userManagement\" >User Management</md-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"card\"> \n                                <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                    <i class=\"material-icons\">timeline</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\"> Platform Analytics:</h4>\n                                    <div class=\"cus-form m-t-20\">\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                                <md-checkbox class=\"col-md-3 col-sm-3 col-xs-12\" [formControl]=\"complexForm.controls['sectionAnalytics']\" [(ngModel)]=\"register.sectionAnalytics\" >Section Analytics</md-checkbox>\n                                                <md-checkbox class=\"col-md-3 col-sm-3 col-xs-12\" [formControl]=\"complexForm.controls['articleAnalytics']\" [(ngModel)]=\"register.articleAnalytics\" >Article Analytics</md-checkbox>\n                                                <md-checkbox class=\"col-md-3 col-sm-3 col-xs-12\" [formControl]=\"complexForm.controls['elementAnalytics']\" [(ngModel)]=\"register.elementAnalytics\" >Element Analytics</md-checkbox>\n                                                <md-checkbox class=\"col-md-3 col-sm-3 col-xs-12\" [formControl]=\"complexForm.controls['templateAnalytics']\" [(ngModel)]=\"register.templateAnalytics\" >Template Analytics</md-checkbox>\n                                                <md-checkbox class=\"col-md-3 col-sm-3 col-xs-12\" [formControl]=\"complexForm.controls['googleAnalytics']\" [(ngModel)]=\"register.googleAnalytics\" >Google  Analytics</md-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                            <button class=\"btn custom-btn\" [disabled]=\"!complexForm.valid\" (click)=\"onRegister()\"> Submit </button>\n                        </div>\n\n                    </div>\n                    \n                </form>\n            </div>\n        </div>\n        \n        <app-footer></app-footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-admin/edit-admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-admin/edit-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_model_component__ = __webpack_require__("../../../../../src/app/dashboard/edit-admin/edit.model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_saredResources__ = __webpack_require__("../../../../../src/app/models/saredResources.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_service__ = __webpack_require__("../../../../../src/app/dashboard/edit-admin/edit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_croppie__ = __webpack_require__("../../../../ngx-croppie/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_section_service__ = __webpack_require__("../../../../../src/app/providers/section.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var EditAdminComponent = (function () {
    function EditAdminComponent(router, fb, vcr, toastr, adminService, http, appProvider, sectionService) {
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.adminService = adminService;
        this.http = http;
        this.appProvider = appProvider;
        this.sectionService = sectionService;
        this.register = new __WEBPACK_IMPORTED_MODULE_5__edit_model_component__["a" /* Admin */]();
        this.stringResource = new __WEBPACK_IMPORTED_MODULE_6__models_saredResources__["a" /* StringResource */]();
        this.newUploadFile = null;
        this.options = [];
        this.widthPx = '300';
        this.heightPx = '300';
        this.imageUrl = '';
        this.showsecondary = 0;
        this.complexForm = fb.group({
            'firstName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern('[a-zA-Z ]*')])],
            'lastName': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern('[a-zA-Z ]*')])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)])],
            'alternativeEmail': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'contactNo': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(10)])],
            'role': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required])],
            'image': [null],
            "section": [null],
            'administratorManagement': [null],
            'viewEditAdministrator': [null],
            'addAdministrator': [null],
            'templateManagement': [null],
            'sectionTemplate': [null],
            'categoryTemplate': [null],
            'listingView': [null],
            'homepageTemplate': [null],
            'sectionManagement': [null],
            'addSection': [null],
            'addcategory': [null],
            'addSubcategory': [null],
            'viewEditSection': [null],
            'contentManagement': [null],
            'addContentManagement': [null],
            'manageContentItem': [null],
            'commentManagement': [null],
            'userContributionManagement': [null],
            'homepageManagement': [null],
            'userManagement': [null],
            'sectionAnalytics': [null],
            'articleAnalytics': [null],
            'elementAnalytics': [null],
            'templateAnalytics': [null],
            'googleAnalytics': [null],
            'language1': [null],
            'firstName1': [null],
            'lastName1': [null],
            'language2': [null],
            'firstName2': [null],
            'lastName2': [null],
            'language3': [null],
            'firstName3': [null],
            'lastName3': [null],
            'language4': [null],
            'firstName4': [null],
            'lastName4': [null],
            'language5': [null],
            'firstName5': [null],
            'lastName5': [null],
            'language6': [null],
            'firstName6': [null],
            'lastName6': [null],
            'language7': [null],
            'firstName7': [null],
            'lastName7': [null],
            'language8': [null],
            'firstName8': [null],
            'lastName8': [null],
            'language9': [null],
            'firstName9': [null],
            'lastName9': [null],
            'language10': [null],
            'firstName10': [null],
            'lastName10': [null],
            'language11': [null],
            'firstName11': [null],
            'lastName11': [null]
        });
        this.toastr.setRootViewContainerRef(vcr);
        this.localImage = {};
        this.data = {};
    }
    Object.defineProperty(EditAdminComponent.prototype, "imageToDisplay", {
        get: function () {
            if (this.currentImage) {
                return this.currentImage;
            }
            if (this.imageUrl) {
                return this.imageUrl;
            }
            return "http://placehold.it/" + this.widthPx + "x" + this.heightPx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAdminComponent.prototype, "croppieOptions", {
        get: function () {
            var opts = {};
            opts.viewport = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.boundary = {
                width: parseInt(this.widthPx, 10),
                height: parseInt(this.heightPx, 10)
            };
            opts.enforceBoundary = true;
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    EditAdminComponent.prototype.ngOnInit = function () {
        this.currentImage = this.imageUrl;
        this.croppieImage = this.imageUrl;
        var a;
        $('.file-type').on('change', function (e) {
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });
        $('.file_remove').on('click', function () {
            $(this).closest('.fileinput-exists').hide();
            $(this).closest('.fileinput').find('.fileinput-noexists').show();
        });
        this.getSectionList();
        if (this.appProvider.current.adminPageFlag == "allEdit") {
            this.register = this.appProvider.current.adminData;
            this.options = this.appProvider.current.adminData.sectionName;
            this.currentImage = this.appProvider.current.adminData.image;
            this.register.password = window.atob(this.register.plain);
        }
    };
    EditAdminComponent.prototype.onRegister = function () {
        var _this = this;
        var languageArray = this.getLanguage();
        this.waitLoader = true;
        console.log(JSON.stringify(this.options));
        this.register.sectionName = this.options;
        this.register.image = this.currentImage;
        this.register.langDetails = languageArray;
        if (this.appProvider.current.adminPageFlag == "allEdit") {
            this.register.plain = window.btoa(this.register.password);
            this.adminService.onEditAdminProfile(this.register)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.appProvider.current.adminPageFlag = "null";
                    _this.router.navigate(['/home'], {
                        skipLocationChange: true
                    });
                }
            });
        }
        else {
            this.register.plain = window.btoa(this.register.password);
            this.register.status = true;
            this.register.delstatus = "false";
            this.adminService.onRegister(this.register)
                .subscribe(function (data) {
                _this.waitLoader = false;
                if (data.success == false) {
                    _this.toastr.error("Admin data can't added ", "Error", {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    _this.router.navigate(['/home'], { skipLocationChange: true });
                }
            });
        }
    };
    EditAdminComponent.prototype.onPriviliegesChange = function (flag, status) {
        if (flag == "administrator") {
            this.register.viewEditAdministrator = status;
            this.register.addAdministrator = status;
        }
        else if (flag == "administratorOption") {
            if (this.register.viewEditAdministrator == false && this.register.addAdministrator == false) {
                this.register.administratorManagement = false;
            }
            else {
                this.register.administratorManagement = true;
            }
        }
        else if (flag == "template") {
            this.register.sectionTemplate = status;
            this.register.categoryTemplate = status;
            this.register.listingView = status;
            this.register.homepageTemplate = status;
        }
        else if (flag == "templateOption") {
            if (this.register.sectionTemplate == false && this.register.categoryTemplate == false && this.register.listingView == false && this.register.homepageTemplate == false) {
                this.register.templateManagement = false;
            }
            else {
                this.register.templateManagement = true;
            }
        }
        else if (flag == "section") {
            this.register.addSection = status;
            this.register.addcategory = status;
            this.register.addSubcategory = status;
            this.register.viewEditSection = status;
        }
        else if (flag == "sectionOption") {
            if (this.register.addSection == false && this.register.addcategory == false && this.register.addSubcategory == false && this.register.viewEditSection == false) {
                this.register.sectionManagement = false;
            }
            else {
                this.register.sectionManagement = true;
            }
        }
        else if (flag == "content") {
            this.register.addContentManagement = status;
            this.register.manageContentItem = status;
            this.register.commentManagement = status;
        }
        else if (flag == "contentOption") {
            if (this.register.addContentManagement == false && this.register.manageContentItem == false && this.register.commentManagement == false) {
                this.register.contentManagement = false;
            }
            else {
                this.register.contentManagement = true;
            }
        }
    };
    EditAdminComponent.prototype.onChange = function (event, input) {
        var files = [].slice.call(event.target.files);
        this.uploadFile = files;
        this.newUploadFiles = files;
        input.value = files.map(function (f) { return f.name; }).join(',');
        this.length = files.length;
        this.convertToBase64();
    };
    EditAdminComponent.prototype.convertToBase64 = function () {
        var _this = this;
        this.tempCustomerBase64 = [];
        for (var i = 0; i < this.length; i++) {
            var formData = new FormData();
            this.uploadFile = this.newUploadFiles[i];
            formData.append('photos', this.uploadFile);
            this.register.image = formData;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            this.http.post('http://52.15.178.19:3001/api/test', this.register.image, options)
                .subscribe(function (data) {
                data = data.json().base64String;
                _this.tempCustomerBase64.push(data);
                setTimeout(function () {
                    //this.patch_information = "Saved"
                }, 10000);
            }, function (error) { return console.log(error); });
        }
    };
    Object.defineProperty(EditAdminComponent.prototype, "selectedOptions", {
        get: function () {
            return this.options
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    EditAdminComponent.prototype.ngOnChanges = function (changes) {
        if (this.croppieImage) {
            return;
        }
        if (!changes.imageUrl) {
            return;
        }
        if (!changes.imageUrl.previousValue && changes.imageUrl.currentValue) {
            this.croppieImage = changes.imageUrl.currentValue;
        }
    };
    EditAdminComponent.prototype.newImageResultFromCroppie = function (img) {
        this.croppieImage = img;
        console.log(this.croppieImage);
    };
    EditAdminComponent.prototype.saveImageFromCroppie = function () {
        this.currentImage = this.croppieImage;
    };
    EditAdminComponent.prototype.cancelCroppieEdit = function () {
        this.croppieImage = '';
        this.currentImage = '';
    };
    EditAdminComponent.prototype.imageUploadEvent = function (evt) {
        var _this = this;
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        var file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            _this.croppieImage = fr.result;
        };
        fr.readAsDataURL(file);
    };
    EditAdminComponent.prototype.addAppend = function () {
        this.showsecondary = this.showsecondary + 1;
    };
    EditAdminComponent.prototype.removeAppend = function () {
        //this.showsecondary=!this.showsecondary    
    };
    EditAdminComponent.prototype.getResources1 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources2 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources3 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources4 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources5 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources6 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources7 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources8 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources9 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language10
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources10 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language9
                && f.language != _this.register.language11;
        });
        return b;
    };
    EditAdminComponent.prototype.getResources11 = function () {
        var _this = this;
        var b = this.stringResource.language.filter(function (f) {
            return f.language != _this.register.language1
                && f.language != _this.register.language2
                && f.language != _this.register.language3
                && f.language != _this.register.language4
                && f.language != _this.register.language5
                && f.language != _this.register.language6
                && f.language != _this.register.language7
                && f.language != _this.register.language8
                && f.language != _this.register.language9
                && f.language != _this.register.language10;
        });
        return b;
    };
    EditAdminComponent.prototype.getLanguage = function () {
        var d = [];
        if (this.register.language1 || this.register.firstName1 || this.register.lastName1) {
            d.push({ language: this.register.language1, firstName: this.register.firstName1, lastName: this.register.lastName1 });
        }
        if (this.register.language2 || this.register.firstName2 || this.register.lastName2) {
            d.push({ language: this.register.language2, firstName: this.register.firstName2, lastName: this.register.lastName2 });
        }
        if (this.register.language3 || this.register.firstName3 || this.register.lastName3) {
            d.push({ language: this.register.language3, firstName: this.register.firstName3, lastName: this.register.lastName3 });
        }
        if (this.register.language4 || this.register.firstName4 || this.register.lastName4) {
            d.push({ language: this.register.language4, firstName: this.register.firstName4, lastName: this.register.lastName4 });
        }
        if (this.register.language5 || this.register.firstName5 || this.register.lastName5) {
            d.push({ language: this.register.language5, firstName: this.register.firstName5, lastName: this.register.lastName5 });
        }
        if (this.register.language6 || this.register.firstName6 || this.register.lastName6) {
            d.push({ language: this.register.language6, firstName: this.register.firstName6, lastName: this.register.lastName6 });
        }
        if (this.register.language7 || this.register.firstName7 || this.register.lastName7) {
            d.push({ language: this.register.language7, firstName: this.register.firstName7, lastName: this.register.lastName7 });
        }
        if (this.register.language8 || this.register.firstName8 || this.register.lastName8) {
            d.push({ language: this.register.language8, firstName: this.register.firstName8, lastName: this.register.lastName8 });
        }
        if (this.register.language9 || this.register.firstName9 || this.register.lastName9) {
            d.push({ language: this.register.language9, firstName: this.register.firstName9, lastName: this.register.lastName9 });
        }
        if (this.register.language10 || this.register.firstName10 || this.register.lastName10) {
            d.push({ language: this.register.language10, firstName: this.register.firstName10, lastName: this.register.lastName10 });
        }
        if (this.register.language11 || this.register.firstName11 || this.register.lastName11) {
            d.push({ language: this.register.language11, firstName: this.register.firstName11, lastName: this.register.lastName11 });
        }
        return d;
    };
    EditAdminComponent.prototype.getSectionList = function () {
        var _this = this;
        this.sectionService.onGetSection()
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.sections = data;
            for (var i = 0; i < _this.sections.length; i++) {
                var obj = _this.sections[i];
                // var obj2=[]
                //     obj2['_id']=obj._id;
                //     obj2['name']=obj.sectionName;
                //     obj2['value']=obj.sectionName;
                //     obj2['checked']=false;
                _this.options.push({ _id: obj._id, name: obj.sectionName, value: obj.sectionName, checked: false });
                console.log(JSON.stringify(_this.options));
            }
        }, function (error) {
            alert(error);
        });
    };
    return EditAdminComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ngxCroppie'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_croppie__["a" /* NgxCroppieComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_croppie__["a" /* NgxCroppieComponent */]) === "function" && _a || Object)
], EditAdminComponent.prototype, "ngxCroppie", void 0);
EditAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-admin',
        template: __webpack_require__("../../../../../src/app/dashboard/edit-admin/edit-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/edit-admin/edit-admin.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControlDirective */], __WEBPACK_IMPORTED_MODULE_7__edit_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_10__providers_section_service__["a" /* SectionService */]],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__edit_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__edit_service__["a" /* AdminService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_app_provider__["a" /* AppProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__providers_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_section_service__["a" /* SectionService */]) === "function" && _j || Object])
], EditAdminComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=edit-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-admin/edit.model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Admin; });
var Admin = (function () {
    function Admin() {
    }
    return Admin;
}());

//# sourceMappingURL=edit.model.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-admin/edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__("../../../../../src/app/env.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.onRegister = function (loginModel) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "adminSignup";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(loginModel), options).map(function (response) {
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    AdminService.prototype.onEditAdminProfile = function (loginModel) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editAdminProfile/" + loginModel._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(loginModel), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    AdminService.prototype.onEditAdminStatus = function (loginModel) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editAdminStatus/" + loginModel._id + '/0';
        var a = {
            status: loginModel.status,
            _id: loginModel._id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(a), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    AdminService.prototype.onEditAdminPassword = function (id, pass) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "changePassword/" + id;
        var a = {
            password: pass,
            plain: window.btoa(pass),
            _id: id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(a), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    AdminService.prototype.onAdminDelete = function (loginModel) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editAdminStatus/" + loginModel._id + '/1';
        var a = {
            delstatus: loginModel.delstatus,
            _id: loginModel._id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(a), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=edit.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n\n                        <div class=\"card\" > \n                        \t<div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">person</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Profile</h4>\n                                <div class=\"row\">\n                                \t<div class=\"profile-panel\">\n\t\t                            \t<div class=\"col-md-5 col-sm-5 col-xs-12 text-center\">\n\t                            \t\t\n\t                                        <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n\t                                            <div class=\"fileinput-new thumbnail\">\n\t                                                <img alt=\"...\" src=\"./assets/img/faces/marc.jpg\">\n\t                                            </div>\n\t                                            <div class=\"fileinput-preview fileinput-exists\" style=\"display:none;\">\n\t                                                <span class=\"btn custom-btn btn-round btn-file\">\n\t                                                    Change\n\t                                                    <input type=\"file\" class=\"file-type\">\n\t                                                    <div class=\"ripple-container\"></div>\n\t                                                </span>    \n\t                                                <span class=\"btn btn-danger btn-round file_remove\" >\n\t                                                    <i class=\"fa fa-times\"></i> Remove\n\t                                                    <div class=\"ripple-container\"></div>\n\t                                                </span>\n\t                                            </div>\n\t                                            <span class=\"btn custom-btn btn-round btn-file fileinput-noexists\">\n\t                                                <span class=\"fileinput-new\">Change</span>\n\t                                                <input type=\"file\" class=\"file-type\"/>\n\t                                                <div class=\"ripple-container\"></div>\n\t                                            </span>\n\t                                        </div>\n\t                                    </div>\n\n\t\t                            \t<div class=\"col-md-7 col-sm-7 col-xs-12\">\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                            <md-form-field>\n\t                                                <input mdInput placeholder=\"Name\" type=\"text\">\n\t                                            </md-form-field>\n\t                                        </div>\n\t                                        <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                            <md-form-field>\n\t                                                <input mdInput placeholder=\"Role\" type=\"text\">\n\t                                            </md-form-field>\n\t                                        </div>\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                        \t<md-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<input mdInput [mdDatepicker]=\"picker\" placeholder=\"Date of Joining\">\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t\t\t\t  \t<md-datepicker #picker></md-datepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t</md-form-field>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                            <md-form-field>\n\t                                                <input mdInput placeholder=\"Email\" type=\"email\">\n\t                                            </md-form-field>\n\t                                        </div>\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                                            <md-form-field>\n\t                                                <input mdInput placeholder=\"Contact No\" type=\"text\">\n\t                                            </md-form-field>\n\t                                        </div>\t\t                            \t\t\n\t\t                            \t</div>\n\t\t                            </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"card\" > \n                        \t<div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">lock</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Change Password</h4>\n                                <div class=\"row\">\n                                \t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Old Password\" type=\"password\">\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"New Password\" type=\"password\">\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Confirm Password\" type=\"password\">\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t                            \t\t<button class=\"btn custom-btn btn-round\"> Save </button>\n                            \t\t</div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-profile/edit-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileinput.fileinput-new {\n  max-width: none; }\n\n.fileinput .thumbnail {\n  max-width: none;\n  width: auto; }\n\n.fileinput .thumbnail img {\n  width: auto;\n  max-height: 330px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProfileComponent = (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        $('.file-type').on('change', function (e) {
            var tmppath = URL.createObjectURL(e.target.files[0]);
            console.log($(this));
            $(this).closest('.fileinput').find('img').attr('src', tmppath);
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });
        $('.file_remove').on('click', function () {
            var a = $(this).closest('.fileinput').find('img').attr('src', './assets/img/faces/marc.jpg');
            console.log(a);
            $(this).closest('.fileinput-exists').hide();
            $(this).closest('.fileinput').find('.fileinput-noexists').show();
        });
    };
    return EditProfileComponent;
}());
EditProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/edit-profile/edit-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditProfileComponent);

//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/element-analytics/element-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        \n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Rejected <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Draft <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Element Analytics</h4>\n                                <div class=\"row\">\n                                \t<div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> all </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n\n\t                                <div class=\"p-lr-15 pull-right\">\n\t                                \t<div class=\"dropdown right chck\">\n                                            <a href=\"javascript:;\" class=\"dropdown-toggle btn btn-success\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                <i class=\"material-icons\">tune</i>\n                                            </a>\n                                            <ul class=\"dropdown-menu\">\n                                            \t<md-radio-group>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"8\">  Number of comments   </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"9\">  Number of Shares     </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"9\">  Number of likes      </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"10\"> Number of saves      </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"11\"> Number of downloads  </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"4\">  Page views           </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"12\"> Unique views         </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"1\"> No of click on apply  </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"2\"> No of click on i'm interested</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"3\"> No of click on call me</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"5\"> No of click on call</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\n                                            </ul>\n                                        </div>\n\t                                </div>\n\t                            </div>\n\n                                <div class=\"row\">\n\t                                <div class=\"dshbrd-table table-responsive\">\n\t                                \t<table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n\t                                        <thead class=\"text-danger\">\n\t\t                                        <tr>\n\t\t                                            <th> Name Of Element </th>\n\t\t                                            <th colspan=\"2\"> Views </th>\n\t\t                                            <th colspan=\"5\"> User Engagement Buttons </th>\n\t\t                                            <th colspan=\"4\"> Call to action Buttons </th>\n\t\t                                        </tr>\n\t\t                                        <tr>\n                                                    <th> </th>\n                                                    <th><mfDefaultSorter by=\"page\">Page Views</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"unique\"> Unique Views</mfDefaultSorter> </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Kadak\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Apply\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"I'm Interested\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                </tr>\n\t\t                                    </thead>\n\t\t                                    <tbody>\n\t\t                                        <tr>\n\t\t                                            <td class=\"text-left\">\n                                                        Text Only\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\n\t\t                                        </tr>\n\t\t                                        <tr>\n\t\t                                            <td class=\"text-left\">\n                                                       Photo Only\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\n\t\t                                        </tr>\n\t\t                                        <tr>\n\t\t                                            <td class=\"text-left\">\n                                                        Photo + Video\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\n\t\t                                        </tr>\n\n\t\t                                    </tbody>\n\t\t                                    <tfoot>\n\t                                            <tr>\n\t                                                <td colspan=\"14\">\n\t                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n\t                                                </td>\n\t                                            </tr>\n                                            </tfoot>\n\t                                    </table>\n\t                                </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-category</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket news</md-checkbox></li>\n                                <li><md-checkbox>Football news</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                    </div>\n                    \n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/element-analytics/element-analytics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/element-analytics/element-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementAnalyticsComponent = (function () {
    function ElementAnalyticsComponent() {
    }
    ElementAnalyticsComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    return ElementAnalyticsComponent;
}());
ElementAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-element-analytics',
        template: __webpack_require__("../../../../../src/app/dashboard/element-analytics/element-analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/element-analytics/element-analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ElementAnalyticsComponent);

//# sourceMappingURL=element-analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/home/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__("../../../../../src/app/env.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Admin} from './edit.model.component'
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.onGetAdmin = function () {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "listAdmins";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/home/confirmation.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #EEEEEE;padding: 10px\">\r\n\t<h3>Hey !!</h3>\r\n\t<div >\r\n\t\t<p>Are you sure you want to delete this admin? </p>\r\n\t</div>\r\n\t<div  >\r\n\t\t<button class=\"btn btn-round btn-md btn-disabled btn-success\" style=\"width: 48%\" (click)=\"onYesClick()\">Yes</button>\r\n\t\t<button class=\"btn btn-round btn-md btn-disabled btn-danger\" style=\"width: 48%\" (click)=\"onNoClick()\">No Thanks</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .title{\r\n\tmargin-bottom: 0;\r\n}\r\n.cus-switch > span {\r\n    position: relative;\r\n    top: -5px;\r\n}\r\n\r\n.input-group .input-group-btn {\r\n    padding: 0;\r\n}\r\n.input-group-btn .btn{\r\n\tmargin: 0;\r\n\tpadding: 5px 15px;\r\n\tborder-radius: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n\n        <div class=\"main-content\">\n      \n   \n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <md-progress-bar *ngIf=\"waitLoader\" mode=\"indeterminate\"></md-progress-bar>\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">account_circle</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">View Administrator</h4>\n                                <div class=\"row\">\n                                    <div class=\"dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped\">\n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th class=\"text-left\"> # </th>\n                                                    <th> Profile </th>\n                                                    <th> Name of administrator </th>\n                                                    <th> Function </th>\n                                                    <th> Email / ID Number </th>\n                                                    <th> Password </th>\n                                                    <th> Access </th>\n                                                    <th> Language </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody class=\"text-center\">\n                                                <tr *ngFor=\"let admin Of adminData;let i =index\">\n                                                    <td class=\"text-left\">\n                                                       {{i+1}}.\n                                                    </td>\n                                                    <td >\n                                                        <img  [src]=\"admin.image\" class=\"img-responsive profile-img\"   />\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        {{admin.firstName}} {{admin.lastName}}\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\" (click)=\"openDialog(admin)\"> <i class=\"fa fa-trash\"></i> </a>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" (click)=\"editAdmin(admin,'allEdit')\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> Role: {{admin.role}} </div>\n                                                       \n                                                        <div class=\"cus-switch\">\n                                                            <span *ngIf=\"admin.status==false\">Enable</span>\n                                                            <span *ngIf=\"admin.status==true\" >Disable</span>\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\"  [(ngModel)]=\"admin.status\"  (change)=\"onStatusChange(admin)\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div>{{admin.email}}</div>\n                                                        <div>{{admin.contactNo}}</div>\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                    <div *ngIf=\"enablePasswordEdit!=i\">\n                                                        \n                                                        {{palinPass(admin.plain)}}\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" (click)=\"editPassword(i)\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </div>\n                                                        \n                                                        <div class=\"input-group cus-input\" *ngIf=\"enablePasswordEdit==i\">\n                                                            <input type=\"text\" class=\"form-control txtfield\" placeholder=\"Update Password\" [(ngModel)]=\"editPasswordModel\">\n                                                            <span class=\"input-group-btn\">\n                                                                <button class=\"btn btn-secondary btn-xs\" type=\"button\" (click)=onEditPassSend(admin,editPasswordModel)><i class=\"fa fa-check\"></i></button>\n                                                            </span>\n                                                            <span class=\"input-group-btn\">\n                                                                <button class=\"btn btn-danger btn-xs\" type=\"button\" (click)=\"hideEditText()\">\n                                                                    <i class=\"material-icons\">close</i>\n                                                                </button>\n                                                            </span>\n                                                        </div>\n\n                                                    </td>\n                                                    <td>\n                                                        <div *ngFor=\"let section of admin.sectionName\"> \n                                                            <span *ngIf=\"section.checked\">-{{section.name}}</span>\n                                                         </div>\n                                                       \n                                                    </td>\n                                                     <td> <a class=\"btn btn-warning\" (click)=\"openDialogLanguage(admin.langDetails)\">View</a> </td>\n                                                </tr>\n                                                <!-- <tr>\n                                                    <td class=\"text-left\">\n                                                        2.\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"assets/img/avatar-2.png\" class=\"img-responsive profile-img\" />\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        Ashami shah\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> Role: Section Administrator </div>\n                                                                                                       <div class=\"cus-switch\">\n                                                            Enable\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div> ashima@netpar.co </div>\n                                                        <div> 9874562310</div>\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        ashima@netpar.co\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> - Jobs </div>\n                                                        <div> - Loans </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-left\">\n                                                        3.\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"assets/img/avatar-2.png\" class=\"img-responsive profile-img\" />\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        Ashami shah\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> Role: Section Administrator </div>\n                                                                                                            <div class=\"cus-switch\">\n                                                            Enable\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div> ashima@netpar.co </div>\n                                                        <div> 9874562310</div>\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        ashima@netpar.co\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> - Jobs </div>\n                                                        <div> - Loans </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-left\">\n                                                        4.\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"assets/img/avatar-2.png\" class=\"img-responsive profile-img\" />\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        Ashami shah\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> Role: Section Administrator </div>\n                                                       \n                                                        <div class=\"cus-switch\">\n                                                            Enable\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div> ashima@netpar.co </div>\n                                                        <div> 9874562310</div>\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        ashima@netpar.co\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> - Jobs </div>\n                                                        <div> - Loans </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-left\">\n                                                        5.\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"assets/img/avatar-2.png\" class=\"img-responsive profile-img\" />\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        Ashami shah\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Delete\" class=\"tltip_ico\"> <i class=\"fa fa-trash\"></i> </a>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> Role: Section Administrator </div>\n                                                       \n                                                        <div class=\"cus-switch\">\n                                                            Enable\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div> ashima@netpar.co </div>\n                                                        <div> 9874562310</div>\n                                                    </td>\n                                                    <td class=\"td-icon\">\n                                                        ashima@netpar.co\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Edit\" routerLink=\"/edit-admin\" class=\"tltip_ico\"> <i class=\"fa fa-edit\"></i> </a>\n                                                    </td>\n                                                    <td>\n                                                        <div> - Jobs </div>\n                                                        <div> - Loans </div>\n                                                    </td>\n                                                </tr>  -->\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminConfirmation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__("../../../../../src/app/dashboard/home/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__ = __webpack_require__("../../../../../src/app/dashboard/edit-admin/edit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__language_dialog_language_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var HomeComponent = (function () {
    function HomeComponent(router, adminService, editadminService, appProvider, dialog, vcr, toastr) {
        this.router = router;
        this.adminService = adminService;
        this.editadminService = editadminService;
        this.appProvider = appProvider;
        this.dialog = dialog;
        this.toastr = toastr;
        this.animal = "ram";
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAdminList();
    };
    HomeComponent.prototype.getAdminList = function () {
        var _this = this;
        this.enablePasswordEdit = -1;
        this.waitLoader = true;
        this.adminService.onGetAdmin().subscribe(function (data) {
            _this.waitLoader = false;
            _this.adminData = data.response;
            // console.log(JSON.stringify(this.adminData))
        }, function (error) {
            _this.waitLoader = false;
            _this.toastr.error('Something went worng please try again after some time !!', 'Error !!. ', { toastLife: 3000, showCloseButton: true });
        });
        localStorage['currentpath'] = this.router.url;
    };
    HomeComponent.prototype.palinPass = function (a) {
        return window.atob(a);
    };
    HomeComponent.prototype.editAdmin = function (a, pageFlag) {
        this.appProvider.current.adminData = a;
        this.appProvider.current.adminPageFlag = pageFlag;
        this.router.navigate(['/edit-admin'], {
            skipLocationChange: true
        });
        // console.log(JSON.stringify(this.appProvider.current.adminData))
    };
    HomeComponent.prototype.editPassword = function (index) {
        this.enablePasswordEdit = index;
    };
    HomeComponent.prototype.onStatusChange = function (adminData) {
        var _this = this;
        this.waitLoader = true;
        this.editadminService.onEditAdminStatus(adminData).subscribe(function (data) {
            _this.getAdminList();
        }, function (error) {
            _this.toastr.error('Something went worng please try again after some time !!', 'Error !!. ', { toastLife: 3000, showCloseButton: true });
        });
    };
    HomeComponent.prototype.onDelete = function (adminData) {
        var _this = this;
        this.waitLoader = true;
        adminData.delstatus = "true";
        this.editadminService.onAdminDelete(adminData).subscribe(function (data) {
            _this.getAdminList();
        }, function (error) {
            _this.toastr.error('Something went worng please try again after some time !!', 'Error !!. ', { toastLife: 3000, showCloseButton: true });
        });
    };
    HomeComponent.prototype.onEditPassSend = function (adminData, newPass) {
        var _this = this;
        this.waitLoader = true;
        console.log(adminData);
        // adminData.password=newPass;
        // adminData.plain=window.btoa(newPass);
        this.editadminService.onEditAdminPassword(adminData._id, newPass).subscribe(function (data) {
            // this.adminData=data.response;
            // console.log(JSON.stringify(this.adminData))
            _this.getAdminList();
        }, function (error) {
            _this.toastr.error('Something went worng please try again after some time !!', 'Error !!. ', { toastLife: 3000, showCloseButton: true });
        });
    };
    HomeComponent.prototype.openDialog = function (admin) {
        var _this = this;
        var dialogRef = this.dialog.open(AdminConfirmation, {
            width: '250px',
            data: { admin: admin }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // alert('closed')
            // alert(JSON.stringify(result))
            if (result) {
                // code...
                _this.onDelete(result);
            }
            // this.animal = result;
        });
    };
    HomeComponent.prototype.hideEditText = function () {
        this.enablePasswordEdit = -1;
    };
    HomeComponent.prototype.openDialogLanguage = function (lang) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__language_dialog_language_dialog_component__["a" /* LanguageDialogComponent */], {
            width: '400px',
            data: { lang: lang },
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/dashboard/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__["a" /* AdminService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_app_provider__["a" /* AppProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _g || Object])
], HomeComponent);

var AdminConfirmation = (function () {
    function AdminConfirmation(dialogRef, data, router, adminService, editadminService, appProvider, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.adminService = adminService;
        this.editadminService = editadminService;
        this.appProvider = appProvider;
        this.dialog = dialog;
    }
    AdminConfirmation.prototype.onYesClick = function () {
        this.dialogRef.close(this.data.admin);
        // this.homePage.onDelete(this.data.admin)
    };
    AdminConfirmation.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return AdminConfirmation;
}());
AdminConfirmation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-confirmation-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/home/confirmation.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__["a" /* AdminService */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDialogRef */]) === "function" && _h || Object, Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__edit_admin_edit_service__["a" /* AdminService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_app_provider__["a" /* AppProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdDialog */]) === "function" && _o || Object])
], AdminConfirmation);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\t<h4 class=\"modal-title\" >Languages <span class=\"pull-right\"><a (click)=\"onClosed()\"><i class=\"fa fa-times\"></i></a></span> </h4>\n</div>\n<div class=\"modal-body\">\n    <md-list>\n\t\t<md-list-item *ngFor=\"let lang Of language\">{{lang.language}} </md-list-item>\n\t\t<!-- <md-list-item> Hindi </md-list-item>\n\t\t<md-list-item> Punjabi </md-list-item>\n\t\t<md-list-item> Gujrati </md-list-item>\n\t\t<md-list-item> Telugu </md-list-item>\n\t\t<md-list-item> English </md-list-item> -->\n\n\t</md-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header {\n  position: relative; }\n\n.modal-header a {\n  text-decoration: none;\n  position: absolute;\n  right: 15px;\n  font-size: 20px;\n  color: #FEA508;\n  top: 15px;\n  outline: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LanguageDialogComponent = (function () {
    function LanguageDialogComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LanguageDialogComponent.prototype.ngOnInit = function () {
        this.language = this.data.lang;
        alert(JSON.stringify(this.language));
    };
    LanguageDialogComponent.prototype.onClosed = function () {
        this.dialogRef.close();
    };
    return LanguageDialogComponent;
}());
LanguageDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-language-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/home/language-dialog/language-dialog.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object, Object])
], LanguageDialogComponent);

var _a, _b;
//# sourceMappingURL=language-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage-templates/homepage-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Homepage Template</h4>\n                                <div class=\"row\">\n                                    <div class=\"template-table dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th> Template </th>\n                                                    <th> Template Name </th>\n                                                    <th> Active In Category </th>\n                                                    <th> Start Time </th>\n                                                    <th> End Time </th>\n                                                </tr>\n                                               \n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template3.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template1.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen2 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template2.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen3 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template4.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n\n\n                                            </tbody>\n                                            \n                                        </table>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage-templates/homepage-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage-templates/homepage-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageTemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageTemplatesComponent = (function () {
    function HomepageTemplatesComponent() {
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }
        };
    }
    HomepageTemplatesComponent.prototype.ngOnInit = function () {
    };
    return HomepageTemplatesComponent;
}());
HomepageTemplatesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage-templates',
        template: __webpack_require__("../../../../../src/app/dashboard/homepage-templates/homepage-templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/homepage-templates/homepage-templates.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomepageTemplatesComponent);

//# sourceMappingURL=homepage-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n\t<h4 class=\"modal-title\">Select date and time</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"\">\n    \t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t<md-form-field>\n\t\t\t  \t<input mdInput [mdDatepicker]=\"picker\" placeholder=\"Start Date\">\n\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n\t\t\t  \t<md-datepicker #picker></md-datepicker>\n\t\t\t</md-form-field>\n\t\t</div>\n\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t<md-form-field>\n\t\t\t  \t<input mdInput [mdDatepicker]=\"picker1\" placeholder=\"End Date\">\n\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker1\"></md-datepicker-toggle>\n\t\t\t  \t<md-datepicker #picker1></md-datepicker>\n\t\t\t</md-form-field>\n\t\t</div>\n\n\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\n\t\t</div>\n\n\t\t\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeDialogComponent = (function () {
    function HomeDialogComponent() {
    }
    HomeDialogComponent.prototype.ngOnInit = function () {
    };
    return HomeDialogComponent;
}());
HomeDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeDialogComponent);

//# sourceMappingURL=home-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Rejected <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Draft <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">description</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Homepage Management</h4>\n                                <div class=\"row\">\n                                    <div class=\"col-md-7 col-sm-7 col-xs-12\"></div>\n                                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Choose State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                                <md-option value=\"5\"> State5 </md-option>\n                                                <md-option value=\"6\"> State6 </md-option>\n                                                <md-option value=\"7\"> State7 </md-option>\n                                                <md-option value=\"8\"> State8 </md-option>\n                                                <md-option value=\"9\"> State9 </md-option>\n                                                <md-option value=\"10\"> State10 </md-option>\n                                                <md-option value=\"11\"> State11 </md-option>\n                                                <md-option value=\"12\"> State12 </md-option>\n                                                <md-option value=\"13\"> State13 </md-option>\n                                                <md-option value=\"14\"> State14 </md-option>\n                                                <md-option value=\"15\"> State15 </md-option>\n                                                <md-option value=\"16\"> State16 </md-option>\n                                                <md-option value=\"17\"> State17 </md-option>\n                                                <md-option value=\"18\"> State18 </md-option>\n                                                <md-option value=\"19\"> State19 </md-option>\n                                                <md-option value=\"20\"> State20 </md-option>\n                                                <md-option value=\"21\"> State21 </md-option>\n                                                <md-option value=\"22\"> State22 </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Choose Language\">\n                                                <md-option value=\"1\">  Hindi </md-option>\n                                                <md-option value=\"2\">  Marathi </md-option>\n                                                <md-option value=\"3\">  Assamese </md-option>\n                                                <md-option value=\"4\">  Bengali </md-option>\n                                                <md-option value=\"5\">  Dogri </md-option>\n                                                <md-option value=\"6\">  Gujarati </md-option>\n                                                <md-option value=\"7\">  Punjabi </md-option>\n                                                <md-option value=\"8\">  Bodo </md-option>\n                                                <md-option value=\"9\">  Kannada </md-option>\n                                                <md-option value=\"10\"> Kashmiri </md-option>\n                                                <md-option value=\"11\"> Urdu </md-option>\n                                                <md-option value=\"12\"> Telegu </md-option>\n                                                <md-option value=\"13\"> Konkani </md-option>\n                                                <md-option value=\"14\"> Malayalam </md-option>\n                                                <md-option value=\"15\"> Manipuri or Meithei </md-option>\n                                                <md-option value=\"16\"> English </md-option>\n                                                <md-option value=\"17\"> Nepali </md-option>\n                                                <md-option value=\"18\"> Oriya </md-option>\n                                                <md-option value=\"19\"> Sanskrit </md-option>\n                                                <md-option value=\"20\"> Santali </md-option>\n                                                <md-option value=\"21\"> Sindhi </md-option>\n                                                <md-option value=\"22\"> Tamil </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row homepage-btns\">\n                                    <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    \t<a class=\"btn btn-round btn-md btn-disabled btn-warning\" (click)=\"openDialog()\">Prioritise of homepage</a>\n                                    \t<a class=\"btn btn-round btn-md btn-disabled btn-success\" (click)=\"openDialog()\">Prioritise of category</a>\n                                    \t<a class=\"btn btn-round btn-md btn-disabled btn-danger\">Remove from shortlist</a>\n                                    </div>\n                                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"5\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped view-content-table font12\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">    \n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th>  </th>\n                                                    <th> Content Item </th>\n                                                    <th> Date </th>\n                                                    <th colspan=\"5\"> User Engagement </th>\n                                                    <th colspan=\"4\"> Call To Action </th>\n                                                    <th> Page Views </th>\n                                                </tr>\n                                                <tr>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Kadak\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Apply\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"I'm Interested\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>  </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"vertical-top\">\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"td-wdth282 text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                            <div>\n                                                                Status: <span class=\"text-success\"><b>Approved</b></span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                            <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\" class=\"text-success\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\" class=\"text-danger\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth155 text-left vertical-top\">\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 1,00,000 </td> <td> 5,00,000 </td> <td> 60,000 </td> <td> \n                                                    2,000 </td> <td> 8,55,070 </td>\n                                                    <td> 1,00,000 </td> <td> 48,000 </td> <td> 40,024 </td> <td> 5,00,000 </td> \n                                                    <td>10,00,000 </td>\n\n                                                </tr>\n                                                \n                                            </tbody>\n                                            <tfoot>\n                                            <tr>\n                                                <td colspan=\"14\">\n                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                                </td>\n                                            </tr>\n                                            </tfoot>\n                                        </table>\n                                        \n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <owl-date-time [(ngModel)]=\"moment\" ></owl-date-time> -->\n        <app-footer></app-footer>\n    </div>\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <div class=\"wrapFilter-ul\">\n                        <div class=\"wrapFilter-div\">\n                            <h5 class=\"filter-heading\"> Status</h5>\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Shortlist content</md-checkbox></li>\n                                <li><md-checkbox>Active priority content</md-checkbox></li>\n                                <li><md-checkbox>Completed priority content</md-checkbox></li>\n                                <li><md-checkbox>Scheduled content</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    \n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket</md-checkbox></li>\n                                <li><md-checkbox>Football</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Status</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Draft</md-checkbox></li>\n                                <li><md-checkbox>Rejected</md-checkbox></li>\n                                <li><md-checkbox>Revision</md-checkbox></li>\n                                <li><md-checkbox>Scheduled</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                        \n                    </div>\n\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage/homepage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font12 {\n  font-size: 12px; }\n\n.view-content-table .cont-img {\n  width: 120px; }\n\n.view-content-table .cont-dtl {\n  margin-left: 120px; }\n\n.homepage-btns .btn {\n  padding: 12px 22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_dialog_home_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/homepage/home-dialog/home-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(dialog) {
        this.dialog = dialog;
    }
    HomepageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__home_dialog_home_dialog_component__["a" /* HomeDialogComponent */], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HomepageComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/dashboard/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/homepage/homepage.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/list-templates/list-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">List view Template</h4>\n                                <div class=\"row\">\n                                    <div class=\"template-table dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th> Template </th>\n                                                    <th> Template Name </th>\n                                                    <th> Active In Category </th>\n                                                    <th> Start Time </th>\n                                                    <th> End Time </th>\n                                                </tr>\n                                               \n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template3.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template1.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen2 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template2.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen3 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template4.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n\n\n                                            </tbody>\n                                            \n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/list-templates/list-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/list-templates/list-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListTemplatesComponent = (function () {
    function ListTemplatesComponent() {
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }
        };
    }
    ListTemplatesComponent.prototype.ngOnInit = function () {
    };
    return ListTemplatesComponent;
}());
ListTemplatesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-templates',
        template: __webpack_require__("../../../../../src/app/dashboard/list-templates/list-templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/list-templates/list-templates.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ListTemplatesComponent);

//# sourceMappingURL=list-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n\t<h4 class=\"modal-title\">Select date and time</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"\">\n    \t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t<md-form-field>\n\t\t\t  \t<input mdInput [mdDatepicker]=\"picker\" placeholder=\"Start Date\">\n\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n\t\t\t  \t<md-datepicker #picker></md-datepicker>\n\t\t\t</md-form-field>\n\t\t</div>\n\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t<md-form-field>\n\t\t\t  \t<input mdInput [mdDatepicker]=\"picker1\" placeholder=\"End Date\">\n\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker1\"></md-datepicker-toggle>\n\t\t\t  \t<md-datepicker #picker1></md-datepicker>\n\t\t\t</md-form-field>\n\t\t</div>\n\n\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\n\t\t</div>\n\n\t\t\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorityDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriorityDialogComponent = (function () {
    function PriorityDialogComponent() {
    }
    PriorityDialogComponent.prototype.ngOnInit = function () {
    };
    return PriorityDialogComponent;
}());
PriorityDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-priority-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PriorityDialogComponent);

//# sourceMappingURL=priority-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/priority/priority.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Rejected <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Draft <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">description</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Category Priority Management</h4>\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-sm-7 col-xs-12\">\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-warning\" (click)=\"openDialog()\">Prioritise of homepage</a>\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-success\" (click)=\"openDialog()\">Prioritise of category</a>\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-danger\">Remove from shortlist</a>\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> all </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">    \n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th>  </th>\n                                                    <th> Content </th>\n                                                    <th> Date </th>\n                                                    <th colspan=\"5\"> User Engagement buttons </th>\n                                                    <th colspan=\"4\"> Call To action buttons </th>\n                                                    <th> Page View </th>\n                                                </tr>\n                                                <tr>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Like\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Apply\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"I'm Interested\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    \n                                                    <!-- <th> <mfDefaultSorter by=\"thumb\">  <i class=\"icon-okay\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"comment\"> <i class=\"fa fa-comment\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"square\"> <i class=\"fa fa-check-square\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"download\"> <i class=\"fa fa-cloud-download\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"text\"> <i class=\"fa fa-file-text\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"phone\"> <i class=\"fa fa-phone-square\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"volume\"> <i class=\"fa fa-volume-control-phone\"></i> </mfDefaultSorter> </th>\n                                                    <th> <mfDefaultSorter by=\"check\"> <i class=\"fa fa-check-square-o\"></i> </mfDefaultSorter> </th> -->\n                                                    <th> </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 700 </td> <td> 80 </td> <td> 20 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 500 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 20 </td> <td> 125 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 570 </td> <td> 180 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 47 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 9 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                \n                                            </tbody>\n                                            <tfoot>\n                                            <tr>\n                                                <td colspan=\"14\">\n                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                                </td>\n                                            </tr>\n                                            </tfoot>\n                                        </table>\n                                        \n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <owl-date-time [(ngModel)]=\"moment\" ></owl-date-time> -->\n        <app-footer></app-footer>\n    </div>\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <div class=\"wrapFilter-ul\">\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Shortlist content</md-checkbox></li>\n                                <li><md-checkbox>Active priority content</md-checkbox></li>\n                                <li><md-checkbox>Completed priority content</md-checkbox></li>\n                                <li><md-checkbox>Scheduled content</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket</md-checkbox></li>\n                                <li><md-checkbox>Football</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                    </div>\n\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/priority/priority.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/priority/priority.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__priority_dialog_priority_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/priority/priority-dialog/priority-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PriorityComponent = (function () {
    function PriorityComponent(dialog) {
        this.dialog = dialog;
    }
    PriorityComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    PriorityComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__priority_dialog_priority_dialog_component__["a" /* PriorityDialogComponent */], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    return PriorityComponent;
}());
PriorityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-priority',
        template: __webpack_require__("../../../../../src/app/dashboard/priority/priority.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/priority/priority.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object])
], PriorityComponent);

var _a;
//# sourceMappingURL=priority.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n\n                        <div class=\"card\" > \n                        \t<div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">person</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Profile</h4>\n                                <div class=\"row\">\n                                \t<div class=\"profile-panel\">\n\t\t                            \t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n\t\t                            \t\t<div class=\"profile-box\" *ngIf=\"!appProvider.current.loginData\">\n\t\t                            \t\t\t<img src=\"./assets/img/faces/marc.jpg\" class=\"img-responsive\" />\n\t\t                            \t\t</div>\n\t\t                            \t\t<div class=\"profile-box\" *ngIf=\"appProvider.current.loginData\">\n\t\t                            \t\t\t<img *ngIf=\"!appProvider.current.loginData.image\" src=\"./assets/img/faces/marc.jpg\" class=\"img-responsive\">\n                \t\t\t\t\t\t\t\t <img *ngIf=\"appProvider.current.loginData.image\" [src]=\"appProvider.current.loginData.image\" class=\"img-responsive\">\n\t\t                            \t\t</div>\n\t\t                            \t</div>\n\t\t                            \t<div class=\"col-md-6 col-sm-6 col-xs-12 m-t-20\">\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t                            \t\t<label> Name </label>\n\t\t\t                            \t\t<p *ngIf=\"appProvider.current.loginData\">{{appProvider.current.loginData.firstName}}  {{appProvider.current.loginData.lastName}}</p>\n\t\t                            \t\t</div>\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t                            \t\t<label> Role </label>\n\t\t\t                            \t\t<p *ngIf=\"appProvider.current.loginData\">{{adminRole(appProvider.current.loginData.role)}} </p>\n\t\t                            \t\t</div>\n\t\t                            \t\t<!-- <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t                            \t\t<label> Date of Joining </label>\n\t\t\t                            \t\t<p> 21-09-2017 </p>\n\t\t                            \t\t</div> -->\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t                            \t\t<label> Email </label>\n\t\t\t                            \t\t<p *ngIf=\"appProvider.current.loginData\"> {{appProvider.current.loginData.email}} </p>\n\t\t                            \t\t</div>\n\t\t                            \t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t                            \t\t<label> Contact No </label>\n\t\t\t                            \t\t<p *ngIf=\"appProvider.current.loginData\">{{appProvider.current.loginData.contactNo}} </p>\n\t\t                            \t\t</div>\n\t\t                            \t</div>\n\t\t                            </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(appProvider) {
        this.appProvider = appProvider;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.adminRole = function (role) {
        if (role == 'superAdmin') {
            return 'Super Administrator';
        }
        else if (role == 'sectionAdministrator') {
            return 'section Administrator';
        }
        else if (role == 'contentWriter') {
            return 'Content Writer';
        }
        else if (role == 'businessuser') {
            return 'Business user';
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app_provider__["a" /* AppProvider */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/section-analytics/section-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        \n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Sports News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Section Analytics</h4>\n                                <div class=\"row\">\n\t                                <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> all </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                    \n\n\t                                <div class=\"p-lr-15 pull-right\">\n\t                                \t<div class=\"dropdown right chck\">\n                                            <a href=\"javascript:;\" class=\"dropdown-toggle btn btn-success\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                <i class=\"material-icons\">tune</i>\n                                            </a>\n                                            <ul class=\"dropdown-menu\">\n                                            \t<md-radio-group>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"8\">  Number of comments   </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"9\">  Number of Shares     </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"9\">  Number of likes      </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"10\"> Number of saves      </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"11\"> Number of downloads  </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"4\">  Page views           </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"12\"> Unique views         </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"1\"> No of click on apply  </md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"2\"> No of click on i'm interested</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"3\"> No of click on call me</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-radio-button value=\"5\"> No of click on call</md-radio-button> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</md-radio-group>\n                                            </ul>\n                                        </div>\n\t                                </div>\n\t                            </div>\n\n                                <div class=\"row\">\n\t                                <div class=\"dshbrd-table table-responsive\">\n\t                                \t<table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n\t                                        <thead class=\"text-danger\">\n\t\t                                        <tr>\n\t\t                                            <th> Section Details </th>\n\t\t                                            <th colspan=\"5\"> Views </th>\n\t\t                                            <th colspan=\"2\"> Time </th>\n\t\t                                            <!-- <th><mfDefaultSorter by=\"session\"> Spent/session</mfDefaultSorter> </th> -->\n\t\t                                            <th colspan=\"5\"> User Engagement </th>\n\t\t                                            <th colspan=\"4\"> Call To Action </th>\n\t\t                                        </tr>\n\t\t                                        <tr>\n                                                    <th> </th>\n                                                    <th><mfDefaultSorter by=\"page\">Page Views</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"unique\"> Unique Views</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgp\"> Avg. Page Views / Day</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgp\"> Avg. Page Views / Month</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgs\"> Avg. Page Views / Session</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"time\"> Total Time Spent</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgt\"> Avg Time</mfDefaultSorter> </th>\n                                                    \n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Like\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"fa fa-thumbs-up\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"fa fa-comment\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"fa fa-check-square\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"fa fa-cloud-download\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Completed\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"fa fa-file-text\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"fa fa-phone-square\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"fa fa-volume-control-phone\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Check\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"fa fa-check-square-o\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                </tr>\n\t\t                                    </thead>\n\t\t                                    <tbody>\n\t\t                                        <tr>\n\t\t                                            <td class=\"width170px\">\n                                                        <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t                                                        News\n\t                                                    </a>\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n                                                    <td> 758 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\t\t                                            <td> 75 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 56 </td>\n\n\t\t                                        </tr>\n\t\t                                        <tr>\n\t\t                                            <td class=\"width170px\">\n                                                        <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t                                                        News | <span class=\"dark_ylw\">Sports News</span>\n\t                                                    </a>\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n                                                    <td> 758 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\t\t                                            <td> 75 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 56 </td>\n\n\t\t                                        </tr>\n\t\t                                        <tr>\n\t\t                                            <td class=\"width170px\">\n                                                        <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t                                                        News | <span class=\"dark_ylw\">Sports News</span>\n\t                                                    </a>\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n                                                    <td> 758 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\t\t                                            <td> 75 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 56 </td>\n\n\t\t                                        </tr>\n\t\t                                        <tr>\n\t\t                                            <td class=\"width170px\">\n                                                        <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t                                                        News | <span class=\"dark_ylw\">Sports News</span>\n\t                                                    </a>\n                                                    </td>\n\t\t                                            <td> 10,00,000 </td>\n\t\t                                            <td> 1,00,000 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n                                                    <td> 758 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n\t\t                                            <td> 75 </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td> 56 </td>\n\n\t\t                                        </tr>\n\t\t                                    </tbody>\n\t\t                                    <tfoot>\n\t                                            <tr>\n\t                                                <td colspan=\"14\">\n\t                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n\t                                                </td>\n\t                                            </tr>\n                                            </tfoot>\n\t                                    </table>\n\t                                </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-category</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket news</md-checkbox></li>\n                                <li><md-checkbox>Football news</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                    </div>\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/section-analytics/section-analytics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/section-analytics/section-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionAnalyticsComponent = (function () {
    function SectionAnalyticsComponent() {
    }
    SectionAnalyticsComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    return SectionAnalyticsComponent;
}());
SectionAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section-analytics',
        template: __webpack_require__("../../../../../src/app/dashboard/section-analytics/section-analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/section-analytics/section-analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SectionAnalyticsComponent);

//# sourceMappingURL=section-analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/section-templates/section-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Section Template</h4>\n                                <div class=\"row\">\n                                    <div class=\"template-table dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th> Template </th>\n                                                    <th> Template Name </th>\n                                                    <th> Active In Category </th>\n                                                    <th> Start Time </th>\n                                                    <th> End Time </th>\n                                                </tr>\n                                               \n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template3.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template1.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen2 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template2.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen3 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-center\">\n                                                        <div class=\"cont-img templt-img\">\n                                                            <img class=\"img-responsive\" src=\"./assets/img/template4.png\" />\n                                                        </div>\n                                                    </td>\n                                                    <td> Listing View Screen1 </td>\n                                                    <td> Sports News </td>\n                                                    <td> 12:00 PM, 21-09-2017 </td>\n                                                    <td> 5:05 PM, 25-09-2017 </td>\n                                                </tr>\n\n\n                                            </tbody>\n                                            \n                                        </table>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"template-panel\">\n                                    <div class=\"form-group col-md-3 col-sm-3 col-xs-12\">\n                                        <div class=\"template-wrapper\">\n                                            <img class=\"template-slide\" src=\"./assets/img/template1.png\" />\n                                            <div class=\"rotate-div\">\n                                                <span> Template 1 / Active in News Section </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-3 col-sm-3 col-xs-12\">\n                                        <div class=\"template-wrapper\">\n                                            <img class=\"template-slide\" src=\"./assets/img/template2.png\" />\n                                            <div class=\"rotate-div\">\n                                                <span> Template 2 / Active in Jobs Section </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-3 col-sm-3 col-xs-12\">\n                                        <div class=\"template-wrapper\">\n                                            <img class=\"template-slide\" src=\"./assets/img/template3.png\" />\n                                            <div class=\"rotate-div\">\n                                                <span> Template 3 / Active in Jobs Section </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-3 col-sm-3 col-xs-12\">\n                                        <div class=\"template-wrapper\">\n                                            <img class=\"template-slide\" src=\"./assets/img/template4.png\" />\n                                            <div class=\"rotate-div\">\n                                                <span> Template 4 / Active in Jobs Section </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-3 col-sm-3 col-xs-12\">\n                                        <div class=\"template-wrapper\">\n                                            <img class=\"template-slide\" src=\"./assets/img/template5.png\" />\n                                            <div class=\"rotate-div\">\n                                                <span> Template 5 / Active in News Section </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-3 col-sm-3 col-xs-12\">\n                                        <div class=\"template-wrapper\">\n                                            <img class=\"template-slide\" src=\"./assets/img/template6.png\" />\n                                            <div class=\"rotate-div\">\n                                                <span> Template 6 / Active in Jobs Section </span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/section-templates/section-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/section-templates/section-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionTemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionTemplatesComponent = (function () {
    function SectionTemplatesComponent() {
    }
    SectionTemplatesComponent.prototype.ngOnInit = function () {
    };
    return SectionTemplatesComponent;
}());
SectionTemplatesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section-templates',
        template: __webpack_require__("../../../../../src/app/dashboard/section-templates/section-templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/section-templates/section-templates.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SectionTemplatesComponent);

//# sourceMappingURL=section-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/template-analytics/template-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">show_chart</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">Template Analytics</h4>\n                                <md-tab-group>\n\t\t\t\t\t\t\t\t  \t<md-tab label=\"Category Template\">\n\t\t\t\t\t\t\t\t  \t\t<div class=\"row\">\n\t\t\t                                <div class=\"dshbrd-table table-responsive\">\n\t\t\t                                \t<table class=\"table table-striped user-table\" >\n\t\t\t                                        <thead class=\"text-danger\">\n\t\t\t\t                                        <tr>\n\t\t\t\t                                            <th> Section Name </th>\n\t\t\t\t                                            <th> Category Name </th>\n\t\t\t\t                                            <th> Time Period </th>\n\t\t\t\t                                            <th> Category Template </th>\n\t\t\t\t                                            <th> Click through Conversion </th>\n\t\t\t\t                                            <th> Section-wise Click through rate </th>\n\t\t\t\t                                        </tr>\n\t\t\t\t                                       \n\t\t\t\t                                    </thead>\n\t\t\t\t                                    <tbody>\n\t\t\t\t                                        <tr>\n\t\t\t\t                                        \t<td> <a href=\"javascript:;\"> News </a> </td>\n\t\t\t\t                                            <td>\n\t\t\t\t                                            \t<a href=\"javascript:;\">\n\t\t\t\t                                            \t\tNews | <span class=\"dark_ylw\">Sports News</span>\n\t\t\t                                                    </a>\n\t\t                                                    </td>\n\t\t\t\t                                            <td> 18th Aug, 09:00 AM - 19th Aug 10 PM</td>\n\t\t\t\t                                            <td> Sport News </td>\n\t\t\t\t                                            <td> 300 </td>\n\t\t\t\t                                            <td> 500 </td>\n\t\t\t\t                                        </tr>\n\t\t\t\t                                        <tr>\n\t\t\t\t                                        \t<td> <a href=\"javascript:;\"> News </a> </td>\n\t\t\t\t                                            <td>\n\t\t\t\t                                            \t<a href=\"javascript:;\">\n\t\t\t\t                                            \t\tNews | <span class=\"dark_ylw\">Sports News</span>\n\t\t\t                                                    </a>\n\t\t                                                    </td>\n\t\t\t\t                                            <td> 18th Aug, 09:00 AM - 19th Aug 10 PM</td>\n\t\t\t\t                                            <td> Sport News </td>\n\t\t\t\t                                            <td> 300 </td>\n\t\t\t\t                                            <td> 500 </td>\n\t\t\t\t                                        </tr>\n\t\t\t\t                                        <tr>\n\t\t\t\t                                        \t<td> <a href=\"javascript:;\"> News </a> </td>\n\t\t\t\t                                            <td>\n\t\t\t\t                                            \t<a href=\"javascript:;\">\n\t\t\t\t                                            \t\tNews | <span class=\"dark_ylw\">Sports News</span>\n\t\t\t                                                    </a>\n\t\t                                                    </td>\n\t\t\t\t                                            <td> 18th Aug, 09:00 AM - 19th Aug 10 PM</td>\n\t\t\t\t                                            <td> Sport News </td>\n\t\t\t\t                                            <td> 300 </td>\n\t\t\t\t                                            <td> 500 </td>\n\t\t\t\t                                        </tr>\n\n\t\t\t\t                                    </tbody>\n\t\t\t                                    </table>\n\t\t\t                                </div>\n\t\t                                </div>\n\t\t\t\t\t\t\t\t  \t</md-tab>\n\t\t\t\t\t\t\t\t  \t<md-tab label=\"Listing View Template\">\n\t\t\t\t\t\t\t\t  \t\t<div class=\"row\">\n\t\t\t                                <div class=\"dshbrd-table table-responsive\">\n\t\t\t                                \t<table class=\"table table-striped user-table\" >\n\t\t\t                                        <thead class=\"text-danger\">\n\t\t\t\t                                        <tr>\n\t\t\t\t                                            <th> Section Name </th>\n\t\t\t\t                                            <th> Category Name </th>\n\t\t\t\t                                            <th> Time Period </th>\n\t\t\t\t                                            <th> Listing View Template </th>\n\t\t\t\t                                            <th> Click through Conversion </th>\n\t\t\t\t                                            <th> Section-wise Click through rate </th>\n\t\t\t\t                                            <th> Avg. time spent / session </th>\n\t\t\t\t                                        </tr>\n\t\t\t\t                                       \n\t\t\t\t                                    </thead>\n\t\t\t\t                                    <tbody>\n\t\t\t\t                                        <tr>\n\t\t\t\t                                        \t<td> <a href=\"javascript:;\"> News </a> </td>\n\t\t\t\t                                            <td>\n\t\t\t\t                                            \t<a href=\"javascript:;\">\n\t\t\t\t                                            \t\tNews | <span class=\"dark_ylw\">Sports News</span>\n\t\t\t                                                    </a>\n\t\t                                                    </td>\n\t\t\t\t                                            <td> 18th Aug, 09:00 AM - 19th Aug 10 PM</td>\n\t\t\t\t                                            <td> Sport News </td>\n\t\t\t\t                                            <td> 300 </td>\n\t\t\t\t                                            <td> 500 </td>\n\t\t\t\t                                            <td> 50 </td>\n\t\t\t\t                                        </tr>\n\t\t\t\t                                        <tr>\n\t\t\t\t                                        \t<td> <a href=\"javascript:;\"> News </a> </td>\n\t\t\t\t                                            <td>\n\t\t\t\t                                            \t<a href=\"javascript:;\">\n\t\t\t\t                                            \t\tNews | <span class=\"dark_ylw\">Sports News</span>\n\t\t\t                                                    </a>\n\t\t                                                    </td>\n\t\t\t\t                                            <td> 18th Aug, 09:00 AM - 19th Aug 10 PM</td>\n\t\t\t\t                                            <td> Sport News </td>\n\t\t\t\t                                            <td> 300 </td>\n\t\t\t\t                                            <td> 500 </td>\n\t\t\t\t                                            <td> 50 </td>\n\t\t\t\t                                        </tr>\n\t\t\t\t                                        <tr>\n\t\t\t\t                                        \t<td> <a href=\"javascript:;\"> News </a> </td>\n\t\t\t\t                                            <td>\n\t\t\t\t                                            \t<a href=\"javascript:;\">\n\t\t\t\t                                            \t\tNews | <span class=\"dark_ylw\">Sports News</span>\n\t\t\t                                                    </a>\n\t\t                                                    </td>\n\t\t\t\t                                            <td> 18th Aug, 09:00 AM - 19th Aug 10 PM</td>\n\t\t\t\t                                            <td> Sport News </td>\n\t\t\t\t                                            <td> 300 </td>\n\t\t\t\t                                            <td> 500 </td>\n\t\t\t\t                                            <td> 50 </td>\n\t\t\t\t                                        </tr>\n\n\t\t\t\t                                    </tbody>\n\t\t\t                                    </table>\n\t\t\t                                </div>\n\t\t                                </div>\n\t\t\t\t\t\t\t\t  \t</md-tab>\n\t\t\t\t\t\t\t\t</md-tab-group>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/template-analytics/template-analytics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/template-analytics/template-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateAnalyticsComponent = (function () {
    function TemplateAnalyticsComponent() {
    }
    TemplateAnalyticsComponent.prototype.ngOnInit = function () {
    };
    return TemplateAnalyticsComponent;
}());
TemplateAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-template-analytics',
        template: __webpack_require__("../../../../../src/app/dashboard/template-analytics/template-analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/template-analytics/template-analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TemplateAnalyticsComponent);

//# sourceMappingURL=template-analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user-contribution/user-contribution.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Rejected <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Draft <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">description</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">User Contribution Management</h4>\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-sm-8 col-xs-12\">\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-warning\">Under Review</a>\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-success\">Published</a>\n                                        <a class=\"btn btn-round btn-md btn-disabled btn-danger\">Rejected </a>\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-4 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"user-cont-table table-responsive\">\n                                        <table class=\"table table-striped font12\">    \n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th> </th>\n                                                    <th class=\"text-center\"> Profile </th>\n                                                    <th> Text Input </th>\n                                                    <th> Media </th>\n                                                    <th> Time Stamp </th>\n                                                    <th> Status </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    \n                                                    <td class=\"td-wdth31\">\n                                                        <div class=\"cont-img dp\">\n                                                            <img src=\"./assets/img/profile_user.jpg\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Jay Sinha </p>\n                                                            <p> MH | Raigad | Panvel </p>\n                                                            <p> <strong> Contact No: </strong> 9874563210 </p>\n                                                            <p> <strong> User Id: </strong> 85 </p>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span> | <span class=\"dark_ylw\"> Football News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth15\">\n                                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>\n                                                    </td>\n                                                    <td class=\"td-wdth25\">\n                                                        <div class=\"media-box\">\n                                                            <p><a class=\"text-primary\" routerLink=\"/user-contribution\"> Media1 <i class=\"material-icons\">file_download</i> </a> | Type: Audio | Size: 64 MB </p>\n                                                        </div>\n                                                        <div class=\"media-box\">\n                                                            <p><a class=\"text-primary\" routerLink=\"/user-contribution\"> Media1 <i class=\"material-icons\">file_download</i> </a> | Type: Audio | Size: 64 MB </p>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth9\"><p>10:00 AM</p>\n                                                    <p> 16-07-2017 </p> </td> \n                                                    <td> \n                                                        Under review\n                                                    </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    \n                                                    <td class=\"td-wdth31\">\n                                                        <div class=\"cont-img dp\">\n                                                            <img src=\"./assets/img/profile_user.jpg\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Jay Sinha </p>\n                                                            <p> MH | Raigad | Panvel </p>\n                                                            <p> <strong> Contact No: </strong> 9874563210 </p>\n                                                            <p> <strong> User Id: </strong> 85 </p>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span> | <span class=\"dark_ylw\"> Football News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth15\">\n                                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>\n                                                    </td>\n                                                    <td class=\"td-wdth25\">\n                                                        <div class=\"media-box\">\n                                                            <p><a class=\"text-primary\" routerLink=\"/user-contribution\"> Media1 <i class=\"material-icons\">file_download</i> </a> | Type: Audio | Size: 64 MB </p>\n                                                        </div>\n                                                        <div class=\"media-box\">\n                                                            <p><a class=\"text-primary\" routerLink=\"/user-contribution\"> Media1 <i class=\"material-icons\">file_download</i> </a> | Type: Audio | Size: 64 MB </p>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth9\"><p>10:00 AM</p>\n                                                    <p> 16-07-2017 </p> </td> \n                                                    <td> \n                                                        Under review\n                                                    </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    \n                                                    <td class=\"td-wdth31\">\n                                                        <div class=\"cont-img dp\">\n                                                            <img src=\"./assets/img/profile_user.jpg\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Jay Sinha </p>\n                                                            <p> MH | Raigad | Panvel </p>\n                                                            <p> <strong> Contact No: </strong> 9874563210 </p>\n                                                            <p> <strong> User Id: </strong> 85 </p>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span> | <span class=\"dark_ylw\"> Football News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth15\">\n                                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>\n                                                    </td>\n                                                    <td class=\"td-wdth25\">\n                                                        <div class=\"media-box\">\n                                                            <p><a class=\"text-primary\" routerLink=\"/user-contribution\"> Media1 <i class=\"material-icons\">file_download</i> </a> | Type: Audio | Size: 64 MB </p>\n                                                        </div>\n                                                        <div class=\"media-box\">\n                                                            <p><a class=\"text-primary\" routerLink=\"/user-contribution\"> Media1 <i class=\"material-icons\">file_download</i> </a> | Type: Audio | Size: 64 MB </p>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth9\"><p>10:00 AM</p>\n                                                    <p> 16-07-2017 </p> </td> \n                                                    <td> \n                                                        Under review\n                                                    </td>\n\n                                                </tr>\n\n                                            </tbody>\n                                        </table>\n                                        \n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <owl-date-time [(ngModel)]=\"moment\" ></owl-date-time> -->\n        <app-footer></app-footer>\n    </div>\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <!-- <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Cricket</md-checkbox></li>\n                                <li><md-checkbox>Football</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Status</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Under Review</md-checkbox></li>\n                                <li><md-checkbox>Published</md-checkbox></li>\n                                <li><md-checkbox>Rejected</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                        \n                    </div>\n\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/user-contribution/user-contribution.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font12 {\n  font-size: 12px; }\n\n.td-wdth100px {\n  width: 100px; }\n\n.cont-img {\n  width: 80px; }\n\n.cont-dtl {\n  margin-left: 80px; }\n\n.user-cont-table table tr td {\n  vertical-align: top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user-contribution/user-contribution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContributionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserContributionComponent = (function () {
    function UserContributionComponent() {
    }
    UserContributionComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
    };
    return UserContributionComponent;
}());
UserContributionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-contribution',
        template: __webpack_require__("../../../../../src/app/dashboard/user-contribution/user-contribution.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/user-contribution/user-contribution.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UserContributionComponent);

//# sourceMappingURL=user-contribution.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user/filter-dialog/filter-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\t<!-- <h4 class=\"modal-title\"> States <span class=\"pull-right\"><a (click)=\"onClosed()\"><i class=\"fa fa-times\"></i></a></span> </h4> -->\n    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n        <md-select placeholder=\"State\" class=\"m-0\">\n            <md-option value=\"1\"> State1 </md-option>\n            <md-option value=\"2\"> State2 </md-option>\n            <md-option value=\"3\"> State3 </md-option>\n            <md-option value=\"4\"> State4 </md-option>\n            <md-option value=\"4\"> State5 </md-option>\n        </md-select>\n    </div>\n    <span class=\"pull-right\"><a (click)=\"onClosed()\"><i class=\"fa fa-times\"></i></a></span>\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"select-head\">\n            <span class=\"hed\"> Selected Block </span> | <span class=\"clar-filter\"> Clear All</span>  | <span class=\"clar-filter\"> Select All</span>\n        </div>\n        <ul class=\"slctd-fltrli\" type=\"none\">\n            <li> Kupwara <span> <i class=\"fa fa-times\"></i> </span> </li>\n            <li> Bore <span> <i class=\"fa fa-times\"></i> </span> </li>\n            <li> Keran <span> <i class=\"fa fa-times\"></i> </span> </li>\n            <li> Bugna <span> <i class=\"fa fa-times\"></i> </span> </li>\n        </ul>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <ul class=\"state-ul\">\n    \t<!-- <li class=\"state-ulTitle\">A</li> -->\n    \t<li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n    \t<li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Mindiyan                     </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Patrin                       </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Chunti Wari                  </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        \n\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Mindiyan                     </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Patrin                       </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Mindiyan                     </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Patrin                       </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Chunti Wari                  </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Mindiyan                     </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Patrin                       </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Chunti Wari                  </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Mindiyan                     </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Patrin                       </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Chunti Wari                  </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Chunti Wari                  </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Khantha Wali (Shalun Bhatta) </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Har Duing                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Chunti Wari                  </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n\n        <li class=\"li\"> <md-checkbox>Jammu &amp; Kashmir</md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Kupwara                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bore                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Keran                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bugna                        </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Bichwal                      </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Mindiyan                     </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Patrin                       </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Juma Gund                    </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dudi                         </md-checkbox> </li>\n        <li class=\"sub-li\"> <md-checkbox> Dab Bal                      </md-checkbox> </li>\n\n    </ul>\n</div>\n\n<!-- <div class=\"modal-footer\">\n\t<button class=\"btn custom-btn\"> Save </button>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/user/filter-dialog/filter-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header {\n  width: 100%;\n  float: left; }\n\n.mat-dialog-container {\n  overflow: hidden; }\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n  height: 65vh;\n  overflow: auto; }\n\nul.slctd-fltrli {\n  width: 100%;\n  margin: 8px 0 0;\n  white-space: nowrap;\n  overflow: auto; }\n\n.slctd-fltrli li {\n  margin-bottom: 10px; }\n\n.select-head {\n  padding: 8px 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user/filter-dialog/filter-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FilterDialogComponent = (function () {
    function FilterDialogComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FilterDialogComponent.prototype.ngOnInit = function () {
    };
    FilterDialogComponent.prototype.onClosed = function () {
        this.dialogRef.close();
    };
    return FilterDialogComponent;
}());
FilterDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filter-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/user/filter-dialog/filter-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/user/filter-dialog/filter-dialog.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object, Object])
], FilterDialogComponent);

var _a, _b;
//# sourceMappingURL=filter-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-header\">\n\t<h4 class=\"modal-title\" >Influencer <span class=\"pull-right\"><a (click)=\"onClosed()\"><i class=\"fa fa-times\"></i></a></span> </h4>\n</div>\n<div class=\"modal-body\">\n    <md-list>\n\t\t<md-list-item> No. of Invites: 50 </md-list-item>\n\t\t<md-list-item> No. of Shares: 20 </md-list-item>\n\t\t<md-list-item> No. of Conversions: 10 </md-list-item>\n\t\t<md-list-item class=\"text-uppercase\"> <strong> Profile Details of Conversations: </strong> </md-list-item>\n\t\t<md-list-item> Full Name: Tania Andrew </md-list-item>\n\t\t<md-list-item> User ID: 85 </md-list-item>\n\t\t<md-list-item> Mobile Number: 8745962103 </md-list-item>\n\t\t<md-list-item> Unique Referral: 3622 </md-list-item>\n\n\t</md-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-container {\n  overflow: hidden; }\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n  height: 70vh;\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserDialogComponent = (function () {
    function UserDialogComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
    };
    UserDialogComponent.prototype.onClosed = function () {
        this.dialogRef.close();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object, Object])
], UserDialogComponent);

var _a, _b;
//# sourceMappingURL=user-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        \n                        <div class=\"card m-t-0\">\n                            <div class=\"card-content\">\n                                <div class=\"select-head\">\n                                    <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n                                </div>\n                                <ul class=\"slctd-fltrli\" type=\"none\">\n                                    <li> District <span> <i class=\"fa fa-times\"></i> </span> </li>\n                                    <li> Unverified mobile numbers <span> <i class=\"fa fa-times\"></i> </span> </li>\n                                    <li> Active user <span> <i class=\"fa fa-times\"></i> </span> </li>\n                                    <li> Male <span> <i class=\"fa fa-times\"></i> </span> </li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">person</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">User Management</h4>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 col-sm-5 col-xs-12 p-0\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items per page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> all </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-7 col-sm-7 col-xs-12 p-0\">\n                                        <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                            <md-select placeholder=\"State\" multiple>\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                                <md-option value=\"4\"> State5 </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-3 col-xs-12\">\n                                            <button class=\"btn btn-success\" (click)=\"openDialog2()\"> District + </button>\n                                        </div>\n                                        <!-- <div class=\"col-md-3 col-sm-3 col-xs-12\">\n                                            <button class=\"btn btn-success\" (click)=\"openDialog2()\"> Block + </button>\n                                        </div> -->\n                                    </div>\n\n                                    <div class=\"p-lr-15 pull-right\">\n\t                                \t<div class=\"dropdown right chck\">\n                                            <a href=\"javascript:;\" class=\"cusdropdown-toggle btn btn-success\">\n                                                <i class=\"material-icons\">tune</i>\n                                            </a>\n                                            <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"1\"> Time spent             </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"2\"> Avg time spent/day     </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"3\"> Avg time Spent/session </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"4\"> Page views             </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"5\"> Avg Page views/session </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"6\"> Number of sesions      </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"7\"> Last seen online       </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"8\"> Number of comments     </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"9\"> Number of likes        </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"10\"> Number of saves       </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"11\"> Number of downloads   </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"12\"> Number of invites     </md-checkbox> </a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li> <a> <md-checkbox value=\"13\"> Number of coversions  </md-checkbox> </a> </li>\n                                            </ul>\n                                        </div>\n\t                                </div>\n\t                            </div>\n\n                                <div class=\"row\">\n\t                                <div class=\"dshbrd-table table-responsive\">\n\t                                \t<table class=\"table table-striped user-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n\t                                        <thead class=\"text-danger\">\n\t\t                                        <tr>\n\t\t                                            <th> Platform User Profile </th>\n\t\t                                            <th colspan=\"7\"> Platform Interaction </th>\n\t\t                                            <th colspan=\"5\"> User Engagement </th>\n\t\t                                            <th colspan=\"4\"> Call To Action </th>\n\t\t                                            <th> Influencer </th>\n\t\t                                            <th> Referral Code </th>\n\t\t                                        </tr>\n\t\t                                        <tr>\n                                                    <th> </th>\n                                                    <th><mfDefaultSorter by=\"session\"> No of Sessions</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"time\"> Total Time Spent</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgs\"> Avg Time Spent/Session</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgd\"> Avg Time Spent/Day</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"page\"> Page Views</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"avgp\"> Avg Page Views/Session</mfDefaultSorter> </th>\n                                                    <th><mfDefaultSorter by=\"online\"> Last Online</mfDefaultSorter> </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Like\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Submission\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Publications\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n\n                                                    <th></th>\n                                                    <th></th>\n\n                                                </tr>\n\t\t                                    </thead>\n\t\t                                    <tbody>\n\t\t                                        <tr>\n\t\t                                            <td class=\"text-left\">\n                                                        <div class=\"cont-img dp\">\n                                                            <img src=\"./assets/img/profile_user.jpg\" class=\"img-responsive\" />\n                                                            <div class=\"text-switch text-center\">\n                                                                <span>Enable </span>\n                                                                <span class=\"cus-switch\">\n                                                                    <label class=\"switch m-b-0\">\n                                                                        <input type=\"checkbox\" />\n                                                                        <span class=\"slider round\"></span>\n                                                                    </label>\n                                                                </span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"media-box cont-dtl\">\n                                                            <p> Jay Sinha </p>\n                                                            <p> MH | Raigad | Panvel </p>\n                                                            <p class=\"text-success\"> 9874563210 </p>\n                                                        </div>\n                                                    </td>\n\t\t                                            <td> 56 </td>\n\t\t                                            <td> 250 Hours 30 Min </td>\n\t\t                                            <td> 250 Hours 30 Min </td>\n                                                    <td> 250 Hours 30 Min </td>\n\t\t                                            <td> 44 </td>\n\t\t                                            <td> 125 </td>\n\t\t                                            <td class=\"width10px\"> <p> 10:00 AM </p> <p> 18-08-2017 </p> </td>\n\t\t                                            <td> 40 </td>\n\t\t                                            <td> 150 </td>\n\t\t                                            <td> 80 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 50 </td>\n\t\t                                            <td> 68 </td>\n                                                    <td> 40 </td>\n                                                    <td> 150 </td>\n\t\t                                            <td> 75 </td>\n\t\t                                            <td> \n                                                    \t<div class=\"cus-switch user\">\n                                                            <span>Enable</span>\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                        <a routerLink=\"/user\" (click)=\"openDialog()\"> View </a>\n                                                    </td>\n                                                    <td class=\"media-box width20\">\n                                                    \t<p> Referral code: UNXHIS0 </p>\n                                                        <p> No. of invites: 4 </p>\n                                                        <p> No. of conversation: 3 </p>\n                                                    </td>\n\n\t\t                                        </tr>\n                                                <tr>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img dp\">\n                                                            <img src=\"./assets/img/profile_user.jpg\" class=\"img-responsive\" />\n                                                            <div class=\"text-switch text-center\">\n                                                                <span>Enable </span>\n                                                                <span class=\"cus-switch\">\n                                                                    <label class=\"switch m-b-0\">\n                                                                        <input type=\"checkbox\" />\n                                                                        <span class=\"slider round\"></span>\n                                                                    </label>\n                                                                </span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"media-box cont-dtl\">\n                                                            <p> Jay Sinha </p>\n                                                            <p> MH | Raigad | Panvel </p>\n                                                            <p class=\"text-danger\">9874563210 </p>\n                                                        </div>\n                                                    </td>\n                                                    <td> 56 </td>\n                                                    <td> 250 Hours 30 Min </td>\n                                                    <td> 250 Hours 30 Min </td>\n                                                    <td> 250 Hours 30 Min </td>\n                                                    <td> 44 </td>\n                                                    <td> 125 </td>\n                                                    <td class=\"width10px\"> <p> 10:00 AM </p> <p> 18-08-2017 </p> </td>\n                                                    <td> 40 </td>\n                                                    <td> 150 </td>\n                                                    <td> 80 </td>\n                                                    <td> 50 </td>\n                                                    <td> 50 </td>\n                                                    <td> 68 </td>\n                                                    <td> 40 </td>\n                                                    <td> 150 </td>\n                                                    <td> 75 </td>\n                                                    <td> \n                                                        <div class=\"cus-switch user\">\n                                                            <span>Enable</span>\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                        <a routerLink=\"/user\" (click)=\"openDialog()\"> View </a>\n                                                    </td>\n                                                    <td class=\"media-box width20\">\n                                                        <p> Referral code: UNXHIS0 </p>\n                                                        <p> No. of invites: 4 </p>\n                                                        <p> No. of conversation: 3 </p>\n                                                    </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img dp\">\n                                                            <img src=\"./assets/img/profile_user.jpg\" class=\"img-responsive\" />\n                                                            <div class=\"text-switch text-center\">\n                                                                <span>Enable </span>\n                                                                <span class=\"cus-switch\">\n                                                                    <label class=\"switch m-b-0\">\n                                                                        <input type=\"checkbox\" />\n                                                                        <span class=\"slider round\"></span>\n                                                                    </label>\n                                                                </span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"media-box cont-dtl\">\n                                                            <p> Jay Sinha </p>\n                                                            <p> MH | Raigad | Panvel </p>\n                                                            <p class=\"text-danger\"> 9874563210 </p>\n                                                        </div>\n                                                    </td>\n                                                    <td> 56 </td>\n                                                    <td> 250 Hours 30 Min </td>\n                                                    <td> 250 Hours 30 Min </td>\n                                                    <td> 250 Hours 30 Min </td>\n                                                    <td> 44 </td>\n                                                    <td> 125 </td>\n                                                    <td class=\"width10px\"> <p> 10:00 AM </p> <p> 18-08-2017 </p> </td>\n                                                    <td> 40 </td>\n                                                    <td> 150 </td>\n                                                    <td> 80 </td>\n                                                    <td> 50 </td>\n                                                    <td> 50 </td>\n                                                    <td> 40 </td>\n                                                    <td> 150 </td>\n                                                    <td> 68 </td>\n                                                    <td> 75 </td>\n                                                    <td> \n                                                        <div class=\"cus-switch user\">\n                                                            <span>Enable</span>\n                                                            <label class=\"switch m-b-0\">\n                                                                <input type=\"checkbox\" />\n                                                                <span class=\"slider round\"></span>\n                                                            </label>\n                                                        </div>\n                                                        <a routerLink=\"/user\" (click)=\"openDialog()\"> View </a>\n                                                    </td>\n                                                    <td class=\"media-box width20\">\n                                                        <p> Referral code: UNXHIS0 </p>\n                                                        <p> No. of invites: 4 </p>\n                                                        <p> No. of conversation: 3 </p>\n                                                    </td>\n\n                                                </tr>\n\n\t\t                                    </tbody>\n\t\t                                    <tfoot>\n\t                                            <tr>\n\t                                                <td colspan=\"14\">\n\t                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n\t                                                </td>\n\t                                            </tr>\n                                            </tfoot>\n\t                                    </table>\n\t                                </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <!-- <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><a (click)=\"openDialog2()\" href=\"javascript:void(0);\">View More +</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> District</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>District1</md-checkbox></li>\n                                <li><md-checkbox>District2</md-checkbox></li>\n                                <li><md-checkbox>District3</md-checkbox></li>\n                                <li><a (click)=\"openDialog2()\" href=\"javascript:void(0);\">View More +</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Block</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Block1</md-checkbox></li>\n                                <li><md-checkbox>Block2</md-checkbox></li>\n                                <li><md-checkbox>Block3</md-checkbox></li>\n                                <li><a (click)=\"openDialog2()\" href=\"javascript:void(0);\">View More +</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Unverified mobile number</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Active user</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Hyper active</md-checkbox></li>\n                                <li><md-checkbox>Moderatley active</md-checkbox></li>\n                                <li><md-checkbox>active</md-checkbox></li>\n                                <li><md-checkbox>Inactive</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Gender</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Male</md-checkbox></li>\n                                <li><md-checkbox>Female</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> User</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Influencers</md-checkbox></li>\n                                <li><md-checkbox>Verified</md-checkbox></li>\n                                <li><md-checkbox>Unverified</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"btns-filter\">\n                        <a class=\"btn custom-btn\">Apply Filter </a>\n                    </div>\n\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dshbrd-table table tbody td {\n  padding: 5px 8px; }\n\n.cont-img.dp {\n  width: 115px; }\n\n.cont-img.dp img {\n  max-width: 80px; }\n\n.cont-dtl {\n  margin-left: 120px; }\n\ntable tbody td.width20 {\n  min-width: 200px; }\n\n.dshbrd-table table thead tr th {\n  text-transform: unset; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_dialog_user_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_dialog_filter_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/user/filter-dialog/filter-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(dialog) {
        this.dialog = dialog;
    }
    UserComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__user_dialog_user_dialog_component__["a" /* UserDialogComponent */], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UserComponent.prototype.openDialog2 = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__filter_dialog_filter_dialog_component__["a" /* FilterDialogComponent */], {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
        $('.cusdropdown-toggle').on('click', function () {
            /*$('.cusdropdown-toggle').closest('.dropdown').removeClass('open');*/
            $(this).closest('.dropdown').toggleClass('open');
        });
        $(window).on('click', function (e) {
            e.stopPropagation();
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if ($trigger !== e.target && !$trigger.has(e.target).length) {
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/dashboard/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/view-content/view-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid p-0\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                    \t<div class=\"card m-t-0\">\n                    \t\t<div class=\"card-content\">\n\t                            <div class=\"select-head\">\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\"> Clear Filter </span>\n\t                            </div>\n\t                            <ul class=\"slctd-fltrli\" type=\"none\">\n\t                                <li> Rejected <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Draft <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li>\n\t                            </ul>\n                          \t</div>\n                        </div>\n                        <div class=\"card\" > \n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">description</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"card-title\">View Content</h4>\n                                <div class=\"row\">\n                                    <div class=\"col-md-7 col-sm-7 col-xs-12\"></div>\n                                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Choose State\">\n                                                <md-option value=\"1\"> State1 </md-option>\n                                                <md-option value=\"2\"> State2 </md-option>\n                                                <md-option value=\"3\"> State3 </md-option>\n                                                <md-option value=\"4\"> State4 </md-option>\n                                                <md-option value=\"5\"> State5 </md-option>\n                                                <md-option value=\"6\"> State6 </md-option>\n                                                <md-option value=\"7\"> State7 </md-option>\n                                                <md-option value=\"8\"> State8 </md-option>\n                                                <md-option value=\"9\"> State9 </md-option>\n                                                <md-option value=\"10\"> State10 </md-option>\n                                                <md-option value=\"11\"> State11 </md-option>\n                                                <md-option value=\"12\"> State12 </md-option>\n                                                <md-option value=\"13\"> State13 </md-option>\n                                                <md-option value=\"14\"> State14 </md-option>\n                                                <md-option value=\"15\"> State15 </md-option>\n                                                <md-option value=\"16\"> State16 </md-option>\n                                                <md-option value=\"17\"> State17 </md-option>\n                                                <md-option value=\"18\"> State18 </md-option>\n                                                <md-option value=\"19\"> State19 </md-option>\n                                                <md-option value=\"20\"> State20 </md-option>\n                                                <md-option value=\"21\"> State21 </md-option>\n                                                <md-option value=\"22\"> State22 </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Choose Language\">\n                                                <md-option value=\"1\">  Hindi </md-option>\n                                                <md-option value=\"2\">  Marathi </md-option>\n                                                <md-option value=\"3\">  Assamese </md-option>\n                                                <md-option value=\"4\">  Bengali </md-option>\n                                                <md-option value=\"5\">  Dogri </md-option>\n                                                <md-option value=\"6\">  Gujarati </md-option>\n                                                <md-option value=\"7\">  Punjabi </md-option>\n                                                <md-option value=\"8\">  Bodo </md-option>\n                                                <md-option value=\"9\">  Kannada </md-option>\n                                                <md-option value=\"10\"> Kashmiri </md-option>\n                                                <md-option value=\"11\"> Urdu </md-option>\n                                                <md-option value=\"12\"> Telegu </md-option>\n                                                <md-option value=\"13\"> Konkani </md-option>\n                                                <md-option value=\"14\"> Malayalam </md-option>\n                                                <md-option value=\"15\"> Manipuri or Meithei </md-option>\n                                                <md-option value=\"16\"> English </md-option>\n                                                <md-option value=\"17\"> Nepali </md-option>\n                                                <md-option value=\"18\"> Oriya </md-option>\n                                                <md-option value=\"19\"> Sanskrit </md-option>\n                                                <md-option value=\"20\"> Santali </md-option>\n                                                <md-option value=\"21\"> Sindhi </md-option>\n                                                <md-option value=\"22\"> Tamil </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-7 col-sm-7 col-xs-12\">\n                                    \t<a class=\"btn btn-round btn-md btn-disabled btn-warning\" (click)=\"openDialog()\">Shortlist to homepage</a>\n                                    \t<a class=\"btn btn-round btn-md btn-disabled btn-success\" (click)=\"openDialog()\">Shortlist to category</a>\n                                    \t<a class=\"btn btn-round btn-md btn-disabled btn-danger\">Delete</a>\n                                    </div>\n                                    <div class=\"col-md-5 col-sm-5 col-xs-12\">\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Items Per Page\">\n                                                <md-option value=\"1\"> 25 </md-option>\n                                                <md-option value=\"2\"> 50 </md-option>\n                                                <md-option value=\"3\"> 100 </md-option>\n                                                <md-option value=\"4\"> 200 </md-option>\n                                                <md-option value=\"4\"> All </md-option>\n                                            </md-select>\n                                        </div>\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                            <md-select placeholder=\"Time Range\">\n                                                <md-option value=\"1\"> 7d </md-option>\n                                                <md-option value=\"2\"> 15d </md-option>\n                                                <md-option value=\"3\"> 1m </md-option>\n                                                <md-option value=\"4\"> 3m </md-option>\n                                                <md-option value=\"4\"> 6m </md-option>\n                                                <md-option value=\"4\"> 1y </md-option>\n                                                <md-option value=\"4\"> all </md-option>\n                                            </md-select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"dshbrd-table table-responsive\">\n                                        <table class=\"table table-striped view-content-table font12\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">    \n                                            <thead class=\"text-danger\">\n                                                <tr>\n                                                    <th>  </th>\n                                                    <th> Content Item </th>\n                                                    <th> Date </th>\n                                                    <th colspan=\"5\"> User Engagement </th>\n                                                    <th colspan=\"4\"> Call To Action </th>\n                                                    <th> Page View </th>\n                                                </tr>\n                                                <tr>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Kadak\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Apply\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"I'm Interested\" class=\"tltip_ico\">\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \n                                                        </a>\n                                                    </th>\n                                                    <th>  </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td class=\"vertical-top\">\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"td-wdth282 text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                            <div>\n                                                                Status: <span class=\"text-success\"><b>Approved</b></span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <div> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </div>\n                                                            <div> <strong> Posted by: </strong> Rohan Sen </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\" class=\"text-success\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\" class=\"text-danger\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"td-wdth155 text-left\">\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 1,00,000 </td> <td> 5,00,000 </td> <td> 60,000 </td> <td> \n                                                    2,000 </td> <td> 8,55,070 </td>\n                                                    <td> 1,00,000 </td> <td> 48,000 </td> <td> 40,024 </td> <td> 5,00,000 </td> \n                                                    <td>10,00,000 </td>\n\n                                                </tr>\n                                                \n                                            </tbody>\n                                            <tfoot>\n                                            <tr>\n                                                <td colspan=\"14\">\n                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                                </td>\n                                            </tr>\n                                            </tfoot>\n                                        </table>\n                                        <!-- <table class=\"table\">\n                                        \t<thead class=\"text-danger\">\n                                                <tr>\n                                                    <th>  </th>\n                                                    <th> Content </th>\n                                                    <th> Date </th>\n                                                    <th colspan=\"5\"> User engagement buttons </th>\n                                                    <th colspan=\"4\"> Call to action buttons </th>\n                                                    <th> Page View </th>\n                                                </tr>\n                                                <tr>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th> </th>\n                                                    <th><i class=\"fa fa-thumbs-up\"></i> </th>\n                                                    <th><i class=\"fa fa-share\"></i> </th>\n                                                    <th><i class=\"fa fa-comment\"></i> </th>\n                                                    <th><i class=\"fa fa-check-square\"></i> </th>\n                                                    <th><i class=\"fa fa-cloud-download\"></i> </th>\n                                                    <th><i class=\"fa fa-file-text\"></i> </th>\n                                                    <th><i class=\"fa fa-phone-square\"></i> </th>\n                                                    <th><i class=\"fa fa-volume-control-phone\"></i> </th>\n                                                    <th><i class=\"fa fa-check-square-o\"></i> </th>\n                                                    <th> </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                    \t<md-checkbox></md-checkbox>\n                                            \t\t</td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <md-checkbox></md-checkbox>\n                                                    </td>\n                                                    <td class=\"text-left\">\n                                                        <div class=\"cont-img\">\n                                                            <img src=\"./assets/img/placeholder5.png\" class=\"img-responsive\" />\n                                                        </div>\n                                                        <div class=\"cont-dtl\">\n                                                            <p> Vishwanthan Anand finshes joint eighth in St.Louis Rapid Chess tournament </p>\n                                                            <p> <strong> Posted by: </strong> Rohan Sen </p>\n                                                            <div class=\"m-t-5\"> \n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-eye\"></i> View </a> |\n                                                                <a href=\"javascript:;\"> <i class=\"fa fa-pencil\"></i> Edit </a>\n                                                            </div>\n                                                            <div class=\"\"> \n                                                                <a href=\"javascript:;\">\n                                                                    News | <span class=\"dark_ylw\">Sports News</span>\n                                                                </a>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <p> <strong> Published </strong> /Rejected: 16/08/2017 </p>\n                                                        <p> Creation: 16/08/2017 </p>\n                                                        <p> Submit for Review: <strong> 16/08/2017 </strong> </p>\n                                                    </td>\n                                                    <td> 500 </td> <td> 100 </td> <td> 50 </td> <td> 40 </td> <td> 20 </td>\n                                                    <td> 100 </td> <td> 30 </td> <td> 40 </td> <td> 500 </td> \n                                                    <td>300 </td>\n\n                                                </tr>\n                                                \n                                            </tbody>\n                                        </table> -->\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <owl-date-time [(ngModel)]=\"moment\" ></owl-date-time> -->\n        <app-footer></app-footer>\n    </div>\n    <div class=\"fixed-plugin\">\n\t    <div class=\"filter-plugin\">\n\t        <a href=\"javascript:void(0);\">\n\t            <i class=\"material-icons\">sort</i>\n\t        </a>\n\t        <ul class=\"sidebar-filter\" type=\"none\">\n\t        \t<div class=\"left-content\">\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\n                    <!-- <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select State</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>State1</md-checkbox></li>\n                                <li><md-checkbox>State2</md-checkbox></li>\n                                <li><md-checkbox>State3</md-checkbox></li>\n                                <li><md-checkbox>State4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Select Language</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Language1</md-checkbox></li>\n                                <li><md-checkbox>Language2</md-checkbox></li>\n                                <li><md-checkbox>Language3</md-checkbox></li>\n                                <li><md-checkbox>Language4</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Section</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>News</md-checkbox></li>\n                                <li><md-checkbox>Jobs</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Sport News</md-checkbox></li>\n                                <li><md-checkbox>Technology News</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Sub-category </h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Football</md-checkbox></li>\n                                <li><md-checkbox>Cricket</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"wrapFilter-ul\">\n                        <h5 class=\"filter-heading\"> Status</h5>\n                        <div class=\"wrapFilter-div\">\n                            <ul class=\"filters-ul\" type=\"none\">\n                                <li><md-checkbox>Draft</md-checkbox></li>\n                                <li><md-checkbox>Rejected</md-checkbox></li>\n                                <li><md-checkbox>Revision</md-checkbox></li>\n                                <li><md-checkbox>Scheduled</md-checkbox></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"btns-filter\">\n                     <a class=\"btn custom-btn\">Apply Filter </a>\n                \t<a class=\"btn custom-btn\"> Add Content </a>\n                    <a class=\"btn custom-btn\"> Homepage Management </a>\n                    <a routerLink=\"/priority\" class=\"btn custom-btn\"> Category Priority Content Management </a>\n                </div>\n\t        </ul>\n\t    </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/view-content/view-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font12 {\n  font-size: 12px; }\n\n.view-content-table .cont-img {\n  width: 120px; }\n\n.view-content-table .cont-dtl {\n  margin-left: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/view-content/view-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContentComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* unused harmony export ExampleDataSourceSort */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_dialog_view_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ViewContentComponent = (function () {
    function ViewContentComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    ViewContentComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
        //this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
        this.dataSource = new ExampleDataSourceSort(this.exampleDatabase, this.sort);
    };
    ViewContentComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__view_dialog_view_dialog_component__["a" /* ViewDialogComponent */], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    return ViewContentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdPaginator */]) === "function" && _a || Object)
], ViewContentComponent.prototype, "paginator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSort */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSort */]) === "function" && _b || Object)
], ViewContentComponent.prototype, "sort", void 0);
ViewContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-content',
        template: __webpack_require__("../../../../../src/app/dashboard/view-content/view-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/view-content/view-content.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _c || Object])
], ViewContentComponent);

/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        return _this;
    }
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var ExampleDataSourceSort = (function (_super) {
    __extends(ExampleDataSourceSort, _super);
    function ExampleDataSourceSort(_exampleDatabase, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._sort = _sort;
        return _this;
    }
    ExampleDataSourceSort.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.getSortedData();
        });
    };
    ExampleDataSourceSort.prototype.disconnect = function () { };
    ExampleDataSourceSort.prototype.getSortedData = function () {
        var _this = this;
        var data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSourceSort;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=view-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n\t<h4 class=\"modal-title\">Select date and time</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"\">\n    \t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t<md-form-field>\n\t\t\t  \t<input mdInput [mdDatepicker]=\"picker\" placeholder=\"Start Date\">\n\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n\t\t\t  \t<md-datepicker #picker></md-datepicker>\n\t\t\t</md-form-field>\n\t\t</div>\n\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n        \t<md-form-field>\n\t\t\t  \t<input mdInput [mdDatepicker]=\"picker1\" placeholder=\"End Date\">\n\t\t\t  \t<md-datepicker-toggle mdSuffix [for]=\"picker1\"></md-datepicker-toggle>\n\t\t\t  \t<md-datepicker #picker1></md-datepicker>\n\t\t\t</md-form-field>\n\t\t</div>\n\n\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\n\t\t</div>\n\n\t\t\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  position: relative;\n  padding: 15px;\n  height: 80vh;\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewDialogComponent = (function () {
    function ViewDialogComponent() {
    }
    ViewDialogComponent.prototype.ngOnInit = function () {
    };
    return ViewDialogComponent;
}());
ViewDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/view-content/view-dialog/view-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ViewDialogComponent);

//# sourceMappingURL=view-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/view-section/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title\" >List of Admins</h4>\r\n\t<a (click)=\"onClosed()\"><i class=\"fa fa-times\"></i></a>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <md-list *ngIf=\"adminData\">\r\n\t\t<md-list-item *ngFor=\"let name of adminData\"><span *ngIf=\"validate(name.sectionName)==true\">{{name.firstName}} {{name.lastName}} </span> </md-list-item>\r\n\t\t<!-- <md-list-item> Admin2 </md-list-item>\r\n\t\t<md-list-item> Admin3 </md-list-item>\r\n\t\t<md-list-item> Admin3 </md-list-item>\r\n\t\t<md-list-item> Admin3 </md-list-item>\r\n\t\t<md-list-item> Admin3 </md-list-item>\r\n\t\t<md-list-item> Admin3 </md-list-item>\r\n -->\r\n\t</md-list>\r\n</div>\r\n<!-- <div class=\"modal-footer\">\r\n    <a class=\"btn btn-danger\"> Cancel </a>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/view-section/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  position: relative;\n  padding: 15px;\n  height: 60vh;\n  overflow: auto; }\n\n.modal-header {\n  position: relative; }\n\n.modal-header a {\n  text-decoration: none;\n  position: absolute;\n  right: 15px;\n  font-size: 20px;\n  color: #FEA508;\n  top: 15px;\n  outline: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/view-section/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__ = __webpack_require__("../../../../../src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogComponent = (function () {
    function DialogComponent(dialog, dialogRef, adminService, appProvider, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.adminService = adminService;
        this.appProvider = appProvider;
        this.data = data;
        this.adminName = [];
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.getAdminList();
    };
    DialogComponent.prototype.getAdminList = function () {
        var _this = this;
        this.waitLoader = true;
        this.adminService.onGetAdmin().subscribe(function (data) {
            _this.waitLoader = false;
            _this.adminData = data.response;
            // console.log(JSON.stringify(this.adminData))
        }, function (error) {
            _this.waitLoader = false;
            //  this.toastr.error( 'Something went worng please try again after some time !!','Error !!. ',{toastLife: 3000, showCloseButton: true});
        });
    };
    DialogComponent.prototype.onClosed = function () {
        this.dialogRef.close();
    };
    DialogComponent.prototype.getName = function () {
        var value = this.getvalue();
        console.log(JSON.stringify(value));
        return value;
    };
    DialogComponent.prototype.getvalue = function () {
        for (var i = 0; i <= this.adminData.length; i++) {
            var obj = this.adminData[0];
            for (var j = 0; j <= obj.sectionName.length; j++) {
                var obj2 = obj.sectionName[j];
                if (obj2) {
                    if (obj2.name == this.appProvider.current.currentSectionName) {
                        if (obj2.check == true) {
                            this.adminName.push({ firstName: obj.firstName, lastName: obj.lastNmae });
                        }
                    }
                }
            }
        }
    };
    DialogComponent.prototype.validate = function (vale) {
        // alert(JSON.stringify(vale))
        for (var i = 0; i < vale.length; i++) {
            var obj = vale[i];
            if (obj.name == this.appProvider.current.currentSectionName && obj.checked == true) {
                // code...
                return true;
            }
        }
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/view-section/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/view-section/dialog/dialog.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_admin_service__["a" /* AdminService */]]
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_app_provider__["a" /* AppProvider */]) === "function" && _d || Object, Object])
], DialogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/view-section/view-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center \"></div>\r\n    </div>\r\n\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <div class=\"main-content\">\r\n            <div class=\"container-fluid p-0\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12\">\r\n                    \t<div class=\"card m-t-0\">\r\n                    \t\t<div class=\"card-content\">\r\n\t                            <div class=\"select-head\">\r\n\t                                <span class=\"hed\"> Selected filter </span> | <span class=\"clar-filter\" (click)=clearAll()> Clear Filter </span>\r\n\t                            </div>\r\n\t                            <ul class=\"slctd-fltrli\" type=\"none\" *ngIf=\"finalFilterSectionList\">\r\n\t                                <li *ngFor=\"let filterSec of finalFilterSectionList\">{{filterSec.sectionName}}<span  (click)=\"clearOneFilter(filterSec)\"> <i class=\"fa fa-times\"></i> </span> </li>\r\n\t                               <!--  <li> Jobs <span> <i class=\"fa fa-times\"></i> </span> </li> -->\r\n\t                               <!--  <li> News <span> <i class=\"fa fa-times\"></i> </span> </li>\r\n\t                                <li> Revision <span> <i class=\"fa fa-times\"></i> </span> </li> -->\r\n\t                            </ul>\r\n                          \t</div>\r\n                        </div>\r\n                        <div class=\"card\" > \r\n                            <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\r\n                                <i class=\"material-icons\">apps</i>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <h4 class=\"card-title\">View Section</h4>\r\n\r\n                                <div class=\"row\">\r\n\t                                <div class=\"dshbrd-table table-responsive th-left\">\r\n\t                                \t<table class=\"table table-striped view-sec-table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">    \r\n\t                                        <thead class=\"text-danger\">\r\n\t\t                                        <tr>\r\n\t\t                                            <th class=\"text-left\"> Section Name </th>\r\n\t\t                                            <th class=\"text-left\"> Category Name </th>\r\n\t\t                                            <th class=\"text-left\"> Sub-Category Name </th>\r\n\t\t                                            <th colspan=\"5\"> User Engagement </th>\r\n\t\t                                            <th colspan=\"4\"> Call to Action</th>\r\n\t\t                                            <th> Contribution Forms </th>\r\n\t\t                                            <th> Admins </th>\r\n\t\t                                        </tr>\r\n\t\t                                        <tr>\r\n                                                    <th> </th>\r\n                                                    <th> </th>\r\n                                                    <th> </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Kadak\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"thumb\"> <i class=\"icon-okay\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Share\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"share\"> <i class=\"fa fa-share-alt\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Comment\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"comment\"> <i class=\"icon-msg\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Save\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"square\"> <i class=\"icon-badge\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Download\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"download\"> <i class=\"icon-donload\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Apply\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"text\"> <i class=\"icon-check\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"phone\"> <i class=\"icon-call\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"Call Me Back\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"volume\"> <i class=\"icon-callme\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>\r\n                                                        <a mdTooltipPosition=\"above\" mdTooltip=\"I'm Interested\" class=\"tltip_ico\">\r\n                                                            <mfDefaultSorter by=\"check\"> <i class=\"icon-click\"></i> </mfDefaultSorter> \r\n                                                        </a>\r\n                                                    </th>\r\n                                                    <th>  </th>\r\n                                                    <th>  </th>\r\n                                                </tr>\r\n\t\t                                    </thead>\r\n\t\t                                    <tbody>\r\n\t\t                                        <tr *ngFor=\"let data of sectiondata;let i=index\">\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\" *ngIf=\"data.sectionName\">\r\n\t\t                                                    <a *ngIf=\"showSectionName(data.sectionName,i)==true \"  class=\"cusdropdown-toggle\" #event (click)=\"openDiv(event,'section',data)\">\r\n\t\t                                                        {{data.sectionName}} <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li (click)=\"editSection(statusData)\"> <a href=\"javascript:void(0);\"> <span class=\"pull-left\" >Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\" (click)=\"deleteSection(statusData)\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\" >\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label *ngIf=\"statusData\" class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" [(ngModel)]=\"statusData.status\" (change)=\"enableDisableSection(statusData)\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label *ngIf=\"statusData\" class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" [(ngModel)]=\"statusData.publishStatus\" (change)=\"publishUnpublishSection(statusData)\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\" *ngIf=\"data.categoryName\">\r\n\t\t                                                    <a  *ngIf=\"showCategoryName(data.categoryName,i)==true\"  class=\"cusdropdown-toggle\"  #event (click)=\"openDiv(event, 'category', data)\">\r\n\t\t                                                         {{data.sectionName}} | <span class=\"dark_ylw\"> {{data.categoryName}}  {{data.sectionName}}</span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li (click)=\"editCategory(statusData)\"> <a href=\"javascript:void(0);\"> <span class=\"pull-left\" >Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li (click)=\"deleteCategory(statusData)\"> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label *ngIf=\"statusData\" class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\"  [(ngModel)]=\"statusData.status\"  (change)=\"enableDisableCategory(statusData)\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label *ngIf=\"statusData\" class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\"  [(ngModel)]=\"statusData.publishStatus\" (change)=\"publishUnpublishCategory(statusData)\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\" *ngIf=\"data.subCategoryName\">\r\n\t\t                                                    <a   class=\"cusdropdown-toggle\" #event (click)=\"openDiv(event,'subCategory', data)\">\r\n\t\t                                                        {{data.categoryName}}  {{data.sectionName}} |<span class=\"dark_ylw\"  > {{data.subCategoryName}} </span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li (click)=\"editSubCategory(statusData)\"> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li (click)=\"deleteSubCategory(statusData)\"> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label *ngIf=\"statusData\" class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\"  [(ngModel)]=\"statusData.status\"  (change)=\"enableDisableSubCategory(statusData)\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label *ngIf=\"statusData\" class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\"  [(ngModel)]=\"statusData.publishStatus\"  (change)=\"publishUnpublishSubCategory(statusData)\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.userEngBtnLike\"> <i class=\"fa fa-check\"></i> </a> \r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.userEngBtnShare\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.userEngBtnComment\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.userEngBtnSave\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.userEngBtnDownload\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.callToActBtnApply\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.callToActBtnCallMe\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.callToActBtnInterested\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a *ngIf=\"data.callToActBtnCall\"> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>  \r\n\t\t                                            <td>\r\n\t\t                                               <span *ngIf=\"data.contributionForm=='Yes' || data.contributionForm=='yes'\"> Active</span>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a class=\"btn btn-warning\" (click)=\"openDialog(data)\">View Admins </a>\r\n\t\t                                            </td>\r\n\r\n\t\t                                        </tr>\r\n<!-- \r\n\t\t                                        <tr>\r\n\t\t                                        \t<td></td>\r\n\t\t                                        \t<td></td>\r\n\t\t                                        \t\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\">\r\n\t\t                                                    <a  href=\"javascript:;\" class=\"cusdropdown-toggle\">\r\n\t\t                                                        Sports News |<span class=\"dark_ylw\"> Football </span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                \r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>  \r\n\t\t                                            <td>\r\n\t\t                                                Active\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a class=\"btn btn-warning\" (click)=\"openDialog()\">View Admins </a>\r\n\t\t                                            </td>\r\n\r\n\t\t                                        </tr>\r\n\r\n\t\t                                        <tr>\r\n\t\t                                        \t<td></td>\r\n\t\t                                        \t\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\">\r\n\t\t                                                    <a  href=\"javascript:;\" class=\"cusdropdown-toggle\">\r\n\t\t                                                        News |<span class=\"dark_ylw\"> Technology News </span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\">\r\n\t\t                                                    <a  href=\"javascript:;\" class=\"cusdropdown-toggle\">\r\n\t\t                                                        Technology News |<span class=\"dark_ylw\"> Mobile </span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                \r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                \r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>  \r\n\t\t                                            <td>\r\n\t\t                                                Active\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a class=\"btn btn-warning\" (click)=\"openDialog()\">View Admins </a>\r\n\t\t                                            </td>\r\n\r\n\t\t                                        </tr>\r\n\r\n\r\n\t\t                                        <tr>\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\">\r\n\t\t                                                    <a  href=\"javascript:;\" class=\"cusdropdown-toggle\">\r\n\t\t                                                        Jobs <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\">\r\n\t\t                                                    <a  href=\"javascript:;\" class=\"cusdropdown-toggle\">\r\n\t\t                                                        Jobs | <span class=\"dark_ylw\">Government News</span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td class=\"text-left\">\r\n\t\t                                                <div class=\"dropdown\">\r\n\t\t                                                    <a  href=\"javascript:;\" class=\"cusdropdown-toggle\">\r\n\t\t                                                        Government News |<span class=\"dark_ylw\"> Urban area </span> <i class=\"fa fa-cog\"></i>\r\n\t\t                                                    </a>\r\n\t\t                                                    <ul class=\"dropdown-menu\">\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Edit</span> <span class=\"pull-right\"> <i class=\"fa fa-edit\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li> <a href=\"javascript:void(0);\"> <span class=\"pull-left\">Delete</span> <span class=\"pull-right\"> <i class=\"fa fa-trash\"></i> </span>\r\n\t\t                                                        <div class=\"clearfix\"></div>\r\n\t\t                                                        </a> </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Enable</span>                           \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                        <li>\r\n\t\t                                                            <a href=\"javascript:void(0);\">\r\n\t\t                                                            \t<span class=\"pull-left\">Publish</span>                          \r\n\t\t                                                                <span class=\"pull-right\">\r\n\t\t                                                                    <div class=\"cus-switch\">\r\n\t\t                                                                        <label class=\"switch m-b-0\">\r\n\t\t                                                                            <input type=\"checkbox\" />\r\n\t\t                                                                            <span class=\"slider round\"></span>\r\n\t\t                                                                        </label>\r\n\t\t                                                                    </div>\r\n\t\t                                                                </span>\r\n\t\t                                                                <div class=\"clearfix\"></div>\r\n\t\t                                                            </a>\r\n\t\t                                                        </li>\r\n\t\t                                                    </ul>\r\n\t\t                                                </div>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                \r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                \r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a> <i class=\"fa fa-check\"></i> </a>\r\n\t\t                                            </td>  \r\n\t\t                                            <td>\r\n\t\t                                                Active\r\n\t\t                                            </td>\r\n\t\t                                            <td>\r\n\t\t                                                <a class=\"btn btn-warning\" (click)=\"openDialog()\">View Admins </a>\r\n\t\t                                            </td>\r\n\r\n\t\t                                        </tr> -->\r\n\r\n\t\t                                    </tbody>\r\n\t\t                                    <tfoot>\r\n\t                                            <tr>\r\n\t                                                <td colspan=\"14\">\r\n\t                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n\t                                                </td>\r\n\t                                            </tr>\r\n                                            </tfoot>\r\n\t                                    </table>\r\n\t                                </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n\r\n    <div class=\"fixed-plugin\">\r\n\t    <div class=\"filter-plugin\">\r\n\t        <a href=\"javascript:void(0);\">\r\n\t            <i class=\"material-icons\">sort</i>\r\n\t        </a>\r\n\t        <ul class=\"sidebar-filter\" type=\"none\">\r\n\t        \t<div class=\"left-content\">\r\n\t        \t\t<div class=\"close-filter\"> <span> <i class=\"fa fa-times\"></i> </span> </div>\r\n                    <div class=\"wrapFilter-ul\">\r\n                        <h5 class=\"filter-heading\"> Section</h5>\r\n                        <div class=\"wrapFilter-div\">\r\n                            <ul class=\"filters-ul\" type=\"none\">\r\n                                <li *ngFor=\"let sec of sections\"><md-checkbox [(ngModel)]=\"sec.check\" (change)=\"onChangefilter(sec)\">{{sec.sectionName}}</md-checkbox></li>\r\n                                <div class=\"btns-filter\">\r\n\t\t\t\t                    <a class=\"btn custom-btn\" (click)=\"applyFilter(sections)\">Apply Filter </a>\r\n\t\t\t\t                \t\r\n\t\t\t\t                </div>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n\t        </ul>\r\n\t    </div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/view-section/view-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dshbrd-table.th-left table thead th.text-left, .dshbrd-table.th-left table tbody td.text-left {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/view-section/view-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/view-section/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_section_service__ = __webpack_require__("../../../../../src/app/providers/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewSectionComponent = (function () {
    function ViewSectionComponent(dialog, router, fb, vcr, toastr, http, sectionService, appProvider) {
        this.dialog = dialog;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.http = http;
        this.sectionService = sectionService;
        this.appProvider = appProvider;
        this.sectiondata = [];
        this.forFilterData = [];
        this.filterModel = [];
        this.filterSectionList = [];
    }
    ViewSectionComponent.prototype.ngOnInit = function () {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
        $('.cusdropdown-toggle').on('click', function () {
            alert('hy');
            $(this).closest('.dropdown').toggleClass('open');
        });
        $(window).on('click', function (e) {
            e.stopPropagation();
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if ($trigger !== e.target && !$trigger.has(e.target).length) {
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }
        });
        this.getSectionViewData();
        this.getSectionList();
    };
    ViewSectionComponent.prototype.getSectionViewData = function () {
        var _this = this;
        this.sectiondata = [];
        this.sectionService.onGetSectionData()
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                var local = data.FinalArray;
                for (var i = 0; i < local.length; i++) {
                    var obj = local[i];
                    console.log(JSON.stringify(obj));
                    if (obj.section_categories.length > 0) {
                        for (var j = 0; j < obj.section_categories.length; j++) {
                            var obj2 = obj.section_categories[j];
                            if (obj2.section_subcategories.length > 0) {
                                for (var k = 0; k < obj2.section_subcategories.length; k++) {
                                    var obj3 = obj2.section_subcategories[k];
                                    obj3.contributionForm = obj2.contributionForm;
                                    _this.sectiondata.push(obj3);
                                    _this.forFilterData.push(obj3);
                                }
                            }
                            else {
                                _this.sectiondata.push(obj2);
                                _this.forFilterData.push(obj2);
                            }
                        }
                    }
                    else {
                        _this.sectiondata.push(obj);
                        _this.forFilterData.push(obj);
                    }
                }
                console.log(JSON.stringify(_this.sectiondata));
            }
        }, function (error) {
        });
    };
    ViewSectionComponent.prototype.openDiv = function (e, flag, data) {
        $('.dropdown').removeClass('open');
        this.flag = flag;
        if (this.flag == 'section') {
            var id = void 0;
            if (data.sectionId) {
                id = data.sectionId;
            }
            else {
                id = data._id;
            }
            this.getSectionData(id, e);
        }
        else if (this.flag == 'category') {
            var id = void 0;
            if (data.categoryId) {
                id = data.categoryId;
            }
            else {
                id = data._id;
            }
            this.getCategoryData(id, e);
        }
        else if (this.flag == 'subCategory') {
            var id = data._id;
            this.getSubCategoryData(id, e);
        }
        console.log(JSON.stringify(this.flag));
        console.log(JSON.stringify(data));
    };
    ViewSectionComponent.prototype.openDialog = function (data) {
        this.appProvider.current.currentSectionName = data.sectionName;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__["a" /* DialogComponent */], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ViewSectionComponent.prototype.showSectionName = function (name, index) {
        if (index > 0) {
            if (this.sectiondata[index - 1].sectionName == name) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    ViewSectionComponent.prototype.showCategoryName = function (name, index) {
        if (index > 0) {
            if (this.sectiondata[index - 1].categoryName == name) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    ViewSectionComponent.prototype.showSubcategoryName = function (name, index) {
        if (index > 0) {
            if (this.sectiondata[index - 1].subCategoryName == name) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    ViewSectionComponent.prototype.editSection = function (data) {
        this.appProvider.current.actionFlag = "editSection";
        if (data.sectionId) {
            this.appProvider.current.currentId = data.sectionId;
        }
        else {
            this.appProvider.current.currentId = data._id;
        }
        console.log('section' + JSON.stringify(data));
        this.router.navigate(['/add-section'], {
            skipLocationChange: true
        });
    };
    ViewSectionComponent.prototype.deleteSection = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.deleteStatus = true;
        this.sectionService.onDeleteSection(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.enableDisableSection = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.enableDisableDate = date;
        this.sectionService.onEnableDisableSection(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.publishUnpublishSection = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.publishUnbuplishDate = date;
        this.sectionService.onPublishUnpublishSection(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.editCategory = function (data) {
        this.appProvider.current.actionFlag = "editCategory";
        if (data.categoryId) {
            this.appProvider.current.currentId = data.categoryId;
        }
        else {
            this.appProvider.current.currentId = data._id;
        }
        console.log('Category' + JSON.stringify(data));
        this.router.navigate(['/add-category'], {
            skipLocationChange: true
        });
    };
    ViewSectionComponent.prototype.deleteCategory = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.deleteStatus = true;
        this.sectionService.onDeleteCategory(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.enableDisableCategory = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.enableDisableDate = date;
        this.sectionService.onEnableDisableCategory(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.publishUnpublishCategory = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.publishUnbuplishDate = date;
        this.sectionService.onPublishUnpublishCategory(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.editSubCategory = function (data) {
        this.appProvider.current.actionFlag = "editSubCategory";
        this.appProvider.current.currentId = data._id;
        console.log('SubCategory' + JSON.stringify(data));
        this.router.navigate(['/add-subcategory'], {
            skipLocationChange: true
        });
    };
    ViewSectionComponent.prototype.deleteSubCategory = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.deleteStatus = true;
        this.sectionService.onDeleteSubCategory(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.enableDisableSubCategory = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.enableDisableDate = date;
        this.sectionService.onEnableDisableSubCategory(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.publishUnpublishSubCategory = function (data) {
        var _this = this;
        var date = new Date().toISOString();
        data.publishUnbuplishDate = date;
        this.sectionService.onPublishUnpublishSubCategory(data)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                alert('hello');
                $('.dropdown').removeClass('open');
                _this.getSectionViewData();
                //this.router.navigate(['/view-section'],{ skipLocationChange: true });
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.getSectionData = function (id, e) {
        var _this = this;
        this.sectionService.onGetSingleSectionData(id)
            .subscribe(function (data) {
            _this.waitLoader = false;
            if (data.success == false) {
                _this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                    toastLife: 3000,
                    showCloseButton: true
                });
            }
            else if (data.success == true) {
                _this.statusData = data.response[0];
                $(e).closest('.dropdown').toggleClass('open');
            }
        }, function (error) {
        });
    };
    ViewSectionComponent.prototype.getCategoryData = function (id, e) {
        var _this = this;
        this.sectionService.onGetSingleSCategoryData(id)
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.statusData = data.response[0];
            $(e).closest('.dropdown').toggleClass('open');
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.getSubCategoryData = function (id, e) {
        var _this = this;
        this.sectionService.onGetSingleSubCategoryData(id)
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.statusData = data.response[0];
            $(e).closest('.dropdown').toggleClass('open');
            console.log(JSON.stringify(data));
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.getSectionList = function () {
        var _this = this;
        this.sectionService.onGetSection()
            .subscribe(function (data) {
            _this.waitLoader = false;
            _this.sections = data;
            _this.sectionDatabackup = data;
        }, function (error) {
            alert(error);
        });
    };
    ViewSectionComponent.prototype.applyFilter = function (data) {
        console.log(JSON.stringify(this.filterModel));
        if (this.filterModel.length > 0) {
            this.sectiondata = this.filterModel;
            this.finalFilterSectionList = this.filterSectionList;
        }
        else {
            this.sectiondata = this.forFilterData;
            this.finalFilterSectionList = [];
        }
    };
    ViewSectionComponent.prototype.onChangefilter = function (sec) {
        if (sec) {
            console.log(JSON.stringify(sec));
            if (sec.check == true) {
                this.filterData = this.forFilterData.filter(function (f) { return f.sectionName == sec.sectionName; });
                this.filterModel.push(this.filterData[0]);
                this.filterSectionList.push(sec);
                console.log('if');
                console.log(JSON.stringify(this.filterModel));
            }
            else {
                console.log('elsef');
                this.filterModel = this.filterModel.filter(function (f) { return f.sectionName != sec.sectionName; });
                this.filterSectionList = this.filterSectionList.filter(function (f) { return f.sectionName != sec.sectionName; });
                console.log(JSON.stringify(this.filterModel));
            }
        }
    };
    ViewSectionComponent.prototype.clearAll = function () {
        this.sectiondata = this.forFilterData;
        // this.sections=this.sectionDatabackup 
        for (var i = 0; i <= this.sections.length; i++) {
            this.sections[i].check = false;
        }
    };
    ViewSectionComponent.prototype.clearOneFilter = function (sec) {
        this.finalFilterSectionList = this.finalFilterSectionList.filter(function (f) { return f.sectionName != sec.sectionName; });
        for (var i = 0; i <= this.sections.length; i++) {
            if (this.sections[i].sectionName == sec.sectionName) {
                this.sections[i].check = false;
            }
        }
    };
    return ViewSectionComponent;
}());
ViewSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-view-section',
        template: __webpack_require__("../../../../../src/app/dashboard/view-section/view-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/view-section/view-section.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_section_service__["a" /* SectionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_app_provider__["a" /* AppProvider */]) === "function" && _h || Object])
], ViewSectionComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=view-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='orange' data-background-color=\"orange\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/FN3-2.jpg);background-position:center\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n        \t<div class=\"row\">\n                <div class=\"col-lg-12 col-md-12\">\n                    <div class=\"card\">\n                    \t<div class=\"card-cell\">\n\t                    \t<h1 class=\"text-center\"> Hi, <span *ngIf=\"appProvider.current.loginData\">{{appProvider.current.loginData.firstName}}. </span></h1>\n\t                    \t<h3 class=\"text-center\"> You have logged in as <span *ngIf=\"appProvider.current.loginData\">{{adminRole(appProvider.current.loginData.role)}} </span></h3>\n\t                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  min-height: 63vh;\n  display: table; }\n\n.card-cell {\n  display: table-cell;\n  vertical-align: middle;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(appProvider) {
        this.appProvider = appProvider;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.adminRole = function (role) {
        if (role == 'superAdmin') {
            return 'Super Administrator';
        }
        else if (role == 'sectionAdministrator') {
            return 'section Administrator';
        }
        else if (role == 'contentWriter') {
            return 'Content Writer';
        }
        else if (role == 'businessuser') {
            return 'Business user';
        }
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/dashboard/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app_provider__["a" /* AppProvider */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/env.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOCAL */
/* unused harmony export DEV */
/* unused harmony export PROD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var HTTP_TIMEOUT = 60000;
var LOCAL = {
    mainApi: 'http://78.47.222.237:8480/esb/api/fsp',
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: true,
    angularProd: false
};
var DEV = {
    mainApi: 'http://52.15.178.19:3001/api/',
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: false,
    angularProd: false
};
var PROD = {
    mainApi: 'https://bpmapi.vib.com.vn/esb/api/fsp',
    analytics: 'UA-23573610-12',
    timeout: HTTP_TIMEOUT,
    debug: false,
    bypass: false,
    angularProd: false
};
var ENV = DEV;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-sec\">\n    <div class=\"table-divvh\">\n        <div class=\"table-cell-div\">\n            <div class=\"container\">\n                \n                <div class=\"flex\">\n                    <div class=\"flex-items\">\n                        <div class=\"login-logo\">\n                            <img src=\"./assets/img/logo.png\" class=\"img-responsive\" />\n                        </div>\n                    </div>\n                    <div class=\"flex-items\">\n                        <div class=\"login-panel\">\n                            \n                            <h3 class=\"text-center\">Netpar Administrator Login</h3>\n\n                            <div class=\"loginas-sec\">\n                                <form class=\"example-form\" [formGroup]=\"complexForm\">\n\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-select placeholder=\"Login as\" [formControl]=\"complexForm.controls['loginAs']\" [(ngModel)]=\"loginModel.role\" >\n                                            <md-option value=\"superAdmin\" selected> Super Administrator </md-option>\n                                            <md-option value=\"sectionAdministrator\"> section Administrator </md-option>\n                                            <md-option value=\"contentWriter\"> Content Writer </md-option>\n                                            <md-option value=\"businessuser\"> Business user </md-option>\n                                        </md-select>\n                                         <md-error *ngIf=\"complexForm.controls['loginAs'].hasError('required')\">\n                                                  Login As is <strong>required</strong>\n                                        </md-error>\n                                    </div>\n                                        \n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Email\" type=\"email\" [formControl]=\"complexForm.controls['email'] \" [(ngModel)]=\"loginModel.email\">\n                                            <md-error *ngIf=\"complexForm.controls['email'].hasError('pattern')\">\n                                                  Please enter a valid email address\n                                            </md-error>\n                                            <md-error *ngIf=\"complexForm.controls['email'].hasError('required')\">\n                                                  Email is <strong>required</strong>\n                                            </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-form-field>\n                                            <input mdInput placeholder=\"Password\" type=\"password\"  [formControl]=\"complexForm.controls['password']\" [(ngModel)]=\"loginModel.password\" >\n                                             <md-error *ngIf=\"complexForm.controls['password'].hasError('required')\">\n                                                 Password is <strong>required</strong>\n                                            </md-error>\n                                        </md-form-field>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <md-checkbox [formControl]=\"complexForm.controls['remember']\" [(ngModel)]=\"loginModel.remember\" >Remember Me</md-checkbox>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                                        <button (click)=\"onLogIn()\" class=\"btn custom-btn\" [disabled]=\"buttonStatus ||!complexForm.valid\"> Login to Netpar </button>\n                                    </div>\n                                    <div class=\"form-group col-md-12 col-sm-12 col-xs-12 text-center\">\n                                        <a routerLink=\"/home\"> Forgot Password? </a>\n                                    </div>\n                                </form>\n                            </div>\n                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<script type=\"text/javascript\">\n    \n\n    $('.label-floating .form-control').on('focus',function(){\n        $(this).closest('.label-floating').addClass('is-focused');\n    });\n    $('.label-floating .form-control').on('blur',function(){\n        $(this).closest('.label-floating').removeClass('is-focused');\n    });\n\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_model_component__ = __webpack_require__("../../../../../src/app/login/login.model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_provider__ = __webpack_require__("../../../../../src/app/providers/app.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var LoginComponent = (function () {
    function LoginComponent(router, fb, loginService, toastr, vcr, appProvider) {
        this.router = router;
        this.fb = fb;
        this.loginService = loginService;
        this.toastr = toastr;
        this.appProvider = appProvider;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_4__login_model_component__["a" /* LoginModel */]();
        this.buttonStatus = false;
        this.complexForm = fb.group({
            'loginAs': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(15)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)])],
            'remember': [null]
        });
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage['remember'] == true || localStorage['remember'] == 'true') {
            this.loginModel.remember = localStorage['remember'];
            this.loginModel.email = localStorage['email'];
            this.loginModel.password = localStorage['password'];
            this.loginModel.role = localStorage['role'];
        }
        else {
            this.loginModel.role = "superAdmin";
        }
    };
    LoginComponent.prototype.onLogIn = function () {
        var _this = this;
        this.buttonStatus = true;
        this.loginService.onLogin(this.loginModel)
            .subscribe(function (data) {
            _this.buttonStatus = false;
            if (data.success == false) {
                _this.toastr.error('Please check you login credential !!', 'Authentication failed. ', { toastLife: 3000, showCloseButton: true });
            }
            else if (data.success == true) {
                _this.appProvider.current.loginData = data.response;
                if (_this.loginModel.remember == true || _this.loginModel.remember == 'true') {
                    localStorage['remember'] = true;
                    localStorage['email'] = _this.loginModel.email;
                    localStorage['password'] = _this.loginModel.password;
                    localStorage['role'] = _this.loginModel.role;
                }
                else {
                    localStorage['remember'] = null;
                    localStorage['email'] = null;
                    localStorage['password'] = null;
                    localStorage['role'] = null;
                }
                localStorage['token'] = data.token;
                _this.toastr.success('successfully!', 'Success!', { toastLife: 3000, showCloseButton: true });
                _this.router.navigate(['/welcome'], { skipLocationChange: true });
            }
        }, function (error) {
            _this.buttonStatus = false;
            _this.toastr.error('Something went worng please try again after some time !!', 'Authentication failed. ', { toastLife: 3000, showCloseButton: true });
        });
    };
    LoginComponent.prototype.onRemember = function (remember) {
        alert(remember);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_app_provider__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_app_provider__["a" /* AppProvider */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=login.model.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__("../../../../../src/app/env.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.onLogin = function (loginModel) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "authenticate";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(api, JSON.stringify(loginModel), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/current.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Current; });
var Current = (function () {
    function Current(leadsFilter) {
        this.leadsFilter = leadsFilter;
    }
    return Current;
}());

//# sourceMappingURL=current.js.map

/***/ }),

/***/ "../../../../../src/app/models/saredResources.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringResource; });
var StringResource = (function () {
    function StringResource() {
        this.language = [
            { 'language': "Hindi" },
            { 'language': "Marathi" },
            { 'language': "Assamese" },
            { 'language': "Bengali" },
            { 'language': "Dogri" },
            { 'language': "Gujarati" },
            { 'language': " Punjabi" },
            { 'language': "Bodo" },
            { 'language': "Kannada" },
            { 'language': "Kashmiri" },
            { 'language': "Urdu" },
            { 'language': "Telegu" },
            { 'language': "Konkani" },
            { 'language': "Malayalam" },
            { 'language': "Manipuri or Meithei" },
            { 'language': "English" },
            { 'language': "Nepali" },
            { 'language': "Oriya" },
            { 'language': "Sanskrit" },
            { 'language': "Santali" },
            { 'language': "Sindhi" },
            { 'language': "Tamil" }
        ];
    }
    return StringResource;
}());

//# sourceMappingURL=saredResources.js.map

/***/ }),

/***/ "../../../../../src/app/models/section.modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddSectionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddSubCategoryRequest; });
var AddSectionRequest = (function () {
    function AddSectionRequest() {
    }
    return AddSectionRequest;
}());

var AddCategoryRequest = (function () {
    function AddCategoryRequest() {
    }
    return AddCategoryRequest;
}());

var AddSubCategoryRequest = (function () {
    function AddSubCategoryRequest() {
    }
    return AddSubCategoryRequest;
}());

//# sourceMappingURL=section.modal.js.map

/***/ }),

/***/ "../../../../../src/app/providers/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__("../../../../../src/app/env.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Admin} from './edit.model.component'
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.onGetAdmin = function () {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "listAdmins";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/app.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_current__ = __webpack_require__("../../../../../src/app/models/current.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppProvider = (function () {
    function AppProvider() {
        this.current = new __WEBPACK_IMPORTED_MODULE_1__models_current__["a" /* Current */]('all');
    }
    return AppProvider;
}());
AppProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppProvider);

//# sourceMappingURL=app.provider.js.map

/***/ }),

/***/ "../../../../../src/app/providers/section.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__("../../../../../src/app/env.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Admin} from './edit.model.component'
var SectionService = (function () {
    function SectionService(http) {
        this.http = http;
    }
    SectionService.prototype.onAddSection = function (addSectionRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "addSection";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addSectionRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onAddCategory = function (addCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "addCategory";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onAddSubcategory = function (addSubCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "addSubCategory";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addSubCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onGetSection = function () {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "sectionList";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onGetCategory = function (id) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "getCategory/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onGetSectionData = function () {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "joinsTest";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onEditSection = function (addSectionRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSection/" + addSectionRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSectionRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onDeleteSection = function (addSectionRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSection/" + addSectionRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSectionRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onEnableDisableSection = function (addSectionRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSection/" + addSectionRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSectionRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onPublishUnpublishSection = function (addSectionRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSection/" + addSectionRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSectionRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onEditCategory = function (addCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editCategory/" + addCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onDeleteCategory = function (addCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editCategory/" + addCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onEnableDisableCategory = function (addCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editCategory/" + addCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onPublishUnpublishCategory = function (addCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editCategory/" + addCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onEditSubCategory = function (addSubCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSubCategory/" + addSubCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onDeleteSubCategory = function (addSubCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSubCategory/" + addSubCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onEnableDisableSubCategory = function (addSubCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSubCategory/" + addSubCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onPublishUnpublishSubCategory = function (addSubCategoryRequest) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "editSubCategory/" + addSubCategoryRequest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addSubCategoryRequest), options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onGetSingleSectionData = function (id) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "getSingleSection/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onGetSingleSCategoryData = function (id) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "getSingleCategory/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    SectionService.prototype.onGetSingleSubCategoryData = function (id) {
        var api = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].mainApi + "getSingleSubCategory/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(api, options).map(function (response) {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(function (error) {
            return error;
        });
    };
    return SectionService;
}());
SectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SectionService);

var _a;
//# sourceMappingURL=section.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map