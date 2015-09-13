var AllTeams = React.createClass({
    getInitialState: function () {
        return {
            teams: [],
            fixtures: []
        };
    },
    componentDidMount: function () {
        $.getJSON(this.props.teamsUrl, function (result) {
            this.setState({teams: result.teams});
        }.bind(this));

        $.getJSON(this.props.fixturesUrl, function (result) {
            this.setState({fixtures: result.fixtures});
        }.bind(this));
    },
    render: function () {
        var groups = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};
        var fixturesMap = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};

        this.state.teams.map(function (team) {
            groups[team.group].push(team);
        });

        var groupKeys = Object.keys(groups);

        this.state.fixtures.map(function (fixture) {
            var team = this.state.teams.filter(function (team) {
                return team.name === fixture.homeTeamName;
            })[0];

            fixture['group'] = groups[team.group];
            fixturesMap[team.group].push(fixture);
        }.bind(this));

        var teamNodes = groupKeys.map(function (key) {
            return (
                <Group teams={groups[key]} group={key} key={key} fixtures={fixturesMap[key]} />
            );
        });

        return <div>{teamNodes}</div>;
    }
});

React.render(<AllTeams teamsUrl="teams.json" fixturesUrl="fixtures.json" />, document.getElementById('content'));