pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cypress-tests'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    sh 'docker run --rm ${DOCKER_IMAGE}'
                }
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            }
        }
    }
}