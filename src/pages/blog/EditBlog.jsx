import React from 'react'
import Form from './components/form/Form'
import Layout from '../../components/layout/Layout'

const EditBlog = () => {
  return (
    <>
    <Layout>
        <Form type="Edit"/>  {/* This prop indicates whether the form is for adding or editing a blog post */}
                              {/* The type prop is used to differentiate between creating and editing a blog post */}
       
        </Layout>
    </>
  )
}

export default EditBlog