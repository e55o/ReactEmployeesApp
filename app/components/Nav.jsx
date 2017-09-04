var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function (){
        return(
        <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li>
                            <img src="app_logo.png" height="42" width="42"/>
                        </li>
                        <li className="menu-text">
                            Employees Directory
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Employee Portal</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName= "active-link" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;