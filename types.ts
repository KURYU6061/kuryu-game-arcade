export interface Game {
  id: string;
  title: string;
  url: string;
  description: string;
  iconKey: 'word' | 'number' | 'target' | 'box' | 'rocket' | 'star' | 'bug';
  color: string;
}