const Dashboard = () => {
    return (<div>
        <script src="js/responsiveslides.min.js"></script>
        <div class="slider">
            <div class="callbacks_container">
                <ul class="rslides" id="slider">

                    <div class="slid banner1">
                        <div class="caption">
                            <h3>Adventure Game - 343 industries - master chief</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque ex. Morbi iaculis mi in varius auctor. Nullam feugiat erat ex, eu vehicula velit efficitur non.</p>
                        </div>
                    </div>


                    <div class="slid banner2">
                        <div class="caption">
                            <h3>God of war - kratos - sony santa monica</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque ex. Morbi iaculis mi in varius auctor. Nullam feugiat erat ex, eu vehicula velit efficitur non.</p>
                        </div>
                    </div>


                    <div class="slid banner3">
                        <div class="caption">
                            <h3>Battlefield 4 - game - explosion - digital illusions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pellentesque ex. Morbi iaculis mi in varius auctor. Nullam feugiat erat ex, eu vehicula velit efficitur non.</p>
                        </div>
                    </div>

                </ul>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <div class="top-game-grids">
                    <ul id="flexiselDemo1">
                        <li>
                            <div class="game-grid">
                                <h4>Action Games</h4>
                                <p>Nulla elementum nunc tempus.</p>
                                <img src="images/t1.jpg" class="img-responsive" alt="" />
                            </div>
                        </li>
                        <li>
                            <div class="game-grid">
                                <h4>Racing Games</h4>
                                <p>Nulla elementum nunc tempus.</p>
                                <img src="images/t3.jpg" class="img-responsive" alt="" />
                            </div>
                        </li>
                        <li>
                            <div class="game-grid">
                                <h4>3D Games</h4>
                                <p>Nulla elementum nunc tempus.</p>
                                <img src="images/t4.jpg" class="img-responsive" alt="" />
                            </div>
                        </li>
                        <li>
                            <div class="game-grid">
                                <h4>Arcade Games</h4>
                                <p>Nulla elementum nunc tempus.</p>
                                <img src="images/t2.jpg" class="img-responsive" alt="" />
                            </div>
                        </li>
                    </ul>
                    <script type="text/javascript" src="js/jquery.flexisel.js"></script>
                </div>
            </div>
        </div>
        <div class="latest">
            <div class="container">
                <div class="latest-games">
                    <h3>Latest Games</h3>
                    <span></span>
                </div>
                <div class="latest-top">
                    <div class="col-md-5 trailer-text">
                        <div class="sub-trailer">
                            <div class="col-md-4 sub-img">
                                <img src="images/v2.jpg" alt="img07" />
                            </div>
                            <div class="col-md-8 sub-text">
                                <a href="#">Killzone: Shadow Fall for PlayStation 4 Reviews</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="sub-trailer">
                            <div class="col-md-4 sub-img">
                                <img src="images/v1.jpg" alt="img07" />
                            </div>
                            <div class="col-md-8 sub-text">
                                <a href="#"> Spiderman 2 Full Version PC Game</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="sub-trailer">
                            <div class="col-md-4 sub-img">
                                <img src="images/v3.jpg" alt="img07" />
                            </div>
                            <div class="col-md-8 sub-text">
                                <a href="#">Sega's: Jet Set for Andriod Play Store 4 Reviews</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="col-md-7 trailer">
                        <iframe src="https://www.youtube.com/embed/V5-DyoVlNOg?list=PLiVunv1pnIs2c0ORVqY60K3n8XMO9CoGp" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Dashboard;