const paths = {
  arrow: 'm9 5 7 7-7 7',
  phone: 'M6 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3l-5-2-1.5 2a13 13 0 0 1-7.5-7.5L9 8 7 3Z',
  menu: 'M3 5h18M3 12h18M3 19h18',
  close: 'm5 5 14 14M19 5 5 19',
  pin: 'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z M12 10h.01',
  home: 'm2 11 10-9 10 9M5 10v11h5v-7h4v7h5V10',
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  fleet: 'M2 17h3l2-4h6l3 4h5v4H2zM10 13V7l4-3h4l3 3v6h-5l-1-4h-3M9 21h.01M16 21h.01M2 17 5 7l6-3',
  hardhat: 'M4 17v-3a8 8 0 0 1 5-7.4M15 6.6a8 8 0 0 1 5 7.4v3M9 13V5h6v8M2 17h20v4H2z',
  mail: 'M2 5h20v14H2zM3 6l9 7 9-7',
  commercial: 'M2 21h20M4 21V9h5M9 21V3h7v18M16 8h4v13M6 12h.01M6 16h.01M12 6h.01M12 10h.01M12 14h.01M12 18h.01M18 12h.01M18 16h.01',
  municipal: 'M2 21h20M4 18h16M3 9h18M5 9a7 7 0 0 1 14 0M12 2v1M6 11v5M10 11v5M14 11v5M18 11v5',
  pipe: 'M3 20h8v-3H3zM4 17v-4a7 7 0 0 1 7-7h2m-3 11v-4a1 1 0 0 1 1-1h2m0-7h6v8h-6zM19 7h3v4h-3',
  shield: 'M12 2c3 2 6 3 9 3v5c0 6-4 10-9 12-5-2-9-6-9-12V5c3 0 6-1 9-3Zm-4 10 3 3 5-6',
}

export default function MobileIcon({ name, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
