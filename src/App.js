import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import useForm from './hooks/useForm';
import NameForm from './NameForm';
import Welcome from './Welcome';

const initialForm = {
  firstName: '',
  lastName: '',
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [form, getHandler] = useForm(initialForm);

  return (
    <React.Fragment>
      <NameForm
        form={form}
        getHandler={getHandler}
      />
      {
        showWelcome && <Welcome name={`${form.firstName} ${form.lastName}`} />
      }
      <Button
        variant="contained"
        onClick={() => setShowWelcome(true)}
      >
        Welcome
      </Button>
    </React.Fragment>
  );
};

export default App;
