const Icon = ({ name, size = 18, stroke = 1.5, className = '' }) => {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  };
  switch (name) {
    case 'arrow-right':
      return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case 'arrow-down-right':
      return <svg {...props}><path d="M7 7l10 10M17 8v9h-9" /></svg>;
    case 'pin':
      return <svg {...props}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
    case 'calendar':
      return <svg {...props}><rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>;
    case 'mail':
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3.5 6.5l8.5 7 8.5-7" /></svg>;
    case 'phone':
      return <svg {...props}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>;
    case 'spark':
      return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.5 5.5l4 4M14.5 14.5l4 4M18.5 5.5l-4 4M9.5 14.5l-4 4" /></svg>;
    case 'node':
      return <svg {...props}><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8 11l8-4M8 13l8 4" /></svg>;
    case 'play':
      return <svg {...props}><polygon points="6 4 20 12 6 20 6 4" /></svg>;
    case 'check':
      return <svg {...props}><path d="M4 12l5 5L20 6" /></svg>;
    case 'plus':
      return <svg {...props}><path d="M5 12h14M12 5v14" /></svg>;
    case 'minus':
      return <svg {...props}><path d="M5 12h14" /></svg>;
    case 'external':
      return <svg {...props}><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>;
    case 'menu':
      return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case 'close':
      return <svg {...props}><path d="M6 6l12 12M18 6l-12 12" /></svg>;
    case 'doc':
      return <svg {...props}><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v5h5M9 13h8M9 17h6" /></svg>;
    case 'stack':
      return <svg {...props}><path d="M12 3l9 5-9 5-9-5 9-5Z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></svg>;
    case 'filter':
      return <svg {...props}><path d="M3 5h18l-7 9v6l-4-2v-4L3 5Z" /></svg>;
    case 'scroll':
      return <svg {...props}><path d="M5 7a3 3 0 0 1 6 0v11H6a3 3 0 0 1-3-3V7Z" /><path d="M11 7v8a3 3 0 0 0 3 3h5a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-3" /></svg>;
    case 'compass':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M16 8l-2 6-6 2 2-6 6-2Z" /></svg>;
    default:
      return null;
  }
};

export default Icon;
