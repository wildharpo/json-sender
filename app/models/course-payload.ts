import { Course } from "./course";

export class CoursePayload {
    id: number;
    courses_json: Course[];

    constructor(id:number, courses_json: Course[]){
        this.id = id;
        this.courses_json = courses_json;
    }
}