import { Course } from '@/app/models/course';
import { NextResponse } from 'next/server';

const sendCourseData = async() => {
  var course1 = new Course("Intro to Psychology", "Pearson Hall", "PSYC", 101);
  var course2 = new Course("Advanced Biology", "TSC", "BIOL", 301);
  var course3 = new Course("Software Engineering", "OEC", "CSCI", 371);
  var courses = [ course1, course2, course3 ];
  console.log(JSON.stringify(courses));

  const rawResponse = await fetch('http://localhost:3000/api/receiver', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(courses)
  });
  const content = await rawResponse.json();

  return content;
}

export async function GET() {
  var content = await sendCourseData();
  console.log(content);
  return NextResponse.json(content);
}