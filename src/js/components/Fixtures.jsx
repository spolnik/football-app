class Fixtures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {round: 1}
    }

    previousRound() {
        const FIRST_ROUND = 1;
        let round = this.state.round;

        if (round > FIRST_ROUND) {
            this.setState({round: round - 1});
        }
    }

    nextRound() {
        const LAST_ROUND = 6;
        let round = this.state.round;

        if (round < LAST_ROUND) {
            this.setState({round: round + 1});
        }
    }

    render() {
        let fixtureNodes = this.props.fixtures.filter((item, id) => {
            let to = this.state.round * 2;
            let from = this.state.round * 2 - 2;

            return id >= from && id < to;
        }).map((fixture) => {
            return <Fixture fixture={fixture}/>
        });

        return (
            <div className="fixtures">
                <ul className="col-md-12 list-group">
                    {fixtureNodes}
                </ul>
                <nav className="col-md-12">
                    <ul className="pager">
                        <li className="previous">
                            <a href="javascript:void(0)" onClick={this.previousRound.bind(this)}>Previous</a>
                        </li>
                        <li className="next">
                            <a href="javascript:void(0)" onClick={this.nextRound.bind(this)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}