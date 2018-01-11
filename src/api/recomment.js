/**
 * Created by HeFeng on 2018-01-09.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

//发生jsonp的请求
export function getRecommend () {
//获取url
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data=Object.assign({},commonParams,{
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
