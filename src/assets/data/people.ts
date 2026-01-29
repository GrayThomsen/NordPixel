export interface Person {
  id: string;
  name: string;
  title?: string;
  company?: string;
  linkedIn?: string;
  blurb?: string;
}

export const people: Person[] = [
  {
    id: 'p-1',
    name: 'Jane Doe',
    title: 'Director of Design',
    company: 'Acme Co.',
    linkedIn: '#',
    blurb: 'Worked together on a large e‑commerce 3D visualization that increased conversions.'
  },
  {
    id: 'p-2',
    name: 'John Smith',
    title: 'CTO',
    company: 'Innovate Labs',
    linkedIn: '#',
    blurb: 'Collaborated on a real-time data visualization platform.'
  },
];