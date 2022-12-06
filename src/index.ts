import { getCode } from './getCode'
import { parse } from './parser'
import { transform } from './transform'

/**
 *
 * @param filePath
 * @returns
 */
export async function tsTypeToCode(filePath: string, optional = true) {
  const sourceCode = await getCode(filePath)
  const ast = parse(sourceCode)
  const traverseCode = transform(ast, optional)
  return traverseCode
}
