import React, { useEffect, useState } from 'react'
import { LoadBlogId } from '../../actions/BlogAction'
import { LoadSolutionId } from '../../actions/SolutionAction'
import Footer from '../../components/web/Footer'
import RedirectContact from '../../components/web/RedirectContact'
import SingleBlogNav from '../../components/web/SingleBlog/SingleBlogNav'
import SolutionNav from '../../components/web/Solutions/SolutionNav'
import { LocaValue } from '../../configurations/Local/LocalValue'

const SingleSolution = () => {
    var  id = localStorage.getItem(LocaValue.idsolution)
    const [name,setname]=useState();
    const [coverPicture,setcoverPicture]=useState();
    const [description,setdescription]=useState();
    const [content,setcontent]=useState();
    const [datesave,setdatesave]=useState();
    useEffect(()=>{
        LoadSolutionId(id,setname,setdescription, setcoverPicture,setcontent,setdatesave);
    },[])
    return (
        <div>
            <SolutionNav />
            {/* Page de View Detail Blog  */}

            <section class="blog-details-area  wow fadeInUp">
                <div class="container">
                    <div class="row bg-info" style={{display:"flex" , justifyContent:"center"}}>
                        <div class="col-md-7 col-xs-12 bg-light">
                            <div class="blog-details-wrap">
                                <div class="blog-details-img visible" >
                                    <img src={`${coverPicture}`} class="img-fluid" style={{height:"400px" ,width:"100%", borderRadius:"10px" }} alt="" />
                                </div>
                                <div class="blog-details-content wow fadeInUp">
                                    <h3>{}name</h3>
                                    <blockquote>
                                        {description}
                                    </blockquote>
                                    {/*detail blog */}
                                    <p   class="container-fluid" dangerouslySetInnerHTML={{ __html: content }}></p>
                                </div>
                                <div class="comment-main wow fadeInUp">
                                                                        
                                </div>
                                <div id="respond" class="sewl-comment-form comment-respond wow fadeInUp">
                                    <h3 id="reply-title" class="blog-title">Post Comments</h3>
                                    <form novalidate="" method="post" id="commentform" class="comment-form" action="#0">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="sewl-form-inputs no-padding-left">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-xs-12">
                                                            <input id="website" name="website" value="" tabindex="1" placeholder="Website" type="url" />
                                                        </div>
                                                        <div class="col-sm-6 col-xs-12">
                                                            <input id="name" name="name" value="" tabindex="2" placeholder="Name" type="text" />
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <input id="email" name="email" value="" tabindex="3" placeholder="Email" type="email" />
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div class="sewl-form-textarea no-padding-right">
                                                                <textarea id="comment" name="comment" tabindex="4" rows="3" cols="30" placeholder="Write Your Comments..."></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 wow fadeInUp">
                                                <div class="form-submit">
                                                    <input name="submit" id="submit" value="Post Comment" type="submit" class="btn btn-default" />

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Page de view Detail Blog */}
            {/*  */}
            {/* Footer de page*/}
            <RedirectContact />
            <Footer />

        </div>
    )
}

export default SingleSolution;