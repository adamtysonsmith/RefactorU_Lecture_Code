var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    templates: function(req, res) {
        // Render the jade templates dynamically
        var templateName = req.params.templateName;
        res.render('templates/' + templateName)
    }
};

module.exports = indexController;