import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FilmService {

  private films = [
    {
      id: 1,
      name: 'Thor: Ragnarok',
      year: '2017',
      description: 'Returning to Asgard in search of a ' +
        'mysterious enemy hunting the Infinity Stones, Thor ' +
        'discovers that the actions of his brother Loki, who captured ' +
        'the throne of Asgard, led to the approach of the most terrible event - Ragnarok.'
    },
    {
      id: 2,
      name: 'Wonder Woman',
      year: '2017',
      description: 'Before becoming Wonder Woman, she was Diana, ' +
        'a princess of the Amazons trained to be an invincible warrior. ' +
        'And when an American pilot crashes on the shores of a paradise ' +
        'island that served as her homeland, sheltered from the outside world, ' +
        'and talks about a serious conflict raging in the outside world, Diana ' +
        'leaves her home to cope with this threat.'
    },
    {
      id: 3,
      name: 'Star Wars: The Last Jedi',
      year: '2017',
      description: 'The balance of power is again broken, and ' +
        'events are developing at an incredible speed! Ray, Finn, the ' +
        'ubiquitous BB-8 droid, and other heroes face a dangerous battle with the mighty First Order.'
    },
    {
      id: 4,
      name: 'Blade Runner 2049',
      year: '2017',
      description: 'In the not too distant future, the world is populated ' +
        'by people and replicants created to do the hardest work. Police Officer ' +
        'Kay\'s job is to keep replicants in check in the face of increasing stress'
    },
    {
      id: 5,
      name: 'Justice league',
      year: '2017',
      description: 'Realizing that there are threats that cannot be dealt with alone, ' +
        'Batman and Superman create a completely new team, bringing together the most ' +
        'powerful defenders of humanity. '
    },
    {
      id: 6,
      name: 'Alien. Covenant',
      year: '2017',
      description: 'The surviving members of the Prometheus team Elizabeth and ' +
        'android David took the first step towards solving the mystery of the engineers. ' +
        'Now it\'s time to find out the rest of the truth that is hidden on the home planet ' +
        'of the whitish giants - Paradise.'
    },
    {
      id: 7,
      name: 'Han Solo: Star Wars. Stories',
      year: '2018',
      description: 'The film tells about the adventures of the young space daredevil ' +
        'Han Solo and his faithful partner Chewbacca and how they became the fastest ' +
        'pilots and the most cunning smugglers of the distant Galaxy.'
    },
    {
      id: 8,
      name: 'Deadpool 2',
      year: '2018',
      description: 'Having survived the deadly attack of the bulls, the disfigured cafeteria ' +
        'chef is trying to fulfill his dream - to become the hottest bartender in Mayberry - ' +
        'and at the same time to cope with lost taste sensations. To restore the severity of ' +
        'feelings, as well as the streaming drive, Wade will have to fight with ninjas, a yakuza ' +
        'and a pack of sexually aggressive dogs, while he will go around the globe and understand ' +
        'the importance of family, friendship and taste - and at the same time he will discover ' +
        'a new craving for adventure and earn the coveted inscription on the circle "The best ' +
        'lover in the world.'
    },
    {
      id: 9,
      name: 'Tomb Raider: Lara Croft',
      year: '2018',
      description: 'Lara Croft is a very independent daughter of an eccentric adventurer who ' +
        'disappeared as soon as she became a teenager. Now she is twenty-one, she lives her ' +
        'life aimlessly, courier dissecting on a bike along the clogged streets of East London, ' +
        'and her earnings are barely enough to pay for an apartment and college classes. Determined ' +
        'to break through herself, she refuses to take over the leadership of her father’s global ' +
        'empire, equally categorically rejecting the idea that he really disappeared.'
    },
    {
      id: 10,
      name: 'Guardians of the Galaxy',
      year: '2014',
      description: 'The brave traveler Peter Quill falls into the hands of a mysterious artifact ' +
        'belonging to the powerful and ruthless villain Ronan, who is building cunning plans to ' +
        'capture the Universe. Peter finds himself at the center of intergalactic hunting, where the ' +
        'victim is himself.'
    },
    {
      id: 11,
      name: 'Pacific Rim 2',
      year: '2018',
      description: 'A team of manned robot defenders has stopped the invasion of giant alien monsters. ' +
        'The great battle for the Pacific frontier marked a new chapter in the history of mankind. ' +
        'However, the war is just beginning ... The time has come for a new generation to assert its ' +
        'right to Earth.'
    },
    {
      id: 12,
      name: 'Interstellar',
      year: '2014',
      description: 'Our time on Earth has come to an end, a team of researchers takes on the most ' +
        'important mission in the history of mankind; traveling outside our galaxy to find out if ' +
        'mankind has a future among the stars.'
    },
  ];

  constructor() {
  }

  public get() {
    return this.films;
  }
}
