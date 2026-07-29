---
title: "Why I bought a NAS"
description: "A Plex project that began in 2022, became a dependable photo archive, and finally found its way back to the original plan."
published: 2026-07-29
tags:
  - NAS
  - plex
  - homelab
  - self-hosting
draft: false
---

I bought my NAS in July 2022 with a fairly specific goal: I wanted to build a
Plex server.

The idea was bigger than simply storing a few movies. I wanted Plex to be the
front end, with Radarr and Sonarr helping to organize the media library behind
it. It seemed like a good project—useful enough to justify the hardware, but
complicated enough that I would learn something while putting it together.

At least, that was the plan.

## The project I imagined

What appealed to me was the idea of having one system that I understood and
controlled. My media would live in one place, Plex would make it easy to browse,
and the supporting tools would handle much of the repetitive organization.

There were several pieces to learn:

- How the NAS stored and shared files
- How Plex expected a media library to be arranged
- How Radarr and Sonarr fitted into the workflow
- How the services would communicate with one another
- How to keep the whole setup reliable

It felt like the right kind of home server project. It had a real purpose and a
clear result I could work toward.

## What actually happened

I did not get very far.

The NAS worked, but the larger Plex setup never became the system I had
pictured. I could not get Plex's remote services working properly, and I never
managed to set up the Radarr and Sonarr automation. There were enough unfamiliar
parts that progress slowed down, and other priorities took over. The hardware
stayed in use, but the original project gradually faded into the background.

Instead, the NAS became something simpler and arguably more important: a place
for photos and backups.

That was still valuable. A dependable repository for personal files is not a
failed use of a NAS. It gave the machine a practical job and meant the purchase
was never wasted. But whenever I thought about it, I knew there was still a gap
between what I had bought it to do and what I had managed to build.

## Why the original idea stalled

Looking back, the problem was not a lack of interest. The project was difficult
to break into manageable decisions.

Each part raised another question. Where should a service run? How should the
folders be organized? Which permissions did it need? How should the applications
find one another? Why was remote access not behaving as expected? How could the
automation be made reliable? What would happen after an update or a restart?

Finding an isolated command was easy. Understanding how all the commands formed
a reliable system was harder.

Without a clear path through those decisions, it was easy to postpone the next
step. The NAS continued storing files, while the more ambitious plan remained a
project for later.

## Picking it up again with Codex

Codex has helped me return to the goal I had in 2022.

The most useful part has not been receiving one magic command. It has been the
ability to take a broad goal—“build the Plex server I originally wanted”—and
turn it into smaller, concrete pieces. I can examine the current state, work
through one decision at a time, document what changes, and test whether each
part actually works.

That makes the project feel approachable in a way it did not before.

It also helps me understand the work rather than merely copy a finished setup.
When something fails, I can investigate why. When there are several reasonable
options, I can compare the tradeoffs. When I return after a break, the notes and
configuration provide a path back into the project.

The NAS has not suddenly become a finished media server. There is still work to
do, and I expect some of the original assumptions to change as I go. But the
goal is no longer just an idea left over from 2022. It is an active project
again.

## From storage box to home server

The years spent storing photos and backups were not wasted time. They established
the NAS as a useful and dependable part of my setup. Now I can build on that
foundation more deliberately.

This time, I want to record the journey: the choices, the configuration, the
mistakes, and the reasons behind each change. The next step is to map the system
I have today and define what the Plex, Radarr, and Sonarr setup should look like
before installing more software.

That is where the original project begins again.
