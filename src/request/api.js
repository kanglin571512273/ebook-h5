// api.js
import { httpGet, httpPost } from './http'
export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })

export const save = (data) => {
  return httpPost({
    url: 'apps/wechat/api/save_member',
    data
  })
}
