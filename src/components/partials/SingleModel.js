import React, { Fragment as F } from 'react';

const SingleModel = props => (
  <F>
    <h2>
      {props.model.name} {props.model.surname}
    </h2>
    <h3>Vertragsdaten</h3>
    <p>
      Vertrag seit: {props.model.contractdate}
      <br />
      <a href={props.model.contract}>Vertragsdatei</a>
    </p>
    <h3>Persönliche Daten</h3>
    <p>Geburtstag: {props.model.birthdate}</p>
    <h3>Adresse</h3>
    <p>
      {props.model.address.street} {props.model.address.number}
      <br />
      {props.model.address.postalcode} {props.model.address.city}
      <br />
      {props.model.address.country}
    </p>
    <h3>Tags</h3>
    <ul>
      {props.model.tags.map(function(tag) {
        return <li>{tag}</li>;
      })}
    </ul>
  </F>
);

export default SingleModel;
