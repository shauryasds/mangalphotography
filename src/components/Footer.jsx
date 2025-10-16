import React from 'react';

export default function Footer() {
  return (
    <footer className="festive-regular bg-gray-100 shadow-inner mt-16 font-bold">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-gray-700 text-sm">
        
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Mangal Photography. All rights reserved.
        </p>

        <p className="text-center sm:text-right mt-2 sm:mt-0">
          Designed & Developed by{' '}
          <a
            href="https://nimankit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline font-semibold"
          >
            Niman Kit
          </a>
        </p>
      </div>
    </footer>
  );
}
