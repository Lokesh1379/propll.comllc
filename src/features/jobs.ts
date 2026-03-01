import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobState {
  postingJob: {
    isOpen: false;
    mode: "create";
    job: null;
  };
  deletingJobPost: {
    deleteJobPost: boolean;
    isDeleting: boolean;
    jobData: null;
  };
  allJobs: any[]; // You can replace 'any' with a more specific type based on your job data structure
  jobDetails: {};
}

const initialState: JobState = {
  postingJob: { isOpen: false, mode: "create", job: null },
  deletingJobPost: {
    deleteJobPost: false,
    isDeleting: false,
    jobData: null,
  },
  allJobs: [],
  jobDetails: {},
};

const jobsSlice = createSlice({
  name: "jobPostings",
  initialState,
  reducers: {
    setPostingJob: (state, action: PayloadAction<any>) => {
      state.postingJob = action.payload;
    },
    setDeletingJobPost: (state, action: PayloadAction<any>) => {
      state.deletingJobPost = action.payload;
    },
    setAllJobs: (state, action: PayloadAction<any[]>) => {
      state.allJobs = action.payload;
    },
    setJobDetails: (state, action: PayloadAction<any>) => {
      state.jobDetails = action.payload;
    },
  },
});

export const { setPostingJob, setDeletingJobPost, setJobDetails, setAllJobs } =
  jobsSlice.actions;

export default jobsSlice.reducer;
