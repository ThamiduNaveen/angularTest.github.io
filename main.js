(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-shell>\r\n        <h1 header>My blog</h1>\r\n        <app-blog-list body></app-blog-list>\r\n        <h2 footer>Footer</h2>\r\n</app-shell>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _blog_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-data.service */ "./src/app/blog-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_post_title_blog_post_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-post-title/blog-post-title.component */ "./src/app/blog-post-title/blog-post-title.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog-list/blog-list.component.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/truncate.pipe.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/paginator/paginator.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _blog_post_title_blog_post_title_component__WEBPACK_IMPORTED_MODULE_4__["BlogPostTitleComponent"],
                _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_5__["BlogListComponent"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__["PaginatorComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_8__["HighlightDirective"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                _shell_shell_component__WEBPACK_IMPORTED_MODULE_10__["ShellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _blog_data_service__WEBPACK_IMPORTED_MODULE_0__["BlogDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog-data.service.ts ***!
  \**************************************/
/*! exports provided: BlogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDataService", function() { return BlogDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-post */ "./src/app/blog-post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogDataService = /** @class */ (function () {
    function BlogDataService() {
        this.blogPosts = [[], [], [], []];
    }
    BlogDataService.prototype.getData = function () {
        this.blogPosts[0].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 1", "summary 1"));
        this.blogPosts[0].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 2", "summary is a summary produced to show a teacher that you have read and understood something. It is common in many 100 and 200 level classes to get assignments that ask you to read a certain number of articles and summarize them. This is also a very common type of writing assignment in graduate school"));
        this.blogPosts[0].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 3", "summary 3 summary is a summary produced to show a teacher that you have read and understood something. It is common in many 100 and 200 level classes to get assignments that ask you to read a certain number of articles and summarize them. This is also a very common type of writing assignment in graduate school"));
        this.blogPosts[0].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post test", "summary test"));
        this.blogPosts[1].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 4", "summary 4"));
        this.blogPosts[1].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 5", "summary 5 summary is a summary produced to show a teacher that you have read and understood something. It is common in many 100 and 200 level classes to get assignments that ask you to read a certain number of articles and summarize them. This is also a very common type of writing assignment in graduate school"));
        this.blogPosts[1].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 6", "summary 6"));
        this.blogPosts[2].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 7", "summary 7 summary is a summary produced to show a teacher that you have read and understood something. It is common in many 100 and 200 level classes to get assignments that ask you to read a certain number of articles and summarize them. This is also a very common type of writing assignment in graduate school summary is a summary produced to show a teacher that you have read and understood something. It is common in many 100 and 200 level classes to get assignments that ask you to read a certain number of articles and summarize them. This is also a very common type of writing assignment in graduate school"));
        this.blogPosts[2].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 8", "summary 8"));
        this.blogPosts[2].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 9", "summary 9"));
        this.blogPosts[3].push(new _blog_post__WEBPACK_IMPORTED_MODULE_1__["BlogPost"]("blog post 10", "summary 10"));
        return this.blogPosts;
    };
    BlogDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogDataService);
    return BlogDataService;
}());



/***/ }),

/***/ "./src/app/blog-list/blog-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\n    <p><a href=\"#\" (click)=\"expandAll()\">Expand All</a></p>\n    <p><a href=\"#\" (click)=\"favAll()\">Favorite All</a></p>\n</app-card>\n\n<app-blog-post-title *ngFor=\"let post of blogPosts[currentPage]\" [post]=\"post\" #tile></app-blog-post-title>\n<app-paginator \n  [noOfPages]=\"blogPosts.length\" \n  (pageNumberClicked) = \"updatePage($event)\">\n</app-paginator>\n\n"

/***/ }),

