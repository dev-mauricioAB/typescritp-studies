export function bitwiseComplement(n: number): number {
  // Convert the number to its binary representation as a string, without leading zeros.
  // Example: 5 → "101", 7 → "111".
  const nBinary = n.toString(2);

  // Flip every bit in the binary string:
  //   - /./g matches every single character (each bit).
  //   - The replacement callback turns '0' → '1' and '1' → '0'.
  // Example: "101" → "010", "111" → "000".
  const flipped = nBinary.replace(/./g, bit => bit === '0' ? '1' : '0');

  // Convert the flipped binary string back to a decimal integer.
  // The second parameter `2` tells parseInt that the string is in base‑2 (binary).
  // Example: "010" → 2, "000" → 0.
  const intComplement = Number.parseInt(flipped, 2);

  // Return the integer that represents the bitwise complement of the input n.
  return intComplement;
}