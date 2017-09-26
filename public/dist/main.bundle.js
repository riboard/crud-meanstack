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

module.exports = "<app-user></app-user>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_new_user_new_component__["a" /* UserNewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["b" /* ImageCropperComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Editar</h1>\n<form (submit)=\"update()\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"nome\" placeholder=\"Nome\" [(ngModel)]=\"editUser.nome\" />\n    </div>\n    <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"sobrenome\" placeholder=\"Sobrenome\" [(ngModel)]=\"editUser.sobrenome\" />\n    </div>\n    <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"editUser.email\" />\n    </div>\n    <button class=\"btn btn-secondary\" type=\"submit\">\n    Atualizar\n  </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditComponent = (function () {
    function UserEditComponent() {
        this.editUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */];
        this.updateUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.editUser, this.user);
    };
    UserEditComponent.prototype.update = function () {
        this.editUser.editable = false;
        this.updateUserEvent.emit(this.editUser);
    };
    return UserEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]) === "function" && _a || Object)
], UserEditComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], UserEditComponent.prototype, "updateUserEvent", void 0);
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user-edit',
        template: __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserEditComponent);

var _a;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Lista de usuários</h2>\n<div class=\"table-responsive\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Foto</th>\n                <th>Nome</th>\n                <th>Sobrenome</th>\n                <th>Email</th>\n                <th>Editar</th>\n                <th>Excluir</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let user of users\">\n                <th scope=\"row\"><img src=\"{{user.foto}}\" alt=\"Foto\" width=\"50px\"></th>\n                <td>{{user.nome}}</td>\n                <td>{{user.sobrenome}}</td>\n                <td>{{user.email}}</td>\n\n                <td>\n                    <button class=\"btn btn-success\" (click)=\"user.editable = !user.editable\">\n                        Editar\n                      </button>\n                </td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"destroy(user)\">\n                        Excluir\n                      </button>\n                </td>\n                <td colspan=\"6\">\n                    <app-user-edit *ngIf=\"user.editable\" [user]=\"user\" (updateUserEvent)=\"update($event)\"></app-user-edit>\n                </td>\n            </tr>\n\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
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

var UserListComponent = (function () {
    function UserListComponent() {
        this.destroyUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.updateUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    UserListComponent.prototype.destroy = function (user) {
        var response = confirm('Exluir?');
        if (response) {
            this.destroyUserEvent.emit(user);
        }
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UserListComponent.prototype, "users", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], UserListComponent.prototype, "destroyUserEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], UserListComponent.prototype, "updateUserEvent", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListComponent);

//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Novo usuário</h2>\n<form (submit)=\"create()\" class=\"form-horizontal\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                <div class=\"file-upload\">\n                    <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\n                </div>\n                <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n                <br>\n                <span class=\"result rounded\" *ngIf=\"data.image\">\n                    <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n                </span>\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"form-group\">\n                <span for=\"nome\">Nome</span>\n                <input class=\"form-control\" type=\"text\" name=\"nome\" placeholder=\"Nome\" [(ngModel)]=\"newUser.nome\" />\n            </div>\n            <div class=\"form-group\">\n                <span for=\"sobrenome\">Sobrenome</span>\n                <input class=\"form-control\" type=\"text\" name=\"sobrenome\" placeholder=\"Sobrenome\" [(ngModel)]=\"newUser.sobrenome\" />\n            </div>\n            <div class=\"form-group\">\n                <span for=\"email\">Email</span>\n                <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"newUser.email\" />\n            </div>\n        </div>\n    </div>\n    <button class=\"btn btn-success\" type=\"submit\">\n      Cadastrar\n    </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserNewComponent = (function () {
    function UserNewComponent() {
        this.createNewUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 200;
        this.cropperSettings.canvasHeight = 200;
        this.data = {};
    }
    UserNewComponent.prototype.ngOnInit = function () {
    };
    UserNewComponent.prototype.create = function () {
        // Set foto data
        this.newUser.foto = this.data.image;
        this.createNewUserEvent.emit(this.newUser);
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.cropper.reset();
    };
    UserNewComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    return UserNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], UserNewComponent.prototype, "createNewUserEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('cropper', undefined),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["b" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["b" /* ImageCropperComponent */]) === "function" && _a || Object)
], UserNewComponent.prototype, "cropper", void 0);
UserNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user-new',
        template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserNewComponent);

var _a;
//# sourceMappingURL=user-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Usuários</h1>\n            <app-user-new (createNewUserEvent)=\"create($event)\"></app-user-new>\n\n            <hr>\n\n            <app-user-list [users]=\"users\" (destroyUserEvent)=\"destroy($event)\" (updateUserEvent)=\"update($event)\">\n            </app-user-list>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
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
    function UserComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .then(function (users) { return _this.users = users; });
    };
    UserComponent.prototype.create = function (user) {
        var _this = this;
        this._userService.create(user)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
    };
    UserComponent.prototype.update = function (user) {
        var _this = this;
        this._userService.update(user)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
    };
    UserComponent.prototype.destroy = function (user) {
        var _this = this;
        this._userService.destroy(user)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.create = function (user) {
        return this._http.post('/users', user)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.destroy = function (user) {
        return this._http.delete('/users/' + user._id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.update = function (user) {
        return this._http.put('/users/' + user._id, user)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUsers = function () {
        return this._http.get('/users')
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUser = function (user) {
        return this._http.get('/users/' + user._id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, foto, nome, sobrenome, email, editable) {
        if (_id === void 0) { _id = Math.floor(Math.random() * 100); }
        if (foto === void 0) { foto = ''; }
        if (nome === void 0) { nome = ''; }
        if (sobrenome === void 0) { sobrenome = ''; }
        if (email === void 0) { email = ''; }
        if (editable === void 0) { editable = false; }
        this._id = _id;
        this.foto = foto;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.editable = editable;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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