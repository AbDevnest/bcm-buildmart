'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, X, Truck } from 'lucide-react'
import { products, categories } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

/* ============================================
   PRODUCTS PAGE — premium spaced layout
   ============================================ */

const SORT_OPTIONS = [
  { value: 'default',    label: 'Sort: Default' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'rating',     label: 'Top Rated' },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [searchQuery,      setSearchQuery]       = useState('')
  const [sortBy,           setSortBy]            = useState('default')
  const [bulkOnly,         setBulkOnly]          = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategory !== 'All Products') list = list.filter(p => p.category === selectedCategory)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }
    if (bulkOnly) list = list.filter(p => p.isBulk)
    if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating')     list.sort((a, b) => b.rating - a.rating)
    return list
  }, [selectedCategory, searchQuery, sortBy, bulkOnly])

  const hasFilters = selectedCategory !== 'All Products' || searchQuery || bulkOnly
  const clearFilters = () => { setSelectedCategory('All Products'); setSearchQuery(''); setBulkOnly(false) }

  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── HERO ── */}
      <div className="relative bg-[#0d0d0d] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" aria-hidden />
        <div className="site-container py-14 md:py-18 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="label mb-3">Our Catalogue</p>
            <h1 className="title-lg text-white mb-4">
              All Construction <span className="text-gradient">Materials</span>
            </h1>
            <p className="text-body-md max-w-xl">
              200+ premium building materials — Bajri, Rodi, Cement, Steel, Tiles,
              Paints &amp; more — all with Jaipur delivery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="site-container py-12 md:py-16">

        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search cement, bajri, rodi, steel..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="field-input pl-11 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="field-input sm:w-52 cursor-pointer"
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <button
            onClick={() => setBulkOnly(v => !v)}
            className={`ui-btn ui-btn-sm gap-2 shrink-0 px-5 ${
              bulkOnly
                ? 'bg-orange-500/15 border border-orange-500/40 text-orange-400'
                : 'ui-btn-secondary'
            }`}
          >
            <Truck size={14} /> Bulk / Truck
          </button>
        </div>

        {/* Sidebar + grid */}
        <div className="flex gap-8 lg:gap-10">

          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28">
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-5">
                Categories
              </p>
              <nav className="space-y-1.5">
                {categories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm transition-all ${
                      selectedCategory === cat.name
                        ? 'bg-orange-500/15 text-orange-400 border border-orange-500/25'
                        : 'text-neutral-400 hover:text-white hover:bg-white/4'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <span>{cat.icon}</span>
                      <span className="truncate">{cat.name}</span>
                    </span>
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-full shrink-0 ml-2 ${
                      selectedCategory === cat.name
                        ? 'bg-orange-500/25 text-orange-300'
                        : 'bg-white/5 text-neutral-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main area */}
          <div className="flex-1 min-w-0 pb-8">

            {/* Mobile category pills */}
            <div className="lg:hidden -mx-4 px-4 mb-7 overflow-x-auto">
              <div className="flex gap-2.5 pb-1 w-max">
                {categories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                      selectedCategory === cat.name
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white/4 text-neutral-400 border-white/8 hover:border-white/16'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results meta */}
            <div className="flex items-center justify-between mb-7">
              <p className="text-neutral-400 text-sm">
                Showing{' '}
                <span className="text-white font-semibold">{filtered.length}</span>{' '}
                product{filtered.length !== 1 ? 's' : ''}
                {selectedCategory !== 'All Products' && (
                  <> in <span className="text-orange-400">{selectedCategory}</span></>
                )}
              </p>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-orange-400 hover:text-orange-300 text-xs flex items-center gap-1.5 transition-colors"
                >
                  <X size={11} /> Clear filters
                </button>
              )}
            </div>

            {/* Empty state */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-28 text-center">
                <div className="text-6xl mb-5">🔍</div>
                <h3 className="text-white font-bold text-xl mb-3">No products found</h3>
                <p className="text-neutral-400 text-sm mb-6">Try adjusting your search or filters</p>
                <button onClick={clearFilters} className="ui-btn ui-btn-primary ui-btn-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
