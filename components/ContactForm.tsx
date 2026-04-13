'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '@/components/LanguageProvider'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { messages } = useLanguage()
  const t = messages.contactForm

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = t.validation.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.validation.emailInvalid
    }

    if (!formData.message.trim()) {
      newErrors.message = t.validation.messageRequired
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.validation.messageShort
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(t.validation.configError)
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey,
        }
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : t.validation.fallbackError
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-up">
        <h3 className="text-2xl font-bold text-green-800 mb-2">{t.successTitle}</h3>
        <p className="text-green-700">
          {t.successBody}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-dark-gray font-semibold mb-2">
          {t.fullName}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t.namePlaceholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
            errors.name
              ? 'border-red-500 focus:border-red-600'
              : 'border-light-gray focus:border-primary-blue'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-dark-gray font-semibold mb-2">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t.emailPlaceholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
            errors.email
              ? 'border-red-500 focus:border-red-600'
              : 'border-light-gray focus:border-primary-blue'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-dark-gray font-semibold mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t.messagePlaceholder}
          rows={6}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none resize-none ${
            errors.message
              ? 'border-red-500 focus:border-red-600'
              : 'border-light-gray focus:border-primary-blue'
          }`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isLoading ? t.sending : t.send}
      </button>
    </form>
  )
}
