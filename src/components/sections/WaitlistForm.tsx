'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    companyName: '',
    companySize: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent, type: 'individual' | 'business') => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, this would send data to the API
      // For now, we'll simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Submitting to waitlist:', { ...formData, type })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        companyName: '',
        companySize: ''
      })
      
      // Show success message
      toast.success('Successfully joined the waitlist! We\'ll be in touch soon.')
    } catch (error) {
      console.error('Error submitting to waitlist:', error)
      toast.error('There was an error joining the waitlist. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 px-4 md:px-8 bg-muted/50 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Join Hoope</h2>
          <p className="mt-2 text-muted-foreground">
            We're building Hoope together with people like you, because we are people like you.
          </p>
        </div>
        
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
          
          <TabsContent value="individual">
            <Card>
              <CardHeader>
                <CardTitle>Join as an Individual</CardTitle>
                <CardDescription>
                  For freelancers, contractors, and independent professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, 'individual')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
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
                        Last Name
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
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="profession" className="text-sm font-medium">
                      What do you do?
                    </label>
                    <select
                      id="profession"
                      className="w-full p-2 border rounded-md"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your profession</option>
                      <option value="designer">Designer</option>
                      <option value="developer">Developer</option>
                      <option value="writer">Writer/Content Creator</option>
                      <option value="consultant">Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>Join as a Business</CardTitle>
                <CardDescription>
                  For companies working with freelancers and contractors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, 'business')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
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
                        Last Name
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
                    <label htmlFor="companyName" className="text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Work Email
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
                    <label htmlFor="companySize" className="text-sm font-medium">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      className="w-full p-2 border rounded-md"
                      value={formData.companySize}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
