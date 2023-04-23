const TokenKey = 'token';

/**
 * 获取认证令牌
 */
export function getToken() {
	return uni.getStorageSync(TokenKey)
}

/**
 * @param {String} token 认证令牌值
 */
export function setToken(token) {
	return uni.setStorageSync(TokenKey, token)
}

/**
 * 删除认证令牌
 */
export function removeToken() {
	return uni.removeStorageSync(TokenKey)
}
