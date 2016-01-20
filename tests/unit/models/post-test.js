import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function (assert) {
  var model = this.subject();
  //var store = this.store();
  //var post = store.find("post");
  console.log("nag ", JSON.stringify(model));
  assert.ok(!!model);
});
