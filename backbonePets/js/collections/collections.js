var PetsCollection = Backbone.Collection.extend({
	model: Pet

})

var pets = new PetsCollection(pet1);
pets.add(pet3)
console.log(pets);

pets.remove(pet3);
console.log(pets);

pets.add([pet2, pet3]);

console.log(pets);

pets.add({name:"lil Moe", type: 'frog', id: 4})

console.log(pets.get(4));
console.log(pets.get(2).attributes.name);
console.log(pets.get(4).toJSON());
console.log(pets.get(3)['cid']);

pets.on('add', function(pet){
	console.log("there's a new "+pet.get('type')+" in town named "+ pet.get('name'))
});
pets.add ()

pets.on('change:name', function(pet){
	console.log(pet.previous('name')+"'s name changed to " + pet.get('name'));
});

pets.get(4).set('name', 'Ralph');

var names = pets.map(function (value,key){
	return value.attributes.name
})

console.log(names);



var reduced = pets.reduce(function(memo, value, key){
	return value.attributes.name + memo
})

console.log(reduced);

var plucked = pets.pluck('name');
console.log(plucked);
