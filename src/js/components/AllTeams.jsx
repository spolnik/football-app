class AllTeams extends React.Component {

    constructor(props) {
        super(props);
        this.state = { teams: [], fixtures: [] };
    }

    componentDidMount() {
        $.getJSON(this.props.teamsUrl, result =>
            this.setState({teams: result.teams})
        );

        $.getJSON(this.props.fixturesUrl, result =>
            this.setState({fixtures: result.fixtures})
        );
    }

    render() {
        let groups = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};
        let fixturesMap = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};

        this.state.teams.forEach(team => groups[team.group].push(team));

        let groupKeys = Object.keys(groups);

        this.state.fixtures.map(fixture => {
            let team = this.state.teams.find(team =>
                team.name === fixture.homeTeamName
            );

            fixture['group'] = groups[team.group];
            fixturesMap[team.group].push(fixture);
        });

        let teamNodes = groupKeys.map(key =>
            <Group teams={groups[key]} group={key} key={key} fixtures={fixturesMap[key]}/>
        );

        return <div>{teamNodes}</div>;
    }
}

React.render(<AllTeams teamsUrl="teams.json" fixturesUrl="fixtures.json" />, document.getElementById('content'));