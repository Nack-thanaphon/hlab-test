COMPOSE_ALL_FILES := -f docker-compose.stack.yaml -f docker-compose.yaml

stack:
	docker compose -f docker-compose.stack.yaml  up  -d
dev:
	docker compose -f docker-compose.yaml  up  -d
prod:
	docker compose $(COMPOSE_ALL_FILES)  up -d
