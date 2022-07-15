export interface ILessonPage {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
  track: string;
}

export interface IGetLessonResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
    track: 'react' | 'reactnative' | 'nodejs';
  }[]
}