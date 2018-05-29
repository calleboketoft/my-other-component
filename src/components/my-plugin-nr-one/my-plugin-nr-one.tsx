import { Component, State } from '@stencil/core';
import { pluginComm } from 'plugin-comm';

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyPluginNrOneComponent {
  @State() pluginId
  @State() messageFromPlatform

  render() {
    return (
      <div>
        <span class="bold">Plugin nr one here</span>, I'm a Web Component
        <br />
        <span class="bold">Plugin ID:</span> { this.pluginId }
        <br />
        <span class="bold">Incoming message from platform:</span> { this.messageFromPlatform }
        <br />
        <button onClick={ (event: UIEvent) => this.handleClick(event) }>
          Click me!
        </button>
        <br />
        <child-component name="forwarded data"></child-component>
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
    pluginComm.pluginUnregisterDataCallback(this.pluginId)
  }

  handleClick (event) {
    console.log(event)
    alert('wow')
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin one', data)
    this.messageFromPlatform = JSON.stringify(data)
  }
}
