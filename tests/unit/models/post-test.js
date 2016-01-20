import Ember from 'ember';

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Model | post', {
  needs: []
});

test('it model through store', function (assert) {
  var store = this.store();
  var post;
  Ember.run(function () {
    post = store.createRecord('post', {
      title: "My first expense in store",
      text: "34 in store"
    });
  });

  console.log("nag store ", JSON.stringify(post));
  assert.equal(post.get('title'), "My first expense in store");
  assert.equal(post.get('text'), "34 in store");
  assert.ok(!!store);
});

test('model through model', function (assert) {
  var model = this.subject();
  Ember.run(function () {
    model.set('title', "My first expense in model");
    model.set('text', "34 in model");
  });
  console.log("nag model", JSON.stringify(model));
  assert.equal(model.get('title'), "My first expense in model");
  assert.equal(model.get('text'), "34 in model");
  assert.ok(!!model);
});
