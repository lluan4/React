/**
 * Converte a primeira letra de uma cadeia em letras maiúsculas.
 *
 * @param { string } text - Texto a ser convertido.
 *
 * @return { string } Texto convertido com a primeira letra Maíuscula. Exemplo: 'texto' = 'Texto'
 */
export function firstLetterUpperCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Gera um ID de controle baseado no rótulo.
 *
 * @param { string } label -  rótulo
 *
 * @return { string } Exemplo: label = "exemplo" // return "validationExemplo"
 */
export function controlIdGenerator(label) {
  return `validation${firstLetterUpperCase(label)}`;
}

/**
 * Verificações feitas:
 * Se não é vazio &
 * Se não começa com espaço &
 * Se não contem números
 *
 * @param { string } text - Texto a validar
 *
 * @return { boolean }
 */
export function isTextValid(text) {
  return !isEmpty(text) && !isFirstEmpty(text) && !hasNumber(text);
}

/**
 * Verifica se uma cadeia está vazia
 *
 * @param { string } text - Texto a validar
 *
 * @return { boolean }
 */
export function isEmpty(text) {
  return text.trim() === '';
}

/**
 * Verifica se o primeiro caracter de um texto é vazio
 *
 * @param { string } text - Texto a validar
 *
 * @return { boolean }
 */
export function isFirstEmpty(text) {
  return text[0] === ' ';
}

/**
 * Verifica se uma cadeia contém um número
 *
 * @param text - Texto a validar
 *
 * @return { boolean } - True: Contém números
 */
export function hasNumber(text) {
  return text && /\d/g.test(text);
}

/**
 * Adiciona um id e um valor as equipes
 *
 * @param { [string] } teamsOptions - Array de equipes
 *
 * @returns {{
 *   id: number,
 *   index: string,
 *   team: string
 * }}  Um objeto com id, value e team
 */
export function getTeams(teamsOptions) {
  const teamsRepository = {
    teams: [],
  };
  teamsOptions.forEach((team, index) => {
    team === 'Escolha o Time'
      ? teamsRepository.teams.push({ id: index, value: '', team })
      : teamsRepository.teams.push({ id: index, value: team, team });
  });

  return teamsRepository;
}

/**
 * Compara duas strings
 *
 * @param text1 - A primeira cadeia para comparar.
 * @param text2 - A segunda cadeia para comparar.
 *
 * @return { boolean } Verdadeiro se as cordas são iguais falsos caso contrário
 */
export function compareStrings(text1, text2) {
  return text1.toLowerCase() === text2.toLowerCase();
}

/**
 * Determina se duas expressões são ou não equivalentes.
 *
 * @param { boolean }firstExpression  - A primeira expressão para comparar pode ser nula.
 * @param { string }logicalOperator - O operador lógico para comparar. (and, or ou xor)
 * @param { boolean }secondExpression - A segunda expressão para comparar pode ser nula.
 *
 * @return { boolean } Verdadeiro se o resultado da operação é equivalente
 */
export function expressionResult(
  firstExpression,
  logicalOperator,
  secondExpression
) {
  // Retorna verdadeiro se o operador lógico for operador lógico.
  switch (logicalOperator) {
    case 'and':
      return firstExpression && secondExpression;
    case 'or':
      return firstExpression || secondExpression;
    case 'xor':
      return (
        (firstExpression && !secondExpression) ||
        (!firstExpression && secondExpression)
      );
    default:
      return false;
  }
}
