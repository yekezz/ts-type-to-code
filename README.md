# ts-type-to-code

<p align="center">
<a href="https://www.npmjs.com/package/ts-type-to-code"><img src="https://img.shields.io/npm/v/ts-type-to-code?color=c95f8b&amp;label=" alt="NPM version"></a>
</p>

## Features
- Based on AST, the object containing the key value is extracted from the typescript type, and the corresponding code is generated.

## Resolve
I want to get the code of the configuration item from the type file, but I don't need json schema.

## API
- tsTypeToCode(filePath: string[, optional: boolean]) 

The default optional is true, which means that regardless of whether the key in the type is optional or not, it will be returned. If option is false, the result will only return the required key.

## Usage
``` pnpm add ts-type-to-code ```

```
// marker.d.ts
interface Marker {
  id: string
  off: Function
  on: Function
  options: MarkerOptions
}

interface MarkerOptions {
  map: Map
  position: number[]
  icon?: string
  animate?: boolean
}
```

```
import { tsTypeToCode } from 'ts-type-to-code'
const code = tsTypeToCode('types/marker.d.ts')
console.log(code)

// [['Marker', {id:'',off:'',on:'',options:''}],['MarkerOptions', {map:'',position:'',icon:'',animate:''}]]


const code2 = tsTypeToCode('types/marker.d.ts', false)
console.log(code2)

// [['Marker', {id:'',off:'',on:'',options:''}],['MarkerOptions', {map:'',position:''}]]
```



## License

[MIT](./LICENSE) License © 2022 [Enoch](https://github.com/enochzzz)
