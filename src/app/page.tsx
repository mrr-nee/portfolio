// pages/index.js
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ExperienceCard } from "./components/experienceCard";
import AboutCard from "./components/aboutCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold animate-bounce">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <div className="rounded-full overflow-hidden h-8 w-8 ">
                <Image
                  src="/nee.jpg"
                  width={100}
                  height={100}
                  alt="profile-pic"
                />
              </div>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
          </section>

          <section className="mb-12">
            <AboutCard />

            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pt-3">
              Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample project cards */}
              <ExperienceCard
                imgUrl="/AM-Mobile.jpg"
                experienceTitle="AM,Mobile Application Development"
              />
              <ExperienceCard
                imgUrl="/Flutter.jpg"
                experienceTitle="Flutter Team Lead"
              />
              <ExperienceCard
                imgUrl="/SeniorFlutter.jpg"
                experienceTitle="Senior Flutter Developer"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Contact Me
            </h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  // rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
