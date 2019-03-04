import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Container2 from './draggable/items';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Container2 />
      </div>
    );
  }
}
