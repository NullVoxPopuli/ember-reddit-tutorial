import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

class TopBarSubredditSearchComponent extends Component {
  @tracked isOpen = false;

  @action toggle() {
    this.isOpen = !this.isOpen;
  }
}

export default setComponentTemplate(hbs`
<div class='dropdown {{if this.isOpen "active"}}'>
  <button
    class='dropdown-trigger'
    {{on 'click' this.toggle}}
  >
    Current Subreddit
  </button>

  <div class='dropdown-menu'>
    <input placeholder='Filter' />

    <panel>

      <legend>Feeds</legend>

      <LinkTo @route='application'>Home</LinkTo>
      <LinkTo @route='subreddit' @model='all'>All</LinkTo>
    </panel>

    <panel>
      <legend>My Communities</legend>

      <a href='#'>/r/beatsaber</a>
      <a href='#'>/r/BSG</a>
      <a href='#'>/r/Captain_Marvel</a>
      <a href='#'>/r/Coffee</a>
      <a href='#'>/r/controlgame</a>
    </panel>
  </div>
</div>
`, TopBarSubredditSearchComponent);
