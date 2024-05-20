import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  listWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingVertical: 8,
    paddingHorizontal: "4%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  list: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    width: "20%",
    textAlign: "center",
  },
  btnAdd: {
    padding: 6,
    width: "21.75%",
    backgroundColor: "#41B06E",
    alignSelf: "flex-end",
    marginRight: "4%",
    marginTop: 16,
    borderRadius: 8,
    marginBottom: 16
  },
  add: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  search: {
    width: "80%",
    height: 40,
    alignSelf: "center",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  delete: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  tableWrapper: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerListWrapper: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  headerWrapper:{
    width: "21.75%",
    alignSelf: "stretch",
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  headerText:{
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  rowListWrapper:{
    flex: 1, alignSelf: "stretch", flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    backgroundColor: "red"
  
  },
  rowList:{
    width: "21.75%",
    padding: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
  },
  rowText:{
    textAlign: "center",
    fontSize: 10,
  },
  photo:{
    width: "100%",
    height: 100,
    resizeMode: "contain"
  },
  updateBtn:{
    width: "100%",
    padding: 12,
    backgroundColor: "#003285",
    marginBottom: 10,
    borderRadius: 8
  },
  deleteBtn:{
    width: "100%",
    padding: 12,
    backgroundColor: "#EE4E4E",
    borderRadius: 8
  },
  actionText:{
    fontSize: 8,
    color: "white",
    fontWeight: "bold",
  }
});
export default Styles;
