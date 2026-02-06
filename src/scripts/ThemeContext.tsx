/* FOR LIGHT AND DARK TOGGLE */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const ThemeContext = createContext<{ toggleTheme: () => void } | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // ✅ Default to dark if no theme is stored
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : true;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    const themeToggle = document.getElementById('theme-toggle');
    const toggleCircle = document.getElementById('toggle-circle');

    if (themeToggle && toggleCircle) {
      themeToggle.classList.toggle('active', isDark);
      toggleCircle.classList.toggle('active', isDark);
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ toggleTheme: () => setIsDark(prev => !prev) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
