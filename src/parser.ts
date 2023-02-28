import type { ParseResult } from '@babel/parser'
import astParser from '@babel/parser'
import type { File } from '@babel/types'

/**
 *
 * @param sourceCode
 * @returns
 */
export function parse(sourceCode: string): ParseResult<File> {
  return astParser.parse(sourceCode, {
    plugins: ['typescript'],
    sourceType: 'module',
  })
}
