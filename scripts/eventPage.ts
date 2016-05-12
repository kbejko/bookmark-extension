///<reference path="chrome/chrome.d.ts" />

import { Injectable } from 'angular2/core';
import { ListService } from './list.service';

@Injectable()

export class EventPage {

  constructor ( listService: ListService ) {

    let bookmarkLists: Array< Object >;

    if (typeof chrome.browserAction !== 'undefined') {
      chrome.browserAction.onClicked.addListener( function ( tab ) {
        listService.getBookmarks().then( bookmarkLists => {
          bookmarkLists = bookmarkLists;
          getSelectedTab( bookmarkLists );
        });
      });
    } else {
      console.log( 'EventPage initialized' );
    }

    function getSelectedTab( bookmarkLists ) {
      chrome.tabs.getSelected( null, function ( tab ) {
        let newBookmark: Object = {
          name: tab.title,
          url: tab.url
        };
        bookmarkLists.push( newBookmark );
        listService.setBookmarks( bookmarkLists );
      });
    }
  }

}
