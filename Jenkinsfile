pipeline {
    agent any

    stages {
        stage('Run Cypress Tests') {
            agent {
                docker {
                    image 'notmynameab/cypress_test:latest' // Replace with your public Docker image
                    args '-v $WORKSPACE:/app'
                }
            }
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            }
        }
    }
}