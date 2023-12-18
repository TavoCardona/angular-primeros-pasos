import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component {
  public listHeroes: string[] = ['Thor', 'Ironman', 'Hulk', 'Spiderman', 'Super Man'];
  public deleteHero? : string;
  

  deletHero(): void{
    this.deleteHero = this.listHeroes.pop();
  }
}
