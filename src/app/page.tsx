
import Image from "next/image";
import { Footer } from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { MapPin, Users, Wifi } from 'lucide-react'
import Link from 'next/link'

export default function Home() {

  return (
    <>
    <Navbar></Navbar>
    <div>    
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-16 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Discover what&apos;s <span className="text-orange-500">happening</span> near you
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Connect with your community through local events. Find concerts, temples, festivals, and more happening around you.
          </p>
          <div className="flex gap-4">
            <Link href="/explore" className="bg-orange-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-orange-700 transition">
              Explore
            </Link>
            <button className="border border-gray-400 text-gray-300 px-5 py-3 rounded-full hover:border-white">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/images/map-preview.png"
            alt="Map preview"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-neutral-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Close?</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
              <MapPin className="w-8 h-8 text-orange-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Find Events</h3>
              <p className="text-sm text-gray-400">Search and discover local events based on your interests.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
              <Users className="w-8 h-8 text-orange-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Connect with People</h3>
              <p className="text-sm text-gray-400">Meet others from your area who share your passions.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
              <Wifi className="w-8 h-8 text-orange-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Real-time Updates</h3>
              <p className="text-sm text-gray-400">Stay updated with live information on events and changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEE WHAT'S HAPPENING */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">See What&apos;s Happening</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Placeholder cards */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-neutral-800 w-72 h-40 rounded-lg flex items-center justify-center text-gray-400">
              Sign up to see events
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/signup">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition">
              Join Now
            </button>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-amber-700 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Ready to get started?</h2>
        <p className="text-white mb-6">Join thousands of people discovering amazing events in their community.</p>
        <Link href="/signup">
          <button className="bg-white cursor-pointer text-amber-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Sign Up
          </button>
        </Link>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}