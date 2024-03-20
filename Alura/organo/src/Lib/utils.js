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
  return text[0].trim() === '';
}

/**
 * Verifica se uma cadeia contém um número
 *
 * @param text - Texto a validar
 *
 * @return { boolean } - True: Contém números
 */
export function hasNumber(text) {
  return /\d/g.test(text);
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
