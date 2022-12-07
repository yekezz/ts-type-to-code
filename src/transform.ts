import type { ParseResult } from '@babel/parser'
import type { File } from '@babel/types'
import traverse from '@babel/traverse'
import type { TraverseCode, TsTypeToCodeOptions } from '.'

/**
 *
 * @param ast
 * @returns
 */
export function transform(ast: ParseResult<File>, { optional = true, filter }: TsTypeToCodeOptions): TraverseCode[] {
  let traverseCode: TraverseCode[] = []
  traverse(ast, {
    TSInterfaceBody(path: any) {
      const result: any = {}
      path.node.body.forEach((i: any) => {
        optional ? (result[i.key.name] = '') : (!i.optional && (result[i.key.name] = ''))
      })
      traverseCode.push([path.parent.id.name, result])
    },
  })
  if (filter)
    traverseCode = traverseCode.filter(filter)
  return traverseCode
}
