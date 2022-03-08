import { Testimony } from "models";
import axios from "axios";

export const TestimonyService = {
  // find all testimonies data
  findAllTestimonies: async (): Promise<Testimony[]> => {
    const testimonyData = await axios.get<Testimony[]>("/testimony");
    return testimonyData.data;
  },
};
