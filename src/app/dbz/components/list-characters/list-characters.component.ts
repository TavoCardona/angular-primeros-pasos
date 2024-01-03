import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character, DeleteCharacterList } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})


export class ListCharactersComponent {


  @Input() 
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 200,
    }
  ];

  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(characterIndex?: string): void {
    console.log('este es el indiceeeeeeeee', characterIndex);
    
    this.onDeleteID.emit(characterIndex);
  }

}
