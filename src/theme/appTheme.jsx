import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  maninResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 20,
    textAlign: 'right',
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#2D2D2D',
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 35,
    color: 'white',
    fontWeight: '400',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
});
