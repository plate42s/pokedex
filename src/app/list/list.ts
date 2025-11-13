import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { Card } from './card/card';

@Component({
  selector: 'poke-list',
  imports: [Card],
  template: `
    
  <h1 class="title">My Pokemon List</h1>
  <div class="poke-container">
    @if (pokeListResource.isLoading()) {
      <p>Loading...</p>
    }@else if (pokeListResource.error()) {
      <p>Error Loading pokemon</p>
    }@else{
      <div class="poke-container">
        @let pokeList = pokeListResource.value();
        @for (pokeResult of pokeList?.results; track pokeResult) {
          <poke-card [pokeResult]="pokeResult"/>
        }
      </div>
    }
  </div>

  `,
  styleUrl: './list.css',
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeListResource = this.#pokeService.getPokeList();
}
