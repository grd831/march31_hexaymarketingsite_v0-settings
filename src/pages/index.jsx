import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import PhoneHero from '@/components/PhoneHero'
import DesktopHero from '@/components/DesktopHero'
import ScreenshotModule from '@/components/ScreenshotModule'
import WithTest from '@/components/WithTest'

export default function Home() {
  return (
    <>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
      </Head>
      {/* <Header /> */}
      <main>
        {/*<PhoneHero /> */}
        <DesktopHero />
        <ScreenshotModule />
        <WithTest />
        {/* <Hero /> */}
        {/* <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
