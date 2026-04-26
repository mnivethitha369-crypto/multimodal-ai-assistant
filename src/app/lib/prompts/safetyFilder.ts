export const SAFETY_REGEX = /\b(bomb|weapon|hack|malware|exploit|kill|illegal drug|child|nsfw)\b/i;

export function isSafe(input: string): boolean {
  return !SAFETY_REGEX.test(input);
}

export function safetyMessage(): string {
  return "Protocol Violation: Your request contains restricted keywords. Access denied.";
}