/***/ "./src/app/blog-list/blog-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-list/blog-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.ts ***!
  \**************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-data.service */ "./src/app/blog-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(blogDataServise) {
        this.blogDataServise = blogDataServise;
        this.blogPosts = [[], [], [], []];
    }
    BlogListComponent.prototype.ngOnInit = function () {
        this.currentPage = 0;
        this.blogPosts = this.blogDataServise.getData();
    };
    BlogListComponent.prototype.updatePage = function (newPage) {
        this.currentPage = newPage;
    };
    BlogListComponent.prototype.expandAll = function () {
        this.blogPostTileComponents.forEach(function (e) { return e.showFullSummary(); });
    };
    BlogListComponent.prototype.favAll = function () {
        this.blogPosts[this.currentPage]
            .forEach(function (p) {
            p.isFav = true;
            if (p.isFav) {
                p.favoritText = "unfavorite";
            }
            else {
                p.favoritText = "favorite";
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BlogListComponent.prototype, "blogPostTileComponents", void 0);
    BlogListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blog-list.component.html */ "./src/app/blog-list/blog-list.component.html"),
            styles: [__webpack_require__(/*! ./blog-list.component.scss */ "./src/app/blog-list/blog-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_blog_data_service__WEBPACK_IMPORTED_MODULE_1__["BlogDataService"]])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/blog-post-title/blog-post-title.component.html":
/*!****************************************************************!*\
  !*** ./src/app/blog-post-title/blog-post-title.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card blog-tile\" [ngClass]=\"{fav:post.isFav}\" >\n  <div class=\"card-body\">\n    <h5 class=\"card-title\" appHighlight>{{post.title}}</h5>\n    <!-- <p class=\"card text\">{{post.summary|truncate : [50,\".......\"]}}</p> -->\n    <p class=\"card text\" (click)=\"showFullSummary()\" appHighlight color =\"green\">{{post.summary}}</p>\n    <a href=\"#\" class=\"btn btn-primary blog-btn\">Read</a>\n    <a href=\"#\" class=\"btn btn-primary blog-btn\" (click)=\"markFav()\">{{post.favoritText}}</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-post-title/blog-post-title.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/blog-post-title/blog-post-title.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-btn {\n  font-weight: 700;\n  margin: 2px; }\n\n:host {\n  margin: 20px; }\n\n.blog-tile {\n  border: solid black 2px; }\n\n.fav {\n  background-color: chocolate; }\n"

/***/ }),

/***/ "./src/app/blog-post-title/blog-post-title.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/blog-post-title/blog-post-title.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogPostTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostTitleComponent", function() { return BlogPostTitleComponent; });
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../blog-post */ "./src/app/blog-post.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../truncate.pipe */ "./src/app/truncate.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPostTitleComponent = /** @class */ (function () {
    function BlogPostTitleComponent(truncate) {
        this.truncate = truncate;
    }
    BlogPostTitleComponent.prototype.ngOnInit = function () {
        this.fullSummary = this.post.summary;
        this.post.summary = this.truncate.transform(this.post.summary, 20);
    };
    BlogPostTitleComponent.prototype.showFullSummary = function () {
        this.post.summary = this.fullSummary;
    };
    BlogPostTitleComponent.prototype.markFav = function () {
        this.post.isFav = !this.post.isFav;
        if (this.post.isFav) {
            this.post.favoritText = "unfavorite";
        }
        else {
            this.post.favoritText = "favorite";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _blog_post__WEBPACK_IMPORTED_MODULE_0__["BlogPost"])
    ], BlogPostTitleComponent.prototype, "post", void 0);
    BlogPostTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-post-title',
            template: __webpack_require__(/*! ./blog-post-title.component.html */ "./src/app/blog-post-title/blog-post-title.component.html"),
            styles: [__webpack_require__(/*! ./blog-post-title.component.scss */ "./src/app/blog-post-title/blog-post-title.component.scss")]
        }),
        __metadata("design:paramtypes", [_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncatePipe"]])
    ], BlogPostTitleComponent);
    return BlogPostTitleComponent;
}());



/***/ }),

/***/ "./src/app/blog-post.ts":
/*!******************************!*\
  !*** ./src/app/blog-post.ts ***!
  \******************************/
/*! exports provided: BlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
var BlogPost = /** @class */ (function () {
    function BlogPost(title, summary) {
        this.title = title;
        this.summary = summary;
        this.isFav = false;
        this.favoritText = "favorite";
    }
    return BlogPost;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"borderd\">\n    <ng-content></ng-content>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderd {\n  border: 2px solid black;\n  background-color: antiquewhite; }\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(element) {
        this.element = element;
        this.color = 'yellow';
    }
    HighlightDirective.prototype.addHighLight = function () {
        this.element.nativeElement.style.backgroundColor = this.color;
    };
    HighlightDirective.prototype.removeHighLight = function () {
        this.element.nativeElement.style.backgroundColor = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "addHighLight", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "removeHighLight", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/paginator/paginator.component.html":
/*!****************************************************!*\
  !*** ./src/app/paginator/paginator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation example\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\" *ngFor=\"let page of pages;let i = index\">\n      <a class=\"page-link\" href=\"#\" (click)=\"pageClicked(i)\">{{i+1}}</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/paginator/paginator.component.scss":
/*!****************************************************!*\
  !*** ./src/app/paginator/paginator.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginator/paginator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paginator/paginator.component.ts ***!
  \**************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.pageNumberClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginatorComponent.prototype.ngOnInit = function () {
        this.pages = new Array(this.noOfPages);
    };
    PaginatorComponent.prototype.pageClicked = function (i) {
        this.pageNumberClicked.emit(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "noOfPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "pageNumberClicked", void 0);
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/paginator/paginator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <ng-content select =\"[header]\"></ng-content>\n</div>\n<div>\n  <ng-content select =\"[body]\"></ng-content>\n</div>\n<div class=\"foot\">\n  <ng-content select =\"[footer]\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/shell/shell.component.scss":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  background-color: aqua; }\n\n.foot {\n  border: 5px solid maroon;\n  max-width: 50%; }\n"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/truncate.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/truncate.pipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\nCinga\Test Projects\Angular\componentDeep\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map