import { JsonTableRepository } from '@/app/repositories/json-table-repository';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'Receiver!' });
}

export async function POST(request: Request) {
    const coursesJson = await request.json()
    console.log('request json is:')
    console.log(coursesJson);

    //logic to save to MySQL here
    const repo = new JsonTableRepository();
    const saveResult = await repo.saveCourses(coursesJson);
    console.log(saveResult);

    return Response.json({ saveResult })
}