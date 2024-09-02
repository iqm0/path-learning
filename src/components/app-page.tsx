'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'

export function AppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              &lt;PATH/&gt;
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/topics" className="hover:text-blue-400 transition-colors">TOPICS</Link></li>
                <li><Link href="/scheduler" className="hover:text-blue-400 transition-colors">SCHEDULER</Link></li>
                <li><Link href="/premium" className="hover:text-blue-400 transition-colors">PREMIUM</Link></li>
                <li><Link href="/account" className="hover:text-blue-400 transition-colors">ACCOUNT</Link></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                IQ
              </div>
              <span>Hi, Igor!</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Curated playlists for learning to code on YouTube and Twitch
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                We offer an easy way to find content and live streams based on what and when you want to learn. Whether you're new or a veteran, there's something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                  Sign Up
                </button>
                <button className="bg-transparent hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full border border-white transition-colors">
                  Find More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Coding on laptop"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">FROM ZERO TO HELLO WORLD</h2>
            <p className="text-xl mb-8 text-gray-300">
              Start here if you have never coded before and want some great places to begin your journey!
            </p>
            <div className="relative">
              <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex-none w-80">
                    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                      <Image
                        src="/placeholder.svg?height=180&width=320"
                        alt={`Video thumbnail ${index}`}
                        width={320}
                        height={180}
                        className="w-full"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {index === 1 ? 'Introduction to Programming' : 
                           index === 2 ? 'Where to Start Learning How To (...)' :
                           index === 3 ? 'Python Tutorial for Beginners - L (...)' :
                           'Introduction to Programming'}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {index === 1 ? 'FreeCodeCamp' : 
                           index === 2 ? 'Bukola' :
                           index === 3 ? 'Programming with Mosh' :
                           'FreeCodeCamp'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}