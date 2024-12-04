import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from '@/common/components/elements/Image';

import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS, BACKEND_STACKS ,UI_STACKS} from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';
import MDXComponent from '@/common/components/elements/MDXComponent';

import ProjectLink from './ProjectLink';
const ALL_STACKS = {...STACKS, ...BACKEND_STACKS, ...UI_STACKS};
const ProjectDetail = ({
  title,
  image,
  stacks,
  slug,
  link_demo,
  link_github,
}: ProjectItemProps) => {
    const stacksArray = stacks.split(',');
    const docDir = path.join(process.cwd(), 'src', 'projectContent');
    const filePath = path.join(docDir, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(source);
  return (
    <div className='space-y-8'>
      <div className='flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='mb-1 text-[15px] text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{ALL_STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo}
          link_github={link_github}
        />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className='hover:scale-105'
      />
      {content && (
        <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;