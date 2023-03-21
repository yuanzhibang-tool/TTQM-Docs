> This section describes how to use the replay feature.

!>Deleting the client or clearing the message history will clear the recorded messages, please be careful.

1. Click to start record messages

2. Stop Recording, and input some information

3. The Records will be saved in the list

4. Open the Replay window

5. Stop and start

6. Drag to set progress (only works when stopped)

7. Speed up and change the replay mode

8. Filter messages

> You can filter the messages via `filter` in Replay Script

9. Processing messages before replay

> Add the current time at the root node of JSON message, or adding test property to mark that this message is for testing and more.

!>Do not use functions such as `setTimeout` and `setInterval` in Replay Script, we cannot stop it before updating the Replay Script, it may cause unexpected problems.

_DEMO_

[ReplayScriptDemo](../../common/replay/demo-script.md ':include')

!>For more about Replay Script, please refer to [Replay>Script](en/replay/script.md)
