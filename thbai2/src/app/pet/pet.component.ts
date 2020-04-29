import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'http://images4.fanpop.com/image/photos/14700000/Australian-shepard-puppies-14748649-450-664.jpg';

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
