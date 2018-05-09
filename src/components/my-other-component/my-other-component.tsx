import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true
})
export class MyOtherComponent {

  @Prop() first: string;
  @Prop() last: string;

  @Event() beeper: EventEmitter;

  componentDidLoad() {
    this.doSomeBeeping();
  }

  doSomeBeeping () {
    setInterval(() => {
      this.beeper.emit({'advanced': 'object!', 'listhere': [1,2,3]});
    }, 1000);
  }

  render() {
    return (
      <div>
        Second plugin, called {this.first} {this.last}
      </div>
    );
  }
}
