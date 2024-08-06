import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignUp = () => {

    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.username || !formData.email || !formData.password) {
        return setErrorMessage('Please fill out all fields.');
      }
      try {
        setLoading(true);
        setErrorMessage(null);
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
        setLoading(false);
        if(res.ok) {
          navigate('/sign-in');
        }
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    return (
        <div>
    <div className="container-fluid" style={{minHeight: '100vh', marginTop: '5rem'}}>
  <div className="container d-flex flex-column flex-md-row align-items-md-center p-3 mx-auto" style={{maxWidth: '768px', gap: '1.25rem'}}>
    {/* left */}
    <div className="flex-fill">
      <Link to="/" className="fw-bold text-dark text-4xl">
        <span className="px-2 py-1 bg-gradient rounded text-white" style={{backgroundImage: 'linear-gradient(to right, #667eea, #764ba2, #ec4899)'}}>
        TwoFaced
        </span>
        Blog
      </Link>
      <p className="small mt-5">
        This is a demo project. You can sign up with your email and password
        or with Google.
      </p>
    </div>
    {/* right */}
    <div className="flex-fill">
      <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <div>
          <Label value="Your username" />
          <TextInput
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your email" />
          <TextInput
            type="email"
            placeholder="name@company.com"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your password" />
          <TextInput
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <Button
          gradientDuoTone="purpleToPink"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            'Sign Up'
          )}
        </Button>
        <OAuth />
      </form>
      <div className="d-flex gap-2 small mt-5">
        <span>Have an account?</span>
        <Link to="/sign-in" className="text-primary">
          Sign In
        </Link>
      </div>
      {errorMessage && (
        <Alert className="mt-5" color="danger">
          {errorMessage}
        </Alert>
      )}
    </div>
  </div>
</div>

        </div>
    );
}


export default SignUp;