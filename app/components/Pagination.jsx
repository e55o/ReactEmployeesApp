var React =require('react');

var Pagination = React.createClass({

    // Go to the previous page
    prevPage: function(){
        if(this.props.page - 1 > 0){
            this.props.changePage(this.props.page - 1);
        }
    },

    // Go to the next page
    nextPage: function(){
        if(this.props.page + 1 <= this.props.numPages){
            this.props.changePage(this.props.page + 1);    
        }
    },

    render: function () {
        var page = 1;
        // The data attributes for the <figure> tags are for the circleProgess plugin
        return (
            <div className="row">
                <div className='pagination'>
                    <a onClick={this.prevPage} className={'previous' + (this.props.page <= 1 ? ' disabled' : '')}>
                        Prev Page
                    </a>
                    <span>
                        Page {page} of {page}
                    </span>
                    <a onClick={this.nextPage} className={'next' + (this.props.page >= this.props.numPages ? ' disabled' : '')}>
                        Next Page
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Pagination;