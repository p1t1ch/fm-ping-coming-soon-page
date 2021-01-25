import React from 'react'

function SubscriptionForm({ className = '', ...props }: React.HTMLProps<HTMLFormElement>) {
  return (
    <form className={`${className}`} {...props}>
      <label htmlFor="email" className="sr-only">
        Your email address
      </label>
      <input type="email" id="email" />
      <button type="submit">Notify me</button>
      <p role="alert" className="text-error">
        Whoops! It looks like you forgot to add your email
        {/* Please provide a valid email address */}
      </p>
    </form>
  )
}

export default SubscriptionForm
