if [ ! -d "docs/" ]; then
  echo "build docs, firstly [npm run doc]"
  exit 0
fi

export TRAVIS_COMMIT_MSG="[deploy] $(git log --format='%h - %B' --no-merges -n 1)"
mkdir temp_web

git clone --depth 1 -b gh-pages --single-branch git@github.com:icai/vue2-calendar.git temp_web

cp -rf docs/**  temp_web/

cd temp_web
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin gh-pages
cd ..
rm -rf temp_web/
