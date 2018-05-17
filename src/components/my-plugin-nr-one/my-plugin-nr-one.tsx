import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-plugin-nr-one',
  styleUrl: 'my-plugin-nr-one.css',
  shadow: true
})
export class MyOtherComponent {

  @Prop() first: string;
  @Prop() last: string;

  @Event() beeper: EventEmitter;

  render() {
    return (
      <div>
        Second plugin, called {this.first} {this.last}
        <br />
        <button onClick={ (event: UIEvent) => this.handleClick(event) }>
          Click me! or something
        </button>
      </div>
    );
  }

  componentDidLoad() {
    console.log('inited')
  }

  propDidChange (){
    console.log('ok')
  }

  handleClick (event) {
    this.beeper.emit({'advanced': 'object!', 'listhere': [1,2,3]});
    console.log(this.first)
    console.log(event)
  }
}
