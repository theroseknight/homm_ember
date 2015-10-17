import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["game-board-hexagon"],
  disabled:false,
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
  currentHexStatus:Ember.observer("statusPackage",function(){
    var component = this;
    var statusPackage = component.get('statusPackage');

    statusPackage.forEach(function(statusPackage){
      console.log(component.get('rowId'))
      console.log(component.get('columnId'))
      console.log(statusPackage.row_id)
      console.log(statusPackage.column_id)
      if(component.get('rowId')===statusPackage.row_id && component.get('columnId')===statusPackage.column_id){
        if(statusPackage.hexStatus === "disabled"){
          component.set('disabled',true);
        }else{
          component.set('disabled',false);
        }
        if(statusPackage.hexStatus === "reachable"){
          console.log("hi mom")
          $("#" + component.elementId).addClass('hexagon-player-reachable');
        }
      }
    })
  }),
  actions:{

	}
});
