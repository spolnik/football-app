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

var Group = React.createClass({
    render: function () {
        var teamNodes = this.props.teams.sort(function (a, b) {
            return parseInt(b.squadMarketValue) - parseInt(a.squadMarketValue);
        }).map(function (team) {
            return (
                <Team team={team}/>
            );
        });
        return <div className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">Group {this.props.group}</h2>
            </div>

            <div className="panel-body">
                {teamNodes}
            </div>
            <Table teams={this.props.teams}/>
        </div>;
    }
});

var Table = React.createClass({
    render: function () {
        var teamRows = this.props.teams.map(function (team, id) {
            return <TableRow id={id} team={team} />;
        });

        return (
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th data-toggle="tooltip" data-placement="top" title="Played">P</th>
                    <th data-toggle="tooltip" data-placement="top" title="Won">W</th>
                    <th data-toggle="tooltip" data-placement="top" title="Drawn">D</th>
                    <th data-toggle="tooltip" data-placement="top" title="Lost">L</th>
                    <th data-toggle="tooltip" data-placement="top" title="Goals For">GF</th>
                    <th data-toggle="tooltip" data-placement="top" title="Goals Against">GA</th>
                    <th data-toggle="tooltip" data-placement="top" title="Goals Difference">+/-</th>
                    <th data-toggle="tooltip" data-placement="top" title="Points">Pts</th>
                </tr>
                </thead>
                <tbody>
                    {teamRows}
                </tbody>
            </table>
        );
    }
});

var TableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.id + 1}</td>
                <td><SmallTeam team={this.props.team}/></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        );
    }
});

var SmallTeam = React.createClass({
    render: function () {
        return <span>
            <img src={this.props.team.crestUrl} alt={this.props.team.name} className="img-small"/>
            <span className="short-name">{this.props.team.shortName}</span>
        </span>;
    }
});

var Team = React.createClass({
    render: function () {
        return <div className="col-md-3 text-center">
            <h2>{this.props.team.shortName}</h2>
            <img src={this.props.team.crestUrl} alt={this.props.team.name} className="img-thumbnail img-responsive"/>
            <h4>{this.props.team.squadMarketValue}</h4>
        </div>;
    }
});

React.render(<AllTeams source="teams.json"/>, document.getElementById('content'));