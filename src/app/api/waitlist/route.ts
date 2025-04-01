// src/app/api/waitlist/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // In a real implementation, this would store data in a database
    // For now, we'll just log it and return a success response
    console.log('Waitlist signup:', data)
    
    // Simulate a slight delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    })
  } catch (error) {
    console.error('Error processing waitlist signup:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process waitlist signup' },
      { status: 500 }
    )
  }
}
