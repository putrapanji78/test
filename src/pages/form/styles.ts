import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentWrapper:{
    width: "100%",
    paddingHorizontal: "4%",
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  textInput: {
    width: '100%',
    alignSelf: "center",
    height: 40,
    margin: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  provinceWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statusWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 48,
    backgroundColor: "#41B06E",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 12,
  },
  btnText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  headerWrapper:{
    backgroundColor: "black",
    padding: 12,
    width: "100%",
    marginBottom: 16
  },
  headerIcon:{
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  label:{
    fontSize: 14,
    color: "black",
  }
});
export default Styles;
