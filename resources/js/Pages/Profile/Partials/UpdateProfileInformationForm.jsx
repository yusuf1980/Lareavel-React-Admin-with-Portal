// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('profile.update'));

    // e.target.classList.add('was-validated')

  };

  return (
    // <section className={className}>
    //     <header>
    //         <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

    //         <p className="mt-1 text-sm text-gray-600">
    //             Update your account's profile information and email address.
    //         </p>
    //     </header>

    //     <form onSubmit={submit} className="mt-6 space-y-6">
    //         <div>
    //             <InputLabel htmlFor="name" value="Name" />

    //             <TextInput
    //                 id="name"
    //                 className="mt-1 block w-full"
    //                 value={data.name}
    //                 onChange={(e) => setData('name', e.target.value)}
    //                 required
    //                 isFocused
    //                 autoComplete="name"
    //             />

    //             <InputError className="mt-2" message={errors.name} />
    //         </div>

    //         <div>
    //             <InputLabel htmlFor="email" value="Email" />

    //             <TextInput
    //                 id="email"
    //                 type="email"
    //                 className="mt-1 block w-full"
    //                 value={data.email}
    //                 onChange={(e) => setData('email', e.target.value)}
    //                 required
    //                 autoComplete="username"
    //             />

    //             <InputError className="mt-2" message={errors.email} />
    //         </div>

    //         {mustVerifyEmail && user.email_verified_at === null && (
    //             <div>
    //                 <p className="text-sm mt-2 text-gray-800">
    //                     Your email address is unverified.
    //                     <Link
    //                         href={route('verification.send')}
    //                         method="post"
    //                         as="button"
    //                         className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                     >
    //                         Click here to re-send the verification email.
    //                     </Link>
    //                 </p>

    //                 {status === 'verification-link-sent' && (
    //                     <div className="mt-2 font-medium text-sm text-green-600">
    //                         A new verification link has been sent to your email address.
    //                     </div>
    //                 )}
    //             </div>
    //         )}

    //         <div className="flex items-center gap-4">
    //             <PrimaryButton disabled={processing}>Save</PrimaryButton>

    //             <Transition
    //                 show={recentlySuccessful}
    //                 enter="transition ease-in-out"
    //                 enterFrom="opacity-0"
    //                 leave="transition ease-in-out"
    //                 leaveTo="opacity-0"
    //             >
    //                 <p className="text-sm text-gray-600">Saved.</p>
    //             </Transition>
    //         </div>
    //     </form>
    // </section>
    <div className="col-12 col-lg-6">
      <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
        <div className="app-card-header p-3 border-bottom-0">
          <div className="row align-items-center gx-3">
            <div className="col-auto">
              <div className="app-icon-holder">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
            </div>
            <div className="col-auto">
              <h4 className="app-card-title">Profile Information</h4>
            </div>
          </div>
        </div>
        <div className="app-card-body px-4 w-100">
          <form onSubmit={submit} className='settings-form'>
            <div className="item border-bottom py-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name?"is-invalid" : ""}`}
                id='name'
                required
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                autoComplete="name"
              />
              <div className="invalid-feedback">
                {errors.name}
              </div>
            </div>
            <div className="item border-bottom py-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email?"is-invalid" : ""}`}
                id='email'
                required
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                autoComplete="username"
              />
              <div className="invalid-feedback">
                {errors.email}
              </div>
            </div>
            <button type="submit" disabled={processing} className="btn app-btn-primary" >Save</button>
            <div className="flex items-center gap-4">
              <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
              >
                <p className="text-sm text-gray-600">Saved.</p>
              </Transition>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
