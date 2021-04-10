https://learn.acloud.guru/course/10af241a-b917-484a-ae33-a988dc2434f7/learn/501159fd-8a25-4c84-a427-0bb3d606ed07/e21ba13b-2ba6-4c2a-9c02-d1b303ecfbb5/watch

  Source Code Management
    checkout to sub-directory
      /var/www/html
        check
          existing directory
          permission
            chown jenkins:jenkins /var/www/html
Schedule build
  https://plugins.jenkins.io/schedule-build
    Configure
      Build periodically
        schedule
          H/15 * * * *
          #Every fifteen minutes (perhaps at :07, :22, :37, :52):