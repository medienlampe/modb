import React, { Component, Fragment as F } from 'react';
import Menu from '../partials/Menu';
import Content from '../partials/Content';
import ModelList from '../partials/ModelList';
import axios from 'axios';

export class Models extends Component {
  state = {
    models: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:8000/models')
      .then(response => {
        // create an array of contacts only with relevant data
        const newModels = response.data.map(model => {
          return {
            id: model.id,
            name: model.name,
            surname: model.surname,
            address: model.address,
            birthdate: model.birthdate,
            contractdate: model.contractdate,
            contract: model.contract,
            tags: model.tags
          };
        });

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          models: newModels
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    const title = 'ModelDB: Modelle';

    return (
      <F>
        <Menu active="models" />
        <Content title={title}>
          <ModelList models={this.state.models} />
        </Content>
      </F>
    );
  }
}
