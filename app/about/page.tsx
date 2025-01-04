import Image from 'next/image'
import { Award, Users, Zap, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-400">About LuxeCart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary-300">Our Story</h2>
          <p className="text-text-secondary mb-4">
            LuxeCart was founded in 2020 with a simple mission: to provide customers with a curated selection of premium products and an unparalleled shopping experience. We believe that luxury should be accessible to everyone, and we strive to offer the best products at competitive prices.
          </p>
          <p className="text-text-secondary">
            Our team of experts carefully selects each item in our inventory, ensuring that it meets our high standards for quality, design, and functionality. From cutting-edge electronics to timeless fashion pieces, we offer a diverse range of products to suit every taste and need.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-96">
          <Image 
            src="/images/office.jpg?height=400&width=600" 
            alt="LuxeCart Office" 
            fill 
            style={{ objectFit: 'cover' }}
            className="rounded-lg shadow-md" 
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-300">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Quality", description: "We never compromise on the quality of our products." },
            { icon: Users, title: "Customer Satisfaction", description: "Your happiness is our top priority." },
            { icon: Zap, title: "Innovation", description: "We are always looking for new ways to improve your shopping experience." },
            { icon: Heart, title: "Passion", description: "We are passionate about bringing luxury to your everyday life." }
          ].map((value, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg shadow-md text-center">
              <value.icon className="w-12 h-12 mx-auto mb-4 text-accent-400" />
              <h3 className="text-xl font-semibold mb-2 text-primary-300">{value.title}</h3>
              <p className="text-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-300">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-600"></div>
          {[
            { year: "2020", title: "LuxeCart Founded", description: "We started our journey with a vision to redefine luxury e-commerce." },
            { year: "2021", title: "Expanded Product Range", description: "We introduced new categories and partnered with top luxury brands." },
            { year: "2022", title: "Launched Mobile App", description: "We made luxury shopping even more accessible with our mobile app." },
            { year: "2023", title: "Going Global", description: "We expanded our operations to serve customers worldwide." }
          ].map((milestone, index) => (
            <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:w-1/2 md:pl-8' : 'md:w-1/2 md:pr-8'}`}>
              <div className="bg-surface p-6 rounded-lg shadow-md">
                <div className="absolute top-6 -left-3 md:-left-6 w-6 h-6 bg-accent-400 rounded-full border-4 border-background"></div>
                <h3 className="text-xl font-semibold mb-2 text-primary-300">{milestone.year}</h3>
                <h4 className="text-lg font-semibold mb-2 text-accent-400">{milestone.title}</h4>
                <p className="text-text-secondary">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-300">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { name: "Waheed Aree", role: "CEO", image: "/images/team/image.png" },
            { name: "John Smith", role: "CTO", image: "/images/team/image1.png" },
            { name: "Emily Brown", role: "Head of Design", image: "/images/team/image2.png" },
            { name: "Michael Johnson", role: "Customer Service Manager", image: "/images/team/image3.png" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} className="rounded-full" />
              </div>
              <h3 className="font-semibold text-primary-300">{member.name}</h3>
              <p className="text-text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Stories Section */}
      <div className="my-16 bg-gray-900 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-primary-300">Customer Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Sarah L.", story: "LuxeCart attention to detail and quality is unmatched. I am a customer for life!", image: "/images/testimonials/image1.png" },
            { name: "James M.", story: "The VIP treatment I receive from LuxeCart makes me feel valued every time I shop.", image: "/images/testimonials/image2.png" },
            { name: "Emma K.", story: "LuxeCart has transformed my shopping experience. Their curated collections are always on point!", image: "/images/testimonials/image.png" }
          ].map((customer, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image src={customer.image} alt={customer.name} fill style={{ objectFit: 'cover' }} className="rounded-full" />
                </div>
                <h3 className="font-semibold text-primary-300">{customer.name}</h3>
              </div>
              <p className="text-text-secondary italic flex-grow">{customer.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

