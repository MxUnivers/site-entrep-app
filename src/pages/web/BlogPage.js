import React from 'react'
import BlogActu from '../../components/web/Blog/BlogActu'
import BlogNav from '../../components/web/Blog/BlogNav'
import Footer from '../../components/web/Footer'
import RedirectContact from '../../components/web/RedirectContact'

const BlogPage = () => {
    return (
        <div>
            <BlogNav />
            <BlogActu />
            <RedirectContact />
            <Footer />
        </div>
    )
}

export default BlogPage