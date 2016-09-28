var React = require('react');

var ForumAnswer = React.createClass({

    propTypes: {
        answer: React.PropTypes.object.isRequired,
        onMarkCorrect: React.PropTypes.func.isRequired
    },
    
    _markCorrect: function(event) {
        event.preventDefault(); 
        this.props.onMarkCorrect(this.props.id);
    },
    _deleteAnswer: function(event){
        event.preventDefault();
        this.props.onDeleteAnswer(this.props.id);
    },

    render: function() {
 
        var answer = this.props.answer;
        
        var markAnswer;
        
        if (!answer.correct) {
            markAnswer = <a href="#" className="btn btn-info btn-sm pull-right" onClick={ this._markCorrect }>Mark as correct</a>;
        }
        
        var classNames = "panel-body";
        
        if (answer.correct) { classNames += " bg-success" };

        return (
            <div className="panel panel-default">
                <div className={ classNames }>
                    { answer.body }
                    <a href="#" className="btn btn-danger btn-sm pull-right" onClick={this._deleteAnswer}>
                        Delete
                    </a>
                    { markAnswer }
                </div>
            </div>
        )
    }

});

module.exports = ForumAnswer;