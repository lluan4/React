module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [0], // Desativar a restrição de extensão de arquivo JSX
    'react/state-in-constructor': [0], // Desativar a exigência de estados no construtor
    'react/no-unused-state': [0], // Desativar a verificação de estados não utilizados
    'react/no-undef': [0], // Desativar a verificação de variáveis não definidas
    'react/jsx-props-no-spreading': [0], // Desativar a verificação de propagação de props JSX
    'jsx-a11y/control-has-associated-label': [0], // Desativar a verificação de etiquetas associadas
  },
};
