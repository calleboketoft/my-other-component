import { Component, Prop } from '@stencil/core';
import { LimeWebComponentPlatform } from 'lime-web-component-platform'

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyPluginNrOneComponent {
  @Prop() limeWebComponentPlatform: LimeWebComponentPlatform

  render() {
    return (
      <div>
        <span class="bold">Plugin nr one here</span>, I'm a Web Component
        <br />
        <button onClick={ () => this.handleClick() }>
          Click me!
        </button>
        <br />
        <child-component name="forwarded data"></child-component>
      </div>
    );
  }

  handleClick () {
    this.limeWebComponentPlatform.alertMessage('hej')
  }
}
