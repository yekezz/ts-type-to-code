import { describe, expect, it } from 'vitest'
import { getCode } from '../src/getCode'
describe('should', () => {
  it('getCode', async () => {
    const path = '../test/test.d.ts'
    const sourceCode = await getCode(path)
    expect(sourceCode).toEqual('interface Marker {\n  getAnimation: any\n  getBubble: any\n  getExtData: any\n  getHeightBuffer: any\n  getId: any\n  getMap: any\n  getzIndex: any\n  hide: any\n  id: string\n  off: any\n  on: any\n  options: MarkerOptions\n  setAnimation: any\n  setBubble: any\n  setCursor: any\n  setExtData: any\n  setHeightBuffer: any\n}\n\ninterface MarkerOptions {\n  map: \'map\'\n  position: number[]\n  icon: string\n  animate?: boolean\n  extdata: any\n}\n')
  })
})
