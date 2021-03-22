#! /bin/bash

rm -rf ~/sources/juliannicholls.github.io/countdown/*
cp -rv ~/sources/Countdown-Node/build/* ~/sources/juliannicholls.github.io/countdown

read -p "Check in new Really Big Shoe? [Y/n] " go
if [ -z "$go" -o "$go" = "y" -o "$go" = "Y" ]; then
  cd ~/sources/juliannicholls.github.io
  git add -A
  git commit -m "Latest Countdown $DATE"
fi

read -p "Push Really Big Shoe? [Y/n] " go
if [ -z "$go" -o "$go" = "y" -o "$go" = "Y" ]; then
  cd ~/sources/juliannicholls.github.io
  git push
fi
