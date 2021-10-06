import React from "react"
import {Card, CardHeader, CardBody} from "reactstrap";



class AccountCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userLevel: 1,
            userContributions: 0,
            contributionsToLevel: 2,
            levelBadge: null
        }
    }

    levelUp = () =>{
        this.setState({userLevel: this.state.userContributions += 1})

        if (this.state.userContributions <= 1){
            this.setState({userLevel: 1})
            this.state.contributionsToLevel = 1 - this.state.userContributions + 1;
        } else if (this.state.userContributions <= 4){
            this.setState({userLevel: 2})
            this.setState({contributionsToLevel: 5 - this.state.userContributions})
        } else if (this.state.userContributions <= 9){
            this.setState({userLevel: 3})
            this.setState({contributionsToLevel: 10 - this.state.userContributions})
        } else if (this.state.userContributions <= 14){
            this.setState({userLevel: 4})
            this.setState({contributionsToLevel: 15 - this.state.userContributions})
        } else if (this.state.userContributions <= 19) {
            this.setState({userLevel: 5})
            this.setState({contributionsToLevel: 20 - this.state.userContributions})
        } else if (this.state.userContributions <= 24){
            this.setState({userLevel: "Max"})
            this.setState({contributionsToLevel: "Max"})
        }
    }

    render(){
        
        return(

        <Card className="card">
            <CardHeader style={{textAlign: "center"}}>
                <img id="acctPageProfilePic" width="150px" height="150px" src="https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg"/>
                <div id="acctPageUsername">Username <a href="#" style={{color:"#3d2b56"}}><i class="fas fa-edit"></i></a></div>
            </CardHeader>
            <CardBody class="card-body">
                <div class="text-center"><img id="userBadge" width="75px" height="75px" src="https://i.pinimg.com/originals/ff/b2/93/ffb29339bc9a4ead6b5bc68052fd4965.jpg"/></div>
                <div class="text-center"><span id="userBadgeTier" style={{fontWeight: "bold"}}>Diamond</span><span> Contributor</span></div>
                <hr/>
                <div class="row">
                    <div class="col col-3 text-center" >
                        <span id="numLevel" ref={this.levelRef}>{this.state.userLevel}</span>
                    </div>
                    <div class="col col-9" style={{borderLeft: "1px solid #bad29f"}}>
                        <span id="level">Level</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-3 text-center">
                        <span id="numContributions">{this.state.userContributions}</span>
                        
                    </div>
                    <div class="col col-9" style={{borderLeft: "1px solid #bad29f; border-top: 1px solid #bad29f"}}>
                        <span>Total Contributions</span>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col col-3 text-center">
                            <span id="numContributionsToLevel">{this.state.contributionsToLevel}</span>
                            
                        </div>
                        <div class="col col-9" style={{borderLeft: "1px solid #bad29f; border-top: 1px solid #bad29f"}} id="contributionsToLevelTextDiv">
                            <span id="contributionsToLevelText">Contributions to Level</span>
                        </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col text-center mt-3">
                            <div id="progressBar">Progress Bar</div>
                        </div>
                    </div>
                </div>
                
            </CardBody>
            <button type="submit" onClick={this.levelUp}>submit</button>
        </Card>
    
    )
}
}
export default AccountCard;