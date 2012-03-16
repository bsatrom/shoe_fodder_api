var donors = [];
var people = require('../data/people').people()

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

/*
 * GET a list of donors (as json)
 */

exports.donors = function(req, res){
  var newDonor = getDonor();

	donors.splice(0, 0, newDonor);
	
  res.contentType('application/json');
	res.send({ data: donors });
};

/*
 * GET a single donor
 */

exports.donor = function(req, res) {
	var newDonor = getDonor();

	res.header('Access-Control-Allow-Origin', '*');
	res.contentType('application/json');
	res.send({ data: newDonor });
};

getDonor = function() {
	var donor = {
		donation: Math.floor(Math.random()*251)
	};

	person = people[Math.floor(Math.random() * people.length)];

	donor.name = person.name;
	donor.avatar = person.avatar;

	return donor;
}