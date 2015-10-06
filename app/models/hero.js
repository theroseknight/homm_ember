import DS from 'ember-data';
var attr=DS.attr;
export default DS.Model.extend({
  battlePortraitUrl:attr(),
  creatures:DS.hasMany("creature",{async:true}),
});
