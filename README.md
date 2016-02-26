# SoundCamp-4Slack
Chrome extension - Adds sounds for Slack!

This is just a really rough first-pass at sticking sound capability into Slack. There are bugs, it doesn't quite work:

- I can't figure out how to hook into Slack's "send the message" keydown enter key event. I feel stupid but wow, I cannot trigger it.
- Need a much better way to track messages coming in-- right now sounds re-play when switching channels, etc. -- and there is a dirty hack to stop sounds from playing on startup.
