import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments:string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }
  remove(experiment:string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
  add(newExperiment:string){
    if(!this.experiments.includes(newExperiment)){
      this.experiments.push(newExperiment);
    }else{
      alert("Experiment already underway");
    }
  }
}
