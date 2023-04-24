import { getToken, removeToken } from './auth';
import { APP_BASE_URL } from './env';

/**
 * 基于uni的请求封装的网络请求
 * @param {Object} options 包含url,method,data等基本信息，参数:https://uniapp.dcloud.net.cn/api/request/request.html
 * @param {String} options.method=[GET|POST] 请求的方法
 */
function service(options = {}) {
	options.url = `${APP_BASE_URL}${options.url}`;
	// 携带token
	if (getToken()) {
		options.header = {
			'content-type': 'application/json',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
			'Access-Control-Max-Age': 86400,
			'Authorization': `${getToken()}`
		};
	}

	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			if (![200, 401, 304, 403].includes(res.data.code)) {
				// 非成功状态码弹窗
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.data.msg}`
				});
				// 登陆失效
				if (res.data.code === 403) {
					removeToken()
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
				// 返回错误信息
				rejected(res);
			} else {
				resolved(res.data)
			}
		};
		options.fail = (err) => {
			console.log(err);
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '服务器错误,请稍后再试'
			});
			rejected(err);
		};
		uni.request(options);
	});
}

export default service;
