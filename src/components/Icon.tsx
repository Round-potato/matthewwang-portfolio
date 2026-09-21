type IconName = 'arrow' | 'down' | 'sun' | 'moon';
export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'arrow' && <path d="M6 18 18 6M6 6h12v12" />}
      {name === 'down' && <path d="M12 4v16m-6-6 6 6 6-6" />}
      {name === 'sun' && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
        </>
      )}
      {name === 'moon' && (
        <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z" />
      )}
    </svg>
  );
}
