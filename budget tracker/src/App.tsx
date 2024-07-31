import React, { useState } from 'react';
import './styles.css';
import BudgetTrackerNew from './components/BudgetTrackerNew';

const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerMenu && mobileMenu) {
  hamburgerMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
}

const App: React.FC = () => {
  return (
    
    <div className="App">
      <header>
      <nav className="navbar relative">
    <div className="logo">
        <a href="index.html"><img src="logo CapiFy.com\logo\dark theme\CapiFy-logo.png" alt="CapiFy Logo"></img></a>
    </div>
    <button id="hamburger-menu" className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-gray-700 hover:text-gray-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </button>
    <ul className="nav-links hidden lg:flex space-x-4">
        <li><a href="/market/index.html">Markets</a></li>
        <li><a href="https://budget-tracker-k8yo.vercel.app/">Budget Tracker</a></li>
        <li><a href="https://balance-tracker-ashy.vercel.app/">Balance Tracker</a></li>
        <li><a href="https://news-section-xi.vercel.app/">News</a></li>
        <li><a href="/blog section/index.html ">Blogs</a></li>
        <li><a href="/resources section/index.html">Resources</a></li>
        <li><a href="https://financial-health-quiz.vercel.app/">Financial health quiz</a></li>
        <li><a href="#about-us-capify">About Us</a></li>
    </ul>
    <div className="nav-actions hidden lg:flex space-x-4 items-center">
        <button className="sign-in">Sign In</button>
        <button className="subscribe">Subscribe</button>
        <div className="search-container flex items-center">
            <input type="text" placeholder="Search..." className="p-2 rounded border border-gray-300">
            <button className="search-btn p-2 rounded bg-gray-700 text-white hover:bg-gray-600">
                &#128269;
            </button>
            </input>
        </div>
    </div>
    <ul id="mobile-menu" className="absolute top-16 left-0 w-full bg-gray-800 text-white hidden flex-col space-y-2 lg:hidden">
        <li><a href="/market/index.html" className="block px-4 py-2 hover:bg-gray-700">Markets</a></li>
        <li><a href="https://budget-tracker-k8yo.vercel.app/" className="block px-4 py-2 hover:bg-gray-700">Budget Tracker</a></li>
        <li><a href="https://balance-tracker-ashy.vercel.app/" className="block px-4 py-2 hover:bg-gray-700">Balance Tracker</a></li>
        <li><a href="https://news-section-xi.vercel.app/" className="block px-4 py-2 hover:bg-gray-700">News</a></li>
        <li><a href="/blog section/index.html " className="block px-4 py-2 hover:bg-gray-700">Blogs</a></li>
        <li><a href="/resources section/index.html" className="block px-4 py-2 hover:bg-gray-700">Resources</a></li>
        <li><a href="https://financial-health-quiz.vercel.app/" className="block px-4 py-2 hover:bg-gray-700">Financial health quiz</a></li>
        <li><a href="#about-us-capify" className="block px-4 py-2 hover:bg-gray-700">About Us</a></li>
    </ul>
</nav>
      </header>
      <main>
        <BudgetTrackerNew />
      </main>
    </div>
  );
};

export default App;
