import React from 'react'
import { Link } from 'react-router-dom'

const PriceService = () => {
    return (
        <div id="about" class=" back-right-text-c">
            <div class="container wow fadeInUp">
                <div class="row text-center mb-60 ">
                    <div class="title wow fadeInUp">
                        <h1>Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry.</h1>
                        <p class="about_bottom_h mt-50   "> It is a long established fact that a btn btn-defaulter will be distracted by the btn btn-defaultable content of a page <br/> when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal <br/> distribution of letters,     </p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row wow fadeInUp" >
                        <div class="col-md-4 col-sm-6 p-0">
                            <div class="pricingTable mt-50">
                                <div class="pricingTable-header">
                                    <span class="price-value">
                                        <span class="currency">$</span> 59
                                        <span class="month"> /mo</span>
                                    </span>
                                    <h3 class="heading">Business</h3>
                                </div>
                                <div class="pricing-content">
                                    <h2 class="tabel-color">  Beginner  </h2>
                                    <ul>
                                        <li>1 GB of space</li>
                                        <li>Unlimited traffic</li>
                                        <li>Forum access</li>
                                        <li>Support at $25/hour</li>
                                    </ul>
                                    <a href="#" class="btn btn-default">
                                        CHOOSE PLAN</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 p-0 wow fadeInUp ">
                            <div class="pricingTable pricing-three">
                                <div class="pricingTable-header pt-100">
                                    <span class="price-value">
                                        <span class="currency">$</span> 96
                                        <span class="month"> /mo</span>
                                    </span>
                                    <h3 class="heading">Business</h3>
                                </div>
                                <div class="pricing-content">
                                    <h2 class="tabel-color">  Advanced  </h2>
                                    <ul>
                                        <li>1 GB of space</li>
                                        <li>Unlimited traffic</li>
                                        <li>Forum access</li>
                                        <li>Support at $25/hour</li>
                                    </ul>
                                    <a href="#" class="btn btn-default">
                                        CHOOSE PLAN</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 p-0  wow fadeInUp ">
                            <div class="pricingTable mt-50">
                                <div class="pricingTable-header ">
                                    <span class="price-value">
                                        <span class="currency">$</span>108
                                        <span class="month"> /mo</span>
                                    </span>
                                    <h3 class="heading">Business</h3>
                                </div>
                                <div class="pricing-content">
                                    <h2 class="tabel-color">  Professional  </h2>
                                    <ul>
                                        <li>1 GB of space</li>
                                        <li>Unlimited traffic</li>
                                        <li>Forum access</li>
                                        <li>Support at $25/hour</li>
                                    </ul>
                                    <a href="#" class="btn btn-default">
                                        CHOOSE PLAN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
}

            export default PriceService
