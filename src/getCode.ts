import fse from 'fs-extra'

/**
 *
 * @param src
 * @returns
 */
export async function getCode(src: string) {
  let sourceCode = ''
  try {
    sourceCode = await fse.readFile(src, { encoding: 'utf-8' })
  }
  catch (error) {
    console.error(error)
  }
  return sourceCode
}
