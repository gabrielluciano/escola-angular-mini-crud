export class Student {
  id?: number;
  name?: string;
  firstGrade?: number;
  secondGrade?: number;

  constructor(
    id?: number,
    name?: string,
    firstGrade?: number,
    secondGrade?: number
  ) {
    this.id = id;
    this.name = name;
    this.firstGrade = firstGrade;
    this.secondGrade = secondGrade;
  }

  /**
   * Calculate the student average grade
   * @returns the student average grade, or 0 if one of the grades is missing
   */
  getAverage(): number {
    if (this.firstGrade && this.secondGrade) {
      return (this.firstGrade + this.secondGrade) / 2;
    }
    return 0;
  }

  /**
   * Calculate student average and return it's status
   * @returns false if student average is below 6.0, true otherwise
   */
  isAproved(): boolean {
    return this.getAverage() >= 6.0;
  }
}
