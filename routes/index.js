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

  res.contentType('application/json');
	res.send({ data: donors });
};

getDonor = function() {
	var donor = {
		donation: Math.floor(Math.random()*251)
	};

	person = people[Math.floor(Math.random() * people.length)];

	donor.name = person.name;
	donor.avatar = person.avatar;

	donors.push(donor);
}