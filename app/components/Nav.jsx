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
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Add Employee</IndexLink>
                        </li>
                        <li>
                            <Link to="/editProfile" activeClassName= "active-link" activeStyle={{fontWeight: 'bold'}}>Edit Profiles</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName= "active-link" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
                 <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="serach" placeholder="Search for Employee" ref="search" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Search"/>
                            </li>
                        </ul>
                    </form>
                </div> 
            </div>
        );
    }
});

module.exports = Nav;