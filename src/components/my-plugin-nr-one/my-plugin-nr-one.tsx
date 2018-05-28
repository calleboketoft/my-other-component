import { Component, State } from '@stencil/core';
import { pluginComm } from 'plugin-comm';

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyPluginNrOneComponent {
  @State() pluginId

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
    this.pluginId = pluginComm.pluginRegisterDataCallback('my-plugin-nr-one', this.dataFromPlatform.bind(this))
    console.log('registering plugin callback for "my-plugin-nr-one"')
    console.log(this.pluginId)
  }

  componentDidUnload () {
    console.log('Plugin nr one: removed from DOM and now unregistering')
    pluginComm.pluginUnregisterDataCallback('my-plugin-nr-one')
  }

  handleClick (event) {
    console.log(event)
    alert('wow')
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin one', data)
  }
}
