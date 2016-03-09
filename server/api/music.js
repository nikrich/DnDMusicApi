import resource from 'resource-router-middleware';
import music from '../models/music';

export default resource({
    mergeParams: true,
    
	/** Property name to store preloaded entity on `request`. */
	id : 'music',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
    
	load(req, id, callback) {        
		var mus = music.find( mus => mus.id==id ),
		  err = mus ? null : 'Not found';
        
		callback(err, mus);
	},
    
	/** GET / - List all entities */
	index({ params }, res) {         
        var mus = music.find( m => m.cat_id==params.id )
        
		res.json(mus);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = music.length.toString(36);
		music.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read(req, res) {   
		res.json(req.music);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				facet[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		music.splice(music.indexOf(facet), 1);
		res.sendStatus(204);
	}
});
