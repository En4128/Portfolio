import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { fadeInUp } from '../utils/animations'
import { Button } from '../components/Button'

type FormState = {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const validate = () => {
    const nextErrors: Partial<FormState> = {}
    if (!form.name.trim()) nextErrors.name = 'Please share your name.'
    if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) nextErrors.email = 'Use a valid email.'
    if (form.message.trim().length < 2) nextErrors.message = 'Add a bit more context.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setErrorMessage('')
    setErrors({})

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

try {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })

      const result = await response.json()

      // ✅ This expects backend to send: { success: true, message: "..." }
      if (response.ok && result.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        const msg = result.message || 'Failed to send message'
        setErrorMessage(msg)

        // Set specific field errors if provided by backend message
        if (msg.toLowerCase().includes('name')) {
          setErrors({ name: msg })
        } else if (msg.toLowerCase().includes('email')) {
          setErrors({ email: msg })
        } else if (msg.toLowerCase().includes('context') || msg.toLowerCase().includes('message')) {
          setErrors({ message: msg })
        } else {
          setErrors({ message: msg })
        }
      }
    } catch (error) {
      console.error('Network error:', error)
      setStatus('error')
      setErrorMessage('Network error. Please check if the backend server is reachable.')
      setErrors({ message: 'Network error. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <SectionHeading
          eyebrow="Let's Collaborate"
          title="Tell me about your project!"
          subtitle="Feel free to reach out and let's create something amazing together."
        />

        <motion.form
          onSubmit={handleSubmit}
          className="glass gradient-border rounded-3xl p-6 sm:p-8 space-y-6"
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: 'Name', id: 'name', type: 'text', placeholder: '' },
              { label: 'Email', id: 'email', type: 'email', placeholder: '' },
            ].map((field) => (
              <label key={field.id} className="space-y-2 text-sm">
                <span className="text-white/70">{field.label}</span>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type={field.type}
                  id={field.id}
                  value={form[field.id as keyof FormState]}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, [field.id]: event.target.value }))
                  }
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={field.placeholder}
                />
                {errors[field.id as keyof FormState] && (
                  <span className="text-xs text-rose-300">
                    {errors[field.id as keyof FormState]}
                  </span>
                )}
              </label>
            ))}
          </div>

          <label className="space-y-2 text-sm">
            <span className="text-white/70">Comment</span>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              disabled={status === 'loading'}
              rows={5}
              className="w-full rounded-3xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none transition-colors resize-none hide-scrollbar disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder=""
            />
            {errors.message && <span className="text-xs text-rose-300">{errors.message}</span>}
          </label>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Button
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </Button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-emerald-300"
            >
              ✅ Thanks! Your message is in my inbox.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-rose-300"
            >
              ❌ {errorMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
