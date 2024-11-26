import mysql from 'mysql2/promise';
import { CoursePayload } from '../models/course-payload';

export class JsonTableRepository {
    saveCourses = async(coursePayload:CoursePayload) => {
        console.log('host is ' + process.env.MYSQL_HOST);
        console.log('user is ' + process.env.MYSQL_USER);
        console.log('database is ' + process.env.MYSQL_DATABASE);

        const id = coursePayload.id;
        const courses_json = coursePayload.courses_json;
        const courses = JSON.stringify(courses_json);

        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
          });
        
          try {
            const [result] = await connection.execute(
              'INSERT INTO json_test (id, json_details) VALUES (?, ?)', 
              [id, courses]
            );
            console.log('Inserted json');
          } catch (err) {
            console.error('Error inserting json:', err);
          } finally {
            connection.end();
          }
    }
}