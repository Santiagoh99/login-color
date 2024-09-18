import { StyleSheet } from 'react-native';

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export const stylesColor = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  colorBox: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  colorText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});