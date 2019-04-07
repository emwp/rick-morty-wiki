module.exports = {
  plugins: [['relay', { schema: 'schema.graphql' }], '@babel/transform-runtime'],
  presets: ['module:metro-react-native-babel-preset'],
};
