import React from 'react';


const FooterBar = () => {
  return (
    <footer className="bg-black">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          <a
            className="font-bold no-underline"
            href="https://bryant.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Lewis
          </a>
        </p>

        <p>
          <a
            className="font-bold text-white no-underline"
            href="https://github.com/zoosissoos"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  )
}

export default FooterBar;