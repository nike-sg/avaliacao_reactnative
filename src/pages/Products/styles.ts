import { Dimensions, StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    height: Dimensions.get('screen').height
  },
  logoutBtn: {
    marginRight: 15,
    color: '#2E8EE7',
    padding: 10
  },
  product: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('screen').width - 40,
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  block: {
    width: '50%'
  },
  productName: {
    fontWeight: '600',
    color: '#2E8EE7',
    fontSize: 22
  },
  manufacturerName: {
    color: '#7B7B7B'
  },
  qtdTag:{
    color: '#7B7B7B',
  },
  qtdNumber:{
    fontWeight: '600'
  },
  priceTag: {
    textAlign: 'right',
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#2E8EE7',
    fontSize: 20
  },
  price: {
    textAlign: 'right',
    fontWeight: '700',
    color: '#7B7B7B',
    fontSize: 22,
  }
});