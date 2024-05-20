import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image
} from "react-native";
import useForm from "./useForm";
import Styles from "./styles";
const Form = () => {
  const {
    data: { form, loading, params, navigation},
    method: { setForm, handleAddContact, handleUpdateContactById },
  } = useForm();
  if (loading) {
    return (
      <View style={Styles.loadingWrapper}>
        <ActivityIndicator size={50} color={"red"} />
      </View>
    );
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.headerWrapper}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require("./icCevronLeft.png")} style={Styles.headerIcon} />
        </TouchableOpacity>
       
      </View>
      <View style={Styles.contentWrapper}>
        <Text style={Styles.label}>
          First Name
        </Text>
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) =>
            setForm({ ...form, ["firstName"]: value.trim() })
          }
          value={form.firstName}
          placeholder="first name"
          keyboardType="default"
        />
         <Text style={Styles.label}>
          Last Name
        </Text>
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) =>
            setForm({ ...form, ["lastName"]: value.trim() })
          }
          value={form.lastName}
          placeholder="last name"
          keyboardType="default"
        />
         <Text style={Styles.label}>
          Age
        </Text>
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) => setForm({ ...form, ["age"]: value.trim() })}
          value={form.age}
          placeholder="age"
          keyboardType="numeric"
        />
         <Text style={Styles.label}>
          Photo
        </Text>
        <TextInput
          style={Styles.textInput}
          onChangeText={(value) =>
            setForm({ ...form, ["photo"]: value.trim() })
          }
          value={form.photo}
          placeholder="url photo"
          keyboardType="default"
        />
        <TouchableOpacity
          onPress={() =>
            params.action === "add"
              ? handleAddContact()
              : handleUpdateContactById()
          }
          style={Styles.btn}
        >
          <Text style={Styles.btnText}>
            {params.action === "add" ? "ADD" : "UPDATE"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Form;
