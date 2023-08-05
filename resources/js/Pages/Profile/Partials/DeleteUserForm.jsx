import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    // <section className={`space-y-6 ${className}`}>
    //     <header>
    //         <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

    //         <p className="mt-1 text-sm text-gray-600">
    //             Once your account is deleted, all of its resources and data will be permanently deleted. Before
    //             deleting your account, please download any data or information that you wish to retain.
    //         </p>
    //     </header>

    //     <DangerButton onClick={confirmUserDeletion}>Delete Account</DangerButton>

    //     <Modal show={confirmingUserDeletion} onClose={closeModal}>
    //         <form onSubmit={deleteUser} className="p-6">
    //             <h2 className="text-lg font-medium text-gray-900">
    //                 Are you sure you want to delete your account?
    //             </h2>

    //             <p className="mt-1 text-sm text-gray-600">
    //                 Once your account is deleted, all of its resources and data will be permanently deleted. Please
    //                 enter your password to confirm you would like to permanently delete your account.
    //             </p>

    //             <div className="mt-6">
    //                 <InputLabel htmlFor="password" value="Password" className="sr-only" />

    //                 <TextInput
    //                     id="password"
    //                     type="password"
    //                     name="password"
    //                     ref={passwordInput}
    //                     value={data.password}
    //                     onChange={(e) => setData('password', e.target.value)}
    //                     className="mt-1 block w-3/4"
    //                     isFocused
    //                     placeholder="Password"
    //                 />

    //                 <InputError message={errors.password} className="mt-2" />
    //             </div>

    //             <div className="mt-6 flex justify-end">
    //                 <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

    //                 <DangerButton className="ml-3" disabled={processing}>
    //                     Delete Account
    //                 </DangerButton>
    //             </div>
    //         </form>
    //     </Modal>
    // </section>
    <div className="col-12 col-lg-12">
      <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
        <div className="app-card-header p-3 border-bottom-0">
          <div className="row align-items-center gx-3">
            <div className="col-auto">
              <h4 className="app-card-title">Delete Account</h4>
            </div>
          </div>
        </div>
        <div className="app-card-body px-4 w-100">
          <p>
            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
          </p>
          <button onClick={confirmUserDeletion} className="btn btn-danger mb-3">DELETE ACCOUNT</button>
          {/* <div className="modal" show={confirmingUserDeletion} onClose={closeModal}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
