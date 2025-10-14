import type { NavItemProps, NavListItem, NavSectionProps } from "$lib/state/types";

const resources: NavListItem = {
  icon: '<span class="icon-[material-symbols-light--pet-supplies] size-5 md:size-6"></span>',
  showBottomBorder: true,
  showTopBorder: true,
  title: 'Resources',
  items: [
    { label: 'Cat Handbook', path: '/handbooks/cat' },
    { label: 'Dog Handbook', path: '/handbooks/dog' },
    {
      label: 'Frequently Asked Questions',
      path: '/faq',
      icon: '<span class="faq-icon"></span>',
    },    
    { label: 'Local Resources', path: '/resources/local' },    
    { label: 'Low Cost Vaccinations', path: '/resources/vaccinations' },
    { label: 'Microchipping', path: '/resources/microchipping' },
    { label: 'Pet Food Assistance', path: '/resources/pet-food-assistance' },
    { label: 'Report a Lost or Found Pet', path: '/resources/lost-and-found'},
  ]
}

export const navList: NavListItem[] = [
  { 
    label: 'Home',
    path: '/', 
    exact: true,
    icon: '<span class="icon-[material-symbols--home-rounded] size-5 md:size-6"></span>',
  },
  {
    label: 'Adoptable Cats',
    path: '/cats/available',
    icon: '<span class="icon-[lucide--cat] size-5 md:size-6"></span>',
  },
  {
    label: 'Adoptable Dogs',
    path: '/dogs/available',
    icon: '<span class="icon-[lucide--dog] size-5 md:size-6"></span>'
  },
  {
    label: 'Adoptable Pocket Pals',
    path: '/pocket-pals/available',
    icon: '<span class="icon-[lucide--rabbit] size-5 md:size-6"></span>'
  },
  resources,
  {
    label: 'About Us',
    path: '/about',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-5 md:size-6" viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/></svg>',
  },
  {
    label: 'Events',
    path: '/events',
    icon: '<span class="icon-[lucide--calendar-days] size-5 md:size-6"></span>'
  },
  {
    label: 'Blog',
    path: '/blog',
    icon: '<span class="icon-[fluent--textbox-16-filled] size-5 md:size-6"></span>'
  },  
  {
    label: 'Donate',
    path: '/donate',
    icon: '<span class="icon-[lucide--heart-handshake] size-5 md:size-6"></span>',
  },
  {
    label: 'Shop',
    path: 'https://adoptafriend.itemorder.com/shop/home/',
    external: true,
    icon: '<span class="icon-[material-symbols--shopping-bag] size-5 md:size-6"></span>'
  }
];

const getNavItems = (item: NavListItem): NavItemProps[] => {
  const items: NavItemProps[] = [];

  if (Object.hasOwn(item, 'title')) {
    const section = item as NavSectionProps;
    section.items.forEach((sectionItem: NavListItem) => {
      const theseItems = getNavItems(sectionItem);
      items.push(...theseItems);
    })
  } else {
    items.push(item as NavItemProps);
  }

  return items;
}

export const showAsActive = (item: NavListItem, pathname: string): boolean => {
  const fixedPathname: string = pathname.trim().toLocaleLowerCase();
  let returnValue: boolean = false;
  const items: NavItemProps[] = getNavItems(item);

  if (item.isActive !== undefined) return item.isActive;

  items.forEach((item: NavItemProps) => {
    const pathToUse: string = item.pathMatch ?? item.path;
    const fixedPath: string = pathToUse.includes('?') ? pathToUse.split('?')[0] : pathToUse.trim().toLocaleLowerCase();

    if (item.isActive) return true;

    if (item.exact) {
      if (fixedPathname === fixedPath) returnValue = true;
    } else {
      if (fixedPathname.includes(fixedPath)) returnValue = true;
    }
  });

  return returnValue;
}