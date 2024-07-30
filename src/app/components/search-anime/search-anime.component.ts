import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css'],
})
export class SearchAnimeComponent {
  searchTerm: string = '';

  constructor(private animeService: AnimeService) {}

  search() {
    this.animeService.getAnimes(this.searchTerm).subscribe((result) => {
      this.animeService.addResultAnime(result.data);
      this.searchTerm = '';
    });
  }
}
