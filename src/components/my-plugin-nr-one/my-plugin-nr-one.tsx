import { Component, Prop } from '@stencil/core';
import { LimeWebComponentPlatform } from 'lime-web-component-platform/lime-web-component-platform.interface'
import { LimeWebComponent } from 'lime-web-component-platform/lime-web-component.interface'

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyPluginNrOneComponent implements LimeWebComponent{
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
