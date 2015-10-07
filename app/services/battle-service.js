import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({
  leftHeroImageUrl:null,
  rightHeroImageUrl:null,
  leftSideCreatures:null,
  rightSideCreatures:null,
  showHexagon:null,
  arrayOfBattleHexes: [],
  hexOptionObserver:Ember.observer("showHexagon",function(){
    if(this.get('showHexagon') === true){
      $(".game-board-hexagon").addClass("hexagon-toggle-on").removeClass('hexagon-toggle-off');
    }else{
      $(".game-board-hexagon").addClass("hexagon-toggle-off").removeClass('hexagon-toggle-on');
    }
  }),
  initiativeArray:function(){
    var leftSideCreatures = this.get('leftSideCreatures');
    var rightSideCreatures = this.get('rightSideCreatures');
    var creatures = leftSideCreatures.concat(rightSideCreatures);
    // use slice() to copy the array and not just make a reference
    var fastestToSlowest = creatures.slice(0);

    fastestToSlowest.sort(function(a,b) {
        return b.get('speed') - a.get('speed');
    });
    return fastestToSlowest;
  }.property('leftSideCreatures','rightSideCreatures'),
  displayInitiativeArray:function(){
    return this.get('initiativeArray').slice(0,10);
  }.property('inititiaveArray')
});
