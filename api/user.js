import request from '@/utils/request.js'
/**
 @typedef loginData
 @type {Object}
 @property {string} userId 用户的Id
 @property {string} password 密码
 */

/**
 * @param {loginData} data 用户登录基本信息
 */
export function appLogin(data) {
	return request({
		url: '/api/user/login',
		method: 'POST',
		data
	})
}


/**
 @typedef registerData
 @type {Object}
 @property {string} userId 用户的Id
 @property {string} password 密码
 @property {string} validPsw 密码
 */

/**
 * @param {registerData} data 用户注册基本信息
 */
export function appRegister(data) {
	return request({
		url: '/api/user/register',
		method: 'POST',
		data
	})
}