casperjs test tests/maintest.js  --fw="$1"  | grep -v "Unsafe JavaScript" |tee test.log

echo "SEND:"

#LOG="$(cat test.log|awk '/./{line=$0} END{print line}')"
LOG="$(cat test.log)"
#LOG="$(printf "$LOG"| grep 'PERF\|INFO\|PASS')"
LOG="$(printf "$LOG"| grep 'INFO\|PASS')"
LOG="$(printf "$LOG"| tr -d '[:cntrl:]')"


LOG=${LOG//[32;1m/' '}
LOG=${LOG//[0m/' '}
LOG=${LOG//37;42;1m/' '}
LOG=${LOG//PERF/'\n'PERF}
LOG=${LOG//INFO/'\n'INFO}
LOG=${LOG//PASS/'\n'PASS}


printf "$LOG\ntest"


[ "$2" = "send" ] && curl -X POST --data-urlencode 'payload={"channel": "#todo_test", "username": "jimmy_the_checker", "text": "'"$LOG"'", "icon_emoji": ":guardsman:"}' https://hooks.slack.com/services/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