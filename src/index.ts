import path from 'node:path'
import { generate } from './generator'
import { getCode } from './getCode'
import { parse } from './parser'
import { transform } from './transform'

export type TraverseCode = [string, object]

export type GenerateMethod = (traverseCode: TraverseCode[]) => string

export type TraverseFilter = (code: TraverseCode) => boolean

export interface TsTypeToCodeOptions {
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

/**
 *
 * @param src
 * @returns
 */
export async function tsTypeToCode(src: string, target: string, options: TsTypeToCodeOptions = {}) {
  src = path.resolve(path.resolve(), src)
  target = path.resolve(path.resolve(), target)
  const sourceCode = await getCode(src)
  const ast = parse(sourceCode)
  const traverseCode = transform(ast, options)
  generate(target, traverseCode, options)
}

