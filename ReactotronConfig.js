import Reactotron from 'reactotron-react-native';

Reactotron.configure({ host: '192.168.56.1' })
  .useReactNative()
  .connect();
