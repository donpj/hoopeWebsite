'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'

export default function RequestDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, this would send data to the API
      // For now, we'll simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Requesting demo:', formData)
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
        message: ''
      })
      
      // Show success message
      toast.success('Demo request submitted! We\'ll contact you soon to schedule.')
    } catch (error) {
      console.error('Error requesting demo:', error)
      toast.error('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 px-4 md:px-8 bg-muted/50 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Request a Demo</h2>
          <p className="mt-2 text-muted-foreground">
            See how Hoope can transform your workflow with a personalized demo.
          </p>
        </div>
        
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Work Email*
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your work email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company Name*
              </label>
              <input
                id="company"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Your Role
              </label>
              <select
                id="role"
                className="w-full p-2 border rounded-md"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>Select your role</option>
                <option value="founder">Founder/CEO</option>
                <option value="executive">Executive/Director</option>
                <option value="manager">Manager</option>
                <option value="freelancer">Freelancer</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                What are you most interested in learning about?
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="Tell us what you'd like to see in the demo"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting this form, you agree to our{' '}
              <Link href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
