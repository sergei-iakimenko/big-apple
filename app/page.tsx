'use client';

import {useEffect, useState} from 'react';

export default function Home() {
  const [isOver21, setIsOver21] = useState(localStorage.getItem('isOver21'));

  function showDialog() {
    (document.getElementById('validationDialog') as HTMLDialogElement)!.showModal();
  }

  useEffect(() => {
    if (isOver21 === null) {
        showDialog();
    }
  }, []);

  function handleClick() {
    const answer = (document.querySelector('input[name="answer"]:checked') as HTMLInputElement).value;
    if (answer === 'yes') {
      localStorage.setItem('isOver21', 'true');
    } else if (answer === 'no') {
      localStorage.setItem('isOver21', 'false');
    }
    (document.getElementById('validationDialog') as HTMLDialogElement)!.close();
    setIsOver21(localStorage.getItem('isOver21'));
  }

  return (
      <main>
        {isOver21 === 'true' ? <span>Pick the cider of your choice!</span> : null}
        <dialog id='validationDialog'>
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
        </dialog>

        {isOver21 === 'false' ? <span>Please come back when you're 21</span> : null}
      </main>
  );
}
