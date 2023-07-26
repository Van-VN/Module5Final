import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourService from "../../services/tour.service";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "react-bootstrap/Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AllTour = () => {
  const [tours, setTours] = useState([]);
  //   const [open, setOpen] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    allTour();
  }, []);

  const allTour = () => {
    TourService.displayTour()
      .then((res) => {
        setTours(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function handleEdit(id) {
    console.log("Edit" + id);
  }

  function handleDelete(id) {
    console.log(id);
    const newTours = tours.data.filter((obj) => {
      return obj.id !== id;
    });
    setTours({ ...tours, data: newTours });
  }

  return (
    <div style={{ padding: "0 20px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <h1>All Tour List</h1>
        <Link to={'/add'}>
          <Button
            variant="success"
            style={{ padding: "5px", height: "40px" }}
            onClick={handleShow}
          >
            Thêm Tour
          </Button>
        </Link>
      </Stack>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Giá</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {tours && tours.data
            ? tours.data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <Button
                      onClick={() => handleEdit(item.id)}
                      variant="warning"
                      style={{ marginRight: "10px" }}
                    >
                      <Link to={`/edit/${item.id}`}>Edit</Link>
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default AllTour;
