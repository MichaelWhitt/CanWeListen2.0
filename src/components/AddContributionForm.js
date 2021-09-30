import react from 'react';
import { Button, UncontrolledCollapse } from 'reactstrap';
import ContributionForm from './ContributionForm';

const AddContributionForm = (props) => (

    <div>
      <Button color="success" id="toggler" className="mt-5">
        Show Form
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <ContributionForm/>
      </UncontrolledCollapse>
    </div>
);

export default AddContributionForm;