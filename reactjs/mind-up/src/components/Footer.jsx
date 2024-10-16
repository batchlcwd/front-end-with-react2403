import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">MindUp</h3>
        <ul className="flex justify-center space-x-8 mb-6">
          <li>
            <a href="#home" className="hover:text-indigo-400">
              Home
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-indigo-400">
              Courses
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-indigo-400">
              FAQ
            </a>
          </li>
        </ul>
        <div className="mb-4">
          <a
            href="https://facebook.com"
            className="hover:text-indigo-400 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-indigo-400 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-indigo-400 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MindUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
