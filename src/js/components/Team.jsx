class Team extends React.Component {

    render() {
        return (
            <div className="col-md-3 text-center">
                <h2>{this.props.team.shortName}</h2>
                <img src={this.props.team.crestUrl} alt={this.props.team.name}
                     className="img-thumbnail img-responsive"/>
                <h4>{this.props.team.squadMarketValue}</h4>
            </div>
        );
    }
}