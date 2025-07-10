import React from 'react'
import Layout from '../../components/layout/Layout'
import  Form  from '../blog/components/form/Form'

const AddBlog = () => {
  return (
    <>
    
    <Layout>    
    <Form type="Create"/> {/*// This prop indicates whether the form is for adding or editing a blog post */}


    </Layout>
    </>
  )
}

export default AddBlog