import React, { Component } from 'react'
import './Scorecard.css'
import $ from "jquery"

export default class Scorecard extends Component {
    render() {
        return (
            <>
               

                    <section id="s-team" class="section">

                       <div className="main">

                       
                       <div class="b-skills">
                                <div class="container">
                                    <h2>SCORE CARD</h2>


                   



                    <div class="row inline">
                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="92" data-bar-color="#23afe3">
                                                        <span class="percent" data-after="%">92</span>
                                                    </div>
                                                </div>


                                                <p class="para">Current and World Affairs</p>
                                            </div>
                                        </div>




                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">



                                                    <div class="chart " data-percent="20" data-bar-color=" #00ffff">
                                                        <span class="percent" data-after="%">20</span>
                                                    </div>
                                                </div>


                                                <p class="para">Movies</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="78" data-bar-color="#a7d212">
                                                        <span class="percent" data-after="%">78</span>
                                                    </div>
                                                </div>

                                                <p class="para">Science and Technology</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="95" data-bar-color="#ff4241">
                                                        <span class="percent" data-after="%">95</span>
                                                    </div>
                                                </div>

                                                <p class="para">Nature and Wildlife</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="65" data-bar-color="#edc214">
                                                        <span class="percent" data-after="%">65</span>
                                                    </div>
                                                </div>

                                                <p class="para">Sports and Games</p>
                                            </div>
                                        </div>



                    
                                    {/* <div class="row">
                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="92" data-bar-color="#23afe3">
                                                        <span class="percent" data-after="%">92</span>
                                                    </div>
                                                </div>


                                                <p>MATHS</p>
                                            </div>
                                        </div>




                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">



                                                    <div class="chart " data-percent="20" data-bar-color=" #00ffff">
                                                        <span class="percent" data-after="%">20</span>
                                                    </div>
                                                </div>


                                                <p>SCIENCE</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="78" data-bar-color="#a7d212">
                                                        <span class="percent" data-after="%">78</span>
                                                    </div>
                                                </div>

                                                <p>PHYSSICS</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="95" data-bar-color="#ff4241">
                                                        <span class="percent" data-after="%">95</span>
                                                    </div>
                                                </div>

                                                <p>CHEMISTRY</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-15 col-sm-6 col-md-2">
                                            <div class="skill-item center-block">
                                                <div class="chart-container">
                                                    <div class="chart " data-percent="65" data-bar-color="#edc214">
                                                        <span class="percent" data-after="%">65</span>
                                                    </div>
                                                </div>

                                                <p>BIOLOGY</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                       </div>

     </section>




                            <br/><br/><br/><br/>



                                <script src="plugins/jquery-2.2.4.min.js"></script>
                                <script src="plugins/jquery.appear.min.js"></script>
                                <script src="plugins/jquery.easypiechart.min.js"></script>
                                <script>
 </script> 
            </>
        )
    }
}
