import Link from 'next/link';
import React from 'react'

const Ecommerce = () => {
  return (
    <div className="flex justify-between px-5 items-center py-7 border">
      <h3 className="min-h-full text-center text-4xl text-blue-500 cursor-pointer hover:scale-110 uppercase">E-commerce</h3>
      <div className="hover:text-blue-500 font-bold text-3xl cursor-pointer">
        <Link href="https://www.google.com">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  )
}

export default Ecommerce;