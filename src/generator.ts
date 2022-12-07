import fse from 'fs-extra'
import type { GenerateMethod, TraverseCode, TsTypeToCodeOptions } from '.'

function transformName(name: string) {
  return `${name[0].toLocaleLowerCase()}${name.slice(1)}`
}

function generateCode(traverseCode: TraverseCode[], generate?: GenerateMethod) {
  let code = ''
  if (generate) {
    code = generate(traverseCode)
  }
  else {
    traverseCode.forEach((i) => {
      code += `export const ${transformName(i[0])} = {
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
