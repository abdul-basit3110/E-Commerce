import React from 'react'
import profile1 from '../src/assets/profile_img_1.png'
import profile2 from '../src/assets/profile_img_2.png'
import profile3 from '../src/assets/profile_img_3.png'
import star_icon from '../src/assets/star_icon.svg'

const testimonialsData = [
  {
    pics: profile1,
    name: "John Doe",
    title: "Home Owner",
    rating: 5,
    text: "This company helped me find my dream home. The process was smooth and stress-free."
  },
  {
    pics: profile2,
    name: "Sarah Smith",
    title: "Investor",
    rating: 4,
    text: "Professional team and excellent service. I highly recommend them to anyone looking for property."
  },
  {
    pics: profile3,
    name: "Michael Brown",
    title: "Tenant",
    rating: 5,
    text: "Very helpful staff, guided me at every step. I couldn’t be happier with my experience."
  }
]

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-20 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Real stories from those who found Home with us
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] border shadow-lg px-8 py-12 rounded text-center'>
            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.pics} alt={testimonial.name} />
            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            
            {/* Rating */}
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
              ))}
            </div>

            <p className='text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
