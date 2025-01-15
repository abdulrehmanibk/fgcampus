import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseData } from "./CoursesData";
import Consultation from "../../Components/Consultation/Consultation";
import Error from "../../Components/Error/Error";
import CoursesPage from "./CoursesPage";

const Courses = () => {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const product = CourseData.find((item) => item.id == params.id);

    setSelectedProduct(product);
  }, [params.id]);

  return (
    <>
      {!selectedProduct ? (
        <Error />
      ) : (
        <>
          <CoursesPage selectedProduct={selectedProduct}/>
          <Consultation />
        </>
      )}
    </>
  );
};

export default Courses;
