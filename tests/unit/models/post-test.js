import Ember from 'ember';
import { expect } from 'chai';

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
  assert.ok(!!store);
});

test('model through model', function (assert) {
  var model = this.subject();
  Ember.run(function () {
    model.set('title', "My first expense in model");
    model.set('text', "34 in model");
  });
  console.log("nag model", JSON.stringify(model));
  expect(model.title).to.equal("My first expense in model");
  assert.ok(!!model);
});
