// routes/options_routes.js
module.exports = function(app) {
	app.get('/', 
		(req,res) => {
            res.send({
                "route":"hello",
                "operation":"GET",
                "status_code":200
            });

		}
	);

	app.get('/token/', 
		(req,res) => {

            res.send({
                "route":"token",
                "operation":"GET",
                "status_code":200
            });
        }
    );

};