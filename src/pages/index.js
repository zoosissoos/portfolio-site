import React from "react";

import Layout from "../components/sections/layout";
import SEO from "../components/sections/seo";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Technologies from "../components/sections/technologies";
import Experiences from "../components/sections/experiences";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`web developer`, `websites`, `web apps`, `responsive websites`, `react developer`, `javascript developer`, `software engineer`]}
        title="Welcome"
      />
      <Hero />
      <About />
      <Experiences />
      <Technologies />
    </Layout>
  );
}

export default IndexPage;
