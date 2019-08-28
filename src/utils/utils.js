export const deep = params => {
    if (params == '') { return ''; }
    let obj = {};
    obj = JSON.parse(JSON.stringify(params));
    return obj;
}


/**
 * @name 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * @name 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * @name 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * @name 时间格式化
 */
export const fromDate = date  => {
	let current = new Date(date)
	return current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate()
}