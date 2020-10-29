import {useState} from 'react';

const useForm = (initalValue) => {
  const [form, setForm] = useState(initalValue);

  const getHandler = (field) => (event) => {
    const newForm = {
      ...form,
      [field]: event.target.value
    };

    setForm(newForm);
  }

  return [form, getHandler];

};

export default useForm;