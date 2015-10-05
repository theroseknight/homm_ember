
function hitSixAnimations(component,name){
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/6.png")
  }), 1000);
}

function attackSevenAnimations(component,name){
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/7.png")
  }), 1100);
}

function deathEightAnimations(component,name){
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/7.png")
  }), 1100);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/8.png")
  }), 1200);
}
