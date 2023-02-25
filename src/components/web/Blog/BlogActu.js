import React, { useEffect, useState } from 'react'
import { LoadAllBlog } from '../../../actions/BlogAction';
import { LocaValue, routing } from '../../../configurations/Local/LocalValue'

const BlogActu = () => {
    const [BlogList, setBlogList] = useState([]);
    useEffect(() => {
        LoadAllBlog(setBlogList);
    }, [])

    return (
        <section class="blog-area ptb-140 bg-1">
            <div class="container">
                <div class="row">
                    {
                        BlogList && BlogList.length > 0 ?
                            (
                                BlogList.map((item) => {
                                    return (
                                        <div class="col-md-4 col-sm-6 col-xs-12 col">
                                            <div class="blog-wrap mb-30">
                                                <div class="blog-img">
                                                    <img src={item.coverPicture} alt="" />
                                                </div>
                                                <div class="blog-content wow fadeInUp">
                                                    <div class="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i class="fa fa-hour"></i> {item.datesave} </a></li>
                                                            <li><a href="#"><i class="fa fa-day"></i> {item.hoursave} </a></li>
                                                            {/*
                                                            <li><a href="#"><i class="fa fa-heart"></i> 5 Love</a></li>
                                                         */}
                                                        </ul>
                                                    </div>
                                                    <h3><a href={`/${routing.blog}/:${item._id}`}  
                                                    onClick={()=>{
                                                        localStorage.setItem(LocaValue.idblog, item._id);
                                                        localStorage.setItem(LocaValue.contentblog, item.content);
                                                    }}
                                                    >{item.name}</a></h3>
                                                    <p>{item.description}</p>
                                                    <a href={`/${routing.blog}/${item._id}`} class="btn btn-default btn_font_16" onClick={()=>{
                                                        localStorage.setItem(LocaValue.idblog, item._id);
                                                        localStorage.setItem(LocaValue.contentblog, item.content);
                                                    }}>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                            :
                            <div>
                                Acun article en vue
                            </div>
                    }

                    <div class="col-xs-12">
                        <div class="pagination-wrap mt-50 wow fadeInUp">
                            <ul>
                                <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href=""><i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogActu