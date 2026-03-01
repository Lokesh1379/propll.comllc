import { setAllAdmins } from "@/features/admin";
import axios from "axios";

export const getAllAdmins = async (
  baseUrl: string,
  accessToken: string,
  dispatch,
) => {
  try {
    const response = await axios(`${baseUrl}/api/admin/get-all-admins`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response) {
      dispatch(setAllAdmins(response.data.data));
    }
  } catch (error) {
    console.error("Error fetching admins:", error);
  }
};
