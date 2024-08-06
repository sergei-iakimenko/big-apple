'use client';
import {useEffect, useState} from 'react';
import {ConfirmationDialog} from './confirmation-dialog';
import {Main} from '@/components/main';

export default function Home() {
  const [permitted, setPermitted] = useState<boolean | null>(null);

  useEffect(() => {
    const valueOfPermitted = localStorage.getItem('permitted');
    setPermitted(valueOfPermitted === null ? null : valueOfPermitted === 'true');
  }, []);

  function handleConfirmation(confirmed: boolean): void {
    setPermitted(confirmed);
  }

  return (
    <main>
      {permitted === null ? <ConfirmationDialog confirmMaturity={handleConfirmation}/> :
        <Main permitted={permitted}/>}
    </main>
  );
}
