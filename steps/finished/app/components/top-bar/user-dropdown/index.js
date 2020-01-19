import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TopBarUserDropdownComponent extends Component {
  @tracked isOpen = false;

  @action toggle() {
    this.isOpen = !this.isOpen;
  }
}
