import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log('Submitting the form', data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? 'input-error' : ''}
          {...register('firstName', {
            required: 'First Name is required',
            minLength: { value: 3, message: 'Minimum length is 3' },
            maxLength: { value: 20, message: 'Maximum length is 20' },
          })}
        />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input {...register('middleName')} />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input
          {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Last name is not as per the rules',
            },
          })}
        />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit"}/>
    </form>
  );
}

export default App;
