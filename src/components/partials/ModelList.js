import React from 'react';
import SingleModel from './SingleModel';

const ModelList = props => (
  <article>
    {props.models.map(function(model) {
      return <SingleModel model={model} />;
    })}
  </article>
);

export default ModelList;
