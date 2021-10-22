import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLevel: this.props.data.level,
            userContributions: Math.floor((this.props.data.level) * 1.5),
            contributionsToLevel: Math.floor((this.props.data.level) * 1.75),
            levelBadge: null
        }
    }

    render() {
        const userData = this.props.data;
        return (

            <Card className="card">
                <CardHeader style={{ textAlign: "center" }}>
                    <img id="acctPageProfilePic" width="150px" height="150px" src="https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg" />
                    <div id="acctPageUsername">{userData.author}<a href="#" style={{ color: "#3d2b56" }}><i class="fas fa-edit"></i></a></div>
                </CardHeader>
                <CardBody class="card-body">
                    <div class="text-center"><img id="userBadge" width="75px" height="75px" src="https://i.pinimg.com/originals/ff/b2/93/ffb29339bc9a4ead6b5bc68052fd4965.jpg" /></div>
                    <div class="text-center"><span id="userBadgeTier" style={{ fontWeight: "bold" }}>Diamond</span><span> Contributor</span></div>
                    <hr />
                    <div class="row">
                        <div class="col col-3 text-center" >
                            <span id="numLevel" ref={this.levelRef}>{this.state.userLevel}</span>
                        </div>
                        <div class="col col-9" style={{ borderLeft: "1px solid #bad29f" }}>
                            <span id="level">Level</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-3 text-center">
                            <span id="numContributions">{this.state.userContributions}</span>
                        </div>
                        <div class="col col-9" style={{ borderLeft: "1px solid #bad29f; border-top: 1px solid #bad29f" }}>
                            <span>Total Contributions</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-3 text-center">
                            <span id="numContributionsToLevel">{this.state.contributionsToLevel}</span>
                        </div>
                        <div class="col col-9" style={{ borderLeft: "1px solid #bad29f; border-top: 1px solid #bad29f" }} id="contributionsToLevelTextDiv">
                            <span id="contributionsToLevelText">Contributions to Level</span>
                        </div>
                    </div>
                </CardBody>
            </Card>

        )
    }
}
export default UserCard;