var React = require('react');
var ForumAnswer = require('./ForumAnswer.react');
var ForumActions = require('../actions/ForumActions');

var ForumAnswers = React.createClass({

    _onMarkCorrect: function(id) {
        ForumActions.markAnswerCorrect(id);
    },
    _onDeleteAnswer: function(id) {
        ForumActions.deleteAnswer(id);
    },
    
    render: function() {

        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers) {
            answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key] } onMarkCorrect={ this._onMarkCorrect } onDeleteAnswer={this._onDeleteAnswer} />)
        }

        return (
            <div>
                { answers }
            </div>
        )
    }

});
    
module.exports = ForumAnswers;