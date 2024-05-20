import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useNavigation, useRoute } from "@react-navigation/native";

const useForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { params } = useRoute<any>();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
  });
  const [loading, setLoading] = useState(false);

  const handleGetContactById = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://contact.herokuapp.com/contact/${id}`,
        {
          method: "GET",
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        if (json) {
          const { firstName, lastName, age, photo } = json.data;
          
          setForm({
            firstName,
            lastName,
            age: String(age),
            photo,
          });
        }
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      return err;
    }
  };
  const handleUpdateContactById = async () => {
    try {
      const {firstName, lastName, age, photo} = form
      setLoading(true)
      const response = await fetch(
        `https://contact.herokuapp.com/contact/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            firstName,
            lastName,
            age: Number(age),
            photo,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || 201) {
        setLoading(false)
        navigation.goBack()
      }

    } catch (err) {
      setLoading(false)
      return err;
    }
  };
  
  const handleAddContact = async () => {
    try {
      const { firstName, lastName, age, photo } = form;
      setLoading(true);
      const response = await fetch(`https://contact.herokuapp.com/contact`, {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          age: Number(age),
          photo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (response.status === 201 || 200) {
        navigation.goBack();
      }
    } catch (err) {
      setLoading(false);
      return err;
    }
  };
  useEffect(() => {
    if (params.id) {
      handleGetContactById(params.id);
    }
  }, [params.id]);
  return {
    data: {
      form,
      loading,
      params,
      navigation
    },
    method: {
      setForm,
      handleAddContact,
      handleUpdateContactById,
    },
  };
};
export default useForm;
