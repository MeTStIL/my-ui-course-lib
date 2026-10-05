const config = {
  trailingComma: 'all',
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'consistent',
  printWidth: 120,
  overrides: [
    { files: '*.scss', options: { parser: 'scss', singleQuote: false } },
    { files: '*.css', options: { parser: 'css', singleQuote: false } }
  ]
};

export default config;