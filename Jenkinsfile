pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/dulajsaranga/booking-managment.git'
            }
        }
        stage('Docker build and push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub_id') {
                        bat "docker build -t dulajsaranga/booking-managment-backend:1.0 ."
                        bat "docker push dulajsaranga/booking-managment-backend:1.0"
                    }
                }
            }
        }
    }
}