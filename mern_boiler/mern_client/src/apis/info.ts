import axios from "axios"
import { Info } from "../types/info"

export const getInfos = () => axios.get<{ message: string, data: Info[] }>('/api/infos')

export const creatInfo = (info: Info) => axios.post<Info, { message: string }>
  ('/api/infos', info);