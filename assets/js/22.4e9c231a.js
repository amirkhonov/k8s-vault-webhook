(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{387:function(t,e,v){"use strict";v.r(e);var _=v(45),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),v("p",[t._v("There is not alot of configuration changes requires to deploy K8s Vault Webhook. But the configuration can be customized using "),v("strong",[t._v("Helm")]),t._v(", in that case "),v("a",{attrs:{href:"https://github.com/OT-CONTAINER-KIT/helm-charts/blob/main/charts/k8s-vault-webhook/values.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("values.yaml"),v("OutboundLink")],1),t._v(" can be updated.")]),t._v(" "),v("h2",{attrs:{id:"helm-parameters"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#helm-parameters"}},[t._v("#")]),t._v(" Helm Parameters")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Parameter")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("affinity")]),t._v(" "),v("td",[t._v("affinities to use")]),t._v(" "),v("td",[v("code",[t._v("{}")])])]),t._v(" "),v("tr",[v("td",[t._v("debug")]),t._v(" "),v("td",[t._v("debug logs for webhook")]),t._v(" "),v("td",[v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[t._v("image.pullPolicy")]),t._v(" "),v("td",[t._v("image pull policy")]),t._v(" "),v("td",[v("code",[t._v("IfNotPresent")])])]),t._v(" "),v("tr",[v("td",[t._v("image.repository")]),t._v(" "),v("td",[t._v("image repo that contains the admission server")]),t._v(" "),v("td",[v("code",[t._v("quay.io/opstree/k8s-vault-webhook")])])]),t._v(" "),v("tr",[v("td",[t._v("image.tag")]),t._v(" "),v("td",[t._v("image tag for admission server")]),t._v(" "),v("td",[v("code",[t._v("2.0")])])]),t._v(" "),v("tr",[v("td",[t._v("image.imagePullSecrets")]),t._v(" "),v("td",[t._v("image pull secrets for private repositories")]),t._v(" "),v("td",[v("code",[t._v("[]")])])]),t._v(" "),v("tr",[v("td",[t._v("namespaceSelector")]),t._v(" "),v("td",[t._v("namespace selector to use, will limit webhook scope")]),t._v(" "),v("td",[v("code",[t._v("{}")])])]),t._v(" "),v("tr",[v("td",[t._v("nodeSelector")]),t._v(" "),v("td",[t._v("node selector to use")]),t._v(" "),v("td",[v("code",[t._v("{}")])])]),t._v(" "),v("tr",[v("td",[t._v("podAnnotations")]),t._v(" "),v("td",[t._v("extra annotations to add to pod metadata")]),t._v(" "),v("td",[v("code",[t._v("{}")])])]),t._v(" "),v("tr",[v("td",[t._v("replicaCount")]),t._v(" "),v("td",[t._v("number of replicas")]),t._v(" "),v("td",[v("code",[t._v("2")])])]),t._v(" "),v("tr",[v("td",[t._v("resources")]),t._v(" "),v("td",[t._v("resources to request")]),t._v(" "),v("td",[v("code",[t._v("{}")])])]),t._v(" "),v("tr",[v("td",[t._v("service.externalPort")]),t._v(" "),v("td",[t._v("webhook service external port")]),t._v(" "),v("td",[v("code",[t._v("443")])])]),t._v(" "),v("tr",[v("td",[t._v("service.name")]),t._v(" "),v("td",[t._v("webhook service name")]),t._v(" "),v("td",[v("code",[t._v("k8s-vault-webhook")])])]),t._v(" "),v("tr",[v("td",[t._v("service.type")]),t._v(" "),v("td",[t._v("webhook service type")]),t._v(" "),v("td",[v("code",[t._v("ClusterIP")])])]),t._v(" "),v("tr",[v("td",[t._v("tolerations")]),t._v(" "),v("td",[t._v("tolerations to add")]),t._v(" "),v("td",[v("code",[t._v("[]")])])]),t._v(" "),v("tr",[v("td",[t._v("rbac.enabled")]),t._v(" "),v("td",[t._v("use rbac")]),t._v(" "),v("td",[v("code",[t._v("true")])])]),t._v(" "),v("tr",[v("td",[t._v("rbac.psp.enabled")]),t._v(" "),v("td",[t._v("use pod security policy")]),t._v(" "),v("td",[v("code",[t._v("true")])])]),t._v(" "),v("tr",[v("td",[t._v("env.VAULT_IMAGE")]),t._v(" "),v("td",[t._v("vault image")]),t._v(" "),v("td",[v("code",[t._v("vault:latest")])])]),t._v(" "),v("tr",[v("td",[t._v("env.K8S_SECRET_INJECTOR_IMAGE")]),t._v(" "),v("td",[t._v("vault-env image")]),t._v(" "),v("td",[v("code",[t._v("quay.io/opstree/k8s-secret-injector:2.0")])])]),t._v(" "),v("tr",[v("td",[t._v("volumes")]),t._v(" "),v("td",[t._v("extra volume definitions")]),t._v(" "),v("td",[v("code",[t._v("[]")])])]),t._v(" "),v("tr",[v("td",[t._v("volumeMounts")]),t._v(" "),v("td",[t._v("extra volume mounts")]),t._v(" "),v("td",[v("code",[t._v("[]")])])]),t._v(" "),v("tr",[v("td",[t._v("configMapMutation")]),t._v(" "),v("td",[t._v("enable injecting values from Vault to ConfigMaps")]),t._v(" "),v("td",[v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[t._v("podDisruptionBudget.enabled")]),t._v(" "),v("td",[t._v("enable PodDisruptionBudget")]),t._v(" "),v("td",[v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[t._v("podDisruptionBudget.minAvailable")]),t._v(" "),v("td",[t._v("represents the number of Pods that must be available (integer or percentage)")]),t._v(" "),v("td",[v("code",[t._v("1")])])]),t._v(" "),v("tr",[v("td",[t._v("certificate.generate")]),t._v(" "),v("td",[t._v("should a new CA and TLS certificate be generated for the webhook")]),t._v(" "),v("td",[v("code",[t._v("true")])])]),t._v(" "),v("tr",[v("td",[t._v("certificate.useCertManager")]),t._v(" "),v("td",[t._v("should request cert-manager for getting a new CA and TLS certificate")]),t._v(" "),v("td",[v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[t._v("certificate.ca.crt")]),t._v(" "),v("td",[t._v("Base64 encoded CA certificate")]),t._v(" "),v("td",[t._v("``")])]),t._v(" "),v("tr",[v("td",[t._v("certificate.server.tls.crt")]),t._v(" "),v("td",[t._v("Base64 encoded TLS certificate signed by the CA")]),t._v(" "),v("td",[t._v("``")])]),t._v(" "),v("tr",[v("td",[t._v("certificate.server.tls.key")]),t._v(" "),v("td",[t._v("Base64 encoded  private key of TLS certificate signed by the CA")]),t._v(" "),v("td",[t._v("``")])]),t._v(" "),v("tr",[v("td",[t._v("apiSideEffectValue")]),t._v(" "),v("td",[t._v("Webhook sideEffect value")]),t._v(" "),v("td",[v("code",[t._v("NoneOnDryRun")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);