import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent {

  // @Output() character = new EventEmitter<Character>();
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
  public characterForm: Character = {
    name: '',
    power: 0
  } 

  emitCharacter(): void{
    // console.log(this.characterForm);
    if(this.characterForm.name.length === 0) return;
    this.onNewCharacter.emit(this.characterForm);

    this.characterForm = { name: '', power: 0}

    /* this.characterForm.name = '',
    this.characterForm.power = 0 */
  }
}
