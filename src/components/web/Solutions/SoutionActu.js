import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadAllSolution } from '../../../actions/SolutionAction';
import { LocaValue, routing } from '../../../configurations/Local/LocalValue'

const SolutionActu = () => {
    const [SolutionList, setSolutionList] = useState([]);
    useEffect(() => {
        LoadAllSolution(setSolutionList);
    }, [])

    return (
        <section class="blog-area ptb-140 bg-1">
            <div class="container">
                <div class="row">
                    {
                        SolutionList && SolutionList.length > 0 ?
                            (
                                SolutionList.map((item) => {
                                    return (
                                        <div class="card text-left col-md-4 rounded-lg bg-light" style={{borderRadius:"10px", margin:"10px"}} >
                                            <img class="card-img-top"
                                                src={item.coverPicture}
                                                alt="CopyCat logo"/>
                                                <Link class="card-body" to={`/${routing.solutions}/${item._id}`}
                                                onClick={()=>{
                                                    localStorage.setItem(LocaValue.idsolution,item._id);
                                                }}
                                                 >
                                                    <h5 class="h3 card-title">Convert Figma to Bootstrap</h5>
                                                    <p class="card-text">Build UI faster than anybody else. Use the CopyCat Figma Bootstrap plugin to convert your Figma designs to fully
                                                        supported production-ready Bootstrap code and React.js code.</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                    <Link to="https://www.copycat.dev/figma-to-bootstrap" class="btn btn-success card-link" style={{padding:"10px"}}>Learn more</Link>
                                                </Link>
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
                                <li><Link to="#"><i class="fa fa-angle-left"></i></Link></li>
                                <li class="active "><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">4</Link></li>
                                <li><Link to="#">5</Link></li>
                                <li><Link to=""><i class="fa fa-angle-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SolutionActu;