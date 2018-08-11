var spawnAnimal = function(speed) {
	var cat = {};

	cat.position = {
x: Math.random() * 2.0 - 1.0,
   y: Math.random() * 2.0 - 1.0
	};
	cat.speed = speed;

	return cat;
};

var spawnCat = function() {
	return spawnAnimal(0.1);
};

var spawnDog = function() {
	return spawnAnimal(0.2);
};

var randomDirection = function() {
	var x = Math.random() * 2.0 - 1.0;
	var isDown = Math.random() < 0.5;
	var coef = isDown ? -1.0 : 1.0;
	var y = coef * Math.sqrt(1 - x * x);

	var v = {};
	v.x = x;
	v.y = y;
	return v;
};

var multVect = function(v, n) {
	var result = {};
	result.x = v.x * n;
	result.y = v.y * n;

	return result;
};

var addVect = function(v1, v2) {
	var result = {};
	result.x = v1.x + v2.x;
	result.y = v1.y + v2.y;

	return result;
};

var subVect = function(v1, v2) {
	var result = {};
	result.x = v1.x - v2.x;
	result.y = v1.y - v2.y;

	return result;
};

var vectLength = function(v) {
	return Math.sqrt(v.x * v.x + v.y * v.y);
};

var limit = function(n, min, max) {
	return Math.max(Math.min(n, max), min);
};

var moveAnimal = function(a, direction) {
	var move = multVect(direction, a.speed);
	var position = addVect(a.position, move);


	position.x = limit(position.x, -1.0, 1.0);
	position.y = limit(position.y, -1.0, 1.0);

	a.position = position;
};

var moveCat = function(c) {
	var direction = randomDirection();
	moveAnimal(c, direction);
};

var nearestCat = function(dog, zoo) {
	var cat;
	var length = Number.MAX_VALUE;
	var i;

	for (i = 0; i < zoo.cats.length; i++) {
		var v = subVect(zoo.cats[i].position, dog.position);
		var l = vectLength(v);
		if (l < length) {
			cat = zoo.cats[i];
			length = l;
		}
	}

	return cat;
};

var directionTo = function(source, target) {
	var move = subVect(target, source);
	return multVect(move, 1.0 / vectLength(move));
};

var moveDog = function(d, zoo) {
	var target = nearestCat(d, zoo);
	var direction = directionTo(d.position, target.position);
	moveAnimal(d, direction);
};

var createCats = function(n) {
	var i;
	var cats = [];
	for (i = 0; i < n; i++) {
		cats.push(spawnCat());
	}

	return cats;
};

var createDogs = function(n) {
	var i;
	var dogs = [];
	for (i = 0; i < n; i++) {
		dogs.push(spawnDog());
	}

	return dogs;
};

var createZoo = function() {
	var zoo = {};

	var cats = createCats(15);
	var dogs = createDogs(3);

	zoo.cats = cats;
	zoo.dogs = dogs;

	return zoo;
};

var moveCats = function(zoo) {
	var i;
	for (i = 0; i < zoo.cats.length; i++) {
		moveCat(zoo.cats[i]);
	}
};

var moveDogs = function(zoo) {
	var i;
	for (i = 0; i < zoo.dogs.length; i++) {
		moveDog(zoo.dogs[i], zoo);
	}
};

var putAnimal = function(animals, s, grid) {
	var i;
	for (i = 0; i < animals.length; i++) {
		var a = animals[i];
		var x = Math.min(19, Math.floor((a.position.x + 1.0) * 10.0));
		var y = Math.min(19, Math.floor((a.position.y + 1.0) * 10.0));
		grid[x][y] = s;
	}
};

var displayZoo = function(zoo) {
	var grid = [];
	var i, j;

	for (i = 0; i < 20; i++) {
		var line = [];
		line.length = 20;
		grid.push(line);
	}

	putAnimal(zoo.cats, 'C', grid);
	putAnimal(zoo.dogs, 'D', grid);

	console.log('########### Zoo ###########');
	for (i = 0; i < grid.length; i++) {
		for (j = 0; j < grid.length; j++) {
			process.stdout.write(grid[i][j] || ' ');
		}
		process.stdout.write('\r\n');
	}
};

var runZoo = function(zoo, n) {
	var i;

	for (i = 0; i < n; i++) {
		moveCats(zoo);
		moveDogs(zoo);
		displayZoo(zoo);
	}
};

var main = function() {
	var zoo = createZoo();
	runZoo(zoo, 50);
};

main();
