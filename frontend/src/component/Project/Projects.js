import React, { Fragment, useEffect, useState } from "react";
import "./Projects.css";
import portf from "../../images/portfolio.jpg"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProject } from "../../actions/projectAction";
import Loader from "../layout/Loader/Loader";
import ProjectCard from "../Home/ProjectCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const Projects = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    projects,
    loading,
    error,
    projectsCount,
    resultPerPage,
    filteredProjectsCount,
  } = useSelector((state) => state.projects);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProjectsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProject(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="container-fluid p-0 m-0"> 
          <MetaData title="PROJECTS -- ECOMMERCE" />
          <div className="portfolio-header-image">
             <h1 className="portfolio-main-heading">PORTFOLIO</h1>
              <img src={portf} alt="portfolio-image"/>
           </div>

          <div className="projects container">
            {projects &&
              projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
          </div>

          
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={projectsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Projects;
