'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, UserCircle, LogOut } from 'lucide-react'
import { COMPANY } from '@/lib/data'
import AuthModal from './AuthModal'

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Contact' },
]

function shortName(name) {
  const parts = name.trim().split(' ')
  const short  = parts.slice(0, 2).join(' ')
  return short.length > 14 ? short.slice(0, 13) + '…' : short
}

const WAIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [user,     setUser]     = useState(null) // { name: string } — apne auth context se replace karo
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLogout = () => setUser(null) // apne actual logout se replace karo

  // ── Reusable buttons ─────────────────────────────────────

  const LoginBtn = ({ full = false }) =>
    user ? (
      <div className={`flex items-center gap-1.5 ${full ? 'w-full justify-between' : ''}`}>
        <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-1.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-[10px] shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <span className="text-orange-300 text-xs font-semibold leading-none">{shortName(user.name)}</span>
        </div>
        <button
          onClick={handleLogout}
          className="p-1.5 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
          title="Logout"
        >
          <LogOut size={13} />
        </button>
      </div>
    ) : (
      <button
        onClick={() => { setMenuOpen(false); setAuthOpen(true) }}
        className={`flex items-center justify-center gap-1.5 border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white px-3 py-2 rounded-xl text-xs font-semibold transition-all ${full ? 'w-full' : ''}`}
      >
        <UserCircle size={13} />
        Login
      </button>
    )

  const WABtn = ({ full = false }) => (
    <a
      href={`https://wa.me/${COMPANY.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-3 py-2 rounded-xl text-xs font-semibold transition-all shadow-md shadow-green-700/20 ${full ? 'w-full' : ''}`}
    >
      <WAIcon />
      WhatsApp
    </a>
  )

  const CallBtn = ({ full = false }) => (
    <a
      href={`tel:${COMPANY.phone}`}
      className={`flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-3 py-2 rounded-xl text-xs font-semibold transition-all shadow-md shadow-orange-500/20 ${full ? 'w-full' : ''}`}
    >
      <Phone size={12} />
      Call
    </a>
  )

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/50'
          : 'bg-black/80 backdrop-blur-lg border-b border-white/5'
      }`}>
        <div className="site-container">
          <div className="flex items-center justify-between h-16 sm:h-[68px] gap-3 md:gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:shadow-orange-500/50 transition-all">
                <span className="text-white font-black text-base leading-none">B</span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-400 rounded-full border-2 border-black animate-pulse" />
              </div>
              <div>
                <p className="text-white font-black text-sm leading-none tracking-tight">
                  BCM <span className="text-orange-500">BuildMart</span>
                </p>
                <p className="text-neutral-500 text-[10px] mt-0.5 font-medium">{COMPANY.city}</p>
              </div>
            </Link>

            {/* ── Nav links md+ ── */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    pathname === href
                      ? 'text-orange-400 bg-orange-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-white/6'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* ── Actions md+ ── */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <LoginBtn />
              <WABtn />
              <CallBtn />
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/6 transition-all"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile drawer ── */}
      <div className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-neutral-950 border-l border-white/8 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 shrink-0">
          <div>
            <p className="text-white font-black text-sm">BCM <span className="text-orange-500">BuildMart</span></p>
            <p className="text-neutral-500 text-[10px] mt-0.5">{COMPANY.city}</p>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/6 transition-all">
            <X size={18} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                pathname === href
                  ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Drawer bottom */}
        <div className="px-3 pb-8 pt-4 space-y-2.5 border-t border-white/8 shrink-0">
          <LoginBtn full />
          <WABtn full />
          <CallBtn full />
        </div>

      </div>

      {/* Auth modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={(name) => { setUser({ name }); setAuthOpen(false) }}
      />
    </>
  )
}