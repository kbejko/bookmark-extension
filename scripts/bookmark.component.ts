import { Component } from 'angular2/core';

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

  bookmark: Bookmark = {
    name: 'SitePoint',
    url: 'https://sitepoint.com'
  }

  submitted = false

}
