import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const updatePassword = (e) => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    // <section className={className}>
    //     <header>
    //         <h2 className="text-lg font-medium text-gray-900">Update Password</h2>

    //         <p className="mt-1 text-sm text-gray-600">
    //             Ensure your account is using a long, random password to stay secure.
    //         </p>
    //     </header>

    //     <form onSubmit={updatePassword} className="mt-6 space-y-6">
    //         <div>
    //             <InputLabel htmlFor="current_password" value="Current Password" />

    //             <TextInput
    //                 id="current_password"
    //                 ref={currentPasswordInput}
    //                 value={data.current_password}
    //                 onChange={(e) => setData('current_password', e.target.value)}
    //                 type="password"
    //                 className="mt-1 block w-full"
    //                 autoComplete="current-password"
    //             />

    //             <InputError message={errors.current_password} className="mt-2" />
    //         </div>

    //         <div>
    //             <InputLabel htmlFor="password" value="New Password" />

    //             <TextInput
    //                 id="password"
    //                 ref={passwordInput}
    //                 value={data.password}
    //                 onChange={(e) => setData('password', e.target.value)}
    //                 type="password"
    //                 className="mt-1 block w-full"
    //                 autoComplete="new-password"
    //             />

    //             <InputError message={errors.password} className="mt-2" />
    //         </div>

    //         <div>
    //             <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

    //             <TextInput
    //                 id="password_confirmation"
    //                 value={data.password_confirmation}
    //                 onChange={(e) => setData('password_confirmation', e.target.value)}
    //                 type="password"
    //                 className="mt-1 block w-full"
    //                 autoComplete="new-password"
    //             />

    //             <InputError message={errors.password_confirmation} className="mt-2" />
    //         </div>

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
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-shield-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z" />
                  <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </div>

            </div>
            <div className="col-auto">
              <h4 className="app-card-title">Update Password</h4>
            </div>
          </div>
        </div>
        <div className="app-card-body px-4 w-100">
          <form onSubmit={updatePassword} className='settings-form'>
            <div className="item border-bottom py-3">
              <label htmlFor="current">Current Password</label>
              <input type="password"
                className={`form-control ${errors.current_password?"is-invalid" : ""}`}
                id='current'
                ref={currentPasswordInput}
                value={data.current_password}
                onChange={(e) => setData('current_password', e.target.value)}
                autoComplete="current-password"
                required
              />
              <div className="invalid-feedback">
                {errors.current_password}
              </div>
            </div>
            <div className="item border-bottom py-3">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                className={`form-control ${errors.password?"is-invalid" : ""}`}
                id='password'
                ref={passwordInput}
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                autoComplete="new-password"
                required
              />
              <div className="invalid-feedback">
                {errors.password}
              </div>
            </div>
            <div className="item border-bottom py-3">
              <label htmlFor="password_corfirmation">Password Confirmation</label>
              <input
                type="password"
                className={`form-control ${errors.password_confirmation?"is-invalid" : ""}`}
                id='password_corfirmation'
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                autoComplete="new-password"
                required
              />
              <div className="invalid-feedback">
                {errors.password_confirmation}
              </div>
            </div>
            <div>
              <button type="submit" className="btn app-btn-primary mb-3" >Save</button>
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
