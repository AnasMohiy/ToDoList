import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  title: string = 'To Do List Application';
  imageLink: string = '../../../assets/images/todo.png';
  isAvailable: boolean = false;
  tasks: string[] = [];
  newTask: string = '';
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.isAvailable = true;
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.isAvailable = this.tasks.length > 0;
  }

  editTask(index: number, newTaskEdit: string): string | void {
    const trimmedTask = newTaskEdit.trim();

    if (trimmedTask !== '') {
      this.tasks[index] = trimmedTask;
    } else {
      newTaskEdit = this.tasks[index];
      return (this.newTask = newTaskEdit);
    }
    this.newTask = '';
  }
}
