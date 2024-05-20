import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getContactList } from "./redux/slice";
import { useCallback, useMemo } from "react";

const useList = () => {
  const {
    list: { data, isLoading },
  } = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const datas = useMemo(() => data?.list || [], [data]);
  const handleDeleteContactById = async (id: string) => {
    try {
      const response = await fetch(
        `https://contact.herokuapp.com/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("RES========", response.status)
      dispatch(getContactList());
      if (response.status === 200) {
        return await response.json();
      }
    } catch (err) {
      return err;
    }
  };
  const handleGetList = async () => {
    dispatch(getContactList());
  };
  useFocusEffect(
    useCallback(() => {
      handleGetList();
    }, [])
  );
  return {
    data: { isLoading, datas, navigation },
    method: {
      handleDeleteContactById
    },
  };
};
export default useList;
