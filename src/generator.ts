import fse from 'fs-extra'
import type { GenerateMethod, TraverseCode, TsTypeToCodeOptions } from '.'

function generateCode(traverseCode: TraverseCode[], generate?: GenerateMethod) {
  let code = ''
  if (generate) {
    code = generate(traverseCode)
  }
  else {
    traverseCode.forEach((i) => {
      code += `export const ${i[0].toLocaleUpperCase()} = {
`
      for (const k in i[1])
        code += `  ${k}: '',\n`

      code += '}\n\n'
    })
  }
  return code
}

async function generateFile(targetPath: string, code: string) {
  try {
    await fse.outputFile(targetPath, code, { encoding: 'utf-8' })
  }
  catch (error) {
    console.error(error)
  }
}

export async function generate(target: string, traversecode: TraverseCode[], { generate }: TsTypeToCodeOptions) {
  const code = generateCode(traversecode, generate)
  await generateFile(target, code)
}
