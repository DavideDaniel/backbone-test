var PetsCollection = Backbone.Collection.extend( {
	model: Pet,
	url: 'http://localhost:3000/pets/'
} );

var pets = new PetsCollection();
// var j5 = new Pet( {
// 	name: 'number 5',
// 	type: 'robot'
// } );
// console.log( j5.attributes.name )
// pets.create( j5, {
// 	success: function ( response ) {
// 		j5.set( 'id', response.toJSON()
// 			.id );
// 		j5.set( {
// 			name: 'Johnny 5'
// 		} );
// 		j5.save();
// 		// j5.destroy();
// 		var little_moe = new Pet( {
// 			name: 'Little Moe',
// 			type: 'frog'
// 		} );
// 		pets.create( little_moe, {
// 			success: function ( response ) {
// 				little_moe.set( 'id', response.toJSON()
// 					.id );
// 				console.log( little_moe.toJSON() )
// 				// little_moe.destroy();

// 			}
// 		} );

// 	}
// } );

pets.fetch();
console.log(pets);