import { v4 } from 'uuid';

export class AboutSectionThreeData {
  public static readonly data = [
    {
      title: 'Whole ingredients first.',
      description:
        'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
      id: v4(),
    },
    {
      title: 'Flavor without compromise.',
      description:
        'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
      id: v4(),
    },
    {
      title: 'Respect for time.',
      description:
        'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.',
      id: v4(),
    },
    {
      title: 'Sustainable choices.',
      description:
        'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.',
      id: v4(),
    },
  ];
}
