import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Seo from '@/components/Seo'
import Socials from '@/components/Socials'
import Social from '@/components/Social'
import SubscriptionForm from '@/components/SubscriptionForm'
import { ReactComponent as Logo } from '@/icons/logo.svg'
import dashboard from '@/images/dashboard.png'

function IndexPage() {
  return (
    <div className="min-h-screen px-10 pt-20 pb-9 sm:pb-12 grid place-items-center">
      <Seo title="Frontend Mentor: Ping single column coming soon page" />
      <div className="max-w-40 text-center grid place-items-center">
        <header className="mb-8 sm:mb-10">
          <Logo title="Ping logo" className="w-14 sm:w-logo" />
        </header>
        <main className="mb-30 sm:mb-18">
          <h1 className="text-heading-mobile sm:text-5xl text-neutral-gray mb-3 sm:mb-4">
            We are launching <span className="font-bold text-neutral">soon!</span>
          </h1>
          <p className="text-xs sm:text-xl mb-8 sm:mb-10">Subscribe and get notified</p>
          <SubscriptionForm className="mb-18 sm:mb-20" />
          <img src={dashboard} alt="App dashboard screenshot" className="max-w-none w-image sm:w-full -mx-3 sm:mx-0" />
        </main>
        <footer>
          <Socials className="mb-7">
            <Social Icon={FaFacebookF} name="Facebook" link="https://www.facebook.com/" />
            <Social Icon={FaTwitter} name="Twitter" link="https://www.twitter.com/" />
            <Social Icon={FaInstagram} name="Instagram" link="https://www.instagram.com/" />
          </Socials>
          <p className="text-extrasmall sm:text-xs text-neutral-gray">&copy; Copyright Ping. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default IndexPage
