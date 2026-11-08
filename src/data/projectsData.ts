import { ProjectDetail } from './types';
import { PROJECTS_PART_1 } from './projectsDataPart1';
import { PROJECTS_PART_2 } from './projectsDataPart2';

export const PROJECTS_DATA: ProjectDetail[] = [
  ...PROJECTS_PART_1,
  ...PROJECTS_PART_2
];
