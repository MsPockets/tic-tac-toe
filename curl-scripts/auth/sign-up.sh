<<<<<<< HEAD
curl "https://mspockets.github.io/tic-tac-toe/" \
=======
curl "https://mspockets.github.io/tic-tac-toe" \
>>>>>>> auth-setup
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