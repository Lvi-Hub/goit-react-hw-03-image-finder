import React, { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={css.Button}
          type="button"
          onClick={this.props.onBtnLoadmore}
        >
          Load more
        </button>
      </div>
    );
  }
}
