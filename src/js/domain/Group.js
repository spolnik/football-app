export default class Group {

    constructor(name) {
        this._name = name;
        this._teams = [];
        this._fixtures = [];
    }

    get name() {
        return this._name;
    }

    addTeam(team) {
        this._teams.push(team);
    }

    get teams() {
        return this._teams;
    }

    addFixture(fixture) {
        this._fixtures.push(fixture);
    }

    get fixtures() {
        return this._fixtures;
    }

    static buildGroups(rawTeams, rawFixtures) {

        const groupNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
        let groups = groupNames.map(name => new Group(name));

        rawTeams.forEach(team => {
            let group = groups.find(group => group.name === team.group);
            group.addTeam(team);
        });

        rawFixtures.forEach(fixture => {
            if (fixture.matchday > 6) {
                return;
            }

            let teamGroup = rawTeams.find(team => team.name === fixture.homeTeamName).group;
            let group = groups.find(group => group.name === teamGroup);

            fixture.homeTeam = group.teams.find(team => team.name === fixture.homeTeamName);
            fixture.awayTeam = group.teams.find(team => team.name === fixture.awayTeamName);

            group.addFixture(fixture);
        });

        return groups;
    }

    static buildKnockoutStage(rawTeams, rawFixtures, matchday) {
        let fixtures = [];

        rawFixtures
            .filter(fixture => fixture.matchday === matchday)
            .forEach(fixture => {
                fixture.homeTeam = rawTeams.find(team => team.name === fixture.homeTeamName);
                fixture.awayTeam = rawTeams.find(team => team.name === fixture.awayTeamName);

                const firstFixture = fixtures.find(
                    firstFixture => firstFixture.homeTeamName === fixture.awayTeamName && firstFixture.awayTeamName === fixture.homeTeamName);

                if (firstFixture) {
                    if (fixture.result.extraTime) {
                        fixture.result.aggregateGoalsHomeTeam = firstFixture.result.goalsAwayTeam + fixture.result.extraTime.goalsHomeTeam;
                        fixture.result.aggregateGoalsAwayTeam = firstFixture.result.goalsHomeTeam + fixture.result.extraTime.goalsAwayTeam;
                    } else {
                        fixture.result.aggregateGoalsHomeTeam = firstFixture.result.goalsAwayTeam + fixture.result.goalsHomeTeam;
                        fixture.result.aggregateGoalsAwayTeam = firstFixture.result.goalsHomeTeam + fixture.result.goalsAwayTeam;
                    }
                }

                fixtures.push(fixture);
            });

        return fixtures;
    }
}