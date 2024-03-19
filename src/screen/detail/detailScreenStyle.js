import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  image: {
    width: '100%',
    height: 450,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inside: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {color: '#1f1f5d', fontSize: 22, width: '80%'},
  inside2: {flexDirection: 'row', gap: 10},
  authName: {color: 'black', fontSize: 17},
  star: {flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'},
  insideStar: {flexDirection: 'row', gap: 5},
  press: {flexDirection: 'row', gap: 5, fontSize: 16},
  addReview: {textDecorationLine: 'underline', color: 'black'},
  desc: {color: '#1f1f5d', fontSize: 18, marginTop: 10, marginBottom: 20},
  type: {color: 'black', fontSize: 15},
});
