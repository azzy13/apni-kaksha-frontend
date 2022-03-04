import React from 'react';

const Form = () => {
  return (
    <div className='border rounded shadow p-4'>
      <form>
        <fieldset>
          <div class='form-group'>
            <label for='Name'>Name</label>
            <input
              type='text'
              id='name'
              class='form-control'
              placeholder='Name'
            />
          </div>
          <div class='form-group mt-2'>
            <label for='Email'>Email</label>
            <input
              type='text'
              id='email'
              class='form-control'
              placeholder='Email'
            />
          </div>
          <div class='form-group mt-2'>
            <label for='Number'>Mobile Number</label>
            <input
              type='text'
              id='number'
              class='form-control'
              placeholder='Mobile Number'
            />
          </div>
          <div class='form-group mt-2'>
            <label for='Course'>Select Course</label>
            <select id='course' class='form-control'>
              <option>Select a course</option>
              <option>Course 1</option>
              <option>Course 2</option>
              <option>Course 3</option>
            </select>
          </div>
          <button
            type='submit'
            class='btn btn-primary mt-2'
            style={{ backgroundColor: '#2c2c96' }}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
