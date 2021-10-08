import siteMetadata from '@/data/siteMetadata'

const pastTimes = (date) => {
  if (!date) {
    return
  }

  let postDateTime = new Date(date).getTime() //转换成中国标准时间
  let nowTime = new Date().getTime()
  let diff = nowTime - postDateTime

  let str = ''
  let year = diff / (1000 * 60 * 60 * 24 * 365)
  let month = diff / (1000 * 60 * 60 * 24 * 30)
  let day = diff / (1000 * 60 * 60 * 24)

  let hour = diff / (1000 * 60 * 60)
  let min = diff / (1000 * 60)
  if (year >= 1) {
    str = Math.floor(year) + '年前'
  } else if (month >= 1) {
    str = Math.floor(month) + '个月前'
  } else if (day >= 1) {
    str = Math.floor(day) + '天前'
  } else if (hour >= 1) {
    str = Math.floor(hour) + '小时前'
  } else if (min >= 1) {
    str = Math.floor(min) + '分钟前'
  } else {
    str = '刚刚'
  }
  return str
}
export default pastTimes
