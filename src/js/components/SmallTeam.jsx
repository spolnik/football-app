var SmallTeam = React.createClass({
    render: function () {
        return <span>
            <img src={this.props.team.crestUrl} alt={this.props.team.name} className="img-small"/>
            <span className="short-name">{this.props.team.shortName}</span>
        </span>;
    }
});