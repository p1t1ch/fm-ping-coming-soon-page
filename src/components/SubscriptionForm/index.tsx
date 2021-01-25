import React from 'react'

function SubscriptionForm({ className = '', ...props }: React.HTMLProps<HTMLFormElement>) {
  return (
    <form className={`grid sm:grid-cols-form gap-3 sm:gap-4 ${className}`} {...props}>
      <div className="relative">
        <label htmlFor="email" className="sr-only">
          Your email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email address..."
          className="w-full h-10 sm:h-14 px-8 rounded-full border border-secondary focus:border-primary placeholder-secondary-placeholder text-xs sm:text-base transition-colors"
        />
        <p
          role="alert"
          className="text-error text-extrasmall sm:text-xs italic sm:absolute sm:left-8 sm:-bottom-8 mb-2"
        >
          Whoops! It looks like you forgot to add your email
          {/* Please provide a valid email address */}
        </p>
      </div>
      <button
        type="submit"
        className="h-10 sm:h-14 text-center bg-primary text-white hover:bg-opacity-80 focus-visible:bg-opacity-80 rounded-full shadow text-xs sm:text-base font-semibold transition-colors"
      >
        Notify Me
      </button>
    </form>
  )
}

export default SubscriptionForm
