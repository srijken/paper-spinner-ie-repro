import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-button/paper-button.js';
/**
 * @customElement
 * @polymer
 */
class PaperSpinnerIeReproApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-button on-tap="__btnClick">click me</paper-button>
      <paper-spinner active="[[__active]]"></paper-spinner>
    `;
  }
  static get properties() {
  }

  __btnClick() {
    this.__active = true;
    window.setTimeout(() => {
      this.__active = false;
    }, 5);
  }
}

window.customElements.define('paper-spinner-ie-repro-app', PaperSpinnerIeReproApp);
