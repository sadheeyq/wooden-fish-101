'use client';

import React, { useState } from 'react';

const demoUsers = [
  { name: 'You', knocks: 0 },
  { name: 'Alice', knocks: 33 },
  { name: 'Bob', knocks: 51 },
  { name: 'Cynthia', knocks: 12 },
  { name: 'David', knocks: 78 },
];

export default function Home() {
  const [knocks, setKnocks] = useState(0);
  const [users, setUsers] = useState(demoUsers);

  function handleKnock() {
    if (knocks < 101) {
      setKnocks(knocks + 1);
      const updatedUsers = [...users];
      updatedUsers[0].knocks = knocks + 1;
      setUsers(updatedUsers);
    }
  }

  return (
    <main style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🐟 Wooden Fish 101</h1>
      <p>Knock the wooden fish. You can knock up to 101 times per day!</p>
      <button
        style={{
          fontSize: '1.2em',
          padding: '16px 40px',
          margin: '16px',
          background: '#f5c16c',
          border: '1px solid #ccc',
          borderRadius: '12px',
          cursor: knocks < 101 ? 'pointer' : 'not-allowed',
        }}
        onClick={handleKnock}
        disabled={knocks >= 101}
      >
        Knock!
      </button>
      <p>
        <strong>KNOCKS TODAY: {knocks}/101</strong>
      </p>
      {knocks >= 101 && <p>✅ You've reached your 101 knocks for today!</p>}

      <h2 style={{ marginTop: '40px' }}>🏆 Leaderboard</h2>
      <table style={{ margin: '0 auto', fontSize: '1.1em' }}>
        <thead>
          <tr>
            <th style={{ padding: '0 18px' }}>User</th>
            <th style={{ padding: '0 18px' }}>Knocks Today</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => b.knocks - a.knocks)
            .map((user, idx) => (
              <tr key={idx}>
                <td style={{ padding: '0 18px' }}>{user.name}</td>
                <td style={{ padding: '0 18px' }}>{user.knocks}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
