import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch('https://developer.mozilla.org/en-US/docs/Learn$children');
    let json = await response.json();

    return {
      learn: json
    };
  }
}
