import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true
})
export class MyOtherComponent {

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
