import Component from '@glimmer/component';

import { timeout } from 'ember-concurrency';
import { keepLatestTask } from 'ember-concurrency-decorators';

const DEBOUNCE_MS = 250;

export default class SearchLinksComponent extends Component {
  get results() {
    return this.search.lastSuccessful?.value || [];
  }

  @keepLatestTask
  *search(inputEvent) {
    let term = inputEvent.target.value;

    if (!term) return;

    yield timeout(DEBOUNCE_MS);

    return findLink(this.args.links, term.toLowerCase());
  }
}

function findLink(links, term) {
  if (Array.isArray(links)) {
    return findLinks(links, term);
  }

  return isMatch(links, term);
}

function findLinks(links, term) {
  let results = [];

  for (let i = 0; i < links.length; i++) {
    let result = findLink(links[i], term);

    if (result) {
      results = [...result];
    }
  }

  return results;
}

function isMatch(link, term) {
  let matchesTitle = link.title.toLowerCase().includes(term);

  if (matchesTitle) return [link];

  let matchesChild = findLink(link.subpages, term);

  if (matchesChild) return [link];

  return [];
}
