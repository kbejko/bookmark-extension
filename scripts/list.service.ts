/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import { BookmarkComponent } from './bookmark.component';
import { BOOKMARKS } from './list.data.constant';

import { Injectable } from 'angular2/core';

@Injectable()

export class ListService {
  bookmarksLocalStorage = JSON.parse( localStorage.getItem('bookmarklist') );
  bookmarksDefaultData = BOOKMARKS;
  bookmarksToReturn = this.bookmarksDefaultData;

  getBookmarks() {
    if ( this.bookmarksLocalStorage !== null ) {
      this.bookmarksToReturn = this.bookmarksLocalStorage;
    }
    return Promise.resolve( this.bookmarksToReturn );
  }

  setBookmarks( bookmarks: Object ) {
    localStorage.setItem( 'bookmarklist', JSON.stringify( bookmarks ) );
  }

}
