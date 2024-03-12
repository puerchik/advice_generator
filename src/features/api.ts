import axios from "axios";
import { AdviceGenerator } from "../store/adviceGeneratorSlice";

export const instance = axios.create({
  baseURL: "https://api.adviceslip.com/advice",
});

export const getAdvice = () => instance.get<Response>("");

// types

type Response = {
  slip: AdviceGenerator;
};
