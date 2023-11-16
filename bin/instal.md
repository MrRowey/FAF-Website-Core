setting up local enviroment

get the latest ruby development kit from rubyinstaller.org
https://rubyinstaller.org/downloads/

install the dev kit

clone the repo

run the following commands in the repo directory

npm install --global yarn
gem install jekyll bundler
bundle
yarn add postcss@latest postcss-cli@latest tailwindcss@latest autoprefixer@latest cssnano@latest -D
bundle


to run the local server run the following command

bundle exec jekyll serve --livereload