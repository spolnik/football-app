class Team extends React.Component {

    render() {
        return (
            <div className="col-md-3 text-center">
                <h2>{this.props.name}</h2>
                <img src={this.props.logoUrl} alt={this.props.name}
                     className="img-thumbnail img-responsive"/>
                <h4>{this.props.marketValue}</h4>
            </div>
        );
    }
}