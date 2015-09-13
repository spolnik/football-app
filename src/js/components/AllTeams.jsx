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
            success: function (result) {
                this.setState({teams: result.teams});
            }.bind(this)
        });
    },
    render: function () {
        var groups = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": []};

        this.state.teams.map(function (team) {
            groups[team.group].push(team);
        });

        var teamNodes = Object.keys(groups).map(function (key) {
            return (
                <Group teams={groups[key]} group={key}/>
            );
        });

        return <div>{teamNodes}</div>;
    }
});

React.render(<AllTeams source="teams.json"/>, document.getElementById('content'));