export function dataJsonParaDataObjeto(jsonDate: string): Date {
  const [ano, mes, dia] = jsonDate.split("-").map(Number);
  return new Date(ano, mes - 1, dia)
}

export function dataAtualJSON(): string {
  const hoje = new Date();
  const yyyy = hoje.getFullYear();
  const mm = String(hoje.getMonth() + 1).padStart(2, '0'); // meses começam em 0
  const dd = String(hoje.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

export function dataJsonParaDataExtensa(jsonDate: string | null): string {
  if (jsonDate) {
    return dataJsonParaDataObjeto(jsonDate).toLocaleDateString('pt-BR', { dateStyle: 'full' });
  }
  return ''
}

export function dataApiParaDataExtensa(dataAPI: string | Date | undefined): string {
  if (typeof dataAPI === 'string') {
    return new Date(dataAPI).toLocaleDateString('pt-BR', { dateStyle: 'full' });
  }
  return ''
}