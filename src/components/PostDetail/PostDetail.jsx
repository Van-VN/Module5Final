import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TourService from "../../services/tour.service";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getTour();
  }, []);

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
          <h1>Chi tiết Tour</h1>
          <h4>Tour du lịch {data.title}</h4>
          <p>Giá: {data.price}</p>
          <br />
          <p>Mô tả: {data.description}</p>
          <Link to={'/'}><button>Danh sách</button></Link>
        </>
      )}
    </div>
  );
};

export default PostDetail;
