import { param2Obj } from '@/utils/index.js'
describe('Utils:param2Obj', () => {
  const url = 'http://beike.xdf.cn/#/statistical/index?t=1626356829406'

  it('param2Obj test', () => {
    expect(param2Obj(url)).toEqual({
      t: '1626356829406'
    })
  })
})
