pipeline {
    agent {
        docker {
            image 'cypress-tests'
            args '-v $WORKSPACE:/app'
        }
    }

    stages {
        stage('Run Cypress Tests') {
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