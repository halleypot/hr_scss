import request from '@/utils/request'

export function sysLogin () {
  return request({
    url: 'sys/login',
    method: 'POST',
    data: {
      mobile: '13800000002',
      password: '123456'
    }
  })
}
