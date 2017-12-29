export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'modules',
        data: {
          menu: {
            title: 'general.menu.modules',
            icon: 'fa fa-list',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'contacts',
            data: {
              menu: {
                title: 'general.menu.contacts',
                icon: 'fa fa-address-book',
                selected: false,
                expanded: false,
                order: 100,
              }
            }
          },
          {
            path: 'costing',
            data: {
              menu: {
                title: 'general.menu.costing',
                icon: 'fa fa-usd',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'forecasting',
            data: {
              menu: {
                title: 'general.menu.forecasting',
                icon: 'fa fa-line-chart',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'invoices',
            data: {
              menu: {
                title: 'general.menu.invoices',
                icon: 'fa fa-list-alt',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'jobs',
            data: {
              menu: {
                title: 'general.menu.jobs',
                icon: 'fa fa-briefcase',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'managerial_tasks',
            data: {
              menu: {
                title: 'general.menu.managerial_tasks',
                icon: 'fa fa-tasks',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'parts',
            data: {
              menu: {
                title: 'general.menu.parts',
                icon: 'fa fa-cogs',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'projects',
            data: {
              menu: {
                title: 'general.menu.projects',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'purchase_orders',
            data: {
              menu: {
                title: 'general.menu.purchase_orders',
                icon: 'fa fa-shopping-cart',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'quotes',
            data: {
              menu: {
                title: 'general.menu.quotes',
                icon: 'fa fa-file-o',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'subcontract_orders',
            data: {
              menu: {
                title: 'general.menu.subcontract_orders',
                icon: 'fa fa-shopping-bag',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'timecards',
            data: {
              menu: {
                title: 'general.menu.timecards',
                icon: 'fa fa-calendar',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
          {
            path: 'my_employee_page',
            data: {
              menu: {
                title: 'general.menu.my_employee_page',
                icon: 'fa fa-users',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
        ]
      },
      
      {
        path: 'neonet_doc',
        data: {
          menu: {
            title: 'general.menu.neonet_doc',
            icon: 'fa fa-book',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'project_overview',
            data: {
              menu: {
                title: 'general.menu.project_overview',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 250,
              }
            }
          },
        ]
      },

      {
        path: 'test',
        data: {
          menu: {
            title: 'general.menu.neonet_Test',
            icon: 'fa fa-book',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
      },
      
    ]
  }
];
