import fetch from '@/config/fetch'

// 获取首页默认地址
export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})

// 获取热门城市
export const hotCity = () => fetch('/v1/cities', {
  type: 'hot'
})

// 获取所有城市
export const groupCity = () => fetch('/v1/cities', {
  type: 'group'
})

// 获取搜素的数据
export const searchPlace = (cityId, val) => fetch('/v1/pois', {
  type: 'search',
  city_id: cityId,
  keyword: val
})
