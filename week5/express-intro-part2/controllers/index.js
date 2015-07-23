var indexController = {
    // This is where we would look up data in our database and do something with it.  We can read information from
    // the request, look up data in the db, organize the data and feed it into our template.
	index: function(req, res) {
		res.render('index');
	}
};

module.exports = indexController;