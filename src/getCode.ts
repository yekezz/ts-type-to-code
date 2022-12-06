import path from 'node:path'
import fse from 'fs-extra'
const __dirname = path.resolve()

/**
 *
 * @param filePath
 * @returns
 */
export async function getCode(filePath: string) {
  let sourceCode = ''
  const resolvePath = path.resolve(__dirname, filePath)
  try {
    sourceCode = await fse.readFile(resolvePath, { encoding: 'utf-8' })
  }
  catch (error) {
    console.error(error)
  }
  return sourceCode
}
