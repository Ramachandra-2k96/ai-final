import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri as string);

// POST request handler
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Connect to MongoDB
    await client.connect();
    const database = client.db('ai-workshop');
    const collection = database.collection('participants');

    // Check if the workshop is full
    const participantCount = await collection.countDocuments();
    if (participantCount >= 70) {
      return NextResponse.json({ error: 'Workshop is full' }, { status: 400 });
    }

    // Check if the user already exists based on email or USN
    const existingUser = await collection.findOne({
      $or: [{ email: body.phone }, { usn: body.usn }],
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User already registered' }, { status: 400 });
    }

    // Insert the new participant
    await collection.insertOne(body);

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close(); // Ensure the client is closed after the operation
  }
}
