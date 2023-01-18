sudo docker compose down
sudo docker volume rm $(sudo docker volume ls -q)
sudo docker compose up