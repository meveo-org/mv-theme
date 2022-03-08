import { LitElement, html, css } from "lit";
import "@meveo-org/mv-menu";
import "@meveo-org/mv-container";

export class MvThemeDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      
      #menu2 {
        --p-color:#ffff00;
        --on-p-color:#000044;
      }
    `;
  }

  render() {
    return html`
    <mv-container>
      <h1>Color theming demo</h1>
      <h2>Importing and using a theme</h2>
      <p>We included the theme by importing the theme css file. It then applies to all meveo component you will use :</p>
      <mv-menu>
          <mv-menu text="File">
              <mv-menu text="New File" shortcut="Ctrl+Shift+N"></mv-menu>
          </mv-menu>
          <mv-menu text="Edit">
              <mv-menu text="Undo" shortcut="Ctrl+U"  disabled=true action="alert('Undo')"></mv-menu>
          </mv-menu>
          <mv-menu text="Help">
              <mv-menu text="Welcome"></mv-menu>
          </mv-menu>
      </mv-menu>


      <h2>Overiding theme in a stylesheet</h2>
      <p>In this second menu we overrided the theme by redifining the css theme variable in an embedded stylsheet</p>
      <mv-menu id="menu2">
          <mv-menu text="File">
              <mv-menu text="New File" shortcut="Ctrl+Shift+N"></mv-menu>
          </mv-menu>
          <mv-menu text="Edit">
              <mv-menu text="Undo" shortcut="Ctrl+U"  disabled=true action="alert('Undo')"></mv-menu>
          </mv-menu>
          <mv-menu text="Help">
              <mv-menu text="Welcome"></mv-menu>
          </mv-menu>
      </mv-menu>

      <h2>Overiding theme in the tags</h2>
      <p>In this third menu we overrided the theme by setting the css theme variable directly in the tags</p>
      <mv-menu>
          <mv-menu text="File" style="--p-color:#ff0000">
              <mv-menu text="New File" shortcut="Ctrl+Shift+N"></mv-menu>
          </mv-menu>
          <mv-menu text="Edit">
              <mv-menu text="Undo" shortcut="Ctrl+U"  disabled=true action="alert('Undo')"></mv-menu>
          </mv-menu>
          <mv-menu text="Help" style="--p-color:#0000ff">
              <mv-menu text="Welcome"></mv-menu>
          </mv-menu>
      </mv-menu>
    </mv-container>
    `;
  }
}

customElements.define("mv-theme-demo", MvThemeDemo);
