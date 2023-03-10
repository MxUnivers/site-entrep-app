import React, { useEffect, useState } from 'react'
import { LoadBlogId } from '../../actions/BlogAction'
import Footer from '../../components/web/Footer'
import RedirectContact from '../../components/web/RedirectContact'
import SingleBlogNav from '../../components/web/SingleBlog/SingleBlogNav'
import { LocaValue } from '../../configurations/Local/LocalValue'

const SingleBlog = () => {
    var id = localStorage.getItem(LocaValue.idblog)
    const [name, setname] = useState();
    const [coverPicture, setcoverPicture] = useState();
    const [description, setdescription] = useState();
    const [content, setcontent] = useState();
    const [datesave, setdatesave] = useState();
    useEffect(() => {
        LoadBlogId(id, setname, setdescription, setcoverPicture, setcontent, setdatesave);
    }, [])
    return (
        <div>
            <SingleBlogNav />
            {/* Page de View Detail Blog  */}

            <section class="blog-details-area  wow fadeInUp">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                            <div class="blog-details-wrap">
                                <div class="blog-details-img visible" >
                                    <img src={`${coverPicture}`} class="img-fluid" style={{ height: "500px", width: "100%" }} alt="" />
                                </div>
                                <div class="blog-details-content wow fadeInUp">
                                    <h3>{ }name</h3>
                                    <blockquote>
                                        {description}
                                    </blockquote>
                                    <ul>
                                        <li>Sed ut perspiciatis unde omnis</li>
                                        <li>Lingues es membres del sam familie</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>This is Lorem ipsum dolor sit amet</li>
                                        <li>consectetur adipisicing elit</li>
                                    </ul>
                                    {/*detail blog */}
                                    <p class="container-fluid" dangerouslySetInnerHTML={{ __html: content }}></p>
                                </div>
                                <div class="comment-main wow fadeInUp">
                                    <h3 class="blog-title ">Comment</h3>
                                    <ol class="comments">
                                        <li class="comment even thread-even depth-1">
                                            <div class="comment-wrap">
                                                <div class="comment-theme">
                                                    <div class="comment-image">
                                                        <img src="assets/images/comments/1.jpg" alt="Jhon" />
                                                    </div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="sewl-comments-meta">
                                                            <h4>Jhon <span class="comments-date">says August 15, 2016 at 11:33</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                                                            <div class="comments-reply">
                                                                <a rel="nofollow" class="comment-reply-link" href="#0" onclick="return addComment.moveForm( &quot;comment-1&quot;, &quot;1&quot;, &quot;respond&quot;, &quot;1&quot; )" aria-label="Reply to Mr WordPress"><span class="comment-reply-link">Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="children wow fadeInUp">
                                                <li class="comment odd alt">
                                                    <div class="comment-wrap comment-wrap1">
                                                        <div class="comment-theme">
                                                            <div class="comment-image">
                                                                <img src="assets/images/comments/3.jpg" alt="Jhon" />
                                                            </div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="sewl-comments-meta">
                                                                    <h4>Perdo <span class="comments-date">says August 15, 2017 at 11:33</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>The bedding was hardly able ready to slide off any moment.The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                                                                    <div class="comments-reply">
                                                                        <a rel="nofollow" class="comment-reply-link" href="#0" onclick="return addComment.moveForm( &quot;comment-1&quot;, &quot;1&quot;, &quot;respond&quot;, &quot;1&quot; )" aria-label="Reply to Mr WordPress"><span class="comment-reply-link">Reply</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="comment-wrap comment-wrap2 wow fadeInUp">
                                                        <div class="comment-theme">
                                                            <div class="comment-image">
                                                                <img src="assets/images/comments/2.jpg" alt="Jhon" />
                                                            </div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="sewl-comments-meta">
                                                                    <h4>Alex <span class="comments-date">says August 15, 2017 at 11:33</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>Hardly able to cover it and seemed ready to slide off any moment.The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                                                                    <div class="comments-reply">
                                                                        <a rel="nofollow" class="comment-reply-link" href="#0" onclick="return addComment.moveForm( &quot;comment-1&quot;, &quot;1&quot;, &quot;respond&quot;, &quot;1&quot; )" aria-label="Reply to Mr WordPress"><span class="comment-reply-link">Reply</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <ol class="comments wow fadeInUp">
                                        <li class="comment even thread-even depth-1">
                                            <div class="comment-wrap">
                                                <div class="comment-theme">
                                                    <div class="comment-image">
                                                        <img src="assets/images/comments/3.jpg" alt="Jhon" />
                                                    </div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="sewl-comments-meta">
                                                            <h4>Jeson <span class="comments-date">says Jun 20, 2017 at 12:00</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                                                            <div class="comments-reply">
                                                                <a rel="nofollow" class="comment-reply-link" href="#0" onclick="return addComment.moveForm( &quot;comment-1&quot;, &quot;1&quot;, &quot;respond&quot;, &quot;1&quot; )" aria-label="Reply to Mr WordPress"><span class="comment-reply-link">Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="children wow fadeInUp">
                                                <li class="comment odd alt">
                                                    <div class="comment-wrap comment-wrap1">
                                                        <div class="comment-theme">
                                                            <div class="comment-image">
                                                                <img src="assets/images/comments/4.jpg" alt="Jhon" />
                                                            </div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="sewl-comments-meta">
                                                                    <h4>Jhon Smit<span class="comments-date">says May 25, 2017 at 11:33 PM</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p> was hardly able to cover it and seemed ready to slide off any moment.The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                                                                    <div class="comments-reply">
                                                                        <a rel="nofollow" class="comment-reply-link" href="#0" onclick="return addComment.moveForm( &quot;comment-1&quot;, &quot;1&quot;, &quot;respond&quot;, &quot;1&quot; )" aria-label="Reply to Mr WordPress"><span class="comment-reply-link">Reply</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div id="respond" class="sewl-comment-form comment-respond wow fadeInUp">
                                    <h3 id="reply-title" class="blog-title">Votre avis compte</h3>
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
                        <div class="col-md-4 col-sm-6 col-xs-12 col wow fadeInUp">
                            <aside class="right-sidebar">
                                <div class="search-sidebar mb-30">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here" />
                                        <button type="button" name="button"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div class="category-wrap mb-30 wow fadeInUp">
                                    <h3 class="sidebar-title">Category</h3>
                                    <ul>
                                        <li><a href="#">Investments</a></li>
                                        <li><a href="#">Budgets</a></li>
                                        <li><a href="#">Accounting</a></li>
                                        <li><a href="#">Portfolios</a></li>
                                        <li><a href="#">Wealth</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Corporate</a></li>
                                    </ul>
                                </div>
                                {
                                    /*<div class="related-post mb-30 wow fadeInUp">
                                    <h3 class="sidebar-title">Related Postt</h3>
                                    <ul>
                                        <li class="related-post-items">
                                            <div class="post-img">
                                                <img src="assets/images/post/1.jpg" alt="" />
                                            </div>
                                            <div class="post-info">
                                                <a href="blog-post.html">Adipisicing dolor sit amet consectetur  elit Lorem ipsum dolor</a>
                                                <p>20/08/2017</p>
                                            </div>
                                        </li>
                                        <li class="related-post-items">
                                            <div class="post-img">
                                                <img src="assets/images/post/2.jpg" alt="" />
                                            </div>
                                            <div class="post-info">
                                                <a href="blog-post.html">Sit Lorem ipsum dolor amet adipisicing elit Lorem ipsum dolor</a>
                                                <p>25/08/2017</p>
                                            </div>
                                        </li>
                                        <li class="related-post-items">
                                            <div class="post-img">
                                                <img src="assets/images/post/3.jpg" alt="" />
                                            </div>
                                            <div class="post-info">
                                                <a href="blog-post.html">Dolor sit amet consectetur adipisicing elit Lorem ipsum dolor</a>
                                                <p>30/09/2017</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            */
                                }
                                <div class="archive-wrap mb-30 wow fadeInUp">
                                    <h3 class="sidebar-title">archive</h3>
                                    <ul>
                                        <li><a href="#">November 2017 <span class="pull-right">(25)</span></a></li>
                                        <li><a href="#">August 2017 <span class="pull-right">(25)</span></a></li>
                                        <li><a href="#">September 2017  <span class="pull-right">(25)</span></a></li>
                                        <li><a href="#">Octeber 2017 <span class="pull-right">(25)</span></a></li>
                                        <li><a href="#">December 2017  <span class="pull-right">(25)</span></a></li>
                                    </ul>
                                </div>
                                <div class="tags-wrap wow fadeInUp">
                                    <h3 class="sidebar-title">Post Tags</h3>
                                    <ul>
                                        <li><a href="#">html</a></li>
                                        <li><a href="#">css</a></li>
                                        <li><a href="#">javascript</a></li>
                                        <li><a href="#">business</a></li>
                                        <li><a href="#">corporate</a></li>
                                        <li><a href="#">php</a></li>
                                        <li><a href="#">dolor</a></li>
                                        <li><a href="#">amet</a></li>
                                    </ul>
                                </div>
                            </aside>
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

export default SingleBlog