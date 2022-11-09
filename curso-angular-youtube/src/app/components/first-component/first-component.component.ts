import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Leonardo';
  idade: number = 27;
  job: string = 'Programador';
  hobbies = ['Estudar', 'jogar', 'ler'];
  car = {
    name: 'Polo',
    ano: 2019,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
