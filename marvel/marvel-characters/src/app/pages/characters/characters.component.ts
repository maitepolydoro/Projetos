import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { MarvelCharactersService } from 'src/app/services/marvel-characters.service';
import { ICharacter } from 'src/app/models/character';
import { IData } from 'src/app/models/data';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: ICharacter[];
  sortOptions: SelectItem[];
  data: IData;
  sortOrder: number;
  sortField: string;
  offset = 0;
  nameSearch = '';

  constructor(private charactersService: MarvelCharactersService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getCharacters(this.offset);
    this.sortOptions = [
      {label: 'Characters A - Z', value: 'ascend'},
      {label: 'Characters Z - A', value: '!ascend'}
  ];

  this.primengConfig.ripple = true;
  }

  getCharacters(offset) {
    this.charactersService.getAllCharacters(offset).subscribe(res => {
      this.data = res.data;
      this.characters = this.data.results;
    });
  }

  getCharacterByName() {
    if (this.nameSearch) {
      this.charactersService.getCharacterByName(this.nameSearch).subscribe(res => {
        this.data = res.data;
        this.characters = this.data.results;
      });
    } else {
      this.getCharacters(0);
    }

  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages    
    this.getCharacters(Number(event.page) * 20);
}


}
