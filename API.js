import { getUsers } from './dboperations.js';
// import { Express } from 'express';
// import bodyParser from 'body-parser';
// import { Router } from 'express';

function ex(){
	console.log('kkkk');
	const users = getUsers();
	console.log(users);
}
export default ex;
ex();
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
// const dboperations = require('./dboperations');

// dboperations.getUsers().then(result => {
// 	console.log(result);
// });