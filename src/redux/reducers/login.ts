import { CONSTANT } from "../constant";

const initState = 0

export default function loginReducer(loginState = initState, action: any) {
  const {type, data} = action
  switch (type) {
    case CONSTANT:
      return loginState + data
    default:
      return loginState  
  }
}