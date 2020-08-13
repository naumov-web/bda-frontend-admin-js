 
const menuItems = [
    {
      link: '/login',
      title: 'Авторизация',
      visible: 'public'
    },
    {
      link: '/raw-data',
      title: 'Собранные данные',
      visible: 'protected'
    },
    {
      link: '/handbook/data-sources',
      title: 'Справочники',
      visible: 'protected'
    },
    {
      link: '/profile',
      title: 'Настройки пользователя',
      visible: 'protected'
    },
    {
      link: '/logout',
      title: 'Выйти',
      visible: 'protected'
    }
  ];
  
  export const getPublicMenuItems = () => {
    return menuItems.filter(item => item.visible === 'public');
  };
  
  export const getProtectedMenuItems = () => {
    return menuItems.filter(item => item.visible === 'protected');
  };

export const handbookMenuItems = [
  {
    link: 'data-sources',
    title: 'Источники данных'
  },
  {
    link: 'products',
    title: 'Товары'
  },
];