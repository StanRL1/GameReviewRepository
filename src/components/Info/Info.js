const Info = () => {
    return (
    <div class="header">
        <div class="container">
            <div class="headr-left">
                <div class="social">
                    <a href="#"><i class="facebook"></i></a>
                    <a href="#"><i class="twitter"></i></a>
                    <a href="#"><i class="gplus"></i></a>
                    <a href="#"><i class="pin"></i></a>
                    <a href="#"><i class="youtube"></i></a>
                </div>
                <div class="search">
                    <form>
                        <input type="submit" value=""></input>
                        <input type="text" value="" placeholder="Search..."></input>
                    </form>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="headr-right">
                <div class="details">
                    <ul>
                        <li><a href="mailto@example.com"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>info(at)example.com</a></li>
                        <li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>359898293388</li>
                    </ul>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    );
}

export default Info;