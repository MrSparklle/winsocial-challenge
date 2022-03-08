import { Address } from "models";
import axios from "axios";

export const AddressService = {
  // find all adresses data
  findAllAddress: async (): Promise<Address[]> => {
    const addressData = await axios.get<Address[]>("/address");
    return addressData.data;
  },
};
