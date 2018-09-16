import { Exercise } from './exercise.model';
import {Subject} from 'rxjs';
export class TrainingService {
    exerciseChange = new Subject<Exercise>();
    private exercises: Exercise[] = [];
    private AvailableExercises: Exercise[] = [
        {id: 'crunches', name: 'crunches', duration: 30, calories: 8},
        {id: 'touch-tone', name: 'Touch Tone', duration: 180, calories: 10},
        {id: 'side-lunge', name: 'Side Lunge', duration: 120, calories: 8},
        {id: 'burbees', name: 'Burbees', duration: 60, calories: 8},
    ];
    private runningExercise: Exercise;
    getAvailableExercises() {
        return this.AvailableExercises.slice();
    }
    startExercises(selectedId: string) {
        this.runningExercise = this.AvailableExercises.find(ex => ex.id === selectedId);
        this.exerciseChange.next({ ...this.runningExercise});
    }
    getRunningExercise() {
        return {...this.runningExercise};
    }
    completeExercise() {
        this.exercises.push({
        ...this.runningExercise,
        date: new Date(),
        state: 'complete'
        });
        this.runningExercise = null;
        this.exerciseChange.next(null);
    }
    cancelExercise(progress: number) {
        this.exercises.push({
        ...this.runningExercise,
        date: new Date(),
        state: 'complete',
        duration: this.runningExercise.duration * ( progress / 100),
        calories: this.runningExercise.duration * ( progress / 100),
        });
        this.runningExercise = null;
        this.exerciseChange.next(null);
    }
    getCompletedOrCancelledExercise() {
        return this.exercises.slice();
    }
}
