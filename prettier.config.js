module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
  ],
};
