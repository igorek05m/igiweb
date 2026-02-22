import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`https://www.codewars.com/api/v1/users/Igiii`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
