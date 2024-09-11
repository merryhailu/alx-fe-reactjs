import React, { useState } from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddRecipeForm = () => {
  const [errors, setErrors] = useState({});

  const initialValues = {
    title: '',
    ingredients: '',
    steps: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    ingredients: Yup.string().required('Ingredients are required'),
    steps: Yup.string().required('Steps are required'),
  });

  const handleSubmit = (values, { setErrors }) => {
    const newErrors = {};
    
    if (!values.title) {
      newErrors.title = 'Title is required';
    }
    if (!values.ingredients) {
        newErrors.ingredients = 'Ingredient is required';
      }
      if (!values.steps) {
        newErrors.steps = 'Step is required';
      }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Field name="title" type="text" placeholder="Title" />
      <ErrorMessage name="title" component="div" className="text-red-500" />
     
      <Field name="ingredients" type="text" placeholder="Ingredients" />
      <ErrorMessage name="ingredients" component="div" className="text-red-500" />

      <Field name="steps" type="text" placeholder="Steps" />
      <ErrorMessage name="steps" component="div" className="text-red-500" />

      <button type="submit">Submit</button>
    </Form>
  );
};

export default AddRecipeForm;