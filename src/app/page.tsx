// pages/index.js
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ExperienceCard } from "./components/experienceCard";
import AboutCard from "./components/aboutCard";
import Navbar from "./components/navbar";

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
              I'm a versatile software engineer with a passion for both backend
              and frontend development. With a background in computer science
              and a wealth of experience in building web-based solutions, I
              thrive on solving complex problems and creating innovative digital
              experiences. Whether it's architecting scalable backend systems or
              crafting elegant frontend interfaces, I'm dedicated to delivering
              high-quality, user-centric solutions that push the boundaries of
              what's possible in the digital realm.
            </p>
            <p className="font-bold text-lg text-gray-700 pt-5 pb-5">
              Backend Development:
            </p>
            <p className="text-lg text-gray-700">
              I specialize in crafting the digital infrastructure that powers
              websites and applications, ensuring they run smoothly and
              efficiently behind the scenes. From designing databases to
              implementing server logic and APIs, I thrive on building robust,
              scalable solutions that meet the unique needs of each project.
              With expertise in languages like Python, Node.js, and Java, I'm
              adept at tackling complex backend challenges and optimizing
              performance for optimal user experiences.
            </p>
            <p className="font-bold text-lg text-gray-700 pt-5 pb-5">
              Frontend Development:
            </p>
            <p className="text-lg text-gray-700">
              As a frontend developer, I bring designs to life and create
              engaging user interfaces that captivate and delight. With a keen
              eye for detail and a passion for crafting seamless user
              experiences, I leverage HTML, CSS, and JavaScript to build
              dynamic, responsive web applications. From designing layouts to
              implementing interactive features and ensuring cross-browser
              compatibility, I take pride in creating intuitive interfaces that
              make navigating digital environments a breeze.
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
