import * as Harvard from '@/components/templates/harvard/harvard';
import * as Experimental from '@/components/templates/experimental';

type Templates = {
  Harvard: typeof Harvard;
  Experimental: typeof Experimental;
};
export const Templates = {
  Harvard,
  Experimental,
};

export type AvailableTemplates = keyof Templates;
