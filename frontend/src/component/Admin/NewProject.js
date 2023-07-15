import React, { Fragment, useEffect, useState } from "react";
import "./newProject.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProject } from "../../actions/projectAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_PROJECT_RESET } from "../../constants/projectConstants";

const NewProject = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProject);

  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Project Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PROJECT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProjectSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    // myForm.set("description", description);
    // myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProject(myForm));
  };

  const createProjectImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Project" />
      <div className="class-for-margin-top">
      <div className="dashboard">
        <SideBar />
        <div className="newProjectContainer">
          <form
            className="createProjectForm"
            encType="multipart/form-data"
            onSubmit={createProjectSubmitHandler}
          >
            <h1>Create Project</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Project Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div id="createProjectFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProjectImagesChange}
                multiple
              />
            </div>

            <div id="createProjectFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Project Preview" />
              ))}
            </div>

            <Button
              id="createProjectBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default NewProject;
