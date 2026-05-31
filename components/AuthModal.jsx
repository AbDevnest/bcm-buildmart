'use client'
import { useState } from 'react'
import { X, Eye, EyeOff, Phone, Mail, User, Lock } from 'lucide-react'
import { COMPANY } from '@/lib/data'

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only — redirect to WhatsApp with the details
    const msg = mode === 'login'
      ? `Hello BCM BuildMart! I want to login. Phone: ${form.phone}`
      : `Hello BCM BuildMart! I want to register. Name: ${form.name}, Phone: ${form.phone}, Email: ${form.email}`
    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-sm">B</div>
              <span className="text-white font-black">BCM <span className="text-orange-500">BuildMart</span></span>
            </div>
            <p className="text-neutral-500 text-xs">{mode === 'login' ? 'Welcome back!' : 'Create your account'}</p>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-500 hover:text-white rounded-lg hover:bg-white/6 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/8">
          {['login', 'signup'].map(m => (
            <button
              key={m}
              onClick={() => { setMode(m); setSubmitted(false) }}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                mode === m
                  ? 'text-orange-400 border-b-2 border-orange-500 bg-orange-500/5'
                  : 'text-neutral-500 hover:text-white'
              }`}
            >
              {m === 'login' ? 'Log In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-white font-bold text-lg mb-2">WhatsApp pe bhej diya!</h3>
            <p className="text-neutral-400 text-sm mb-6">
              Humari team aapko jald hi verify karegi. Account ke liye WhatsApp pe confirm karein.
            </p>
            <button onClick={onClose} className="ui-btn ui-btn-primary w-full justify-center">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="text-neutral-400 text-xs font-semibold mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    name="name" type="text" required
                    placeholder="Vijendra Kumawat"
                    value={form.name}
                    onChange={handleChange}
                    className="field-input pl-10"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-neutral-400 text-xs font-semibold mb-1.5 block">Phone Number</label>
              <div className="relative">
                <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  name="phone" type="tel" required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className="field-input pl-10"
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="text-neutral-400 text-xs font-semibold mb-1.5 block">Email (optional)</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    name="email" type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="field-input pl-10"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-neutral-400 text-xs font-semibold mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  name="password" type={showPass ? 'text' : 'password'} required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="field-input pl-10 pr-10"
                />
                <button type="button" onClick={() => setShowPass(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors">
                  {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <button type="submit" className="ui-btn ui-btn-primary w-full justify-center mt-2">
              {mode === 'login' ? 'Log In' : 'Create Account'}
            </button>

            <div className="relative flex items-center gap-3 py-1">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-neutral-600 text-xs">ya</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            <a
              href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20want%20to%20${mode === 'login' ? 'login' : 'register'}%20my%20account.`}
              target="_blank" rel="noopener noreferrer"
              className="ui-btn ui-btn-whatsapp w-full justify-center"
            >
              💬 WhatsApp se verify karo
            </a>

            <p className="text-neutral-600 text-[11px] text-center">
              {mode === 'login'
                ? "Account nahi hai? "
                : "Pehle se account hai? "}
              <button type="button" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-orange-400 hover:text-orange-300 font-semibold">
                {mode === 'login' ? 'Sign Up karo' : 'Log In karo'}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
