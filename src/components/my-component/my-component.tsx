import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Second plugin, called {this.first} {this.last}
      </div>
    );
  }
}
