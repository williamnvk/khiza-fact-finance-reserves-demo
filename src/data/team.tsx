import DentsuAegisIcon from '@/components/Icons/DentsuAegis';
import DuckUniversityIcon from '@/components/Icons/DuckUniversityIcon';
import LiqiLogo from '@/components/Icons/Liqi';
import NaveggIcon from '@/components/Icons/Navegg';

export const getTeamMembers = (t: any) => [
  {
    nameKey: 'about.team.members.lucianoJuvinski.name',
    name: t('about.team.members.lucianoJuvinski.name'),
    roleKey: 'about.team.members.lucianoJuvinski.role',
    role: t('about.team.members.lucianoJuvinski.role'),
    image: 'lucianojuvinski.jpeg',
    bioKey: 'about.team.members.lucianoJuvinski.bio',
    bio: t('about.team.members.lucianoJuvinski.bio'),
    social: {
      linkedin: 'juvinski',
      x: 'juvinski',
    },
    brands: [
      {
        type: 'icon',
        asset: <NaveggIcon width={100} height={24} />,
      },
      {
        type: 'icon',
        asset: <DentsuAegisIcon width={100} height={24} />,
      },
      {
        type: 'icon',
        asset: <DuckUniversityIcon width={100} height={24} />,
      },
    ],
  },
  {
    nameKey: 'about.team.members.fernandaGaranhani.name',
    name: t('about.team.members.fernandaGaranhani.name'),
    roleKey: 'about.team.members.fernandaGaranhani.role',
    role: t('about.team.members.fernandaGaranhani.role'),
    image: 'fernandagaranhani.jpeg',
    bioKey: 'about.team.members.fernandaGaranhani.bio',
    bio: t('about.team.members.fernandaGaranhani.bio'),
    social: {
      linkedin: 'fernandagaranhan',
      x: '0xFGB',
    },
    brands: [
      {
        type: 'image',
        asset: '/assets/about/honeyisland.webp',
      },
      {
        type: 'icon',
        asset: <LiqiLogo width={70} style={{ marginLeft: '12px' }} height={24} />,
      },
      {
        type: 'image',
        asset: '/assets/about/dec-institute.webp',
      },
    ],
  },
];
