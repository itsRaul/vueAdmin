//生产环境上传图片url
//export const baseUrl = 'http://api.mikoo.net'
export const baseUrl = 'http://localhost:8080'

export const client_id = 'dev'

export const client_secret = 'dev'

export const sign = 'apisign'

export const timestamp = '1558019916057'

export const v = 'v1'

export const sessionId = 'sessionId'

export const uploadUrl = baseUrl+'/fileupload' + '?client_id=' + client_id + '&client_secret=' + client_secret + '&sign=' + sign + '&timestamp=' + timestamp + '&v=' + v
