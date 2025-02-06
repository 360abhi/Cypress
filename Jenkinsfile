pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t cypress-tests .'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    sh 'docker run --rm cypress-tests'
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