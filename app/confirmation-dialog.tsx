'use client';
import {useEffect} from 'react';

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

  return <dialog id='validationDialog'>
    <fieldset>
      <legend>Are you over 21 years old?</legend>
      <input type='radio' id='yes' value='yes' name='answer'></input>
      <label htmlFor='no'>Yes</label>

      <input type='radio' id='no' value='no' name='answer'></input>
      <label htmlFor='no'>No</label>
    </fieldset>
    <menu>
      <button onClick={handleClick} autoFocus>Confirm</button>
    </menu>
  </dialog>;
}