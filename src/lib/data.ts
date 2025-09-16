import { PlaceHolderImages } from '@/lib/placeholder-images';

export const statsData = [
  {
    title: 'Total Calls',
    value: '1,234',
    change: '+12.5%',
    icon: 'PhoneCall',
  },
  {
    title: 'Avg. Call Duration',
    value: '4m 32s',
    change: '-2.1%',
    icon: 'Clock',
  },
  {
    title: 'Answered Calls',
    value: '98.2%',
    change: '+0.5%',
    icon: 'PhoneIncoming',
  },
  {
    title: 'Missed Calls',
    value: '22',
    change: '+15%',
    icon: 'PhoneMissed',
  },
];

export const chartData = [
  { date: 'Jan 23', Incoming: 86, Outgoing: 45 },
  { date: 'Feb 23', Incoming: 92, Outgoing: 58 },
  { date: 'Mar 23', Incoming: 105, Outgoing: 62 },
  { date: 'Apr 23', Incoming: 112, Outgoing: 71 },
  { date: 'May 23', Incoming: 98, Outgoing: 65 },
  { date: 'Jun 23', Incoming: 120, Outgoing: 80 },
  { date: 'Jul 23', Incoming: 135, Outgoing: 85 },
];

export const recentActivityData = [
  {
    name: 'Olivia Martin',
    number: '(316) 555-0116',
    type: 'Incoming',
    duration: '2m 15s',
    avatar: PlaceHolderImages.find(img => img.id === 'user-avatar-2')?.imageUrl || '',
  },
  {
    name: 'Liam Smith',
    number: '(270) 555-0117',
    type: 'Outgoing',
    duration: '5m 45s',
    avatar: PlaceHolderImages.find(img => img.id === 'user-avatar-3')?.imageUrl || '',
  },
  {
    name: 'Noah Johnson',
    number: '(480) 555-0118',
    type: 'Voicemail',
    duration: '0m 32s',
    avatar: PlaceHolderImages.find(img => img.id === 'user-avatar-4')?.imageUrl || '',
  },
  {
    name: 'Emma Brown',
    number: '(208) 555-0119',
    type: 'Missed',
    duration: '0m 0s',
    avatar: PlaceHolderImages.find(img => img.id === 'user-avatar-5')?.imageUrl || '',
  },
    {
    name: 'Ava Davis',
    number: '(702) 555-0120',
    type: 'Incoming',
    duration: '10m 2s',
    avatar: PlaceHolderImages.find(img => img.id === 'user-avatar-1')?.imageUrl || '',
  },
];

export const featuresData = [
  {
    title: 'Call Forwarding',
    description: 'Never miss a call. Forward incoming calls to any device, anywhere in the world. Stay connected on your terms.',
    icon: 'PhoneForwarded',
  },
  {
    title: 'Number Porting',
    description: 'Keep your existing business number. Our seamless porting process makes switching to Connectify a breeze.',
    icon: 'BringToFront',
  },
  {
    title: 'Interactive Voice Response (IVR)',
    description: 'Guide callers to the right department with a professional, automated menu system. Improve efficiency and customer experience.',
    icon: 'Network',
  },
  {
    title: 'Multi-Platform Support',
    description: 'Access Connectify on desktop, web, and mobile. Your business communications, synchronized across all your devices.',
    icon: 'Laptop',
  }
];
