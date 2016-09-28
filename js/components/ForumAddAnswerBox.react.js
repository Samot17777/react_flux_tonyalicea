var React = require('react');

var ForumAddAnswerBox = React.createClass({
    
    getInitialState: function() {
        return {
            value: ''
        };
    },
    
    _addAnswer: function() {
        this.props.onAddAnswer(this.state.value);
        this.setState({
            value: ""
        })
    },
    
    render: function() {
        return (
            <div>
                <textarea id="addAnswer" className="col-md-6 col-xs-8" value={this.state.value} onChange={ this._onChange } onKeyPress={this._handleKeyPress}></textarea>
                &nbsp;<input type="button" className="btn btn-primary" value="Add" onClick={ this._addAnswer } />
            </div>
        )
    },
    _handleKeyPress: function (event) {
        if (event.key === 'Enter') {
         this._addAnswer();
         event.preventDefault();
        }
        
    },
    
    _onChange: function(event) {
        this.setState({
           value: event.target.value 
        });
    }

});

module.exports = ForumAddAnswerBox;