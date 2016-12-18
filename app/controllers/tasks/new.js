import Ember from 'ember';

export default Ember.Controller.extend({
	actions{
		addTask: function () {
			var title = this.get('title');
			var descripton = this.get('descripton');
			var date = this.get('date');
		}
	}
});
