import AdminSidebar from "@/components/AdminSidebar";
import JobListCrads from "./components/JobsList";
import CreateJobPost from "./components/JobPost";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "@/components/ui/deleteModal";
import { setDeletingJobPost } from "@/features/jobs";
import { useEffect } from "react";
import { getAllJobsData } from "@/utils/jobsUtils";
import { RootState } from "@/store/store";
import axios from "axios";
import { setPopUpMessage } from "@/features/commonProps";

const JobListPage = () => {
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const { accessToken } = useSelector((state: RootState) => state.adminData);
  const { postingJob, deletingJobPost, allJobs } = useSelector(
    (state: RootState) => state.jobData,
  );
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/jobs/delete-job/${deletingJobPost?.jobData?._id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (response) {
        dispatch(
          setDeletingJobPost({
            deleteJobPost: false,
            isDeleting: false,
            jobData: null,
          }),
        );
        dispatch(
          setPopUpMessage({
            isOpen: true,
            message: "Job posting deleted successfully!",
            type: "success",
          }),
        );
        getAllJobsData(baseUrl, accessToken, dispatch);
      }
      // Refresh jobs
    } catch (error) {
      console.error("Delete failed", error);
      dispatch(
        setPopUpMessage({
          isOpen: true,
          message: "Failed to delete job posting",
          type: "error",
        }),
      );
    }
  };
  const handleCloseModel = () => {
    dispatch(
      setDeletingJobPost({
        deleteJobPost: false,
        isDeleting: false,
        jobData: null,
      }),
    );
  };
  const handleDeleteJob = (jobPost) => {
    dispatch(
      setDeletingJobPost({
        deleteJobPost: true,
        isDeleting: false,
        jobData: jobPost,
      }),
    );
  };
  useEffect(() => {
    getAllJobsData(baseUrl, accessToken, dispatch);
  }, []);
  return (
    <div className="w-full h-screen flex overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Content */}
      <div className="flex-1 h-full overflow-y-auto ">
        {postingJob?.isOpen ? (
          <CreateJobPost />
        ) : (
          <JobListCrads jobs={allJobs} onDelete={handleDeleteJob} />
        )}
      </div>
      <DeleteModal
        isOpen={deletingJobPost?.deleteJobPost}
        onClose={handleCloseModel}
        onConfirm={() => handleDelete()}
        title="Delete Job Posting"
        description={deletingJobPost?.jobData?.title}
        isLoading={deletingJobPost?.isDeleting}
      />
    </div>
  );
};

export default JobListPage;
