import React from 'react'
import { navigationMenu } from '../data/NavigationMenu';
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="">
        <ul className='nav-menu-blk'>
          {navigationMenu.map((menuItem: any, idx: number) => {
            return (
              <li key={`navigation-menu-${idx}`}>
                <a href={menuItem.link}>{menuItem.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}