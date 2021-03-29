CD
    Continuous delivery is the automation that pushes applications to delivery environments
CI
    Continuous Integration is a coding philosophy and set of practices that drive development teams to implement small changes and check in code to version control repositories frequently
guide: https://www.youtube.com/watch?v=S_MsrPMb0js&list=PLjCpH2Qpki-vDvSxypCxOgfjuVHaXxcaa&index=13
    build project php
    test project php wih phpunit
Jenkins home
    New Item
        enter an item name
            name=web1-php-build
            project type=Freestyle project
                general
                    source code management
                        Git
                            Repository url
                                ex: https://github.com/datagit/devops_tutorial_notes.git
                            Credentials:
                                username/password for authticated with github.com
                Build
                    for build this project
                    execute shell
                        ex:
                            ssh -T -i /home/jenkins/key.pem www-user@35.180.74.8 << EOF
                            cd /var/www/html/tinhocthatladongian
                            git pull origin master
                            EOF
                Post-build Action
                    for build another project
