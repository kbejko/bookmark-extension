import { Component } from 'angular2/core';
import { Output } from 'angular2/core';
import { EventEmitter } from 'angular2/core';

export interface Bookmark {
  name: string,
  url: string
}

@Component({
  selector: 'bookmark',
  templateUrl: './templates/bookmark.html',
  inputs: ['bookmark']
})

export class BookmarkComponent {

  bookmark: Bookmark;
  submitted = false;

  @Output() bookmarkChanged: EventEmitter<any> = new EventEmitter();
  @Output() bookmarkDeleted: EventEmitter<any> = new EventEmitter();

  onSubmit( bookmark: Bookmark ) {
    this.submitted = false;
    this.bookmarkChanged.emit( bookmark );
  }

  onDelete( bookmark: Bookmark ) {
    this.bookmarkDeleted.emit( bookmark );
  }

}
