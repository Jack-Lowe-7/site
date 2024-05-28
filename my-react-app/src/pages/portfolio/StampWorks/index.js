import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";

export const StampWorks = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>StampWorks | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
      </section>
    </HelmetProvider>
  );
};
