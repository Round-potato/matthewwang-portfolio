import { useTheme } from './theme-context';
import Icon from './Icon';
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="theme-toggle"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <Icon name={theme === 'light' ? 'moon' : 'sun'} />
    </button>
  );
}
