import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    // <GuestLayout>
    //     <Head title="Log in" />

    //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

    //     <form onSubmit={submit}>
    //         <div>
    //             <InputLabel htmlFor="email" value="Email" />

    //             <TextInput
    //                 id="email"
    //                 type="email"
    //                 name="email"
    //                 value={data.email}
    //                 className="mt-1 block w-full"
    //                 autoComplete="username"
    //                 isFocused={true}
    //                 onChange={(e) => setData('email', e.target.value)}
    //             />

    //             <InputError message={errors.email} className="mt-2" />
    //         </div>

    //         <div className="mt-4">
    //             <InputLabel htmlFor="password" value="Password" />

    //             <TextInput
    //                 id="password"
    //                 type="password"
    //                 name="password"
    //                 value={data.password}
    //                 className="mt-1 block w-full"
    //                 autoComplete="current-password"
    //                 onChange={(e) => setData('password', e.target.value)}
    //             />

    //             <InputError message={errors.password} className="mt-2" />
    //         </div>

    //         <div className="block mt-4">
    //             <label className="flex items-center">
    //                 <Checkbox
    //                     name="remember"
    //                     checked={data.remember}
    //                     onChange={(e) => setData('remember', e.target.checked)}
    //                 />
    //                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
    //             </label>
    //         </div>

    //         <div className="flex items-center justify-end mt-4">
    //             {canResetPassword && (
    //                 <Link
    //                     href={route('password.request')}
    //                     className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                 >
    //                     Forgot your password?
    //                 </Link>
    //             )}

    //             <PrimaryButton className="ml-4" disabled={processing}>
    //                 Log in
    //             </PrimaryButton>
    //         </div>
    //     </form>
    // </GuestLayout>
    <div className='app app-login p-0'>
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
                <a className="app-logo" href="index.html">
                  <img className="logo-icon me-2" src="/images/app-logo.svg" alt="logo" />
                </a>
              </div>
              <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
              <div className="auth-form-container text-start">
              {errors.email && (
                <div class="alert alert-danger" role="alert">
                  {errors.email}
                </div>
              )}
                <form className="auth-form login-form" onSubmit={submit}>
                  <div className="email mb-3">
                    <label className="sr-only" >Email</label>
                    <input name="email"
                      type="email"
                      className="form-control signin-email"
                      placeholder="Email address"
                      required="required"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                    />
                  </div>
                  <div className="password mb-3">
                    <label className="sr-only">Password</label>
                    <input name="password"
                      type="password"
                      className="form-control signin-password"
                      placeholder="Password"
                      required="required"
                      value={data.password}
                      onChange={(e) => setData('password', e.target.value)}
                    />
                    <div className="extra mt-3 row justify-content-between">
                      <div className="col-6">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value=""></input>
                          <label className="form-check-label" >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="forgot-password text-end">
                          <a href="reset-password.html">Forgot password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                  </div>
                </form>

                <div className="auth-option text-center pt-5">No Account? Sign up <a className="text-link" href="signup.html" >here</a>.</div>
              </div>

            </div>

            <footer className="app-auth-footer">
              <div className="container text-center py-3">
                <small className="copyright">Designed with <span className="sr-only">love</span><FontAwesomeIcon icon={faHeart} color='#fb866a' /> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
              </div>
            </footer>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder">
          </div>
          <div className="auth-background-mask"></div>
          <div className="auth-background-overlay p-3 p-lg-5">
            <div className="d-flex flex-column align-content-end h-100">
              <div className="h-100"></div>
              <div className="overlay-content p-3 p-lg-4 rounded">
                <h5 className="mb-3 overlay-title">Explore Portal Admin Template</h5>
                <div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">here</a>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
