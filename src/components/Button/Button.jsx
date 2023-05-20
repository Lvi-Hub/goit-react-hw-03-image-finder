import React, { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <div>
        <button className={css.Button} type="button"></button>
      </div>
    );
  }
}
