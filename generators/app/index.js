const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    welcome() {
        this.log('Welcome to the gulp and sass generator!')
    }

    writing() {
        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );
        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('package.json'),
            this.destinationPath('package.json')
        );
        this.fs.copy(
            this.templatePath('package-lock.json'),
            this.destinationPath('package-lock.json')
        );
        this.fs.copy(this.templatePath('frontend'), this.destinationPath('frontend'))
    }

    end() {
        this.log(' ')
        this.log('All done :)');
    }
}