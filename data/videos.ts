export interface Video {
  title: string;
  description: string;
  date: string;
  id: string;
  tags?: Array<string>;
}

const videos: Array<Video> = [
  {
    title: 'How to animate a modal dialog component with Framer Motion',
    description:
      'How to animate a React Aria modal dialog component using Framer Motion.',
    date: '2021-12-31',
    id: 'n1-XaRz4LHs',
    tags: ['react', 'framer-motion'],
  },
  {
    title: 'Create an animated nav shadow with Framer Motion',
    description:
      'How to create an animated nav shadow element using Framer Motion components.',
    date: '2021-12-23',
    id: 'CbSVUCQA2K4',
    tags: ['react', 'framer-motion'],
  },
  {
    title: 'How to add gradient overlays to your images with CSS',
    description:
      'Learn how to add a gradient overlay to your images to create a nice modern effect.',
    date: '2020-06-16',
    id: 'mT10ZJdlh9Y',
    tags: ['css'],
  },
  {
    title: 'How to create vertical text with CSS',
    description:
      'How to use CSS writing modes to create vertical text within your websites.',
    date: '2020-02-19',
    id: 'x5Dx5zgDwnI',
    tags: ['css'],
  },
  {
    title: 'How to create custom checkbox and radio inputs with CSS',
    description:
      'Create an accessible custom checkbox or radio input with CSS.',
    date: '2019-11-21',
    id: '54YeIQ7Eo_g',
    tags: ['css'],
  },
  {
    title: 'How to create overlapping images with CSS Grid',
    description:
      'Create an overlapping image effect with CSS Grid. No absolute positioning or negative margins needed.',
    date: '2019-02-14',
    id: 'sZJrcOfBaNY',
    tags: ['css'],
  },
  {
    title: 'How to break elements outside of their container with CSS',
    description:
      'Learn how to "break" elements outside of their containers using the :not selector.',
    date: '2018-06-13',
    id: 'UQpvYbFNzFc',
    tags: ['css'],
  },
  {
    title: 'How to animate box-shadows with transforms and opacity',
    description:
      'A quick look at how to animate material design box shadow elements with CSS.',
    date: '2018-02-06',
    id: 'ZkDWCCHiPg4',
    tags: ['css'],
  },
  {
    title: 'Preserve image aspect ratios with CSS',
    description:
      'How to use intrinsic ratios with CSS to keep content from "shifting" as embedded media is loaded.',
    date: '2017-11-24',
    id: 'iSaBRUgAXnk',
    tags: ['css'],
  },
];

export default videos;
