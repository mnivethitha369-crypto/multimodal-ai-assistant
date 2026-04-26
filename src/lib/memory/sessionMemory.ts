export interface MemoryEntry {
  key: string;
  value: any;
  timestamp: number;
}

export class SessionMemory {
  private memory = new Map<string, MemoryEntry>();

  set(key: string, value: any) {
    this.memory.set(key, { key, value, timestamp: Date.now() });
  }

  get(key: string) {
    return this.memory.get(key)?.value;
  }

  buildContext(): string {
    return Array.from(this.memory.values())
      .map(m => `${m.key}: ${JSON.stringify(m.value)}`)
      .join('\n');
  }
}