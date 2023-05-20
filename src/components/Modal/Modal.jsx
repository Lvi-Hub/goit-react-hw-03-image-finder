import React, { Component } from 'react';
import css from './Modale.module.css';

export class Modal extends Component {
  render() {
    return (
      <div class={css.Overlay}>
        <div class={css.Modal}>
          <img src="https://placehold.it/600x400" alt="" />
        </div>
      </div>
    );
  }
}
