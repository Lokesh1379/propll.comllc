import { setAllJobs, setPostingJob } from "@/features/jobs";
import axios from "axios";

export const getAllJobsData = async (
  baseUrl: string,
  accessToken: string,
  dispatch,
) => {
  try {
    const response = await axios(`${baseUrl}/api/jobs/get-all-jobs`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      dispatch(setAllJobs(response.data.data));
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

export const customergetAllJobsData = async (baseUrl: string, dispatch) => {
  try {
    const response = await axios(`${baseUrl}/api/jobs/get-all-jobs`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(setAllJobs(response.data.data));
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

export const getJobById = async ({ dispatch, baseUrl, jobId }) => {
  try {
    const response = await axios(`${baseUrl}/api/jobs/get-job/${jobId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(
        setPostingJob({
          isOpen: true,
          mode: "update",
          job: response.data.data,
        }),
      );
    }
  } catch (error) {
    console.error("Error fetching job by id:", error);
  }
};
