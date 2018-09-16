import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[] = [];
  constructor(private trainingServices: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingServices.getAvailableExercises();
  }
  onStartTraining(form: NgForm) {
    console.log(form.value.exercise);
    this.trainingServices.startExercises(form.value.exercise);
  }
}
