const prices: (number | string)[] = [1, 2, 4, 5, 7, 'string'];
prices.push(1);
prices.push('1');

let user: [string, number] = ['', 0];
user = ['minmdev', 27];

console.log(user);

const [username, age] = user;

console.log(username, age);