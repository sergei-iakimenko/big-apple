'use client';

import './main.css';
import {useEffect} from 'react';

export function Main({permitted}: { permitted: boolean }) {

  useEffect(() => {
    if(!permitted) return;

    const menu = document.querySelector('.threeD-button-set') as HTMLElement;
    const menuRect = menu.getBoundingClientRect()

    const { matches:motionOK } = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    )

    const getAngles = (clientX: number, clientY: number) => {
      const { x, y, width, height } = menuRect

      const dx = clientX - (x + 0.5 * width)
      const dy = clientY - (y + 0.5 * height)

      return {dx,dy}
    }

    window.addEventListener('mousemove', ({target, clientX, clientY}) => {
      const {dx,dy} = getAngles(clientX, clientY);

      menu.style.setProperty('--x', `${dy / 20}deg`)
      menu.style.setProperty('--y', `${dx / 20}deg`)
    })
  }, []);

  return (
    permitted ?
      <><span>Pick the cider of your choice!</span>
        <ul className='threeD-button-set'>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Menu</button>
          </li>
          <li>
            <button>Cidreriers</button>
          </li>
          <li>
            <button>Subproducts</button>
          </li>
        </ul>
      </> :
      <span>Please come back when you&apos;re 21</span>
  )
}