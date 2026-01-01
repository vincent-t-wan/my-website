/**
 * Root App component
 * Wraps the main router component
 */

import './App.css';
import React from 'react';
import Main from './Main';

/**
 * App component - root of the application
 */
export default function App() {
  return (
    <main>
      <div className="app">
        <Main />
      </div>
    </main>
  );
}
