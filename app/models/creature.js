import DS from 'ember-data';
var attr=DS.attr;
export default DS.Model.extend({
  name:attr(),
  town:attr(),
  level:attr(),
  attack:attr(),
  defense:attr(),
  damage_min:attr(),
  damage_max:attr(),
  hp:attr(),
  speed:attr(),
  cost:attr(),
  special:attr(),
  imageUrl:attr(),
  stackSize:attr(),
  hero:DS.belongsTo("hero",{async:true}),
});
