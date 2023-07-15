import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./projectList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProject,
  deleteProject,
} from "../../actions/projectAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PROJECT_RESET } from "../../constants/projectConstants";

const ProjectList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, projects } = useSelector((state) => state.projects);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.project
  );

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Project Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_PROJECT_RESET });
    }

    dispatch(getAdminProject());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Project ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    // {
    //   field: "stock",
    //   headerName: "Stock",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.3,
    // },

    // {
    //   field: "price",
    //   headerName: "Price",
    //   type: "number",
    //   minWidth: 270,
    //   flex: 0.5,
    // },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
           
            <Button
              onClick={() =>
                deleteProjectHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  projects &&
    projects.forEach((item) => {
      rows.push({
        id: item._id,
        // stock: item.Stock,
        // price: item.price,
        name: item.name,
      });
    });

  return (
    <div className="class-for-margin-top">
      
    <Fragment>
      <MetaData title={`ALL PROJECTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="projectListContainer">
          <h1 id="projectListHeading">ALL PROJECTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="projectListTable"
            autoHeight
          />
        </div>
      </div>

    </Fragment>
    </div>
  );
};

export default ProjectList;
