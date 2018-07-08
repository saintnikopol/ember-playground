import Component from '@ember/component';

export default Component.extend({
  actions: {
    ShowBird(bird) {
      alert(bird.name);
    }
  }
});
