https://www.youtube.com/watch?v=v-AVR0UoB-c&list=PLS1QulWo1RIbY8xXPqz6ad_sNHkIP3IXI&index=12
  Jenkins Tutorial For Beginners 10 - Using the Role-Based Authorization Strategy + Manage Roles

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
https://www.youtube.com/watch?v=NlwR_FEsE0A
  jenkins node slave
    build one node slave
https://learn.acloud.guru/handson/49f130ca-6b03-4713-820d-763d62942bfd/course/10af241a-b917-484a-ae33-a988dc2434f7
  jenkins and github
    github
      repository: https://github.com/datagit/cicd-pipeline-train-schedule-jenkins
      generate personal access token: https://github.com/settings/tokens
        admin:repo_hook
    jenkins
      configure: http://34.239.93.82:8080/configure
        https://api.github.com
          secret text
            input github_token
      create a freestyleProject
        build trigger
          GitHub hook trigger for GITScm polling