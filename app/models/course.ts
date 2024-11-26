export class Course {
    name: string;
    building: string;
    department: string;
    number: number;
  
    constructor(name: string, building: string, department: string, number: number) {
      this.name = name;
      this.building = building;
      this.department = department;
      this.number = number;
    }
  
    getCourseCode() {
        return `${this.department} ${this.number}`;
    }
  }