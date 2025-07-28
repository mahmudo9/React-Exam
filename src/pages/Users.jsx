import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, ImageApi } from "./config/api";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
const Users = () => {
  const [data, setData] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [editId, setEditId] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const GetData = async () => {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const formik = useFormik({
    initialValues: {
      Name: "",
      Description: "",
      Images: null,
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Required"),
      Description: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.Name);
      formData.append("description", values.Description);
      if (values.Images) formData.append("Images", values.Images);

      try {
        await axios.post(Api, formData);
        GetData();
        resetForm();
        setOpenAdd(false);
      } catch (error) {
        console.error("Create Error:", error);
      }
    },
  });

  const formikEdit = useFormik({
    initialValues: {
      Name: "",
      Description: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await axios.put(Api, {
          id: editId,
          name: values.Name,
          description: values.Description,
        });
        GetData();
        setOpenEdit(false);
      } catch (error) {
        console.error("Update Error:", error);
      }
    },
  });

  const editData = async (id) => {
    try {
      await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`);
      GetData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`${Api}?id=${id}`);
      GetData();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setOpenAdd(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white"
      >
        ➕ Add User
      </button>

      {openAdd && (
        <div className="border p-4 bg-white max-w-md mb-6">
          <h2 className="mb-2 font-bold">Add User</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              name="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              placeholder="Name"
              className="border p-2 w-full mb-2"
            />
            <input
              name="Description"
              value={formik.values.Description}
              onChange={formik.handleChange}
              placeholder="Description"
              className="border p-2 w-full mb-2"
            />
            <input
              type="file"
              onChange={(e) =>
                formik.setFieldValue("Images", e.currentTarget.files[0])
              }
              className="mb-2"
            />
            <button type="submit" className="bg-green-500 text-white px-3 py-1">
              Submit
            </button>
          </form>
        </div>
      )}

      {openEdit && (
        <div className="border p-4 bg-white max-w-md mb-6">
          <h2 className="mb-2 font-bold">Edit User</h2>
          <form onSubmit={formikEdit.handleSubmit}>
            <input
              name="Name"
              value={formikEdit.values.Name}
              onChange={formikEdit.handleChange}
              className="border p-2 w-full mb-2"
            />
            <input
              name="Description"
              value={formikEdit.values.Description}
              onChange={formikEdit.handleChange}
              className="border p-2 w-full mb-2"
            />
            <button type="submit" className="bg-yellow-500 text-white px-3 py-1">
              Update
            </button>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">
                  {user.images?.[0]?.imageName ? (
                    <img
                      src={`${ImageApi}/${user.images[0].imageName}`}
                      alt="User"
                      className="w-12 h-12 object-cover"
                    />
                  ) : (
                    "—"
                  )}
                </td>
                <td className="border p-2">
                  <Link
                    to={`/user/${user.id}`}
                    className="text-blue-600 underline"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="border p-2">{user.description}</td>
                <td className="border p-2">
                  {user.isCompleted ? "✅ Active" : "❌ Inactive"}
                </td>
                <td className="border p-2 space-x-1">
                  <button
                    onClick={() => {
                      formikEdit.setValues({
                        Name: user.name || "",
                        Description: user.description || "",
                      });
                      setEditId(user.id);
                      setOpenEdit(true);
                    }}
                    className="px-2 py-1 bg-yellow-400 text-white"
                  >
                    <EditIcon/>
                  </button>
                  <button
                    onClick={() => deleteData(user.id)}
                    className="px-2 py-1 bg-red-500 text-white"
                  >
                    <Delete/>
                  </button>
                  <button
                    onClick={() => editData(user.id)}
                    className={`px-2 py-1 ${
                      user.isCompleted ? "bg-green-500" : "bg-gray-400"
                    } text-white`}
                  >
                    <Tooltip/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
