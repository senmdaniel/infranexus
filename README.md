# InfraNexus

InfraNexus is a vendor-agnostic smart building infrastructure platform that unifies SIP communication, device control, and automation into a single event-driven system.

It enables scalable, GitOps-based deployment of intercom, access control, and building automation across multiple customer sites.

---

## 🧠 Core Concept

InfraNexus is built around a simple idea:

> Everything is a device. Everything is an event.

All system components are abstracted into a unified model where:

- Devices generate events (calls, button presses, sensors)
- Events flow through a central event bus
- Actions are executed across connected systems

This removes vendor lock-in and enables a fully programmable building infrastructure layer.

---



+-----------------------------+
| Devices |
| - 2N Intercom |
| - SIP Phones |
| - Tablets |
| - Loxone IO |
+-------------+-------------+
|
v
+-----------------------------+
| SIP / Driver Layer |
| (Asterisk + Adapters) |
+-------------+-------------+
|
v
+-----------------------------+
| Event Bus Core |
| (InfraNexus Engine) |
+-------------+-------------+
|
v
+-----------------------------+
| Automation Layer |
| - Rules Engine |
| - Event Processing |
+-------------+-------------+
|
v
+-----------------------------+
| Integrations |
| - Home Assistant |
| - Loxone |
| - APIs / Dashboards |
+-----------------------------+






---

## 🔌 Supported Systems (Initial Scope)

InfraNexus is designed to integrate with:

- SIP-based communication systems (Asterisk)
- IP intercom systems (e.g. 2N)
- IP phones and softphones
- Smart building platforms (Loxone)
- Home automation systems (Home Assistant)

---

## 📡 Event Model

All system activity is represented as structured events:

```json
{
  "id": "evt_001",
  "type": "call.incoming",
  "source": "2n.frontdoor",
  "tenant": "demo",
  "timestamp": 1710000000,
  "payload": {
    "from": "frontdoor",
    "to": "101"
  }
}



🚀 Current Status

InfraNexus is in early development.

Implemented (MVP core)
Event bus (TypeScript)
Device abstraction layer
Driver interface system
Basic CLI event simulation
In progress
SIP integration layer (Asterisk bridge)
MQTT event backbone
Home Assistant integration
2N intercom driver
Loxone automation bridge
Multi-tenant provisioning system
🔧 Technology Stack
TypeScript (core system)
Node.js (services & CLI)
Asterisk (SIP communication layer)
MQTT (event transport)
Docker (deployment infrastructure)
GitHub (configuration + CI/CD)
🧪 Development Goal

The goal of InfraNexus is to evolve into a full smart building operating system that can be deployed per customer site with zero manual configuration.

Each deployment is fully defined through code and version-controlled via Git.

🌍 Vision

InfraNexus aims to become the universal infrastructure layer for smart buildings.

It replaces fragmented vendor ecosystems with a single programmable platform for:

Communication (SIP / intercom)
Access control
Building automation
Device orchestration
📌 Status

🚧 Work in progress — active platform development phase

This is not a finished product. It is a foundation for a scalable infrastructure system.


---

# 🚀 Wat nu?

Als je dit erin zet heb je meteen:

- een professionele product README
- duidelijke architectuurvisie
- future SaaS positionering
- dev-ready project basis

---

👉 Volgende logische stap (als jij wil):

Ik kan nu voor je maken:
- `infra CLI (infranexus init / emit / deploy)`
- of eerste echte `event router`
- of MQTT backbone
- of Asterisk integration layer

Zeg gewoon: **“next step”** en we bouwen InfraNexus verder als echt platform.

## ⚙️ System Architecture
