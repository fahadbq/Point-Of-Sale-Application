import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asyncAddBills } from "../../redux/actions/billsAction";

import { FaTrashAlt } from "react-icons/fa";

const BillForm = (props) => {
  //Adding lineItems to input fields
  const [inputFields, setInputFields] = useState([
    { product: "", quantity: 1 },
  ]);

  const dispatch = useDispatch();

  const { customers, products } = useSelector((state) => state); //Reading state variables from Redux

  //Reading input values dynamically
  const handleDynamicChange = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { product: "", quantity: 1 }]);
  };

  const handleRemoveField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const resetField = () => {
    setInputFields([{ product: "", quantity: 0 }]);
  };

  //Formik
  const initialValues = {
    date: "",
    customer: "",
  };

  const validationSchema = yup.object({
    date: yup.string().required("Date is required!"),
    customer: yup.string().required("Select a customer!"),
  });

  return (
    <div
      className="border shadow-sm p-3 mb-5 bg-body rounded"
      style={{
        position: "absolute",
        top: "105px",
        right: "50px",
        width: "500px",
        height: "480px",
      }}
    >
      <h4> Create a Bill </h4> <hr />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          values.lineItems = [...inputFields]; // Creating new property before Submitting a form.
          dispatch(asyncAddBills(values, resetField, resetForm));
        }}
      >
        {({ errors, touched }) => (
          <Form className="row g-3 needs-validation" noValidate>
            <div className="col-md-6">
              <Field type="date" name="date" className="form-control" />

              {errors.date && touched.date ? (
                <div>
                  {" "}
                  <span className="form-text" style={{ color: "red" }}>
                    {" "}
                    {errors.date}{" "}
                  </span>{" "}
                </div>
              ) : null}
            </div>

            <div className="col-md-6">
              <Field as="select" name="customer" className="form-select">
                <option value=""> Select Customer </option>

                {customers.data.map((cust) => {
                  return (
                    <option key={cust._id} value={cust._id}>
                      {" "}
                      {cust.name}{" "}
                    </option>
                  );
                })}
              </Field>
              {errors.customer && touched.customer ? (
                <div>
                  {" "}
                  <span className="form-text" style={{ color: "red" }}>
                    {" "}
                    {errors.customer}{" "}
                  </span>{" "}
                </div>
              ) : null}
            </div>

            <div
              style={{
                height: "18rem",
                overflowX: "scroll",
                display: "block",
              }}
            >
              {inputFields.map((field, index) => {
                return (
                  <div key={index} className="row g-3">
                    <div className="col-md-6">
                      <select
                        value={field.product}
                        name="product"
                        onChange={(e) => handleDynamicChange(index, e)}
                        className="form-select"
                      >
                        <option value=""> Select Product </option>

                        {products.data.map((prod) => {
                          return (
                            <option key={prod._id} value={prod._id}>
                              {" "}
                              {prod.name}{" "}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col-md-2">
                      <input
                        type="number"
                        value={field.quantity}
                        name="quantity"
                        onChange={(e) => handleDynamicChange(index, e)}
                        min="1"
                        max="99"
                        className="form-control"
                        style={{ width: "70px" }}
                      />
                    </div>

                    <div className="col-md-2">
                      <input
                        type="button"
                        value="Add"
                        onClick={() => {
                          handleAddField();
                        }}
                        className="btn btn-success"
                      />
                    </div>

                    <div className="col-md-2">
                      {index ? (
                        <button
                          type="button"
                          onClick={() => handleRemoveField(index)}
                          className="btn btn-danger"
                        >
                          {" "}
                          <FaTrashAlt />
                        </button>
                      ) : null}
                    </div>
                  </div>
                );
              })}{" "}
              <br />
            </div>

            <button type="submit" className="btn btn-primary btn-sm d-grid">
              {" "}
              Submit{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BillForm;
