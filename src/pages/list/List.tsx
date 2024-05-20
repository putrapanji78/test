import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import Styles from "./styles";
import useList from "./useList";
const List = () => {
  const {
    data: { navigation, datas, isLoading },
    method: { handleDeleteContactById },
  } = useList();
  if (isLoading) {
    return (
      <View style={Styles.flexCenter}>
        <ActivityIndicator size={30} color={"red"} />
      </View>
    );
  }
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("form", { action: "add" })}
        style={Styles.btnAdd}
      >
        <Text style={Styles.add}>ADD</Text>
      </TouchableOpacity>
      <ScrollView style={{ flex: 1 }}>
        <View style={Styles.tableWrapper}>
          <View style={Styles.headerListWrapper}>
            <View style={Styles.headerWrapper}>
              <Text style={Styles.headerText}>First Name</Text>
            </View>
            <View style={Styles.headerWrapper}>
              <Text style={Styles.headerText}>Last Name</Text>
            </View>
            <View
              style={StyleSheet.flatten({
                ...Styles.headerWrapper,
                width: "13%",
              })}
            >
              <Text style={Styles.headerText}>Age</Text>
            </View>
            <View style={Styles.headerWrapper}>
              <Text style={Styles.headerText}>Photo</Text>
            </View>
            <View style={Styles.headerWrapper}>
              <Text style={Styles.headerText}>Action</Text>
            </View>
          </View>
          {datas.map((item: any, index: number) => (
            <View
              style={StyleSheet.flatten({
                ...Styles.rowListWrapper,
                backgroundColor: index % 2 === 0 ? "#F8F4E1" : "white",
              })}
              key={index}
            >
              <View style={StyleSheet.flatten(Styles.rowList)}>
                <Text style={Styles.rowText}>{item.firstName}</Text>
              </View>
              <View style={Styles.rowList}>
                <Text style={Styles.rowText}>{item.lastName}</Text>
              </View>
              <View
                style={StyleSheet.flatten({ ...Styles.rowList, width: "13%" })}
              >
                <Text style={Styles.rowText}>{item.age}</Text>
              </View>
              <View style={Styles.rowList}>
                <Image source={{ uri: item.photo }} style={Styles.photo} />
              </View>
              <View style={Styles.rowList}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("form", { id: item.id })}
                  style={Styles.updateBtn}
                >
                  <Text style={Styles.actionText}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleDeleteContactById(item.id)} style={Styles.deleteBtn}>
                  <Text style={Styles.actionText}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default List;
