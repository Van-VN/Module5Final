import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TourService from "../services/tour.service";
import { Link } from "react-router-dom";
import { useField, useFormik } from "formik";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditTour = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [updateData, setUpdateData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getTour();
  }, []);

  const formUpdate = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      const data = {
        title: values.title,
        price: values.price,
        description: values.description,
      };
      console.log(data);
        TourService.editTour(id, data);
        navigate('/')
    },
  });

  const getTour = () => {
    TourService.tourDetail(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      {data && (
        <>
          <h1>Chỉnh sửa tour {data.title}</h1>
          <Stack component={"form"} onSubmit={formUpdate.handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={formUpdate.handleChange}
              value={formUpdate.values.title}
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "40px",
                color: "black",
              }}
              placeholder={data.title}
            />
            <br />
            <input
              type="number"
              name="price"
              onChange={formUpdate.handleChange}
              value={formUpdate.values.price}
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "40px",
                color: "black",
              }}
              placeholder={data.price}
            />
            <br />
            <input
              type="text"
              name="description"
              onChange={formUpdate.handleChange}
              value={formUpdate.values.description}
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "40px",
                color: "black",
              }}
              placeholder={data.description}
            />
            <button type="submit" style={{ marginTop: "10px" }}>
              Cập nhật
            </button>
          </Stack>
        </>
      )}
    </div>
  );
};

export default EditTour;
