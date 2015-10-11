//component: the hexagon tile component that is animating the action
//name: the name of the creature being animated
//type: hit || move || attack || death || walk_forward || walk_down || walk_up
//number: the number of frames in the animation
//leftOrRight: whether the animation is coming from the left side or the right side
//startingDelay: how long you should wait before initiating this animation (part of chained animations)

//walk_forward,
//number: the number of images that we have for the animation


function animate(component,name,type,number,leftOrRight,startingDelay){
  //Step 1 - Create the URL path to the images that will be cycled through to create the animation
  var urlHeader;
  if(leftOrRight==="left"){
    urlHeader = "units/" + name + "/";
  }else{
    urlHeader = "right/units/" + name + "/";
  }

  //Step 2 - For movement animations an incrementing ammount of margin is needed in order to push the image to its starting location on the next hexagon which is 52 pixels wide
  var startingDelayInner;
  var fullMovementModifiers;
  var halfMovementModifiers;
  if(number === 6){
    fullMovementModifiers = [8,17,25,34,43,52]
    halfMovementModifiers = [4,8,13,17,21,26]
  }else if(number === 12){
    fullMovementModifiers = [4,8,12,17,21,25,29,34,38,43,47,52]
    halfMovementModifiers =  [2,4, 6, 8,10,12,14,17,19,21,23,26]
  }


  //Step 3 - The starting array is needed in order to access a looping index inside of the Ember.run.later that holds its incremented value at the time of function initiation rather than call
  var startingArray = Array(number).join(0).split(0).map(Number.call, Number);

  //Step 4 - Cycle through the images to create the animation
  startingArray.forEach(function(object,index){
    Ember.run.later((function() {
      var innerNumber = index + 1;
      if((type==="walk_forward" || type==="walk_down" || type==="walk_up") && innerNumber === number && innerNumber !== 1){
        component.set('imageUrl',"blank.png")
      }else{
        component.set('imageUrl',urlHeader + name + "_" + type + "/" + innerNumber +".png");
      }
      if(type==="walk_forward"){
        component.set('animationCss',new Ember.Handlebars.SafeString("margin-" +leftOrRight +":" + fullMovementModifiers[index] +"px;"));
        component.set('animationHorNumber',new Ember.Handlebars.SafeString(fullMovementModifiers[index]));
        component.set('leftOrRight',new Ember.Handlebars.SafeString(leftOrRight));
      }else if(type==="walk_down"){
        var cssString = new Ember.Handlebars.SafeString("margin-" +leftOrRight +":" + halfMovementModifiers[index] +"px; top:-" + (70 - fullMovementModifiers[index]) + "px;")
        component.set('animationCss',cssString);
        component.set('animationHorNumber',new Ember.Handlebars.SafeString(fullMovementModifiers[index]));
        component.set('leftOrRight',new Ember.Handlebars.SafeString(leftOrRight));
      }else if(type==="walk_up"){
        var cssString = new Ember.Handlebars.SafeString("margin-" +leftOrRight +":" + halfMovementModifiers[index] +"px; top:-" + (70 + fullMovementModifiers[index]) + "px;")
        component.set('animationCss',cssString);
        component.set('animationHorNumber',new Ember.Handlebars.SafeString(fullMovementModifiers[index]));
        component.set('leftOrRight',new Ember.Handlebars.SafeString(leftOrRight));
      }
    }), startingDelay);
    if(index + 2  === number){
      //Cut down on the flicker on by slowing down the final animation which sets the blank image to the old tile
      startingDelay += 110;
    }else{
      startingDelay += 50;
    }
  })
}
