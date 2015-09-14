var TableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.id + 1}</td>
                <td><SmallTeam team={this.props.team}/></td>
                <td>0</td>
                <td className="hidden-xs">0</td>
                <td className="hidden-xs">0</td>
                <td className="hidden-xs">0</td>
                <td className="hidden-xs">0</td>
                <td className="hidden-xs">0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        );
    }
});