import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["game-board-hexagon"],
  toggleStatusObserver:Ember.observer("",function(){
    Ember.run.scheduleOnce('afterRender', this, function() {
      if(this.get('battleService').get('showHexagon') === true){
        Ember.run.scheduleOnce('afterRender', this, function() {
          $("#" + this.elementId).addClass('hexagon-toggle-on');
        });
      }else{
        Ember.run.scheduleOnce('afterRender', this, function() {
          $("#" + this.elementId).addClass('hexagon-toggle-off');
        });
      }
    });
  }).on('init'),  
  actions:{

	}
});
