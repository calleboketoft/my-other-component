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
    console.log('inited')
  }

  handleClick (event) {
    console.log(event)
  }
}
