import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    setAnimationPackage:function(){
      var animationPackage = [];

      var animationOne = {
        name_of_unit:"swordsman",
        type_of_animation:"death",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 4,
        column_id: 1,
        starting_delay:500
      }

      animationPackage.push(animationOne);

      var animationTwo = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 1,
        starting_delay:500,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationTwo);

      var animationThree = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 2,
        starting_delay:1100,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationThree);

      var animationFour = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 3,
        starting_delay:1700,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationFour);

      var animationFive = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 4,
        starting_delay:2300,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationFive);

      var animationSix = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 5,
        starting_delay:2900,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationSix);

      var animationSeven = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 6,
        starting_delay:3500,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationSeven);

      var animationEight = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 7,
        starting_delay:4100,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationEight);

      var animationNine = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 8,
        starting_delay:4700,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationNine);

      var animationTen = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 9,
        starting_delay:5300,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationTen);

      var animationEleven = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 10,
        starting_delay:5900,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationEleven);

      var animationTwelve = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 11,
        starting_delay:6500,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationTwelve);

      var animationThirteen = {
        name_of_unit:"swordsman",
        type_of_animation:"walk_forward",
        number_of_frames:6,
        left_or_right: "left",
        row_id: 5,
        column_id: 12,
        starting_delay:7100,
        movement_modification:[8,17,25,34,43,52]
      }

      animationPackage.push(animationThirteen);


      var animationFourteen = {
        name_of_unit:"swordsman",
        type_of_animation:"static",
        number_of_frames:1,
        left_or_right: "left",
        row_id: 5,
        column_id: 13,
        starting_delay:7700,
        movement_modification:[0]
      }

      animationPackage.push(animationFourteen);

      this.set('animationPackage',animationPackage)
    },
  }
});


/*
moveSixAnimations(this,"swordsman",5);
Ember.run.later((function() {
  animate(component,"swordsman","attack",7,"left");
}), 2900);
Ember.run.later((function() {
  animate(component,"swordsman","hit_by_melee",6,"left");
}), 3900);
}else if(this.get('rowId')===5 && this.get('columnId')===6){
Ember.run.later((function() {
  animate(component,"swordsman","death",6,"right");
}), 2900);
}else if(this.get('rowId')===4 && this.get('columnId')===6){
Ember.run.later((function() {
  animate(component,"swordsman","attack_down",5,"right");
}), 3900);

*/
