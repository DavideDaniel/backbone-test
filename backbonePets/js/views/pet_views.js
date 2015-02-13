$( document )
	.ready( function () {
		var PetsView = Backbone.View.extend( {
			el: '#petsList',
			initialize: function () {
				this.listenTo( this.collection, 'sync remove', this.render );
			},

			render: function () {
				var el = this.$el;
				el.html( '' );
				this.collection.each( function ( pet ) {
					el.append( new PetView( {
							model: pet
						} )
						.render()
						.el );
				} )
				return this;
			}
		} );

		var PetView = Backbone.View.extend( {
			tagName: 'li',
			template: _.template( $( '#petTemplate' )
				.html ),

			deletePet: function () {
				this.model.destroy();
			},

			createPet: function () {
				var nameField = this.$( '#newPetName' );
				var typeField = this.$( '#newPetType' );
				var newPetName = nameField.val();
				var newPetType = typeField.val();
			},

			render: function () {
				this.$el.html( _.template( this.template( {
						pet: this.model.toJSON()
					} ) )

				)
				return this
			}
		} );

		var CreatePetView = Backbone.View.extend( {
			el: '#addPetForm',
			events: {
				'click #addNewPet': 'createPet'
			},

		} );

	} )