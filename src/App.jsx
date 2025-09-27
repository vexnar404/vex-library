
import {Header, Hero, ProSol, Features, Steps, Pricing, Testimonials, Visit, CTA, Footer } from './components/index'

function App() {

  return (
    <>
      <Header />
      <main className='w-full h-full bg-[#f8f2dd] font-crimson text-[#4e4e4e]'>
        <Hero />
        <ProSol />
        <Features />
        {/* <Steps /> */}
        <Pricing />
        <Testimonials />
        <Visit />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
