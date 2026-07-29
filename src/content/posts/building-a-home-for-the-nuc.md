---
title: "Building a home for the NUC"
description: "The decisions behind turning a small second-hand computer into a quiet, dependable home server."
published: 2026-07-29
tags:
  - nuc-server
  - homelab
  - self-hosting
draft: false
---

The NUC started as an answer to a small question: **how much server do I
actually need at home?** I wanted something quiet enough to live near a desk,
efficient enough to leave on, and ordinary enough that replacing a part would
not become a research project.

This is the baseline—the machine, the operating assumptions, and the first
version of the plan.

## The brief

Before choosing software, I wrote down what “working” meant:

| Requirement | Target |
| --- | --- |
| Noise | Inaudible from the next room |
| Power | Sensible for 24/7 use |
| Recovery | Rebuildable from notes and backups |
| Access | Secure from home and away |
| Complexity | No cluster until one machine proves insufficient |

That last line matters. A homelab can become an elaborate way to avoid using the
services it was meant to run.

## First inspection

The machine arrived with an unknown history, so I treated the installed system
as temporary. The first useful inventory was deliberately boring:

```bash
lscpu
lsblk --fs
ip -brief address
sudo smartctl --all /dev/nvme0
```

I recorded the firmware version, memory layout, storage health, and network
interface name before changing anything. Those details are easy to recover
today and surprisingly annoying to reconstruct six months later.

## The shape of the system

The first version uses one host, a small set of containers, and storage that can
be backed up without understanding the applications individually.

```mermaid
flowchart LR
  Internet --> Router
  Router --> NUC
  NUC --> Proxy[Reverse proxy]
  Proxy --> Apps[Container services]
  Apps --> Data[(Application data)]
  Data --> Backup[(External backup)]
```

The diagram is intentionally unimpressive. Every extra box creates another
failure mode and another thing that needs an update.

## What I am optimizing for

I am not trying to reproduce a data center. The goal is a small system whose
failure I can understand on a tired evening:

1. Configuration belongs in version control.
2. Application data has an explicit backup path.
3. Remote access does not require exposing every service.
4. Updates happen deliberately, with a way back.
5. The written recovery process is part of the system.

## Next

The next note will cover the base operating system and the choices that make a
rebuild predictable. After that: container layout, remote access, backups, and
the mistakes that inevitably revise this plan.
