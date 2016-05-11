/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
System.register(['./list.data.constant', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var list_data_constant_1, core_1;
    var ListService;
    return {
        setters:[
            function (list_data_constant_1_1) {
                list_data_constant_1 = list_data_constant_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListService = (function () {
                function ListService() {
                    this.bookmarksLocalStorage = JSON.parse(localStorage.getItem('bookmarklist'));
                    this.bookmarksDefaultData = list_data_constant_1.BOOKMARKS;
                    this.bookmarksToReturn = this.bookmarksDefaultData;
                }
                ListService.prototype.getBookmarks = function () {
                    if (this.bookmarksLocalStorage !== null) {
                        this.bookmarksToReturn = this.bookmarksLocalStorage;
                    }
                    return Promise.resolve(this.bookmarksToReturn);
                };
                ListService.prototype.setBookmarks = function (bookmarks) {
                    localStorage.setItem('bookmarklist', JSON.stringify(bookmarks));
                };
                ListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ListService);
                return ListService;
            }());
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list.service.js.map