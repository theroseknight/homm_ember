import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({
  leftHeroImageUrl:null,
  rightHeroImageUrl:null,
  leftSideCreatures:null,
  rightSideCreatures:null,
  showHexagon:null,
  hexOptionObserver:Ember.observer("showHexagon",function(){
    console.log(this.get('showHexagon'))
    if(this.get('showHexagon') === true){
      $(".game-board-hexagon").addClass("hexagon-toggle-on").removeClass('hexagon-toggle-off');
    }else{
      $(".game-board-hexagon").addClass("hexagon-toggle-off").removeClass('hexagon-toggle-on');
    }
  }),
  initiativeArray:function(){
    console.log('im in the array')
    var leftSideCreatures = this.get('leftSideCreatures');
    console.log(leftSideCreatures)
    var rightSideCreatures = this.get('rightSideCreatures');
    console.log(rightSideCreatures)
    var creatures = leftSideCreatures.concat(rightSideCreatures);
    console.log(creatures)
    // use slice() to copy the array and not just make a reference
    var fastestToSlowest = creatures.slice(0);

    fastestToSlowest.sort(function(a,b) {
        return b.get('speed') - a.get('speed');
    });
    return fastestToSlowest;
  }.property('leftSideCreatures','rightSideCreatures')
});
