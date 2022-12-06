import type { ParseResult } from '@babel/parser'
import type { File } from '@babel/types'
import _traverse from '@babel/traverse'
const traverse = (_traverse as any).default

export type TraverseCode = [string, object]

/**
 *
 * @param ast
 * @returns
 */
export function transform(ast: ParseResult<File>, optional?: boolean): TraverseCode[] {
  const traverseCode: TraverseCode[] = []
  traverse(ast, {
    TSInterfaceBody(path: any) {
      const result: any = {}
      path.node.body.forEach((i: any) => {
        optional ? (result[i.key.name] = '') : (!i.optional && (result[i.key.name] = ''))
      })
      traverseCode.push([path.parent.id.name, result])
    },
  })
  return traverseCode
}
