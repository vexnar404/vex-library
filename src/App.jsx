
import {Header, Hero, ProSol, Features, Steps, Pricing, Testimonials, Visit, CTA, Footer } from './components/index'

function App() {

  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <ProSol />
        <Features />
        <Steps />
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
