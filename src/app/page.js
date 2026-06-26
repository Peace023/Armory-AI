import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Integrations from '@/components/Integrations'
import Features from '@/components/Features'
import Stats from '@/components/stats'
import CaseStudies from '@/components/CaseStudies'
import ProductFeatures from '@/components/ProductFeatures'
import Performance from '@/components/Performance'
import BuiltForLongTerm from '@/components/BuiltForLongTerm'
import EngineeredForAutonomy from '@/components/EngineeredForAutonomy'
import IntegrationLogos from '@/components/IntegrationLogos'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Articles from '@/components/Articles'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Integrations />
      <Features />
      <Stats />
      <CaseStudies />
      <ProductFeatures />
      <Performance />
      <BuiltForLongTerm />
      <EngineeredForAutonomy />
      <IntegrationLogos />
      <Testimonials />
      <Pricing />
      <Articles />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}