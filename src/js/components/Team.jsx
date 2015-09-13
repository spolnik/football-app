var AllTeams = React.createClass({
    getInitialState: function () {
        return {
            teams: []
        };
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.source,
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                this.setState({teams: result.teams});
            }.bind(this)
        });
    },
    render: function () {
        var teamNodes = this.state.teams.map(function (team) {
            return (
                <Team team={team} />
            );
        });
        return (
            <div>
                {teamNodes}
            </div>
        )
    }
});

var Team = React.createClass({
    getInitialState: function() {
        return {
            team: {
                name: "Dummy Team",
                code: "FC Dummy",
                shortName: "Dummy",
                squadMarketValue: "0 €",
                crestUrl: ""
            }
        }
    },
    render: function() {
        return <div className="col-md-3 text-center">
            <h2>{this.props.team.shortName}</h2>
            <img src={this.props.team.crestUrl} alt={this.props.team.name} className="img-thumbnail img-responsive"/>
            <h4>{this.props.team.squadMarketValue}</h4>
        </div>;
    }
});

React.render(<AllTeams source="teams.json" />, document.getElementById('content'));