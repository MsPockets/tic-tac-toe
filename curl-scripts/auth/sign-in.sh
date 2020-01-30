curl "https://mspockets.github.io/tic-tac-toe/" \
  --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
        }
      }'

echo