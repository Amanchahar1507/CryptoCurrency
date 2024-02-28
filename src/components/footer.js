import React from 'react'

export const Footer = () => {
  return (
    <footer className="relative text-center text-black-400 lg:text-center md:text-center sm:text-center">
        <div className="my-4">
          <h3 className="footer-content font-semibold text-black-300">
            Made by{" "}{" "}
            <a
              // class="link"
              href="https://github.com/Amanchahar1507"
              className=" link hover:underline hover:text-red-600"
            >
              Aman Chahar{" "}
            </a>
          </h3>
        </div>
        <div className='flex absolute -mt-3 items-center'>
            <h3 className='text-[8px] text-red-600'>Data Provided By CoinGeckoAPI</h3>
        </div>
      </footer>
  )
}
