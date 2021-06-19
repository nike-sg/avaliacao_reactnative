import { Dimensions, StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
  },
  input: {
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: Dimensions.get('screen').width - 40,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
    marginLeft: 10,
    tintColor: '#2E8EE7'
  },
  btn: {
    backgroundColor: '#2E8EE7',
    borderRadius: 5,
    padding: 10
  },
  btnText: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  btnMuted: {
    marginTop: 20,
    fontSize: 20,
    bottom: 0,
  }

});