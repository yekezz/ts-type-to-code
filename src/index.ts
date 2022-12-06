import { getCode } from './getCode'
import { parse } from './parser'
import { transform } from './transform'
export { TraverseCode } from './transform'

/**
 *
 * @param filePath
 * @returns
 */
export async function tsTypeToCode(filePath: string) {
  const sourceCode = await getCode(filePath)
  const ast = parse(sourceCode)
  const traverseCode = transform(ast)
  return traverseCode
}
