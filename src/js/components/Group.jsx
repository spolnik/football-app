var Group = React.createClass({
    render: function () {
        var teamNodes = this.props.teams.sort(function (a, b) {
            return parseInt(b.squadMarketValue) - parseInt(a.squadMarketValue);
        }).map(function (team) {
            return (
                <Team team={team}/>
            );
        });
        return <div className="group" id={this.props.group.toLowerCase()}>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">Group {this.props.group}</h2>
                </div>

                <div className="panel-body">
                    {teamNodes}
                </div>
                <Table teams={this.props.teams}/>
            </div>
        </div>;
    }
});
