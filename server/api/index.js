import { Router } from 'express';
import categories from './categories';
import music from './music';

export default function() {
	var api = Router();
	
    // mount the resources
	api.use('/categories', categories);
    api.use('/categories/:id/music', music);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}
