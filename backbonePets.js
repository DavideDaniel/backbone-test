// creates a Pet class using the backbone Model constructor
// ---- extend is like inherit
var Pet = Backbone.Model.extend({
    initialize: function(){
        console.log("your pet has been created");
        this.on("change", function(){
                console.log('something is afoot');
            });
        this.on('change:name', function(){
                console.log('thats better than ochocinco');
            });

    }
})

// create a new instance of the pet model
var pet1 = new Pet();
// 
pet1.set('name','fluffly');
pet1.set('type', 'hamster');

console.log(pet1);

// returns a copy of the attributes as a JSON object
console.log(JSON.stringify(pet1));
// returns a copy of the attributes as an object
console.log(pet1.toJSON());
// gets the value of the name key in the attributes
// key
console.log(pet1.get('name'));

c.l(pet1.get('name')+'is a '+pet1.get('type')+'.')
c.l(pet1.attributes.name+'is a '+pet1.attributes.type+'.')