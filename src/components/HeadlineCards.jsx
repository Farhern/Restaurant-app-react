import React from 'react'

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
         {/* overlay */} 
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Bogo's Out</p>
            <p className="px-2">Through 8/26</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
          </div>
          <img
           className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
           src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
               alt="/" 
            />
      </div>
            {/* card */}
            <div className="rounded-xl relative">
         {/* overlay */} 
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
          </div>
          <img
           className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
           src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
               alt="/" 
            />
      </div>
            {/* card */}
            <div className="rounded-xl relative">
         {/* overlay */} 
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
            <p className="px-2">Tasty Treats</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
          </div>
          <img
           className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
           src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
               alt="/" 
            />
      </div>
    </div>
  )
}

export default HeadlineCards
