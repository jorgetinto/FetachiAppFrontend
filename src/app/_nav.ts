import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
   {
    name: 'Examinar',
    url: '/examinar',
    icon: 'icon-user'
  },
  {
      divider: true
    },
  {
    name: 'Mantenedores',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Escuelas',
        url: '/mantenedores/escuela',
        icon: 'icon-graduation'
      },
      {
        name: 'Usuarios',
        url: '/mantenedores/usuario',
        icon: 'icon-people'
      },
      {
        name: 'Examenes',
        url: '/mantenedores/examen',
        icon: 'icon-list'
      },
    ]
  },
];
