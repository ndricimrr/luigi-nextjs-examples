Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/home',
        children: [
          {
            pathSegment: 'next',
            label: 'Next JS',
            icon: 'nutrition-activity',
            viewUrl: '/sample1'
          },
          {
            pathSegment: 'react',
            label: 'React',
            icon: 'palette',
            viewUrl: 'http://localhost:5001/main-page',
            loadingIndicator: {
              enabled: false,
            },
            children: [
              {
                pathSegment: 'order',
                label: 'Order',
                icon: '',
                viewUrl: 'http://localhost:5001/order',
                virtualTree: true,
              }
            ]
          },
          {
            pathSegment: 'angular',
            label: 'Angular',
            icon: 'role',
            viewUrl: 'http://localhost:4200/',
            loadingIndicator: {
              enabled: false,
            }
          },
          {
            pathSegment: 'vue',
            label: 'Vue JS',
            icon: 'radar-chart',
            viewUrl: 'http://localhost:8080/',
            loadingIndicator: {
              enabled: false,
            }
          },
        ]
      }
    ]
  },
  routing: {
    useHashRouting: false
  },
  settings: {
    header: {
      title: 'Luigi Nextjs',
      favicon: '/favicon.ico'
    },
    responsiveNavigation: 'simpleMobileOnly',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});
