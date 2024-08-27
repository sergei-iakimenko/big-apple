'use client';
import {useEffect} from 'react';
import './confirmation-dialog.css';

export function ConfirmationDialog(props: { confirmMaturity: (permitted: boolean) => void }) {
  useEffect(() => {
    (document.getElementById('validationDialog') as HTMLDialogElement)!.showModal();
  }, []);

  function handleClick() {
    const checkedRadio = document.querySelector('input[name="answer"]:checked');
    if (checkedRadio !== null) {
      const confirmed = (checkedRadio as HTMLInputElement).value === 'yes';
      props.confirmMaturity(confirmed);
      (document.getElementById('validationDialog') as HTMLDialogElement)!.close();
    }
  }

  return <dialog id='validationDialog' className='sm:foo-class p-4 rounded-lg'>
    <fieldset>
      <legend className='mb-4 text-lg'>Are you over 21 years old?</legend>
      <div className='flex justify-between'>
        <div>
          <input className='mr-1 shadow-sm' type='radio' id='yes' value='yes' name='answer'></input>
          <label className='mr-4 text-base' htmlFor='yes'>Yes</label>
          <input className='mr-1 shadow-sm' type='radio' id='no' value='no' name='answer'></input>
          <label htmlFor='no'>No</label>
        </div>
        <button className='p-1 rounded-lg bg-amber-600 text-amber-50 shadow-lg' onClick={handleClick} autoFocus>Confirm</button>
      </div>
    </fieldset>
  </dialog>;
}