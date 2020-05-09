import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FluidLogo from '../images/FluidImages/FluidLogo'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Welcome"
      />

      <section className="text-center">
        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
