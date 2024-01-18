export const STATUS_ROADMAP = {
  planned: {
    heading: 'Planned',
    description: 'Ideas prioritized for research',
    color: '#F49F85',
    value: 'planned',
  },
  progress: {
    heading: 'In-Progress',
    description: 'Currently being developed',
    color: '#AD1FEA',
    value: 'progress',
  },
  live: {
    heading: 'Live',
    description: 'Released features',
    color: '#62BCFA',
    value: 'live',
  },
  suggestion: {
    heading: 'Suggestion',
    description: '',
    color: '#62BCFA',
    value: 'suggestion',
  },
};

export const SUGGESTION_STATUSES = [
  { id: 1, value: 'suggestion', text: 'Suggestion' },
  { id: 2, value: 'planned', text: 'Planned' },
  { id: 3, value: 'progress', text: 'In-Progress' },
  { id: 4, value: 'live', text: 'Live' },
];

export const CATEGORIES_TAGS = [
  'All',
  'UI',
  'UX',
  'Enhancement',
  'Bug',
  'Feature',
];

export const CATEGORIES = [
  { id: 1, value: 'feature', text: 'Feature' },
  { id: 2, value: 'ui', text: 'UI' },
  { id: 3, value: 'ux', text: 'UX' },
  { id: 4, value: 'enhancement', text: 'Enhancement' },
  { id: 5, value: 'bug', text: 'Bug' },
];
