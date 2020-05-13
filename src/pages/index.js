import React from "react";

import Layout from "../components/sections/layout";
import SEO from "../components/sections/seo";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Technologies from "../components/sections/technologies";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`web developer`, `websites`, `web apps`, `responsive websites`, `react developer`]}
        title="Welcome"
      />
      <Hero />
      <About />
      <Technologies />
    </Layout>
  );
}

export default IndexPage;
