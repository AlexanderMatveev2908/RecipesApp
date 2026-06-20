import { v4 } from 'uuid';

export class AboutSectionTwoData {
  public static readonly data = [
    {
      title: 'Cut through the noise.',
      description:
        'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.',
      id: v4(),
    },
    {
      title: 'Empower home kitchens.',
      description:
        'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
      id: v4(),
    },
    {
      title: 'Make healthy look good.',
      description:
        'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
      id: v4(),
    },
  ];
}
