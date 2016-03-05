import { Router } from 'express';
import categories from './categories';

export default function() {
	var api = Router();
	
    // mount the categories resource
	api.use('/categories', categories);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}
