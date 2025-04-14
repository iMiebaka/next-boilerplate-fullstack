
# Default target
all: build up

# Build the Docker images
build:
	docker compose -f docker-compose.dev.yml --build

up:
	docker compose -f docker-compose.dev.yml up -d

# Stop and remove the containers
down:
	docker-compose down

# View container logs
logs:
	docker compose -f docker-compose.dev.yml logs -f

# List running containers
ps:
	docker compose -f docker-compose.dev.yml ps

# Clean up all containers, networks, and images
clean:
	docker-compose down --rmi all --volumes --remove-orphans

prisma-init:
	docker exec -it next_boilerplate_app npx prisma init --datasource-provider postgresql --output ../generated/prisma

prisma-migrate:
	docker exec -it next_boilerplate_app npx prisma migrate dev --name init
