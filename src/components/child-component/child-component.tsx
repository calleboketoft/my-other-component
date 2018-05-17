import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'child-component'
})
export class ChildComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        Child component {this.name}
      </p>
    );
  }
}