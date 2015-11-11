const Card = React.createClass({
    getInitialState: () => {
        return {};
    },
    componentDidMount: function() {
        $.get('https://api.github.com/users/' + this.props.login, data => {
            this.setState(data);
        });
    },
    render: function() {
        return (
            <div>
                <img src={this.state.avatar_url} width="80" />
                <h3>{this.state.name}</h3>
                <hr />
            </div>
        );
    }
});

const Main = React.createClass({
    getInitialState: () => {
        return {logins: ['zpao', 'fisherwebdev']}
    },
    render: function() {
        let cards = this.state.logins.map(function(login) {
            return (
                <Card login={login} />
            )
        });
        return (
            <div>
                {cards}
            </div>
        )
    }
});

React.render(<Main />, document.getElementById('root'));