import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment= ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];

  constructor() { }

  ngOnInit() {
  }
  add(newItem:string){
  if(!this.equipment.includes(newItem)){
    this.equipment.push(newItem);
  }else{
    alert("item already added");
  }}
  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
}
