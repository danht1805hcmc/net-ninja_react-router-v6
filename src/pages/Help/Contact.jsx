import { Form, redirect, useActionData } from 'react-router-dom';

export default function ContactPage() {
  const data = useActionData();

  return (
    <div id='contact'>
      <h3>Contact Us</h3>

      <Form method='post' action='/help/contact'>
        <label>
          <span>Your email:</span>
          <input type='email' name='email' />
        </label>
        <label>
          <span>Your message: </span>
          <textarea name='message'></textarea>
        </label>

        {data && data.error && <p className='error'>* {data.error}</p>}
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  };

  // send post request
  if (submission.message.length < 10) {
    return {
      error: 'Message must be at least 10 characters long',
    };
  }

  // redirect the user
  return redirect('/');
};
