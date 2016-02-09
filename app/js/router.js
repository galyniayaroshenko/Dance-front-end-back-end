angular.module('app')
.config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('base', {

      url: '',
      views: {
        '@': {
          templateUrl: 'templates/startPage/layout.html'
        },
        'header@base': {
          templateUrl: 'templates/startPage/header.html',
          controller: 'ProfileController'
          // controller: 'headerController'
        }
      }
    })
    .state('base.index', {
      url: '/',
      views: {
        'main@base': {
          templateUrl: 'templates/startPage/music.html',
          controller: 'MMusicListController'
        }
      }
    })
    .state('base.viewMusic', {
      url: '/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/music-view.html',
          controller: 'MusicViewController'
        }
      }
    })
    .state('base.newMusic', {
      url: '/new',
      views: {
        'main@base': {
          templateUrl: 'templates/music-add.html',
          controller: 'MusicCreateController'
        }
      }
    })
    .state('base.editMusic', {
      url: '/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/music-edit.html',
          controller: 'MusicEditController'
        }
      }
    })


    .state('base.peopleEffort', {
      url: '/peopleEffort',
      views: {
        'main@base': {
          templateUrl: 'templates/peopleEffort.html',
          controller: 'PeopleEffortListController'
        }
      }
    })
    .state('base.viewPeopleEffort', {
      url: '/peopleEffort/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/peopleEffort-view.html',
          controller: 'PeopleEffortViewController'
        }
      }
    })
    .state('base.newPeopleEffort', {
      url: '/peopleEffort/new',
      views: {
        'main@base': {
          templateUrl: 'templates/peopleEffort-add.html',
          controller: 'PeopleEffortCreateController'
        }
      }
    })
    .state('base.editPeopleEffort', {
      url: '/peopleEffort/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/peopleEffort-edit.html',
          controller: 'PeopleEffortEditController'
        }
      }
    })


    .state('base.video', {
      url: '/video',
      views: {
        'main@base': {
          templateUrl: 'templates/video.html',
          controller: 'VideoListController'
        }
      }
    })
    .state('base.viewVideo', {
      url: '/performer/:id/video',
      views: {
        'main@base': {
          templateUrl: 'templates/video-view.html',
          controller: 'VideoViewController'
        }
      }
    })
    .state('base.newVideo', {
      url: '/video/new',
      views: {
        'main@base': {
          templateUrl: 'templates/video-add.html',
          controller: 'VideoCreateController'
        }
      }
    })
    .state('base.editVideo', {
      url: '/video/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/video-edit.html',
          controller: 'VideoEditController'
        }
      }
    })


    .state('base.img', {
      url: '/img',
      views: {
        'main@base': {
          templateUrl: 'templates/img.html',
          controller: 'ImgListController'
        }
      }
    })
    .state('base.viewImg', {
      url: '/img/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/img-view.html',
          controller: 'ImgViewController'
        }
      }
    })
    .state('base.newImg', {
      url: '/img/new',
      views: {
        'main@base': {
          templateUrl: 'templates/img-add.html',
          controller: 'ImgCreateController'
        }
      }
    })
    .state('base.editImg', {
      url: '/img/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/img-edit.html',
          controller: 'ImgEditController'
        }
      }
    })

    .state('base.profile', {
      url: '/profile/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController'
        }
      }
    })
    .state('base.newProfile', {
      url: '/profile/new',
      views: {
        'main@base': {
          templateUrl: 'templates/profile-new.html',
          controller: 'ProfileCreateController'
        }
      }
    })
    .state('base.editProfile', {
      url: '/profile/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/profile-edit.html',
          controller: 'ProfileEditController'
        }
      }
    })
    .state('base.viewAllProfile', {
      url: '/profile/viewAll',
      views: {
        'main@base': {
          templateUrl: 'templates/profile-view-all.html',
          controller: 'ProfileViewAllController'
        }
      }
    })
    .state('base.aboutUs', {
      url: '/aboutUs',
      views: {
        'main@base': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'AboutUsListController'
        }
      }
    })
    .state('base.newAboutUs', {
      url: '/aboutUs/new',
      views: {
        'main@base': {
          templateUrl: 'templates/aboutUs-add.html',
          controller: 'AboutUsCreateController'
        }
      }
    })
    .state('base.editAboutUs', {
      url: '/aboutUs/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/aboutUs-edit.html',
          controller: 'AboutUsEditController'
        }
      }
    })
    .state('base.viewAboutUs', {
      url: '/aboutUs/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/aboutUs-view.html',
          controller: 'AboutUsViewController'
        }
      }
    })
    .state('base.news', {
      url: '/news',
      views: {
        'main@base': {
          templateUrl: 'templates/news.html',
          controller: 'NewsListController'
        }
      }
    })
    .state('base.newNews', {
      url: '/news/new',
      views: {
        'main@base': {
          templateUrl: 'templates/news-add.html',
          controller: 'NewsCreateController'
        }
      }
    })
    .state('base.editNews', {
      url: '/news/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/news-edit.html',
          controller: 'NewsEditController'
        }
      }
    })
    .state('base.viewNews', {
      url: '/news/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/news-view.html',
          controller: 'NewsViewController'
        }
      }
    })
    .state('base.contact', {
      url: '/contact',
      views: {
        'main@base': {
          templateUrl: 'templates/contact.html',
          controller: 'ContactListController'
        }
      }
    })
    .state('base.newContact', {
      url: '/contact/new',
      views: {
        'main@base': {
          templateUrl: 'templates/contact-add.html',
          controller: 'ContactCreateController'
        }
      }
    })
    .state('base.editContact', {
      url: '/contact/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/contact-edit.html',
          controller: 'ContactEditController'
        }
      }
    })
    .state('base.viewContact', {
      url: '/contact/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/contact-view.html',
          controller: 'ContactViewController'
        }
      }
    })



    .state('base.category', {
      url: '/category',
      views: {
        'main@base': {
          templateUrl: 'templates/category.html',
          controller: 'CategoryListController'
        }
      }
    })
    .state('base.newCategory', {
      url: '/category/new',
      views: {
        'main@base': {
          templateUrl: 'templates/category-add.html',
          controller: 'CategoryCreateController'
        }
      }
    })
    .state('base.editCategory', {
      url: '/category/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/category-edit.html',
          controller: 'CategoryEditController'
        }
      }
    })
    .state('base.viewCategory', {
      url: '/category/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/category-view.html',
          controller: 'CategoryViewController'
        }
      }
    })


    .state('base.year', {
      url: '/year',
      views: {
        'main@base': {
          templateUrl: 'templates/year.html',
          controller: 'YearListController'
        }
      }
    })
    .state('base.newYear', {
      url: '/year/new',
      views: {
        'main@base': {
          templateUrl: 'templates/year-add.html',
          controller: 'YearCreateController'
        }
      }
    })
    .state('base.editYear', {
      url: '/year/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/year-edit.html',
          controller: 'YearEditController'
        }
      }
    })
    .state('base.viewYear', {
      url: '/year/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/year-view.html',
          controller: 'YearViewController'
        }
      }
    })


    .state('acount', {
      url: '/acount',
      views: {
        '@': {
          templateUrl: 'templates/startPage/anonymous.html'
        },
      }
    })


    // .state('acount.signup', {
    //   url: '/signup/new',
    //   views: {
    //     'content@acount': {
    //       templateUrl: 'templates/signup.html',
    //       controller: 'signupController'
    //
    //     }
    //   }
    // })
    .state('acount.signin', {
      url: '/signin',
      views: {
        'content@acount': {
          templateUrl: 'templates/signin.html',
          controller: 'signinController'

        }
      }
    })








    $urlRouterProvider.otherwise('/acount/signin');
  }]);
