import { Injectable } from '@angular/core';

import { Student } from '../views/students/students.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  // Array of students with some example data
  private students: Student[] = [
    new Student(1, 'João da Silva', 8.7, 9.0),
    new Student(2, 'Maria da Graça', 4.2, 8.8),
    new Student(3, 'Felix Viana', 2.1, 5.0),
  ];
  // Used to keep tracking of id's
  private idCount: number = 3;

  /**
   * Saves a student on students array and update id counter
   * @param student An student with or without id
   */
  create(student: Student): void {
    const newStudent = this.#cloneStudent(student);
    newStudent.id = ++this.idCount;
    this.students.push(newStudent);
  }

  /**
   * Returns all students
   * @returns A list of students
   */
  getAll(): Student[] {
    return [...this.students];
  }

  /**
   * Updates a student on the list if it has a valid id
   * @param student An studutend with a valid id
   */
  update(student: Student): void {
    if (student.id) {
      const index = this.#getIndex(student.id);
      // getIndex function retuns -1 if the student isn't found
      if (index !== -1) {
        this.students[index] = this.#cloneStudent(student);
      }
    }
  }

  /**
   * Removes a student from the list if the id is valid
   * @param id The student id to remove
   */
  remove(id: number): void {
    const indexToRemove = this.#getIndex(id);
    indexToRemove !== -1 && this.students.splice(indexToRemove, 1);
  }

  /**
   * Clones a student and returns the copy. This is used
   * to prevent mutabillity problems caused by reference values
   * assignment
   * @param student An Student object
   * @returns A copy of the student
   */
  #cloneStudent(student: Student): Student {
    return new Student(
      student.id,
      student.name,
      student.firstGrade,
      student.secondGrade
    );
  }

  /**
   * Returns the index of a student on students array given the student id
   * @param id The student id
   * @returns The index of the student on the students array or -1 if the student is not found
   */
  #getIndex(id: number): number {
    return this.students.findIndex((student) => student.id === id);
  }
}
