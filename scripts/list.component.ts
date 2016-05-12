import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Bookmark } from './bookmark.component';
import { BookmarkComponent } from './bookmark.component';
import { ListService } from './list.service'

@Component({
  selector: 'bookmark-list',
  templateUrl: './templates/list.html',
  directives: [ BookmarkComponent ],
  providers: [ ListService ]
})

export class ListComponent implements OnInit {

  public bookmarks: Array< Object >;

  constructor( private listService: ListService ) {}

  getBookmarkLists() {
    this.listService.getBookmarks().then( bookmarks => this.bookmarks = bookmarks );
  }

  ngOnInit() {
    this.getBookmarkLists();
  }

  setList() {
    this.listService.setBookmarks( this.bookmarks );
  }

  deleteBookmark( bookmark: Bookmark, i: number ) {
    this.bookmarks.splice( i, 1);
    this.setList();
  }

}
