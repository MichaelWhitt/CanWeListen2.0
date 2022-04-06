import React from "react";
import UserCard from "./UserCard";
import UserInfoTable from "./UserInfoTable";
import UserContributions from "./UserContributions";
import { Row } from 'reactstrap';


function UserAccount(props) {
    const data = props.location.state.data;
    return (
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div class="col col-4">
                        <UserCard data={data}/>
                    </div>
                    <div class="col col-8">
                        <UserInfoTable data={data} />
                        {/* <AccountInfo/> */}
                        <hr />
                        <h2 className="mt-3 text-center">Recent Contributions</h2>
                        <Row className="mt-2">
                            <UserContributions author={data.author} />
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserAccount;