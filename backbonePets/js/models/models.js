// creates a Pet class using the backbone Model constructor
// ---- extend is like inherit

var Pet = Backbone.Model.extend({
	defaults: {
		name: 'T-1000',
		type: 'Terminator'
	},
    initialize: function(){
        console.log("your pet has been created");
        this.on("change", function(){
                console.log('something is afoot');
            });
        this.on('change:name', function(){
                console.log('thats better than ochocinco');
            });
        this.on('invalid', function(model, error){
        	c.l(error);
        });

    },
    validate: function(attr){
    	if (attr.name === undefined){
    		return "No name!";
    	} if (attr.type === undefined){
    		return "No type!";
    	}
    }
})

// create a new instance of the pet model
var pet1 = new Pet();
// 
pet1.set('name','fluffy');
pet1.set('type', 'hamster');
pet1.set('id', 1);

console.log(pet1);

// returns a copy of the attributes as a JSON object
console.log(JSON.stringify(pet1));
// returns a copy of the attributes as an object
console.log(pet1.toJSON());
// gets the value of the name key in the attributes
// key
console.log(pet1.get('name'));

console.log(pet1.get('name')+' is a '+pet1.get('type')+'.')
console.log(pet1.attributes.name+' is a '+pet1.attributes.type+'.')

var pet2 = new Pet();
// 
pet2.set('name','smokey');
pet2.set('type', 'cat');
pet2.set('id', 2);



var pet3 = new Pet();
// 
pet3.set('name','Big Moe');
pet3.set('id', 3);

var pet5 = new Pet();


