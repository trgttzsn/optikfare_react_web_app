import { Categories, CategoryDispatch } from './../../types/category';
import api from '../../utils/api';

export const getCategory = (tag: string) => async (dispatch: CategoryDispatch) => {
    dispatch({ type: "GET_CATEGORY_START" });
    try {
      const response = await api().get<Categories>("/category?tag="+tag);
      dispatch({ type: "GET_CATEGORY_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_CATEGORY_ERROR" });
    }
  };