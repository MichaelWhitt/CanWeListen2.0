import react from 'react';
import { Button, UncontrolledCollapse } from 'reactstrap';
import ContributionForm from './ContributionForm';

const AddContributionForm = (props) => (

    <div style={{textAlign: 'center'}}>
      <Button color="success" id="toggler" className="mt-5">
        Add Contribution
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <ContributionForm/>
      </UncontrolledCollapse>
    </div>
);

export default AddContributionForm;