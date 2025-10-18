export async function GET() {
  return Response.json({ 
    message: 'Hello from the API!',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request) {
  const body = await request.json();
  
  if (!body.message || body.message.trim() === '') {
    return Response.json(
      { error: 'Message cannot be empty' },
      { status: 400 }
    );
  }

  return Response.json({ 
    message: `You submitted: ${body.message}`,
    timestamp: new Date().toISOString()
  });
}