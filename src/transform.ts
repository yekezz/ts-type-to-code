import type { ParseResult } from '@babel/parser'
import type { File } from '@babel/types'
import traverse from '@babel/traverse'
import type { TraverseCode, TsTypeToCodeOptions } from '.'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const _traverse = traverse?.default ?? traverse

/**
 *
 * @param ast
 * @returns
 */
export function transform(ast: ParseResult<File>, { optional = true, filter }: TsTypeToCodeOptions): TraverseCode[] {
  let traverseCode: TraverseCode[] = []
  _traverse(ast, {
    TSInterfaceBody(path: any) {
      const result: any = {}
      path.node.body.forEach((i: any) => {
        if (i.key)
          optional ? (result[i.key.name] = '') : (!i.optional && (result[i.key.name] = ''))
      })
      traverseCode.push([path.parent.id.name, result])
    },
  })
  if (filter)
    traverseCode = traverseCode.filter(filter)
  return traverseCode
}
