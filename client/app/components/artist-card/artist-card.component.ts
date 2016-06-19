import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Artist} from '../../models/set-times/artist';
import {InAppBrowser} from 'ionic-native';

@Component({
  selector: 'artist-card',
  templateUrl: 'build/components/artist-card/artist-card.component.html'
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: Artist;
  @Output() artistselected: EventEmitter<Artist> = new EventEmitter<Artist>();

  constructor() {}

  ngOnInit() {
  }

  goToSpotifyPage(url: string) {
    window.open(url, '_system');
  }

  artistPressed(artist: Artist) {
    this.artistselected.next(artist);
  }
}
