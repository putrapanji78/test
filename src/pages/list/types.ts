export interface IList {
    id: number
    name: string;
    province:{
        id: string
        name: string
    }
   
    status: string;
  }
  
export interface ListsState {
  data:{list:[]}
  isLoading: boolean
  isError: boolean
  errMsg: null | string
  }