import { module, test } from 'qunit';
import EmberObject from '@ember/object';
import { task } from 'ember-concurrency';

module('Unit | task getter', function() {
  const TaskObject = EmberObject.extend({
    task: task(function*() {
      return yield 'task result';
    })
  });

  test('it works', async function(assert) {
    let obj = TaskObject.create();
    assert.ok(obj.task);
    assert.equal(await obj.task.perform(), 'task result');
  });
});
