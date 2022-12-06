interface Marker {
  getAnimation: any
  getBubble: any
  getExtData: any
  getHeightBuffer: any
  getId: any
  getMap: any
  getzIndex: any
  hide: any
  id: string
  off: any
  on: any
  options: MarkerOptions
  setAnimation: any
  setBubble: any
  setCursor: any
  setExtData: any
  setHeightBuffer: any
}

interface MarkerOptions {
  map: 'map'
  position: number[]
  icon: string
  animate?: boolean
  extdata: any
}
