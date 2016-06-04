import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../../models/Artist';

@Component({
  selector: 'artist-card',
  templateUrl: 'build/components/artist-card/artist-card.component.html'
})
export class ArtistCard implements OnInit {
  @Input() artist: Artist;

  constructor() {}

  ngOnInit() {
  }
}
