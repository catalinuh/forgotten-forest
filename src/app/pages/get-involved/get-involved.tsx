import { Button, TextField } from '@mui/material';

import './get-involved.scss';

const GetInvolved = () => {
  return (
    <div className="get-involved">
      <header className="get-involved__header">
        Volunteer to help our project or sign up for news!
      </header>

      <form className="get-involved__form">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          className="get-involved__form--input"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          className="get-involved__form--input"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="get-involved__form--input"
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          className="get-involved__form--input"
        />
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default GetInvolved;
