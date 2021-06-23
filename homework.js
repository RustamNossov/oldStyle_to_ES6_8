//var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
let employersNames = employers.filter((item) => {return item.length > 0}).map((item) => {return item.charAt(0).toUpperCase() + item.slice(1);})


// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

//var sponsors = {
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

// function calcCash(own) {
//     own = own || 0;
//     var everyCash = Array.prototype.slice.call(arguments);
//     var total = own;
//     for (var i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }
function calcCash({own = 0, arguments}) {
    return arguments.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, own);
}

//var money = calcCash(null, sponsors.cash);
const money = calcCash({arguments: sponsors.cash});


// function makeBusiness(owner, director, cash, emp) {
//     director = director || 'Victor';
//     var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
//     console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
//     emp);
//     console.log('And we have a sponsors: ');
//     console.log.apply(null, sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }
function makeBusiness({owner, director = 'Victor', cash, emp}={}) {
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp.join(', ')}`);
    console.log('And we have a sponsors: ');
    console.log(sumSponsors.join(', '));
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}

makeBusiness({owner: 'Sam', cash: money, emp: employersNames});