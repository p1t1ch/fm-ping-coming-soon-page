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
    <div>
      <Seo title="Frontend Mentor: Ping single column coming soon page" />
      <header>
        <Logo title="Ping logo" />
      </header>
      <main>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
        <SubscriptionForm />
        <img src={dashboard} alt="App dashboard screenshot" />
      </main>
      <footer>
        <Socials>
          <Social Icon={FaFacebookF} name="Facebook" link="https://www.facebook.com/" />
          <Social Icon={FaTwitter} name="Twitter" link="https://www.twitter.com/" />
          <Social Icon={FaInstagram} name="Instagram" link="https://www.instagram.com/" />
        </Socials>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default IndexPage
