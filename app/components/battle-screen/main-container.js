import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["turn-display-holder"],
  instanceArray:Ember.computed.alias('battleService.instanceArray'),
  actions:{

	}
});
