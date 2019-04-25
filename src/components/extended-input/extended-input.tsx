import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'extended-input',
  styleUrl: 'extended-input.css',
  shadow: true
})
export class ExtendedInput {
  /**
   * The first name
   */
  @Prop() type: string;

  private getType(): string {
    if( ['text', 'number'].includes(this.type)) {
      return this.type;
    }
    return 'text';
  }

  render() {
    return <main>
        <figure class="extended__decorator extended__decorator--leading">
          <slot name="decorator-leading" />
        </figure>
        <input class="extended__input" type={this.getType()}/>
        <figure class="extended__decorator extended__decorator--trailing">
          <slot name="decorator-trailing" />
        </figure>
      </main>;
  }
}
