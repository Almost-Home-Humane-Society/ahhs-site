import type { ListItem } from "$lib/types/ListItem";

const url = 'https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimals2.aspx?species=Cat&gender=A&agegroup=All&location=&site=&onhold=A&orderby=ID&colnum=1&authkey=yoamoe7lahlatlahoe0leqoeqoaswiastouviavlatrlesplut&recAmount=&detailsInPopup=Yes&featuredPet=Include&stageID=';
const options: RequestInit = {
  method: 'GET',
  mode: 'cors',
  headers: {'content-type': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'},
  // body: new URLSearchParams({
  //   authKey: 'yoamoe7lahlatlahoe0leqoeqoaswiastouviavlatrlesplut',
  //   speciesID: '',
  //   sex: '',
  //   ageGroup: '',
  //   location: '',
  //   site: '',
  //   onHold: '',
  //   orderBy: '',
  //   primaryBreed: '',
  //   secondaryBreed: '',
  //   specialNeeds: '',
  //   noDogs: '',
  //   noCats: '',
  //   noKids: '',
  //   stageID: ''
  // })
};

function isNumeric(value: any): boolean {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

function numberValue(value: any): number | undefined {
  if (isNumeric(value)) {
    return parseFloat(value);
  }
  return undefined;
}

function getAge(value: number | undefined): [number, number] {
  if (value && value < 12) return [0, value];
  if (value && value === 12) return [1, 0];

  const years = value ? Math.floor(value / 12) : 0;
  const months = value ? value % 12 : 0;
  return [years, months];
}

const getListing = async (): Promise<ListItem[]> => {
  try {
    const returnItems: ListItem[] = [];
    return Promise.resolve(returnItems);
  } catch (error) {
    return Promise.reject(error);
  }
}

export const getCatListing = async (): Promise<ListItem[]> => {
  try {
    const allItems = await getListing();
    return allItems.filter(item => item.species === 'cat');
  } catch (error) {
    return Promise.reject(error);
  }
}

export const getDogListing = async (): Promise<ListItem[]> => {
  try {
    const allItems = await getListing();
    return allItems.filter(item => item.species === 'dog');
  } catch (error) {
    return Promise.reject(error);
  }
}