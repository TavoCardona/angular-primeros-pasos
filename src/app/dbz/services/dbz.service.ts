import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7000
    }
  ];

  
  addCharacter(character: Character): void{

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }

    this.characters.push(newCharacter);
    
  }

  // onDeleteCharacterSelect(index: string): void{
  //   this.characters.splice(index, 1);
  // }

  onDeleteCharacterSelect(idCharacter: string): void{
    this.characters = this.characters.filter( character => character.id !== idCharacter)
  }
}
