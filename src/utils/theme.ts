export declare const localStorage: { theme: 'light' | 'dark' };

// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

/**
 * our theme mode types
 */
type theme = 'dark' | 'light';

/**
 * returns current theme
 * @returns
 */
export function getTheme() {
  if (localStorage.theme) {
    return localStorage.theme;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

/**
 * toggle theme mode
 * @param forceMode if you need to force
 * @returns
 */
export function toggleTheme(forceMode?: theme) {
  if (forceMode) {
    localStorage.theme = forceMode;
  } else {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
  }

  /**
   * helper to add/remove from root element
   * @param add class to remove
   * @param remove class to remove
   */
  function update(add: theme, remove: theme) {
    // ref
    const classList = document.documentElement.classList;
    // remove if it does exist
    if (classList.contains(remove)) {
      classList.remove(remove);
    }

    // add if its missing
    if (!classList.contains(add)) {
      classList.add(add);
    }
  }

  if (localStorage.theme === 'dark') {
    update('dark', 'light');
  } else {
    update('light', 'dark');
  }

  return localStorage.theme;
}
