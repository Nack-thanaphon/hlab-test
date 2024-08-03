default: helm-push

HARBOR_USERNAME ?= robot-k0s-cluster
HARBOR_PASSWORD ?= $(shell bash -c 'read -s -p "Registry Password: " pwd; echo $$pwd')
CLUSTER_NAME ?= rke2-uat
CLUSTER_USER ?= rke2-uat

# Helm variables
HELM_NAMESPACE ?= hlab

HELM_CHART_DIR ?= ./hlab
HELM_CHART_NAME ?= hlab-api
HELM_REGISTRY ?= oci:https://hub.docker.com/repository/docker/devnack/hlab-api
HELM_VERSION ?= 1.0.0
HELM_RELEASE_NAME ?= $(HELM_NAMESPACE)
HELM_VALUES_FILE ?= ./hlab-api/values.yaml

@PHONY: testenv
testenv:
	@echo "$(HELM_NAMESPACE)"
	@echo "$(HELM_RELEASE_NAME)"
	@echo "$(HELM_VALUES_FILE)"


.PHONY: init
init: create-context cp-habor-secret
	helm repo add mongodb https://mongodb.github.io/helm-charts

.PHONY: create_namespace
create-namespace:
	kubectl get namespace $(HELM_NAMESPACE) >/dev/null 2>&1 || kubectl create namespace $(HELM_NAMESPACE)

.PHONY: create-context
create-context: create-namespace
	kubectl config set-context $(HELM_NAMESPACE) --namespace=$(HELM_NAMESPACE) \
	--cluster=$(CLUSTER_NAME) \
	--user=$(CLUSTER_USER)

	kubectl config use-context $(HELM_NAMESPACE)
