import Ember from 'ember';

export default Ember.Component.extend({
  classNames:["army-on-tile"],
  //This value is bound is a style attribute so it must be marked as a SafeString to avoid Ember warnings.
  animationCss:new Ember.Handlebars.SafeString(null),
  //This value is bound to the image currently being displayed by the tile
  imageUrl:"",
  //This value is set automatically by incoming animation package blasts from the Battle Engine
  animationPackage:{},
  //This observer catches any incoming animation packages and then processes the animation
  theGreatAnimator:Ember.observer("animationPackage",function(){
    var component = this;
    var animationPackage = component.get('animationPackage');

    animationPackage.forEach(function(animationPackage){
      if(component.get('rowId')===animationPackage.row_id && component.get('columnId')===animationPackage.column_id){
        Ember.run.later((function() {
          animate(component,animationPackage.name_of_unit,animationPackage.type_of_animation,animationPackage.number_of_frames,animationPackage.left_or_right,animationPackage.starting_delay);
        }),animationPackage.delay_start);
      }
    })
  }),
  actions:{

	}
});
