import config from './dbconfig.js';
import mssql from 'mssql';
import logger from './logger.js';

export async function getUsers(){
	try{
		let pool = await mssql.connect(config);
		logger.info(config);
		let users = await pool.request().query('SELECT * from users');
		return users.recordsets;
	}
	catch (error){
		console.log(error);
	}
}