import { Component } from '@stencil/core';

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyPluginNrOneComponent {
  render() {
    return (
      <div>
        Plugin nr one here
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
    window['platformPluginComm'].registerPluginDataCallback('my-plugin-nr-one', this.dataFromPlatform.bind(this))
  }

  handleClick (event) {
    console.log(event)
  }

  dataFromPlatform (data) {
    console.log('Data received from platform in plugin one', data)
  }
}
