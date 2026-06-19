import { SvgAdvBolt } from '@/common/components/svgs/advanced/bolt/bolt';
import { SvgAdvCarrots } from '@/common/components/svgs/advanced/carrots/carrots';
import { SvgAdvSearch } from '@/common/components/svgs/advanced/search/search';
import { v4 } from 'uuid';

export class DataHomeSectionTwo {
  public static readonly data = [
    {
      Svg: SvgAdvCarrots,
      title: 'Whole-food recipes',
      description: 'Each dish uses everyday, unprocessed ingredients.',
      id: v4(),
    },
    {
      Svg: SvgAdvBolt,
      title: 'Minimum fuss',
      description: 'All recipes are designed to make eating healthy quick and easy.',
      id: v4(),
    },
    {
      Svg: SvgAdvSearch,
      title: 'Search in seconds',
      description: 'Filter by name or ingredient and jump straight to the recipe you need.',
      id: v4(),
    },
  ];
}
