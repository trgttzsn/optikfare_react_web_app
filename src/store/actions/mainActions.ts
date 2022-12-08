import api from '../../utils/api';
import { Main, MainDispatch } from './../../types/main';

export const getMain = () => async (dispatch: MainDispatch) => {
    dispatch({ type: "GET_MAIN_START" });
    try {
      const response = await api().get<Main>("/main");
      dispatch({ type: "GET_MAIN_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_MAIN_ERROR" });
    }
  };