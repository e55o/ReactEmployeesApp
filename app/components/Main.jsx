var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
    return(
            <div>
                
                <div >
                    <div>
                        <Nav />
                        <div className="row">
                            <div className="columns medium-8 large-5 small-centered small-11">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
module.exports=Main;