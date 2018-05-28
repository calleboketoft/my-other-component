import { Component } from '@stencil/core';
import { pluginComm } from 'plugin-comm'

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyPluginNrOneComponent {
  render() {
    return (
      <div>
        Plugin nr one here, <span class="bold">I'm a Web Component</span>
        <br />
        <button onClick={ (event: UIEvent) => this.handleClick(event) }>
          Click me!
        </button>
        <br />
        <child-component name="works great"></child-component>
      </div>
    );
  }

  componentDidLoad() {
    console.log('registering plugin callback for "my-plugin-nr-one"')
    pluginComm.registerPluginDataCallback('my-plugin-nr-one', this.dataFromPlatform.bind(this))
  }

  componentDidUnload () {
    console.log('Plugin nr one: removed from DOM and now unregistering')
  }

  handleClick (event) {
    console.log(event)
    alert('wow')
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin one', data)
  }
}
