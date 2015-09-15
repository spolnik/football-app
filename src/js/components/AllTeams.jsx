class AllTeams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            fixtures: []
        };
    }

    componentDidMount() {
        $.getJSON(this.props.teamsUrl, (result) => {
            this.setState({teams: result.teams});
        });

        $.getJSON(this.props.fixturesUrl, (result) => {
            this.setState({fixtures: result.fixtures});
        });
    }

    render() {
        var groups = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};
        var fixturesMap = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};

        this.state.teams.map((team) => {
            groups[team.group].push(team);
        });

        var groupKeys = Object.keys(groups);

        this.state.fixtures.map((fixture) => {
            var team = this.state.teams.filter((team) => {
                return team.name === fixture.homeTeamName;
            })[0];

            fixture['group'] = groups[team.group];
            fixturesMap[team.group].push(fixture);
        });

        var teamNodes = groupKeys.map((key) => {
            return (
                <Group teams={groups[key]} group={key} key={key} fixtures={fixturesMap[key]}/>
            );
        });

        return <div>{teamNodes}</div>;
    }
}

React.render(<AllTeams teamsUrl="teams.json" fixturesUrl="fixtures.json" />, document.getElementById('content'));