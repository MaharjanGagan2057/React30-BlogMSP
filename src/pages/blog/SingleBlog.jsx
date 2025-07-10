import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
  return (
   <Layout>

<div class="bg-gray-100 dark:bg-gray-00  h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 border-2 border-gray-400 ">
                    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uZXl8ZW58MHx8MHx8fDA%3D" alt="Product Image"/>
                </div>
                <div class="flex -mx-2 mb-4">
                     <div class="w-1/2 px-2">
                     <Link to="/blog/edit"> <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button></Link>
                    </div>
                  
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4 dark:text-black">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-black mb-2">Blog Title</h2>
                <p class="text-gray-600text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 ">Catagory:</span>
                        <span class=" text-gray-600 "> Finance</span><br />
                        <span class=" font-bold text-gray-600">Author:</span>
                        <span class=" text-gray-600"> Ashmita Maharjan</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700">Publish At:</span>
                        <span class="text-gray-600"> 1990/07/23</span>
                    </div>
                </div>
                
                
                <div>
                    <span class="font-bold text-gray-700">Product Description:</span>
                    <p class="text-gray-600 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

   </Layout>
    
  )
}

export default SingleBlog