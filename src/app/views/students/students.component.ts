import { Component, OnInit } from '@angular/core';

import { Student } from './students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  // List of students
  students!: Student[];

  // Current student being edited
  student!: Student;

  // True if editing a student, false if creating a new student
  edit: boolean = false;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.updateData();
  }

  /**
   * Calls StudentsService to save the student when
   * form submit button is clicked
   */
  create(): void {
    this.studentsService.create(this.student);
    this.updateData();
  }

  /**
   * Calls StudentsService to update the student, and resets
   * edit state when form alter button is clicked
   */
  update(): void {
    this.studentsService.update(this.student);
    this.edit = false;
    this.updateData();
  }

  /**
   * Calls StudentsService to remove a student when exclude button is clicked
   * @param id Student id to be removed
   */
  remove(id?: number): void {
    id && this.studentsService.remove(id);
    this.updateTable();
  }

  /**
   * Updates the current student when edit button is clicked
   * @param id The id of the student to be edited
   */
  handleEditButtonClick(id?: number): void {
    this.edit = true;
    const indexToEdit = this.students.findIndex((student) => student.id === id);
    this.student = new Student(
      this.students[indexToEdit].id,
      this.students[indexToEdit].name,
      this.students[indexToEdit].firstGrade,
      this.students[indexToEdit].secondGrade
    );
  }

  /**
   * Calls StudentsService to get the updated list of students
   * and updated the students array
   */
  private updateTable(): void {
    this.students = this.studentsService.getAll();
  }

  /**
   * Update students array and resets the student
   * state
   */
  private updateData(): void {
    this.student = new Student();
    this.updateTable();
  }
}
