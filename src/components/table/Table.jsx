import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Glide app",
      img: "https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_960_720.jpg",
      customer: "Virginie Grimaldi",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Author website",
      img: "https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_960_720.jpg",
      customer: "Agnès Ledig",
      date: "1 March",
      amount: 90,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "MySQL database",
      img: "https://cdn.pixabay.com/photo/2016/03/04/12/20/server-1235959__340.jpg",
      customer: "Sophie Tal Men",
      date: "1 March",
      amount: 100,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Firebase authentification",
      img: "https://cdn.pixabay.com/photo/2019/10/20/08/32/smartphone-4562985__340.jpg",
      customer: "Anouk Langel",
      date: "6 April",
      amount: 200,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Author website",
      img: "https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_960_720.jpg",
      customer: "Virginie Despentes",
      date: "5 March",
      amount: 90,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2642655,
      product: "Author website",
      img: "https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_960_720.jpg",
      customer: "Jenny Colgan",
      date: "1 March",
      amount: 90,
      method: "Online",
      status: "Canceled",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellwrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
