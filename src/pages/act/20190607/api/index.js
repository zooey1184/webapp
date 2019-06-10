import env from '@/common/js/env'

export default function api () {
  const originHost = env().originHost('fxd.mayunjieniqianhua.com')
  // const pre = `${originHost}/api/user`
  const pre = `//fxd.mayunjieniqianhua.com/api/user`
  const path = {
    getCode: `${pre}/h5SendSms.htm`,
    register: `${pre}/wxRegister.htm`
  }
  return path
}
