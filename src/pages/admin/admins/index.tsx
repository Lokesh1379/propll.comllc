import AdminSidebar from "@/components/AdminSidebar";
import AdminCards from "./components/AdminList";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "@/components/ui/deleteModal";
import { setDeletingAdmin } from "@/features/admin";
import { setPopUpMessage } from "@/features/commonProps";
import { RootState, AppDispatch } from "@/store/store";
import { useEffect } from "react";
import { getAllAdmins } from "@/utils/adminUtils";
import axios from "axios";

const AdminCreation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { deletingAdmin, accessToken, allAdmins } = useSelector(
    (state: RootState) => state.adminData,
  );

  const { baseUrl } = useSelector((state: RootState) => state.commonProps);

  const handleCloseModal = () => {
    dispatch(
      setDeletingAdmin({
        deleteAdmin: false,
        isDeleting: false,
        adminData: null,
      }),
    );
  };

  const handleDeleteAdmin = (adminData: Admin) => {
    dispatch(
      setDeletingAdmin({
        deleteAdmin: true,
        isDeleting: false,
        adminData,
      }),
    );
  };

  const handleConfirm = async () => {
    if (!deletingAdmin?.adminData?._id) return;

    try {
      dispatch(
        setDeletingAdmin({
          ...deletingAdmin,
          isDeleting: true,
        }),
      );

      const response = await axios.delete(
        `${baseUrl}/api/admin/delete-admin/${deletingAdmin.adminData._id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.status === 200) {
        dispatch(
          setPopUpMessage({
            isOpen: true,
            type: "success",
            message: "Admin deleted successfully!",
          }),
        );

        handleCloseModal();

        // 🔥 Refresh admin list after delete
        getAllAdmins(baseUrl, accessToken, dispatch);
      }
    } catch (error: any) {
      console.error("Error deleting admin:", error);

      if (error?.response?.status === 403) {
        dispatch(
          setPopUpMessage({
            isOpen: true,
            type: "error",
            message: "Superadmin cannot be deleted",
          }),
        );
      } else {
        dispatch(
          setPopUpMessage({
            isOpen: true,
            type: "error",
            message: "Failed to delete admin.",
          }),
        );
      }
    } finally {
      dispatch(
        setDeletingAdmin({
          deleteAdmin: false,
          isDeleting: false,
          adminData: null,
        }),
      );
    }
  };

  // ✅ Fetch admins only when baseUrl or token changes
  useEffect(() => {
    if (baseUrl && accessToken) {
      getAllAdmins(baseUrl, accessToken, dispatch);
    }
  }, [baseUrl, accessToken, dispatch]);

  return (
    <div className="w-full h-screen flex overflow-hidden bg-slate-50">
      <AdminSidebar />

      <div className="flex-1 h-full mt-20 md:mt-0 overflow-y-auto px-3 md:p-6">
        <AdminCards admins={allAdmins} onDelete={handleDeleteAdmin} />
      </div>

      <DeleteModal
        isOpen={Boolean(deletingAdmin?.deleteAdmin)}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        title="Delete Admin"
        description={
          deletingAdmin?.adminData
            ? `Are you sure you want to delete ${deletingAdmin.adminData.name}?`
            : ""
        }
        isLoading={Boolean(deletingAdmin?.isDeleting)}
      />
    </div>
  );
};

export default AdminCreation;
