---
title: "Apple TV 4K playback with Plex and Infuse"
description: "Why I use Infuse Pro for MKV playback, prefer Direct Play, and avoid making the NUC transcode unnecessarily."
published: 2026-07-30
tags:
  - plex
  - apple-tv
  - infuse
  - homelab
draft: false
---

Building the Plex server was only half of the project. The other half was
making sure the playback device could handle my existing media without turning
the NUC into a real-time video conversion machine.

My main television uses an Apple TV 4K, and most of my current media is stored
in MKV containers. That combination led me to Infuse Pro and a preference for
Direct Play.

## Why MKV needed another player

As of July 2026, Apple's
[Apple TV 4K technical specifications](https://www.apple.com/apple-tv-4k/specs/)
list `.m4v`, `.mp4`, and `.mov` containers for native playback, but not `.mkv`.

MKV is a **container**, not a video codec. It is the outer file that can hold a
video track, one or more audio tracks, subtitles, chapters, and metadata. The
Apple TV hardware may be able to decode the H.264 or HEVC video inside a file
while Apple's native playback stack still does not accept that file's MKV
container.

I bought [Infuse Pro](https://firecore.com/infuse) for the Apple TV because it
can connect to Plex and play MKV files along with a much wider range of video,
audio, and subtitle formats. Infuse supplies the playback support that is
missing from the native stack.

## One purchase across my Apple devices

The Infuse Pro purchase carries over to my other supported Apple devices
through the same App Store account. I can use the Pro features on my Apple TV,
iPhone, iPad, and Mac without buying the app separately for each device.

With iCloud Sync enabled under the same Apple Account, Infuse also synchronizes
library details such as lists, watched history, and ratings. The media itself
still streams from Plex; iCloud is synchronizing the library experience, not
copying the video files between devices.

Infuse also supports Apple's Family Sharing for eligible purchases and
subscriptions. That is separate from simply using my own purchase on my own
devices.

## Direct Play, Direct Stream, and transcoding

Plex can deliver a file in three main ways. The names sound similar, but the
load they place on the server is very different.

| Playback mode | What Plex does | NUC workload |
| --- | --- | --- |
| Direct Play | Sends the original file unchanged | Very low |
| Direct Stream | Repackages compatible tracks into another container | Low |
| Transcode | Converts incompatible video, audio, resolution, bitrate, or subtitles | Potentially high |

### Direct Play

With **Direct Play**, Plex sends the original file to the playback device
without changing its container, video, or audio. Infuse does the playback work
on the Apple TV, leaving the NUC mostly responsible for reading the file from
the NAS and sending it over the network.

This is my preferred path. It preserves the original quality and prevents
video conversion from competing with the other services running on the NUC.

### Direct Stream

With **Direct Stream**, the video and audio tracks are already compatible, but
the container is not. Plex extracts those tracks and repackages them into a
container the player accepts. The video is not re-encoded, so this uses little
processing power and does not reduce picture quality.

Direct Stream is still a good result, but Infuse's MKV support makes Direct
Play possible for more of my library.

### Transcoding

**Transcoding** means Plex converts some or all of a media file while it is
being watched. That can include:

- Changing an unsupported video or audio codec.
- Reducing a 4K video to 1080p.
- Lowering the bitrate for a slower network connection.
- Converting HDR for a display that expects SDR.
- Burning incompatible subtitles directly into the picture.

Full video transcoding requires the server to decode the source and encode a
new version in real time. That can consume substantial CPU or GPU resources.
Several simultaneous transcodes can make the NUC the bottleneck and cause slow
starts or buffering.

Plex Pass can enable supported hardware-accelerated transcoding, which shifts
much of that work to the NUC's media engine. It is a useful fallback, but my
first choice is still to avoid the conversion entirely through Direct Play.

## How I encourage Direct Play

My playback checklist is:

1. Set local streaming quality to **Original** or the highest available value.
2. Leave Direct Play and Direct Stream enabled.
3. Use Infuse for its MKV, audio, and subtitle support.
4. Keep the Apple TV and Plex server on a fast local network.
5. Select audio and subtitle tracks the player can handle directly.
6. Check the Plex dashboard while a title is playing.

The Plex dashboard shows whether the session is using Direct Play, Direct
Stream, or Transcode. I check it with a few representative files: a 4K movie,
an HDR title, surround audio, text subtitles, and image-based subtitles.

Subtitles deserve special attention. Even when the video and audio are
compatible, an unsupported subtitle format can force Plex to burn the text or
images into every video frame. That turns an otherwise direct-playing file into
a full video transcode.

## The result

The final playback path is straightforward:

```mermaid
flowchart LR
  NAS -->|MKV over wired network| NUC[Plex on the NUC]
  NUC -->|Original file| Infuse[Infuse on Apple TV 4K]
  Infuse --> TV
```

The NAS stores the file, Plex organizes the library, and Infuse handles
playback on the Apple TV. Direct Play keeps the file unchanged and prevents
transcoding from bottlenecking the NUC.

The server installation is documented in
[Docker and Plex on the NUC](../setting-up-docker-and-plex/).
