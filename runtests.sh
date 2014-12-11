casperjs test tests/maintest.js  --fw="$1"  | grep -v "Unsafe JavaScript" |tee test.log


LOG="$(cat test.log|awk '/./{line=$0} END{print line}')"
LOG="$(echo $LOG| tr -d '[:cntrl:]' |tr -d '[37;42;1m')"
#curl -X POST --data-urlencode 'payload={"channel": "#todo_test", "username": "jimmy_the_checker", "text": "'"$LOG"'", "icon_emoji": ":guardsman:"}' https://hooks.slack.com/services/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