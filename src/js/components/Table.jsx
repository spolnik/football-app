var Table = React.createClass({
    render: function () {
        var teamRows = this.props.teams.map(function (team, id) {
            return <TableRow id={id} team={team} key={team.name} />;
        });

        return (
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th title="Played">P</th>
                    <th title="Won">W</th>
                    <th title="Drawn">D</th>
                    <th title="Lost">L</th>
                    <th title="Goals For">GF</th>
                    <th title="Goals Against">GA</th>
                    <th title="Goals Difference">+/-</th>
                    <th title="Points">Pts</th>
                </tr>
                </thead>
                <tbody>
                {teamRows}
                </tbody>
            </table>
        );
    }
});
