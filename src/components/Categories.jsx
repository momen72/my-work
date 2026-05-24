import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Cards from './Cards'

export default function Categories() {
    const [categories, setCategories] = useState(null)
    const [loader, setLoader] = useState(false)

    function getCategories() {
        axios.get('https://ecommerce.routemisr.com/api/v1/categories',{
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then(function (res) {
                // console.log(res.data)
                setCategories(res.data)
                setLoader(true)
            }).catch(function (err) {
                console.log(err)
            }).finally(function(){
                setLoader(false)
            })
    }
useEffect(() => {
    getCategories()
}, [])

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center bg-[url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')] bg-cover bg-center bg-no-repeat">
            
            {categories? categories.map(cat => <Cards key={cat.id}/>) : loader }
        </div>
    )
}
