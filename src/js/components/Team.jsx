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
        var groups = { "A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};

        this.state.teams.map(function (team) {
            groups[team.group].push(team);
        });

        var keys = Object.keys(groups);

        var teamNodes = keys.map(function (key) {
            return (
                <Group teams={groups[key]} group={key} />
            );
        });
        return (
            <div>
                {teamNodes}
            </div>
        )
    }
});

var Group = React.createClass({
    render: function() {
        var teamNodes = this.props.teams.map(function (team) {
            return (
                <Team team={team} />
            );
        });
        return <div className="row">
            <h2>Group {this.props.group}</h2>
            {teamNodes}
        </div>;
    }
});

var Team = React.createClass({
    render: function() {
        return <div className="col-md-3 text-center">
            <h2>{this.props.team.shortName}</h2>
            <img src={this.props.team.crestUrl} alt={this.props.team.name} className="img-thumbnail img-responsive"/>
            <h4>{this.props.team.squadMarketValue}</h4>
        </div>;
    }
});

React.render(<AllTeams source="teams.json" />, document.getElementById('content'));