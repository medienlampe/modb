import React from 'react';

const Content = props => (
  <section id="content" className="columns medium-10">
    <h1>{props.title || "Title hasn't been set!"}</h1>
    {props.children}
  </section>
);

export default Content;
