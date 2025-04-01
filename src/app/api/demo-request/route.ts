// src/app/api/demo-request/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // In a real implementation, this would store data in a database
    // For now, we'll just log it and return a success response
    console.log('Demo request:', data)
    
    // Simulate a slight delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Demo request submitted successfully!' 
    })
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process demo request' },
      { status: 500 }
    )
  }
}
