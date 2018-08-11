var calculerAge = function() {
	var moment = require("moment");
	var maintenant;
	var naissance;
	var age;

	maintenant = moment();
	naissance = moment([this.dateNaissance.annee,
			this.dateNaissance.mois,
			this.dateNaissance.jour]);
	age = maintenant.diff(naissance, 'years');
	return age;
}

