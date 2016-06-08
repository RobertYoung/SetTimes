import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../../models/Artist';
import {InAppBrowser} from 'ionic-native';

@Component({
  selector: 'artist-card',
  templateUrl: 'build/components/artist-card/artist-card.component.html'
})
export class ArtistCard implements OnInit {
  @Input() artist: Artist;

  constructor() {}

  ngOnInit() {
  }

  goToSpotifyPage(url: string) {
    window.open(url, '_system');
  }
}
