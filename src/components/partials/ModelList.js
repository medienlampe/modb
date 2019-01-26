import React from "react";
import SingleModel from "./SingleModel";

const ModelList = props => (
  <article>
    {props.models.map(model => {
      return <SingleModel key={model.id} model={model} />;
    })}
  </article>
);

export default ModelList;
