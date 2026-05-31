import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/data'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = products.slice(0, 6)

  return (
    <section className="site-section bg-[#080808] pb-24 lg:pb-28">
      <div className="site-container">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="label mb-3">Top Products</p>
            <h2 className="title-lg text-white">
              Featured <span className="text-gradient">Materials</span>
            </h2>
            <p className="text-body-md mt-3 max-w-lg">
              Best-selling construction materials trusted by Jaipur&apos;s top contractors.
            </p>
          </div>
          <Link href="/products"
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors group shrink-0">
            View All Products
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/products" className="ui-btn ui-btn-primary ui-btn-lg">
            Browse All 200+ Products
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  )
}
