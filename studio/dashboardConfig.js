export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3dc3672d0e6501869d819a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hh86kr72',
                  apiId: 'b565688e-a5fc-4ba3-b0fb-5b26a48a22dd'
                },
                {
                  buildHookId: '5e3dc367d4ba3e361a29bfb9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1ypdaifm',
                  apiId: 'eac9be33-295a-41e8-8dc5-b76452d203af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carl-rasmus/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1ypdaifm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
