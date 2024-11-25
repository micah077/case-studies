export function hexToRgba(hex, alpha = 1) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse r, g, b values
  let r, g, b;

  if (hex.length === 3) {
    // Convert 3-digit hex to 6-digit hex
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else {
    throw new Error('Invalid hex color code');
  }

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


export const hexToRgb = (hex) => {
  // Remove the '#' if it exists
  hex = hex.replace('#', '');

  // Ensure it's a valid hex code
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `R ${r} G ${g} B ${b}`;
  }
  return 'Invalid Hex Code';
};