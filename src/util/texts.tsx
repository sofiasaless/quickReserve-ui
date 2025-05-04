export function maiusculaParaRegular(palavra: string | undefined) {
  if (palavra) {
    return palavra.charAt(0).concat(palavra.toLowerCase().slice(1))
  }
  return ''
}