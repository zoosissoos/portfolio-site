import PropTypes from "prop-types";
import React from "react";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import FooterBar from './footerBar';


function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <ParallaxProvider>

        <main className="flex-1 w-full">
          {children}
        </main>

        <FooterBar />
      </ParallaxProvider>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
