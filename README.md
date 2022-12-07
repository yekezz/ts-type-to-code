# ts-type-to-code

<p align="center">
<a href="https://www.npmjs.com/package/ts-type-to-code"><img src="https://img.shields.io/npm/v/ts-type-to-code?color=c95f8b&amp;label=" alt="NPM version"></a>
</p>

## Features
- Based on AST, the object containing the key value is extracted from the typescript type, and the corresponding code is generated.

## Resolve
I want to get the code of the configuration item from the type file, but I don't need json schema.
 returned. If option is false, the result will only return the required key.

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
tsTypeToCode('test/marker.d.ts', 'test/marker.ts', {optional: false})
```
from
<img src=".assets/source.png" title="dev" style="width:50vw;" />
to
<img src=".assets/target.png" title="dev" style="width:50vw;" />

## API
- tsTypeToCode(srcPath: string, targetPath: string[, options: TsTypeToCodeOptions]) 

## Options
- optional: The default optional is true, which means that regardless of whether the key in the type is optional or not, it will be returned. If option is false, the result will only return the required key.

- filter: filter the code on demand, or ignore it.

- generate: methods for generating target file content. By default, it will be generated in the form of object(as above image).


```
interface TsTypeToCodeOptions {
  /**
   * Whether to keep the optional key
   */
  optional?: boolean
  /**
   * filter traverseCode
   */
  filter?: TraverseFilter
  /**
   * methods for generating target file content
   */
  generate?: GenerateMethod
}
```

## License

[MIT](./LICENSE) License © 2022 [Enoch](https://github.com/enochzzz)
