import react from "react";

const AccountCard = () => {
    return(
        
                <div className="card">
                    <div class="card-header text-center">
                                <img id="acctPageProfilePic" width="150px" height="150px" src="https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg"/>
                                <div id="acctPageUsername">Username <a href="#" style={{color:"#3d2b56"}}><i class="fas fa-edit"></i></a></div>
                            </div>
                            <div class="card-body">
                                <div class="text-center"><img id="userBadge" width="75px" height="75px" src="https://i.pinimg.com/originals/ff/b2/93/ffb29339bc9a4ead6b5bc68052fd4965.jpg"/></div>
                                <div class="text-center"><span id="userBadgeTier" style={{fontWeight: "bold"}}>Diamond</span><span> Contributor</span></div>
                                <hr/>
                                <div class="row">
                                    <div class="col col-2 text-center" >
                                        <span id="numLevel"></span>
                                    </div>
                                    <div class="col col-10" style={{borderLeft: "1px solid #bad29f"}}>
                                        <span id="level">Level</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-2 text-center">
                                        <span id="numContributions">4</span>
                                        
                                    </div>
                                    <div class="col col-10" style={{borderLeft: "1px solid #bad29f; border-top: 1px solid #bad29f"}}>
                                        <span>Total Contributions</span>
                                    </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-2 text-center">
                                            <span id="numContributionsToLevel">0</span>
                                            
                                        </div>
                                        <div class="col col-10" style={{borderLeft: "1px solid #bad29f; border-top: 1px solid #bad29f"}} id="contributionsToLevelTextDiv">
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
                                
                            </div>
                    </div>

                
    )
}
export default AccountCard;